import React from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/Container";
import { Article as ArticleComponent } from "@/components/Article";
import { serializeMDX, SerializedMDX } from "@/docs/serializeMdx";
import { ApiDocsPage, getApiDocsPage, getApidocsSlugs } from "@/docs/apidocs";

import styles from "./api.module.scss";
import { apidocsFile } from "@/routes";
import { MDXRenderer } from "@/components/MDXRenderer";

export interface ApiProps {
    slug: string;
    frontMatter: ApiDocsPage["frontMatter"];
    mdx: SerializedMDX;
}

export default function ApiPage({ frontMatter, mdx }: ApiProps): JSX.Element {
    const sites = [
        ["Files", "index_files"],
        ["Examples", "index_examples"],
        ["Namespaces", "index_namespaces"],
        ["Classes", "index_classes"]
    ] as const;

    return (
        <Layout>
            <SEO title={["Native API", frontMatter.title]} />
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
                    <MDXRenderer mdx={mdx} />
                </ArticleComponent>
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slugArray: string[] = params!.slug as string[];

    const slug = slugArray.join("/");
    const page = await getApiDocsPage(slug);
    const mdx = await serializeMDX(page.content);
    return {
        props: {
            slug: slug,
            frontMatter: page.frontMatter,
            mdx: mdx
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
