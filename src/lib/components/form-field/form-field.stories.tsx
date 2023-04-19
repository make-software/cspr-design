import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormField from './form-field';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import Input from '../input/input';

export default {
    component: FormField,
    title: 'FormField',
    args: {
        id: 'form',
        label: 'label',
        rightLabel: 'right label',
        status: 'success',
        statusText: 'status text',
    },
} as ComponentMeta<typeof FormField>;

const Template: ComponentStory<typeof FormField> = (args) => (
    <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
            <FormField {...args} >
                <Input value='Faucet' />
            </FormField>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
