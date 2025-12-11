import { ExecutionResult } from 'casper-js-sdk';
import { Deploy, DeployResult, GetDeployResult, PaginatedResponse } from '../types/types';
export declare const getExecutionResultsFromDeployRawData: (deployRawData?: (GetDeployResult & {
    api_version: string;
}) | undefined | null) => ExecutionResult | null;
export declare const deriveUpdatedAssociatedKey: (deployRawData: (GetDeployResult & {
    api_version: string;
}) | undefined | null) => string | undefined;
export declare function getWasmProxyArguments(args: any): Record<string, any>;
export declare function getWasmProxyArgumentsFromRawData(argumentsFromRawData: any): Record<string, any> | null;
export declare const deriveHashListByKeysFromObject: (data: any, keys: string[]) => string[] | null;
/**
 * Considers only `parsed` field of the object `args`
 * @param data
 * @param keys
 */
export declare const deriveHashListByKeysFromDeployArgsObject: (data: any, keys: string[]) => string[] | null;
export declare const MapDeploy: ({ deploy_hash, block_hash, caller_public_key, contract_hash, contract_package_hash, error_message, payment_amount, contract_entrypoint, contract_package, execution_type_id, nft_token_actions, ft_token_actions, account_info, centralized_account_info, rate, caller_cspr_name, caller_hash, consumed_gas, refund_amount, block_height, ...rest }: DeployResult) => Deploy;
export declare const MapPaginatedDeploys: ({ data, ...rest }: PaginatedResponse<DeployResult>) => PaginatedResponse<Deploy>;
//# sourceMappingURL=deploy-action-helpers.d.ts.map