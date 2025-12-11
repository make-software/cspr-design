import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  ExecutionTypesMap,
  isTransferDeploy,
  isWASMProxyTransaction,
  isWASMTransaction,
} from './utils/contract';
import TransferActionRow from './components/TransferActionRow';
import DeployActionCsprFun from './components/DeployActionCsprFun';
import DeployActionAuction from './components/DeployActionAuction';
import DeployActionAssociatedKeys from './components/DeployActionAssociatedKeys';
import DeployActionMarket from './components/DeployActionMarket';
import { DeployActionCep18 } from './components/DeployActionCep18';
import { DeployActionNft } from './components/DeployActionNft';
import DeployActionDefault from './components/DeployActionDefault';
import { DeployActionDataProvider } from './services/deploy-action-context';
import BodyText from '../body-text/body-text';
import {
  AccountInfoResult,
  ContractResult,
  ContractTypeId,
  DataResponse,
  Deploy,
  DeployContractPackageResult,
  GetDeployResult,
} from '../../types/types';
import { Transaction } from 'casper-js-sdk';
import {getWasmProxyArgumentsFromRawData} from "../../utils/deploy-action-helpers";

export type ActionIdentificationHashesType = {
  auction_manager_contract_hash?: string;
  associated_keys_contract_hash?: string;
  cspr_market_contract_package_hash?: string;
  auction_pool_account_hash?: string;
  native_transfer_contract_hash?: string;
};

interface DeployActionRowComponentProps {
  deploy: Deploy;
  deployRawData?: DataResponse< GetDeployResult & {api_version: string} > | undefined | null;
  loading: boolean;
  actionIdentificationHashes: ActionIdentificationHashesType;
}

export const DeployActionRowComponent = ({
  deploy,
  deployRawData,
  loading,
  actionIdentificationHashes,
}: DeployActionRowComponentProps) => {
  const {
    executionTypeId,
    entryPoint,
    contractPackage,
    contractHash,
    contractPackageHash,
  } = deploy;

  const isWASMProxy = isWASMProxyTransaction(executionTypeId);
  const convertedArgs =
    isWASMProxy && deployRawData?.data
      ? getWasmProxyArgumentsFromRawData(
          Transaction.fromJSON(deployRawData?.data),
        )
      : null;

  const deployWithConvertedArgs = {
    ...deploy,
    args: {
      ...deploy.args,
      ...(convertedArgs ? convertedArgs : null),
    },
  };

  const deployType = ExecutionTypesMap[executionTypeId];
  const isTransfer = isTransferDeploy(
    contractHash,
    entryPoint?.name,
    actionIdentificationHashes?.native_transfer_contract_hash || '',
  );
  const isWasm = isWASMTransaction(executionTypeId); // deployType !== WASM_DEPLOY;
  const isCSPRFun =
    deployWithConvertedArgs.args?.csprfun_contract_hash_key &&
    deployWithConvertedArgs?.args?.token_to_trade_contract_hash_key;

  if (loading) {
    return (
      <BodyText size={3} scale={'xs'} lineHeight={'xs'}>
        <Skeleton />
      </BodyText>
    );
  }

  if (isTransfer && deployWithConvertedArgs.transfers) {
    return (
      <TransferActionRow
        loading={loading}
        timeTransactionCurrencyRate={
          deployWithConvertedArgs.timeTransactionCurrencyRate
        }
        transfer={deployWithConvertedArgs.transfers[0]}
        actionPoolAccountHash={
          actionIdentificationHashes.auction_pool_account_hash
        }
      />
    );
  }

  if (isWasm && !isCSPRFun) {
    return (
      <BodyText scale={'xs'} lineHeight={'xs'} size={3} monotype>
        {deployType}
      </BodyText>
    );
  }

  if (isCSPRFun) {
    return <DeployActionCsprFun deploy={deployWithConvertedArgs} />;
  }

  if (!contractPackage) {
    return (
      <BodyText scale={'xs'} lineHeight={'xs'} size={3} monotype>
        N/A
      </BodyText>
    );
  }
  const contractTypeId =
    contractPackage.latest_version_contract_type_id ||
    contractPackage.contract_type_id;

  if (
    contractHash === actionIdentificationHashes.auction_manager_contract_hash
  ) {
    return <DeployActionAuction deploy={deployWithConvertedArgs} />;
  }

  if (
    contractHash === actionIdentificationHashes.associated_keys_contract_hash
  ) {
    return (
      <DeployActionAssociatedKeys
        deploy={deployWithConvertedArgs}
        deployRawData={deployRawData}
      />
    );
  }

  if (
    contractPackageHash ===
    actionIdentificationHashes.cspr_market_contract_package_hash
  ) {
    return <DeployActionMarket deploy={deployWithConvertedArgs} />;
  }

  if (
    contractTypeId === ContractTypeId.CustomCep18 ||
    contractTypeId === ContractTypeId.Cep18
  ) {
    return <DeployActionCep18 deploy={deployWithConvertedArgs} />;
  }

  if (
    contractTypeId === ContractTypeId.CEP78Nft ||
    contractTypeId === ContractTypeId.CEP47Nft ||
    contractTypeId === ContractTypeId.CustomCEP78Nft ||
    contractTypeId === ContractTypeId.CustomCEP47Nft ||
    contractTypeId === ContractTypeId.CEP95Nft
  ) {
    return <DeployActionNft deploy={deployWithConvertedArgs} />;
  }

  return <DeployActionDefault deploy={deployWithConvertedArgs} />;
};

type DeployActionRowProps = DeployActionRowComponentProps & {
  getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
  getContractInfoByHash?: (
    contractHash: string,
  ) => ContractResult | null | undefined;
  getContractPackageInfoByHash?: (
    contractPackageHash: string,
  ) => DeployContractPackageResult | null | undefined;
  csprLiveDomainPath: string;
};

export const DeployActionRow = (props: DeployActionRowProps) => {
  const {
    getAccountInfo,
    getContractPackageInfoByHash,
    getContractInfoByHash,
    deployRawData,
    loading,
    deploy,
    actionIdentificationHashes,
    csprLiveDomainPath,
  } = props;
  return (
    <DeployActionDataProvider
      getAccountInfo={getAccountInfo}
      getContractPackageInfoByHash={getContractPackageInfoByHash}
      getContractInfoByHash={getContractInfoByHash}
      csprLiveDomainPath={csprLiveDomainPath}
    >
      <DeployActionRowComponent
        deploy={deploy}
        deployRawData={deployRawData}
        loading={loading}
        actionIdentificationHashes={actionIdentificationHashes}
      />
    </DeployActionDataProvider>
  );
};

export default DeployActionRow;