import { default as React } from 'react';
export declare const Container: import('styled-components').StyledComponent<React.ForwardRefExoticComponent<import('../..').FlexRowProps & React.RefAttributes<HTMLDivElement>>, import('styled-components').DefaultTheme, {}, never>;
export interface PaginationProps {
    perPage: number;
    itemCount?: number;
    pageCount?: number;
    currentPage?: number;
    setPerPage?: (limit: number) => void;
    setCurrentPage?: (page: number) => void;
    hideRowsPerPage?: boolean;
    totalRowsLabel?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
//# sourceMappingURL=pagination.d.ts.map