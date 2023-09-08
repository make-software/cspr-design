/// <reference types="react" />
import { ActivableProps } from '../../types';
import { ButtonProps } from '../button/button';
export interface TabMenuItemProps extends ButtonProps, ActivableProps {
    disabled?: boolean;
    tooltip?: string;
    lineHeight?: 'xs' | 'sm';
    scale?: 'xs' | 'sm';
    tooltipPaddingScale?: 1 | 2;
}
export declare function TabMenuItem(props: TabMenuItemProps): JSX.Element;
export default TabMenuItem;
//# sourceMappingURL=tab-menu-item.d.ts.map