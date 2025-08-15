import React from 'react';
import { formatNumber } from '../../utils/formatters';
import {
  motesToCSPR,
  currencyPrecisionByCase,
  PrecisionCase,
} from '../../utils/currency';

export interface CsprProps {
  motes?: string | null;
  precisionCase?: PrecisionCase;
  hideCsprCurrency?: boolean;
}

export function CSPR({ motes, precisionCase, hideCsprCurrency }: CsprProps) {
  const precision = currencyPrecisionByCase(precisionCase);

  if (motes == null) {
    return <>{'N/A'}</>;
  }

  const csprAmount = motesToCSPR(motes);
  const formattedCsprAmount = formatNumber(csprAmount, { precision });
  const formattedText = formattedCsprAmount + ' CSPR';

  return <>{hideCsprCurrency ? formattedCsprAmount : formattedText}</>;
}

export default CSPR;
