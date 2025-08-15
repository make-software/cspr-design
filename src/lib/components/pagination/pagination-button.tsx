import React from 'react';
import styled from 'styled-components';
import Button, { ButtonProps } from '../button/button';
import CaptionText from '../caption-text/caption-text';

interface PaginationButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const StyledButton = styled(Button)(({ theme }) =>
  theme.withMedia({
    width: 'auto',
    fontWeight: theme.typography.fontWeight.medium,
    minHeight: 24,
    padding: ['2px 10px'],
  }),
);

const StyledArrowsButton = styled(StyledButton)(({ theme }) =>
  theme.withMedia({
    padding: ['2px 4px'],
  }),
);

export const PaginationButton = ({
  children,
  ...restProps
}: PaginationButtonProps) => {
  return (
    <StyledButton color={'utility'} lineHeight={'xs'} {...restProps}>
      <CaptionText size={2}>{children}</CaptionText>
    </StyledButton>
  );
};

export const PaginationArrowButton = ({
  children,
  ...restProps
}: PaginationButtonProps) => {
  return (
    <StyledArrowsButton lineHeight={'xs'} {...restProps}>
      {children}
    </StyledArrowsButton>
  );
};
