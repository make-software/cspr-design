import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  //addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app", "@storybook/addon-styling", "@react-theming/storybook-addon", "@storybook/addon-mdx-gfm"],
  addons: ['@storybook/addon-docs', '@storybook/addon-themes'],
  staticDirs: ['../src/lib/assets', '../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
