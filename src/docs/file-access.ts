import glob from "fast-glob";
import matter from "gray-matter";
import { join } from "path";
import { ensureServer } from "@src/utils";
import { promises as asyncFs } from "fs";

const access = asyncFs.access;
const readFile = asyncFs.readFile;

export interface DocItem {
    frontMatter: Record<string, string>;
    content: string;
}

export async function getSlugs(baseDir: string): Promise<string[]> {
    ensureServer();
    const files = await glob("**/*.{md,mdx}", { cwd: baseDir });
    return files.map((path) => path.replace(/\\/g, "/").replace(/\.mdx?/, ""));
}

export async function getData(baseDir: string, slug: string): Promise<DocItem> {
    ensureServer();

    const data = await loadFile(baseDir, slug);
    if (!data) {
        throw new Error(`File '${slug}' (in base dir '${baseDir}') not found.`);
    }
    const { content, data: frontMatter } = matter(data);

    return {
        frontMatter,
        content
    };
}

async function loadFile(baseDir: string, slug: string) {
    const path = join(baseDir, slug);
    for (const ext of [".mdx", ".md"]) {
        const withExt = path + ext;
        try {
            await access(withExt);
            return await readFile(withExt, { encoding: "utf-8" });
        } catch (e) {
            /* ignore: cannot access */
        }
    }
}
