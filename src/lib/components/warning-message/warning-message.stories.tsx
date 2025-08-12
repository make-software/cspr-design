import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WarningMessage from './warning-message';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import { InfoIcon } from '../../icons-index';

export default {
  component: WarningMessage,
  title: 'Messaging/Warning Message',
  args: {
    title: 'The amount of received CSPR may vary',
    message:
      'The amount of CSPR you receive depends on the chosen provider and may vary due to reasons beyond our control.',
  },
} as Meta<typeof WarningMessage>;

const Template: StoryFn<typeof WarningMessage> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <WarningMessage iconSrc={InfoIcon} {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
