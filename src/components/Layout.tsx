import React, { memo, ReactNode } from "react";
import Link from "next/link";
import { Classes, Navbar } from "@blueprintjs/core";
import classNames from "classnames";

import config from "@src/config";
import GithubIcon from "@assets/github.inline.svg";
import * as routes from "@src/routes";
import { ExternalLink } from "./ExternalLink";
import styles from "./Layout.module.scss";

export interface LayoutProps {
    fullHeight?: boolean;
    children: ReactNode;
}

export const Layout = memo(function Layout({ fullHeight = false, children }: LayoutProps): JSX.Element {
    const contentStyle: any = {};
    if (fullHeight) {
        // The content element uses display: flex. Hiding overflow limits
        // its max size to its container's size.
        contentStyle["overflow"] = "hidden";
    }

    return (
        <div
            className={classNames(styles.container, {
                [styles.fullHeight!]: fullHeight
            })}
        >
            <header className={styles.header}>
                <Nav siteTitle={config.title} />
            </header>
            <main className={styles.content} style={contentStyle}>
                {children}
            </main>
        </div>
    );
});

const Nav = function Nav(props: { siteTitle: string }) {
    return (
        <Navbar className={classNames(Classes.DARK, styles.nav)}>
            <Navbar.Group>
                <Navbar.Heading>
                    <Link href={routes.index()}>
                        <a className={classNames(styles.title, styles.pageLink)}>{props.siteTitle}</a>
                    </Link>
                </Navbar.Heading>
                <Link href={routes.docs()}>
                    <a className={styles.pageLink}>Documentation</a>
                </Link>
                <Link href={routes.sandbox()}>
                    <a className={styles.pageLink}>Sandbox</a>
                </Link>
            </Navbar.Group>
            <Navbar.Group align="right">
                <ExternalLink className={styles.pageLink} showIcon={false} href="https://github.com/mbeckem/tiro">
                    <GithubIcon className={styles.icon} />
                    Github
                </ExternalLink>
            </Navbar.Group>
        </Navbar>
    );
};
