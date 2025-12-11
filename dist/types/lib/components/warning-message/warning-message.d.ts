import React from 'react';
export interface WarningMessageProps {
    iconSrc?: string;
    title: string;
    message: string | React.ReactElement;
    margin?: string;
}
/** @deprecated Please use <Alert /> with `iconSrc` instead of it. */
export declare const WarningMessage: ({ iconSrc, title, message, margin, }: WarningMessageProps) => import("react/jsx-runtime").JSX.Element;
export default WarningMessage;
//# sourceMappingURL=warning-message.d.ts.map