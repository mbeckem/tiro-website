import loadTiroWasmModule, { TiroWasmModule, TiroWasmRuntime } from "@lib/tiro";
import nativeTiroWasmURL from "@lib/tiro.wasm";
import { CompilationResult, ExecutionResult, Runtime, RuntimeInfo } from "./interfaces";

export async function createRuntime(): Promise<Runtime> {
    if (typeof window === "undefined") {
        throw new Error("Cannot compile server side.");
    }

    const { TiroRuntime } = await loadTiro();
    const runtime = new TiroRuntime();
    return new RuntimeImpl(runtime);
}

class RuntimeImpl implements Runtime {
    private _nativeRuntime: TiroWasmRuntime | undefined;
    constructor(nativeRuntime: TiroWasmRuntime) {
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

        const info = JSON.parse(rt.info());
        return info as RuntimeInfo;
    }

    compile(source: string): CompilationResult {
        const rt = this.getRuntime();

        const start = window.performance.now();
        const input = JSON.stringify({ source });
        const output = JSON.parse(rt.compile(input));
        output.elapsedMillis = window.performance.now() - start;
        return output as CompilationResult;
    }

    run(functionName: string): ExecutionResult {
        const rt = this.getRuntime();

        const start = window.performance.now();
        const input = JSON.stringify({ function: functionName });
        const output = JSON.parse(rt.run(input));
        output.elapsedMillis = window.performance.now() - start;
        return output as ExecutionResult;
    }

    private getRuntime(): TiroWasmRuntime {
        const rt = this._nativeRuntime;
        if (!rt) {
            throw new Error("tiro runtime was already destroyed.");
        }
        return rt;
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
