import React from 'react';
import styled from 'styled-components';
import Big from 'big.js';
import {deriveAccountInfo} from '../../utils/account';
import {isValidPublicKey} from 'casper-js-sdk';
import TooltipWithExtendedInfo from '../../components/tooltip-with-extended-info/tooltip-with-extended-info';
import {PrecisionCase} from '../../utils/currency';
import CsprAmount from '../cspr-amount/cspr-amount';
import {DeployResultRow, ResultRowVariation,} from '../deploy-actions/deploy-result-row';
import {ActionIdentificationHashesType, DeployActionRow,} from '../deploy-actions/deploy-action-row';
import {TFunction} from 'i18next';
import PageTile from "../page-tile/page-tile";
import FlexColumn from "../flex-column/flex-column";
import FlexRow from "../flex-row/flex-row";
import {AccountInfoResult, ContractResult, Deploy, DeployContractPackageResult} from "../../types/types";
import BodyText from "../body-text/body-text";
import Link from "../link/link";
import {formatHash, formatNumber, formatTimestampAge, HashLength} from "../../utils/formatters";
import Tooltip from "../tooltip/tooltip";
import Avatar from "../avatar/avatar";
import TruncateBox from "../truncate-box/truncate-box";
import {isWASMProxyTransaction} from "../deploy-actions/utils/contract";
import {useMatchMedia} from "../../utils/match-media";
import {DeployStatus, DeployStatusSize} from "../deploy-status/deploy-status";
import {WasmProxyBadge} from "./wasm-proxy-badge";
import Address from "../address/address";

const StyledPageTile = styled(PageTile)(() => ({
  marginBottom: 8,
  height: 'auto',
}));

const DesktopFeedItemContainer = styled(FlexColumn)(({ theme }) =>
  theme.withMedia({
    boxSizing: 'border-box',
    padding: '20px',
    width: '100%',
    '> * + *': {
      width: '100%',
    },
  })
);

const MobileFeedItemContainer = styled(DesktopFeedItemContainer)(({ theme }) =>
  theme.withMedia({
    padding: '16px',
    '> * + *': {
      marginTop: [16, 0],
      paddingTop: 16,
    },
    '> div:not(:first-child)': {
      position: 'relative',
      flexWrap: 'wrap',
    },
    '>div:not(:first-child):after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      borderBottom: theme.border.tableRowSeparator,
    },
  })
);

const CommonDataContainer = styled(FlexRow)(({ theme }) => ({
  width: '100%',
  justifyContent: 'space-between',
  position: 'relative',
  paddingBottom: 12,
  ':after': {
    content: "''",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderBottom: theme.border.tableRowSeparator,
  },
}));

const WrappedContainer = styled(FlexRow)(({ theme }) => ({
  '> div': {
    flexWrap: 'wrap',
  },
  flexWrap: 'wrap',
}));

const StyledFlexColumn = styled(FlexColumn)(({ theme }) =>
  theme.withMedia({
    width: '100%',
  })
);

const BlockFeedInfo = ({
  deploy,
  getBlockPath,
}: {
  deploy: Deploy;
  getBlockPath: (hash: string) => string;
}) => (
  <FlexRow itemsSpacing={8} align={'center'}>
    <BodyText scale={'xs'} lineHeight={'xs'} size={3} noWrap variation={'darkGray'}>
      Block:
    </BodyText>
    <BodyText scale={'xs'} lineHeight={'xs'} size={3} monotype>
      {deploy.blockHash == null ? (
        'N/A'
      ) : (
        <Link
          href={getBlockPath(deploy.blockHash)}
          ariaDescription={'Link to block details'}
          color={'primaryBlue'}
        >
          {formatNumber(deploy.blockHeight)}
        </Link>
      )}
    </BodyText>
    <BodyText scale={'xs'} lineHeight={'xs'} size={3} noWrap>
      ·
    </BodyText>
    <BodyText scale={'xs'} lineHeight={'xs'} size={3} noWrap variation={'darkGray'}>
      {formatTimestampAge(deploy.timestamp)}
    </BodyText>
  </FlexRow>
);

interface ActivityFeedItemProps {
  deploy: Deploy;
  loading: boolean;
  actionIdentificationHashes: ActionIdentificationHashesType;
  getAccountInfo: <T = AccountInfoResult>(
    publicKey: string
  ) => T | null | undefined;
  getNftPath: (collectionHash: string, nftId: string) => string;
  getAccountPath: (publicKey: string) => string;
  getDeployPath: (hash: string) => string;
  getBlockPath: (hash: string) => string;
  getSearchPath: (hash: string) => string;
  getContractPackagePath: (hash: string) => string;
  getContractInfoByHash: (
    contractHash: string
  ) => ContractResult | null | undefined;
  getContractPackageInfoByHash?: (
    contractPackageHash: string
  ) => DeployContractPackageResult | null | undefined;
  formatCurrency?: (
      value:  number | string | null,
      precision?: number) => string | null;
  i18n?: TFunction;
}

