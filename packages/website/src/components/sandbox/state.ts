import { isClient } from "@src/utils";

export interface SandboxState {
    version: typeof SANDBOX_STATE_VERSION;
    source: string;
}

export const SANDBOX_STATE_VERSION = 1 as const;

export function saveStateToString(state: { source: string }): string {
    const json = JSON.stringify({
        v: SANDBOX_STATE_VERSION,
        s: state.source
    });
    return toBase64(json);
}

export function loadStateFromString(value: string): SandboxState | undefined {
    if (value.startsWith("#")) {
        value = value.substring(1);
    }

    if (value === "") {
        return undefined;
    }

    const json = fromBase64(value);
    const state = JSON.parse(json);
    if (typeof state !== "object") {
        throw new Error("expected an object");
    }

    const version = state.v;
    if (version !== SANDBOX_STATE_VERSION) {
        throw new Error(`state version version mismatch (expected ${SANDBOX_STATE_VERSION}, got ${version})`);
    }

    const source = state.s;
    if (typeof source !== "string") {
        throw new Error(`source should be a string (got ${typeof source})`);
    }

    return { version, source };
}

function toBase64(raw: string) {
    if (isClient()) {
        return btoa(raw);
    } else {
        return Buffer.from(raw, "binary").toString("base64");
    }
}

function fromBase64(b64: string) {
    if (isClient()) {
        return atob(b64);
    } else {
        return Buffer.from(b64, "base64").toString("binary");
    }
}
