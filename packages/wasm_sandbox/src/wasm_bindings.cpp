#include "runtime.hpp"

#include <emscripten/bind.h>

namespace {

template<typename T>
static T or_default(const emscripten::val& val, const T& def) {
    if (val.isUndefined())
        return def;
    return val.as<T>();
}

class WasmProgram {
public:
    WasmProgram(runtime::Program&& p)
        : p_(std::move(p)) {}

    emscripten::val execute(const emscripten::val& options) {
        runtime::ExecuteOptions opts;
        opts.function = options["function"].as<std::string>();
        {
            auto print_stdout = options["printStdout"];
            if (!print_stdout.isUndefined()) {
                opts.print_stdout = [print_stdout](std::string_view message) {
                    // Copy is needed because emscripten currently does not understand string views
                    print_stdout(emscripten::val(std::string(message)));
                };
            }
        }

        auto res = p_.execute(opts);

        emscripten::val result = emscripten::val::object();
        result.set("success", res.success);
        if (res.success) {
            result.set("value", res.value);
        } else {
            result.set("error", res.error);
        }
        return result;
    }

private:
    runtime::Program p_;
};

class WasmRuntime {
public:
    WasmRuntime() = default;

    emscripten::val info() {
        auto raw = rt_.info();

        emscripten::val info = emscripten::val::object();
        info.set("full_version", raw.tiro_version.full_version_string);
        return info;
    }

    emscripten::val compile(const emscripten::val& options) {
        runtime::CompileOptions opts;
        opts.filename = options["filename"].as<std::string>();
        opts.source = options["source"].as<std::string>();
        opts.enable_cst = or_default(options["enableCst"], false);
        opts.enable_ast = or_default(options["enableAst"], false);
        opts.enable_ir = or_default(options["enableIr"], false);
        opts.enable_bytecode = or_default(options["enableBytecode"], false);
        auto res = rt_.compile(opts);

        emscripten::val result = emscripten::val::object();
        result.set("success", res.success);
        if (res.program) {
            result.set("program", emscripten::val(std::make_unique<WasmProgram>(
                                      std::move(*res.program))));
        }
        if (!res.error.empty())
            result.set("error", res.error);

        result.set("messages",
            emscripten::val::array(res.messages.begin(), res.messages.end()));

        if (!res.cst.empty())
            result.set("cst", res.cst);
        if (!res.ast.empty())
            result.set("ast", res.ast);
        if (!res.ir.empty())
            result.set("ir", res.ir);
        if (!res.bytecode.empty())
            result.set("bytecode", res.bytecode);
        return result;
    }

private:
    runtime::Runtime rt_;
};

} // namespace

EMSCRIPTEN_BINDINGS(tiro) {
    emscripten::class_<WasmRuntime>("Runtime") //
        .constructor()
        .function("info", &WasmRuntime::info)
        .function("compile", &WasmRuntime::compile);

    emscripten::class_<WasmProgram>("Program") //
        .function("execute", &WasmProgram::execute);
}
