import React from 'react';
import styled from 'styled-components';
import CaptionText from '../caption-text/caption-text';
import FlexBox from '../flex-box/flex-box';

interface PaginationInfoTextProps {
  children?: React.ReactNode;
}

export const StyledContainer = styled(FlexBox)(({ theme }) =>
  theme.withMedia({
    textAlign: 'center',
    borderRadius: theme.borderRadius.base,
    backgroundColor: theme.styleguideColors.fillSecondary,
    color: theme.styleguideColors.contentPrimary,
    height: 20,
    padding: ['4px 8px', '4px 16px'],
    width: '100%',
  }),
);

export const PaginationInfoText = ({
  children,
  ...props
}: PaginationInfoTextProps) => {
  return (
    <StyledContainer {...props} align={'center'} justify={'center'}>
      <CaptionText size={2} variation={'black'} noWrap>
        {children}
      </CaptionText>
    </StyledContainer>
  );
};
