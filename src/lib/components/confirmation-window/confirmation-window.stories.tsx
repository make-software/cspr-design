import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ConfirmationWindow from './confirmation-window';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: ConfirmationWindow,
  title: 'Modal Window',
  args: {
    isOpen: true,
    title: 'Please, set your recovery password first',
    information:
      'To perform this action you need to set up first your account and password.',
    withHeader: false,
    confirmLabel: 'Yes',
    dismissLabel: 'No',
    onConfirm: () => {},
    onDismiss: () => {},
  },
} as ComponentMeta<typeof ConfirmationWindow>;

const Template: ComponentStory<typeof ConfirmationWindow> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Confirm Modal</BodyText>
      <ConfirmationWindow {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
