import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MultilineTextRow } from './multiline-text-row';

export default {
  component: MultilineTextRow,
  title: 'Components/Form/Multiline Text Row',
  excludeStories: ['Primary'],
  // tags: ['autodocs', '!dev'],
  args: {
    label: 'Message',
    labelTooltipText: 'This is a tooltip for the label',
    text: 'Lorem ipsum dolor sit amet. Est illo perspiciatis vel excepturi debitis quo dolores galisum ad soluta maxime eum ipsa omnis in blanditiis tenetur. Qui Quis natus qui explicabo atque qui similique molestiae in corrupti delectus in neque blanditiis ex atque quod quo quia quasi!',
    width: '300px',
  },
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    labelTooltipText: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof MultilineTextRow>;

const Template: StoryFn<typeof MultilineTextRow> = (args) => (
  <>
    <MultilineTextRow {...args} />
  </>
);

export const Primary = Template.bind({});
