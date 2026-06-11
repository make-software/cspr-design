import ContractIcon from '../../../components/contract-icon/contract-icon';
import React from 'react';
import { DeployContractPackageResult } from '../../../types/types';
import BodyText from '../../body-text/body-text';
import Link from '../../link/link';
import TooltipWithExtendedInfo from '../../tooltip-with-extended-info/tooltip-with-extended-info';

export const NftCollectionIdentifier = ({
  path,
  contractPackage,
}: {
  path: string;
  contractPackage: DeployContractPackageResult | undefined | null;
}) => {
  return contractPackage ? (
    <>
      <ContractIcon
        size={'small'}
        contractTypeId={contractPackage?.latest_version_contract_type_id}
        src={contractPackage.icon_url}
      />
      <TooltipWithExtendedInfo
        hash={contractPackage.contract_package_hash}
        tooltipCaption={'Contract Package Hash'}
        extendedLine={{
          title: contractPackage?.name,
          caption: 'Contract name',
        }}
      >
        <BodyText size={3} variation={'black'} monotype>
          <Link
            href={path}
            aria-description={'Link to contract package details'}
            color={'primaryBlue'}
          >
            {contractPackage.name}
          </Link>
        </BodyText>
      </TooltipWithExtendedInfo>
      <BodyText size={3} variation={'darkGray'}>
        NFT(s)
      </BodyText>
    </>
  ) : null;
};
