import React from 'react';
import {ContractTypeId} from "../../types/types";

export const contractTypes = {
  [ContractTypeId.System]: 'System Contract',
  [ContractTypeId.Cep18]: 'CEP-18 Token',
  [ContractTypeId.CustomCep18]: 'CEP-18 Token',
  [ContractTypeId.CEP47Nft]: 'CEP-47 NFT',
  [ContractTypeId.CustomCEP47Nft]: 'CEP-47 NFT',
  [ContractTypeId.DeFi]: 'DeFi',
  [ContractTypeId.CEP78Nft]: 'CEP-78 NFT',
  [ContractTypeId.CustomCEP78Nft]: 'CEP-78 NFT',
  [ContractTypeId.NFTMarketplace]: 'NFT Marketplace',
  [ContractTypeId.CEP95Nft]: 'CEP-95 NFT',
};

export const ContractTypeName = ({
  contractTypeId,
}: {
  contractTypeId: number | null;
}) => {
  return (
    <>
      {contractTypeId ? (
        contractTypes[contractTypeId]
      ) : null}
    </>
  );
};
