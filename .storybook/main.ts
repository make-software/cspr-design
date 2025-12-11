import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

async function filterStories(list): Promise<StoriesEntry[]> {
  console.log(list);
  return ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'];
}

const config: StorybookConfig = {
  stories: async (list: StoriesEntry[]) => [...(await filterStories(list))],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-themes',
  ],
  staticDirs: ['../src/static', '../src/lib/assets/fonts'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
