import React from 'react';
import { PaginationInfoText } from './pagination-info-text';
import { PaginationDropdown } from './pagination-dropdown';
import FlexRow from '../flex-row/flex-row';

export const RowsPerPage = ({
  value,
  items,
  onChange,
}: {
  value: number;
  items: number[];
  onChange: (perPage) => void;
}) => {
  return (
    <FlexRow itemsSpacing={4} align={'center'}>
      <PaginationInfoText>Show rows</PaginationInfoText>
      <PaginationDropdown value={value} items={items} onChange={onChange} />
    </FlexRow>
  );
};
