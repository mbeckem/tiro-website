import { useMemo, useRef } from "react";

/**
 * Returns a function that will call `fn()` only when it is executed for the first time.
 */
export function useOnce(fn: () => void): () => void {
    const called = useRef(false);
    const wrapper = useMemo(
        () => () => {
            if (called.current) {
                return;
            }

            fn();
            called.current = true;
        },
        [fn]
    );
    return wrapper;
}
