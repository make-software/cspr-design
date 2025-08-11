import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import type { Preview } from '@storybook/react-vite';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { themeConfig } from '../src/lib';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={themeConfig}>
        <Story />
      </ThemeProvider>
    ),
    withThemeFromJSXProvider({
      themes: {
        light: themeConfig.light,
        dark: themeConfig.dark,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
