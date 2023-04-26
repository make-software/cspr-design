import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Account from "./account";
import { NavigationSettingsContainer } from '../container';

export default {
  component: Account,
  title: "Common/Navigation/Account",
  args: {},
} as ComponentMeta<typeof Account>;

const Template: ComponentStory<typeof Account> = (args) => (
  <NavigationSettingsContainer>
    <Account {...args} />
  </NavigationSettingsContainer>
);

export const AccountWithPublicKey = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccountWithPublicKey.args = {
  hash: "01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2",
};

export const AccountWithHash = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AccountWithHash.args = {
  hash: "2132460a950062fd30ad8a54cda9d0bed7ee1571edeb65459f62f3562ed82884",
};

export const WithCustomAvatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCustomAvatar.args = {
  hash: "01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2",
  logo: 'https://make.services/logo.svg'
};
