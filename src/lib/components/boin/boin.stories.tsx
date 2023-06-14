import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Boin from './boin';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { PrecisionCase } from '../../utils/currency';

export default {
  component: Boin,
  title: 'Common/Components/Boin',
  args: {
    motes: '50000',
    precisionCase: PrecisionCase.deployCost,
  },
} as ComponentMeta<typeof Boin>;

const Template: ComponentStory<typeof Boin> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>PrecisionCase DeployCost</BodyText>
      <Boin {...args} />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>PrecisionCase Full</BodyText>
      <Boin motes="1000" precisionCase={PrecisionCase.full} />
    </FlexColumn>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Motes 0</BodyText>
      <Boin motes="0" precisionCase={PrecisionCase.full} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
