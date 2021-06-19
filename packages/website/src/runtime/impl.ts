import loadTiroWasmModule, {
    TiroWasmModule,
    Runtime as WasmRuntime,
    Program as WasmProgram
} from "@tiro-website/wasm_sandbox/dist/tiro";
import nativeTiroWasmURL from "@tiro-website/wasm_sandbox/dist/tiro.wasm";
import {
    CompileOptions,
    CompileResult,
    ExecuteOptions,
    ExecuteResult,
    Program,
    Runtime,
    RuntimeInfo
} from "./interfaces";

export async function createRuntime(): Promise<Runtime> {
    if (typeof window === "undefined") {
        throw new Error("Cannot compile server side.");
    }

    const { Runtime: WasmRuntime } = await loadTiro();
    const runtime = new WasmRuntime();
    return new RuntimeImpl(runtime);
}

class RuntimeImpl implements Runtime {
    private _nativeRuntime: WasmRuntime | undefined;

    constructor(nativeRuntime: WasmRuntime) {
        this._nativeRuntime = nativeRuntime;
    }

    destroy(): void {
        if (this._nativeRuntime) {
            this._nativeRuntime.delete();
            this._nativeRuntime = undefined;
        }
    }

    info(): RuntimeInfo {
        const rt = this.getRuntime();
        return rt.info();
    }

    compile(options: CompileOptions): CompileResult {
        const rt = this.getRuntime();

        const start = window.performance.now();
        const result = rt.compile(options);
        if (result.error) {
            result?.program?.delete();
            throw new Error(result.error);
        }

        const program = result.program ? new ProgramImpl(result.program) : undefined;
        return {
            ...result,
            program,
            elapsedMillis: window.performance.now() - start
        };
    }

    private getRuntime(): WasmRuntime {
        const rt = this._nativeRuntime;
        if (!rt) {
            throw new Error("tiro runtime was already destroyed.");
        }
        return rt;
    }
}

class ProgramImpl implements Program {
    private _nativeProgram: WasmProgram | undefined;

    constructor(nativeProgram: WasmProgram) {
        this._nativeProgram = nativeProgram;
    }

    destroy(): void {
        if (this._nativeProgram) {
            this._nativeProgram.delete();
            this._nativeProgram = undefined;
        }
    }

    execute(options: ExecuteOptions): ExecuteResult {
        const rt = this.getProgram();

        const start = window.performance.now();
        const result = rt.execute(options);
        return {
            ...result,
            elapsedMillis: window.performance.now() - start
        };
    }

    private getProgram(): WasmProgram {
        const p = this._nativeProgram;
        if (!p) {
            throw new Error("tiro program was already destroyed.");
        }
        return p;
    }
}

const loadTiro = (() => {
    // Lazily loaded once on demand.
    let tiroWasm: Promise<TiroWasmModule> | undefined = undefined;

    return function loadTiro(): Promise<TiroWasmModule> {
        if (!tiroWasm) {
            tiroWasm = loadTiroWasmModule({
                noInitialRun: true,
                noExitRuntime: true,
                locateFile(file) {
                    if (file === "tiro.wasm") {
                        return nativeTiroWasmURL;
                    }
                    throw new Error(`Unknown file requested by WebAssembly module: '${file}'.`);
                }
            });
        }
        return tiroWasm;
    };
})();
