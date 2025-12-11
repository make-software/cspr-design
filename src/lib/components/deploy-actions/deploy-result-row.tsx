import React, { useState } from 'react';
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

const sortActionsByTypeAndOrder = (deploy: Deploy) => {
  const nftActions: NftActionsResult[] = (deploy.nftActions || []).map(
    (action) => ({
      ...action,
      type: DeployResultRowType.NFT,
    }),
  );
  const ftActions: FTActionsResult[] = (deploy.ftActions || []).map(
    (action) => ({
      ...action,
      type: DeployResultRowType.FT,
    }),
  );

  const sortedTransfers: DeployTransferResult[] = (deploy.transfers || [])
    .sort(
      (transferA, transferB) =>
        transferA.transfer_index - transferB.transfer_index,
    )
    .map((action) => ({
      ...action,
      type: DeployResultRowType.NT,
    }));

  const sortedTokenActions = [...nftActions, ...ftActions].sort(
    (actionA, actionB) => actionA.transform_idx - actionB.transform_idx,
  );

  return [...sortedTransfers, ...sortedTokenActions];
};

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

interface DeployResultRowComponentProps {
  deploy: Deploy;
  loading: boolean;
  actionIdentificationHashes: ActionIdentificationHashesType;
  deployRawData?: DataResponse< GetDeployResult & {api_version: string}> | null;
  actionComponents?: React.ReactElement[] | null;
  variation?: ResultRowVariation;
  shouldCollapse?: boolean;
}

export const DeployResultRowComponent = (
  props: DeployResultRowComponentProps,
) => {
  const {
    deploy,
    deployRawData,
    loading,
    actionIdentificationHashes,
    variation = ResultRowVariation.default,
    shouldCollapse = false,
    actionComponents,
  } = props;
  const [isCollapsed, setCollapsed] = useState<boolean>(shouldCollapse);
  const handleExpandList = () => {
    setCollapsed(!isCollapsed);
  };

  const deployStatus = getDeployStatus(deploy);

  if (deployStatus === Status.Error) {
    return null;
  }

  if (loading) {
    return (
      <ResultItemWrapper variation={variation}>
        <BodyText size={3} scale={'xs'} lineHeight={'xs'}>
          <Skeleton />
        </BodyText>
      </ResultItemWrapper>
    );
  }

  if (
    deploy.contractHash ===
    actionIdentificationHashes.associated_keys_contract_hash
  ) {
    return (
      <ResultItemWrapper variation={variation}>
        <DeployActionAssociatedKeys
          deploy={deploy}
          deployRawData={deployRawData}
          renderAsResultAction
        />
      </ResultItemWrapper>
    );
  }

  const showResultRow =
    deploy.transfers || deploy.nftActions || deploy.ftActions;

  if (!showResultRow) {
    return null;
  }

  const sortedActions = sortActionsByTypeAndOrder(deploy);

  const getActionElementToRender = (action) => {
    switch (action.type) {
      case DeployResultRowType.NFT:
        return (
          <DeployResultNft key={action.transform_idx} nftAction={action} />
        );
      case DeployResultRowType.FT:
        return (
          <DeployResultCep18 key={action.transform_idx} ftAction={action} />
        );
      case DeployResultRowType.NT:
        return (
          <TransferActionRow
            key={action.transfer_index}
            loading={loading}
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

  const sortedActionComponents = sortedActions.map((action) =>
    getActionElementToRender(action),
  );

  const combinedActionComponents = [
    ...sortedActionComponents,
    ...(actionComponents || []),
  ];

  return (
    <FlexColumn>
      {combinedActionComponents?.length
        ? combinedActionComponents
            .filter((action, i) =>
              isCollapsed ? i < MAXIMUM_VISIBLE_ROWS : true,
            )
            .map((action, idx) => (
              <ResultItemWrapper key={`actions-${idx}`} variation={variation}>
                {action}
              </ResultItemWrapper>
            ))
        : null}
      {shouldCollapse &&
      combinedActionComponents?.length > MAXIMUM_VISIBLE_ROWS ? (
        <ExpandCollapsedButton
          collapsedLabel={
            <>
              <>View all </>
              {combinedActionComponents?.length}
              <> results</>
            </>
          }
          expandedLabel={<>Collapse results </>}
          onExpand={handleExpandList}
        />
      ) : null}
    </FlexColumn>
  );
};

type DeployResultRowProps = DeployResultRowComponentProps & {
  getAccountInfo: (publicKey: string) => AccountInfoResult | null | undefined;
  getContractPackageInfoByHash?: (
    contractHash: string,
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