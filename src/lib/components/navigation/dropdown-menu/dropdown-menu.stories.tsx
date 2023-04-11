import React from "react";
import Menu from "./menu/menu";
import MenuItem from "./menu-item/menu-item";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BodyText from "../../body-text/body-text";
import FlexRow from "../../flex-row/flex-row";
import SvgIcon from "../../svg-icon/svg-icon";
import styled from "styled-components";
import SubtitleText from "../../subtitle-text/subtitle-text";

// @ts-ignore
import * as ActivityIcon from "../../../assets/icons/ic-file.svg";

export default {
  component: Menu,
  title: "Dropdown Menu",
  args: {
    opened: true,
  },
} as ComponentMeta<typeof Menu>;

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  color: theme.styleguideColors.fillPrimaryBlue,
  path: {
    fill: theme.styleguideColors.fillPrimaryBlue,
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
          <FlexRow align="center" gap={6}>
            <StyledSvgIcon src={"./assets/icons/ic-user.svg"} />
            <SubtitleText size={2}>View Account</SubtitleText>
          </FlexRow>
        </BodyText>
      </MenuItem>
      <MenuItem>
        <BodyText size={2}>
          <FlexRow align="center" gap={6}>
            <StyledSvgIcon src={ActivityIcon} />
            Activity Export
          </FlexRow>
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
