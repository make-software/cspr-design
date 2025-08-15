import React from 'react';

import Text, { TextVariation } from './text';
import Label from '../label/label';
import CaptionText from '../caption-text/caption-text';
import BodyText from '../body-text/body-text';
import SubtitleText from '../subtitle-text/subtitle-text';
import HeaderText from '../header-text/header-text';
import FlexColumn from '../flex-column/flex-column';
import FlexRow from '../flex-row/flex-row';
import { StoryFn } from '@storybook/react';

export default {
  component: Text,
  title: 'Components/Display/Text',
  // tags: ['autodocs', '!dev'],
  args: {
    loading: false,
    capitalize: false,
    capitalizeFirstLetter: false,
    uppercase: false,
    monotype: false,
    variation: 'contentViolet',
  },
  argTypes: {
    loading: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<typeof Text> = (args) => (
  <FlexColumn itemsSpacing={10}>
    <FlexRow>
      <Text {...args}>simple text</Text>
    </FlexRow>
  </FlexColumn>
);

export const Primary = Template.bind({});
