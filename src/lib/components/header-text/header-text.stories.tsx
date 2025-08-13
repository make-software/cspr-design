import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeaderText from './header-text';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import TruncateBox from '../truncate-box/truncate-box';

export default {
  component: HeaderText,
  title: 'Primitives/Header Text',
  args: {
    size: 1,
    scale: 'md',
    variation: 'darkGray',
    monotype: false,
    uppercase: false,
    capitalize: false,
    loading: false,
  },
} as Meta<typeof HeaderText>;

const Template: StoryFn<typeof HeaderText> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={1}>Simple Text</BodyText>
      <HeaderText {...args}>Inter, {args.scale} - Header</HeaderText>
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={1}>Long Text</BodyText>
      <HeaderText {...args}>
        <TruncateBox size={1}>
          01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
        </TruncateBox>
      </HeaderText>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
