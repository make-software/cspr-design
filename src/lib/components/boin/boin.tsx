import React from 'react';
import { formatNumber } from '../../utils/formatters';
import {
  currencyPrecisionByCase,
  motesToBOIN,
  PrecisionCase,
} from '../../utils/currency';

export interface BoinProps {
  motes?: string | null;
  precisionCase?: PrecisionCase;
  hideCurrency?: boolean;
}

export function Boin({ motes, precisionCase, hideCurrency }: BoinProps) {
  const precision = currencyPrecisionByCase(precisionCase);

  if (motes == null) {
    return <>{'N/A'}</>;
  }

  const boinAmount = motesToBOIN(motes);
  const formattedBoinAmount = formatNumber(boinAmount, { precision });
  const formattedText = formattedBoinAmount + ' BOIN';

  return <>{hideCurrency ? formattedBoinAmount : formattedText}</>;
}

export default Boin;
