import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './input';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: Input,
  title: 'Components/Forms and inputs/Input',
  // tags: ['autodocs', '!dev'],
  args: {
    value: 'USA',
    placeholder: 'Type here',
    disabled: false,
    suffixText: 'USD',
    monotype: false,
    label: 'country',
    rightLabel: 'currency',
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => (
  <>
    <FlexRow itemsSpacing={30}>
      <FlexColumn itemsSpacing={30}>
        <Input {...args} />
      </FlexColumn>
      <FlexColumn itemsSpacing={30}>
        <Input label="invalid input" error validationText="invalid input" />
      </FlexColumn>
    </FlexRow>
  </>
);

export const Primary = Template.bind({});
