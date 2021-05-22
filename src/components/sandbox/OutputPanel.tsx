import React, { memo, useRef, useEffect } from "react";
import { Button, ButtonGroup } from "@blueprintjs/core";
import { List } from "immutable";

import { Execution } from "./Sandbox";
import styles from "./OutputPanel.module.scss";

export interface OutputPanelProps {
    results: List<Execution>;

    runEnabled: boolean;
    onRunClick: () => void;
    onClearClick: () => void;
}

export const OutputPanel = memo(function OutputPanel(props: OutputPanelProps) {
    const { results, runEnabled, onRunClick, onClearClick } = props;

    return (
        <div className={styles.panel}>
            <div className={styles.toolBar}>
                <ButtonGroup minimal>
                    <Button icon="play" intent="success" disabled={!runEnabled} onClick={onRunClick} small>
                        Run
                    </Button>
                    <Button icon="delete" onClick={onClearClick} small>
                        Clear
                    </Button>
                </ButtonGroup>
            </div>
            <ResultList results={results} />
        </div>
    );
});

const ResultList = memo(function ResultList(props: { results: List<Execution> }): JSX.Element {
    const bottomDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomDiv.current?.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <div className={styles.results}>
            {props.results.map((result, index) => (
                <Result key={index} execution={result} />
            ))}
            <div ref={bottomDiv} />
        </div>
    );
});

const Result = memo(function Result(props: { execution: Execution }): JSX.Element {
    const { result, output } = props.execution;
    const elapsed = `${result.elapsedMillis.toFixed(2)} ms`;

    const message = result.success
        ? `Function returned ${result.value} (after ${elapsed}).`
        : `Execution failed (after ${elapsed}).`;
    const error = result.success ? undefined : <div className={styles.error}>{result.error || "Unknown error"}</div>;
    const stdout = output.map((line, i) => (
        <div key={i} className={styles.line}>
            {line}
        </div>
    ));
    return (
        <div className={styles.result}>
            <div className={styles.log}>{stdout}</div>
            <div className={styles.title}>{message}</div>
            {error}
        </div>
    );
});
