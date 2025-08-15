import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserInputWindow from './user-input-window';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { ModalPosition } from '../confirmation-window/confirmation-window';
import { InputValidationType } from '../input/input';
import SvgIcon from '../svg-icon/svg-icon';
import { HeaderMenuIcon, LockImageIcon, WarningIcon } from '../../icons-index';

export default {
  component: UserInputWindow,
  title: 'Components/Overlays and layering/User Input Window',
  excludeStories: ['Primary'],
  // tags: ['autodocs', '!dev'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    headerLogo: { table: { disable: true } },
    bodyImg: { table: { disable: true } },
  },
  args: {
    isOpen: true,
    position: ModalPosition.TopRight,
    title: 'Please, set your recovery password first',
    information: 'Your password length is 12 characters',
    withHeader: true,
    headerLogo: <SvgIcon src={HeaderMenuIcon} height={40} width={110} />,
    bodyImg: <SvgIcon src={LockImageIcon} width={296} height={120} />,
    confirmLabel: 'Yes',
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: false,
    dismissLabel: 'No',
    informationOnlyMode: false,
    checkboxLabel:
      'Trust this device and do not ask for the Unlock PIN to approve transactions.',
    onConfirm: (value, isChecked) => {
      console.log('value ', value);
      console.log('isChecked ', isChecked);
    },
    validationSetting: {
      validationMessage: 'Wrong password',
      regexpPattern: /^[a-zA-Z0-9]{12}/,
    },
    onDismiss: () => {},
    hideXButton: false,
    inputLabel: 'Password',
    inputType: InputValidationType.password,
    validationMessage: 'Password should have at least 12 alphanumeric charts!',
    placeholder: 'Set up password',
    repeatInput: {
      validationMessage: 'Passwords should match',
      // label: 'Confirm pass',
      placeholder: 'Confirm password',
    },
    warningMessage: {
      title: 'Please remember about safety',
      message:
        'You will need to enter Unlock PIN before approving a transaction. If you share code with anyone or forger it you might lose access to the your account.',
      margin: '16px 0',
      iconSrc: WarningIcon,
    },
    isMandatoryCheckBox: true,
  },
} as Meta<typeof UserInputWindow>;

const Template: StoryFn<typeof UserInputWindow> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <BodyText size={2}>Confirm Modal</BodyText>
      <UserInputWindow {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
