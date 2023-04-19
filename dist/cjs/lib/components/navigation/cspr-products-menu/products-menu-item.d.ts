import React from 'react';
export interface ProductsMenuItemProps {
    comingSoonBadgeLabel?: string;
    newBadgeLabel?: string;
    selected?: boolean;
    descriptionText?: string;
    nameLabel: string;
    link: string;
    icon: string;
}
export declare enum ThemeModeType {
    light = "light",
    dark = "dark"
}
export declare const ProductItemWrapper: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {
    isOpen?: boolean | undefined;
    selected?: boolean | undefined;
}, never>;
export declare const ProductItemLink: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<Omit<import("../../nav-link/nav-link").NavLinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const ProductsMenuItem: ({ nameLabel, link, icon, descriptionText, selected, newBadgeLabel, comingSoonBadgeLabel, }: ProductsMenuItemProps) => JSX.Element;
//# sourceMappingURL=products-menu-item.d.ts.map