import React, { ReactElement } from "react";
import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

import { AutoLink } from "@components/AutoLink";
import { CodeBlock } from "@components/CodeBlock";
import { Rule } from "@components/Grammar";

const components = {
    a: AutoLink,

    code: CodeBlock,
    pre(props: any) {
        return <div {...props} />;
    },
    Rule: Rule,
} as const;

export interface MDXRendererProps {
    mdx: MDXRemoteSerializeResult;
}

export const MDXRenderer: React.FC<MDXRendererProps> = (props): ReactElement => {
    return <MDXRemote {...props.mdx} components={components} />;
};
