#include "nlohmann/json.hpp"
#include "tiropp/api.hpp"

#include <cassert>
#include <cstdio>
#include <cstdlib>
#include <exception>
#include <memory>
#include <sstream>
#include <stdexcept>
#include <string>
#include <utility>

using json = nlohmann::json;

namespace {

/**
 * Exposed to javascript. The caller is expected to call compile()
 * followed by an arbitrary amount of run() calls.
 */
class TiroRuntime {
public:
    TiroRuntime();

    TiroRuntime(const TiroRuntime&) = delete;
    TiroRuntime& operator=(const TiroRuntime&) = delete;

    /**
     * Returns version information as a simple json encoded string.
     */
    std::string info();

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
        std::string cst;
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

    void reset() { module_.reset(); }

private:
    // Compiled artifact, ready to run. Only present if compilation
    // was successful.
    std::optional<tiro::compiled_module> module_;
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

TiroRuntime::TiroRuntime() {}

std::string TiroRuntime::info() {
    const auto version = tiro::runtime_version();
    json info = json::object();
    info["full_version"] = version.full_version_string;
    info["version"] = version.version_string;
    info["version_number"] = version.version_number;
    info["source_id"] = version.source_id;
    return info.dump();
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
        retval["cst"] = std::move(compiled.cst);
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

    std::exception_ptr callback_error{};

    tiro::compiler_settings compiler_settings;
    compiler_settings.enable_dump_cst = true;
    compiler_settings.enable_dump_ast = true;
    compiler_settings.enable_dump_bytecode = true;
    compiler_settings.enable_dump_ir = true;
    compiler_settings.message_callback = [&](tiro::severity sev, uint32_t line,
                                             uint32_t column,
                                             const char* message) {
        if (callback_error)
            return;

        try {
            std::ostringstream ss;
            ss << tiro::to_string(sev) << " " << line << ":" << column << ": "
               << message;
            result.messages.push_back(ss.str());
        } catch (...) {
            callback_error = std::current_exception();
        }
    };

    auto report = [&](std::string_view context, const tiro::error& error) {
        std::ostringstream ss;
        ss << context << ": " << error.message();
        if (std::string_view details = error.details(); !details.empty()) {
            ss << "\n" << details;
        }

        result.messages.push_back(ss.str());
    };

    tiro::compiler compiler(compiler_settings);
    try {
        compiler.add_file("sandbox", source.c_str());
        compiler.run();

        if (callback_error)
            std::rethrow_exception(callback_error);
    } catch (const tiro::error& err) {
        report("Failed to compile source file", err);

        // Attempt to get a partial CST & AST.
        try {
            result.cst = compiler.dump_cst();
        } catch (...) {
        }
        try {
            result.ast = compiler.dump_ast();
        } catch (...) {
        }
        return result;
    }

    try {
        result.cst = compiler.dump_cst();
        result.ast = compiler.dump_ast();
        result.ir = compiler.dump_ir();
        result.bytecode = compiler.dump_bytecode();
    } catch (const tiro::error& err) {
        report("Failed to dump compilation results", err);
        return result;
    }

    try {
        module_ = compiler.take_module();
    } catch (const tiro::error& err) {
        report("Failed to retrieve the compiled module", err);
        return result;
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

    auto report = [&](std::string_view context, const tiro::error& error) {
        std::ostringstream ss;
        ss << context << ": " << error.message();
        if (std::string_view details = error.details(); !details.empty()) {
            ss << "\n" << details;
        }

        result.error = ss.str();
    };

    tiro::vm vm;

    try {
        vm.load_std();
    } catch (const tiro::error& err) {
        report("Failed to load default modules", err);
        return result;
    }

    try {
        vm.load(*module_);
    } catch (const tiro::error& err) {
        report("Failed to load compiled module", err);
        return result;
    }

    try {
        tiro::function func = tiro::get_export(vm, "sandbox", function.c_str())
                                  .as<tiro::function>();
        tiro::coroutine coro = tiro::make_coroutine(vm, func);
        coro.start();

        while (vm.has_ready())
            vm.run_ready();

        if (!coro.completed()) {
            result.error =
                "Coroutine did not complete (async operations not yet "
                "supported in the sandbox).";
            return result;
        }

        tiro::result ret = coro.result();
        if (ret.is_success()) {
            result.value = ret.value().to_string().value();
            result.success = true;
        } else {
            result.error = ret.reason().to_string().value();
            result.success = false;
        }
        return result;
    } catch (const tiro::error& err) {
        report("Failed to execute function", err);
        return result;
    }
}

// #define TEST_RUN
#if defined(TEST_RUN)

#    include <iostream>

int main() {
    const std::string_view source = R"(
        import std;

        export func f() {
            std.print("Hello World!");
            return "Hello from tiro!";
        }
    )";

    json compile_options = json::object();
    compile_options["source"] = source;

    json run_options = json::object();
    run_options["function"] = "f";

    TiroRuntime program;

    std::cout << program.info() << std::endl;

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
        .function("info", &TiroRuntime::info)
        .function("compile", &TiroRuntime::compile)
        .function("run", &TiroRuntime::run);
}

#endif
