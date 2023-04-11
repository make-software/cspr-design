import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SvgIcon from "../svg-icon/svg-icon";

export default {
  component: SvgIcon,
  title: "SvgIcon",
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => (
  <SvgIcon {...args} color={'#000000'} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: './assets/icons/ic-facebook.svg',
};
