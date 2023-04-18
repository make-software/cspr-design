import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MainMenuItem } from './main-menu-item';
import { MainMenu } from './main-menu';
import SubtitleText from '../../subtitle-text/subtitle-text';
import NavLink from '../../nav-link/nav-link';
import styled from 'styled-components';

export const Container = styled.div(({ theme }) =>
  theme.withMedia({
    background: theme.styleguideColors.backgroundTertiary,
    maxWidth: theme.maxWidth,
    height: [undefined, undefined, 72],
  })
);

export default {
  component: MainMenuItem,
  title: 'Main Menu',
  args: {},
} as ComponentMeta<typeof MainMenuItem>;

const Template: ComponentStory<typeof MainMenu> = (args) => (
  <Container>
    <MainMenu {...args} />
  </Container>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: (
    <>
      <MainMenuItem>
        <NavLink>
          <SubtitleText size={3}>Home</SubtitleText>
        </NavLink>
      </MainMenuItem>
      <MainMenuItem>
        <SubtitleText size={3}>Block</SubtitleText>
      </MainMenuItem>
      <MainMenuItem>
        <SubtitleText size={3}>Deploys</SubtitleText>
      </MainMenuItem>
      <MainMenuItem>
        <SubtitleText size={3}>Contracts</SubtitleText>
      </MainMenuItem>
      <MainMenuItem>
        <SubtitleText size={3}>Validators</SubtitleText>
      </MainMenuItem>
    </>
  ),
};