export const ActivityFeedItem = ({
  deploy,
  loading,
  actionIdentificationHashes,
  getAccountInfo,
  getContractPackageInfoByHash,
  getContractInfoByHash,
  getAccountPath,
  getContractPackagePath,
  getNftPath,
  getBlockPath,
  getDeployPath,
                                   getSearchPath,
                                   formatCurrency,
  i18n = (hash) => hash,
}: ActivityFeedItemProps) => {
  const {
    callerPublicKey,
    callerHash,
    deployHash,
    paymentAmount,
    refundAmount,
    callerCsprName,
  } = deploy;

  const accountInfo = getAccountInfo<AccountInfoResult>(
    callerPublicKey || callerHash
  );

  const accountInfoDetails = deriveAccountInfo(
    accountInfo?.account_info || accountInfo?.centralized_account_info
  );

  const logo = accountInfoDetails && accountInfoDetails?.logo;
  const name = accountInfoDetails?.name;
  const csprName = accountInfo?.cspr_name || deploy.callerCsprName;

  const keyTooltipCaption = isValidPublicKey(callerPublicKey)
    ? i18n('Public Key')
    : i18n('Account hash');

  const chargedAmount = Big(paymentAmount || '0')
    .minus(refundAmount || '0')
    .toString();

  const onAbove = (
    <DesktopFeedItemContainer itemsSpacing={12}>
      <CommonDataContainer>
        <FlexRow align={'center'}>
          <DeployStatus deployResult={deploy} size={DeployStatusSize.Small} />
          <Tooltip scale={'xs'} lineHeight={'xs'} tooltipContent={deployHash}>
            <BodyText size={3} scale={'sm'} monotype>
              <Link
                  href={getDeployPath(deploy.deployHash)}
                  ariaDescription={'Link to deploy details'}
                  color={'primaryBlue'}
              >
                {formatHash(deployHash, HashLength.TINY)}
              </Link>
            </BodyText>
          </Tooltip>
        </FlexRow>
        <FlexRow justify={'flex-end'} itemsSpacing={8} align={'baseline'}>
          <BodyText scale={'xs'} lineHeight={'xs'} size={3} noWrap variation={'darkGray'}>
            {formatTimestampAge(deploy.timestamp)}
          </BodyText>
          <BodyText scale={'xs'} lineHeight={'xs'} size={3} noWrap>
            ·
          </BodyText>
          <BodyText scale={'xs'} lineHeight={'xs'} size={3} noWrap variation={'darkGray'}>
            {i18n('Block:')}
          </BodyText>
          <BodyText size={3} monotype>
            {deploy.blockHash == null ? (
              'N/A'
            ) : (
              <Link
                href={getBlockPath(deploy.blockHash)}
                ariaDescription={'Link to block details'}
                color={'primaryBlue'}
              >
                {formatNumber(deploy.blockHeight)}
              </Link>
            )}
          </BodyText>
          <BodyText scale={'xs'} lineHeight={'xs'} size={3} noWrap>
            ·
          </BodyText>

          <FlexRow itemsSpacing={4} align={'baseline'}>
            <BodyText scale={'xs'} lineHeight={'xs'} size={3} variation={'darkGray'}>
              {i18n('Charge:')}
            </BodyText>
            <BodyText scale={'xs'} lineHeight={'xs'} size={3} monotype noWrap>
              <CsprAmount
                motes={chargedAmount}
                precisionCase={PrecisionCase.deployCost}
              />
            </BodyText>
          </FlexRow>
        </FlexRow>
      </CommonDataContainer>

      <FlexRow itemsSpacing={12}>
        {logo ? (
          <Avatar src={logo} loading={loading} alt={'Account logo'} />
        ) : (
          <Avatar hash={callerPublicKey || callerHash} loading={loading} />
        )}
        <StyledFlexColumn itemsSpacing={12}>
          <FlexRow justify={'space-between'}>
            <FlexRow itemsSpacing={8}>
              <TooltipWithExtendedInfo
                extendedLine={{ title: csprName, caption: i18n('CSPR.name') }}
                tooltipCaption={keyTooltipCaption}
                hash={callerPublicKey || callerHash}
              >
                <FlexColumn>
                  <BodyText lineHeight={'xs'} size={3} scale="sm" monotype={!csprName}>
                    <Link
                        href={getAccountPath(callerPublicKey)}
                        ariaDescription={`Link to Account page`}
                        color={'primaryBlue'}
                    >
                      {csprName || formatHash(callerPublicKey, HashLength.TINY)}
                    </Link>
                  </BodyText>
                </FlexColumn>
              </TooltipWithExtendedInfo>
              <FlexRow>
                <TruncateBox size={5}>
                  <BodyText size={3} variation="darkGray" noWrap>
                    {name}
                  </BodyText>
                </TruncateBox>
              </FlexRow>
            </FlexRow>
          </FlexRow>
          <FlexRow>
            <FlexRow itemsSpacing={8}>
              {isWASMProxyTransaction(deploy.executionTypeId) && (
                <WasmProxyBadge lineHeight={'xxs'} i18n={i18n} />
              )}
              <BodyText size={3} scale={'sm'} lineHeight={'xs'}>
                <WrappedContainer>
                  <DeployActionRow
                    deploy={deploy}
                    loading={loading}
                    actionIdentificationHashes={actionIdentificationHashes}
                    getAccountInfo={getAccountInfo}
                    getContractInfoByHash={getContractInfoByHash}
                    getContractPackageInfoByHash={getContractPackageInfoByHash}
                    getAccountPath={getAccountPath}
                    getContractPackagePath={getContractPackagePath}
                    getNftPath={getNftPath}
                    getSearchPath={getSearchPath}
                    formatCurrency={formatCurrency}
                    i18n={i18n}
                  />
                </WrappedContainer>
              </BodyText>
            </FlexRow>
          </FlexRow>
          <DeployResultRow
            deploy={deploy}
            loading={loading}
            actionIdentificationHashes={actionIdentificationHashes}
            variation={ResultRowVariation.gray}
            getAccountInfo={getAccountInfo}
            getContractPackageInfoByHash={getContractPackageInfoByHash}
            getAccountPath={getAccountPath}
            getContractPackagePath={getContractPackagePath}
            getNftPath={getNftPath}
            getSearchPath={getSearchPath}
            formatCurrency={formatCurrency}
            i18n={i18n}
            shouldCollapse
          />
        </StyledFlexColumn>
      </FlexRow>
    </DesktopFeedItemContainer>
  );

  const onMobile = (
    <MobileFeedItemContainer>
      <FlexRow justify={'space-between'}>
        <FlexRow align={'center'}>
          <DeployStatus deployResult={deploy} size={DeployStatusSize.Small} />
          <Tooltip tooltipContent={deployHash} scale={'xs'} lineHeight={'xs'}>
            <BodyText scale={'xs'} lineHeight={'xs'} size={3} monotype>
              <Link
                  href={getDeployPath(deploy.deployHash)}
                  ariaDescription={'Link to deploy details'}
                  color={'primaryBlue'}
              >
                {formatHash(deployHash, HashLength.TINY)}
              </Link>
            </BodyText>
          </Tooltip>
        </FlexRow>
        <FlexRow itemsSpacing={4} align={'baseline'}>
          <BodyText scale={'xs'} lineHeight={'xs'} size={3} variation={'darkGray'}>
            {i18n('Charge:')}
          </BodyText>
          <BodyText scale={'xs'} lineHeight={'xs'} size={3} monotype noWrap>
            <CsprAmount
              motes={chargedAmount}
              precisionCase={PrecisionCase.deployCost}
            />
          </BodyText>
        </FlexRow>
      </FlexRow>
      <FlexColumn itemsSpacing={12}>
        <Address
            logo={logo}
            name={name}
            hash={callerPublicKey || callerHash}
            csprName={callerCsprName || csprName}
            loading={loading}
            navigateToPath={getAccountPath(callerPublicKey || callerHash)}
            avatarSize={'small'}
            hashFontSize={'sm'}
            minifiedCopyNotification
        />

        <FlexRow itemsSpacing={8}>
          {isWASMProxyTransaction(deploy.executionTypeId) && (
            <WasmProxyBadge lineHeight={'xxs'} i18n={i18n}/>
          )}
          <BodyText size={3} scale={'sm'} lineHeight={'xs'}>
            <WrappedContainer>
              <DeployActionRow
                deploy={deploy}
                loading={loading}
                actionIdentificationHashes={actionIdentificationHashes}
                getAccountInfo={getAccountInfo}
                getContractInfoByHash={getContractInfoByHash}
                getContractPackageInfoByHash={getContractPackageInfoByHash}
                getAccountPath={getAccountPath}
                getSearchPath={getSearchPath}
                getContractPackagePath={getContractPackagePath}
                getNftPath={getNftPath}
                formatCurrency={formatCurrency}
                i18n={i18n}
              />
            </WrappedContainer>
          </BodyText>
        </FlexRow>
      </FlexColumn>
      <FlexColumn itemsSpacing={16}>
        <BlockFeedInfo deploy={deploy} getBlockPath={getBlockPath} />
        <DeployResultRow
          deploy={deploy}
          loading={loading}
          variation={ResultRowVariation.gray}
          actionIdentificationHashes={actionIdentificationHashes}
          getAccountInfo={getAccountInfo}
          getContractPackageInfoByHash={getContractPackageInfoByHash}
          getAccountPath={getAccountPath}
          getContractPackagePath={getContractPackagePath}
          getNftPath={getNftPath}
          getSearchPath={getSearchPath}
          formatCurrency={formatCurrency}
          i18n={i18n}
          shouldCollapse
        />
      </FlexColumn>
    </MobileFeedItemContainer>
  );
  const responsiveFeedItem = useMatchMedia<any>(
    [onMobile, onAbove, onAbove, onAbove],
    [deploy, accountInfo]
  );

  return <StyledPageTile>{responsiveFeedItem}</StyledPageTile>;
};
