import React from 'react';
import { InputValidationType } from '../input/input';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
import { ModalPosition } from '../confirmation-window/confirmation-window';
export interface UserInputWindowSceneProps {
    isOpen: boolean;
    bodyImg?: React.ReactElement;
    position: ModalPosition;
    title: string;
    withHeader?: boolean;
    headerLogo?: React.ReactElement;
    information?: React.ReactElement | string;
    confirmLabel: string;
    onConfirm: (value: string) => void;
    confirmColor?: string;
    dismissLabel?: string;
    onDismiss: () => void;
    inputLabel?: string;
    inputType: InputValidationType;
    validationMessage?: string;
    placeholder?: string;
    required?: boolean;
    themeMode?: ThemeModeType;
    portalClass?: string;
}
export declare const UserInputWindow: ({ isOpen, position, title, withHeader, headerLogo, bodyImg, information, confirmLabel, confirmColor, onConfirm, dismissLabel, onDismiss, themeMode, inputType, placeholder, required, inputLabel, validationMessage, portalClass, }: UserInputWindowSceneProps) => JSX.Element;
export default UserInputWindow;
//# sourceMappingURL=user-input-window.d.ts.map