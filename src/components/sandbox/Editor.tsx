import React, { PureComponent, createRef } from "react";
import ReactResizeDetector from "react-resize-detector";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/mode-plain_text";
import "ace-builds/src-noconflict/ext-language_tools";

import styles from "./Editor.module.scss";

export interface EditorProps {
    initialSource: string;
    onChange: (newSource: string) => void;
}

export class Editor extends PureComponent<EditorProps> {
    private _parentDiv = createRef<HTMLDivElement>();
    private _aceInstance = createRef<AceEditor>();

    private _editorSettings = {
        mode: "plain_text",
        theme: "solarized_light",
        fontSize: "16px",
        showPrintMargin: false,
        debounceChangePeriod: 200,
        enableBasicAutocompletion: true,
        enableSnippets: false,
        setOptions: {
            showLineNumbers: true,
            tabSize: 4
        }
    };

    constructor(props: EditorProps) {
        super(props);
    }

    render(): JSX.Element {
        const { initialSource, onChange } = this.props;

        return (
            <ReactResizeDetector handleHeight handleWidth onResize={this._onResize} targetRef={this._parentDiv}>
                <div className={styles.editorContainer} ref={this._parentDiv}>
                    <AceEditor
                        name="tiro-editor" // TODO Must be unique
                        ref={this._aceInstance}
                        className={styles.editor}
                        onChange={onChange}
                        height="100%"
                        width="100%"
                        value={initialSource}
                        {...this._editorSettings}
                    />
                </div>
            </ReactResizeDetector>
        );
    }

    private _onResize = (): void => {
        const ace: any = this._aceInstance.current;
        ace?.editor.resize();
    };
}
