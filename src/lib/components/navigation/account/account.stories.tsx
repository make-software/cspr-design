import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Account from './account';
import { NavigationSettingsContainer } from '../container';

export default {
  component: Account,
  title: 'Navigation/Account',
  args: {},
  argTypes: {
    hash: {
      control: { type: 'text' },
      description: 'The public key or hash of the account to display',
    },
    name: {
      control: { type: 'text' },
      description: 'cspr.name',
    },
    logo: {
      control: { type: 'text' },
      description: 'Optional custom logo URL for the account',
    },
  },
} as Meta<typeof Account>;

const Template: StoryFn<typeof Account> = (args) => (
  <NavigationSettingsContainer>
    <Account {...args} />
  </NavigationSettingsContainer>
);

export const AccountWithPublicKey = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccountWithPublicKey.args = {
  hash: '01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2',
};

export const AccountWithHash = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccountWithHash.args = {
  hash: '2132460a950062fd30ad8a54cda9d0bed7ee1571edeb65459f62f3562ed82884',
};

export const WithCustomAvatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCustomAvatar.args = {
  hash: '01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2',
  name: 'MakeGroup',
  logo: 'https://makegroup.io/wp-content/uploads/2023/09/Logo.png',
};
