import {themeConfig} from './theme-config';

export const createTheme = ({fontSize = 10}) => {
    const themeLight = {...themeConfig.light, rootFontSize: fontSize};
    const themeDark = {...themeConfig.dark, rootFontSize: fontSize};

    return {light: themeLight, dark: themeDark};
};
export default createTheme;