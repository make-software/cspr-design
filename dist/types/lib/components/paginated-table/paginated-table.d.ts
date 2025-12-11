import React from 'react';
import { TableRowType } from '../table-row/table-row';
export declare enum OrderDirection {
    ASC = "ASC",
    DESC = "DESC"
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
export type RenderProps = {
    sortingProps: SortingProps;
};
export type PaginatedTableProps<Entity> = {
    data: null | Entity[];
    loading?: boolean;
    error?: ErrorResult | null;
    renderDataHeaders: (renderProps: RenderProps) => React.ReactElement;
    renderPaginatedData: (paginatedData: Entity[], renderProps?: RenderProps) => React.ReactElement | React.ReactElement[];
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
export declare const PaginatedTable: <Entity>({ data, loading, error, renderDataHeaders, renderPaginatedData, tableRowType, ...props }: PaginatedTableProps<Entity>) => import("react/jsx-runtime").JSX.Element;
export default PaginatedTable;
//# sourceMappingURL=paginated-table.d.ts.map