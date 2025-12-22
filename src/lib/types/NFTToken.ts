import {
  AccountCentralizedInfo,
  AccountInfoResult,
  DeployContractPackageResult,
  DeployResult,
  PaginatedResponse,
  TransactorHashType,
} from './types';

export enum TokenStandardEnum {
  'CEP47' = 1,
  'CEP78' = 2,
}

export const NFTTokenStandard = {
  [TokenStandardEnum.CEP47]: 'CEP47',
  [TokenStandardEnum.CEP78]: 'CEP78',
};

export enum NftActivityTypeEnum {
  'Mint' = 1,
  'Burn' = 2,
  'Approve' = 3,
  'Transfer' = 4,
  'Metadata' = 5,
  'Revoke' = 6,
}

export const NFTActivityType = {
  [NftActivityTypeEnum.Mint]: 'Mint',
  [NftActivityTypeEnum.Burn]: 'Burn',
  [NftActivityTypeEnum.Approve]: 'Approve',
  [NftActivityTypeEnum.Transfer]: 'Transfer',
  [NftActivityTypeEnum.Metadata]: 'Metadata update',
  [NftActivityTypeEnum.Revoke]: 'Revoke',
};

export const NftTypeToEntryPointMap  = {
  [NftActivityTypeEnum.Mint]: NftTokenEntryPoint.mint,
  [NftActivityTypeEnum.Burn]: NftTokenEntryPoint.burn,
  [NftActivityTypeEnum.Approve]: NftTokenEntryPoint.approve,
  [NftActivityTypeEnum.Transfer]: NftTokenEntryPoint.transfer,
  [NftActivityTypeEnum.Metadata]: NftTokenEntryPoint.update_token_meta,
};

export enum CsprMarketEntryPoint {
  delist_token = 'delist_token',
  list_token = 'list_token',
  accept_offer = 'accept_offer',
  cancel_offer = 'cancel_offer',
  make_offer = 'make_offer',
}

export enum NftTokenEntryPoint {
  approve = 'approve',
  burn = 'burn',
  mint = 'mint',
  transfer = 'transfer',
  transfer_from = 'transfer_from',
  update_token_meta = 'update_token_meta',
  set_approval_for_all = 'set_approval_for_all',
}

export interface NFTTokenMetadata {
  name?: string;
  description?: string;
  nftPreview?: string;
  contentIpfs?: string;
  pictureIpfs?: string;
}

export interface NFTTokenMetadataEntry {
  key: string;
  value: string;
}

export interface NFTTokenAttribute {
  trait_type: string;
  value: string;
}

export interface NFTTokenAttributesEntry {
  key: string;
  value: NFTTokenAttribute[];
}

export interface NFTTokenMetadataWithLinks {
  itemsWithLinks: NFTTokenMetadataEntry[];
  attributes: NFTTokenAttributesEntry | null;
}

export interface NFTTokenResult {
  block_height: number;
  tracking_id: string;
  token_standard_id: number;
  is_burned: boolean;
  contract_package_hash: string;
  contract_package?: DeployContractPackageResult;
  token_id: string;
  owner_hash: string;
  owner_public_key: string;
  owner_type: number;
  offchain_metadata: Record<string, any>;
  onchain_metadata: NFTTokenMetadataEntry[];
  timestamp: string;
  offchain_metadata_status: number;
  owner_cspr_name: string;

  //remove after migration of all the apis which involve NFTTokenResult entity
  metadata: NFTTokenMetadataEntry[];
  owner_account_hash: string;
}

export function NFTToken(obj: any): NFTTokenResult {
  return obj;
}

export interface NFTTokenActivityResult {
  block_height: number;
  token_tracking_id: string;
  timestamp: string;
  caller_account_info?: AccountInfoResult | null;
  caller_centralized_account_info?: AccountCentralizedInfo | null;
  deploy_hash: string;
  from_hash: string | null;
  from_public_key: string | null;
  from_account_info?: AccountInfoResult | null;
  from_centralized_account_info?: AccountCentralizedInfo | null;
  from_type: number;
  to_hash: string | null;
  to_public_key: string | null;
  to_type: number;
  to_account_info?: AccountInfoResult | null;
  to_centralized_account_info?: AccountCentralizedInfo | null;
  to_cspr_name?: string | null;
  from_cspr_name?: string | null;
  caller_cspr_name?: string | null;
  nft_action_id: string;
  token_id: string;
  rate: number;
  deploy?: DeployResult;
}

const dictionaryToList = (data): NFTTokenMetadataEntry[] => {
  return data
    ? Object.entries(data).map((item) => {
        return { key: item[0], value: item[1] as string };
      })
    : [];
};

export const MapTokenMetadataAsList = (token): NFTTokenResult => {
  const metadata = Array.isArray(token?.metadata)
    ? token?.metadata
    : dictionaryToList(token?.metadata);

  return {
    ...token,
    metadata: metadata,
  };
};

export const MapTokensMetadataAsList = (
  tokens,
): PaginatedResponse<NFTTokenResult> => {
  const mappedTokenMetadataAsList = tokens.data.map(MapTokenMetadataAsList);

  return {
    ...tokens,
    data: mappedTokenMetadataAsList,
  };
};

export interface NFTTokenOwnerResult {
  owner_type: TransactorHashType;
  owner_hash: string;
  contract_package_hash: string;
  tokens_number: number;
  account_info?: AccountInfoResult;
  centralized_account_info?: AccountInfoResult;
  cspr_name?: string;
  owner_public_key?: string;
}
