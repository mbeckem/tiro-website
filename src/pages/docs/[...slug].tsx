import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@src/components/Layout";
import { SEO } from "@src/components/SEO";
import { getArticleSlugs, getArticle, Article } from "@src/docs/articles";
import { Container } from "@src/components/Container";
import { Article as ArticleComponent } from "@src/components/Article";
import { CompiledMdx, hydrate, renderMdx } from "@src/docs/mdx-support";

export interface ArticleProps {
    slug: string;
    frontMatter: Article["frontMatter"];
    mdx: CompiledMdx;
}

export default function ArticlePage({ frontMatter, mdx }: ArticleProps): JSX.Element {
    const content = hydrate(mdx);
    return (
        <Layout>
            <SEO title={frontMatter.title} />
            <Container>
                <ArticleComponent>
                    <h1>{frontMatter.title}</h1>
                    {content}
                </ArticleComponent>
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slugArray: string[] = params!.slug as string[];

    const slug = slugArray.join("/");
    const article = await getArticle(slug);
    const compiledMdxSource = await renderMdx(article.content);
    return {
        props: {
            slug: slug,
            frontMatter: article.frontMatter,
            mdx: compiledMdxSource
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
