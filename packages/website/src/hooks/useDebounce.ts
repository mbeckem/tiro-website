import { useCallback, useRef } from "react";

/**
 * Debounces the provided function `fn` using the provided number of milliseconds.
 * Real execution of `fn` will be delayed until `intervalMillis` have elapsed since the last invocation.
 */
export function useDebounce<Ts extends any[]>(fn: (...args: Ts) => void, intervalMillis: number): typeof fn {
    const timeout = useRef<number>();
    const callback = useCallback(
        (...args: Ts) => {
            if (timeout.current) {
                self.clearTimeout(timeout.current);
            }

            timeout.current = self.setTimeout(() => {
                fn(...args);
            }, intervalMillis);
        },
        [fn, intervalMillis]
    );
    return callback;
}
