import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexBox from './flex-box';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import styled from 'styled-components';

export default {
  component: FlexBox,
  title: 'Layout and structure/Flex Box',
  args: {
    gap: 10,
    wrap: 'wrap',
    itemsSpacing: 10,
    justify: 'center',
    direction: 'column',
    shrink: 1,
  },
} as Meta<typeof FlexBox>;

const StyledBlock = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid #0a0a0a;
  font-weight: bolder;
  color: #fff;
  :nth-child(1n) {
    background: black;
  }
  :nth-child(2n) {
    background: red;
  }
  :nth-child(3n) {
    background: green;
  }
`;

const Template: StoryFn<typeof FlexBox> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <FlexBox {...args}>
        <StyledBlock>Block 1</StyledBlock>
        <StyledBlock>Block 2</StyledBlock>
        <StyledBlock>Block 3</StyledBlock>
      </FlexBox>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
