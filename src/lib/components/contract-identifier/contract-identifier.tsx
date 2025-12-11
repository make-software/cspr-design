import React from 'react';
import { ContractIdentifierWithName } from './contract-identifier-with-name';
import {
  DefaultContractIdentifier,
  UnknownContractInfo,
} from './default-contract-identifier';
import { AvatarProps } from '../avatar/avatar';
import { DeployContractPackageResult } from '../../types/types';
import { HashLength } from '../../utils/formatters';
import { BodyTextProps } from '../body-text/body-text';

interface ContractIdentifierProps {
  hash: string;
  withName?: boolean;
  contractPackage?: DeployContractPackageResult;
  hideContractType?: boolean;
  hashLength?: HashLength;
  avatarSize?: AvatarProps['size'];
  hashFontSize?: BodyTextProps['scale'];
  loading?: boolean;
  path: string;
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
        path={props.path}
      />
    );
  }

  if (withName) {
    return <ContractIdentifierWithName {...props} />;
  }

  return <DefaultContractIdentifier {...props} />;
};
