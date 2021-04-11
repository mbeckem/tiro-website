import React, { memo, ReactNode } from "react";
import classNames from "classnames";

import { Editor } from "./Editor";
import { CompilerPanel, CompilerPanelProps } from "./CompilerPanel";
import { OutputPanel, OutputPanelProps } from "./OutputPanel";
import styles from "./SandboxUI.module.scss";

export interface SandboxUIProps {
    initialSource?: string;
    onSourceChanged: (source: string) => void;

    compilation: CompilerPanelProps;
    output: OutputPanelProps;
}

export const SandboxUI = memo(function SandboxUI({
    initialSource,
    onSourceChanged,
    compilation,
    output
}: SandboxUIProps): JSX.Element {
    const editorPanel = <Editor initialSource={initialSource ?? ""} onChange={onSourceChanged} />;
    const compilerPanel = <CompilerPanel {...compilation} />;
    const runtimePanel = <OutputPanel {...output} />;

    return <SplitLayout editorPanel={editorPanel} compilerPanel={compilerPanel} runtimePanel={runtimePanel} />;
});

const SplitLayout = memo(function SplitLayout(props: {
    editorPanel: ReactNode;
    compilerPanel: ReactNode;
    runtimePanel: ReactNode;
}): JSX.Element {
    return (
        <Split className={classNames(styles.split, styles.columns)} sizes={[50, 50]} minSize={100}>
            <div className={styles.column}>{props.editorPanel}</div>
            <div className={styles.column}>
                <Split
                    direction="vertical"
                    className={classNames(styles.split, styles.rows)}
                    sizes={[50, 50]}
                    minSize={100}
                >
                    <div className={styles.row}>{props.compilerPanel}</div>
                    <div className={styles.row}>{props.runtimePanel}</div>
                </Split>
            </div>
        </Split>
    );
});

// Only client side import works.
const Split = ((): any => {
    if (typeof window === "undefined") {
        return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("react-split").default;
})();
