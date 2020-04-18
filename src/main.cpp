#include <cstdio>

#include "nlohmann/json.hpp"
#include "tiro/api.h"

#include <cassert>
#include <cstdlib>
#include <memory>
#include <string>
#include <utility>

using json = nlohmann::json;

namespace {

class Module;
class Compiler;
class VM;

class OutputStr final {
public:
    OutputStr() = default;
    ~OutputStr() { reset(); }

    OutputStr(const OutputStr&) = delete;
    OutputStr& operator=(const OutputStr&) = delete;

    std::string_view view() const {
        return str_ ? std::string_view(str_) : std::string_view();
    }

    std::string str() const { return str_ ? std::string(str_) : std::string(); }

    void reset() {
        if (str_) {
            std::free(str_);
            str_ = nullptr;
        }
    }

    char** out() {
        reset();
        return &str_;
    }

private:
    char* str_ = nullptr;
};

class OutputError final {
public:
    OutputError() = default;
    ~OutputError() { reset(); }

    OutputError(const OutputError&) = delete;
    const OutputError& operator=(const OutputError&) = delete;

    const tiro_error* get() const { return error_; }

    void reset() {
        if (error_) {
            tiro_error_free(error_);
            error_ = nullptr;
        }
    }

    tiro_error** out() {
        reset();
        return &error_;
    }

private:
    tiro_error* error_ = nullptr;
};

class OutputModule final {
public:
    OutputModule() = default;
    ~OutputModule() { reset(); }

    OutputModule(const OutputModule&) = delete;
    const OutputModule& operator=(const OutputModule&) = delete;

    Module take();

    void reset() {
        if (module_) {
            tiro_module_free(module_);
            module_ = nullptr;
        }
    }

    tiro_module** out() {
        reset();
        return &module_;
    }

private:
    tiro_module* module_ = nullptr;
};

class VM final {
public:
    VM() = default;

    explicit VM(const tiro_vm_settings& settings)
        : vm_(tiro_vm_new(&settings)) {
        if (!vm_)
            throw std::runtime_error("Failed to initialize tiro vm.");
    }

    explicit operator bool() const { return vm_ != nullptr; }

    operator tiro_vm*() { return vm_.get(); }

private:
    struct Deleter {
        void operator()(tiro_vm* ctx) { tiro_vm_free(ctx); }
    };

    std::unique_ptr<tiro_vm, Deleter> vm_;
};

class Compiler final {
public:
    Compiler() = default;

    explicit Compiler(const tiro_compiler_settings& settings)
        : comp_(tiro_compiler_new(&settings)) {
        if (!comp_)
            throw std::runtime_error("Failed to initialize tiro compiler.");
    }

    explicit operator bool() const { return comp_ != nullptr; }

    operator tiro_compiler*() { return comp_.get(); }

private:
    struct Deleter {
        void operator()(tiro_compiler* comp) { tiro_compiler_free(comp); }
    };

    std::unique_ptr<tiro_compiler, Deleter> comp_;
};

class Module final {
public:
    Module() = default;

    explicit Module(tiro_module* module)
        : module_(module) {}

    explicit operator bool() const { return module_ != nullptr; }

    operator tiro_module*() { return module_.get(); }

private:
    struct Deleter {
        void operator()(tiro_module* module) { tiro_module_free(module); }
    };

    std::unique_ptr<tiro_module, Deleter> module_;
};

/**
 * Exposed to javascript. The caller is expected to call compile()
 * followed by an arbitrary amount of run() calls.
 */
class TiroRuntime {
public:
    TiroRuntime() = default;

    /**
     * Initializes the program with the given options.
     * `options` must be in JSON format and must contain the program's `source` string.
     * The result of the compilation is returned as json as well.
     * 
     * Note that compiling clears the previous compilation results.
     */
    std::string compile(const std::string& options);

    /**
     * Runs the previously compiled program with the given options. 
     * `options` must be in JSON format and must contain `function` (the function name to call).
     * The function's return value will be returned as JSON as well.
     */
    std::string run(const std::string& options);

private:
    struct CompilationResult {
        bool success = false;
        std::string ast;
        std::string ir;
        std::string bytecode;
        std::vector<std::string> messages;
    };

    struct ExecutionResult {
        bool success = false;
        std::string error;
        std::string value;
    };

    CompilationResult compile_impl(const std::string& source);
    ExecutionResult run_impl(const std::string& function);

    void reset() { module_ = Module(); }

private:
    // Compiled artifact, ready to run. Only present if compilation
    // was successful.
    Module module_;
};

} // namespace

static tiro_vm_settings default_vm_settings() {
    tiro_vm_settings settings;
    tiro_vm_settings_init(&settings);
    return settings;
}

static tiro_compiler_settings default_compiler_settings() {
    tiro_compiler_settings settings;
    tiro_compiler_settings_init(&settings);
    return settings;
}

Module OutputModule::take() {
    assert(module_ && "Dereferencing invalid module.");
    return Module(std::exchange(module_, nullptr));
}

std::string TiroRuntime::compile(const std::string& o) {
    json retval = json::object();
    try {
        json options = json::parse(o);
        CompilationResult compiled = compile_impl(
            options.at("source").get<std::string>());

        json messages = json::array();
        for (auto& message : compiled.messages) {
            messages.push_back(std::move(message));
        }

        retval["success"] = compiled.success;
        retval["ast"] = std::move(compiled.ast);
        retval["ir"] = std::move(compiled.ir);
        retval["bytecode"] = std::move(compiled.bytecode);
        retval["messages"] = std::move(messages);
    } catch (const std::exception& e) {
        retval["success"] = false;
        retval["error"] = e.what();
    }
    return retval.dump();
}

