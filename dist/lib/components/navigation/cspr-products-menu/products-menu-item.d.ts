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
export declare const ProductItemWrapper: import("styled-components").StyledComponent<"span", import("styled-components").DefaultTheme, {
    isOpen?: boolean | undefined;
    selected?: boolean | undefined;
    disabled: boolean;
}, never>;
export declare const ProductsMenuItem: ({ nameLabel, link, icon, descriptionText, selected, newBadgeLabel, comingSoonBadgeLabel, badge, }: ProductsMenuItemProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=products-menu-item.d.ts.map