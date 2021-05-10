import { useEffect, useRef, useState } from "react";

export type Constructor<D> = () => Promise<D>;

export type Destructor<D> = (d: D) => void;

export interface AsyncLoading {
    state: "loading";
}

export interface AsyncLoaded<D> {
    state: "loaded";
    data: D;
}

export interface AsyncFailed {
    state: "error";
    error: Error;
}

export type AsyncResult<D> = AsyncLoading | AsyncLoaded<D> | AsyncFailed;

export function useAsync<D>(construct: Constructor<D>, destruct?: Destructor<D>): AsyncResult<D> {
    const internal = useRef(new InternalState<D>(construct, destruct));
    const [result, setResult] = useState<AsyncResult<D>>({ state: "loading" });

    useEffect(() => {
        const state = internal.current;
        state
            .init()
            .then(() => {
                switch (state.loadState) {
                    case "loaded":
                        setResult({
                            state: "loaded",
                            data: state.data!
                        });
                        break;
                    case "error":
                        setResult({
                            state: "error",
                            error: state.error!
                        });
                        break;
                }
            })
            .catch((e) => {
                setResult({
                    state: "error",
                    error: e
                });
            });
        return () => state.destroy();
    }, []);
    return result;
}

type LoadState = "not-loaded" | "loading" | "loaded" | "error" | "destroyed";

class InternalState<D> {
    private _construct: Constructor<D>;
    private _destruct: Destructor<D> | undefined;
    private _loadState: LoadState = "not-loaded";
    private _data: D | undefined = undefined;
    private _error: Error | undefined = undefined;

    constructor(construct: Constructor<D>, destruct?: Destructor<D>) {
        this._construct = construct;
        this._destruct = destruct;
    }

    get loadState(): LoadState {
        return this._loadState;
    }

    get error(): Error | undefined {
        return this._error;
    }

    get data(): D | undefined {
        return this._data;
    }

    async init() {
        if (this._loadState !== "not-loaded") {
            throw new Error("Data already started to load");
        }
        this._loadState = "loading";

        let data: D | undefined;
        let error: Error | undefined;
        try {
            data = await this._construct();
        } catch (e) {
            error = e;
        }

        if (data) {
            this.setData(data);
        } else {
            this.setError(error ?? new Error("Unknown error"));
        }
    }

    destroy() {
        this._loadState = "destroyed";
        this._data && this._destruct?.(this._data);
        this._data = undefined;
    }

    private setData(data: D) {
        if (this._loadState !== "loading" && this._loadState !== "destroyed") {
            throw new Error("Logic error: not loading");
        }

        // Component destroyed before it finished loading
        if (this._loadState === "destroyed") {
            this._destruct?.(data);
            return;
        }

        this._data = data;
        this._loadState = "loaded";
    }

    private setError(error: Error) {
        if (this._loadState !== "loading" && this._loadState !== "destroyed") {
            throw new Error("Logic error: not loading");
        }
        if (this._loadState === "loading") {
            this._error = error;
            this._loadState = "error";
        }
    }
}
