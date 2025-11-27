import ContractIcon from '../../../components/contract-icon/contract-icon';
import React from 'react';
import {DeployContractPackageResult} from "../../../types/types";
import BodyText from "../../body-text/body-text";
import Link from "../../link/link";

export const NftCollectionIdentifier = ({
  getContractPackagePath,
  contractPackage,
}: {
  getContractPackagePath: (hash: string) => string;
  contractPackage: DeployContractPackageResult | undefined | null;
}) => {
  return contractPackage ? (
    <>
      <ContractIcon
        size={'small'}
        contractTypeId={contractPackage?.latest_version_contract_type_id}
        src={contractPackage.icon_url}
      />
      <BodyText size={3} variation={'black'} monotype>
        <Link
          href={getContractPackagePath(contractPackage.contract_package_hash)}
          ariaDescription={'Link to contract package details'}
          color={'primaryBlue'}
        >
          {contractPackage.name}
        </Link>
      </BodyText>
      <BodyText size={3} variation={'darkGray'}>
        NFT(s)
      </BodyText>
    </>
  ) : null;
};
