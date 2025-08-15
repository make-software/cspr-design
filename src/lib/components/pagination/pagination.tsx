import React from 'react';
import styled from 'styled-components';

import { PaginationArrowButton, PaginationButton } from './pagination-button';
import { PaginationInput } from './pagination-input';
import { RowsPerPage } from './rows-per-page';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import FlexColumn from '../flex-column/flex-column';
import { formatNumber } from '../../utils/formatters';
import BodyText from '../body-text/body-text';
import { useMatchMedia } from '../../utils/match-media';
import ArrowRightIcon from '../../assets/icons/ic-arrow-right.svg';

const ROWS_PER_PAGE = [5, 10, 25, 50];

export const Container = styled(FlexRow)(({ theme }) =>
    theme.withMedia({
      height: [80, 48],
      flexDirection: ['column', 'row', 'row'],
      justifyContent: 'space-between',
      padding: ['12px 10px', '12px 20px'],
      margin: ['0 0 10px 0', '0'],
    }),
);

const MirroredSvgIcon = styled(SvgIcon)(({ theme }) => ({
  transform: 'rotate(180deg)',
}));

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

export const Pagination: React.FC<PaginationProps> = ({
  perPage = 10,
  itemCount= 0,
  pageCount = 1,
  currentPage = 1,
  setCurrentPage = () => {},
  setPerPage = () => {},
  hideRowsPerPage = false,
  totalRowsLabel = 'total row',
}) => {
  const isFirstEnabled = currentPage > 1;
  const isPrevEnabled = currentPage > 1;
  const isLastEnabled = currentPage < pageCount;
  const noData = pageCount < 1;

  const prevPageHandler = () => setCurrentPage(currentPage - 1);

  const nextPageHandler = () => setCurrentPage(currentPage + 1);

  const firstPageHandler = () => setCurrentPage(1);

  const lastPageHandler = () => setCurrentPage(pageCount);

  const handlePaginationChange = (page: number) =>
      setCurrentPage(page);

  const onMobile = (
    <FlexColumn itemsSpacing={4}>
      <FlexRow itemsSpacing={4}>
        <PaginationButton
          color={'secondaryRed'}
          disabled={!isFirstEnabled}
          onClick={firstPageHandler}
        >
          First
        </PaginationButton>
        <PaginationArrowButton
          color={'secondaryRed'}
          disabled={!isPrevEnabled}
          onClick={prevPageHandler}
        >
          <MirroredSvgIcon src={ArrowRightIcon} />
        </PaginationArrowButton>
        <PaginationInput
          pageCount={pageCount}
          currentPage={currentPage}
          onChange={handlePaginationChange}
        />
        <PaginationArrowButton
          color={'secondaryRed'}
          disabled={!isLastEnabled}
          onClick={nextPageHandler}
        >
          <SvgIcon src={ArrowRightIcon} />
        </PaginationArrowButton>
        <PaginationButton
          color={'secondaryRed'}
          disabled={!isLastEnabled}
          onClick={lastPageHandler}
        >
          Last
        </PaginationButton>
      </FlexRow>
      {!hideRowsPerPage && (
          <RowsPerPage
            value={perPage}
            items={ROWS_PER_PAGE}
            onChange={setPerPage}
          />
      )}
    </FlexColumn>
  );

  const onAbove = (
    <FlexRow itemsSpacing={40}>
      {!hideRowsPerPage && (
          <RowsPerPage
            value={perPage}
            items={ROWS_PER_PAGE}
            onChange={setPerPage}
          />
      )}
      <FlexRow itemsSpacing={4} align={'center'}>
        <PaginationButton
          disabled={!isFirstEnabled}
          onClick={firstPageHandler}
          color={'secondaryRed'}
        >
          First
        </PaginationButton>
        <PaginationArrowButton
          color={'secondaryRed'}
          disabled={!isPrevEnabled}
          onClick={prevPageHandler}
        >
          <MirroredSvgIcon src={ArrowRightIcon} />
        </PaginationArrowButton>
        <PaginationInput
          pageCount={pageCount}
          currentPage={currentPage}
          onChange={handlePaginationChange}
        />
        <PaginationArrowButton
          color={'secondaryRed'}
          disabled={!isLastEnabled}
          onClick={nextPageHandler}
        >
          <SvgIcon src={ArrowRightIcon} />
        </PaginationArrowButton>
        <PaginationButton
          disabled={!isLastEnabled}
          onClick={lastPageHandler}
          color={'secondaryRed'}
        >
          Last
        </PaginationButton>
      </FlexRow>
    </FlexRow>
  );

  const responsivePagination = useMatchMedia(
    [onMobile, onAbove],
    [perPage, currentPage, pageCount],
  );

  if (noData) {
    return (
      <Container>
        <span>&nbsp;</span>
      </Container>
    );
  }
  return (
    <Container>
      <FlexRow align={"center"}>
        <BodyText size={3} scale={'xs'} variation={'darkGray'}>
          {formatNumber(itemCount)} {totalRowsLabel}
          {itemCount > 1 && 's'}
        </BodyText>
      </FlexRow>
      {responsivePagination}
    </Container>
  );
};

export default Pagination;
