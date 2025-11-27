import React from 'react';
import { HashLink } from '../hash-link/hash-link';
import ContractIcon from '../contract-icon/contract-icon';
import { AvatarProps } from '../avatar/avatar';
import TooltipWithExtendedInfo from '../tooltip-with-extended-info/tooltip-with-extended-info';
import { DeployContractPackageResult } from '../../types/types';
import { HashLength } from '../../utils/formatters.ts';
import { HashFontSize } from './default-contract-identifier';
import {
  SHORTENED_CONTRACT_NAME_LENGTH,
  truncateName,
} from '../../utils/truncate-hash';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
import TruncateBox from '../truncate-box/truncate-box';

interface ContractIdentifierWithNameProps {
  hash: string;
  contractPackage: DeployContractPackageResult;
  hashLength?: HashLength;
  avatarSize?: AvatarProps['size'];
  hashFontSize?: HashFontSize;
  loading?: boolean;
  getContractPackagePath: (hash: string) => string;
}

export const ContractIdentifierWithName = ({
  hash,
  contractPackage,
  avatarSize = 'default',
  hashLength = HashLength.TINY,
  loading,
  getContractPackagePath,
}: ContractIdentifierWithNameProps) => {
  const { latest_version_contract_type_id, icon_url, name, contract_name } =
    contractPackage;

  const contractName = name || contract_name;
  const truncatedContractName =
    contractName && hashLength === HashLength.TINY
      ? truncateName(contractName, SHORTENED_CONTRACT_NAME_LENGTH)
      : contractName;
  const path = getContractPackagePath(hash);

  return (
    <FlexRow align={'center'} itemsSpacing={12}>
      <ContractIcon
        src={icon_url}
        size={avatarSize}
        contractTypeId={latest_version_contract_type_id}
        loading={loading}
      />
      <TooltipWithExtendedInfo
        extendedLine={{
          title: contractName,
          caption: 'Contract package name',
        }}
        tooltipCaption={'Contract package hash'}
        hash={hash}
      >
        <FlexColumn>
          {truncatedContractName ? (
            <>
              <BodyText size={3} monotype scale={'xs'} lineHeight={'xs'}>
                <HashLink
                  hash={hash}
                  href={path}
                  hashLength={hashLength}
                  ariaDescription={'Link to contract package'}
                />
              </BodyText>
              <TruncateBox size={2}>
                <BodyText
                  size={3}
                  scale={'xs'}
                  lineHeight={'xs'}
                  variation="darkGray"
                  noWrap
                >
                  {truncatedContractName}
                </BodyText>
              </TruncateBox>
            </>
          ) : (
            <BodyText size={3} monotype scale={'xs'} lineHeight={'xs'}>
              <HashLink
                href={path}
                hash={hash}
                hashLength={hashLength}
                ariaDescription={'Link to contract package'}
              />
            </BodyText>
          )}
        </FlexColumn>
      </TooltipWithExtendedInfo>
    </FlexRow>
  );
};
