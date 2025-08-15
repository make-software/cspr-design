import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './dropdown';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import SearchableDropdown from '../dropdown-with-search/searchable-dropdown';

export default {
  component: Dropdown,
  title: 'Components/Form/Dropdown',
  // tags: ['autodocs', '!dev'],
  args: {
    value: { value: 'faucet', label: 'Faucet' },
    areItemsRemovable: true,
    label: 'Story Dropdown',
    items: [
      { value: 'faucet', label: 'Faucet' },
      { value: 'contracts', label: 'Deploy contract' },
      { value: 'peers', label: 'Connected peers' },
    ],
  },
  argTypes: {
    areItemsRemovable: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => (
  <FlexRow itemsSpacing={10}>
    <FlexColumn itemsSpacing={10}>
      <Dropdown {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});

const TemplateWithSearch: StoryFn<typeof SearchableDropdown> = (args) => (
  <FlexRow itemsSpacing={10}>
    <FlexColumn itemsSpacing={10}>
      <SearchableDropdown {...args} />
    </FlexColumn>
  </FlexRow>
);

export const DropdownWithSearch = TemplateWithSearch.bind({});
