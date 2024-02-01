import React from 'react';
import { InputValidationType } from '../input/input';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
import { ModalPosition } from '../confirmation-window/confirmation-window';
export interface ValidationProps {
    validationMessage: string;
    regexpPattern: any;
}
export interface UserInputWindowSceneProps {
    isOpen: boolean;
    bodyImg?: React.ReactElement;
    position: ModalPosition;
    title: string;
    withHeader?: boolean;
    headerLogo?: React.ReactElement;
    information?: React.ReactElement | string;
    confirmLabel: string;
    onConfirm: (value: string, isChecked?: boolean) => void;
    confirmColor?: string;
    dismissLabel?: string;
    onDismiss: () => void;
    inputLabel?: string;
    inputType: InputValidationType;
    placeholder?: string;
    required?: boolean;
    shouldCloseOnEsc?: boolean;
    shouldCloseOnOverlayClick?: boolean;
    themeMode?: ThemeModeType;
    checkboxLabel?: string | React.ReactElement;
    validationSetting?: ValidationProps;
    portalClass?: string;
}
export declare const UserInputWindow: ({ isOpen, position, title, withHeader, headerLogo, bodyImg, information, confirmLabel, confirmColor, onConfirm, dismissLabel, shouldCloseOnEsc, shouldCloseOnOverlayClick, onDismiss, themeMode, inputType, placeholder, required, inputLabel, checkboxLabel, validationSetting, portalClass, }: UserInputWindowSceneProps) => JSX.Element;
export default UserInputWindow;
//# sourceMappingURL=user-input-window.d.ts.map