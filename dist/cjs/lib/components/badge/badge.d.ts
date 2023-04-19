import React from 'react';
type BadgeBackgroundColor = 'green' | 'violet' | 'blue';
export interface BadgeProps {
    label: string | React.ReactNode;
    variation?: BadgeBackgroundColor;
    capitalize?: boolean;
}
export declare const Badge: ({ label, variation, capitalize, }: BadgeProps) => JSX.Element;
export {};
//# sourceMappingURL=badge.d.ts.map