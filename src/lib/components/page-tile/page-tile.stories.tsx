import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageTile from './page-tile';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: PageTile,
  title: 'Components/PageTile',
  args: {
    withPadding: true,
  },
} as Meta<typeof PageTile>;

const Template: StoryFn<typeof PageTile> = (args) => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn itemsSpacing={20}>
      <PageTile {...args}>
        <BodyText size={2}>Page Tile Content</BodyText>
      </PageTile>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
