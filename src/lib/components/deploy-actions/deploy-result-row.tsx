import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import DeployActionAssociatedKeys from './components/DeployActionAssociatedKeys';
import { DeployResultNft } from './components/DeployResultNft';
import { DeployResultCep18 } from './components/DeployResultCep18';
import TransferActionRow from './components/TransferActionRow';
import { ActionIdentificationHashesType } from './deploy-action-row';
import { DeployActionDataProvider } from './services/deploy-action-context';
import {
  AccountInfoResult,
  ContractResult,
  ContractTypeId,
  DataResponse,
  Deploy, DeployContractPackageResult,
  DeployTransferResult,
  FTActionsResult,
  GetDeployResult,
  NftActionsResult,
} from '../../types/types';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import FlexColumn from '../flex-column/flex-column';
import ExpandCollapsedButton from '../expand-collapsed/expand-collapsed-button';
import { getDeployStatus, Status } from '../deploy-status/deploy-status';
import {isTransferDeploy} from "./utils/contract";
import {isNonNullable} from "../../utils/guards";
import {NftTypeToEntryPointMap} from '../../types/NFTToken';
import {FTTransactionResult, FTActionType} from '../../types/FTToken';

const DefaultResultItem = styled(FlexRow)(({ theme }) => ({
  padding: '14px 0',
  ':not(:first-child):after': {
    content: "''",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderBottom: theme.border.tableRowSeparator,
  },

  position: 'relative',
}));

const GrayResultItem = styled(FlexRow)(({ theme }) => ({
  borderRadius: '4px',
  background: `${theme.styleguideColors.backgroundSecondary}80`,
  padding: '10px 16px',
  position: 'relative',
  span: {
    fontSize: '13px',
  },
  '> *': {
    flexWrap: 'wrap',
  },
  ':not(:first-child)': {
    marginTop: '8px',
  },
}));

const ResultItemWrapper = ({ variation, ...props }) => {
  return variation === ResultRowVariation.default ? (
    <DefaultResultItem {...props} />
  ) : (
    <GrayResultItem {...props} />
  );
};

const MAXIMUM_VISIBLE_ROWS = 3;

enum DeployResultRowType {
  'NFT' = 1,
  'FT' = 2,
  'UNI' = 3,
  'LS' = 4,
  'NT' = 5,
}

export enum ResultRowVariation {
  default = 'default',
  gray = 'gray',
}

interface DeployResultRowComponentProps {
  deploy: Deploy;
  loading: boolean;
  actionIdentificationHashes: ActionIdentificationHashesType;
  deployRawData?: DataResponse< GetDeployResult & {api_version: string}> | null;
  actionComponents?: React.ReactElement[] | null;
  variation?: ResultRowVariation;
  shouldCollapse?: boolean;
}

const sortActionsByTypeAndOrder = (deploy: Deploy) => {
  const nftActions: NftActionsResult[] = (deploy.nftActions || []).map(
      (action) => ({
        ...action,
        type: DeployResultRowType.NFT,
      })
  );
  const ftActions: FTActionsResult[] = (deploy.ftActions || []).map(
      (action) => ({
        ...action,
        type: DeployResultRowType.FT,
      })
  );

  const sortedTransfers: DeployTransferResult[] = (deploy.transfers || [])
      .sort(
          (transferA, transferB) =>
              transferA.transfer_index - transferB.transfer_index
      )
      .map((action) => ({
        ...action,
        type: DeployResultRowType.NT,
      }));

  const sortedTokenActions = [...nftActions, ...ftActions].sort(
      (actionA, actionB) => actionA.transform_idx - actionB.transform_idx
  );

  return [...sortedTransfers, ...sortedTokenActions];
};

const getSortedResultComponents = ({
                                     deploy,
                                     deployRawData,
                                     actionIdentificationHashes,
                                     actionComponents,
                                   }) => {
  const sortedActions = sortActionsByTypeAndOrder(deploy);

  const getActionElementToRender = (action) => {
    switch (action.type) {
      case DeployResultRowType.NFT:
        return (
            <DeployResultNft key={action.transform_idx} nftAction={action} />
        );
      case DeployResultRowType.FT:
        return (
            <DeployResultCep18
                key={action.transform_idx}
                ftAction={action as FTTransactionResult}
            />
        );
      case DeployResultRowType.NT:
        return (
            <TransferActionRow
                key={action.transfer_index}
                loading={false}
                timeTransactionCurrencyRate={deploy.timeTransactionCurrencyRate}
                transfer={action}
                actionPoolAccountHash={
                  actionIdentificationHashes.auction_pool_account_hash
                }
                renderAsResultAction
            />
        );
      default:
        return null;
    }
  };

  const associatedKeyComponent =
      deploy.contractHash ===
      actionIdentificationHashes.associated_keys_contract_hash ? (
          <DeployActionAssociatedKeys
              deploy={deploy}
              deployRawData={deployRawData}
              renderAsResultAction
          />
      ) : null;

  const sortedActionComponents = sortedActions.map((action) =>
      getActionElementToRender(action)
  );

  const combinedActionComponents = [
    associatedKeyComponent,
    ...sortedActionComponents,
    ...(actionComponents || []),
  ].filter(isNonNullable);
  return combinedActionComponents;
};

