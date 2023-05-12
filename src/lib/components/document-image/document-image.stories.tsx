import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DocumentImage } from './document-image';

export default {
    component: DocumentImage,
    title: 'Core/SvgImages/DocumentImage',
    args: {
        size: 100,
    },
} as ComponentMeta<typeof DocumentImage>;

const Template: ComponentStory<typeof DocumentImage> = (args) => (
    <DocumentImage {...args}/>
);

export const Primary = Template.bind({});
