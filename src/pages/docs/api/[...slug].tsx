import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@src/components/Layout";
import { SEO } from "@src/components/SEO";
import { Container } from "@src/components/Container";
import { Article as ArticleComponent } from "@src/components/Article";
import { CompiledMdx, hydrate, renderMdx } from "@src/docs/mdx-support";
import { ApiDocsPage, getApiDocsPage, getApidocsSlugs } from "@src/docs/apidocs";

import styles from "./api.module.scss";
import { apidocsFile } from "@src/routes";

export interface ApiProps {
    slug: string;
    frontMatter: ApiDocsPage["frontMatter"];
    mdx: CompiledMdx;
}

export default function ApiPage({ frontMatter, mdx }: ApiProps): JSX.Element {
    const content = hydrate(mdx);

    const sites = [
        ["Files", "index_files"],
        ["Examples", "index_examples"],
        ["Namespaces", "index_namespaces"],
        ["Classes", "index_classes"]
    ] as const;

    return (
        <Layout>
            <SEO title={[frontMatter.title, "API Documentation"]} />
            <Container>
                <ArticleComponent>
                    <div className={styles.tabs}>
                        <ul>
                            {sites.map(([title, slug]) => (
                                <li key={title}>
                                    <Link href={apidocsFile(slug)}>
                                        <a>{title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {content}
                </ArticleComponent>
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slugArray: string[] = params!.slug as string[];

    const slug = slugArray.join("/");
    const page = await getApiDocsPage(slug);
    const compiledMdxSource = await renderMdx(page.content);
    return {
        props: {
            slug: slug,
            frontMatter: page.frontMatter,
            mdx: compiledMdxSource
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getApidocsSlugs();
    const paths = slugs.map((slug) => ({
        params: {
            slug: slug.split("/")
        }
    }));
    return { paths, fallback: false };
};
