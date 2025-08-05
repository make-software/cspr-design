import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label from './label';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TruncateBox from '../truncate-box/truncate-box';
import BodyText from '../body-text/body-text';

export default {
  component: Label,
  title: 'Core/Typography/Label',
  args: {
    size: 2,
    variation: 'blue',
    capitalize: false,
    monotype: false,
  },
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Simple Label</BodyText>
      <Label {...args}>Connected peers</Label>
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Long Label</BodyText>
      <Label {...args}>
        <TruncateBox size={1}>
          01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
        </TruncateBox>
      </Label>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
