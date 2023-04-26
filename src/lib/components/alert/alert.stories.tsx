import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Alert, {AlertStatus} from "./alert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Components/Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SuccessAlert.args = {
  status: AlertStatus.Success,
  message: 'Success'
};

export const ErrorAlert = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorAlert.args = {
  status: AlertStatus.Error,
  message: 'Error'
};