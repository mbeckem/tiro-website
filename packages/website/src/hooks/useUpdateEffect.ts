import { DependencyList, EffectCallback, useEffect, useRef } from "react";

/**
 * Exactly like useEffect(), but skips the initial rendering.
 */
export function useUpdateEffect(fn: EffectCallback, deps?: DependencyList): void {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            fn();
        } else {
            didMount.current = true;
        }
    }, [fn, ...(deps ?? [])]); // eslint-disable-line react-hooks/exhaustive-deps
}
