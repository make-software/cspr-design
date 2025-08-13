import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import MultiselectInput from './multiselect-input';

export default {
  component: MultiselectInput,
  title: 'Forms and inputs/Multiselect Input',
  args: {
    items: [
      { value: '2022', label: 'CSPR 2022', chipLabel: 'CSPR 2022' },
      { value: '2023', label: 'CSPR 2023', chipLabel: 'CSPR 2023' },
      { value: '2024', label: 'CSPR 2024', chipLabel: 'CSPR 2024' },
    ],
  },
} as Meta<typeof MultiselectInput>;

const Template: StoryFn<typeof MultiselectInput> = (args) => (
  <>
    <FlexRow itemsSpacing={30}>
      <FlexColumn itemsSpacing={30}>
        <MultiselectInput {...args} />
      </FlexColumn>
    </FlexRow>
  </>
);

export const Primary = Template.bind({});
