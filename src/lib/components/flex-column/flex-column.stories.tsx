import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FlexColumn from './flex-column';
import FlexBox from '../flex-box/flex-box';
import FlexRow from '../flex-row/flex-row';
import styled from 'styled-components';

export default {
    component: FlexColumn,
    title: 'Common/Layout/FlexColumn',
    args: {
        itemsSpacing: 10,
        direction: 'column',
        justify: 'center',
        align: 'center',
        grow: 10,
    },
} as ComponentMeta<typeof FlexColumn>;


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
`

const Block = () => (
    <FlexBox>
        <StyledBlock>Block 1</StyledBlock>
        <StyledBlock>Block 2</StyledBlock>
        <StyledBlock>Block 3</StyledBlock>
    </FlexBox>
);

const Template: ComponentStory<typeof FlexColumn> = (args) => (
    <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={10}>
            <Block/>
            <Block/>
        </FlexColumn>
        <FlexColumn {...args}>
            <Block/>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
