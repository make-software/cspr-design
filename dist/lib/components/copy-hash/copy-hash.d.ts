import { default as React } from 'react';
type CopyHashColor = 'blue' | 'gray';
export interface CopyHashProps {
    value: string;
    styles?: React.CSSProperties;
    label?: string;
    copiedLabel?: string;
    minified?: boolean;
    variation?: CopyHashColor;
}
/** @deprecated use Copy component instead */
export declare const CopyHash: ({ value, label, copiedLabel, variation, styles, minified, }: CopyHashProps) => import("react/jsx-runtime").JSX.Element;
export default CopyHash;
//# sourceMappingURL=copy-hash.d.ts.map