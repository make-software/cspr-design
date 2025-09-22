import { Keyframes, keyframes } from 'styled-components';
import { withMedia } from './utils/match-media';

const PAGE_MIN_WIDTH = 320;
const PAGE_MAX_WIDTH = 1176;

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
      // thin: 100,
      // extraLight: 200,
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
      // black: 900,
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

const themeCommon: ThemeCommonType = {
  minWidth: PAGE_MIN_WIDTH,
  maxWidth: PAGE_MAX_WIDTH,
  withMedia: withMedia,
  zIndex: {
    dropdown: 10,
    modal: 15,
    tooltip: 20,
  },
  typography: {
    fontFamily: {
      primary: '"Inter", sans-serif',
      mono: '"JetBrains Mono", serif',
    },
    fontWeight: {
      // thin: 100,
      // extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      // black: 900,
    },
  },
  borderRadius: {
    base: 4,
  },
  padding: {
    1: '1.25em',
    2: '2em',
  },
  animations: {
    fadeIn: keyframes`
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    `,
  },
};

export const themeConfig: ThemeConfigType = {
  dark: {
    ...themeCommon,
    colorSpecialCase: {
      blueBanner: '#294ACC',
      blueBanner2: '#2A5DB2',
    },
    styleguideColors: {
      backgroundPrimary: '#161D3B',
      backgroundSecondary: '#0F1429',
      backgroundTertiary: '#131933',
      backgroundQuaternary: '#0F1429',
      borderPrimary: '#1A2347',
      borderSecondary: '#5C6073',
      backgroundOverlay: '#0E1126A0',
      borderRed: '#FF8680',
      fillPrimaryRed: '#B2332D',
      fillPrimaryRedHover: '#932F30',
      fillPrimaryRedClick: '#742A33',
      fillPrimaryBlue: '#294ACC',
      fillPrimaryBlueHover: '#112A8C',
      fillPrimaryBlueClick: '#14266D',
      fillSecondary: '#1B254A',
      fillSecondaryRedHover: '#FF868029',
      fillSecondaryRedClick: '#FF868014',
      fillSecondaryBlueHover: '#7490FF29',
      fillSecondaryBlueClick: '#7490FF14',
      fillTertiary: '#293667',
      fillGreen: '#2DCC85',
      fillVioletGradient:
        'linear-gradient(266.5deg, #A880FF 9.3%, #8B5BF1 94.39%)',
      fillBlueGradient: 'linear-gradient(89.56deg, #0021A5 0%, #2C53EF 75.01%)',
      fillLoadingInTable:
        'linear-gradient(90deg, #1B254A 43.6%, rgba(22, 29, 59, 0) 100%)',
      contentPrimary: '#DADCE5',
      contentSecondary: '#A8ADBF',
      contentTertiary: '#989DB2',
      contentQuaternary: '#8D92A6',
      contentOnFill: '#F2F2F2',
      contentBlue: '#8FA6FF',
      contentRed: '#FF8680',
      contentGreen: '#4CD99A',
      contentViolet: '#A880FF',
      contentYellow: '#E0BB38',
      contentWarmGreen: '#BDD94C',
      contentLightBlue: '#8FA6FF',
    },
    boxShadow: {
      unset: 'unset',
      block: '0px 2px 4px #0F1429',
      dropdown: 'drop-shadow(0px 2px 16px #0F1429)',
      tooltip: '0px 4px 8px #0F1429',
    },
    border: {
      base: '1px solid #5C6073', // borderSecondary
      separator: `1px solid #1A2347`, // borderPrimary
      tableRowSeparator: '1px solid #1A2347', // borderPrimary
    },
    themeName: 'dark',
  },
  light: {
    ...themeCommon,
    colorSpecialCase: {
      blueBanner: '#294ACC',
      blueBanner2: '#2A5DB2',
    },
    styleguideColors: {
      backgroundPrimary: '#FFFFFF',
      backgroundSecondary: '#F2F3F5',
      backgroundTertiary: '#181D40',
      backgroundQuaternary: '#161A33',
      borderPrimary: '#F2F3F5',
      borderSecondary: '#D2D4D9',
      backgroundOverlay: '#0E1126A0',
      borderRed: '#E6332A',
      fillPrimaryRed: '#E6332A',
      fillPrimaryRedHover: '#D23028',
      fillPrimaryRedClick: '#BD2E27',
      fillPrimaryBlue: '#0021A5',
      fillPrimaryBlueHover: '#051F89',
      fillPrimaryBlueClick: '#081F7B',
      fillSecondary: '#F5F5F7',
      fillSecondaryRedHover: '#E6332A14',
      fillSecondaryRedClick: '#E6332A1F',
      fillSecondaryBlueHover: '#0021A514',
      fillSecondaryBlueClick: '#0021A51F',
      fillTertiary: '#FEFEFF',
      fillGreen: '#2DCC85',
      fillVioletGradient:
        'linear-gradient(266.5deg, #A880FF 9.3%, #8B5BF1 94.39%)',
      fillBlueGradient: 'linear-gradient(89.56deg, #0021A5 0%, #2C53EF 75.01%)',
      fillLoadingInTable:
        'linear-gradient(90deg, #F2F3F5 0%, rgba(255, 255, 255, 0) 100%)',
      contentPrimary: '#1A1919',
      contentSecondary: '#72737A',
      contentTertiary: '#BABBBF',
      contentQuaternary: '#D2D3D9',
      contentOnFill: '#FFFFFF',
      contentBlue: '#0021A5',
      contentRed: '#E6332A',
      contentGreen: '#31DE91',
      contentViolet: '#8B5BF1',
      contentYellow: '#F1BF0B',
      contentWarmGreen: '#BBDE31',
      contentLightBlue: '#7490FF',
    },
    boxShadow: {
      unset: 'unset',
      block: '0px 2px 4px rgba(143, 144, 152, 0.15)',
      dropdown: 'drop-shadow(0px 4px 8px rgba(26, 25, 25, 0.16))',
      tooltip: '0px 4px 8px rgba(143, 144, 152, 0.2)',
    },
    border: {
      base: '1px solid #D2D4D9',
      separator: '1px solid #F2F3F5', // borderPrimary
      tableRowSeparator: '1px solid #F2F3F5', // borderPrimary
    },
    themeName: 'light',
  },
};

type DefaultThemeConfig = typeof themeConfig.light;

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeConfig {}
}
