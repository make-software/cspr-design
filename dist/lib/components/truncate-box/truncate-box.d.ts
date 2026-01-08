import { default as React } from 'react';
import { BaseProps, Size } from '../../base-types.ts';
export interface TruncateBoxProps extends BaseProps {
    size?: Size;
    lineHeight?: 'xs' | 'sm';
}
export declare const TruncateBox: React.ForwardRefExoticComponent<TruncateBoxProps & React.RefAttributes<HTMLDivElement>>;
export default TruncateBox;
//# sourceMappingURL=truncate-box.d.ts.map