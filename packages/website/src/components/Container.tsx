import React from "react";
import classNames from "classnames";
import styles from "./Container.module.scss";

export interface ContainerProps {
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => {
    return <div className={classNames(styles.container, className)}>{children}</div>;
};
