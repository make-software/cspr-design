import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from './badge';
import Link from "../link/link";
import TruncateBox from "../truncate-box/truncate-box";

export default {
    component: Badge,
    title: 'Badge',
    args: {
        variation: 'green',
        label: 'Test'
    }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
    <Badge {...args}/>
);
export const Primary = Template.bind({});
export const badgeWithLink = () => (
    <Badge
        label={
            <TruncateBox
                size={1}
                style={{ verticalAlign: 'middle' }}
            >
                <Link color={'inherit'} href={'./'}>
                    Link
                </Link>
            </TruncateBox>}
        variation={'blue'}
    />
);