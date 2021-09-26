import React, { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Classes } from "@blueprintjs/core";

import { Layout } from "@components/Layout";
import { SEO } from "@components/SEO";
import { isServer } from "@src/utils";
import {
    SandboxState,
    SANDBOX_STATE_VERSION,
    loadStateFromString,
    saveStateToString
} from "@src/components/sandbox/state";

const LazySandbox = dynamic(async () => (await import("@components/sandbox")).Sandbox, {
    ssr: false
});

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
                onReady={() => setReady(true)}
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
    const payload = saveStateToString(state);
    const url = new URL(window.location.href);
    url.hash = `#${payload}`;
    window.history.replaceState(null, "", url.href);
}

function loadStateFromLocation(): SandboxState | undefined {
    if (isServer()) {
        return undefined;
    }

    const url = new URL(window.location.href);
    try {
        return loadStateFromString(url.hash);
    } catch (e) {
        console.error("Failed to parse sandbox state from url", e);
        return undefined;
    }
}
