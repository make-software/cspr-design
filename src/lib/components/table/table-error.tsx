import React from 'react';
import styled from 'styled-components';
import BodyText from '../body-text/body-text';
import SvgIcon from '../svg-icon/svg-icon';

const FailedToFetchWrapper = styled('div')(({ theme }) => ({
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledBodyText = styled(BodyText)(({ theme }) => ({
  marginTop: 8,
  color: theme.styleguideColors.contentSecondary,
}));

const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  path: {
    fill: theme.styleguideColors.fillPrimaryRed,
  },
  marginBottom: 20,
}));

export const FailedToFetch = () => (
  <FailedToFetchWrapper>
    <StyledSvgIcon src="assets/icons/ic-search.svg" size={60} />
    <BodyText scale={'lg'} lineHeight={'sm'} size={1}>
      Failed to load data
    </BodyText>
    <StyledBodyText size={3} scale={'xs'}>
      Please try again later
    </StyledBodyText>
  </FailedToFetchWrapper>
);

export interface TableErrorProps {
  columnsLength?: number;
}

export const TableError = ({ columnsLength }: TableErrorProps) => {
  return (
    <tr>
      <td colSpan={columnsLength}>
        <FailedToFetch />
      </td>
    </tr>
  );
};
