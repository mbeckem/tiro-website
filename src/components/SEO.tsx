import React, { memo } from "react";
import Head from "next/head";
import config from "@src/config";

export interface SEOProps {
    description?: string;
    lang?: string;
    meta?: any[];
    title: string | string[];
}

export const SEO = memo(function SEO({ title, description = "", meta = [] }: SEOProps) {
    const titleArray = Array.isArray(title) ? title : [title];
    const titleString = join(titleArray);
    const fullTitleString = join([...titleArray, config.title]);

    const metaDescription = description || config.description;

    return (
        <Head>
            <title>{fullTitleString}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={titleString} />
            <meta property="og:description" content={metaDescription} />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content={config.author.name} />
            <meta property="twitter:title" content={titleString} />
            <meta property="twitter:description" content={metaDescription} />
        </Head>
    );
});

function join(titleComponents: string[]) {
    return titleComponents.join(" | ");
}
