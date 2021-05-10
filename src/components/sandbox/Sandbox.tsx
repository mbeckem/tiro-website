import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { List } from "immutable";

import { CompileResult, ExecuteResult, Program } from "@src/runtime";
import { SandboxUI } from "./SandboxUI";
import { CompilerPanelProps } from "./CompilerPanel";
import { OutputPanelProps } from "./OutputPanel";
import { useRuntime } from "./useRuntime";
import { useForceRerender } from "../useForceRerender";

export interface SandboxProps {
    initialSource?: string;

    onReadyChanged?(ready: boolean): void;
    onSourceChanged?(source: string): void;
}

export interface Execution {
    output: string[];
    result: ExecuteResult;
}

export const Sandbox: React.FC<SandboxProps> = (props) => {
    const { initialSource, onReadyChanged, onSourceChanged } = props;

    // Runtime initialization
    const runtime = useRuntime();
    const [ready, setReady] = useState(false);
    const version = useMemo(() => {
        if (runtime.state === "loaded") {
            return runtime.data.info().full_version;
        }
        return "N/A";
    }, [runtime]);
    useEffect(() => {
        if (runtime.state === "loaded" && !ready) {
            setReady(true);
            onReadyChanged?.(true);
        }
    }, [runtime, onReadyChanged, ready]);

    // Editor properties
    const [source, setSource] = useState(initialSource ?? "");
    useEffect(() => setSource(initialSource ?? ""), [initialSource]);
    const editorSourceChanged = useCallback(
        (newSource: string) => {
            setSource(newSource);
            onSourceChanged?.(newSource);
        },
        [setSource, onSourceChanged]
    );

    // Executions
    const [compiling, setCompiling] = useState(false);
    const [compileResult, setCompileResult] = useState<CompileResult>();
    const [executions, setExecutions] = useState(List<Execution>());

    const rerender = useForceRerender();

    // Program compilation
    const program = useRef<Program>();
    useEffect(() => {
        async function compile() {
            if (runtime.state !== "loaded") {
                return;
            }
            const instance = runtime.data;

            setCompileResult(undefined);
            setCompiling(true);
            await rerender();

            let result: CompileResult;
            try {
                result = instance.compile({
                    filename: "sandbox",
                    source: source,
                    enableCst: true,
                    enableAst: true,
                    enableIr: true,
                    enableBytecode: true
                });
            } catch (e) {
                console.error("Compilation failed", e);
                return;
            }

            program.current?.destroy();
            program.current = result.program;
            setCompiling(false);
            setCompileResult(result);
        }
        compile();
    }, [runtime, source, rerender]);
    useEffect(() => () => program.current?.destroy(), []);

    // Program execution handling
    const run = useCallback(() => {
        const p = program.current;
        if (!p) {
            return;
        }

        try {
            const outputBuffer: string[] = [];
            const result = p.execute({
                function: "main",
                printStdout(message) {
                    console.debug(message);
                    outputBuffer.push(message);
                }
            });
            console.debug("Execution result:", result);

            const output = outputBuffer.length ? outputBuffer.join("").trim().split(/\r?\n/) : [];
            setExecutions((e) => e.push({ result, output }));
        } catch (e) {
            // TODO: Error state in UI
            console.error("Execution failed", e);
        }
    }, []);
    const clear = useCallback(() => {
        setExecutions((e) => e.clear());
    }, []);

    const compilation: CompilerPanelProps = {
        state: compiling ? "compiling" : compileResult ? "compiled" : "not-compiled",
        result: compileResult,
        version: version
    };

    const output: OutputPanelProps = {
        results: executions,
        runEnabled: !!compileResult?.success,
        onRunClick: run,
        onClearClick: clear
    };

    return (
        <SandboxUI
            initialSource={source}
            onSourceChanged={editorSourceChanged}
            compilation={compilation}
            output={output}
        />
    );
};
