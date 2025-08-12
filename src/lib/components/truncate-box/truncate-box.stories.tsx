import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TruncateBox from '../truncate-box/truncate-box';
import BodyText from '../body-text/body-text';

export default {
  component: TruncateBox,
  title: 'Components/TruncateBox',
  args: {
    size: 1,
  },
} as Meta<typeof TruncateBox>;

const Template: StoryFn<typeof TruncateBox> = (args) => (
  <>
    <FlexRow itemsSpacing={30}>
      <BodyText size={1}>Dynamic Truncate Box</BodyText>
      <FlexColumn itemsSpacing={10}>
        <TruncateBox {...args}>
          01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
        </TruncateBox>
      </FlexColumn>
    </FlexRow>
    <FlexRow itemsSpacing={30}>
      <BodyText size={1}>Size 0 Truncate Box</BodyText>
      <FlexColumn itemsSpacing={10}>
        <TruncateBox size={0}>
          01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
        </TruncateBox>
      </FlexColumn>
    </FlexRow>
    <FlexRow itemsSpacing={30}>
      <BodyText size={1}>Size 2 Truncate Box</BodyText>
      <FlexColumn itemsSpacing={10}>
        <TruncateBox size={2}>
          01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
        </TruncateBox>
      </FlexColumn>
    </FlexRow>
  </>
);

export const Primary = Template.bind({});
