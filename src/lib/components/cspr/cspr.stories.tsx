import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Cspr from './cspr';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { PrecisionCase } from '../../utils/currency';

export default {
  component: Cspr,
  title: 'Common/Components/Cspr',
  args: {
    motes: '3000',
    precisionCase: PrecisionCase.deployCost,
  },
} as ComponentMeta<typeof Cspr>;

const Template: ComponentStory<typeof Cspr> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>PrecisionCase DeployCost</BodyText>
      <Cspr {...args} />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>PrecisionCase Full</BodyText>
      <Cspr motes="5000000" precisionCase={PrecisionCase.full} />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Motes 0</BodyText>
      <Cspr motes="0" precisionCase={PrecisionCase.full} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
