import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './radio-button';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

// TODO - check logic of RadioButton
export default {
  component: RadioButton,
  title: 'Forms and inputs/RadioButton',
  args: {
    value: 'casper',
    selected: 'casper',
    disabled: true,
    label: 'Test Net',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean', value: true },
      description: 'The value of the selected radio button',
    },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <RadioButton {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
