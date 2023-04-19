import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PageTile from './page-tile';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
    component: PageTile,
    title: 'PageTile',
    args: {
        withPadding: true,
    },
} as ComponentMeta<typeof PageTile>;

const Template: ComponentStory<typeof PageTile> = (args) => (
    <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
            <PageTile {...args}>
                <BodyText size={2}>Page Tile Content</BodyText>
            </PageTile>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
