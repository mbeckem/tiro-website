import Link from "next/link";
import React from "react";
import { ExternalLink } from "./ExternalLink";

interface AutoLinkProps {
    href: string;
    className?: string;
}

/**
 * A simple link component that automatically uses next links for internal urls and ExternalLink otherwise.
 */
export const AutoLink: React.FC<AutoLinkProps> = (props) => {
    const href = props.href;
    if (/^#/.test(href)) {
        return <a {...props} />;
    }
    if (/^($|\/|\.\.?\/)/.test(href)) {
        const otherProps: any = Object.assign({}, props);
        delete otherProps.href;

        return (
            <Link href={href}>
                <a {...otherProps} />
            </Link>
        );
    }

    return <ExternalLink {...props} />;
};
