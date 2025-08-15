import React, { ReactNode } from 'react';
import styled from 'styled-components';
import TableHead from '../table-head/table-head';
import TableBody from '../table-body/table-body';
import BodyText from '../body-text/body-text';

export interface BaseTableProps {
  renderHeader?: () => ReactNode;
  renderDataHeaders?: () => ReactNode;
  renderData?: () => ReactNode;
  renderFooter?: () => ReactNode;
  noData?: boolean;
  noDataMessage?: string;
  paddingBottom?: number;
}

export const TableContainer = styled.div<{ paddingBottom?: number }>(
  ({ theme, paddingBottom }) => ({
    overflowX: 'auto',
    ...(paddingBottom && { paddingBottom }),
  }),
);

const StyledTable = styled.table(({ theme }) => ({
  width: '100%',
  position: 'relative',
  borderCollapse: 'collapse',
}));

const NoDataContainer = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export function BaseTable(props: BaseTableProps) {
  const {
    renderHeader,
    renderDataHeaders,
    renderData,
    renderFooter,
    noData,
    noDataMessage,
    paddingBottom,
  } = props;

  return (
    <>
      {renderHeader && renderHeader()}
      <TableContainer paddingBottom={paddingBottom}>
        <StyledTable>
          {renderDataHeaders && <TableHead>{renderDataHeaders()}</TableHead>}
          {renderData && <TableBody>{renderData()}</TableBody>}
        </StyledTable>
      </TableContainer>
      {renderFooter && renderFooter()}
      {noDataMessage && noData && (
        <NoDataContainer>
          <BodyText size={1}>{noDataMessage}</BodyText>
        </NoDataContainer>
      )}
    </>
  );
}

export default BaseTable;
