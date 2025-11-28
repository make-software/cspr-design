import React from 'react';
import Big from 'big.js';
import BodyText from '../../body-text/body-text';
import { motesToCSPR, PrecisionCase } from '../../../utils/currency';
import {formatCurrency, SMALL_PRECISION} from '../../../utils/formatters';
import CsprAmount from '../../cspr-amount/cspr-amount';

interface DeployFiatAmountProps {
  amount: string | null;
  rate: number;
}

const DeployFiatAmount = ({
  amount,
  rate,
}: DeployFiatAmountProps) => {
  const csprAmount = amount ? motesToCSPR(amount) : 0;
  const currencyAmount =
    rate && csprAmount ? Big(csprAmount).mul(rate).toString() : null;

  return (
    <>
      <BodyText size={3} monotype variation={'black'}>
        <CsprAmount motes={amount} precisionCase={PrecisionCase.small} />
      </BodyText>
      <BodyText size={3} monotype variation="darkGray">
        ({formatCurrency(currencyAmount, 'USD', SMALL_PRECISION)})
      </BodyText>
    </>
  );
};

export default DeployFiatAmount;
