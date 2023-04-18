import React from 'react';
import styled from 'styled-components';
import Avatar from './avatar'
import FlexRow from "../flex-row/flex-row";
import FlexColumn from "../flex-column/flex-column";
import SubtitleText from '../subtitle-text/subtitle-text';

export default {
    component: Avatar,
    title: 'Avatar',
};

const StyledBlock = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarTypes = ({size}) => (
    <>
        <SubtitleText size={2}>{size}</SubtitleText>
        <StyledBlock>
            <Avatar hash={'2132460a950062fd30ad8a54cda9d0bed7ee1571edeb65459f62f3562ed82884'} size={size}/>
            <Avatar hash={'fhrse934-3400343!dede@frfrkrmbTFSDEFTH'} size={size}/>
            <Avatar isErc20 size={size}/>
            <Avatar src={'https://make.services/logo.svg'} size={size}/>
        </StyledBlock>
    </>
);

export const allOptions = () => (
    <FlexRow itemsSpacing={10}>
        <FlexColumn itemsSpacing={10}>
            <AvatarTypes size={'small'}/>
            <AvatarTypes size={'default'}/>
            <AvatarTypes size={'medium'}/>
            <AvatarTypes size={'big'}/>
        </FlexColumn>
    </FlexRow>
);

