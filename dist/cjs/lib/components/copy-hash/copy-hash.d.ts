import React from 'react';
type CopyHashColor = 'blue' | 'gray';
export interface CopyHashProps {
    value: string;
    styles?: React.CSSProperties;
    label?: string;
    copiedLabel?: string;
    minified?: boolean;
    variation?: CopyHashColor;
}
export declare const CopyHash: ({ value, label, copiedLabel, variation, styles, minified, }: CopyHashProps) => JSX.Element;
export default CopyHash;
//# sourceMappingURL=copy-hash.d.ts.map