import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CaptionText from './caption-text';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import TruncateBox from '../truncate-box/truncate-box';

export default {
    component: CaptionText,
    title: 'CaptionText',
    args: {
        size: 1,
        variation: 'contentViolet',
        monotype: false,
        uppercase: false,
        capitalize: false,
        loading: false,
    },
} as ComponentMeta<typeof CaptionText>;

const Template: ComponentStory<typeof CaptionText> = (args) => (
    <FlexRow itemsSpacing={30}>
        <FlexColumn itemsSpacing={20}>
            <BodyText size={1}>Simple Text</BodyText>
            <CaptionText {...args}>Inter, Regular, 11 pt - Caption</CaptionText>
        </FlexColumn>
        <FlexColumn itemsSpacing={20}>
            <BodyText size={1}>Long Text</BodyText>
            <CaptionText {...args}>
                <TruncateBox size={1}>
                    01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
                </TruncateBox>
            </CaptionText>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
