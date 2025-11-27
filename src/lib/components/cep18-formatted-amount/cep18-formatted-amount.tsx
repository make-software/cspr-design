import React from 'react';

import { currencyPrecisionByCase, PrecisionCase } from '../../utils/currency';
import TokenAmount from '../token-amount/token-amount';
import { DeployContractPackageResult } from '../../types/types';
import { deriveFtTokenData } from '../../utils/derive-ft-token-data-service';
import FlexRow from '../flex-row/flex-row';
import { DEFAULT_AMOUNT_PRECISION } from '../../utils/formatters';

export interface Cep18Props {
  symbol?: string;
  amount?: string | null;
  precisionCase?: PrecisionCase;
  contractPackage: DeployContractPackageResult;
}

export function Cep18FormattedAmount({
  amount,
  symbol,
  contractPackage,
  precisionCase,
}: Cep18Props) {
  if (!amount) {
    return <>{'-'}</>;
  }

  const ftTokenData = deriveFtTokenData(
    contractPackage
      ? {
          contractPackageInfo: contractPackage,
        }
      : null,
  );

  return (
    <FlexRow itemsSpacing={4}>
      <FlexRow>
        <TokenAmount
          amount={amount}
          symbol={ftTokenData.symbol || symbol}
          decimals={ftTokenData.decimals}
          precision={
            precisionCase
              ? currencyPrecisionByCase(precisionCase)
              : DEFAULT_AMOUNT_PRECISION
          }
          shouldShortenAmount
        />
      </FlexRow>
    </FlexRow>
  );
}

export default Cep18FormattedAmount;
