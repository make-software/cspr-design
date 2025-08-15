import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { MainMenuItem } from './main-menu-item';
import { MainMenu } from './main-menu';
import NavLink from '../../nav-link/nav-link';
import styled from 'styled-components';
import BodyText from '../../body-text/body-text';

const Container = styled.div(({ theme }) =>
  theme.withMedia({
    background: theme.styleguideColors.backgroundTertiary,
    // maxWidth: theme.maxWidth,
    height: [undefined, undefined, 72],
  }),
);

export default {
  component: MainMenuItem,
  title: 'Components/Navigation/Main Menu',
  // tags: ['autodocs', '!dev'],
  args: {},
  argTypes: {},
} as Meta<typeof MainMenuItem>;

const Template: StoryFn<typeof MainMenu> = (args) => (
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
        <BodyText size={3}>Home</BodyText>
      </MainMenuItem>
      <MainMenuItem selected>
        <BodyText size={3}>Block</BodyText>
      </MainMenuItem>
      <MainMenuItem>
        <BodyText size={3}>Deploys</BodyText>
      </MainMenuItem>
      <MainMenuItem>
        <BodyText size={3}>Contracts</BodyText>
      </MainMenuItem>
      <MainMenuItem>
        <BodyText size={3}>Validators</BodyText>
      </MainMenuItem>
    </>
  ),
};
