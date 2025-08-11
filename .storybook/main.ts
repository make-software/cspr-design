import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-themes'],
  staticDirs: ['../src/lib/assets', '../public'],
  framework: { name: '@storybook/react-vite', options: {} },

  viteFinal: async (viteConfig) => {
    viteConfig.base = '/';
    return viteConfig;
  },
};
export default config;
