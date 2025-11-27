import React from 'react';
import { NftActionRow, UpdateMetadataNFTAction } from './NftActionRow';
import {NftActivityTypeEnum} from "../../../types/NFTToken";

const nftResultActionNameMap = {
  [NftActivityTypeEnum.Approve]: 'Granted transfer rights',
  [NftActivityTypeEnum.Burn]: 'Burned',
  [NftActivityTypeEnum.Mint]: 'Minted',
  [NftActivityTypeEnum.Transfer]: 'Transferred',
  [NftActivityTypeEnum.Metadata]: 'Updated metadata',
};

const nftActionSenderPrefixesMap = {
  [NftActivityTypeEnum.Transfer]: 'from',
  [NftActivityTypeEnum.Burn]: 'owned by',
};

export const DeployResultNft = ({ nftAction }) => {
  const { token_id, nft_action_id, from_hash, contract_package } = nftAction;

  const actionName = nftResultActionNameMap[nft_action_id];
  const contractPrefix =
    nft_action_id === NftActivityTypeEnum.Approve ? 'for' : null;
  const senderPrefix = nftActionSenderPrefixesMap[nft_action_id];

  if (!contract_package) return null;

  if (nft_action_id === NftActivityTypeEnum.Metadata) {
    return (
      <UpdateMetadataNFTAction
        nftTokenIds={[token_id]}
        actionName={actionName}
        contractPackage={contract_package}
      />
    );
  }

  const senderHash =
    nft_action_id === NftActivityTypeEnum.Transfer ||
    nft_action_id === NftActivityTypeEnum.Burn
      ? from_hash
      : null;

  return (
    <NftActionRow
      {...nftAction}
      actionName={actionName}
      contractPrefix={contractPrefix}
      senderPrefix={senderPrefix}
      nftTokenIds={[token_id]}
      from_hash={senderHash}
    />
  );
};
