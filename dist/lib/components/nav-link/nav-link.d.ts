import { default as React } from 'react';
import { ActivableProps, BaseProps } from '../../types';
type Ref = HTMLAnchorElement;
export interface NavLinkProps extends BaseProps, ActivableProps {
    disabled?: boolean;
    target?: string;
    href?: string;
    ref?: React.Ref<Ref>;
    onMouseDown?: (ev: any) => void;
}
export declare const NavLink: React.ForwardRefExoticComponent<Omit<NavLinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export default NavLink;
//# sourceMappingURL=nav-link.d.ts.map