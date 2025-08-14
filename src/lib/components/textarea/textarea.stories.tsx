import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SvgIcon from '../svg-icon/svg-icon';
import Textarea from './textarea';
import { LabelFontSize } from '../../types';
import { HeartIcon } from '../../icons-index';

export default {
  component: Textarea,
  title: 'Components/Forms and inputs/Textarea',
  // tags: ['autodocs', '!dev'],
  args: {
    disabled: false,
    placeholder: 'Type here',
    label: 'Textarea label',
    labelFontSize: LabelFontSize.default,
    rightLabel: 'Right label',
    error: false,
    validationText: 'Validation text',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Indicates if the textarea is in an error state',
    },
    validationText: {
      control: { type: 'text' },
      description: 'Text to display when there is a validation error',
    },
  },
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => (
  <Textarea {...args} suffixIcon={<SvgIcon src={HeartIcon} name="info" />} />
);

export const Primary = Template.bind({});
