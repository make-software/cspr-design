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
import FlexColumn from '../../flex-column/flex-column';

export default {
  component: DropdownMenu,
  title: 'Common/Navigation/Dropdown Menu',
  args: {
    opened: true,
    multiColumn: false,
  },
} as ComponentMeta<typeof DropdownMenu>;

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  color: theme.styleguideColors.fillPrimaryBlue,
  path: {
    fill: theme.styleguideColors.fillPrimaryBlue,
  },
}));

const StyledFlexColumn = styled(FlexColumn)(({ theme }) => ({
  gap: '4px',
  flexWrap: 'wrap',
  height: '336px',
  width: '325px',
}));

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);

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

const TemplateMulti: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);
export const MultiColumn = TemplateMulti.bind({
    multiColumn: true
});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultiColumn.args = {
  children: (
    <StyledFlexColumn>
      {[
        'English',
        'Українська',
        'Polski',
        'Türkçe',
        'Español',
        'Français',
        'Nederlands',
        'Русский',
        'Azerbaijani',
      ].map((lang) => {
        return (
          <DropdownMenuItem key={`lang-${lang}`}>
            <BodyText size={3}>{lang}</BodyText>
          </DropdownMenuItem>
        );
      })}
    </StyledFlexColumn>
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
            <StyledSvgIcon src={'./assets/icons/ic-user.svg'} />
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
