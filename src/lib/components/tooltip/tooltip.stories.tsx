import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tooltip from './tooltip';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: Tooltip,
  title: 'Common/Components/Tooltip',
  args: {
    title: '0202fa4d6ff148562fe18cdb5aca0bb6c3b96592cdacad8587eb906c3e4b1ac7258a',
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
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
