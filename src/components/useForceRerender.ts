import { useCallback, useEffect, useReducer, useRef } from "react";

const EMPTY = {};

interface Waiter {
    promise: Promise<void>;
    resolve: () => void;
}

export function useForceRerender(): () => Promise<void> {
    const [state, forceUpdate] = useReducer<any>(() => {
        return {};
    }, EMPTY);

    const waiter = useRef<Waiter>();
    const force = useCallback(() => {
        if (waiter.current) {
            return waiter.current?.promise;
        }

        let resolve!: () => void;
        const promise = new Promise<void>((res) => {
            resolve = res;
        });
        waiter.current = { promise, resolve };
        forceUpdate();
        return promise;
    }, [forceUpdate]);

    useEffect(() => {
        waiter.current?.resolve();
        waiter.current = undefined;
    }, [state]);

    return force;
}
