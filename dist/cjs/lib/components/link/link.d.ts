import React from 'react';
type Color = 'primaryBlue' | 'primaryRed' | 'hash' | 'inherit';
export interface LinkProps extends React.HTMLAttributes<Ref> {
    href?: string;
    target?: string;
    color: Color;
}
type Ref = HTMLAnchorElement;
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export default Link;
//# sourceMappingURL=link.d.ts.map