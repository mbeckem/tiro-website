#include <cstdio>

#include "nlohmann/json.hpp"
#include "tiro/api.h"

#include <cassert>
#include <cstdlib>
#include <memory>
#include <string>

using json = nlohmann::json;

namespace {

class OutputStr final {
public:
    OutputStr() = default;

    ~OutputStr() { reset(); }

    OutputStr(const OutputStr&) = delete;
    OutputStr& operator=(const OutputStr&) = delete;

    std::string to_string() const {
        if (!str_)
            return {};

        return std::string(str_);
    }

    void reset() {
        if (str_) {
            std::free(str_);
            str_ = nullptr;
        }
    }

    operator char**() { return &str_; }

private:
    char* str_ = nullptr;
};

class Context final {
public:
    void init(const tiro_settings& settings) {
        ctx_.reset(tiro_context_new(&settings));
        if (!ctx_)
            throw std::runtime_error("Failed to initialize tiro context.");
    }

    operator tiro_context*() {
        assert(ctx_ && "Dereferencing invalid context.");
        return ctx_.get();
    }

private:
    struct Deleter {
        void operator()(tiro_context* ctx) { tiro_context_free(ctx); }
    };

    std::unique_ptr<tiro_context, Deleter> ctx_;
};

class Compiler final {
public:
    void init(Context& ctx, const tiro_compiler_settings& settings) {
        comp_.reset(tiro_compiler_new(ctx, &settings));
        if (!comp_)
            throw std::runtime_error("Failed to initialize tiro compiler.");
    }

    operator tiro_compiler*() {
        assert(comp_ && "Dereferencing invalid compiler.");
        return comp_.get();
    }

private:
    struct Deleter {
        void operator()(tiro_compiler* comp) { tiro_compiler_free(comp); }
    };

    std::unique_ptr<tiro_compiler, Deleter> comp_;
};

class Application {
public:
    /**
     * Receives arguments as json. Returns the compilation results as json.
     */
    std::string run(const std::string& args);

private:
    struct Result {
        bool success = false;
        std::string ast;
        std::string ir;
        std::string bytecode;
        std::vector<std::string> messages;
    };

    Result compile(const std::string& source);

private:
    Context ctx_;
    Compiler comp_;
};

} // namespace

static tiro_settings default_settings() {
    tiro_settings settings;
    tiro_settings_init(&settings);
    return settings;
}

static tiro_compiler_settings default_compiler_settings() {
    tiro_compiler_settings settings;
    tiro_compiler_settings_init(&settings);
    return settings;
}

std::string Application::run(const std::string& args) {
    json retval = json::object();
    try {
        json options = json::parse(args);
        Result compiled = compile(options.at("source").get<std::string>());

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

Application::Result Application::compile(const std::string& source) {
    Result result;

    auto error_log = [](const char* error_message, void* userdata) {
        try {
            auto& result = *static_cast<Result*>(userdata);
            std::string message = "ERROR: ";
            message.append(error_message);
            result.messages.push_back(std::move(message));
        } catch (...) {
        }
    };

    auto message_callback = [](tiro_severity sev, uint32_t line,
                                uint32_t column, const char* message,
                                void* userdata) {
        try {
            auto& result = *static_cast<Result*>(userdata);

            std::string output_message;
            output_message += tiro_severity_str(sev);
            output_message += " ";
            output_message += std::to_string(line);
            output_message += ":";
            output_message += std::to_string(column);
            output_message += ": ";
            output_message += message;
            result.messages.push_back(std::move(message));
        } catch (...) {
        }
    };

    auto report = [&](std::string_view context, tiro_error error) {
        std::string message;
        message += "ERROR: ";
        message += context;
        message += ": ";
        message += tiro_error_str(error);
        result.messages.push_back(std::move(message));
    };

    tiro_settings settings = default_settings();
    settings.error_log = error_log;
    settings.error_log_data = &result;

    Context ctx;
    ctx.init(settings);

    tiro_compiler_settings compiler_settings = default_compiler_settings();
    compiler_settings.enable_dump_ast = true;
    compiler_settings.enable_dump_ir = true;
    compiler_settings.enable_dump_bytecode = true;
    compiler_settings.message_callback = message_callback;
    compiler_settings.message_callback_data = &result;

    Compiler compiler;
    compiler.init(ctx, compiler_settings);

    if (auto err = tiro_compiler_add_file(
            compiler, "playground", source.c_str());
        err != TIRO_OK) {
        report("Failed to add file to compiler", err);
        return result;
    }

    if (auto err = tiro_compiler_run(compiler); err != TIRO_OK) {
        report("Failed to compile source code", err);

        // Can often still produce a partial AST.
        {
            OutputStr ast;
            if (auto err = tiro_compiler_dump_ast(compiler, ast);
                err == TIRO_OK) {
                result.ast = ast.to_string();
            }
        }

        return result;
    }

    {
        OutputStr ast;
        if (auto err = tiro_compiler_dump_ast(compiler, ast); err != TIRO_OK) {
            report("Failed to dump ast", err);
            return result;
        }
        result.ast = ast.to_string();
    }

    {
        OutputStr ir;
        if (auto err = tiro_compiler_dump_ir(compiler, ir); err != TIRO_OK) {
            report("Failed to dump ir", err);
            return result;
        }
        result.ir = ir.to_string();
    }

    {
        OutputStr bytecode;
        if (auto err = tiro_compiler_dump_bytecode(compiler, bytecode);
            err != TIRO_OK) {
            report("Failed to dump bytecode", err);
            return result;
        }
        result.bytecode = bytecode.to_string();
    }

    result.success = true;
    return result;
}

static std::string tiro_compile(const std::string& args) {
    Application app;
    return app.run(args);
}

// #define TEST_RUN

#if defined(TEST_RUN)

#    include <iostream>

EXPORT_SYMBOL int main() {
    std::cout << tiro_compile("{\"source\": \"func f() {}\"}") << std::endl;
}

#endif

#ifdef __EMSCRIPTEN__
#    include <emscripten.h>
#    include <emscripten/bind.h>

EMSCRIPTEN_BINDINGS(tiro) {
    emscripten::function("tiro_compile", &tiro_compile);
}

#endif
