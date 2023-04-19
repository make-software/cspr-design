import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Dropdown from './dropdown';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
    component: Dropdown,
    title: 'Dropdown',
    args: {
        value: { value: 'faucet', label: 'Faucet' },
        areItemsRemovable: true,
        isSearchable: true,
        label: 'Story Dropdown',
        items: [
            { value: 'faucet', label: 'Faucet' },
            { value: 'contracts', label: 'Deploy contract' },
            { value: 'peers', label: 'Connected peers' },
        ],
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <FlexRow itemsSpacing={10}>
        <FlexColumn itemsSpacing={10}>
            <Dropdown {...args}/>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
