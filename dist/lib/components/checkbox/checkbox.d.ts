import { default as React } from 'react';
export declare enum CheckboxFontSize {
    'default' = "default",
    'small' = "small"
}
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactElement;
    /**
     * Callback function that is triggered when the checkbox is clicked
     * @param value - [NOTE] contains HTML event instead of boolean value
     */
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