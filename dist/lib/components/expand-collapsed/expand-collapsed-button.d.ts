import { default as React } from 'react';
interface ExpandCollapsedButtonProps {
    expandedLabel: React.ReactNode;
    collapsedLabel: React.ReactNode;
    showArrow?: boolean;
    onExpand?: (collapsed: boolean) => void;
}
export declare const ExpandCollapsedButton: {
    ({ expandedLabel, collapsedLabel, showArrow, onExpand, }: ExpandCollapsedButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default ExpandCollapsedButton;
//# sourceMappingURL=expand-collapsed-button.d.ts.map