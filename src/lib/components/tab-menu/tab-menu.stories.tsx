import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TabMenu from '../tab-menu/tab-menu';
import TabMenuItem from '../tab-menu-item/tab-menu-item';

export default {
  component: TabMenu,
  title: 'Components/Layout/TabMenu',
  // tags: ['autodocs', '!dev'],
  args: {
    active: true,
  },
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Indicates whether the tab is active or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<typeof TabMenu>;

const Template: StoryFn<typeof TabMenu> = (args) => (
  <TabMenu>
    <TabMenuItem key={1} {...args}>
      Tab 1
    </TabMenuItem>
    <TabMenuItem key={2}>Tab 2</TabMenuItem>
    <TabMenuItem key={3}>Tab 3</TabMenuItem>
  </TabMenu>
);

export const Primary = Template.bind({});
