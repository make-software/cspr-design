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
import Boin from "../boin/boin";

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

const StyledIconContainer = styled.span`
  margin-left: 10px;
`;

interface TickerProps {
  ticker: string;
  motes?: string | null;
  precisionCase?: PrecisionCase;
  hideCurrency?: boolean;
}

const Ticker = ({ticker, ...props}: TickerProps) => ticker === 'CSPR' ? (<Cspr {...props}/>) : (<Boin {...props}/>)


interface AccountInfoBalanceProps {
  accountBalance: string | null;
  loading: boolean;
  error: string | null;
  emptyBalance: boolean;
  ticker?: string;
}

const AccountInfoBalance = ({accountBalance, emptyBalance, loading, error, ticker = 'CSPR'}: AccountInfoBalanceProps) => {
  return (
      <BalanceText size={3} monotype>
        {emptyBalance ? (
            <Ticker ticker={ticker} motes={'0'} precisionCase={PrecisionCase.deployCost} />
        ) : loading ? (
            'Loading...'
        ) : error != null ? (
            error
        ) : (
            <Ticker
                ticker={ticker}
                motes={accountBalance}
                precisionCase={PrecisionCase.deployCost}
            />
        )}
      </BalanceText>
  )
}


export interface AccountInfoRowProps {
  publicKey: string;
  label?: string;
  rightLabel?: string;
  accountBalance: string | null;
  loading: boolean;
  error: string | null;
  accountEmpty: boolean;
  disabled?: boolean;
  ticker?:string;
}

export function AccountInfoRow(props: AccountInfoRowProps) {
  const {
    publicKey,
    label,
    rightLabel = 'Balance',
    accountEmpty,
    accountBalance,
    loading,
    error,
      ticker = 'CSPR'
  } = props;

  const responsiveHashSize = useMatchMedia(
    [HashLength.TINY, HashLength.SMALL, HashLength.SMALL, HashLength.SMALL],
    []
  );

  const emptyBalance =
    accountEmpty ||
    (!loading && accountBalance != null && Big(accountBalance).lte('0'));

  return (
    <StyledFlexColumn disabled={props.disabled} gap={4}>
      <FlexRow justify="space-between">
        <BodyText size={1}>{label}</BodyText>
        <BodyText size={1}>{rightLabel}</BodyText>
      </FlexRow>
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
            <AccountInfoBalance accountBalance={accountBalance} emptyBalance={emptyBalance} error={error} loading={loading} ticker={ticker}/>
          </>
        )}
      </ValuesRow>
    </StyledFlexColumn>
  );
}

export default AccountInfoRow;
