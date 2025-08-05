import { default as React } from 'react';
import { BaseProps } from '../../types';
type BadgeBackgroundColor = 'green' | 'violet' | 'blue' | 'gray' | 'fillBlueGradient' | string;
export interface BadgeProps extends BaseProps {
    label: string | React.ReactNode;
    variation?: BadgeBackgroundColor;
    textColor?: string;
    capitalize?: boolean;
    lineHeight?: 'xxs' | 'xs' | 'sm';
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export default Badge;
//# sourceMappingURL=badge.d.ts.map