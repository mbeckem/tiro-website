import nativeTiro from "@lib/tiro";
import nativeTiroWasmURL from "@lib/tiro.wasm";
import { CompilationResult, ExecutionResult, Runtime, RuntimeInfo } from "./interfaces";

export async function createRuntime(): Promise<Runtime> {
    if (typeof window === "undefined") {
        throw new Error("Cannot compile server side.");
    }

    const tiroModule = await loadTiro();
    const runtime = new tiroModule.TiroRuntime();
    return new RuntimeImpl(runtime);
}

class RuntimeImpl implements Runtime {
    private _nativeRuntime: any;
    constructor(nativeRuntime: any) {
        this._nativeRuntime = nativeRuntime;
    }

    destroy(): void {
        if (this._nativeRuntime) {
            this._nativeRuntime.delete();
            this._nativeRuntime = undefined;
        }
    }

    info(): RuntimeInfo {
        this._checkDestroyed();

        const info = JSON.parse(this._nativeRuntime.info());
        return info as RuntimeInfo;
    }

    compile(source: string): CompilationResult {
        this._checkDestroyed();

        const start = window.performance.now();
        const input = JSON.stringify({ source });
        const output = JSON.parse(this._nativeRuntime.compile(input));
        output.elapsedMillis = window.performance.now() - start;
        return output as CompilationResult;
    }

    run(functionName: string): ExecutionResult {
        this._checkDestroyed();

        const start = window.performance.now();
        const input = JSON.stringify({ function: functionName });
        const output = JSON.parse(this._nativeRuntime.run(input));
        output.elapsedMillis = window.performance.now() - start;
        return output as ExecutionResult;
    }

    private _checkDestroyed(): void {
        if (!this._nativeRuntime) {
            throw new Error("tiro runtime was already destroyed.");
        }
    }
}

const loadTiro = (() => {
    // Lazily loaded once on demand.
    let tiroWasm: Promise<any> | undefined = undefined;

    function loadModule(): Promise<any> {
        return nativeTiro({
            noInitialRun: true,
            noExitRuntime: true,
            locateFile(file: any) {
                if (file === "tiro.wasm") {
                    return nativeTiroWasmURL;
                }
                throw new Error(`Unknown file requested by WebAssembly module: '${file}'.`);
            }
        });
    }

    return function loadTiro(): Promise<any> {
        if (!tiroWasm) {
            tiroWasm = loadModule();
        }
        return tiroWasm;
    };
})();
