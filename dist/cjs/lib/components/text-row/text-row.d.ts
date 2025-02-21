import { ReactNode } from 'react';
export declare enum TextRowType {
    'Text' = "text",
    'Hash' = "hash",
    'Number' = "number"
}
export interface TextRowProps {
    label?: string;
    rightLabel?: string;
    text?: string | null;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    suffixText?: string;
    type: TextRowType;
    labelIcon?: ReactNode;
    labelTooltipText?: string | undefined;
}
export declare function TextRow(props: TextRowProps): JSX.Element;
export default TextRow;
//# sourceMappingURL=text-row.d.ts.map