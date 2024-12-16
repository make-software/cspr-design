import { MouseEventHandler } from 'react';
import { BaseProps } from '../../types';
export interface TableRowProps extends BaseProps {
    loading?: boolean;
    isClickable?: boolean;
    onClick?: MouseEventHandler<HTMLTableRowElement>;
}
export declare enum TableRowType {
    TextSingleLine = "TextSingleLine",
    TextWithIcon = "TextWithIcon",
    TextWithAvatar = "TextWithAvatar"
}
export declare const StyledTableRow: import("styled-components").StyledComponent<"tr", import("styled-components").DefaultTheme, {
    $loading?: boolean | undefined;
    isClickable?: boolean | undefined;
}, never>;
export declare function TableRow({ loading, ...props }: TableRowProps): import("react/jsx-runtime").JSX.Element;
export default TableRow;
//# sourceMappingURL=table-row.d.ts.map