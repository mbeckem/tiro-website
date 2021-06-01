import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import remarkSlug from "remark-slug";
import remarkHeadingId from "remark-heading-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { ensureServer } from "@src/utils";

export type SerializedMDX = MDXRemoteSerializeResult;

export async function serializeMDX(mdxSource: string): Promise<MDXRemoteSerializeResult> {
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

    return serialize(mdxSource, {
        mdxOptions: {
            remarkPlugins: [remarkHeadingId, remarkSlug],
            rehypePlugins: [[rehypeAutolinkHeadings, autolinkOptions as any]]
        }
    });
}
