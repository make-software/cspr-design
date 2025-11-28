import React from 'react';
import { formatNumber } from '../../utils/formatters';
import {
  currencyPrecisionByCase,
  motesToCEP18Token,
} from '../../utils/currency';

export interface CEP18TokenProps {
  motes?: string | null;
  precision: number;
  decimals: number;
  ticker: string;
  hideCurrency?: boolean;
}

/** @deprecated */
export function CEP18Token({
  motes,
  precision,
  decimals,
  ticker,
  hideCurrency,
}: CEP18TokenProps) {
  if (motes == null) {
    return <>{'N/A'}</>;
  }

  const tokenAmount = motesToCEP18Token(motes, decimals);
  const formattedTokenAmount = formatNumber(tokenAmount, { precision });
  const formattedText = formattedTokenAmount + ' ' + ticker;

  return <>{hideCurrency ? formattedTokenAmount : formattedText}</>;
}

export default CEP18Token;
