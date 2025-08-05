import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FormField from './form-field';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import Input from '../input/input';

export default {
  component: FormField,
  title: 'FormField',
  args: {
    id: 'form',
    label: 'label',
    rightLabel: 'right label',
    status: 'success',
    statusText: 'status text',
    disabled: false,
  },
} as Meta<typeof FormField>;

const Template: StoryFn<typeof FormField> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <FormField {...args}>
        <Input value="Faucet" />
      </FormField>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
