import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CircularIndicator from './circular-indicator';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
    component: CircularIndicator,
    title: 'CircularIndicator',
    args: {
        size: 'medium',
        textSize: 1,
        progress: 25,
    },
} as ComponentMeta<typeof CircularIndicator>;

const Template: ComponentStory<typeof CircularIndicator> = (args) => (
    <FlexRow itemsSpacing={20}>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={1}>Dynamic</BodyText>
            <CircularIndicator {...args}/>
        </FlexColumn>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={2}>Progress 50%</BodyText>
            <CircularIndicator progress={50} size='medium' textSize={2}/>
        </FlexColumn>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={2}>Progress 75%</BodyText>
            <CircularIndicator progress={75} size='medium' textSize={2}/>
        </FlexColumn>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={2}>Progress 100%</BodyText>
            <CircularIndicator progress={100} size='medium' textSize={2}/>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
