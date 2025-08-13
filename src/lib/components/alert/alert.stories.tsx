import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Alert, { AlertStatus } from './alert';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Messaging/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    status: AlertStatus.Success,
    message: 'This is an alert message',
    title: 'This is an alert message',
  },
  argTypes: {
    status: {
      options: Object.values(AlertStatus),
      control: { type: 'radio' },
      description: 'The status of the alert',
    },
    message: {
      control: { type: 'text' },
      description: 'The message to display in the alert',
    },
    title: {
      control: { type: 'text' },
      description: 'The message to display in the alert',
    },
  },
} as Meta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />;

export const AlertMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertMessage.args = {
  status: AlertStatus.Success,
  message: 'Success',
};
