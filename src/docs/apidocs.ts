import { join } from "path";
import { getData, getSlugs } from "./file-access";

export interface ApiDocsPage {
    frontMatter: {
        title: string;
    };
    content: string;
}

const apidocsDir = join(process.cwd(), "docs/apidocs");

export function getApidocsSlugs(): Promise<string[]> {
    return getSlugs(apidocsDir);
}

export async function getApiDocsPage(slug: string): Promise<ApiDocsPage> {
    const item = await getData(apidocsDir, slug);
    if (typeof item.frontMatter.title !== "string") {
        throw new Error(`Apidocs page ${slug} has no title`);
    }

    // Hacky workaround to produce valid mdx, which requires closing tags
    // for everything.
    const content = item.content.replace(/<br>/g, "<br/>");
    return {
        frontMatter: item.frontMatter as any,
        content
    };
}
