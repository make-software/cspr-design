import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTileTabsHeader from '../page-tile-tabs-header/page-tile-tabs-header';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import PageTile from '../page-tile/page-tile';
import TabMenu from '../tab-menu/tab-menu';
import TabMenuItem from '../tab-menu-item/tab-menu-item';

export default {
    component: TabMenuItem,
    title: 'TabMenuItem',
} as ComponentMeta<typeof TabMenuItem>;

const Template: ComponentStory<typeof TabMenuItem> = () => (
    <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
            <PageTile>
                <PageTileTabsHeader tabsCount={4}>
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
                    </TabMenu>
                </PageTileTabsHeader>
            </PageTile>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
