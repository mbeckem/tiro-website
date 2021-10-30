import { FC } from "react";
import { Callout, Intent } from "@blueprintjs/core";

export interface BlockProps {
    title?: string;
    type?: "info" | "warning";
}

export type BoundBlockProps = Omit<BlockProps, "type">;

export const Block: FC<BlockProps> = ({ title, type, children }) => {
    return (
        <Callout title={title} intent={mapType(type)}>
            {children}
        </Callout>
    );
};

export const Info = bindBlock("info");

export const Warning = bindBlock("warning");

export const Todo: FC = ({ children }) => {
    return <Info title="Todo">{children}</Info>;
};

function bindBlock(type: BlockProps["type"]) {
    const BoundBlock: FC<BoundBlockProps> = (props: BoundBlockProps) => {
        return <Block {...props} type={type} />;
    };
    return BoundBlock;
}

function mapType(type: BlockProps["type"]): Intent {
    type ??= "info";
    switch (type) {
        case "info":
            return "primary";
        case "warning":
            return "danger";
    }
}
