import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react';
import {
  AccountInfoResult,
  ContractResult,
  DeployContractPackageResult,
} from '@make-software/cspr.design';

type DeployActionDataContextType = {
  getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
  getContractPackageInfoByHash: (
    contractPackageHash: string,
  ) => DeployContractPackageResult | null | undefined;
  getContractInfoByHash: (
    contractHash: string,
  ) => ContractResult | null | undefined;
  getPublicKeyAccountHash: (accountHash: string) => string | null | undefined;
  csprLiveDomainPath: string;
};

export const deployActionDataContext =
  createContext<DeployActionDataContextType>({
    getAccountInfo: () => null,
    getPublicKeyAccountHash: () => null,
    getContractInfoByHash: () => null,
    getContractPackageInfoByHash: () => null,
    csprLiveDomainPath: '',
  });

const { Provider: DeployActionDataContextProvider } = deployActionDataContext;

export const useDeployActionDataContext = () => {
  return useContext(deployActionDataContext);
};

type DeployActionDataProviderProps = {
  getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
  getContractPackageInfoByHash?: (
    contractPackageHash: string,
  ) => DeployContractPackageResult | null | undefined;
  getContractInfoByHash?: (
    contractHash: string,
  ) => ContractResult | null | undefined;
  csprLiveDomainPath: string;
};

export const DeployActionDataProvider = (
  props: PropsWithChildren<DeployActionDataProviderProps>,
) => {
  const { getAccountInfo, csprLiveDomainPath, children } = props;

  const getPublicKeyAccountHash = useCallback(
    (accountHash: string): string | null | undefined => {
      const publicKeyByHash = getAccountInfo(accountHash)?.public_key;

      return publicKeyByHash ? publicKeyByHash : null;
    },
    [getAccountInfo],
  );
  const getContractInfoByHash = (contractHash) =>
    props.getContractInfoByHash
      ? props.getContractInfoByHash(contractHash)
      : null;

  const getContractPackageInfoByHash = (contractPackageHash) =>
    props.getContractPackageInfoByHash
      ? props.getContractPackageInfoByHash(contractPackageHash)
      : null;

  return (
    <DeployActionDataContextProvider
      value={{
        getAccountInfo,
        getPublicKeyAccountHash,
        getContractInfoByHash,
        getContractPackageInfoByHash,
        csprLiveDomainPath,
      }}
    >
      {children}
    </DeployActionDataContextProvider>
  );
};
