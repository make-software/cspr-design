import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AccountInfoRow from './account-info-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: AccountInfoRow,
  excludeStories: ['Primary'],
  // tags: ['autodocs', '!dev'],
  title: 'Components/Display/Account Info Row',
  parameters: {
    controls: {
      sort: 'requiredFirst',
      include: ['publicKey', 'ticker', 'accountBalance', 'disabled', 'label'],
    },
  },
  args: {
    publicKey:
      '0202fa4d6ff148562fe18cdb5aca0bb6c3b96592cdacad8587eb906c3e4b1ac7258a',
    label: 'Account',
    accountBalance: '3987654321',
    loading: false,
    error: null,
    accountEmpty: false,
    disabled: false,
  },
  argTypes: {
    publicKey: {
      control: 'text',
      description: 'Public key of the account',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    ticker: {
      control: 'select',
      options: ['CSPR', 'BOIN'],
    },
    label: {
      control: 'text',
      description: 'Label for the account info row',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    accountBalance: {
      control: 'text',
      description: 'Balance of the account',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
} as Meta<typeof AccountInfoRow>;

const Template: StoryFn<typeof AccountInfoRow> = (args) => (
  <FlexColumn itemsSpacing={20}>
    <AccountInfoRow {...args} />
  </FlexColumn>
);

export const Primary = Template.bind({});
