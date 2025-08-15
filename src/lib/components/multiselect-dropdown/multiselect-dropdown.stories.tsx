import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import { MultiselectDropdown } from './multiselect-dropdown';

export default {
  component: MultiselectDropdown,
  title: 'Components/Form/MultiselectDropdown',
  // tags: ['autodocs', '!dev'],
  args: {
    items: [
      { value: '2022', label: 'CSPR 2022', chipLabel: 'CSPR 2022' },
      { value: '2023', label: 'CSPR 2023', chipLabel: 'CSPR 2023' },
      { value: '2024', label: 'CSPR 2024', chipLabel: 'CSPR 2024' },
    ],
  },
} as Meta<typeof MultiselectDropdown>;

const Template: StoryFn<typeof MultiselectDropdown> = (args) => (
  <>
    <FlexRow itemsSpacing={30}>
      <FlexColumn itemsSpacing={30}>
        <MultiselectDropdown {...args} />
      </FlexColumn>
    </FlexRow>
  </>
);

export const Primary = Template.bind({});
