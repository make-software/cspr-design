import React from 'react';
import { InputValidationType } from '../input/input';
import { ThemeModeType } from '../navigation/cspr-products-menu/products-menu-item';
import { ModalPosition } from '../confirmation-window/confirmation-window';
import { WarningMessageProps } from '../warning-message/warning-message';
export interface ValidationProps {
    validationMessage: string;
    regexpPattern: any;
}
export interface RepeatInputProps {
    validationMessage: string;
    label?: string;
    placeholder?: string;
}
export interface UserInputWindowSceneProps {
    isOpen: boolean;
    bodyImg?: React.ReactElement;
    position: ModalPosition;
    title: string;
    withHeader?: boolean;
    resetForm?: boolean;
    headerLogo?: React.ReactElement;
    information?: React.ReactElement | string;
    repeatInput?: RepeatInputProps;
    warningMessage?: WarningMessageProps;
    informationOnlyMode?: boolean;
    hideXButton?: boolean;
    confirmLabel: string;
    confirmDisabled?: boolean;
    onConfirm: (value: string, isChecked?: boolean) => void;
    confirmColor?: string;
    dismissLabel?: string;
    dismissDisabled?: boolean;
    onDismiss?: (origin: DismissOrigin) => void;
    isMandatoryCheckBox?: boolean;
    inputLabel?: string;
    inputType?: InputValidationType;
    placeholder?: string;
    required?: boolean;
    shouldCloseOnEsc?: boolean;
    shouldCloseOnOverlayClick?: boolean;
    themeMode?: ThemeModeType;
    checkboxLabel?: string | React.ReactElement;
    validationSetting?: ValidationProps;
    portalClass?: string;
}
export declare enum DismissOrigin {
    HeaderCloseButton = 0,
    DismissButton = 1,
    Overlay = 2,
    ESC = 3
}
export declare const UserInputWindow: ({ isOpen, position, title, withHeader, headerLogo, bodyImg, information, confirmLabel, confirmDisabled, confirmColor, onConfirm, dismissLabel, dismissDisabled, shouldCloseOnEsc, shouldCloseOnOverlayClick, onDismiss, themeMode, inputType, placeholder, required, inputLabel, checkboxLabel, validationSetting, repeatInput, warningMessage, informationOnlyMode, isMandatoryCheckBox, hideXButton, resetForm, portalClass, }: UserInputWindowSceneProps) => import("react/jsx-runtime").JSX.Element;
export default UserInputWindow;
//# sourceMappingURL=user-input-window.d.ts.map