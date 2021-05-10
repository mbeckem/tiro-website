import React, { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Classes } from "@blueprintjs/core";

import { Layout } from "@components/Layout";
import { SEO } from "@components/SEO";
import { isServer } from "@src/utils";

const LazySandbox = dynamic(async () => (await import("@components/sandbox")).Sandbox, {
    ssr: false
});

interface SandboxState {
    version: typeof SANDBOX_STATE_VERSION;
    source: string;
}

const SANDBOX_STATE_VERSION = 1 as const;

const SANDBOX_DEFAULT_SOURCE = `
import std;

export func main() {
    const object = "World";
    std.print("Hello \${object}!");
}
`.trimStart();

export default function SandboxPage(): JSX.Element {
    const [isReady, setReady] = useState(false);
    const [isTimeoutComplete, setTimeoutComplete] = useState(false);
    useEffect(() => {
        setTimeout(() => setTimeoutComplete(true), 200);
    }, []);

    const loadedState = useMemo(loadStateFromLocation, undefined);
    const [sandboxState, setSandboxState] = useState<SandboxState>(
        loadedState ?? {
            version: SANDBOX_STATE_VERSION,
            source: SANDBOX_DEFAULT_SOURCE
        }
    );
    const onSourceChanged = useCallback((source: string) => {
        setSandboxState((state) => ({ ...state, source }));
    }, []);
    useEffect(() => {
        saveStateToLocation(sandboxState);
    }, [sandboxState]);

    const displaySandbox = isReady && isTimeoutComplete;
    const sandbox = (
        <div style={{ width: "100%", height: "100%", visibility: displaySandbox ? "visible" : "hidden" }}>
            <LazySandbox
                initialSource={sandboxState.source}
                onReadyChanged={setReady}
                onSourceChanged={onSourceChanged}
            />
        </div>
    );
    const loader = displaySandbox ? null : Loader();

    return (
        <Layout fullHeight>
            <SEO title="Sandbox" />
            {loader}
            {sandbox}
        </Layout>
    );
}

function Loader() {
    return (
        <div
            style={{ position: "absolute", marginTop: "50px", textAlign: "center", width: "100%" }}
            className={Classes.TEXT_LARGE}
        >
            Loading Sandbox...
        </div>
    );
}

function saveStateToLocation(state: SandboxState): void {
    const json = JSON.stringify({
        v: state.version,
        s: state.source
    });
    const payload = btoa(json);

    const url = new URL(window.location.href);
    url.hash = `#${payload}`;
    window.history.replaceState(null, "", url.href);
}

function loadStateFromLocation(): SandboxState | undefined {
    if (isServer()) {
        return undefined;
    }

    const url = new URL(window.location.href);
    const hash = url.hash;
    if (hash === "" || hash === "#") {
        return undefined;
    }

    try {
        const json = atob(hash.substring(1));
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
    } catch (e) {
        console.error("Failed to parse sandbox state from url", e);
        return undefined;
    }
}
