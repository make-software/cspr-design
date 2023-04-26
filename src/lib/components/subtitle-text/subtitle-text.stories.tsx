import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import TruncateBox from '../truncate-box/truncate-box';
import SubtitleText from './subtitle-text';

export default {
  component: SubtitleText,
  title: 'Core/Typography/SubtitleText',
  args: {
    size: 1,
    scale: 'md',
    variation: 'darkGray',
    monotype: false,
    uppercase: false,
    capitalize: false,
    loading: false,
  },
} as ComponentMeta<typeof SubtitleText>;

const Template: ComponentStory<typeof SubtitleText> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={1}>Simple Text</BodyText>
      <SubtitleText {...args}>
        Inter, {args.scale} - SubtitleText
      </SubtitleText>
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={1}>Long Text</BodyText>
      <SubtitleText {...args}>
        <TruncateBox size={1}>
          01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
        </TruncateBox>
      </SubtitleText>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
