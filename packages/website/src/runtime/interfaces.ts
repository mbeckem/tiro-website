import * as wasm from "@lib/tiro";

export type RuntimeInfo = wasm.RuntimeInfo;

export type CompileOptions = wasm.CompileOptions;

export type CompileResult = Omit<wasm.CompileResult, "error" | "program"> & {
    program?: Program; // Must be destroyed
    elapsedMillis: number;
};

export type ExecuteOptions = wasm.ExecuteOptions;

export type ExecuteResult = wasm.ExecuteResult & { elapsedMillis: number };

export interface Program {
    destroy(): void;

    execute(options: ExecuteOptions): ExecuteResult;
}

export interface Runtime {
    destroy(): void;

    info(): RuntimeInfo;
    compile(options: CompileOptions): CompileResult;
}