const manageCollapsingResults = ({
                                   deploy,
                                   actionIdentificationHashes,
                                   actionsArray,
                                   shouldCollapse,
                                 }) => {
  if (!shouldCollapse || actionsArray.length > 1) return false;

  const contractTypeId =
      deploy.contractPackage?.latest_version_contract_type_id ||
      deploy.contractPackage?.contract_type_id;
  const isCep18 =
      contractTypeId === ContractTypeId.CustomCep18 ||
      contractTypeId === ContractTypeId.Cep18;

  if (isCep18) {
    const cep18ActionName = deploy?.entryPoint?.name.toLowerCase() || '';
    const cep18ResultName =
        deploy.ftActions && deploy.ftActions[0]
            ? FTActionType[deploy.ftActions[0].ft_action_type_id].toLowerCase()
            : null;
    return cep18ActionName === cep18ResultName;
  }

  const isNft =
      contractTypeId === ContractTypeId.CEP78Nft ||
      contractTypeId === ContractTypeId.CEP47Nft ||
      contractTypeId === ContractTypeId.CustomCEP78Nft ||
      contractTypeId === ContractTypeId.CustomCEP47Nft ||
      contractTypeId === ContractTypeId.CEP95Nft;

  if (isNft) {
    const nftActionName = deploy?.entryPoint?.name || '';
    const nftResultName =
        deploy.nftActions && deploy.nftActions[0]
            ? NftTypeToEntryPointMap[deploy.nftActions[0].nft_action_id]
            : null;
    return nftActionName === nftResultName;
  }

  const isTransfer = isTransferDeploy(
      deploy.contractHash,
      deploy.entryPoint?.name
  );

  const isAssociatedKeysDeploy =
      deploy.contractHash ===
      actionIdentificationHashes.associated_keys_contract_hash;

  return isTransfer || isAssociatedKeysDeploy;
};

export const DeployResultRowComponent = (
    props: DeployResultRowComponentProps
) => {
  const {
    deploy,
    actionIdentificationHashes,
    deployRawData,
    variation = ResultRowVariation.default,
    shouldCollapse = false,
    actionComponents,
  } = props;

  const combinedActionComponents = getSortedResultComponents({
    deploy,
    deployRawData,
    actionComponents,
    actionIdentificationHashes,
  });

  const [isCollapsed, setCollapsed] = useState<boolean>(shouldCollapse);

  const handleExpandList = () => {
    setCollapsed(!isCollapsed);
  };

  const shouldCollapseDuplicatedResults = manageCollapsingResults({
    deploy,
    actionIdentificationHashes,
    actionsArray: combinedActionComponents,
    shouldCollapse,
  });

  console.log('shouldCollapseDuplicatedResults',shouldCollapseDuplicatedResults);

  useEffect(() => {
    if (shouldCollapseDuplicatedResults) setCollapsed(true);
  }, [shouldCollapseDuplicatedResults]);

  const maxVisibleRows = shouldCollapseDuplicatedResults
      ? 0
      : MAXIMUM_VISIBLE_ROWS;

  const collapsedLabel =
      combinedActionComponents?.length <= 1 ? `View ${combinedActionComponents?.length} result`
       : `View all ${combinedActionComponents?.length} results`;
  const expandedLabel =
      combinedActionComponents?.length <= 1
          ? 'Collapse result'
          : 'Collapse results';

  const showCollapsedButton =
      (shouldCollapse || shouldCollapseDuplicatedResults) &&
      combinedActionComponents?.length > maxVisibleRows;

  return (
      <FlexColumn>
        {combinedActionComponents?.length
            ? combinedActionComponents
                .filter((action, i) => (isCollapsed ? i < maxVisibleRows : true))
                .map((action, idx) => (
                    <ResultItemWrapper key={`actions-${idx}`} variation={variation}>
                      {action}
                    </ResultItemWrapper>
                ))
            : null}
        {showCollapsedButton ? (
            <ExpandCollapsedButton
                collapsedLabel={collapsedLabel}
                expandedLabel={expandedLabel}
                onExpand={handleExpandList}
                hasTopMargin={false}
            />
        ) : null}
      </FlexColumn>
  );
};

type DeployResultRowProps = DeployResultRowComponentProps & {
  getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
  getContractPackageInfoByHash?: (
    contractPackageHash: string,
  ) => DeployContractPackageResult | null | undefined;
  getContractInfoByHash?: (
      contractHash: string,
  ) => ContractResult | null | undefined;
  csprLiveDomainPath: string;
};

export const DeployResultRow = (props: DeployResultRowProps) => {
  const {
    getAccountInfo,
    getContractPackageInfoByHash,
    getContractInfoByHash,
    csprLiveDomainPath,
    ...rest
  } = props;
  const deployStatus = getDeployStatus(props.deploy);

  if (deployStatus === Status.Error) {
    return null;
  }

  if (props.loading) {
    return (
        <ResultItemWrapper variation={props.variation}>
          <BodyText size={3}>
            <Skeleton />
          </BodyText>
        </ResultItemWrapper>
    );
  }
  const showResultRow =
      props.deploy.transfers ||
      props.deploy.nftActions ||
      props.deploy.ftActions ||
      props.deploy.contractHash ===
      props.actionIdentificationHashes.associated_keys_contract_hash;

  if (!showResultRow) {
    return null;
  }
  return (
    <DeployActionDataProvider
      getAccountInfo={getAccountInfo}
      getContractPackageInfoByHash={getContractPackageInfoByHash}
      getContractInfoByHash={getContractInfoByHash}
      csprLiveDomainPath={csprLiveDomainPath}
    >
      <DeployResultRowComponent {...rest} />
    </DeployActionDataProvider>
  );
};

export default DeployResultRow;