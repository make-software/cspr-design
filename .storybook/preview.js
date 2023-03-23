import React from "react";
import { themeConfig } from "../src/lib";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

import '../src/lib/assets/fonts/inter/inter.css';
import '../src/lib/assets/fonts/jetbrains-mono/jetbrains-mono.css';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    overflow-y: visible;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: themeConfig.light,
      dark: themeConfig.dark,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
