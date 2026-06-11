import React from 'react';

import Big from 'big.js';
import {
  formatTokenAmount,
  getAmountFromMotes,
} from '../../utils/ft-token-amount';
import { DEFAULT_PRECISION } from '../../utils/formatters';

export interface TokenAmountProps {
  amount: string | null;
  decimals?: number;
  symbol?: string;
  precision?: number;
  shouldShortenAmount?: boolean;
}

export function TokenAmount({
  amount,
  decimals,
  symbol = '',
  precision = DEFAULT_PRECISION,
  shouldShortenAmount = false,
}: TokenAmountProps) {
  if (amount == null) {
    return <>{'N/A'}</>;
  }

  const calculatedAmount: string = decimals
    ? getAmountFromMotes(amount, decimals)
    : Big(amount.toString() || '0').toString();

  const formattedAmount = formatTokenAmount(
    calculatedAmount,
    precision,
    shouldShortenAmount,
  );
  const formattedText = formattedAmount + ` ${symbol}`;

  return <>{formattedText}</>;
}

export default TokenAmount;
