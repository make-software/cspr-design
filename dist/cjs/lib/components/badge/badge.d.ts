import React from 'react';
type BadgeBackgroundColor = 'green' | 'violet' | 'blue' | 'gray' | 'fillBlueGradient' | string;
export interface BadgeProps {
    label: string | React.ReactNode;
    variation?: BadgeBackgroundColor;
    textColor?: string;
    capitalize?: boolean;
    lineHeight?: 'xxs' | 'xs' | 'sm';
}
export declare const Badge: ({ label, variation, textColor, capitalize, lineHeight }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=badge.d.ts.map