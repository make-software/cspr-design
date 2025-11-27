import deriveFtTokenMarketDataService from './derive-ft-token-market-data-service';
import { FTAmountDataType, FtTokenMarketData } from '../types/FTToken';
import { DeployContractPackageResult } from '../types/types';

type Cep18DataTypeNew = Omit<
  FTAmountDataType,
  'totalSupply' | 'totalSupplyMotes'
> &
  FtTokenMarketData;

type GetFtTokenDataProps = {
  contractPackageInfo: DeployContractPackageResult | undefined | null;
  isShiboo?: boolean;
};

export const deriveFtTokenData = (
  props: GetFtTokenDataProps | null,
): Cep18DataTypeNew => {
  const ftTokenMarketData: FtTokenMarketData = deriveFtTokenMarketDataService(
    props?.contractPackageInfo,
  );

  if (props?.isShiboo) {
    return {
      symbol: 'SHIBOO',
      decimals: 18,
      ...ftTokenMarketData,
    };
  }

  if (!props?.contractPackageInfo) {
    return {
      symbol: null,
      decimals: null,
      ...ftTokenMarketData,
    };
  }

  const { metadata } = props.contractPackageInfo;

  return {
    symbol: metadata?.symbol ?? null,
    decimals: metadata?.decimals != null ? metadata?.decimals : null,
    ...ftTokenMarketData,
  };
};
