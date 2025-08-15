import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CEP18Token from './cep18-token';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: CEP18Token,
  title: 'Components/Display/CEP18Token',
  excludeStories: ['Primary'],
  // tags: ['autodocs', '!dev'],
  args: {
    motes: '50000123456789',
    decimals: 9,
    precision: 5,
    ticker: 'BOIN',
  },
  argTypes: {
    motes: {
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
} as Meta<typeof CEP18Token>;

const Template: StoryFn<typeof CEP18Token> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <CEP18Token {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
