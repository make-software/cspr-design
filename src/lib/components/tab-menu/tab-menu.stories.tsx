import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TabMenu from '../tab-menu/tab-menu';
import TabMenuItem from '../tab-menu-item/tab-menu-item';

export default {
  component: TabMenu,
  title: 'TabMenu',
} as Meta<typeof TabMenu>;

const Template: StoryFn<typeof TabMenu> = () => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <TabMenu>
        <TabMenuItem key={1} active={false} onClick={() => {}}>
          Tab 1
        </TabMenuItem>
        <TabMenuItem key={2} active onClick={() => {}}>
          Tab 2
        </TabMenuItem>
        <TabMenuItem key={1} active={false} onClick={() => {}}>
          Tab 3
        </TabMenuItem>
      </TabMenu>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
