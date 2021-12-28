import React, { FC } from "react";
import Highlight, { Prism, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import { sandbox, withBasePath } from "@/routes";
import { AnchorButton } from "@blueprintjs/core";

export interface CodeBlockProps {
    language: string;
    code: string;
}

export interface MarkdownCodeBlockProps {
    className?: string;
    children: string | string[];
}

export const CodeBlock: FC<CodeBlockProps> = ({ language, code }) => {
    const sandboxLink =
        language === "tiro" ? (
            <AnchorButton
                text="Try in sandbox"
                href={withBasePath(sandbox(code))}
                rightIcon="share"
                rel="noreferrer"
                target="blank"
                minimal={true}
                outlined={false}
            />
        ) : null;

    return (
        <div>
            <div style={{ float: "right" }}>{sandboxLink}</div>
            <Highlight Prism={Prism} theme={theme} code={code.trim()} language={language as Language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ ...style, padding: "10px" }}>
                        {tokens.map((line, i) => {
                            return (
                                <div key={i} {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            );
                        })}
                    </pre>
                )}
            </Highlight>
        </div>
    );
};

export const MarkdownCodeBlock: FC<MarkdownCodeBlockProps> = ({ className, children }) => {
    const language = className?.replace(/language-/, "") || "plain";
    const code = Array.isArray(children) ? children.join("") : children;
    return <CodeBlock language={language} code={code} />;
};
