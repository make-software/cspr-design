/// <reference types="react" />
export interface ConfirmationWindowSceneProps {
    isOpen: boolean;
    title: string;
    withHeader?: boolean;
    headerLogoSrc?: string;
    information?: string;
    confirmLabel: string;
    onConfirm: () => void;
    confirmColor?: string;
    dismissLabel?: string;
    onDismiss: () => void;
}
export declare const ConfirmationWindow: ({ isOpen, title, withHeader, headerLogoSrc, information, confirmLabel, confirmColor, onConfirm, dismissLabel, onDismiss, }: ConfirmationWindowSceneProps) => JSX.Element;
export default ConfirmationWindow;
//# sourceMappingURL=confirmation-window.d.ts.map