import { default as React, ReactNode } from 'react';
import { LabelFontSize } from '../../base-types.ts';
export declare enum InputValidationType {
    PositiveInteger = "positive_int",
    CSPR = "cspr",
    email = "email",
    password = "password"
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.ForwardedRef<HTMLInputElement>;
    disabled?: boolean;
    monotype?: boolean;
    placeholder?: string;
    value?: string | number;
    onChange?: (ev: any) => void;
    onFocus?: (ev: any) => void;
    onBlur?: (ev: any) => void;
    onKeyDown?: (ev: any) => void;
    height?: '36' | '40';
    step?: string;
    label?: ReactNode | string;
    labelFontSize?: LabelFontSize;
    rightLabel?: ReactNode | string;
    prefixIcon?: ReactNode | null;
    suffixIcon?: ReactNode | null;
    suffixText?: string | null;
    name?: string;
    required?: boolean;
    error?: boolean;
    validationType?: InputValidationType;
    validationText?: string | null;
}
export declare const InputRef: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export declare function Input({ id, className, style, disabled, monotype, height, label, rightLabel, prefixIcon, suffixIcon, suffixText, required, error, validationType, validationText, onFocus, name, labelFontSize, ...restProps }: InputProps): import("react/jsx-runtime").JSX.Element;
export default Input;
//# sourceMappingURL=input.d.ts.map