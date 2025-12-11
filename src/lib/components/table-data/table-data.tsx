import React from 'react';

import styled from 'styled-components';
import { BaseProps } from '../../types';

export interface TableDataProps extends BaseProps {
  align?: 'left' | 'right' | 'center';
  fitContent?: boolean;
  indented?: boolean;
  colSpan?: number;
  rowSpan?: number;
}

const StyledTableData = styled.td<TableDataProps>(
  ({ theme, align = 'left', fitContent, indented }) => ({
    height: 48,
    padding: 8,
    textAlign: align,
    ':first-of-type': {
      paddingLeft: indented ? 60 : 20,
    },
    ':last-of-type': {
      paddingRight: 20,
    },
    ...(fitContent && {
      width: '1%',
    }),
  })
);

export function TableData(props: TableDataProps) {
  return <StyledTableData {...props} />;
}

export default TableData;
