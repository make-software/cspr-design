import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TabMenu from '../tab-menu/tab-menu';
import TabMenuItem from '../tab-menu-item/tab-menu-item';
import BodyText from '../body-text/body-text';
import TabContent from '../tab-content/tab-content';
import PageTile from '../page-tile/page-tile';
import PageTileTabsHeader from '../page-tile-tabs-header/page-tile-tabs-header';

export default {
  component: TabMenu,
  title: 'Layout and structure/Tab Menu',
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
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <PageTile>
        <PageTileTabsHeader tabsCount={3}>
          <TabMenu>
            <TabMenuItem key={1} {...args}>
              Tab 1
            </TabMenuItem>
            <TabMenuItem key={2}>Tab 2</TabMenuItem>
            <TabMenuItem key={3}>Tab 3</TabMenuItem>
          </TabMenu>
        </PageTileTabsHeader>
        <TabContent key={1}>
          <BodyText size={2}>Tab1 Content</BodyText>
        </TabContent>
      </PageTile>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
