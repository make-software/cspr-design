import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import BodyText from './body-text';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import CaptionText from '../caption-text/caption-text';
import TruncateBox from '../truncate-box/truncate-box';

export default {
  component: BodyText,
  title: 'Components/Display/Body Text',
  // tags: ['autodocs', '!dev'],
  args: {
    size: 1,
    monotype: true,
    uppercase: false,
    loading: false,
    scale: 'md',
  },
} as Meta<typeof BodyText>;

const Template: StoryFn<typeof BodyText> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <CaptionText size={1}>Simple Text</CaptionText>
      <BodyText {...args}>Inter, {args.scale} - Body</BodyText>
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <CaptionText size={1}>Long Text</CaptionText>
      <BodyText {...args}>
        <TruncateBox size={1}>
          01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
        </TruncateBox>
      </BodyText>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
