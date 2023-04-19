import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './checkbox';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
    component: Checkbox,
    title: 'Checkbox',
    args: {
        checked: true,
        label: 'checkbox',
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
    <FlexRow itemsSpacing={10}>
        <FlexColumn itemsSpacing={10}>
            <Checkbox {...args}/>
        </FlexColumn>
        <FlexColumn itemsSpacing={10}>
            <Checkbox checked disabled label="disabled"/>
        </FlexColumn>
    </FlexRow>
);


export const Primary = Template.bind({});