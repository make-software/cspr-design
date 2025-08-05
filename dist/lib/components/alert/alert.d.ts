import { default as React } from 'react';
export declare enum AlertStatus {
    Success = "success",
    Error = "error",
    Info = "info",
    Pending = "pending",
    Warning = "warning"
}
export interface StatusMessageProps {
    title?: React.ReactNode | string;
    message: React.ReactNode | string;
    status: AlertStatus;
    scale?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    lineHeight?: 'xs' | 'sm';
}
export declare const Alert: (props: StatusMessageProps) => import("react/jsx-runtime").JSX.Element;
export default Alert;
//# sourceMappingURL=alert.d.ts.map