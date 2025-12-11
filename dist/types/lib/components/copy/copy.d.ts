import React from 'react';
type CopyColor = 'blue' | 'gray' | 'green';
export interface CopyProps {
    value: string;
    styles?: React.CSSProperties;
    label?: string;
    copiedLabel?: string;
    minified?: boolean;
    variation?: CopyColor;
}
export declare const Copy: ({ value, label, copiedLabel, variation, styles, minified, }: CopyProps) => import("react/jsx-runtime").JSX.Element;
export default Copy;
//# sourceMappingURL=copy.d.ts.map