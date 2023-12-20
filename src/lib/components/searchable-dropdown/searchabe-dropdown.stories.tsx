import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchableDropdown from './searchable-dropdown';

export default {
  component: SearchableDropdown,
  title: 'SearchableDropdown',
  args: {
    height: 'auto',
    fontSize: '14px',
    maxHeight: '134px',
    items: [
      { value: 'EN', label: 'test 1' },
      { value: 'GB', label: 'test 2' },
      { value: 'TB', label: 'test 3' },
      { value: 'CS', label: 'test 4' },
      { value: 'RT', label: 'test 5' },
    ],
    value: { value: 'EN', label: 'test 1' },
    placeholder: 'Select item...',
    onSelect: (data) => {
      console.log('selected item -> ', data);
    },
  },
} as ComponentMeta<typeof SearchableDropdown>;

const Template: ComponentStory<typeof SearchableDropdown> = (args) => (
  <SearchableDropdown {...args} />
);

export const Primary = Template.bind({});
