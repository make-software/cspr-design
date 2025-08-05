import { ReactNode } from 'react';
import { BaseProps } from '../../types';
import { LabelFontSize } from '../input/input';
export interface TextareaProps extends BaseProps {
    disabled?: boolean;
    placeholder?: string;
    value?: string | number;
    onChange?: (ev: any) => void;
    onFocus?: (ev: any) => void;
    onBlur?: (ev: any) => void;
    onKeyDown?: (ev: any) => void;
    label?: ReactNode | string;
    labelFontSize?: LabelFontSize;
    rightLabel?: ReactNode | string;
    prefixIcon?: ReactNode | null;
    suffixIcon?: ReactNode | null;
    error?: boolean;
    validationText?: string | null;
}
export declare function Textarea({ id, className, style, disabled, label, rightLabel, suffixIcon, error, validationText, onFocus, labelFontSize, ...restProps }: TextareaProps): import("react/jsx-runtime").JSX.Element;
export default Textarea;
//# sourceMappingURL=textarea.d.ts.map