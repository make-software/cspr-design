import React from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { matchSize } from '../../utils/match-size';
import { TableRowType, TableRow } from '../table-row/table-row';
import TableData from '../table-data/table-data';

type Props = {
  columnsLength: number;
  rowsLength?: number;
  tableRowType: TableRowType;
};

type TableLoaderRowProps = {
  type: TableRowType;
};

const TableLoaderRow = styled(TableRow)<TableLoaderRowProps>(
  ({ theme, type }) => ({
    height: matchSize(
      {
        [TableRowType.TextWithAvatar]: '56px',
        [TableRowType.TextWithIcon]: '52px',
        [TableRowType.TextSingleLine]: '48px',
      },
      type,
    ),
  }),
);

export function TableLoader({
  columnsLength,
  rowsLength = 10,
  tableRowType = TableRowType.TextSingleLine,
}: Props) {
  const tableData = Array(rowsLength).fill(undefined);
  const columnsRow = Array(columnsLength).fill(null);

  return (
    <>
      {tableData.map((item, index) => (
        <TableLoaderRow key={'row' + index} type={tableRowType} loading>
          {columnsRow.map((item2, index2) => (
            <TableData key={'column' + index2}>
              <Skeleton />
            </TableData>
          ))}
        </TableLoaderRow>
      ))}
    </>
  );
}
