import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CopyHash } from './copy-hash';
import BodyText from '../body-text/body-text';
import FlexColumn from '../flex-column/flex-column';

export default {
  component: CopyHash,
  title: 'Common/Components/CopyHash',
  args: {
    value: 'some value',
    label: 'Copy Public Key',
    copiedLabel: 'Copied!',
    minified: false,
  },
} as Meta<typeof CopyHash>;

const Template: StoryFn<typeof CopyHash> = (args) => (
  <FlexColumn itemsSpacing={16}>
    <CopyHash {...args} />
    <BodyText size={2} variation={'darkGray'}>
      NOTE: CopyHash button allow you to copy value, which you can provide in
      `value` property to clipboard
    </BodyText>
  </FlexColumn>
);

export const Primary = Template.bind({});
