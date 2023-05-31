import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserInputWindow from './user-input-window';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { ModalPosition } from '../confirmation-window/confirmation-window';
import { InputValidationType } from '../input/input';

export default {
  component: UserInputWindow,
  title: 'User Input Window Window',
  args: {
    isOpen: true,
    position: ModalPosition.TopRight,
    title: 'Please, set your recovery password first',
    information:
      'To perform this action you need to set up first your account and password.',
    withHeader: true,
    confirmLabel: 'Yes',
    dismissLabel: 'No',
    onConfirm: (value) => {
      console.log('value ', value);
    },
    onDismiss: () => {},
    inputLabel: 'Password',
    inputType: InputValidationType.password,
    validationMessage: 'Password should have at least 12 alphanumeric charts!',
    placeholder: 'Set up password',
  },
} as ComponentMeta<typeof UserInputWindow>;

const Template: ComponentStory<typeof UserInputWindow> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Confirm Modal</BodyText>
      <UserInputWindow {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
