import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TruncateBox from '../truncate-box/truncate-box';
import BodyText from '../body-text/body-text';

export default {
  component: TruncateBox,
  title: 'Forms and inputs/Truncate Box',
  args: {
    size: 1,
  },
  argTypes: {
    size: {
      control: 'select',
      options: [0, 1, 2],
      description: 'Size of the truncate box',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
} as Meta<typeof TruncateBox>;

const Template: StoryFn<typeof TruncateBox> = (args) => (
  <>
    <TruncateBox {...args}>
      01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
    </TruncateBox>
  </>
);

export const Primary = Template.bind({});
