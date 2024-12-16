import * as React from 'react';
export interface MenuProps {
    opened?: boolean;
    onClose?: () => void;
    multiColumn?: boolean;
    padding?: string;
    className?: string;
}
export declare const DropdownMenu: ({ children, multiColumn, padding, ...rest }: React.PropsWithChildren<MenuProps>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=dropdown-menu.d.ts.map