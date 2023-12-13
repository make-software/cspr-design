import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ModalContentHeader from './modal-content-header';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: ModalContentHeader,
  title: 'Common/Components/ModalContentHeader',
  args: {
    title: 'Choose a provider',
    subtitle: 'connect to',
    appName: 'cspr-click',
    margin: '20px',
  },
} as ComponentMeta<typeof ModalContentHeader>;

const Template: ComponentStory<typeof ModalContentHeader> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <ModalContentHeader {...args} />
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
