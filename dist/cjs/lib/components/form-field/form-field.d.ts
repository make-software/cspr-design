import { ReactNode } from 'react';
import { BaseProps } from '../../types';
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
}
export declare function FormField({ label, rightLabel, status, statusText, children, ...restProps }: FormFieldProps): JSX.Element;
export default FormField;
//# sourceMappingURL=form-field.d.ts.map