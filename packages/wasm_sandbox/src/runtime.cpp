#include "runtime.hpp"

#include <exception>
#include <sstream>
#include <stdexcept>
#include <utility>

namespace runtime {

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

Runtime::Runtime() {}

RuntimeInfo Runtime::info() {
    const auto version = tiro::runtime_version();
    return {version};
}

CompileResult Runtime::compile(const CompileOptions& options) {
    try {
        return compile_impl(options);
    } catch (const std::exception& e) {
        CompileResult result;
        result.success = false;
        result.error = e.what();
        return result;
    }
}

CompileResult Runtime::compile_impl(const CompileOptions& options) {
    CompileResult result;

    std::exception_ptr callback_error{};

    tiro::compiler_settings compiler_settings;
    compiler_settings.enable_dump_cst = options.enable_cst;
    compiler_settings.enable_dump_ast = options.enable_ast;
    compiler_settings.enable_dump_bytecode = options.enable_bytecode;
    compiler_settings.enable_dump_ir = options.enable_ir;
    compiler_settings.message_callback = [&](tiro::severity sev, uint32_t line,
                                             uint32_t column,
                                             std::string_view message) {
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
        compiler.add_file(options.filename.c_str(), options.source.c_str());
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
        result.program.emplace(
            Program(options.filename, compiler.take_module()));
    } catch (const tiro::error& err) {
        report("Failed to retrieve the compiled module", err);
        return result;
    }

    result.success = true;
    return result;
}

Program::Program(std::string module_name, tiro::compiled_module&& module)
    : module_name_(std::move(module_name))
    , module_(std::move(module)) {}

ExecuteResult Program::execute(const ExecuteOptions& options) {
    try {
        return execute_impl(options);
    } catch (const std::exception& e) {
        ExecuteResult result;
        result.success = false;
        result.error = e.what();
        return result;
    }
}

ExecuteResult Program::execute_impl(const ExecuteOptions& options) {
    ExecuteResult result;

    auto report = [&](std::string_view context, const tiro::error& error) {
        std::ostringstream ss;
        ss << context << ": " << error.message();
        if (std::string_view details = error.details(); !details.empty()) {
            ss << "\n" << details;
        }

        result.error = ss.str();
    };

    tiro::vm_settings settings;
    if (options.print_stdout) {
        settings.print_stdout = options.print_stdout;
    }

    tiro::vm vm(settings);
    try {
        vm.load_std();
    } catch (const tiro::error& err) {
        report("Failed to load default modules", err);
        return result;
    }

    try {
        vm.load(module_);
    } catch (const tiro::error& err) {
        report("Failed to load compiled module", err);
        return result;
    }

    try {
        tiro::function func = tiro::get_export(
            vm, module_name_.c_str(), options.function.c_str())
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
            result.error = ret.error().to_string().value();
            result.success = false;
        }
        return result;
    } catch (const tiro::error& err) {
        report("Failed to execute function", err);
        return result;
    }
}

} // namespace runtime
