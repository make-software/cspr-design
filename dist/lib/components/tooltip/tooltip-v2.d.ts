import { default as React } from 'react';
import { BaseProps } from '../../types';
type StyledTooltipProps = {
    lineHeight?: 'xs' | 'sm';
    scale?: 'xs' | 'sm';
    paddingScale?: 1 | 2;
};
export interface TooltipV2Props extends BaseProps {
    tooltipContent?: JSX.Element | string | null;
    caption?: string | null;
    additionalBlock?: React.ReactElement<any> & any;
    children?: React.ReactElement<any> & any;
    monotype?: boolean;
    limitWidth?: boolean | string;
}
export declare const TooltipV2: React.ForwardRefExoticComponent<TooltipV2Props & StyledTooltipProps & React.RefAttributes<HTMLDivElement>>;
export default TooltipV2;
//# sourceMappingURL=tooltip-v2.d.ts.map