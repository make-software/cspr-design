import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TableHeadProps {}

const StyledTableHead = styled.thead(({ theme }) => ({
  background: theme.styleguideColors.fillSecondary,
  height: 40,
}));

export function TableHead(props: TableHeadProps) {
  return <StyledTableHead {...props} />;
}

export default TableHead;
