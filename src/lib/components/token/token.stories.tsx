import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Token from './token';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: Token,
  title: 'Components/Display/CEP18Token',
  // tags: ['autodocs', '!dev'],
  args: {
    amount: '50000123456789',
    decimals: 9,
    precision: 5,
    ticker: 'BOIN',
  },
  argTypes: {
    amount: {
      control: 'text',
      description: 'Amount in motes to be displayed',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '50000123456789' },
      },
    },
    decimals: {
      control: 'number',
    },
    precision: {
      control: 'number',
    },
    ticker: {
      control: 'select',
      options: ['BOIN', 'CLICK3', 'CSPR'],
    },
  },
} as Meta<typeof Token>;

const Template: StoryFn<typeof Token> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <Token {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
