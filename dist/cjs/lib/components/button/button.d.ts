import React from 'react';
export type ButtonSize = 'small' | 'normal' | 'big';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (ev: any) => void;
    color?: 'primaryBlue' | 'primaryRed' | 'secondaryBlue' | 'secondaryRed' | 'utility';
    disabled?: boolean;
    height?: '24' | '36' | '40';
    width?: '100' | '120' | '140' | '176' | '100%';
    lineHeight?: 'xs' | 'sm';
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
//# sourceMappingURL=button.d.ts.map