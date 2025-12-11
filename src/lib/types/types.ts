import { InfoGetDeployResult, DeployExecutionResult } from 'casper-js-sdk';
import { CLTypeParsedResult, CLTypeTypeResult } from './CLType';
export type ResponseError = { message?: string };

export type DataResponse<T = any> = {
  data: T | null;
  loading: boolean;
  error?: ResponseError | null;
};

export type PaginatedResponse<T = any> = {
  data: T[] | null;
  loading: boolean;
  error: ResponseError | null;
  item_count: number;
  page_count: number;
};

export interface GetDeployResult extends InfoGetDeployResult {
  execution_results: DeployExecutionResult;
}

export enum NetworkMajorVersion {
  'V1' = '1',
  'V2' = '2',
}

export enum ContractTypeId {
  System = 1,
  Cep18 = 2,
  CustomCep18 = 3,
  CEP47Nft = 4,
  CustomCEP47Nft = 5,
  DeFi = 6,
  CEP78Nft = 7,
  CustomCEP78Nft = 8,
  NFTMarketplace = 9,
  CEP95Nft = 10,
}

export type DeployContractPackageMetadata = {
  symbol: string;
  name: string;
  decimals: number;
  balances_uref: string;
  total_supply_uref: string;
  burn_mode?: string;
  holder_mode?: string;
  identifier_mode?: string;
  metadata_mutability?: string;
  minting_mode?: string;
  nft_kind?: string;
  nft_metadata_kind?: string;
  ownership_mode?: string;
  whitelist_mode?: string;
  owner_reverse_lookup_mode?: string;
};

export interface AccountCentralizedInfo {
  account_hash: string;
  url: string;
  name: string;
  avatar_url: string;
}

export interface GeneralizedAccountInfo {
  logo: string | null;
  name?: string;
}

export interface AccountInfoResult {
  account_hash: string;
  url: string;
  is_active: boolean;
  deploy_hash: string;
  verified_account_hashes: string[];
  balance?: number;
  genesis_balance?: string;
  delegated_balance?: string;
  staked_balance?: string;
  undelegating_balance?: string;
  auction_status?: string;
  deployment_threshold: number;
  key_management_threshold: number;
  account_info?: AccountInfoResult;
  centralized_account_info?: AccountCentralizedInfo;
  public_key?: string;
  cspr_name?: string;
}
export type FMPriceData = {
  price: number;
  volume_24h: number;
};

export type CoingeckoPriceData = FMPriceData & {
  change_24h: number;
};

export type DeployContractPackageResult = {
  description: string | null;
  icon_url: string | null;
  name: string | null;
  contract_package_hash: string;
  latest_version_contract_type_id: number | null;
  owner_public_key: string | null;
  owner_hash: string | null;
  timestamp: string;
  has_ces_events: boolean;
  deploys_number?: number;
  activity_number?: number;
  metadata?: DeployContractPackageMetadata;
  account_info?: AccountInfoResult | null;
  centralized_account_info?: AccountCentralizedInfo | null;
  contract_description?: string;
  cspr_name?: string | null;
  coingecko_id: string | null;
  latest_version_contract_hash: string | null;
  coingecko_data: CoingeckoPriceData;
  friendlymarket_data: FMPriceData;
  // TODO: remove these types
  contract_type_id?: number | null;
  contract_name: string | null;
  website_url?: string | null;
};

export type ContractResult = {
  block_height: number;
  contract_hash: string;
  contract_package_hash: string;
  contract_type_id: number;
  contract_version: number;
  deploy_hash: string;
  from_purse_public_key: string;
  is_disabled: boolean;
  timestamp: string;
  contract_package?: DeployContractPackageResult;
};

export type DeployClTypeResult = {
  cl_type: CLTypeTypeResult;
  parsed: CLTypeParsedResult | string | null;
};

