import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Classes } from "@blueprintjs/core";

import { Layout } from "@components/Layout";
import { SEO } from "@components/SEO";

const INITIAL_SOURCE = `
import std;

export func main() {
    const object = "World";
    std.print("Hello \${object}!");
}
`.trimStart();

const LazySandbox = dynamic(async () => (await import("@components/sandbox")).Sandbox, {
    ssr: false
});

export default function SandboxPage(): JSX.Element {
    const [isReady, setReady] = useState(false);
    const [isTimeoutComplete, setTimeoutComplete] = useState(false);
    useEffect(() => {
        setTimeout(() => setTimeoutComplete(true), 200);
    }, []);

    const displaySandbox = isReady && isTimeoutComplete;
    const sandbox = (
        <div style={{ width: "100%", height: "100%", visibility: displaySandbox ? "visible" : "hidden" }}>
            <LazySandbox initialSource={INITIAL_SOURCE} onReadyChanged={setReady} />
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
