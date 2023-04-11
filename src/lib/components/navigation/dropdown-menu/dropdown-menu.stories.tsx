import React from "react";
import Menu from "./menu/menu";
import MenuItem from "./menu-item/menu-item";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BodyText from "../../body-text/body-text";
import FlexRow from "../../flex-row/flex-row";
import SvgIcon from "../../svg-icon/svg-icon";
import styled from "styled-components";

export default {
  component: Menu,
  title: "Dropdown Menu",
  args: {
    opened: true,
  },
} as ComponentMeta<typeof Menu>;

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  color: theme.styleguideColors.contentTertiary,
  path: {
    fill: theme.styleguideColors.contentTertiary,
  },
}));

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: (
    <>
      <MenuItem>
        <BodyText size={3}>Faucet</BodyText>
      </MenuItem>
      <MenuItem>
        <BodyText size={3}>Deploy contract</BodyText>
      </MenuItem>
      <MenuItem>
        <BodyText size={3}>Connected peers</BodyText>
      </MenuItem>
    </>
  ),
};

export const WithIcons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcons.args = {
  children: (
    <>
      <MenuItem>
        <BodyText size={2}>
          <FlexRow align="center">View Account</FlexRow>
        </BodyText>
      </MenuItem>
      <MenuItem>
        <BodyText size={2}>
          <FlexRow align="center">Activity Export</FlexRow>
        </BodyText>
      </MenuItem>
      <MenuItem>
        <BodyText size={2}>Verify Active Address</BodyText>
      </MenuItem>
      <MenuItem>
        <BodyText size={2}>Disconnect Account</BodyText>
      </MenuItem>
    </>
  ),
};
