import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BodyText from '../body-text/body-text';
import FlexColumn from '../flex-column/flex-column';
import { Copy } from './copy';

export default {
  component: Copy,
  title: 'Components/Display/Copy',
  // tags: ['autodocs', '!dev'],
  args: {
    value: 'some value',
    label: 'Copy Public Key',
    copiedLabel: 'Copied!',
    minified: false,
  },
  argTypes: {
    value: { control: 'text', description: 'Value to copy' },
  },
} as Meta<typeof Copy>;

const Template: StoryFn<typeof Copy> = (args) => (
  <FlexColumn itemsSpacing={16}>
    <Copy {...args} />
    <BodyText size={2} variation={'darkGray'}>
      NOTE: Copy button allow you to copy value, which you can provide in
      `value` property to clipboard
    </BodyText>
  </FlexColumn>
);

export const Primary = Template.bind({});
