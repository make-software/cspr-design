import Big from 'big.js';
import {
  formatNumber,
  formatBigNumbers,
  DEFAULT_AMOUNT_PRECISION,
} from './formatters';
import { Decimals } from '../types/FTToken';

export const tokenDivider = (decimals: Decimals) =>
  Big(10).pow(Number(decimals || 0));

export const getAmountFromMotes = (
  amount: string | undefined | null,
  decimals: Decimals,
) =>
  Big(amount?.toString() || 0)
    .div(tokenDivider(Number(decimals || 0)))
    .toString();

export const formatTokenAmount = (
  amount: string | undefined | null,
  precision?: number,
  shouldShortenAmount?: boolean,
) => {
  const formattedCep18Amount = amount
    ? formatNumber(amount, {
        precision: precision != null ? precision : DEFAULT_AMOUNT_PRECISION,
      })
    : '-';

  return formattedCep18Amount.length > 7 && shouldShortenAmount
    ? formatBigNumbers(amount)
    : formattedCep18Amount;
};

export const ftTokenAmountToCurrency = (
  amount: string | number,
  currencyPerFtTokenRate: number,
): string => {
  if (currencyPerFtTokenRate === 0) {
    throw new Error('ftTokenAmountToCurrency: the price cannot be zero');
  }

  return Big(amount.toString())
    .mul(currencyPerFtTokenRate.toString())
    .toString();
};
