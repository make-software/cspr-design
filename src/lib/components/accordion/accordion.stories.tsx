import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import FlexColumn from '../flex-column/flex-column';
import Accordion from './accordion';

export default {
  component: Accordion,
  // tags: ['autodocs', '!dev'],
  excludeStories: ['Primary'],
  title: 'Components/Display/Accordion',
  args: {
    children: (render) => (
      <>
        <div>Accordion</div>
        <div>Accordion</div>
        <div>Accordion</div>
        <div>Accordion</div>
        <div>Accordion</div>
      </>
    ),
  },
  argTypes: {},
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => (
  <FlexColumn itemsSpacing={20}>
    <Accordion {...args} />
  </FlexColumn>
);

export const Primary = Template.bind({});
