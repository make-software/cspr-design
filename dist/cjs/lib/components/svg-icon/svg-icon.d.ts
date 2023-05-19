import React from 'react';
type Ref = HTMLDivElement;
export interface SvgIconProps extends React.HTMLAttributes<Ref> {
    className?: string;
    style?: React.CSSProperties;
    size?: number;
    width?: number | string;
    height?: number | string;
    src: string;
    alt?: string;
    onClick?: (ev: any) => void;
    onMouseDown?: (ev: any) => void;
    color?: string;
    tooltip?: string;
    active?: boolean;
    rotate?: boolean;
    marginLeft?: boolean;
    marginRight?: boolean;
}
export declare const SvgIcon: React.ForwardRefExoticComponent<SvgIconProps & React.RefAttributes<HTMLDivElement>>;
export default SvgIcon;
//# sourceMappingURL=svg-icon.d.ts.map