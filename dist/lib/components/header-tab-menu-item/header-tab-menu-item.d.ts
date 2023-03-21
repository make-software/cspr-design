/// <reference types="react" />
import { ActivableProps } from '../../types';
import { HeaderTextProps } from '../header-text/header-text';
export interface HeaderTabMenuItemProps extends Omit<HeaderTextProps, 'size'>, ActivableProps {
    onClick?: (ev: any) => void;
}
export declare function HeaderTabMenuItem(props: HeaderTabMenuItemProps): JSX.Element;
export default HeaderTabMenuItem;
//# sourceMappingURL=header-tab-menu-item.d.ts.map