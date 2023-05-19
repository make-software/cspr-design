import * as React from 'react';
export interface MenuProps {
    opened?: boolean;
    onClose?: () => void;
    multiColumn?: boolean;
}
export declare const DropdownMenu: ({ children, multiColumn, ...rest }: React.PropsWithChildren<MenuProps>) => JSX.Element;
//# sourceMappingURL=dropdown-menu.d.ts.map