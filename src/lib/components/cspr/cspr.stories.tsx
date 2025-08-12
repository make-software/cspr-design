import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Cspr from './cspr';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { PrecisionCase } from '../../utils/currency';

export default {
  component: Cspr,
  title: 'Primitives/Cspr',
  args: {
    motes: '3000',
    precisionCase: PrecisionCase.deployCost,
    hideCsprCurrency: false,
  },
  argTypes: {
    motes: {
      control: 'text',
      description: 'Amount in motes to be displayed',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '3000' },
      },
    },
    precisionCase: {
      control: 'select',
      options: Object.values(PrecisionCase),
    },
    hideCsprCurrency: {
      control: 'boolean',
    },
  },
} as Meta<typeof Cspr>;

const Template: StoryFn<typeof Cspr> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <Cspr {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
