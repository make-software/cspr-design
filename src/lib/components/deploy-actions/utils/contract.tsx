// import {
//   DeployEntryPointName,
//   DeployResultWithInfo,
// } from '@block-explorer/entities';
export const WASM_DEPLOY = 1;
export const WASM_PROXY_DEPLOY = 7;

export const ExecutionTypesMap = {
  1: 'WASM', //"ModuleBytes"
  2: 'Contract call', //"StoredContractByHash"
  3: 'Contract call', //"StoredContractByName",
  4: 'Contract call', //"StoredVersionedContractByHash",
  5: 'Contract call', //"StoredVersionedContractByName",
  6: 'Native',
  7: 'WASM',
};

export enum DeployEntryPointName {
  TRANSFER = 'transfer',
}

/**
 * Check if the Deploy is a transfer deploy by comparing native trasfer contract hash and entrypoint name, return TRUE
 * @param contractHash
 * @param entryPointName
 */
export const isTransferDeploy = (
  contractHash: string | null,
  entryPointName: string | null | undefined,
  native_transfer_contract_hash: string,
) => {
  return (
    contractHash === native_transfer_contract_hash &&
    entryPointName === DeployEntryPointName.TRANSFER
  );
};

/**
 * Check if the Deploy is a WASM deploy, return TRUE
 * @param executionTypeId
 */
export const isWASMTransaction = (executionTypeId: number) => {
  return executionTypeId === WASM_DEPLOY;
};

/**
 * Check if the Deploy is a WASM deploy, return TRUE
 * @param executionTypeId
 */
export const isWASMProxyTransaction = (executionTypeId: number) => {
  return executionTypeId === WASM_PROXY_DEPLOY;
};

/**
 * Check if the Transaction is an ODRA WASM Proxy, return TRUE
 * @param transaction
 */
export const isODRAWasmProxyTransaction = (
  transaction,
  // : DeployResultWithInfo
): boolean => {
  return Boolean(
    isWASMProxyTransaction(transaction.executionTypeId) &&
      transaction.args?.amount &&
      transaction.args?.attached_value,
  );
};
