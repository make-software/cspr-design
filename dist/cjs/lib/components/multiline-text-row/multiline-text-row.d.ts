import { ReactNode } from 'react';
export interface MultilineTextRowProps {
    label?: string;
    rightLabel?: string;
    text?: string | ReactNode;
    height?: string;
    width?: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    suffixText?: string;
    labelIcon?: ReactNode;
    labelTooltipText?: string | undefined;
}
export declare function MultilineTextRow(props: MultilineTextRowProps): import("react/jsx-runtime").JSX.Element;
export default MultilineTextRow;
//# sourceMappingURL=multiline-text-row.d.ts.map