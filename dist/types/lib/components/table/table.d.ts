import { ReactNode } from 'react';
export interface TableProps {
    renderHeader?: () => ReactNode;
    renderDataHeaders?: () => ReactNode;
    renderData?: () => ReactNode;
    renderFooter?: () => ReactNode;
    noData?: boolean;
    noDataMessage?: string;
    paddingBottom?: number;
}
export declare const TableContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    paddingBottom?: number;
}, never>;
export declare function Table(props: TableProps): import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=table.d.ts.map