export type DeployArgsResult = {
  amount?: DeployClTypeResult;
  spender?: DeployClTypeResult;
  bsc_recipient_address?: DeployClTypeResult;
  contract_hash_str?: DeployClTypeResult;
  recipient?: DeployClTypeResult;
  owner?: DeployClTypeResult;
  token_id?: DeployClTypeResult;
  token_meta?: DeployClTypeResult;
  token_metas?: DeployClTypeResult;
  token_meta_data?: DeployClTypeResult;
  id?: DeployClTypeResult;
  target?: DeployClTypeResult;
  contract_name?: DeployClTypeResult;
  decimals?: DeployClTypeResult;
  initial_supply?: DeployClTypeResult;
  name?: DeployClTypeResult;
  symbol?: DeployClTypeResult;
  amount_in?: DeployClTypeResult;
  amount_out_min?: DeployClTypeResult;
  deadline?: DeployClTypeResult;
  path?: DeployClTypeResult;
  to?: DeployClTypeResult;
  tokens?: DeployClTypeResult;
  delegator?: DeployClTypeResult;
  validator?: DeployClTypeResult;
  new_validator?: DeployClTypeResult;
  offerer?: DeployClTypeResult;
  collection?: DeployClTypeResult;
  token_owner?: DeployClTypeResult;
  operator?: DeployClTypeResult;
  token_ids?: DeployClTypeResult;
  target_key?: DeployClTypeResult;
  source_key?: DeployClTypeResult;
  csprfun_contract_hash_key?: DeployClTypeResult;
  token_to_trade_contract_hash_key?: DeployClTypeResult;
  attached_value?: DeployClTypeResult;
};
export type DeployEntryPointResult = {
  action_type_id: null;
  contract_hash: string | null;
  contract_package_hash: string | null;
  id: string | null;
  name: string | null;
};

export type NftActionsResult = {
  block_height: number;
  contract_package: DeployContractPackageResult;
  contract_package_hash: string;
  deploy_hash: string;
  from_hash: null;
  from_public_key: string | null;
  from_type: null;
  nft_action_id: number;
  timestamp: string;
  to_hash: string;
  to_public_key: string | null;
  to_type: number;
  token_id: string;
  token_tracking_id: number;
  transform_idx: number;
};

export enum HashType {
  accountHash = 'account-hash',
  hash = 'hash',
}

export enum TransactorHashType {
  'account' = 0,
  'hash' = 1,
}

export type FTActionsResult = {
  amount: string;
  contract_package: DeployContractPackageResult;
  contract_package_hash: string;
  deploy_hash: string;
  ft_action_type_id: number;
  from_hash: string;
  from_public_key: string | null;
  from_type: TransactorHashType;
  timestamp: string;
  to_hash: string;
  to_public_key: string | null;
  to_type: TransactorHashType;
  transform_idx: number;
};

export type DeployTransferResult = {
  amount: string;
  block_height: number;
  transfer_index: number;
  deploy_hash: string;
  from_purse_public_key: string | null;
  from_purse: string;
  id: string | null;
  initiator_account_hash: string;
  timestamp: string;
  to_account_hash: string;
  to_purse: string;
  transform_key: string;
  to_purse_public_key: string | null;
  to_purse_account_info: AccountInfoResult | null;
  from_purse_account_info: AccountInfoResult | null;
  to_purse_centralized_account_info: AccountCentralizedInfo | null;
  from_purse_centralized_account_info: AccountCentralizedInfo | null;
};

export interface DeployResult {
  // means it's a pending deploy
  args: DeployArgsResult;
  block_hash: string | null;
  caller_public_key: string;
  caller_hash: string;
  contract_entrypoint?: DeployEntryPointResult;
  contract_hash: string | null;
  contract_package: DeployContractPackageResult;
  contract_package_hash: string | null;
  cost: string;
  consumed_gas: string;
  deploy_hash: string;
  error_message: string | null;
  execution_type_id: number;
  nft_token_actions?: NftActionsResult[];
  ft_token_actions?: FTActionsResult[];
  payment_amount: string | null;
  refund_amount?: string | null;
  rate: number;
  status: string;
  timestamp: string;
  transfers?: DeployTransferResult[];
  pending?: boolean;
  account_info?: AccountInfoResult;
  centralized_account_info?: AccountCentralizedInfo;
  cspr_name?: string;
  amount: string | null;
  currency_cost: number;
  caller_cspr_name?: string | null;
  block_height: number;
}

export interface Deploy {
  // means it's a pending deploy
  accountInfo?: AccountInfoResult;
  amount: string | null;
  args: DeployArgsResult;
  blockHash: string | null;
  blockHeight: number | null;
  callerCsprName?: string | null;
  callerHash: string;
  callerPublicKey: string;
  centralizedAccountInfo?: AccountCentralizedInfo | null;
  consumedGas: string;
  contractHash: string | null;
  contractPackage: DeployContractPackageResult;
  contractPackageHash: string | null;
  cost: string;
  deployHash: string;
  entryPoint?: DeployEntryPointResult;
  errorMessage: string | null;
  executionTypeId: number;
  ftActions?: FTActionsResult[];
  nftActions?: NftActionsResult[];
  paymentAmount: string | null;
  pending?: boolean;
  refundAmount?: string | null;
  status: string;
  timeTransactionCurrencyRate: number;
  timestamp: string;
  transfers?: DeployTransferResult[];
}
