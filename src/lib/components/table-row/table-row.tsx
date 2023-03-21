import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { BaseProps } from '../../types';

/* eslint-disable-next-line */
export interface TableRowProps extends BaseProps {
  loading?: boolean;
  isClickable?: boolean;
  onClick?: MouseEventHandler<HTMLTableRowElement>;
}

export enum TableRowType {
  TextSingleLine = 'TextSingleLine',
  TextWithIcon = 'TextWithIcon',
  TextWithAvatar = 'TextWithAvatar',
}

export const StyledTableRow = styled.tr<{
  $loading?: boolean;
  isClickable?: boolean;
}>`
  ${({ theme, $loading, isClickable }) => ({
    ':hover, :active': {
      background: !$loading ? theme.styleguideColors.fillSecondary : '',
    },
    ':not(:first-child):after': {
      content: "''",
      position: 'absolute',
      left: 20,
      right: 20,
      borderBottom: theme.border.tableRowSeparator,
    },
    position: 'relative',
    ...(isClickable && {
      cursor: 'pointer',
    }),
  })}
`;

export function TableRow({ loading, ...props }: TableRowProps) {
  return <StyledTableRow $loading={loading ? loading : false} {...props} />;
}

export default TableRow;
