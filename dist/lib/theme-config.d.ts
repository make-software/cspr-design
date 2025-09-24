import { Keyframes } from 'styled-components';
import { withMedia } from './utils/match-media';
export interface ThemeCommonType {
    minWidth: number;
    maxWidth: number;
    withMedia: (styled: any) => ReturnType<typeof withMedia>;
    zIndex: {
        dropdown: number;
        modal: number;
        tooltip: number;
    };
    typography: {
        fontFamily: {
            primary: string;
            mono: string;
        };
        fontWeight: {
            /**
             * 300
             */
            light: number;
            /**
             * 400
             */
            regular: number;
            /**
             * 500
             */
            medium: number;
            /**
             * 600
             */
            semiBold: number;
            /**
             * 700
             */
            bold: number;
            /**
             * 800
             */
            extraBold: number;
        };
    };
    borderRadius: {
        base: number;
    };
    padding: {
        1: string;
        2: string;
    };
    animations: {
        fadeIn: Keyframes;
    };
}
export interface ThemeVariationType {
    colorSpecialCase: {
        blueBanner: string;
        blueBanner2: string;
    };
    styleguideColors: {
        backgroundPrimary: string;
        backgroundSecondary: string;
        backgroundTertiary: string;
        backgroundQuaternary: string;
        borderPrimary: string;
        borderSecondary: string;
        backgroundOverlay: string;
        borderRed: string;
        fillPrimaryRed: string;
        fillPrimaryRedHover: string;
        fillPrimaryRedClick: string;
        fillPrimaryBlue: string;
        fillPrimaryBlueHover: string;
        fillPrimaryBlueClick: string;
        fillSecondary: string;
        fillSecondaryRedHover: string;
        fillSecondaryRedClick: string;
        fillSecondaryBlueHover: string;
        fillSecondaryBlueClick: string;
        fillTertiary: string;
        fillGreen: string;
        fillVioletGradient: string;
        fillBlueGradient: string;
        fillLoadingInTable: string;
        contentPrimary: string;
        contentSecondary: string;
        contentTertiary: string;
        contentQuaternary: string;
        contentOnFill: string;
        contentBlue: string;
        contentRed: string;
        contentGreen: string;
        contentViolet: string;
        contentYellow: string;
        contentWarmGreen: string;
        contentLightBlue: string;
    };
    boxShadow: {
        unset: string;
        block: string;
        dropdown: string;
        tooltip: string;
    };
    border: {
        base: string;
        separator: string;
        tableRowSeparator: string;
    };
    themeName: string;
}
export interface ThemeConfigType {
    dark: ThemeVariationType & ThemeCommonType;
    light: ThemeVariationType & ThemeCommonType;
}
export declare const themeConfig: ThemeConfigType;
type DefaultThemeConfig = typeof themeConfig.light;
declare module 'styled-components' {
    interface DefaultTheme extends DefaultThemeConfig {
    }
}
export {};
//# sourceMappingURL=theme-config.d.ts.map