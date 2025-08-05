import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CEP18Token from './cep18-token';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: CEP18Token,
  title: 'Common/Components/CEP18Token',
  args: {
    motes: '50000123456789',
    decimals: 9,
    precision: 5,
    ticker: 'BOIN',
  },
} as Meta<typeof CEP18Token>;

const Template: StoryFn<typeof CEP18Token> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>PrecisionCase DeployCost</BodyText>
      <CEP18Token {...args} />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>BOIN Precision 9</BodyText>
      <CEP18Token
        motes="1000123456789"
        decimals={9}
        precision={5}
        ticker={'BOIN'}
      />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>BOIN Precision 5</BodyText>
      <CEP18Token
        motes="1000123456789"
        decimals={9}
        precision={5}
        ticker={'BOIN'}
      />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>CLICK3 Precision 3</BodyText>
      <CEP18Token
        motes="1000987"
        decimals={3}
        precision={3}
        ticker={'CLICK3'}
      />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Motes 0</BodyText>
      <CEP18Token motes="0" decimals={3} precision={3} ticker={'CLICK3'} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