std::string TiroRuntime::run(const std::string& o) {
    json retval = json::object();
    try {
        json options = json::parse(o);
        ExecutionResult exec = run_impl(
            options.at("function").get<std::string>());

        retval["success"] = exec.success;
        retval["value"] = exec.value;
        retval["error"] = exec.error;
    } catch (const std::exception& e) {
        retval["success"] = false;
        retval["error"] = e.what();
    }
    return retval.dump();
}

TiroRuntime::CompilationResult
TiroRuntime::compile_impl(const std::string& source) {
    reset();

    CompilationResult result;

    auto message_callback = [](tiro_severity sev, uint32_t line,
                                uint32_t column, const char* message,
                                void* userdata) {
        try {
            auto& result = *static_cast<CompilationResult*>(userdata);

            std::string output_message;
            output_message += tiro_severity_str(sev);
            output_message += " ";
            output_message += std::to_string(line);
            output_message += ":";
            output_message += std::to_string(column);
            output_message += ": ";
            output_message += message;
            result.messages.push_back(std::move(output_message));
        } catch (...) {
        }
    };

    auto report = [&](std::string_view context, const tiro_error* error) {
        std::string message;
        message += context;
        message += ": ";
        message += tiro_error_message(error);
        message += " (";
        message += tiro_error_name(error);
        message += ")";

        // TODO: Better errors (tiro_error has more fields).
        result.messages.push_back(std::move(message));
    };

    tiro_compiler_settings compiler_settings = default_compiler_settings();
    compiler_settings.enable_dump_ast = true;
    compiler_settings.enable_dump_ir = true;
    compiler_settings.enable_dump_bytecode = true;
    compiler_settings.message_callback = message_callback;
    compiler_settings.message_callback_data = &result;

    Compiler compiler(compiler_settings);
    OutputError error;

    if (tiro_compiler_add_file(
            compiler, "playground", source.c_str(), error.out())
        != TIRO_OK) {
        report("Failed to add file to compiler", error.get());
        return result;
    }

    if (tiro_compiler_run(compiler, error.out()) != TIRO_OK) {
        report("Failed to compile source code", error.get());

        // Can often still produce a partial AST.
        {
            OutputStr ast;
            if (tiro_compiler_dump_ast(compiler, ast.out(), nullptr)
                == TIRO_OK) {
                result.ast = ast.str();
            }
        }
        return result;
    }

    {
        OutputStr ast;
        if (tiro_compiler_dump_ast(compiler, ast.out(), error.out())
            != TIRO_OK) {
            report("Failed to dump ast", error.get());
            return result;
        }
        result.ast = ast.str();
    }

    {
        OutputStr ir;
        if (tiro_compiler_dump_ir(compiler, ir.out(), error.out()) != TIRO_OK) {
            report("Failed to dump ir", error.get());
            return result;
        }
        result.ir = ir.str();
    }

    {
        OutputStr bytecode;
        if (tiro_compiler_dump_bytecode(compiler, bytecode.out(), error.out())
            != TIRO_OK) {
            report("Failed to dump bytecode", error.get());
            return result;
        }
        result.bytecode = bytecode.str();
    }

    {
        OutputModule module;
        if (tiro_compiler_take_module(compiler, module.out(), error.out())
            != TIRO_OK) {
            report("Failed to retrieve compiled module", error.get());
            return result;
        }
        module_ = module.take();
    }

    result.success = true;
    return result;
}

TiroRuntime::ExecutionResult
TiroRuntime::run_impl(const std::string& function) {
    ExecutionResult result;

    if (!module_) {
        result.error = "No compilation result available.";
        return result;
    }

    auto report = [&](std::string_view context, const tiro_error* error) {
        std::string message;
        message += context;
        message += ": ";
        message += tiro_error_message(error);
        message += " (";
        message += tiro_error_name(error);
        message += ")";

        // TODO: Better errors (tiro_error has more fields).
        result.error = std::move(message);
    };

    OutputError error;

    VM vm(default_vm_settings());
    if (tiro_vm_load_std(vm, error.out()) != TIRO_OK) {
        report("Failed to load default modules", error.get());
        return result;
    }

    if (tiro_vm_load(vm, module_, error.out()) != TIRO_OK) {
        report("Failed to load compiled module", error.get());
        return result;
    }

    OutputStr return_value;
    if (tiro_vm_run(
            vm, "playground", function.c_str(), return_value.out(), error.out())
        != TIRO_OK) {
        report("Failed to execute function", error.get());
        return result;
    }

    result.value = return_value.str();
    result.success = true;
    return result;
}

// #define TEST_RUN
#if defined(TEST_RUN)

#    include <iostream>

int main() {
    const std::string_view source = R"(
        import std;

        func f() {
            std.print("Hello World!");
            return "Hello from tiro!";
        }
    )";

    json compile_options = json::object();
    compile_options["source"] = source;

    json run_options = json::object();
    run_options["function"] = "f";

    Runtime program;

    json compile_result = json::parse(program.compile(compile_options.dump()));
    std::cout << compile_result.dump(4) << std::endl;

    json run_result = json::parse(program.run(run_options.dump()));
    std::cout << run_result.dump(4) << std::endl;
}

#endif

#ifdef __EMSCRIPTEN__
#    include <emscripten/bind.h>

EMSCRIPTEN_BINDINGS(tiro) {
    emscripten::class_<TiroRuntime>("TiroRuntime")
        .constructor()
        .function("compile", &TiroRuntime::compile)
        .function("run", &TiroRuntime::run);
}

#endif
