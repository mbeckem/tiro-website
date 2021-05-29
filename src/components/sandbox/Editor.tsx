import React, { PureComponent } from "react";
import MonacoEditor from "@monaco-editor/react";
import * as monaco from "monaco-editor";

export interface EditorProps {
    initialSource: string;
    onChange: (newSource: string) => void;
    onMount?: () => void;
}

export class Editor extends PureComponent<EditorProps> {
    private _options: monaco.editor.IStandaloneEditorConstructionOptions = {
        cursorBlinking: "solid",
        tabSize: 4,
        insertSpaces: true
    };

    constructor(props: EditorProps) {
        super(props);
    }

    render(): JSX.Element {
        const { initialSource } = this.props;

        return (
            <MonacoEditor
                defaultValue={initialSource}
                language="plain"
                theme="light"
                options={this._options}
                onChange={this._onChange}
                onMount={this._onMount}
            />
        );
    }

    private _onMount = (editor: monaco.editor.IStandaloneCodeEditor): void => {
        const endPosition = editor.getModel()?.getFullModelRange().getEndPosition() ?? { lineNumber: 1, column: 1 };
        editor.setPosition(endPosition);
        editor.focus();
        this.props.onMount?.();
    };

    private _onChange = (source: string | undefined) => {
        this.props.onChange(source ?? "");
    };
}
