import React from 'react';

import { TableRow, TableRowProps } from './table-row';

export default {
  component: TableRow,
  title: 'TableRow',
};

export const primary = () => {
  const props: TableRowProps = {};

  return <TableRow />;
};
