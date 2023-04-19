import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HeaderTabMenuItem from './header-tab-menu-item';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TabMenu from '../tab-menu/tab-menu';

export default {
    component: HeaderTabMenuItem,
    title: 'HeaderTabMenuItem',
    args: {
        active: false,
        monotype: false,
        capitalize: false,
    },
} as ComponentMeta<typeof HeaderTabMenuItem>;

const Template: ComponentStory<typeof HeaderTabMenuItem> = (args) => (
    <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
            <TabMenu>
                <HeaderTabMenuItem {...args}>Home</HeaderTabMenuItem>
                <HeaderTabMenuItem {...args}>Blocks</HeaderTabMenuItem>
                <HeaderTabMenuItem {...args}>Deploys</HeaderTabMenuItem>
            </TabMenu>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
