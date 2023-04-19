import React from 'react';
import { themeConfig } from '../src/lib';
import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyles from "../src/lib/global-styles";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: themeConfig.light,
      dark: themeConfig.dark,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles, // use GlobalStyles to provide necessary fonts.
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
