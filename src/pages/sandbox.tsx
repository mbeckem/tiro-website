import React, { useState } from "react";
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

    const sandbox = (
        <div style={{ width: "100%", height: "100%", display: isReady ? "block" : "none" }}>
            <LazySandbox initialSource={INITIAL_SOURCE} onReadyChanged={setReady} />
        </div>
    );
    const loader = isReady ? null : Loader();
    return (
        <Layout fullHeight>
            <SEO title="Sandbox" />
            {sandbox}
            {loader}
        </Layout>
    );
}

function Loader() {
    return (
        <div
            style={{ marginTop: "50px", textAlign: "center", width: "100%", height: "100%" }}
            className={Classes.TEXT_LARGE}
        >
            Loading Sandbox...
        </div>
    );
}
