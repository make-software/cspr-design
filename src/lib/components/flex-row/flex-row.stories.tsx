import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from './flex-row';
import FlexBox from '../flex-box/flex-box';
import FlexColumn from '../flex-column/flex-column';
import styled from 'styled-components';

export default {
  component: FlexRow,
  title: 'Components/Layout/FlexRow',
  // tags: ['autodocs', '!dev'],
  args: {
    itemsSpacing: 10,
    justify: 'center',
    align: 'center',
    grow: 10,
    gap: 10,
    shrink: 1,
  },
} as Meta<typeof FlexRow>;

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

const Block = () => (
  <FlexBox>
    <StyledBlock>Block 1</StyledBlock>
    <StyledBlock>Block 2</StyledBlock>
    <StyledBlock>Block 3</StyledBlock>
  </FlexBox>
);

const Template: StoryFn<typeof FlexRow> = (args) => (
  <>
    <FlexRow itemsSpacing={10}>
      <FlexColumn itemsSpacing={20}>
        <Block />
      </FlexColumn>
    </FlexRow>
    <FlexRow {...args}>
      <FlexColumn itemsSpacing={20}>
        <Block />
      </FlexColumn>
    </FlexRow>
  </>
);

export const Primary = Template.bind({});
