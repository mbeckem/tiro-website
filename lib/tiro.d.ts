export interface TiroWasmRuntime {
    delete(): void;

    // Version information as json encoded string
    info(): string;

    // Takes json encoded string (the source code)
    // and returns a json encoded string (the compilation result).
    compile(input: string): string;

    // Takes json encoded string (the function name)
    // and returns a json encoded string (the execution result).
    run(input: string): string;
}

export interface TiroWasmModule extends EmscriptenModule {
    TiroRuntime: new() => TiroWasmRuntime;
}

declare function loadTiroWasmModule(options: Partial<EmscriptenModule>): Promise<TiroWasmModule>;

export default loadTiroWasmModule;
