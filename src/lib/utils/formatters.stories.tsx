import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import FlexRow from '../components/flex-row/flex-row';
import FlexColumn from '../components/flex-column/flex-column';
import BodyText from '../components/body-text/body-text';
import {
  formatBigNumbers,
  formatCurrency,
  formatDate,
  formatDateShort,
  formatNumber,
  formatTimestamp,
} from './formatters';

export default {
  title: 'Components/Format/Formatters',
  // tags: ['autodocs', '!dev'],
  args: {},
  argTypes: {},
} as Meta;

const Template: StoryFn = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <FlexColumn>
        <BodyText size={2}>formatBigNumbers</BodyText>
        <BodyText size={2}>
          {formatBigNumbers('23465762398456982364598263945692354629')}
        </BodyText>
      </FlexColumn>
      <FlexColumn>
        <BodyText size={2}>formatNumber</BodyText>
        <BodyText size={2}>{formatNumber(234234234)}</BodyText>
      </FlexColumn>
      <FlexColumn>
        <BodyText size={2}>formatCurrency</BodyText>
        <BodyText size={2}>{formatCurrency('345345', 'USD')}</BodyText>
      </FlexColumn>
      <FlexColumn>
        <BodyText size={2}>formatTimestamp</BodyText>
        <BodyText size={2}>
          {formatTimestamp(new Date().toDateString())}
        </BodyText>
      </FlexColumn>
      <FlexColumn>
        <BodyText size={2}>formatDate</BodyText>
        <BodyText size={2}>{formatDate(new Date().toDateString())}</BodyText>
      </FlexColumn>
      <FlexColumn>
        <BodyText size={2}>formatDateShort</BodyText>
        <BodyText size={2}>
          {formatDateShort(new Date().toDateString())}
        </BodyText>
      </FlexColumn>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
