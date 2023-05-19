import React from 'react';
import { TextProps } from '../text/text';
export interface BodyTextProps extends TextProps {
    size: 1 | 2 | 3;
    scale?: 'xs' | 'sm' | 'md' | 'lg';
}
export declare const BodyText: React.ForwardRefExoticComponent<BodyTextProps & React.RefAttributes<HTMLSpanElement>>;
export default BodyText;
//# sourceMappingURL=body-text.d.ts.map