import React, { useEffect } from 'react';
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
  // tags: ['autodocs'], // turn on when fix some components stories
  decorators: [
    (Story) => {
      useEffect(() => {
        // Google Analytics tracking code
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-H4X1J4017T'; // Replace with your GA4 Measurement ID
        document.head.appendChild(script);

        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-H4X1J4017T'); // Replace with your GA4 Measurement ID
        };

        return () => {
          // Optional: Clean up the script if needed
          document.head.removeChild(script);
        };
      }, []);

      return (
        <ThemeProvider theme={themeConfig}>
          <Story />
        </ThemeProvider>
      );
    },
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
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
