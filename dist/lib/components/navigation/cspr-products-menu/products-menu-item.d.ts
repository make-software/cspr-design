import { default as React } from 'react';
import { BadgeProps } from '../../badge/badge';
export interface ProductsMenuItemProps {
    comingSoonBadgeLabel?: string;
    newBadgeLabel?: string;
    selected?: boolean;
    descriptionText?: string;
    nameLabel: string;
    link: string;
    icon: string;
    badge?: BadgeProps;
}
export declare enum ThemeModeType {
    light = "light",
    dark = "dark"
}
export declare const ProductItemWrapper: import('styled-components').StyledComponent<"span", import('styled-components').DefaultTheme, {
    isOpen?: boolean;
    selected?: boolean;
    disabled: boolean;
}, never>;
export declare const StyledBodyText: import('styled-components').StyledComponent<React.ForwardRefExoticComponent<import('../../..').BodyTextProps & React.RefAttributes<HTMLSpanElement>>, import('styled-components').DefaultTheme, {}, never>;
export declare const ProductsMenuItem: React.ForwardRefExoticComponent<ProductsMenuItemProps & React.RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=products-menu-item.d.ts.map