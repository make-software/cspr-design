import { Meta } from '@storybook/react';

import Alert, { AlertStatus } from './alert';
import { LockedIcon } from '../../icons-index';
import { StoryObj } from '@storybook/react-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Display/Alert',
  component: Alert,
  // tags: ['autodocs', '!dev'],
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
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = {};
export const WithCustomIcon = {
  args: {
    iconSrc: LockedIcon,
    title: 'Custom Icon Alert',
    message: 'This alert has a custom icon.',
  },
};
