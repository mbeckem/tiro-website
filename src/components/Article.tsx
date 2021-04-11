import React from "react";
import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import styles from "./Article.module.scss";

export interface ArticleProps {
    className?: string;
}

export const Article: React.FC<ArticleProps> = ({ className, children }) => {
    return (
        <article className={classNames(Classes.RUNNING_TEXT, Classes.TEXT_LARGE, styles.article, className)}>
            {children}
        </article>
    );
};
