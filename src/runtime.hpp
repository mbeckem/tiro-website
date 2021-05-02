#ifndef RUNTIME_HPP
#define RUNTIME_HPP

#include "tiropp/api.hpp"

#include <optional>
#include <string>
#include <vector>

namespace runtime {

class Runtime;
class Program;

struct RuntimeInfo;
struct CompileOptions;
struct CompileResult;
struct ExecuteOptions;
struct ExecuteResult;

class Runtime final {
public:
    Runtime();
    Runtime(Runtime&& other) noexcept = default;

    RuntimeInfo info();

    CompileResult compile(const CompileOptions& options);

private:
    CompileResult compile_impl(const CompileOptions& options);
};

class Program final {
public:
    Program(Program&& other) noexcept = default;

    ExecuteResult execute(const ExecuteOptions& options);

private:
    friend Runtime;

    Program(std::string module_name, tiro::compiled_module&& module);

    ExecuteResult execute_impl(const ExecuteOptions& options);

private:
    std::string module_name_;
    tiro::compiled_module module_;
};

struct RuntimeInfo {
    tiro::version tiro_version;
};

struct CompileOptions {
    std::string filename;
    std::string source;
    bool enable_cst = false;
    bool enable_ast = false;
    bool enable_ir = false;
    bool enable_bytecode = false;
};

struct CompileResult {
    bool success = false;

    // Non-empty if compilation was successful.
    std::optional<Program> program;

    // Fatal error message if an exception was thrown by the compiler.
    std::string error;

    // Contains errors or warnings emitted by the compiler.
    std::vector<std::string> messages;

    // Non-empty if matching enable_* flag was set in compile options.
    std::string cst;
    std::string ast;
    std::string ir;
    std::string bytecode;
};

struct ExecuteOptions {
    std::string function; // Function name to invoke
};

struct ExecuteResult {
    bool success = false;
    std::string value; // return result if success is true
    std::string error; // panic value if success is false
};

} // namespace runtime

#endif // RUNTIME_HPP
