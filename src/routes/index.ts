import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath: string = publicRuntimeConfig.basePath;

export function index(): string {
    return "/";
}

export function about(): string {
    return "/about";
}

export function sandbox(): string {
    return "/sandbox";
}

export function docs(): string {
    return "/docs";
}

export function apidocsFolder(): string {
    return "/docs/api";
}

export function apidocsFile(slug: string): string {
    return `${apidocsFolder()}/${slug}`;
}

export function apidocsIndex(): string {
    return apidocsFile("index_files");
}

export function docsArticle(id: string): string {
    return `/docs/${id}`;
}

export const Lang = {
    standardLibrary: () => docsArticle("stdlib")
} as const;

export const LibTiro = {
    gettingStarted: () => docsArticle("libtiro/getting-started"),
    embeddersGuide: () => docsArticle("libtiro/embedders-guide")
} as const;

export function withBasePath(appRelativePath: string): string {
    let r: string = basePath;
    if (!r.endsWith("/") && !r.startsWith("/")) {
        r += "/";
    }
    r += "/";
    r += appRelativePath;
    return r;
}
