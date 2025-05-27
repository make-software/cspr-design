/// <reference types="react" />
import { BaseProps } from '../../types';
import { TextVariation } from '../text/text';
export interface CircularIndicatorProps extends BaseProps {
    size: 'medium';
    progress: number;
    textSize: 1 | 2;
    title?: string;
}
export declare enum CircularIndicatorTextSize {
    'small' = 1,
    'default' = 2
}
export declare const CircularIndicatorTextVariation: {
    [CircularIndicatorTextSize.small]: TextVariation;
    [CircularIndicatorTextSize.default]: TextVariation;
};
export declare const ProgressColorsRange: {
    id: number;
    limit: number;
    color: string;
}[];
/**
 * @example
 * <CircularIndicator size="medium" progress={0 - 100} />
 */
export declare function CircularIndicator({ size, progress, textSize, title }: CircularIndicatorProps): JSX.Element;
export default CircularIndicator;
//# sourceMappingURL=circular-indicator.d.ts.map