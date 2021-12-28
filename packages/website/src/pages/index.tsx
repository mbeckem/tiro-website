import React from "react";
import Link from "next/link";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { docs, sandbox, LibTiro, Lang } from "@/routes";

import styles from "./index.module.scss";
import { CodeBlock } from "@/components/CodeBlock";
import { ExternalLink } from "@/components/ExternalLink";

const EXAMPLE_SOURCE = `// Follow the button to run this snippet
import std;

export func main() {
    const name = "Visitor";
    const greeting = if is_authorized() {
        "Welcome to Tiro's home page, \${name}!";
    } else {
        std.panic("You are not authorized to view this");
    };
    std.print(greeting);
}

func is_authorized() = true;
`;

export default function IndexPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="Home" />
            <Container className={classNames(styles.container, Classes.RUNNING_TEXT, Classes.TEXT_LARGE)}>
                <h1 className={styles.header}>The Tiro programming language</h1>

                <div className={classNames(styles.pitch, styles.split)}>
                    <div className={styles.intro}>
                        <p>
                            <strong>Tiro</strong> is a new, dynamic scripting language that can be easily embedded into
                            host applications.
                        </p>
                        <p>
                            The language focuses on readability and expressiveness while the runtime aims at being small
                            and simple to integrate.
                        </p>
                    </div>
                    <div className={styles.links}>
                        Visit the{" "}
                        <strong>
                            <Link href={docs()}>Documentation</Link>
                        </strong>
                        , check out the{" "}
                        <strong>
                            <Link href={sandbox()}>Sandbox</Link>
                        </strong>{" "}
                        or learn how to{" "}
                        <strong>
                            <Link href={LibTiro.gettingStarted()}>build the runtime</Link>
                        </strong>
                        .
                    </div>
                </div>

                <h2 className={styles.header}>Main features</h2>
                <div className={classNames(styles.features, styles.split)}>
                    <div className={styles.list}>
                        <ul>
                            <li>Readable</li>
                            <li>Dynamically typed</li>
                            <li>Garbage collected</li>
                            <li>Expression based</li>
                            <li>Async by default</li>
                            <li>Easy interop with host application</li>
                            <li>Extensive C and C++ APIs</li>
                            <li>Compact library size</li>
                        </ul>
                    </div>
                    <div className={styles.example}>
                        <CodeBlock language="tiro" code={EXAMPLE_SOURCE} />
                    </div>
                </div>

                <h2 className={styles.header}>Project status</h2>
                <p>
                    This project is still under active development. Most major features are complete, but many small
                    tasks still remain:
                    <ul>
                        <li>
                            Feedback is needed in all aspects of this project (language, implementation, standard
                            library, documentation, etc.).
                        </li>
                        <li>
                            The remaining language design issues need to be sorted out (e.g. TODOs in the{" "}
                            <Link href={Lang.reference()}>reference documentation</Link>).
                        </li>
                        <li>
                            The <Link href={Lang.standardLibrary()}>standard library</Link> is still missing many small
                            helpers.
                        </li>
                        <li>
                            See also <ExternalLink href="https://github.com/mbeckem/tiro/issues">Issues</ExternalLink>{" "}
                            and{" "}
                            <ExternalLink href="https://github.com/mbeckem/tiro/blob/master/IDEAS.md">
                                Ideas
                            </ExternalLink>
                            .
                        </li>
                    </ul>
                </p>
            </Container>
        </Layout>
    );
}
