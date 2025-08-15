import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProgressLine from './progress-line';
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: ProgressLine,
  title: 'Components/Display/Progress Line',
  // tags: ['autodocs', '!dev'],
  args: {
    steps: ['one', 'two', 'three', 'four'],
    currentIdx: 1,
  },
} as Meta<typeof ProgressLine>;

const StyledColumn = styled(FlexColumn)(({ theme }) => ({
  width: '400px',
}));

const Template: StoryFn<typeof ProgressLine> = (args) => (
  <StyledColumn itemsSpacing={20}>
    <BodyText size={2}>ProgressLine</BodyText>
    <ProgressLine {...args} />
  </StyledColumn>
);

export const Primary = Template.bind({});
