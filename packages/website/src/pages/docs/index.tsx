import React from "react";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { Article } from "@/components/Article";
import { ExternalLink } from "@/components/ExternalLink";
import * as routes from "@/routes";

export default function DocsPage(): JSX.Element {
    return (
        <Layout>
            <SEO title="Documentation" />

            <Container>
                <Article>
                    <h1>Documentation</h1>
                    <section>
                        <h2>The Tiro language</h2>
                        Documentation for the language itself.
                        <ul>
                            <li>Introduction</li>
                            <li>
                                <Link href={routes.Lang.reference()}>Language reference</Link>
                            </li>
                            <li>
                                <Link href={routes.Lang.standardLibrary()}>
                                    <a>The standard library</a>
                                </Link>
                            </li>
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
                                    <a>Embedder&apos;s guide</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={routes.apidocsIndex()}>
                                    <a>API reference</a>
                                </Link>
                            </li>
                            <li>
                                <ExternalLink href="https://github.com/mbeckem/tiro">Github project</ExternalLink>
                            </li>
                            <li>
                                <ExternalLink href="https://github.com/mbeckem/tiro/tree/master/docs">
                                    Internal documentation
                                </ExternalLink>
                            </li>
                        </ul>
                    </section>
                </Article>
            </Container>
        </Layout>
    );
}
