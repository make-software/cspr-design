import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './radio-button';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: RadioButton,
  title: 'Core/Components/RadioButton',
  args: {
    value: 'casper',
    selected: 'casper',
    disabled: true,
    label: 'Test Net',
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
