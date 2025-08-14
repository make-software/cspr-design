import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavLink from './nav-link';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import SubtitleText from '../subtitle-text/subtitle-text';

export default {
  component: NavLink,
  title: 'Components/Navigation/NavLink',
  // tags: ['autodocs', '!dev'],
  args: {
    href: './',
    disabled: false,
  },
} as Meta<typeof NavLink>;

const Template: StoryFn<typeof NavLink> = (args) => (
  <FlexRow itemsSpacing={20}>
    <FlexColumn itemsSpacing={10}>
      <NavLink {...args}>
        <SubtitleText size={1}>Admin</SubtitleText>
      </NavLink>
      <NavLink {...args}>
        <SubtitleText size={1}>Wallet</SubtitleText>
      </NavLink>
      <NavLink {...args}>
        <SubtitleText size={1}>Contracts</SubtitleText>
      </NavLink>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
