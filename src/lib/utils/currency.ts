import Big from 'big.js';
import { DEFAULT_PRECISION, FULL_PRECISION } from './formatters';

export enum PrecisionCase {
  'deployCost' = 'deployCost',
  'full' = 'full',
}

export const MOTES_PER_CSPR_RATE = '1000000000'; // 1 000 000 000 MOTES === 1 CSPR

export const currencyPrecisionByCase = (precisionCase?: PrecisionCase) => {
  switch (precisionCase) {
    case PrecisionCase.deployCost:
      return DEFAULT_PRECISION;

    case PrecisionCase.full:
      return FULL_PRECISION;

    default:
      return 0;
  }
};

export const motesToCSPR = (motes: string): string => {
  return Big(motes).div(MOTES_PER_CSPR_RATE).toString();
};

export const motesToCEP18Token = (motes: string, decimals: number): string => {
  return Big(motes).div(Big(10).pow(decimals)).toString();
};
