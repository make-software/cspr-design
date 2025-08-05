import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageTileTabsHeader from './page-tile-tabs-header';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import PageTile from '../page-tile/page-tile';
import TabMenu from '../tab-menu/tab-menu';
import TabMenuItem from '../tab-menu-item/tab-menu-item';

export default {
  component: PageTileTabsHeader,
  title: 'PageTileTabsHeader',
} as Meta<typeof PageTileTabsHeader>;

const Template: StoryFn<typeof PageTileTabsHeader> = () => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <PageTile>
        <PageTileTabsHeader tabsCount={3}>
          <TabMenu>
            <TabMenuItem key={1} active={false} onClick={() => {}}>
              Tab 1
            </TabMenuItem>
            <TabMenuItem key={2} active onClick={() => {}}>
              Tab 2
            </TabMenuItem>
            <TabMenuItem key={3} active={false} onClick={() => {}}>
              Tab 3
            </TabMenuItem>
          </TabMenu>
        </PageTileTabsHeader>
      </PageTile>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
