import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageTileHeader from './page-tile-header';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import PageTile from '../page-tile/page-tile';

export default {
  component: PageTileHeader,
  title: 'Components/Layout/PageTile Header',
  // tags: ['autodocs', '!dev'],
} as Meta<typeof PageTileHeader>;

const Template: StoryFn<typeof PageTileHeader> = () => (
  <FlexRow itemsSpacing={30}>
    <FlexColumn
      itemsSpacing={20}
      style={{ width: '600px', height: '200px', padding: '20px' }}
    >
      <PageTile>
        <PageTileHeader size={2}>Page Tile Header</PageTileHeader>
        <BodyText size={2}>Content</BodyText>
      </PageTile>
    </FlexColumn>
  </FlexRow>
);

export const Primary = Template.bind({});
