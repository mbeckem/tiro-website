import React, { FC } from "react";
import { HTMLTable } from "@blueprintjs/core";
import { chunked } from "@/utils/arrayUtils";
import styles from "./ItemTable.module.scss";

export interface ItemTableProps {
    columns?: number;
    items: string[];
}

/**
 * A simple table that formats its items in a user specified number of columns.
 */
export const ItemTable: FC<ItemTableProps> = ({ columns = 4, items }) => {
    const rowItems = chunked(items, columns);
    const trs = rowItems.map((rawRow, i) => {
        const tds = rawRow.map((item, j) => (
            <td key={j}>
                <code>{item}</code>
            </td>
        ));
        return <tr key={i}>{tds}</tr>;
    });
    return (
        <HTMLTable className={styles.disableBoxShadow} condensed={true} bordered={false}>
            <thead></thead>
            <tbody>{trs}</tbody>
        </HTMLTable>
    );
};
