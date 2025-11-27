import React from 'react';
import { NftCollectionIdentifier } from './NftCollectionIdentifier';
import { NftActionRow, UpdateMetadataNFTAction } from './NftActionRow';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import { prepareNftActionMessageDataForDeployDetails } from '../utils/prepare-action-messages';
import { Deploy } from '../../../types/types';
import { guardedDeriveSplitDataFromArguments } from '../../../utils/deploy-args';
import FlexRow from '../../flex-row/flex-row';
import BodyText from '../../body-text/body-text';
import { ContractIdentifier } from '../../contract-identifier/contract-identifier';
import { HashFontSize } from '../../../utils/formatters';
import DeployActionDefault from './DeployActionDefault';
import { NftTokenEntryPoint } from '../../../types/NFTToken';

const SetAllApprovalsNFTAction = ({ deploy }: { deploy: Deploy }) => {
  const { contractPackage, args } = deploy;
  const { getContractPackagePath, getContractPackageInfoByHash } =
    useDeployActionDataContext();
  const operatorHash =
    args.operator && guardedDeriveSplitDataFromArguments(args.operator, 'Hash');

  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        Approve transfer rights
      </BodyText>
      <BodyText size={3} noWrap variation={'darkGray'}>
        of
      </BodyText>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        all
      </BodyText>
      <NftCollectionIdentifier
        getContractPackagePath={getContractPackagePath}
        contractPackage={contractPackage}
      />

      {operatorHash && (
        <>
          <BodyText size={3} noWrap variation={'darkGray'}>
            to
          </BodyText>
          <ContractIdentifier
            hash={operatorHash.hash}
            avatarSize={'small'}
            hashFontSize={HashFontSize.big}
            getContractPackagePath={getContractPackagePath}
            contractPackage={getContractPackageInfoByHash(operatorHash.hash)}
          />
        </>
      )}
    </FlexRow>
  );
};

interface DeployNftActionProps {
  deploy: Deploy;
}

export const DeployActionNft = ({ deploy }: DeployNftActionProps) => {
  const { getPublicKeyAccountHash, i18n } = useDeployActionDataContext();
  const message = prepareNftActionMessageDataForDeployDetails(
    deploy,
    getPublicKeyAccountHash,
    i18n,
  );

  if (!message) {
    return <DeployActionDefault deploy={deploy} />;
  }

  const {
    entryPointName,
    actionName,
    nftTokenIds,
    contractPrefix,
    account1,
    account2,
    prefix1,
  } = message;

  if (entryPointName === NftTokenEntryPoint.set_approval_for_all) {
    return <SetAllApprovalsNFTAction deploy={deploy} />;
  }

  if (entryPointName === NftTokenEntryPoint.update_token_meta) {
    return (
      <UpdateMetadataNFTAction
        actionName={actionName}
        contractPackage={deploy.contractPackage}
        nftTokenIds={nftTokenIds}
      />
    );
  }

  return (
    <NftActionRow
      actionName={actionName}
      senderPrefix={prefix1}
      contractPrefix={contractPrefix}
      nftTokenIds={nftTokenIds}
      contract_package={deploy.contractPackage}
      from_public_key={account1?.publicKey}
      from_hash={account1?.hash}
      from_type={account1?.hashType}
      to_type={account2?.hashType}
      to_public_key={account2?.publicKey}
      to_hash={account2?.hash}
    />
  );
};
