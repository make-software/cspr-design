import {
  AccountCentralizedInfo,
  AccountInfoResult,
  DeployContractPackageResult,
  DeployResult,
  TransactorHashType
} from "./types";

export type Decimals = string | number | undefined | null
/**
 * FungibleTokenResult
 */
export type FTResult = {
  contract_hash: string;
  decimals: number;
  name: string;
  symbol: string;
};

/**
 * FungibleTokenAmountDataType
 */
export interface FTAmountDataType {
  symbol: string | undefined| null;
  decimals: number | null;
  totalSupply: string | null;
  totalSupplyMotes: string|null;
};

export interface FtTokenMarketData {
  price: number | null;
  volume_24h: number | null;
  iconPath: string | null;
  website: string | null;
  change_24h?: number | null;
};


export type Cep18AmountData = FTAmountDataType & FtTokenMarketData

/**
 * FungibleTokenBalanceTokenResult
 */
export type FTBalanceTokenResult = {
  account_hash: string;
  balance: string;
  contract_package_hash: string;
  contract_package?: DeployContractPackageResult | null;
};

/**
 * FungibleTokenTransactionResult
 */

export type FTTransactionResult = {
  amount: string;
  block_height: number;
  contract_package_hash: string;
  deploy_hash: string;
  ft_action_type_id: number;
  from_hash: string | null;
  from_public_key: string | null;
  from_type: string;
  from_account_info?: AccountInfoResult | null;
  from_centralized_account_info?: AccountCentralizedInfo | null;
  caller_account_info?: AccountInfoResult | null;
  caller_centralized_account_info?: AccountCentralizedInfo | null;
  timestamp: string;
  to_hash: string | null;
  to_public_key: string | null;
  to_type: string;
  to_account_info?: AccountInfoResult | null;
  to_centralized_account_info?: AccountCentralizedInfo | null;
  from_cspr_name?: string;
  to_cspr_name?: string;
  transform_idx?: number;
  rate?: number;
  deploy?: DeployResult;
  contract_package?: DeployContractPackageResult;
};

/**
 * FungibleTokenActionTypeEnum
 */
export enum FTActionTypeEnum {
  'Mint' = 1,
  'Transfer' = 2,
  'Approve' = 3,
  'Burn' = 4,
}

/**
 * FungibleTokenActionType
 */
export const FTActionType = {
  [FTActionTypeEnum.Mint]: 'Mint',
  [FTActionTypeEnum.Transfer]: 'Transfer',
  [FTActionTypeEnum.Approve]: 'Approve',
  [FTActionTypeEnum.Burn]: 'Burn',
};

export enum FTEntryPointType {
  approve = 'approve',
  mint = 'mint',
  burn = 'burn',
  transfer = 'transfer',
}

export interface FTTokenOwnerResult {
  owner_type?: TransactorHashType;
  owner_hash: string;
  contract_package: DeployContractPackageResult | null;
  contract_package_hash: string;
  tokens_number: number;
  account_info?: AccountInfoResult;
  centralized_account_info?: AccountInfoResult;
  owner_cspr_name?: string;
  owner_public_key?: string;
  balance?: string;
}

export function FTToken(obj: any): FTResult {
  return obj;
}
