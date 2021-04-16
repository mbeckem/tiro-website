import React, { lazy, Suspense } from "react";

import { Layout } from "@components/Layout";
import { SEO } from "@components/SEO";
import { Classes } from "@blueprintjs/core";

const INITIAL_SOURCE = `
import std;

export func main() {
    const object = "World";
    std.print("Hello \${object}!");
}
`.trimStart();

const LazySandbox: any = lazy(async () => {
    return {
        // React.lazy needs us to return a "default" export.
        default: (await import("@components/sandbox")).Sandbox
    };
});

export default function SandboxPage(): JSX.Element {
    const isClient = typeof window !== "undefined";

    const content = isClient ? (
        <Suspense fallback={Loader()}>
            <LazySandbox initialSource={INITIAL_SOURCE} />
        </Suspense>
    ) : null;

    return (
        <Layout fullHeight>
            <SEO title="Sandbox" />
            {content}
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
