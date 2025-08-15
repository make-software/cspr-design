import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TableDataHeader, { TableDataHeaderProps } from './table-data-header';

export default {
  component: TableDataHeader,
  title: 'Components/Display/TableDataHeader',
} as Meta<typeof TableDataHeader>;

const Template: StoryFn<typeof TableDataHeader> = (
  args: TableDataHeaderProps,
) => {
  return <TableDataHeader>Name</TableDataHeader>;
};

export const Primary = Template.bind({});
