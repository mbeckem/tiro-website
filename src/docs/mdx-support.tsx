import React, { ReactNode } from "react";
import { MdxRemote } from "next-mdx-remote/types";
import mdxRemoteHydrate from "next-mdx-remote/hydrate";
import remarkSlug from "remark-slug";
import remarkHeadingId from "remark-heading-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import { AutoLink } from "@components/AutoLink";
import { CodeBlock } from "@components/CodeBlock";
import { ensureServer } from "@src/utils";

export type CompiledMdx = MdxRemote.Source;

const components = {
    a: AutoLink,

    code: CodeBlock,
    pre(props: any) {
        return <div {...props} />;
    }
} as const;

export function hydrate(compiledMdx: CompiledMdx): ReactNode {
    return mdxRemoteHydrate(compiledMdx, { components });
}

export async function renderMdx(mdxSource: string): Promise<CompiledMdx> {
    ensureServer();

    const autolinkOptions: rehypeAutolinkHeadings.Options = {
        behavior: "prepend",
        properties: {
            className: "anchor-link"
        },
        content: {
            type: "text",
            value: "#"
        }
    };

    // Fixes very large client bundles (tree shaking)
    const renderToString = (await import("next-mdx-remote/render-to-string")).default;
    return renderToString(mdxSource, {
        components,
        mdxOptions: {
            remarkPlugins: [remarkHeadingId, remarkSlug],
            rehypePlugins: [[rehypeAutolinkHeadings, autolinkOptions as any]]
        }
    });
}
