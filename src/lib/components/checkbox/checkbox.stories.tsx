import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox from './checkbox';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: Checkbox,
  title: 'Components/Forms and inputs/Checkbox',
  // tags: ['autodocs', '!dev'],
  args: {
    checked: true,
    label: 'checkbox',
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <FlexRow itemsSpacing={10}>
    <FlexColumn itemsSpacing={10}>
      <Checkbox {...args} />
    </FlexColumn>
    <FlexColumn itemsSpacing={10}>
      <Checkbox checked disabled label="disabled" />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
