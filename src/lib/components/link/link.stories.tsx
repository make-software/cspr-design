import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from './link';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import TruncateBox from '../truncate-box/truncate-box';
import BodyText from '../body-text/body-text';

export default {
    component: Link,
    title: 'Link',
    args: {
        color: 'primaryBlue',
        href: './',
        onClick: () => {},
    },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
    <FlexRow itemsSpacing={20}>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={2}>Simple Link</BodyText>
            <Link {...args}>Inner App Link</Link>
        </FlexColumn>
        <FlexColumn itemsSpacing={10}>
            <BodyText size={2}>Long Truncated Link</BodyText>
            <Link {...args}>
                <TruncateBox size={1}>
                    01f5f1fa995ab7e966428e5a1aed797526ad5b2454c50a63a7aaa2dfeae6a996c2
                </TruncateBox>
            </Link>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
