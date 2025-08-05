import { default as React } from 'react';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
export declare enum ModalPosition {
    TopRight = "topRight",
    Center = "center"
}
export interface ModalPositionProps {
    position: ModalPosition;
}
export interface ConfirmationWindowSceneProps {
    isOpen: boolean;
    bodyImg?: React.ReactElement;
    position: ModalPosition;
    title: string;
    withHeader?: boolean;
    headerLogo?: React.ReactElement;
    information?: React.ReactElement | string;
    confirmLabel: string;
    onConfirm: () => void;
    confirmColor?: string;
    dismissLabel?: string;
    onDismiss: () => void;
    themeMode?: ThemeModeType;
    portalClass?: string;
}
export declare const ConfirmationWindow: ({ isOpen, position, title, withHeader, headerLogo, bodyImg, information, confirmLabel, confirmColor, onConfirm, dismissLabel, onDismiss, themeMode, portalClass, }: ConfirmationWindowSceneProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmationWindow;
//# sourceMappingURL=confirmation-window.d.ts.map