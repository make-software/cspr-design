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
import { Size } from '../../base-types.ts';
import { HashLength } from '../../utils/formatters';
import Address from '../address/address';
import { BodyTextProps } from '../body-text/body-text';

interface TransactorInfoProps {
  type?: TransactorHashType | undefined | null;
  accountInfo: AccountInfoResult | AccountCentralizedInfo | undefined;
  contractPackage?: DeployContractPackageResult | undefined | null;
  hash: string | null;
  publicKey: string | undefined | null;
  csprName?: string | undefined | null;
  loading: boolean;
  hashLength?: HashLength;
  hashFontSize?: BodyTextProps['scale'];
  minifiedCopyNotification?: boolean;
  avatarSize?: AvatarProps['size'];
  nameSize?: Size;
  withName?: boolean;
  csprLiveDomainPath: string;
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
  csprLiveDomainPath,
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
      path={`${csprLiveDomainPath}/contract-package/${hash}`}
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
      navigateToPath={`${csprLiveDomainPath}/account/${publicKey || hash}`}
      avatarSize={avatarSize}
      hashFontSize={hashFontSize}
      minifiedCopyNotification={minifiedCopyNotification}
    />
  );
};

export default TransactorInfo;
