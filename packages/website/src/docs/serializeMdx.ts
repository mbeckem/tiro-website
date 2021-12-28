import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import remarkHeadingId from "remark-heading-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { ensureServer } from "@/utils";
import { slugPlugin } from "./slug";
import { Literal } from "hast";

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
            value: "§"
        } as Literal
    };

    return serialize(mdxSource, {
        mdxOptions: {
            remarkPlugins: [remarkHeadingId, slugPlugin],
            rehypePlugins: [[rehypeAutolinkHeadings, autolinkOptions as any]]
        }
    });
}
