/// <reference types="react" />
import { BaseProps } from '../../types';
export interface TableDataProps extends BaseProps {
    align?: 'left' | 'right' | 'center';
    fitContent?: boolean;
    indented?: boolean;
    colSpan?: number;
    rowSpan?: number;
}
export declare function TableData(props: TableDataProps): JSX.Element;
export default TableData;
//# sourceMappingURL=table-data.d.ts.map