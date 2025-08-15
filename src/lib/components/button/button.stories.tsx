import React from 'react';
import styled from 'styled-components';

import Button from './button';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { StoryFn } from '@storybook/react';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '> *': {
    margin: 10,
    width: 200,
  },
}));

export default {
  component: Button,
  title: 'Components/Forms and inputs/Button',
  // tags: ['autodocs', '!dev'],
  argTypes: {
    height: '36',
    disabled: { control: { type: 'boolean' } },
    color: 'primaryRed',
    children: 'Button',
  },
};

const Template: StoryFn<typeof Button> = (args) => (
  <Container>
    <Button {...args} />
  </Container>
);
export const Primary = Template.bind({});
Primary.args = {
  height: '36',
  children: 'Button',
};

const primary = (disabled: boolean = false) => (
  <Button disabled={disabled}>Primary</Button>
);

const primary2 = (disabled: boolean = false) => (
  <Button color="primaryRed" disabled={disabled}>
    Primary 2
  </Button>
);

const secondary = (disabled: boolean = false) => (
  <Button color="secondaryBlue" disabled={disabled}>
    Secondary
  </Button>
);

const secondary2 = (disabled: boolean = false) => (
  <Button color="secondaryRed" disabled={disabled}>
    Secondary
  </Button>
);

const utility = (disabled: boolean = false) => (
  <Button color="utility" disabled={disabled}>
    Tertiary
  </Button>
);

export const allColors = () => (
  <FlexRow itemsSpacing={10}>
    <FlexColumn itemsSpacing={10}>
      <BodyText size={2}>Active</BodyText>
      {primary()}
      {primary2()}
      {secondary()}
      {secondary2()}
      {utility()}
    </FlexColumn>
    <FlexColumn itemsSpacing={10}>
      <BodyText size={2}>Disabled</BodyText>
      {primary(true)}
      {primary2(true)}
      {secondary(true)}
      {secondary2(true)}
      {utility(true)}
    </FlexColumn>
  </FlexRow>
);
