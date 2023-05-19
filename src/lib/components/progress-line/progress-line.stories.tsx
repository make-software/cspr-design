import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProgressLine from './progress-line';
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: ProgressLine,
  title: 'Common/Components/ProgressLine',
  args: {
    steps: ['one', 'two', 'three', 'four'],
    currentIdx: 1,
  },
} as ComponentMeta<typeof ProgressLine>;

const StyledColumn = styled(FlexColumn)(({ theme }) => ({
  width: '400px',
}));

const Template: ComponentStory<typeof ProgressLine> = (args) => (
  <StyledColumn itemsSpacing={20}>
    <BodyText size={2}>ProgressLine</BodyText>
    <ProgressLine {...args} />
  </StyledColumn>
);

export const Primary = Template.bind({});
