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
            { open: "/**", close: " */", notIn: ["string"] }
        ],
        autoCloseBefore: ";:.,=}])` \n\t"
    });
    //monaco.languages.registerDocumentSemanticTokensProvider("tiro", new TokensProvider(monaco));
}
