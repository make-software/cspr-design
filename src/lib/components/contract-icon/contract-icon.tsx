import React from 'react';
import Avatar, { AvatarProps } from '../avatar/avatar';
import { ContractTypeId } from '../../types/types';
import {
  DefiContractIcon,
  GenericContractIcon,
  NftContractIcon,
  TokenContractIcon,
} from '../../icons-index';

export interface ContractIconProps {
  src?: string | null;
  size?: AvatarProps['size'];
  loading?: boolean;
  contractTypeId: number | undefined | null;
}

const ContractIconsPath = {
  [ContractTypeId.Cep18]: TokenContractIcon,
  [ContractTypeId.CustomCep18]: TokenContractIcon,
  [ContractTypeId.CEP47Nft]: NftContractIcon,
  [ContractTypeId.CustomCEP47Nft]: NftContractIcon,
  [ContractTypeId.CEP78Nft]: NftContractIcon,
  [ContractTypeId.CustomCEP78Nft]: NftContractIcon,
  [ContractTypeId.CEP95Nft]: NftContractIcon,
  [ContractTypeId.DeFi]: DefiContractIcon,
};

const genericIconPath = GenericContractIcon;

export const ContractIcon = ({
  src,
  size = 'default',
  loading,
  contractTypeId,
}: ContractIconProps) => {
  const contractTypeDefaultLogo = contractTypeId
    ? ContractIconsPath[contractTypeId]
    : null;
  const contractLogoSrc = contractTypeDefaultLogo || genericIconPath;

  if (src) {
    return (
      <Avatar size={size} src={src} loading={loading} alt={'Contract logo'} />
    );
  }
  return <Avatar size={size} path={contractLogoSrc} loading={loading} />;
};

export default ContractIcon;
