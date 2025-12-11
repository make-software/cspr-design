import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';

/* eslint-disable-next-line */
export interface WizardTileProps extends BaseProps {}

const StyledWizardTile = styled.div(({ theme }) =>
  theme.withMedia({
    position: 'relative',
    background: theme.styleguideColors.backgroundPrimary,
    boxShadow: '0px 2px 4px rgba(143, 144, 152, 0.15)',
    borderRadius: theme.borderRadius.base,
    marginBottom: 24,
    height: '100%',
    padding: ['80px 20px', '80px 150px', '80px 200px', '80px 300px'],
  }),
);

export function WizardTile(props: WizardTileProps) {
  return <StyledWizardTile {...props} />;
}

export default WizardTile;
