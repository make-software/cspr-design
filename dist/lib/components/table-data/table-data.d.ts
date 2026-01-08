import { BaseProps } from '../../base-types.ts';
export interface TableDataProps extends BaseProps {
    align?: 'left' | 'right' | 'center';
    fitContent?: boolean;
    indented?: boolean;
    colSpan?: number;
    rowSpan?: number;
}
export declare function TableData(props: TableDataProps): import("react/jsx-runtime").JSX.Element;
export default TableData;
//# sourceMappingURL=table-data.d.ts.map