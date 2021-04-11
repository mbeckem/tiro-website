import React, { lazy, Suspense } from "react";

import { Layout } from "@components/Layout";
import { SEO } from "@components/SEO";

const INITIAL_SOURCE = `
import std;

export func main() {
    const object = "World";
    std.print("Hello \${object}!");
}
`.trimStart();

const LazyPlayground: any = lazy(async () => {
    return {
        // React.lazy needs us to return a "default" export.
        default: (await import("@components/sandbox")).Sandbox
    };
});

export default function SandboxPage(): JSX.Element {
    const isClient = typeof window !== "undefined";

    const content = isClient ? (
        <Suspense fallback={<div>Loading playground...</div>}>
            <LazyPlayground initialSource={INITIAL_SOURCE} />
        </Suspense>
    ) : null;

    return (
        <Layout fullHeight>
            <SEO title="Sandbox" />
            {content}
        </Layout>
    );
}
