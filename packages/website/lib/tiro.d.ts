/// <reference types="emscripten" />

/**
 * Information about the tiro runtime.
 */
export interface RuntimeInfo {
    // Full tiro version string
    full_version: string;
}

/**
 * Options that can be specified when compiling source files.
 */
export interface CompileOptions {
    /**
     * The name of the source file.
     * This will currently also set the name of the compiled module.
     */
    filename: string;

    /** The source string (valid tiro code) */
    source: string;

    /** Enable output of the concrete syntax tree */
    enableCst?: boolean;

    /** Enable output of the abstract syntax tree */
    enableAst?: boolean;

    /** Enable output of the compiler's ssa intermediate representation */
    enableIr?: boolean;

    /** Enable output of the disassembled bytecode */
    enableBytecode?: boolean;
}

/**
 * The result of compiling a source file.
 */
export interface CompileResult {
    /** True if the compilation succeeded (program will be set). */
    success: boolean;

    /**
     * The compiled program. When this is a valid instance,
     * delete() must be called at some point to clean up.
     */
    program: Program | undefined;

    /** Internal error thrown by the compiler */
    error?: string;

    /** Warnings or compilation errors */
    messages: string[];

    // These are present if the corresponding enable_* flags were set when compiling.
    // CST and AST are in JSON format, ir and bytecode use a custom plain text output format.

    /** String representation of the concrete syntax tree. */
    cst?: string;

    /** String representation of the abstract syntax tree. */
    ast?: string;

    /** String representation of the SSA IR. */
    ir?: string;

    /** String representation of the final bytecode module. */
    bytecode?: string;
}

/** Options that can be given when executing a program. */
export interface ExecuteOptions {
    /** Function name to invoke (must be exported by the module) */
    function: string;

    /**
     * Standard output stream used when the program prints something.
     * Defaults to the browser console.
     *
     * NOTE: messages contain their own line separators.
     */
    printStdout?(message: string);
}

/**
 * The result of executing a program.
 * This is either the function's return value
 * or an error message.
 */
export type ExecuteResult =
    | {
          success: true;

          /** Return value as a string */
          value: string;
      }
    | {
          success: false;

          /** Error message */
          error: string;
      };

/** A compiled tiro program ready for execution. */
export interface Program {
    delete(): void;

    /** Executes the program with the given options and returns the result. */
    execute(options: ExecuteOptions): ExecuteResult;
}

export interface Runtime {
    delete(): void;

    /** Returns version information. */
    info(): RuntimeInfo;

    /** Compiles a source file and returns a program on success. */
    compile(options: CompileOptions): CompileResult;
}

export interface TiroWasmModule extends EmscriptenModule {
    Runtime: new () => Runtime;
}

declare function loadTiroWasmModule(options: Partial<EmscriptenModule>): Promise<TiroWasmModule>;

export default loadTiroWasmModule;
