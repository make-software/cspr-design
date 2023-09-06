/// <reference types="react" />
import { BaseProps } from '../../types';
export declare enum CheckboxFontSize {
    'default' = "default",
    'small' = "small"
}
export interface CheckboxProps extends BaseProps {
    label?: string;
    onChange?: (value?: any) => void;
    checked: boolean;
    disabled?: boolean;
    customCheckedColor?: string;
    customUncheckedColor?: string;
    checkboxFontSize?: CheckboxFontSize;
}
export declare function Checkbox({ checked, onChange, label, disabled, customCheckedColor, customUncheckedColor, checkboxFontSize }: CheckboxProps): JSX.Element;
export default Checkbox;
//# sourceMappingURL=checkbox.d.ts.map