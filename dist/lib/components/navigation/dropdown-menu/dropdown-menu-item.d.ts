import { default as React } from 'react';
type NativeLiProps = React.LiHTMLAttributes<HTMLLIElement>;
interface DropdownMenuItemProps extends NativeLiProps {
    padding?: string;
}
export declare const DropdownMenuItem: React.ForwardRefExoticComponent<DropdownMenuItemProps & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<HTMLLIElement>>;
export {};
//# sourceMappingURL=dropdown-menu-item.d.ts.map