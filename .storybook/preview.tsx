import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import type { Preview } from '@storybook/react-vite';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom theme configurations */
import { themeConfig } from '../src/lib';

/* TODO: replace with your own global styles, or remove */
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
