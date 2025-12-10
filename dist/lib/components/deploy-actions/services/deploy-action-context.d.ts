import { default as React, PropsWithChildren } from 'react';
type DeployActionDataContextType = {
    getAccountInfo: <T>(publicKey: string) => T | null | undefined;
    getContractPackageInfoByHash: <T>(contractPackageHash: string) => T | null | undefined;
    getContractInfoByHash?: <T>(contractHash: string) => T | null | undefined;
    getPublicKeyAccountHash: (accountHash: string) => string | null | undefined;
    csprLiveDomainPath: string;
};
export declare const deployActionDataContext: React.Context<DeployActionDataContextType>;
export declare const useDeployActionDataContext: () => DeployActionDataContextType;
type DeployActionDataProviderProps = {
    getAccountInfo: <T>(publicKey: string) => T | null | undefined;
    getContractPackageInfoByHash?: <T>(contractPackageHash: string) => T | null | undefined;
    getContractInfoByHash?: <T>(contractHash: string) => T | null | undefined;
    csprLiveDomainPath: string;
};
export declare const DeployActionDataProvider: (props: PropsWithChildren<DeployActionDataProviderProps>) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=deploy-action-context.d.ts.map