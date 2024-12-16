import React from 'react';
import { BaseProps } from '../../types';
export declare enum CheckboxFontSize {
    'default' = "default",
    'small' = "small"
}
export interface CheckboxProps extends BaseProps {
    label?: string | React.ReactElement;
    onChange?: (value?: any) => void;
    checked: boolean;
    disabled?: boolean;
    customCheckedColor?: string;
    customUncheckedColor?: string;
    checkboxFontSize?: CheckboxFontSize;
}
export declare function Checkbox({ checked, onChange, label, disabled, customCheckedColor, customUncheckedColor, checkboxFontSize, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export default Checkbox;
//# sourceMappingURL=checkbox.d.ts.map