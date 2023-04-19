import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RadioButton from './radio-button';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
    component: RadioButton,
    title: 'RadioButton',
    args: {
        value: 'casper',
        selected: 'casper',
        disabled: true,
        label: 'Test Net'
    },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
    <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
            <RadioButton {...args}/>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
