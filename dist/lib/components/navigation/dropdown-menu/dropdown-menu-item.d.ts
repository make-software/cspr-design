import { default as React } from 'react';
interface DropdownMenuItemProps {
    onClick?: () => void;
    padding?: string;
    tabIndex?: number;
    role?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLLIElement>) => void;
}
export declare const DropdownMenuItem: React.ForwardRefExoticComponent<DropdownMenuItemProps & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=dropdown-menu-item.d.ts.map