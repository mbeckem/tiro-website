import React, { FC, Fragment, ReactNode } from "react";
import styles from "./Grammar.module.scss";

export interface RuleProps {
    name: string;
    definition: Item;
}

// Strings are literals, arrays are sequences, the other types have their own docs.
export type Item =
    | string
    | Item[]
    | Terminal
    | Range
    | NonTerminal
    | Sequence
    | Optional
    | Choice
    | Repeat
    | Not
    | Note;

// "foo"
export interface Terminal {
    type: "terminal";
    value: string;
}

// "0"-"9"
export interface Range {
    type: "range";
    value: [string, string];
}

// Reference to another rule
export interface NonTerminal {
    type: "nonterminal";
    name: string;
    undefined?: boolean;
}

// a b c
export interface Sequence {
    type: "sequence";
    children: Item[];
}

// a?
export interface Optional {
    type: "optional";
    child: Item;
}

// (a | b)
export interface Choice {
    type: "choice";
    children: Item[];
}

// a* or a+
export interface Repeat {
    type: "repeat";
    child: Item;
    min?: number;
}

// ~a
export interface Not {
    type: "not";
    child: Item;
}

// a_subscript
export interface Note {
    type: "note";
    child: Item;
    note: string;
}

export const Rules: FC<{}> = ({ children }) => {
    return <dl>{children}</dl>;
};

export const Rule: FC<RuleProps> = ({ name, definition }) => {
    return (
        <div id={anchorId(name)} className={styles.rule}>
            <dt>
                <em>{name}</em>
            </dt>
            <dd>{render(normalize(definition), 0)}</dd>
        </div>
    );
};

type NormalizedItem = Exclude<Item, string | Item[]>;

type NormalizedItemType = NormalizedItem["type"];

function normalize(item: Item): NormalizedItem {
    if (typeof item === "string") {
        return {
            type: "terminal",
            value: item
        };
    }
    if (Array.isArray(item)) {
        return {
            type: "sequence",
            children: item
        };
    }
    return item;
}

const precedences = (() => {
    // items on top have higher precedence
    const order: NormalizedItemType[][] = [
        ["terminal", "nonterminal", "note"],
        ["not"],
        ["range"],
        ["repeat", "optional"],
        ["sequence"],
        ["choice"]
    ];

    // higher values -> higher precedence
    const lookup: Partial<Record<NormalizedItemType, number>> = {};
    let current = order.length;
    for (const group of order) {
        for (const type of group) {
            if (lookup[type] !== undefined) {
                throw new Error(`type ${type} already has a precedence value assigned to it`);
            }
            lookup[type] = current;
        }
        current -= 1;
    }
    return lookup;
})();

function getPrecedence(type: NormalizedItemType) {
    const value = precedences[type];
    if (value === undefined) {
        throw new Error(`No precedence assigned to type ${type}`);
    }
    return value;
}

function render(item: NormalizedItem, parentPrecedence: number): ReactNode {
    const type = item.type;
    const currentPrecedence = getPrecedence(type);
    const rendered = (() => {
        switch (type) {
            case "terminal":
                return <code className={styles.item}>{item.value}</code>;
            case "range":
                return (
                    <span className={styles.item}>
                        <code>{item.value[0]}</code> - <code>{item.value[1]}</code>
                    </span>
                );
            case "nonterminal": {
                const content = <em className={styles.item}>{item.name}</em>;
                if (item.undefined) {
                    return content;
                }
                return <a href={`#${anchorId(item.name)}`}>{content}</a>;
            }
            case "sequence": {
                const children = item.children.map((item) => render(normalize(item), currentPrecedence));
                return <span className={styles.item}>{join(children, " ")}</span>;
            }
            case "optional":
                return (
                    <span className={styles.item}>
                        {render(normalize(item.child), currentPrecedence)}
                        <sup>?</sup>
                    </span>
                );
            case "choice": {
                const children = item.children.map((item) => render(normalize(item), currentPrecedence));
                return <span className={styles.item}>{join(children, " | ")}</span>;
            }
            case "repeat": {
                const min = item.min ?? 0;
                if (min !== 0 && min !== 1) {
                    throw new Error(`Support for min value ${min} not implemented`);
                }
                const sign = min === 0 ? "*" : "+";
                return (
                    <span className={styles.item}>
                        {render(normalize(item.child), currentPrecedence)}
                        <sup>{sign}</sup>
                    </span>
                );
            }
            case "not":
                return <span className={styles.item}>~{render(normalize(item.child), currentPrecedence)}</span>;
            case "note":
                return (
                    <span className={styles.item}>
                        {render(normalize(item.child), currentPrecedence)}
                        <sub>{item.note}</sub>
                    </span>
                );
            default:
                throw new Error(`invalid grammar item of type ${(item as any).type}`);
        }
    })();

    if (currentPrecedence < parentPrecedence) {
        return (
            <span className={styles.group}>
                <span>(</span>
                {rendered}
                <span>)</span>
            </span>
        );
    }
    return rendered;
}

function anchorId(ruleName: string) {
    return `grammar_${ruleName}`;
}

function join(items: ReactNode[], sepText: string): ReactNode {
    const joined: ReactNode[] = [];
    for (const item of items) {
        const sep = joined.length ? <span className={styles.separator}>{sepText}</span> : undefined;
        joined.push(
            <Fragment key={joined.length}>
                {sep}
                {item}
            </Fragment>
        );
    }
    return <>{joined}</>;
}
