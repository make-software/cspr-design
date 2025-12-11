import { default as React, PropsWithChildren } from 'react';
import { AccountInfoResult, ContractResult, DeployContractPackageResult } from '../../../index.ts';
type DeployActionDataContextType = {
    getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
    getContractPackageInfoByHash: (contractPackageHash: string) => DeployContractPackageResult | null | undefined;
    getContractInfoByHash: (contractHash: string) => ContractResult | null | undefined;
    getPublicKeyAccountHash: (accountHash: string) => string | null | undefined;
    csprLiveDomainPath: string;
};
export declare const deployActionDataContext: React.Context<DeployActionDataContextType>;
export declare const useDeployActionDataContext: () => DeployActionDataContextType;
type DeployActionDataProviderProps = {
    getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
    getContractPackageInfoByHash?: (contractPackageHash: string) => DeployContractPackageResult | null | undefined;
    getContractInfoByHash?: (contractHash: string) => ContractResult | null | undefined;
    csprLiveDomainPath: string;
};
export declare const DeployActionDataProvider: (props: PropsWithChildren<DeployActionDataProviderProps>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=deploy-action-context.d.ts.map