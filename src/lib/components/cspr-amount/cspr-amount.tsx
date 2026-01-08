import React from 'react';
import {
  CSPR_DECIMALS,
  currencyPrecisionByCase,
  PrecisionCase,
} from '../../utils/currency';
import TokenAmount from '../token-amount/token-amount';

export interface CsprAmountProps {
  motes?: string | number | null;
  precisionCase?: PrecisionCase;
  hideCsprCurrency?: boolean;
}

export function CsprAmount({
  motes,
  precisionCase,
  hideCsprCurrency,
}: CsprAmountProps) {
  const precision = currencyPrecisionByCase(precisionCase);

  return (
    <TokenAmount
      decimals={CSPR_DECIMALS}
      amount={motes}
      symbol={hideCsprCurrency ? '' : 'CSPR'}
      precision={precision}
    />
  );
}

export default CsprAmount;
