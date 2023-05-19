/// <reference types="react" />
type CopyHashColor = 'blue' | 'gray';
export interface CopyHashProps {
    value: string;
    label?: string;
    copiedLabel?: string;
    minified?: boolean;
    variation?: CopyHashColor;
}
export declare const CopyHash: ({ value, label, copiedLabel, variation, minified, }: CopyHashProps) => JSX.Element;
export default CopyHash;
//# sourceMappingURL=copy-hash.d.ts.map