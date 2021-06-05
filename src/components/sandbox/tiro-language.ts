import type * as monaco from "monaco-editor";

type Monaco = typeof monaco;

export function setupLanguage(monaco: Monaco): void {
    monaco.languages.register({ id: "tiro" });
    monaco.languages.setLanguageConfiguration("tiro", {
        comments: {
            lineComment: "//",
            blockComment: ["/*", "*/"]
        },
        brackets: [
            ["{", "}"],
            ["[", "]"],
            ["(", ")"]
        ],
        autoClosingPairs: [
            { open: "{", close: "}" },
            { open: "[", close: "]" },
            { open: "(", close: ")" },
            { open: "'", close: "'", notIn: ["string", "comment"] },
            { open: '"', close: '"', notIn: ["string"] },
            { open: "`", close: "`", notIn: ["string", "comment"] },
            { open: "/**", close: " */", notIn: ["string"] }
        ],
        autoCloseBefore: ";:.,=}])` \n\t"
    });
    monaco.languages.registerDocumentSemanticTokensProvider("tiro", new TokensProvider());
}

const tokenTypes: Record<string, number> = {};
const tokenModifiers: Record<string, number> = {};
const legend: monaco.languages.SemanticTokensLegend = (() => {
    const tokenNames = ["comment", "string", "keyword", "function", "member", "variable", "parameter"];
    tokenNames.forEach((name, index) => (tokenTypes[name] = index));

    const modifierNames = ["declaration"];
    modifierNames.forEach((name, index) => (tokenModifiers[name] = index));

    return {
        tokenTypes: tokenNames,
        tokenModifiers: modifierNames
    };
})();

class TokensProvider implements monaco.languages.DocumentSemanticTokensProvider {
    getLegend(): monaco.languages.SemanticTokensLegend {
        return legend;
    }
    async provideDocumentSemanticTokens(model: monaco.editor.ITextModel): Promise<monaco.languages.SemanticTokens> {
        void model;
        return { data: new Uint32Array() };
    }
    releaseDocumentSemanticTokens(resultId: string | undefined) {
        void resultId;
    }
}
