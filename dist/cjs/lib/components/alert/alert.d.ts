import React from 'react';
export declare enum AlertStatus {
    Success = "success",
    Error = "error"
}
export interface StatusMessageProps {
    message: string | React.ReactNode;
    status: AlertStatus;
}
export declare const Alert: (props: StatusMessageProps) => JSX.Element;
export default Alert;
//# sourceMappingURL=alert.d.ts.map