import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import WarningMessage from './warning-message';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: WarningMessage,
  title: 'Common/Components/WarningMessage',
  args: {
    iconSrc: 'assets/icons/ic-info.svg',
    title: 'The amount of received CSPR may vary',
    message:
      'The amount of CSPR you receive depends on the chosen provider and may vary due to reasons beyond our control.',
  },
} as ComponentMeta<typeof WarningMessage>;

const Template: ComponentStory<typeof WarningMessage> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <WarningMessage {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
