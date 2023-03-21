import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TableBodyProps {}

const StyledTableBody = styled.tbody``;

export function TableBody(props: TableBodyProps) {
  return <StyledTableBody {...props} />;
}

export default TableBody;
