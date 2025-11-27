import React from 'react';
import { NftCollectionIdentifier } from './NftCollectionIdentifier';
import { NftTokenIds } from './NftTokenIds';
import TransactorInfo from '../../../components/transactor-info/transactor-info';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import BodyText from "../../body-text/body-text";
import FlexRow from "../../flex-row/flex-row";
import {AccountInfoResult, DeployContractPackageResult, TransactorHashType} from "../../../types/types";

export const UpdateMetadataNFTAction = ({
  actionName,
  nftTokenIds,
  contractPackage,
}) => {
  const { getNftPath, getContractPackagePath } = useDeployActionDataContext();
  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {actionName}
      </BodyText>
      <BodyText size={3} noWrap variation={'darkGray'}>
        for
      </BodyText>
      <NftCollectionIdentifier
        contractPackage={contractPackage}
        getContractPackagePath={getContractPackagePath}
      />
      <NftTokenIds
        nftTokenIds={nftTokenIds}
        collectionHash={contractPackage.contract_package_hash}
        getNftPath={getNftPath}
      />
    </FlexRow>
  );
};

interface NftActionRowProps {
  actionName: string | undefined;
  contractPrefix?: string | null;
  senderPrefix?: string | null;
  nftTokenIds?: string[] | null;
  contract_package: DeployContractPackageResult;
  from_hash?: string | null;
  from_public_key?: string | null;
  from_type?: TransactorHashType | null;
  to_hash?: string;
  to_public_key?: string | null;
  to_type?: TransactorHashType | null;
}

export const NftActionRow = ({
  actionName,
  contractPrefix,
  senderPrefix,
  nftTokenIds,
  contract_package,
  from_public_key,
  from_hash,
  from_type,
  to_hash,
  to_public_key,
  to_type,
}: NftActionRowProps) => {
  const { getAccountInfo, getNftPath, getContractPackagePath,getAccountPath, getContractPackageInfoByHash } =
    useDeployActionDataContext();
  const fromAccountInfo = getAccountInfo<AccountInfoResult>(
    from_public_key || from_hash || ''
  );
  const toAccountInfo = getAccountInfo<AccountInfoResult>(
    to_public_key || to_hash || ''
  );

  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {actionName}
      </BodyText>
      {contractPrefix && (
        <BodyText size={3} noWrap variation={'darkGray'}>
          {contractPrefix}
        </BodyText>
      )}
      <NftCollectionIdentifier
        contractPackage={contract_package}
        getContractPackagePath={getContractPackagePath}
      />
      <NftTokenIds
        nftTokenIds={nftTokenIds}
        collectionHash={contract_package?.contract_package_hash}
        getNftPath={getNftPath}
      />

      {from_hash && (
        <>
          {senderPrefix && (
            <BodyText size={3} noWrap variation={'darkGray'}>
              {senderPrefix}
            </BodyText>
          )}
          <TransactorInfo
            type={from_type}
            accountInfo={
              fromAccountInfo?.account_info ||
              fromAccountInfo?.centralized_account_info
            }
            contractPackage={
                getContractPackageInfoByHash(from_hash)
            }
            csprName={fromAccountInfo?.cspr_name}
            loading={!from_hash}
            publicKey={from_public_key}
            hashFontSize={'sm'}
            avatarSize="small"
            hash={from_hash}
            getContractPackagePath={getContractPackagePath}
            getAccountPath={getAccountPath}
          />
        </>
      )}
      {to_hash && (
        <>
          <BodyText size={3} noWrap variation={'darkGray'}>
            to
          </BodyText>
          <TransactorInfo
            type={to_type}
            accountInfo={
              toAccountInfo?.account_info ||
              toAccountInfo?.centralized_account_info
            }
            contractPackage={
                getContractPackageInfoByHash(to_hash)
            }
            loading={!to_hash}
            csprName={toAccountInfo?.cspr_name}
            publicKey={to_public_key}
            hashFontSize={'sm'}
            avatarSize="small"
            hash={to_hash}
            getContractPackagePath={getContractPackagePath}
            getAccountPath={getAccountPath}
          />
        </>
      )}
    </FlexRow>
  );
};
