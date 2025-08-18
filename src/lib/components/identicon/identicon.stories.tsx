import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Identicon from './identicon';

export default {
  component: Identicon,
  title: 'Components/Display/Identicon',
  // tags: ['autodocs', '!dev'],
  args: {
    size: 30,
    hexString:
      '01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2',
  },
  argTypes: {
    hexString: { control: { type: 'text' } },
    size: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof Identicon>;

const Template: StoryFn<typeof Identicon> = (args) => <Identicon {...args} />;

export const Primary = Template.bind({});
