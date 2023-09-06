import React from 'react';
import { BaseProps } from '../../types';
type StyledReactTooltipProps = {
    lineHeight?: 'xs' | 'sm';
    scale?: 'xs' | 'sm';
    paddingScale?: 1 | 2;
};
export interface TooltipProps extends BaseProps {
    title?: JSX.Element | string | null;
    caption?: string | null;
    children?: React.ReactElement<any> & any;
    monotype?: boolean;
    limitWidth?: boolean;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & StyledReactTooltipProps & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;
//# sourceMappingURL=tooltip.d.ts.map