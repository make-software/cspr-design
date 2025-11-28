import { DeployContractPackageResult } from '../types/types';
import { FtTokenMarketData } from '../types/FTToken';

export const deriveFtTokenMarketDataService = (
  contractPackageInfo: DeployContractPackageResult | undefined | null,
): FtTokenMarketData => {
  if (!contractPackageInfo) {
    return {
      price: null,
      volume_24h: null,
      iconPath: null,
      website: null,
    };
  }

  const coinGeckoData = contractPackageInfo?.coingecko_data;
  const friendlyMarketData = contractPackageInfo?.friendlymarket_data;

  if (coinGeckoData) {
    return {
      ...coinGeckoData,
      iconPath: 'assets/icons/logos/coingecko_logo.png',
      website: contractPackageInfo?.coingecko_id
        ? `https://www.coingecko.com/en/coins/${contractPackageInfo.coingecko_id}`
        : null,
    };
  }

  if (friendlyMarketData) {
    return {
      ...friendlyMarketData,
      iconPath: 'assets/icons/logos/fm_logo.png',
      website: contractPackageInfo?.latest_version_contract_hash
        ? `https://www.friendly.market/swap/CSPR/${contractPackageInfo.latest_version_contract_hash}`
        : null,
    };
  }
};

export default deriveFtTokenMarketDataService;
