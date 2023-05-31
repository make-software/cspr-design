import React from 'react';
import styled from 'styled-components';
import Big from 'big.js';
import { BodyText } from '../body-text/body-text';
import { FlexColumn } from '../flex-column/flex-column';
import { FlexRow } from '../flex-row/flex-row';
import { formatHash } from '../../utils/formatters';
import { Tooltip } from '../tooltip/tooltip';
import { useMatchMedia } from '../../utils/match-media';
import { CopyHash } from '../copy-hash/copy-hash';
import { Cspr } from '../cspr/cspr';

import { PrecisionCase } from '../../utils/currency';
import { HashLength } from '../../utils/formatters';

export const ValuesRow = styled(FlexRow)(({ theme }) => ({
  height: 36,
  borderRadius: theme.borderRadius.base,
  padding: '8px 16px',
  backgroundColor: theme.styleguideColors.backgroundPrimary,
  border: theme.border.base,
}));

const StyledFlexColumn = styled(FlexColumn)<{ disabled?: boolean }>(
  ({ disabled }) => ({
    ...(disabled && {
      opacity: 0.5,
    }),
  })
);

const BalanceText = styled(BodyText)(({}) => ({
  textAlign: 'right',
}));

export interface AccountInfoRowProps {
  publicKey: string;
  label: string;
  accountBalance: string | null;
  loading: boolean;
  error: string | null;
  accountEmpty: boolean;
  disabled?: boolean;
}

const StyledIconContainer = styled.span`
  margin-left: 10px;
`;

export function AccountInfoRow(props: AccountInfoRowProps) {
  const { publicKey, accountEmpty, accountBalance, loading, error } = props;

  const responsiveHashSize = useMatchMedia(
    [HashLength.TINY, HashLength.SMALL, HashLength.SMALL, HashLength.SMALL],
    []
  );

  const emptyBalance =
    accountEmpty ||
    (!loading && accountBalance != null && Big(accountBalance).lte('0'));

  return (
    <StyledFlexColumn disabled={props.disabled} gap={4}>
      <ValuesRow justify="space-between" align="center">
        {publicKey && (
          <>
            <FlexRow align="center">
              <Tooltip title={publicKey}>
                <BodyText size={3} monotype>
                  {formatHash(publicKey, responsiveHashSize)}
                </BodyText>
              </Tooltip>
              <StyledIconContainer>
                <CopyHash value={publicKey} minified variation="gray" />
              </StyledIconContainer>
            </FlexRow>
            <BalanceText size={3} monotype>
              {emptyBalance ? (
                <Cspr motes={'0'} precisionCase={PrecisionCase.deployCost} />
              ) : loading ? (
                'Loading...'
              ) : error != null ? (
                error
              ) : (
                <Cspr
                  motes={accountBalance}
                  precisionCase={PrecisionCase.deployCost}
                />
              )}
            </BalanceText>
          </>
        )}
      </ValuesRow>
    </StyledFlexColumn>
  );
}

export default AccountInfoRow;
