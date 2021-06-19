import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@src/components/Layout";
import { SEO } from "@src/components/SEO";
import { getArticleSlugs, getArticle, Article } from "@src/docs/articles";
import { Container } from "@src/components/Container";
import { Article as ArticleComponent } from "@src/components/Article";
import { SerializedMDX, serializeMDX } from "@src/docs/serializeMdx";
import { MDXRenderer } from "@src/components/MDXRenderer";

export interface ArticleProps {
    slug: string;
    frontMatter: Article["frontMatter"];
    mdx: SerializedMDX;
}

export default function ArticlePage({ frontMatter, mdx }: ArticleProps): JSX.Element {
    return (
        <Layout>
            <SEO title={frontMatter.title} />
            <Container>
                <ArticleComponent>
                    <MDXRenderer mdx={mdx} />
                </ArticleComponent>
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slugArray: string[] = params!.slug as string[];

    const slug = slugArray.join("/");
    const article = await getArticle(slug);
    const mdx = await serializeMDX(article.content);
    return {
        props: {
            slug: slug,
            frontMatter: article.frontMatter,
            mdx: mdx
        }
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await getArticleSlugs();
    const paths = slugs.map((slug) => ({
        params: {
            slug: slug.split("/")
        }
    }));
    return { paths, fallback: false };
};
