/// <reference types="emscripten" />

export interface RuntimeInfo {
    // Full tiro version string
    full_version: string;
}

export interface CompileOptions {
    filename: string;
    source: string;

    enable_cst?: boolean;
    enable_ast?: boolean;
    enable_ir?: boolean;
    enable_bytecode?: boolean;
}

export interface CompileResult {
    // true -> compilation succeeded
    success: boolean;

    // Must be destroyed!
    program: Program | undefined;

    // internal error (if any)
    error?: string;

    // Warnings and errors emitted by the compiler
    messages: string[];

    // These are present if the corresponding enable_* flags were set when compiling.
    // CST and AST are in JSON format, ir and bytecode use a custom plain text output format.

    // String representation of the concrete syntax tree.
    cst?: string;

    // String representation of the abstract syntax tree.
    ast?: string;

    // String representation of the SSA IR.
    ir?: string;

    // String representation of the final bytecode module.
    bytecode?: string;
}

export interface ExecuteOptions {
    // Function name to invoke (must be exported)
    function: string;
}

export type ExecuteResult = {
    success: true;
    value: string  // Return value as a string.
} | {
    success: false;
    error: string // Error message
};

export interface Program {
    delete(): void;

    execute(options: ExecuteOptions): ExecuteResult;
}

export interface Runtime {
    delete(): void;

    info(): RuntimeInfo;

    compile(options: CompileOptions): CompileResult;
}

export interface TiroWasmModule extends EmscriptenModule {
    Runtime: new () => Runtime;
}

declare function loadTiroWasmModule(options: Partial<EmscriptenModule>): Promise<TiroWasmModule>;

export default loadTiroWasmModule;
