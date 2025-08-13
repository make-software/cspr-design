import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tooltip from './tooltip';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import CaptionText from '../caption-text/caption-text';

export default {
  component: Tooltip,
  title: 'Overlays and layering/Tooltip',
  args: {
    title:
      '0202fa4d6ff148562fe18cdb5aca0bb6c3b96592cdacad8587eb906c3e4b1ac7258a',
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Tooltip</BodyText>
      <Tooltip {...args}>
        <BodyText size={3} monotype>
          fei234...521rgt
        </BodyText>
      </Tooltip>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});

export const AdditionalBlock = Template.bind({});

AdditionalBlock.args = {
  caption: 'PublicKey',
  title: '0202fa4d6ff148562fe18cdb5aca0bb6c3b96592cdacad8587eb906c3e4b1ac7258a',
  additionalBlock: (
    <FlexColumn>
      <CaptionText size={2} variation="gray">
        Additional title
      </CaptionText>
      <BodyText size={3}>Additional content</BodyText>
    </FlexColumn>
  ),
};
