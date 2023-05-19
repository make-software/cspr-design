import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AccountInfoRow from './account-info-row';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: AccountInfoRow,
  title: 'Common/Components/AccountInfoRow',
  args: {
    publicKey:
      '0202fa4d6ff148562fe18cdb5aca0bb6c3b96592cdacad8587eb906c3e4b1ac7258a',
    label: 'Account',
    accountBalance: '3000000',
    loading: false,
    error: '',
    accountEmpty: false,
    disabled: false,
  },
} as ComponentMeta<typeof AccountInfoRow>;

const Template: ComponentStory<typeof AccountInfoRow> = (args) => (
    <FlexRow itemsSpacing={30}>
      <FlexColumn itemsSpacing={20}>
        <BodyText size={2}>Account Info Row</BodyText>
        <AccountInfoRow {...args} />
      </FlexColumn>
    </FlexRow>
);

export const Primary = Template.bind({});
