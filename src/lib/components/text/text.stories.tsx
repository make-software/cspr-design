import React from 'react';

import Text from './text';
import Label from '../label/label';
import CaptionText from '../caption-text/caption-text';
import BodyText from '../body-text/body-text';
import SubtitleText from '../subtitle-text/subtitle-text';
import HeaderText from '../header-text/header-text';
import FlexColumn from '../flex-column/flex-column';
import FlexRow from '../flex-row/flex-row';

export default {
  component: Text,
  title: 'Core/Typography/Text',
};

export const allTexts = () => (
  <FlexColumn itemsSpacing={10}>
    <FlexRow>
      <Label size={2}>Inter, Medium, 10 pt - Label 2</Label>
    </FlexRow>
    <FlexRow>
      <Label size={1}>Inter, Bold, 10 pt - Label 1</Label>
    </FlexRow>
    <FlexRow>
      <CaptionText size={2}>Inter, Regular, 11 pt - Caption 2</CaptionText>
    </FlexRow>
    <FlexRow>
      <CaptionText size={1}>Inter, Medium, 11 pt - Caption 1</CaptionText>
    </FlexRow>
    <FlexRow>
      <BodyText size={3} monotype>
        JetBrains Mono, Regular, 13 pt - Mono Body 3
      </BodyText>
    </FlexRow>
    <FlexRow>
      <BodyText size={3}>Inter, Regular, 13 pt - Body 3</BodyText>
    </FlexRow>
    <FlexRow>
      <BodyText size={2}>Inter, Medium, 13 pt - Body 2</BodyText>
    </FlexRow>
    <FlexRow>
      <BodyText size={1}>Inter, SemiBold, 13 pt - Body 1</BodyText>
    </FlexRow>
    <FlexRow>
      <SubtitleText size={3}>Inter, Light, 14 pt - Subtitle 3</SubtitleText>
    </FlexRow>
    <FlexRow>
      <SubtitleText size={2}>Inter, Regular, 14 pt - Subtitle 2</SubtitleText>
    </FlexRow>
    <FlexRow>
      <SubtitleText size={2} monotype>
        JetBrains Mono, Regular, 14 pt - Mono Subtitle 2
      </SubtitleText>
    </FlexRow>
    <FlexRow>
      <SubtitleText size={1}>Inter, SemiBold, 14 pt - Subtitle 1</SubtitleText>
    </FlexRow>
    <FlexRow>
      <HeaderText size={5}>Inter, SemiBold, 18 pt - Header 5</HeaderText>
    </FlexRow>
    <FlexRow>
      <HeaderText size={4}>Inter, SemiBold, 20 pt - Header 4</HeaderText>
    </FlexRow>
    <FlexRow>
      <HeaderText size={3}>Inter, SemiBold, 24 pt - Header 3</HeaderText>
    </FlexRow>
    <FlexRow>
      <HeaderText size={2}>Inter, Bold, 24 pt - Header 2</HeaderText>
    </FlexRow>
    <FlexRow>
      <HeaderText size={2} monotype>
        JetBrains Mono, Regular, 24 pt - Mono Header 2
      </HeaderText>
    </FlexRow>
    <FlexRow>
      <HeaderText size={1}>Inter, ExtraBold, 28 pt - Header 1</HeaderText>
    </FlexRow>
    <FlexRow>
      <HeaderText size={0}>Inter, ExtraBold, 40 pt - Header 0</HeaderText>
    </FlexRow>
  </FlexColumn>
);
