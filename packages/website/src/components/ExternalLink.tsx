import { Icon } from "@blueprintjs/core";
import React from "react";

export interface ExternalLinkProps {
    href: string;
    className?: string;
    showIcon?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, className, children, showIcon = true }) => {
    const icon = showIcon && (
        <Icon icon="share" iconSize={12} style={{ verticalAlign: "baseline", paddingLeft: "4px" }} />
    );
    return (
        <a className={className} href={href} rel="noopener noreferrer" target="_blank">
            {children}
            {icon}
        </a>
    );
};
