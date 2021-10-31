import React, { ReactElement } from "react";
import { HTMLTable } from "@blueprintjs/core";
import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

import { AutoLink } from "@/components/AutoLink";
import { CodeBlock } from "@/components/CodeBlock";
import { Rule, Rules } from "@/components/Grammar";
import { ItemTable } from "@/components/ItemTable";
import { Block, Info, Todo, Warning } from "@/components/Block";

const components = {
    a: AutoLink,

    code: CodeBlock,
    pre(props: any) {
        return <div {...props} />;
    },

    table(props: any) {
        return <HTMLTable {...props} condensed />;
    },

    Rule: Rule,
    Rules: Rules,
    ItemTable: ItemTable,
    Block,
    Todo,
    Info,
    Warning
} as const;

export interface MDXRendererProps {
    mdx: MDXRemoteSerializeResult;
}

export const MDXRenderer: React.FC<MDXRendererProps> = (props): ReactElement => {
    return <MDXRemote {...props.mdx} components={components} />;
};
