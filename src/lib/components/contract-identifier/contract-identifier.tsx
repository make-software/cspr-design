import React from 'react';
import { ContractIdentifierWithName } from './contract-identifier-with-name';
import {
  DefaultContractIdentifier,
  UnknownContractInfo,
} from './default-contract-identifier';
import { AvatarProps } from '../avatar/avatar';
import {DeployContractPackageResult} from "../../types/types";
import { HashLength, HashFontSize } from '../../utils/formatters';

interface ContractIdentifierProps {
  hash: string;
  withName?: boolean;
  contractPackage?: DeployContractPackageResult;
  hideContractType?: boolean;
  hashLength?: HashLength;
  avatarSize?: AvatarProps['size'];
  hashFontSize?: HashFontSize;
  loading?: boolean;
  getContractPackagePath: (hash: string) => string;
}

export const ContractIdentifier = ({
  withName = false,
  ...props
}: ContractIdentifierProps) => {

  if (!props.contractPackage) {
    return (
      <UnknownContractInfo
        hash={props.hash}
        iconSize={props.avatarSize}
        hashFontSize={props.hashFontSize}
        hashLength={props.hashLength}
        avatarSize={props.avatarSize}
        getContractPackagePath={props.getContractPackagePath}
      />
    );
  }

  if (withName) {
    return <ContractIdentifierWithName {...props} />;
  }

  return <DefaultContractIdentifier {...props} />;
};
