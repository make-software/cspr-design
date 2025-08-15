import styled from 'styled-components';

export const PaginationContainer = styled.div(({ theme }) =>
  theme.withMedia({
    border: 'none',
    cursor: 'pointer',
    color: theme.styleguideColors.contentRed,
    background: theme.styleguideColors.fillSecondary,
    borderRadius: theme.borderRadius.base,
    fontWeight: theme.typography.fontWeight.medium,
    minHeight: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: ['2px 8px'],
    ':hover': {
      background: theme.styleguideColors.fillSecondaryRedHover,
      color: theme.styleguideColors.fillPrimaryRedHover,
    },
    ':active': {
      background: theme.styleguideColors.fillSecondaryRedClick,
      color: theme.styleguideColors.fillPrimaryRedClick,
    },
  }),
);
