import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavLink from './nav-link';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import SubtitleText from '../subtitle-text/subtitle-text';

export default {
    component: NavLink,
    title: 'NavLink',
    args: {
        href: './',
        disabled: false,
    },
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => (
    <FlexRow itemsSpacing={20}>
        <FlexColumn itemsSpacing={10}>
            <NavLink {...args}>
                <SubtitleText size={1}>Admin</SubtitleText>
            </NavLink>
            <NavLink {...args}>
                <SubtitleText size={1}>Wallet</SubtitleText>
            </NavLink>
            <NavLink {...args}>
                <SubtitleText size={1}>Contracts</SubtitleText>
            </NavLink>
        </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
