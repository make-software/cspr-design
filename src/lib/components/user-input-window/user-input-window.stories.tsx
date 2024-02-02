import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserInputWindow from './user-input-window';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { ModalPosition } from '../confirmation-window/confirmation-window';
import { InputValidationType } from '../input/input';
import SvgIcon from "../svg-icon/svg-icon";
import { LockImage } from "../../index";

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
    bodyImg: <SvgIcon src={LockImage} width={296} height={120}/>,
    confirmLabel: 'Yes',
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: false,
    dismissLabel: 'No',
    checkboxLabel: 'Trust this device and do not ask for the Unlock PIN to approve transactions.',
    onConfirm: (value, isChecked) => {
      console.log('value ', value);
      console.log('isChecked ', isChecked);
    },
    validationSetting: {
      validationMessage: 'Wrong password',
      regexpPattern: /^[a-zA-Z0-9]{12}/,
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
