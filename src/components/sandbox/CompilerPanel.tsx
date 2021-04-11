import React, { memo, ReactNode } from "react";
import { Tabs, Tab, UL } from "@blueprintjs/core";

import { CompilationResult } from "@src/runtime";
import { defined } from "@src/utils";
import styles from "./CompilerPanel.module.scss";

export interface CompilerPanelProps {
    state: "not-compiled" | "compiling" | "compiled";
    result?: CompilationResult;
    version: string;
}

export const CompilerPanel = memo(function CompilerPanel(props: CompilerPanelProps): JSX.Element {
    const { result, version } = props;
    const tabs = [
        {
            id: "status",
            title: "Status",
            content: statusContent(props)
        },
        {
            id: "cst",
            title: "CST",
            content: preformatted("Concrete Syntax Tree", result?.cst.trim())
        },
        {
            id: "ast",
            title: "AST",
            content: preformatted("Abstract Syntax Tree", result?.ast.trim())
        },
        {
            id: "ir",
            title: "IR",
            content: preformatted("Intermediate Representation", result?.ir.trim())
        },
        {
            id: "bytecode",
            title: "Bytecode",
            content: preformatted("Compiled bytecode", result?.bytecode.trim())
        },
        {
            id: "version",
            title: "Version",
            content: versionContent(version)
        }
    ] as const;

    return (
        <Tabs className={styles.tabsContainer} id="CompilerPanel" defaultSelectedTabId={tabs[0].id}>
            {tabs.map((props) => makeTab(props.id, props.title, props.content))}
        </Tabs>
    );
});

function statusMessage(props: CompilerPanelProps): ReactNode {
    switch (props.state) {
        case "not-compiled":
            return undefined;
        case "compiling":
            return "Compiling...";
        case "compiled": {
            const result = defined(props.result, "props.result");
            const elapsed = `(after ${result.elapsedMillis.toFixed(2)} ms)`;
            const status = result.success ? "Compilation succeeded" : "Compilation failed";
            return (
                <>
                    {status} <span>{elapsed}</span>.
                </>
            );
        }
    }
}

function statusContent(props: CompilerPanelProps): JSX.Element {
    const result = props.result;
    const messages = result?.messages;

    const messageItems = messages?.map((message, index) => {
        return <li key={index}>{message}</li>;
    });
    return (
        <>
            <div>{statusMessage(props)}</div>
            <UL>{messageItems}</UL>
        </>
    );
}

function preformatted(title: string, content: string | undefined): JSX.Element {
    const item = content ? <pre>{content}</pre> : undefined;

    return (
        <>
            <h3>{title}</h3>
            {item}
        </>
    );
}

function versionContent(version: string): JSX.Element {
    return <p>{version}</p>;
}

function makeTab(id: string, title: string, content: JSX.Element | undefined): JSX.Element {
    return (
        <Tab key={id} className={styles.tab} panelClassName={styles.tabPanel} id={id} title={title} panel={content} />
    );
}
