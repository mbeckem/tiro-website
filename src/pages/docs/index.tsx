import React from "react";
import Link from "next/link";

import { Layout } from "@components/Layout";
import { SEO } from "@components/SEO";
import { Container } from "@components/Container";
import { Article } from "@components/Article";
import { ExternalLink } from "@components/ExternalLink";
import * as routes from "@src/routes";

export default function DocsPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="Documentation" />

            <Container>
                <Article>
                    <h1>Documentation</h1>
                    <section>
                        <h2>The Tiro Language</h2>
                        Documentation for the language itself.
                        <ul>
                            <li>Introduction</li>
                            <li>
                                <ExternalLink href="https://github.com/mbeckem/tiro/blob/master/docs/grammar.md">
                                    Grammar
                                </ExternalLink>
                            </li>
                            <li>The Standard Library</li>
                        </ul>
                    </section>
                    <section>
                        <h2>libtiro</h2>
                        Documentation for the native C and C++ library.
                        <ul>
                            <li>
                                <Link href={routes.LibTiro.gettingStarted()}>
                                    <a>Getting started</a>
                                </Link>
                            </li>
                            <li>
                                <ExternalLink href="https://github.com/mbeckem/tiro/blob/master/docs/building.md">
                                    Building libtiro
                                </ExternalLink>
                            </li>
                            <li>
                                <Link href={routes.LibTiro.embeddersGuide()}>
                                    <a>Embedder&apos;s Guide</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={routes.apidocsIndex()}>
                                    <a>API Reference</a>
                                </Link>
                            </li>
                            <li>
                                <ExternalLink href="https://github.com/mbeckem/tiro">Github Project</ExternalLink>
                            </li>
                        </ul>
                    </section>
                </Article>
            </Container>
        </Layout>
    );
}
