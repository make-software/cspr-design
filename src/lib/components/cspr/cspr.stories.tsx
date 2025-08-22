import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CSPR from './cspr';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { PrecisionCase } from '../../utils/currency';

export default {
  component: CSPR,
  title: 'Components/Display/CSPR',
  // tags: ['autodocs', '!dev'],
  args: {
    motes: '30000000000',
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
} as Meta<typeof CSPR>;

const Template: StoryFn<typeof CSPR> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <CSPR {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
