import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LockImage } from './lock-image';

export default {
    component: LockImage,
    title: 'Core/SvgImages/LockImage',
    args: {
        size: 100,
    },
} as ComponentMeta<typeof LockImage>;

const Template: ComponentStory<typeof LockImage> = (args) => (
    <LockImage {...args}/>
);

export const Primary = Template.bind({});
