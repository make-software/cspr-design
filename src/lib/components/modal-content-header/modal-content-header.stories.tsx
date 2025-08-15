import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ModalContentHeader from './modal-content-header';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: ModalContentHeader,
  title: 'Components/Tooling/ModalContentHeader',
  excludeStories: ['Primary'],
  // tags: ['autodocs', '!dev'],
  args: {
    title: 'Choose a provider',
    subtitle: 'connect to',
    appName: 'cspr-click',
    margin: '20px',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the modal header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Choose a provider' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the modal header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'connect to' },
      },
    },
    appName: {
      control: 'text',
      description: 'Name of the application',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'cspr-click' },
      },
    },
    margin: {
      control: 'text',
      description: 'Margin around the modal header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '20px' },
      },
    },
  },
} as Meta<typeof ModalContentHeader>;

const Template: StoryFn<typeof ModalContentHeader> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <ModalContentHeader {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
