import {
  Args,
  CLValueParser,
  Conversions,
  ExecutionResult,
  Transform,
  InfoGetDeployResultV1Compatible,
  InfoGetTransactionResultV1Compatible,
} from 'casper-js-sdk';
import {
  Deploy,
  DeployResult,
  GetDeployResult,
  NetworkMajorVersion,
  PaginatedResponse
} from '../types/types';
import {convertTransactionArgsToObj} from "./cltype";
import {deriveSplitDataFromNamedKeyValue} from "./named-key";
import {isNonNullable, isObject, uniq} from "./guards";

export const getExecutionResultsFromDeployRawData = (
    deployRawData?: GetDeployResult & {api_version: string}  | undefined | null,
): ExecutionResult | null => {
  if (!deployRawData) return null;
  const networkVersionFromRawData =
      (deployRawData.api_version && deployRawData.api_version.startsWith('1')
          ? NetworkMajorVersion.V1
          : NetworkMajorVersion.V2) || NetworkMajorVersion.V2;

  if (networkVersionFromRawData === '1') {
    const transactionData =
        InfoGetDeployResultV1Compatible.fromJSON(deployRawData);

    return transactionData?.executionResults &&
    transactionData?.executionResults[0]
        ? ExecutionResult.fromV1(transactionData.executionResults?.[0].result)
        : null;
  }

  const transactionData =
      InfoGetTransactionResultV1Compatible.fromJSON(deployRawData);

  return transactionData?.executionInfo
      ? transactionData.executionInfo.executionResult
      : null;
};


export const deriveUpdatedAssociatedKey = (
    deployRawData: GetDeployResult & {api_version: string} | undefined | null): string | undefined => {
  const executionResult: ExecutionResult | null =
    getExecutionResultsFromDeployRawData(deployRawData);

  const transforms = executionResult?.effects ?? [];

  const writeAccountDeployInfo = transforms.filter((obj: Transform) =>
    obj.kind.isWriteAccount(),
  );

  const writeAccountTransform =
    writeAccountDeployInfo?.length > 0 ? writeAccountDeployInfo[0] : null;

  return writeAccountTransform?.kind?.parseAsWriteAccount().toPrefixedString();
};

export function getWasmProxyArguments(args) {
  const clValue = CLValueParser.toJSON(args);

  return convertTransactionArgsToObj(
    Args.fromBytes(Conversions.decodeBase16(clValue.bytes.substring(8))),
  );
}

export function getWasmProxyArgumentsFromRawData(argumentsFromRawData) {
  const wasmArgs = argumentsFromRawData.args.args.get('args');

  if (!wasmArgs) return null;

  try {
    return getWasmProxyArguments(wasmArgs);
  } catch (e) {
    console.error('getWasmProxyArgumentsFromRawData', e);
    return null;
  }
};

export const deriveHashListByKeysFromObject = (data: any, keys: string[]) => {
  const result: string[] = [];
  if (!data) {
    return null;
  }

  data.forEach((obj: any) => {
    keys.forEach(key => {
      if (key in obj && obj[key] !== null && obj[key] !== undefined) {
        const hash = obj[key] as string;

        if (hash) {
          const { hash: hashWithoutPrefix } =
              deriveSplitDataFromNamedKeyValue(hash);
          result.push(hashWithoutPrefix);
        }
      }
    });
  });

  return result.length > 0 ? result.filter(isNonNullable) : null;
};

/**
 * Considers only `parsed` field of the object `args`
 * @param data
 * @param keys
 */
export const deriveHashListByKeysFromDeployArgsObject = (
    data: any,
    keys: string[]
) => {
  const result: string[] = [];

  if (!data) {
    return null;
  }

  const uniqKeys = uniq(keys);

  data.forEach((obj: any) => {
    uniqKeys.forEach(key => {
      if (
          key in obj.args &&
          obj.args[key] !== null &&
          obj.args[key] !== undefined
      ) {
        if (Array.isArray(obj.args[key].parsed)) {
          return;
        }

        const hash = isObject(obj.args[key].parsed)
            ? (Object.values(obj.args[key].parsed)[0] as string)
            : (obj.args[key].parsed as string);

        if (hash) {
          const { hash: hashWithoutPrefix } =
              deriveSplitDataFromNamedKeyValue(hash);
          result.push(hashWithoutPrefix);
        }
      }
    });
  });

  return result.length > 0 ? result.filter(isNonNullable) : null;
};

export const MapDeploy = ({
  deploy_hash,
  block_hash,
  caller_public_key,
  contract_hash,
  contract_package_hash,
  error_message,
  payment_amount,
  contract_entrypoint,
  contract_package,
  execution_type_id,
  nft_token_actions,
  ft_token_actions,
  account_info,
  centralized_account_info,
  rate,
  caller_cspr_name,
  caller_hash,
  consumed_gas,
  refund_amount,
  block_height,
  ...rest
}: DeployResult): Deploy => {
  return {
    ...rest,
    accountInfo: account_info,
    blockHash: block_hash,
    blockHeight: block_height,
    callerCsprName: caller_cspr_name,
    callerHash: caller_hash,
    callerPublicKey: caller_public_key,
    centralizedAccountInfo: centralized_account_info,
    consumedGas: consumed_gas,
    contractHash: contract_hash,
    contractPackage: contract_package,
    contractPackageHash: contract_package_hash,
    deployHash: deploy_hash,
    entryPoint: contract_entrypoint,
    errorMessage: error_message,
    executionTypeId: execution_type_id,
    ftActions: ft_token_actions,
    nftActions: nft_token_actions,
    paymentAmount: payment_amount,
    refundAmount: refund_amount,
    timeTransactionCurrencyRate: rate,
  };
};

export const MapPaginatedDeploys = ({
                                      data,
                                      ...rest
                                    }: PaginatedResponse<DeployResult>): PaginatedResponse<Deploy> => {
  return {
    ...rest,
    data: data ? data.map(MapDeploy) : [],
  };
};