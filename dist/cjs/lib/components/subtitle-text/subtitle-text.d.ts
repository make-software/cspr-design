import React from 'react';
import { TextProps } from '../text/text';
export interface SubtitleTextProps extends TextProps {
    size: 1 | 2 | 3;
    scale?: 'md' | 'lg';
}
export declare const SubtitleText: React.ForwardRefExoticComponent<SubtitleTextProps & React.RefAttributes<HTMLSpanElement>>;
export default SubtitleText;
//# sourceMappingURL=subtitle-text.d.ts.map