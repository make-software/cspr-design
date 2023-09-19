import React from 'react';
type BadgeBackgroundColor = 'green' | 'violet' | 'blue' | 'gray' | 'fillBlueGradient';
export interface BadgeProps {
    label: string | React.ReactNode;
    variation?: BadgeBackgroundColor;
    capitalize?: boolean;
    lineHeight?: 'xxs' | 'xs' | 'sm';
}
export declare const Badge: ({ label, variation, capitalize, lineHeight }: BadgeProps) => JSX.Element;
export {};
//# sourceMappingURL=badge.d.ts.map