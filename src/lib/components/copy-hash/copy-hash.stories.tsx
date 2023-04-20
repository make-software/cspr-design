import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CopyHash } from './copy-hash';
import BodyText from '../body-text/body-text';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: CopyHash,
  title: 'Common/Components/CopyHash',
  args: {
    value: 'some value',
  },
} as ComponentMeta<typeof CopyHash>;

const Template: ComponentStory<typeof CopyHash> = (args) => (
  <FlexColumn itemsSpacing={16}>
    <CopyHash value={'some value'} />
    <BodyText size={2} variation={'darkGray'}>
      NOTE: CopyHash button allow you to copy value, which you can provide in
      `value` property to clipboard
    </BodyText>
  </FlexColumn>
);

export const Primary = Template.bind({});
