import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageTile from './page-tile';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';

export default {
  component: PageTile,
  title: 'Layout and structure/Page Tile',
  args: {
    withPadding: true,
  },
} as Meta<typeof PageTile>;

const Template: StoryFn<typeof PageTile> = (args) => (
  <FlexRow itemsSpacing={30}>
    <PageTile {...args}>
      <FlexColumn
        itemsSpacing={20}
        style={{ width: '600px', height: '200px', padding: '20px' }}
      >
        <FlexRow itemsSpacing={20}>
          <BodyText size={2}>Page Tile Content</BodyText>
        </FlexRow>
      </FlexColumn>
    </PageTile>
  </FlexRow>
);

export const Primary = Template.bind({});
