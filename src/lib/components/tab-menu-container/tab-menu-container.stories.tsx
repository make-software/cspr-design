import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TabMenuContainer from './tab-menu-container';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import PageTile from '../page-tile/page-tile';
import TabMenu from '../tab-menu/tab-menu';
import TabMenuItem from '../tab-menu-item/tab-menu-item';

export default {
  component: TabMenuContainer,
  title: 'Components/Layout/TabMenuContainer',
  // tags: ['autodocs', '!dev'],
} as Meta<typeof TabMenuContainer>;

const Template: StoryFn<typeof TabMenuContainer> = () => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <PageTile>
        <TabMenuContainer tabsCount={3}>
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
            <TabMenuItem key={4} active={false} onClick={() => {}}>
              Tab 4
            </TabMenuItem>
            <TabMenuItem key={5} active={false} onClick={() => {}}>
              Tab 5
            </TabMenuItem>
          </TabMenu>
        </TabMenuContainer>
      </PageTile>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
