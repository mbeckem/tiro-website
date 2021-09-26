import React, { FC, ReactElement, useCallback } from "react";
import type * as monaco from "monaco-editor";
import MonacoEditor, { loader, Monaco } from "@monaco-editor/react";
import { withBasePath } from "@src/routes";
import { useAsync } from "@src/hooks/useAsync";
import { setupLanguage } from "./tiroLanguage";
import { useDebounce } from "@src/hooks/useDebounce";

export interface EditorProps {
    initialSource: string;
    onChange: (newSource: string) => void;
    onMount?: () => void;
}

loader.config({
    paths: {
        vs: withBasePath("monaco/vs")
    }
});

let INIT_PROMISE: Promise<Monaco> | undefined;

const DEFAULT_OPTIONS: monaco.editor.IStandaloneEditorConstructionOptions = {
    "cursorBlinking": "solid",
    "tabSize": 4,
    "insertSpaces": true,
    "semanticHighlighting.enabled": true
};

export const Editor: FC<EditorProps> = (props: EditorProps): ReactElement | null => {
    const { initialSource, onChange, onMount } = props;
    const asyncMonaco = useAsync(loadMonaco);
    const onMountCallback = useCallback(
        (editor: monaco.editor.IStandaloneCodeEditor) => {
            const endPosition = editor.getModel()?.getFullModelRange().getEndPosition() ?? { lineNumber: 1, column: 1 };
            editor.setPosition(endPosition);
            editor.focus();
            onMount?.();
        },
        [onMount]
    );
    const onChangeCallback = useDebounce(
        useCallback(
            (source: string | undefined) => {
                onChange(source ?? "");
            },
            [onChange]
        ),
        100
    );

    if (asyncMonaco.state === "loading") {
        return null;
    }
    if (asyncMonaco.state === "error") {
        return <p>Failed to load monaco editor: {String(asyncMonaco.error)}</p>;
    }

    return (
        <MonacoEditor
            defaultValue={initialSource}
            language="tiro"
            theme="light"
            options={DEFAULT_OPTIONS}
            onChange={onChangeCallback}
            onMount={onMountCallback}
        />
    );
};

function loadMonaco(): Promise<Monaco> {
    if (INIT_PROMISE) {
        return INIT_PROMISE;
    }

    async function init() {
        const monaco = await loader.init();
        setupLanguage(monaco);
        return monaco;
    }

    return (INIT_PROMISE = init());
}
