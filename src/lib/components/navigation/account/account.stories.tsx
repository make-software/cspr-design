import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Account from "./account";
import Container from "../container/container";

export default {
  component: Account,
  title: "Account",
  args: {},
} as ComponentMeta<typeof Account>;

const Template: ComponentStory<typeof Account> = (args) => (
  <Container>
    <Account {...args} />
  </Container>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  hash: "01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2",
};
