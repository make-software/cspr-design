import React from 'react';
import styled from 'styled-components';
import { DropdownMenu } from './dropdown-menu';
import { DropdownMenuItem } from './dropdown-menu-item';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BodyText from '../../body-text/body-text';
import FlexRow from '../../flex-row/flex-row';
import SvgIcon from '../../svg-icon/svg-icon';

// @ts-ignore
import ActivityIcon from '../../../assets/icons/ic-file.svg';

export default {
  component: DropdownMenu,
  title: 'Dropdown Menu',
  args: {
    opened: true,
  },
} as ComponentMeta<typeof DropdownMenu>;

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  color: theme.styleguideColors.fillPrimaryBlue,
  path: {
    fill: theme.styleguideColors.fillPrimaryBlue,
  },
}));

const Template: ComponentStory<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: (
    <>
      <DropdownMenuItem>
        <BodyText size={3}>Faucet</BodyText>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <BodyText size={3}>Deploy contract</BodyText>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <BodyText size={3}>Connected peers</BodyText>
      </DropdownMenuItem>
    </>
  ),
};

export const WithIcons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcons.args = {
  children: (
    <>
      <DropdownMenuItem>
        <BodyText size={2}>
          <FlexRow align="center" gap={6}>
            <StyledSvgIcon src={"./assets/icons/ic-user.svg"} />
            <BodyText size={2}>View Account</BodyText>
          </FlexRow>
        </BodyText>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <BodyText size={2}>
          <FlexRow align="center" gap={6}>
            <StyledSvgIcon src={ActivityIcon} />
            <BodyText size={2}>Activity Export</BodyText>
          </FlexRow>
        </BodyText>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <BodyText size={2}>Verify Active Address</BodyText>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <BodyText size={2}>Disconnect Account</BodyText>
      </DropdownMenuItem>
    </>
  ),
};
