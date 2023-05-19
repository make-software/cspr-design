import React from 'react';
import { BaseProps } from '../../types';
export interface TooltipProps extends BaseProps {
    title?: string | null;
    caption?: string | null;
    children?: React.ReactElement<any> & any;
    monotype?: boolean;
    limitWidth?: boolean;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;
//# sourceMappingURL=tooltip.d.ts.map