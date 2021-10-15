import React, { FC } from "react";

export interface RuleProps {
    name: string;
    definition: Item;
}

// Strings are literals, arrays are sequences, the other types have their own docs.
export type Item = string | Item[] | Choice | Optional | Repeat | Not | Note | NonTerminal;

// (a | b)
export interface Choice {
    type: "choice";
    children: Item[];
}

// a?
export interface Optional {
    type: "optional";
    child: Item;
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

// Reference to another rule
export interface NonTerminal {
    type: "nonterminal";
    name: string;
    href?: string;
}

export const Rule: FC<RuleProps> = ({ name, definition }) => {
    return (
        <div>
            <code>{renderRule(name, definition)}</code>
        </div>
    );
};

function renderRule(name: string, definition: Item): string {
    return `${name} -> ${renderItem(definition, true)}`;
}

// TODO: Sloppy precedence rules
function renderItem(item: Item, topLevel = false): string {
    if (typeof item === "string") {
        return JSON.stringify(item); // literal
    }
    if (Array.isArray(item)) {
        const items = item.map((item) => renderItem(item)).join(" ");
        if (topLevel || item.length < 2) {
            return items;
        }
        return `(${items})`;
    }
    switch (item.type) {
        case "choice": {
            const alternatives = item.children.map((item) => renderItem(item, true)).join(" | ");
            if (topLevel) {
                return alternatives;
            }
            return `(${alternatives})`;
        }
        case "optional": {
            return `${renderItem(item.child)}?`;
        }
        case "repeat": {
            const min = item.min ?? 0;
            if (min !== 0 && min !== 1) {
                throw new Error(`Support for min value ${min} not implemented`);
            }
            const sign = min === 0 ? "*" : "+";
            return renderItem(item.child) + sign;
        }
        case "not":
            return `~${renderItem(item.child)}`;
        case "note":
            return `${renderItem(item.child)}_${item.note}`; // TODO <sub>
        case "nonterminal": {
            return `${item.name}`;
        }
        default:
            throw new Error(`invalid grammar item of type ${(item as any).type}`);
    }
}
