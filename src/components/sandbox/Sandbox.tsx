import React, { Component, PureComponent } from "react";
import { List } from "immutable";

import { CompilationResult, Runtime, createRuntime, ExecutionResult } from "@src/runtime";
import { defined } from "@src/utils";
import { SandboxUI } from "./SandboxUI";
import { CompilerPanelProps } from "./CompilerPanel";
import { OutputPanelProps } from "./OutputPanel";

export interface SandboxProps {
    initialSource?: string;
    onReadyChanged(ready: boolean): void;
}

interface SandboxState {
    compiling: boolean;
    currentSource: string;
    version: string;
    compiled?: CompilationResult;
    executions: List<ExecutionResult>;
}

export class Sandbox extends PureComponent<SandboxProps, SandboxState> {
    private _runtime?: Runtime;

    constructor(props: Readonly<SandboxProps>) {
        super(props);
        this.state = {
            compiling: false,
            version: "N/A",
            currentSource: props.initialSource ?? "",
            executions: List()
        };
    }

    async componentDidMount(): Promise<void> {
        try {
            const runtime = (this._runtime = await createRuntime());
            this.setState({ version: runtime.info().full_version });
            this._startCompilation(this.state.currentSource);
        } catch (e) {
            // TODO error UI
            console.error("Failed to create runtime instance", e);
            return;
        }

        this.props.onReadyChanged(true);
    }

    componentWillUnmount(): void {
        this.props.onReadyChanged(false);
        this._runtime?.destroy();
        this._runtime = undefined;
    }

    private async _startCompilation(source: string): Promise<void> {
        const runtime = defined(this._runtime, "runtime");

        // TODO: Async compilation api (Web worker?)
        try {
            await asyncSetState(this, { compiling: true });
            const result = runtime.compile(source);
            this.setState({
                compiling: false,
                compiled: result
            });
        } catch (e) {
            // TODO: Error state in UI
            console.error("Compilation failed", e);
        }
    }

    render(): JSX.Element {
        const { compiling, currentSource, compiled, executions, version } = this.state;

        const compilation: CompilerPanelProps = {
            state: compiling ? "compiling" : compiled ? "compiled" : "not-compiled",
            result: compiled,
            version: version
        };

        const output: OutputPanelProps = {
            results: executions,
            runEnabled: !!compiled?.success,
            onRunClick: this._handleRunClick,
            onClearClick: this._handleClearResultsClick
        };

        return (
            <SandboxUI
                initialSource={currentSource}
                onSourceChanged={this._handleSourceChanged}
                compilation={compilation}
                output={output}
            />
        );
    }

    private _handleSourceChanged = async (value: string): Promise<void> => {
        await asyncSetState(this, { currentSource: value });
        this._startCompilation(value);
    };

    private _handleRunClick = (): void => {
        const runtime = defined(this._runtime, "runtime");
        try {
            const exec = runtime.run("main");
            this.setState((state) => {
                return { executions: state.executions.push(exec) };
            });
            console.debug("Execution result:", exec);
        } catch (e) {
            // TODO: Error state in UI
            console.error("Execution failed", e);
        }
    };

    private _handleClearResultsClick = (): void => {
        this.setState({
            executions: List()
        });
    };
}

function asyncSetState<T extends Component, S>(comp: T, newState: S): Promise<void> {
    return new Promise((resolve) => {
        comp.setState(newState, resolve);
    });
}
