import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Pagination } from './pagination';
import PageTile from '../page-tile/page-tile';

export default {
  component: Pagination,
  title: 'Components/Display/Pagination',
  args: {
    itemCount: 50,
    pageCount: 5,
  },
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = (args) => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  const handleCurrentPage = (page: number) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: page,
    }));
  };
  const handlePerPage = (pageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      pageSize: pageSize,
    }));
  };
  return (
    <PageTile>
      <Pagination
        itemCount={args.itemCount}
        pageCount={args.pageCount}
        currentPage={pagination.currentPage}
        perPage={pagination.pageSize}
        setCurrentPage={handleCurrentPage}
        setPerPage={handlePerPage}
      />
    </PageTile>
  );
};

export const Primary = Template.bind({});
