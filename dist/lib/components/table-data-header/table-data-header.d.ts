import { BaseProps } from '../../base-types.ts';
export interface TableDataHeaderProps extends BaseProps {
    align?: 'left' | 'right' | 'center';
    fitContent?: boolean;
    tooltipText?: JSX.Element | string | undefined;
    icon?: JSX.Element | undefined;
    fixedWidthRem?: number;
}
export declare function TableDataHeader({ children, tooltipText, icon, ...restProps }: TableDataHeaderProps): import("react/jsx-runtime").JSX.Element;
export default TableDataHeader;
//# sourceMappingURL=table-data-header.d.ts.map