import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from 'styled-components';
import Avatar from './avatar'
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import SubtitleText from '../subtitle-text/subtitle-text';

export default {
    component: Avatar,
    title: 'Avatar',
    args: {
        size: 'default',
        hash: '01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2'
    },
} as ComponentMeta<typeof Avatar>;

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <FlexRow itemsSpacing={10}>
        <FlexColumn itemsSpacing={10}>
            <Avatar {...args}/>
        </FlexColumn>
    </FlexRow>
);
const AvatarTypes = ({size}) => (
    <>
        <SubtitleText size={2}>{size}</SubtitleText>
        <StyledBlock>
            <Avatar
                hash='2132460a950062fd30ad8a54cda9d0bed7ee1571edeb65459f62f3562ed82884'
                size={size}/>
            <Avatar hash='fhrse934-3400343!dede@frfrkrmbTFSDEFTH' size={size}/>
            <Avatar isErc20 size={size}/>
            <Avatar src='https://make.services/logo.svg' size={size}/>
        </StyledBlock>
    </>
);

export const allOptions = () => (
    <FlexRow itemsSpacing={10}>
        <FlexColumn itemsSpacing={10}>
            <AvatarTypes size='small'/>
            <AvatarTypes size='default'/>
            <AvatarTypes size='medium'/>
            <AvatarTypes size='big'/>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});

