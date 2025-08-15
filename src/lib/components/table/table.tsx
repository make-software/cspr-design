import React, { Children } from 'react';

import { BaseTable } from '../base-table/base-table';
import { Pagination } from '../pagination/pagination';
import { TableRowType } from '../table-row/table-row';
import { TableLoader } from './table-loader';
import { TableError } from './table-error';

export enum OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface ErrorResult {
  code: string;
  message: string;
  description?: string | React.ReactElement;
}

export interface SortingProps {
  orderBy?: string | undefined;
  orderDirection?: OrderDirection;
  setOrder?: (orderBy: string | undefined, direction: OrderDirection) => void;
  reverseSortingDirection?: boolean;
}

export type RenderProps = { sortingProps: SortingProps };

export type TableProps<Entity> = {
  data: null | Entity[];
  loading?: boolean;
  error?: ErrorResult | null;
  renderDataHeaders: (renderProps: RenderProps) => React.ReactElement;
  renderPaginatedData: (
    paginatedData: Entity[],
    renderProps?: RenderProps,
  ) => React.ReactElement | React.ReactElement[];
  tableRowType?: TableRowType;
  pageCount: number;
  currentPage: number;
  pageSize?: number;
  itemCount?: number;
  setPerPage?: (limit: number) => void;
  setCurrentPage?: (page: number) => void;
  hideRowsPerPage?: boolean;
  totalRowsLabel?: string;
};

export const Table = <Entity,>({
  data,
  loading,
  error,
  renderDataHeaders,
  renderPaginatedData,
  tableRowType = TableRowType.TextWithAvatar,
  ...props
}: TableProps<Entity>) => {
  const renderPaginationRow = () =>
    !error && (
      <Pagination {...props}/>
    );

  return (
    <BaseTable
      renderHeader={() => renderPaginationRow()}
      renderDataHeaders={() =>
        renderDataHeaders({
          sortingProps: null!,
        })
      }
      renderData={() =>
        (data == null && !error) || loading ? (
          <TableLoader
            columnsLength={Children.count(
              renderDataHeaders({
                sortingProps: {}!,
              }).props.children,
            )}
            tableRowType={tableRowType}
          />
        ) : error ? (
          <TableError
            columnsLength={Children.count(
              renderDataHeaders({
                sortingProps: {}!,
              }).props.children,
            )}
            error={error}
          />
        ) : data ? (
          renderPaginatedData(data, {
            sortingProps: {}!,
          })
        ) : (
          <></>
        )
      }
      renderFooter={() => renderPaginationRow()}
      {...props}
    />
  );
};

export default Table;
