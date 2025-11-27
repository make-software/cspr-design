import React from 'react';
import { deriveAccountInfo } from '../../utils/account';
import { AvatarProps } from '../avatar/avatar';
import { ContractIdentifier } from '../contract-identifier/contract-identifier';
import {
  AccountCentralizedInfo,
  AccountInfoResult,
  DeployContractPackageResult,
  TransactorHashType,
} from '../../types/types';
import { Size } from '../../types.ts';
import { HashLength } from '../../utils/formatters';
import Address from '../address/address';
import { BodyTextProps } from '@make-software/cspr.design';

interface TransactorInfoProps {
  type?: TransactorHashType | undefined;
  accountInfo: AccountInfoResult | AccountCentralizedInfo | undefined;
  contractPackage?: DeployContractPackageResult;
  hash: string | null;
  publicKey: string | null;
  csprName?: string | null;
  loading: boolean;
  getContractPackagePath: (hash: string) => string;
  getAccountPath: (hash: string) => string;
  hashLength?: HashLength;
  hashFontSize?: BodyTextProps['scale'];
  minifiedCopyNotification?: boolean;
  avatarSize?: AvatarProps['size'];
  nameSize?: Size;
  withName?: boolean;
}

export const TransactorInfo = ({
  type,
  accountInfo,
  contractPackage,
  publicKey,
  hash,
  csprName,
  loading,
  hashLength,
  hashFontSize = 'xs',
  minifiedCopyNotification = true,
  avatarSize = 'default',
  withName = false,
  getAccountPath,
  getContractPackagePath,
}: TransactorInfoProps) => {
  const accountInfoResult = deriveAccountInfo(accountInfo);

  return type && type === TransactorHashType.hash ? (
    <ContractIdentifier
      hash={hash}
      hashLength={hashLength}
      hashFontSize={hashFontSize}
      avatarSize={avatarSize}
      loading={loading}
      hideContractType
      withName={withName}
      getContractPackagePath={getContractPackagePath}
      contractPackage={contractPackage}
    />
  ) : (
    <Address
      logo={accountInfoResult && accountInfoResult?.logo}
      name={accountInfoResult?.name}
      hash={publicKey || hash}
      csprName={csprName || undefined}
      loading={loading}
      hashLength={hashLength}
      navigateToPath={getAccountPath(publicKey || hash)}
      avatarSize={avatarSize}
      hashFontSize={hashFontSize}
      minifiedCopyNotification={minifiedCopyNotification}
    />
  );
};

export default TransactorInfo;
