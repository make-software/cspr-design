import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react';
import { TFunction } from 'i18next';

type DeployActionDataContextType = {
  getAccountInfo: <T>(publicKey: string) => T | null | undefined;
  getContractPackageInfoByHash: <T>(
    contractPackageHash: string,
  ) => T | null | undefined;
  getContractInfoByHash?: <T>(contractHash: string) => T | null | undefined;
  getPublicKeyAccountHash: (accountHash: string) => string | null | undefined;
  getNftPath: (collectionHash: string, nftId: string) => string;
  getContractPackagePath: (hash: string) => string;
  getAccountPath: (hash: string) => string;
  getSearchPath: (hash: string) => string;
  i18n: (word: string) => string;
  formatCurrency: (
    value: number | string | null,
    precision?: number,
  ) => string | null;
};

export const deployActionDataContext =
  createContext<DeployActionDataContextType>({
    getAccountInfo: () => null,
    getPublicKeyAccountHash: () => null,
    getContractInfoByHash: () => null,
    getContractPackageInfoByHash: () => null,
    getNftPath: () => '',
    getContractPackagePath: () => '',
    getAccountPath: () => '',
    getSearchPath: () => '',
    i18n: () => '',
    formatCurrency: () => null,
  });

const { Provider: DeployActionDataContextProvider } = deployActionDataContext;

export const useDeployActionDataContext = () => {
  return useContext(deployActionDataContext);
};

type DeployActionDataProviderProps = {
  getAccountInfo: <T>(publicKey: string) => T | null | undefined;
  getContractPackageInfoByHash?: <T>(
    contractPackageHash: string,
  ) => T | null | undefined;
  getContractInfoByHash?: <T>(contractHash: string) => T | null | undefined;
  getNftPath: (collectionHash: string, nftId: string) => string;
  getContractPackagePath: (hash: string) => string;
  getAccountPath: (hash: string) => string;
  getSearchPath: (hash: string) => string;
  i18n?: TFunction;
  formatCurrency?: (
    value: number | string | null,
    precision?: number,
  ) => string;
};

export const DeployActionDataProvider = (
  props: PropsWithChildren<DeployActionDataProviderProps>,
) => {
  const {
    getAccountInfo,
    getNftPath,
    getContractPackagePath,
    getAccountPath,
    getSearchPath,
    children,
  } = props;

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

  const formatCurrency = (value, precision) =>
    props.formatCurrency ? props.formatCurrency(value, precision) : null;

  const i18n = (word) => (props.i18n ? props.i18n(word) : word);

  return (
    <DeployActionDataContextProvider
      value={{
        getAccountInfo,
        getPublicKeyAccountHash,
        getContractInfoByHash,
        getContractPackageInfoByHash,
        getNftPath,
        getContractPackagePath,
        getAccountPath,
        getSearchPath,
        i18n,
        formatCurrency,
      }}
    >
      {children}
    </DeployActionDataContextProvider>
  );
};
