import React from 'react';
import { TextProps } from '../../text/text';
export interface NavigationBannerProps {
    message: string | React.ReactNode;
    link?: string;
}
export interface NavigationBannerStyleProps extends TextProps {
    size: 1 | 2 | 3;
    color: 'red' | 'blue' | 'lightBlue';
}
declare const NavigationBanner: ({ message, link }: NavigationBannerProps) => import("react/jsx-runtime").JSX.Element;
export default NavigationBanner;
//# sourceMappingURL=navigation-banner.d.ts.map