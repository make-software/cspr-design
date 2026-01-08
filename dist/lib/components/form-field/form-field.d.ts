import { ReactNode } from 'react';
import { BaseProps, LabelFontSize } from '../../base-types.ts';
export declare enum FormFieldStatus {
    Error = "error",
    Success = "success"
}
export interface FormFieldProps extends BaseProps {
    label?: ReactNode | string;
    rightLabel?: ReactNode | string;
    status?: FormFieldStatus;
    statusText?: string | null;
    disabled?: boolean;
    labelFontSize?: LabelFontSize;
}
export declare function FormField({ id, label, rightLabel, status, statusText, children, labelFontSize, ...restProps }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
export default FormField;
//# sourceMappingURL=form-field.d.ts.map