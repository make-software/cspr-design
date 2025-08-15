import React from 'react';
import { formatNumber } from '../../utils/formatters';
import {
  currencyPrecisionByCase,
  motesToCEP18Token,
} from '../../utils/currency';

export interface TokenProps {
  amount?: string | null;
  precision: number;
  decimals: number;
  ticker: string;
  hideCurrency?: boolean;
}

export function Token({
  amount,
  precision,
  decimals,
  ticker,
  hideCurrency,
}: TokenProps) {
  if (amount == null) {
    return <>{'N/A'}</>;
  }

  const tokenAmount = motesToCEP18Token(amount, decimals);
  const formattedTokenAmount = formatNumber(tokenAmount, { precision });
  const formattedText = formattedTokenAmount + ' ' + ticker;

  return <>{hideCurrency ? formattedTokenAmount : formattedText}</>;
}

export default Token;
