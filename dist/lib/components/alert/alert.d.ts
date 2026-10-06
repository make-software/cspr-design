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
    /** Able to provide any existing icon or a path to it.
     *
     * NOTE: default status icons will not work in that case */
    iconSrc?: string;
    /** Able to provide any background color or a path to it from theme
     *
     * NOTE: default color will not work in that case */
    variant?: 'default' | 'filled';
}
export declare const Alert: (props: StatusMessageProps) => import("react/jsx-runtime").JSX.Element;
export default Alert;
//# sourceMappingURL=alert.d.ts.map