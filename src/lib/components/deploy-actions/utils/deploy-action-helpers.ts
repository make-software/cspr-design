import {Args, CLValueParser, Conversions, ExecutionResult, Transform} from 'casper-js-sdk';
import {getExecutionResultsFromDeployRawData} from "./use-get-execution-results";
import {Deploy, DeployResult, GetDeployResult} from "../../../types/types";
import {convertTransactionArgsToObj} from "../../../utils/cltype";

export const deriveUpdatedAssociatedKey = (
  deployRawData: GetDeployResult | undefined
): string | undefined => {
  const executionResult: ExecutionResult | null =
    getExecutionResultsFromDeployRawData(deployRawData);

  const transforms = executionResult?.effects ?? [];

  const writeAccountDeployInfo = transforms.filter((obj: Transform) =>
    obj.kind.isWriteAccount()
  );

  const writeAccountTransform =
    writeAccountDeployInfo?.length > 0 ? writeAccountDeployInfo[0] : null;

  return writeAccountTransform?.kind?.parseAsWriteAccount().toPrefixedString();
};
//
// export const hasDeployCustomAction = (deploy: Deploy): boolean => {
//   if (!deploy || !deploy.contractPackage) return false;
//
//   const { entryPoint, contractPackage, contractHash, contractPackageHash } =
//     deploy;
//
//   //addx hash
//   const isTransfer =
//     isTransferDeploy(contractHash, entryPoint?.name) &&
//     !!deploy.transfers?.length;
//
//   const isCustomContractAction =
//     contractHash === config.auction_manager_contract_hash ||
//     contractHash === config.associated_keys_contract_hash ||
//     contractPackageHash === config.cspr_market_contract_package_hash;
//
//   const contractTypeId =
//     contractPackage.latest_version_contract_type_id ||
//     contractPackage.contract_type_id;
//
//   const isCep18 =
//     contractTypeId === ContractTypeId.CustomCep18 ||
//     contractTypeId === ContractTypeId.Cep18;
//
//   const isNFT =
//     contractTypeId === ContractTypeId.CEP78Nft ||
//     contractTypeId === ContractTypeId.CEP47Nft ||
//     contractTypeId === ContractTypeId.CustomCEP78Nft ||
//     contractTypeId === ContractTypeId.CustomCEP47Nft;
//
//   return isTransfer || isCustomContractAction || isCep18 || isNFT;
// };

export function getWasmProxyArguments(args) {
    const clValue = CLValueParser.toJSON(args);

    return convertTransactionArgsToObj(
        Args.fromBytes(Conversions.decodeBase16(clValue.bytes.substring(8)))
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
}



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