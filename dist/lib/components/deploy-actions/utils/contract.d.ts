export declare const WASM_DEPLOY = 1;
export declare const WASM_PROXY_DEPLOY = 7;
export declare const ExecutionTypesMap: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
};
export declare enum DeployEntryPointName {
    TRANSFER = "transfer"
}
/**
 * Check if the Deploy is a transfer deploy by comparing native trasfer contract hash and entrypoint name, return TRUE
 * @param contractHash
 * @param entryPointName
 */
export declare const isTransferDeploy: (contractHash: string | null, entryPointName: string | null | undefined, native_transfer_contract_hash: string) => boolean;
/**
 * Check if the Deploy is a WASM deploy, return TRUE
 * @param executionTypeId
 */
export declare const isWASMTransaction: (executionTypeId: number) => executionTypeId is 1;
/**
 * Check if the Deploy is a WASM deploy, return TRUE
 * @param executionTypeId
 */
export declare const isWASMProxyTransaction: (executionTypeId: number) => executionTypeId is 7;
/**
 * Check if the Transaction is an ODRA WASM Proxy, return TRUE
 * @param transaction
 */
export declare const isODRAWasmProxyTransaction: (transaction: any) => boolean;
//# sourceMappingURL=contract.d.ts.map