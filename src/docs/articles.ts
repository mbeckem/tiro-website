import { join } from "path";
import { getData, getSlugs } from "./file-access";

export interface Article {
    frontMatter: {
        title: string;
    };
    content: string;
}

const articlesDir = join(process.cwd(), "docs/articles");

export function getArticleSlugs(): Promise<string[]> {
    return getSlugs(articlesDir);
}

export async function getArticle(slug: string): Promise<Article> {
    const item = await getData(articlesDir, slug);
    if (typeof item.frontMatter.title !== "string") {
        throw new Error(`Article ${slug} has no title`);
    }

    return (item as unknown) as Article;
}
