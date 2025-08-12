import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageTile from '../page-tile/page-tile';
import TabContent from './tab-content';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import PageTileTabsHeader from '../page-tile-tabs-header/page-tile-tabs-header';
import TabMenu from '../tab-menu/tab-menu';
import TabMenuItem from '../tab-menu-item/tab-menu-item';

export default {
  component: TabContent,
  title: 'Components/TabContent',
} as Meta<typeof PageTile>;

const Template: StoryFn<typeof PageTile> = () => (
  <>
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
          <TabContent key={1}>
            <BodyText size={2}>Tab2 Content</BodyText>
          </TabContent>
        </PageTile>
      </FlexColumn>
    </FlexRow>
  </>
);

export const Primary = Template.bind({});
