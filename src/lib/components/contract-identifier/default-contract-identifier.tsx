import {
  ContractTypeName,
  contractTypes,
} from '../contract-type/contract-type-name';
import React from 'react';
import { AvatarProps } from '../avatar/avatar';
import ContractIcon from '../contract-icon/contract-icon';
import FlexRow from '../flex-row/flex-row';
import { DeployContractPackageResult } from '../../types/types';
import TooltipWithExtendedInfo from '../tooltip-with-extended-info/tooltip-with-extended-info';
import BodyText, { BodyTextProps } from '../body-text/body-text';
import Tooltip from '../tooltip/tooltip';
import {
  SHORTENED_CONTRACT_NAME_LENGTH,
  truncateName,
} from '../../utils/truncate-hash';
import Copy from '../copy/copy';
import Link from '../link/link';
import { formatHash, HashLength } from '../../utils/formatters.ts';

export const UnknownContractInfo = ({
  hash,
  iconSize = 'small',
  hashFontSize = 'sm',
  hashLength,
  path,
}: {
  hash: string | null;
  iconSize?: AvatarProps['size'];
  hashFontSize?: BodyTextProps['scale'];
  hashLength?: HashLength;
  path: string;
}) => {
  const itemsSpacing = iconSize === 'default' ? 12 : 4;
  if (!hash) {
    return null;
  }

  return (
    <FlexRow itemsSpacing={itemsSpacing} align={'center'}>
      <ContractIcon size={iconSize} contractTypeId={null} />
      <Tooltip tooltipContent={hash} caption={'Contract Package Hash'}>
        <BodyText
          size={3}
          variation={'darkGray'}
          noWrap
          scale={hashFontSize}
          monotype
          lineHeight={'xs'}
        >
          <Link
            href={path}
            ariaDescription={'Link to contract package details'}
            color={'hash'}
          >
            {formatHash(hash, hashLength)}
          </Link>
        </BodyText>
      </Tooltip>
      <Copy value={hash} minified />
    </FlexRow>
  );
};

interface DefaultContractIdentifierProps {
  hash: string;
  contractPackage?: DeployContractPackageResult;
  hashLength?: HashLength;
  avatarSize?: AvatarProps['size'];
  hashFontSize?: BodyTextProps['scale'];
  hideContractType?: boolean;
  loading?: boolean;
  path: string;
}

export const DefaultContractIdentifier = ({
  hash,
  contractPackage,
  hideContractType = false,
  hashLength = HashLength.TINY,
  avatarSize = 'tiny',
  hashFontSize = 'xs',
  loading,
  path,
}: DefaultContractIdentifierProps) => {
  const { latest_version_contract_type_id, icon_url, name, contract_name } =
    contractPackage;

  const contractName = truncateName(
    name || contract_name,
    SHORTENED_CONTRACT_NAME_LENGTH,
  );

  const contractTypeName = latest_version_contract_type_id
    ? contractTypes[latest_version_contract_type_id]
    : '';
  const contractIdentifier = name ? contractName : formatHash(hash, hashLength);

  const showContractType =
    !hideContractType &&
    contractIdentifier.length + contractTypeName.length <
      SHORTENED_CONTRACT_NAME_LENGTH;

  const itemsSpacing = avatarSize === 'default' ? 12 : 4;

  return (
    <FlexRow itemsSpacing={4} align={'center'}>
      <FlexRow itemsSpacing={itemsSpacing} align={'center'}>
        <ContractIcon
          size={avatarSize}
          contractTypeId={latest_version_contract_type_id}
          src={icon_url}
          loading={loading}
        />
        <TooltipWithExtendedInfo
          hash={hash}
          tooltipCaption={'Contract Package Hash'}
          extendedLine={{
            title: name || contract_name,
            caption: 'Contract name',
          }}
          monotype
        >
          <BodyText
            size={3}
            variation={'darkGray'}
            noWrap
            scale={hashFontSize}
            monotype
          >
            <Link
              href={path}
              ariaDescription={'Link to contract package details'}
              color={'hash'}
            >
              {contractIdentifier}
            </Link>
          </BodyText>
        </TooltipWithExtendedInfo>
      </FlexRow>
      {showContractType && (
        <BodyText
          size={3}
          variation={'darkGray'}
          noWrap
          scale={hashFontSize}
        >
          <ContractTypeName contractTypeId={latest_version_contract_type_id} />
        </BodyText>
      )}
    </FlexRow>
  );
};
