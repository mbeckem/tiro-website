export interface RuntimeInfo {
    full_version: string;
}

export interface ExecutionResult {
    // True if the execution was successful.
    success: boolean;

    // Error message (if success is false).
    error: string;

    // Return value as a string.
    value: string;

    // Time taken for execution.
    elapsedMillis: number;
}

export interface CompilationResult {
    // True if the compilation was successful.
    success: boolean;

    // String representation of the concrete syntax tree.
    cst: string;

    // String representation of the abstract syntax tree.
    ast: string;

    // String representation of the SSA IR.
    ir: string;

    // String representation of the final bytecode module.
    bytecode: string;

    // Compiler errors or warnings.
    messages: string[];

    // Time taken for compilation.
    elapsedMillis: number;
}

export interface Runtime {
    // Must be called to avoid memory leaks.
    destroy(): void;

    // Returns information about the runtime, e.g. its version.
    info(): RuntimeInfo;

    // Compiles the given soure code. On success, the compiled
    // module is remembered internally and can be executed using run().
    compile(source: string): CompilationResult;

    // Invokes the given function (with 0 arguments) in the previously
    // compiled module.
    run(functionName: string): ExecutionResult;
}
