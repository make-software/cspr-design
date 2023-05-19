import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextRow, { TextRowType } from './text-row';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import SvgIcon from '../svg-icon/svg-icon';

export default {
  component: TextRow,
  title: 'Common/Components/TextRow',
  args: {
    label: 'text row',
    rightLabel: 'right label',
    suffixIcon: '',
    suffixText: '',
    prefixIcon: '',
    text: '0202fa4d6ff148562fe18cdb5aca0bb6c3b96592cdacad8587eb906c3e4b1ac7258a',
    type: TextRowType.Hash,
    labelIcon: <SvgIcon src="assets/icons/ic-info.svg" />,
    labelTooltipText: 'The Deploy Hash for your transaction',
  },
} as ComponentMeta<typeof TextRow>;

const Template: ComponentStory<typeof TextRow> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Text Row</BodyText>
      <TextRow {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
