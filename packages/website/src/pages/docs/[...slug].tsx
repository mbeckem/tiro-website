import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { getArticleSlugs, getArticle, Article } from "@/docs/articles";
import { Container } from "@/components/Container";
import { Article as ArticleComponent } from "@/components/Article";
import { SerializedMDX, serializeMDX } from "@/docs/serializeMdx";
import { MDXRenderer } from "@/components/MDXRenderer";

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
