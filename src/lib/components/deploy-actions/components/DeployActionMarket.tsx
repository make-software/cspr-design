import React from 'react';
import ContractIcon from '../../../components/contract-icon/contract-icon';
import { deriveAccountInfo } from '../../../utils/account.tsx';
import CsprAmountWithFiat from '../../cspr-amount-with-fiat/cspr-amount-with-fiat';
import { NftCollectionIdentifier } from './NftCollectionIdentifier';
import { NftTokenIds } from './NftTokenIds';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import { CsprMarketEntryPoint } from '../../../types/NFTToken';
import { isNonNullable } from '../../../utils/guards';
import { Deploy, DeployContractPackageResult } from '../../../types/types';
import FlexRow from '../../flex-row/flex-row';
import BodyText from '../../body-text/body-text';
import Link from '../../link/link';
import { guardedDeriveSplitDataFromArguments } from '../../../utils/deploy-args';
import Address from '../../address/address';
import { CLTypeUInt256, CLValueParser } from 'casper-js-sdk';

const marketActionNameMap = {
  [CsprMarketEntryPoint.delist_token]: 'Delist',
  [CsprMarketEntryPoint.list_token]: 'List',
  [CsprMarketEntryPoint.accept_offer]: 'Accept offer',
  [CsprMarketEntryPoint.cancel_offer]: 'Cancel offer',
  [CsprMarketEntryPoint.make_offer]: 'Make offer',
  [CsprMarketEntryPoint.buy_token]: 'Buy token',
};

const parseUInt256Bytes = (value: Array<any> | string): string | null => {
  if (!Array.isArray(value)) return value;

  try {
    const { result } = CLValueParser.fromBytesByType(
      Uint8Array.from(value),
      CLTypeUInt256,
    );
    return result.toString();
  } catch (e) {
    console.error(
      'Failed to parse UInt256 bytes. Parsing failed and this likely indicates an invalid token key value',
      e,
    );
    return null;
  }
};

const getNftTokenIdsFromArguments = (args) => {
  const tokensParsed = args.tokens?.parsed;
  const tokenIdParsed = args.token_id?.parsed;

  if (!tokensParsed && !tokenIdParsed) {
    return null;
  }

  const normalizeToken = (token: { key: string | any[] } | string) => {
    if (typeof token === 'string') return token;
    if (Array.isArray(token?.key)) return parseUInt256Bytes(token.key);
    return token?.key;
  };

  const tokens: (string | null)[] = Array.isArray(tokensParsed)
    ? tokensParsed.map(normalizeToken)
    : [];

  const tokenId = parseUInt256Bytes(tokenIdParsed);

  const ids = [...tokens, tokenId].filter(isNonNullable);

  return [...new Set(ids)];
};

const MarketContractIdentifier = ({
  contractPackage,
  path,
}: {
  contractPackage: DeployContractPackageResult;
  path: string;
}) => {
  const {
    latest_version_contract_type_id,
    icon_url,
    contract_package_hash,
    name,
  } = contractPackage;
  return (
    <FlexRow itemsSpacing={4} align={'center'}>
      <ContractIcon
        contractTypeId={latest_version_contract_type_id}
        src={icon_url}
        loading={!contractPackage}
        size="small"
      />
      <BodyText size={3} variation={'darkGray'} noWrap scale={'sm'}>
        {contract_package_hash && (
          <Link
            href={path}
            aria-description={'Link to contract package details'}
            color={'primaryBlue'}
          >
            {name}
          </Link>
        )}
      </BodyText>
    </FlexRow>
  );
};

const OfferMarketAction = ({
  deploy,
  collectionHash,
  nftTokenIds,
}: {
  deploy: Deploy;
  collectionHash: string;
  nftTokenIds: string[] | null;
}) => {
  const {
    amount,
    entryPoint,
    args,
    timeTransactionCurrencyRate,
    contractPackage,
  } = deploy;

  const offererHash = guardedDeriveSplitDataFromArguments(
    args.offerer,
    'Account',
  );

  const {
    getAccountInfo,
    getPublicKeyAccountHash,
    getContractPackageInfoByHash,
    csprLiveDomainPath,
  } = useDeployActionDataContext();

  const accountInfo = offererHash && getAccountInfo(offererHash?.hash);
  const publicKey = offererHash && getPublicKeyAccountHash(offererHash?.hash);
  const accountInfoDetails = deriveAccountInfo(
    accountInfo?.account_info || accountInfo?.centralized_account_info,
  );
  const logo = accountInfoDetails && accountInfoDetails.logo;
  const name = accountInfoDetails?.name;
  const csprName = accountInfo?.cspr_name;

  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {marketActionNameMap[entryPoint?.name || '']}
      </BodyText>
      {amount && (
        <>
          <BodyText size={3} variation="darkGray">
            of
          </BodyText>
          <CsprAmountWithFiat
            amount={amount}
            rate={timeTransactionCurrencyRate}
          />
        </>
      )}
      {collectionHash && (
        <>
          <BodyText size={3} variation="darkGray">
            for
          </BodyText>
          <NftCollectionIdentifier
            path={`${csprLiveDomainPath}/contract-package/${collectionHash}`}
            contractPackage={getContractPackageInfoByHash(collectionHash)}
          />
        </>
      )}
      <NftTokenIds
        nftTokenIds={nftTokenIds}
        collectionHash={collectionHash}
        csprLiveDomainPath={csprLiveDomainPath}
      />
      {offererHash && (
        <FlexRow itemsSpacing={6} align={'center'}>
          <BodyText size={3} variation={'darkGray'}>
            from
          </BodyText>
          <Address
            logo={logo}
            name={name}
            hash={publicKey || offererHash.hash}
            csprName={csprName ?? undefined}
            loading={!offererHash}
            navigateToPath={`${csprLiveDomainPath}/account/${publicKey || offererHash.hash}`}
            avatarSize={'small'}
            hashFontSize={'sm'}
            minifiedCopyNotification
          />
        </FlexRow>
      )}
      <BodyText size={3} variation={'darkGray'}>
        on
      </BodyText>
      <MarketContractIdentifier
        contractPackage={contractPackage}
        path={`${csprLiveDomainPath}/contract-package/${contractPackage.contract_package_hash}`}
      />
    </FlexRow>
  );
};

const ListMarketAction = ({
  deploy,
  collectionHash,
  nftTokenIds,
}: {
  deploy: Deploy;
  collectionHash: string;
  nftTokenIds: string[] | null;
}) => {
  const { entryPoint, contractPackage } = deploy;
  const { csprLiveDomainPath, getContractPackageInfoByHash } =
    useDeployActionDataContext();
  const contractIdentifierPrefix =
    entryPoint?.name === CsprMarketEntryPoint.delist_token ? 'from' : 'on';

  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {marketActionNameMap[entryPoint?.name || '']}
      </BodyText>
      {collectionHash && (
        <NftCollectionIdentifier
          path={`${csprLiveDomainPath}/contract-package/${collectionHash}`}
          contractPackage={getContractPackageInfoByHash(collectionHash)}
        />
      )}
      <NftTokenIds
        nftTokenIds={nftTokenIds}
        collectionHash={collectionHash}
        csprLiveDomainPath={csprLiveDomainPath}
      />
      <BodyText size={3} variation={'darkGray'}>
        {contractIdentifierPrefix}
      </BodyText>
      <MarketContractIdentifier
        contractPackage={contractPackage}
        path={`${csprLiveDomainPath}/contract-package/${contractPackage.contract_package_hash}`}
      />
    </FlexRow>
  );
};

const BuyTokenAction = ({
  deploy,
  collectionHash,
  nftTokenIds,
}: {
  deploy: Deploy;
  collectionHash: string;
  nftTokenIds: string[] | null;
}) => {
  const { entryPoint, contractPackage, args, timeTransactionCurrencyRate } =
    deploy;
  const { csprLiveDomainPath, getContractPackageInfoByHash } =
    useDeployActionDataContext();
  const amount = args?.amount?.parsed || (args?.amount as string);
  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {marketActionNameMap[entryPoint?.name || '']}
      </BodyText>
      {collectionHash && (
        <NftCollectionIdentifier
          contractPackage={getContractPackageInfoByHash(collectionHash)}
          path={`${csprLiveDomainPath}/contract-package/${collectionHash}`}
        />
      )}
      <NftTokenIds
        nftTokenIds={nftTokenIds}
        collectionHash={collectionHash}
        csprLiveDomainPath={csprLiveDomainPath}
      />
      <BodyText size={3} variation={'darkGray'}>
        for
      </BodyText>
      {amount && (
        <CsprAmountWithFiat
          amount={amount.toString()}
          rate={timeTransactionCurrencyRate}
        />
      )}
      <BodyText size={3} variation={'darkGray'}>
        on
      </BodyText>
      <MarketContractIdentifier
        contractPackage={contractPackage}
        path={`${csprLiveDomainPath}/contract-package/${contractPackage.contract_package_hash}`}
      />
    </FlexRow>
  );
};

const DefaultMarketAction = ({ deploy }: { deploy: Deploy }) => {
  const { entryPoint, contractPackage } = deploy;
  const { csprLiveDomainPath } = useDeployActionDataContext();
  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {entryPoint?.name}
      </BodyText>
      <BodyText size={3} variation={'darkGray'}>
        with
      </BodyText>
      <MarketContractIdentifier
        contractPackage={contractPackage}
        path={`${csprLiveDomainPath}/contract-package/${contractPackage.contract_package_hash}`}
      />
    </FlexRow>
  );
};

const DeployActionMarket = ({ deploy }: { deploy: Deploy }) => {
  const { entryPoint, args } = deploy;

  const entryPointName = entryPoint?.name || '';

  const collectionHash = args.collection?.parsed
    ? guardedDeriveSplitDataFromArguments(args.collection, 'Hash')?.hash
    : args.collection;

  const isOfferAction =
    entryPointName === CsprMarketEntryPoint.accept_offer ||
    entryPointName === CsprMarketEntryPoint.make_offer ||
    entryPointName === CsprMarketEntryPoint.cancel_offer;

  const isListAction =
    entryPointName === CsprMarketEntryPoint.delist_token ||
    entryPointName === CsprMarketEntryPoint.list_token;

  const isBuyAction = entryPointName === CsprMarketEntryPoint.buy_token;

  const nftTokenIds = getNftTokenIdsFromArguments(deploy.args);

  if (isOfferAction && collectionHash) {
    return (
      <OfferMarketAction
        deploy={deploy}
        collectionHash={collectionHash}
        nftTokenIds={nftTokenIds}
      />
    );
  }

  if (isListAction && collectionHash) {
    return (
      <ListMarketAction
        deploy={deploy}
        collectionHash={collectionHash}
        nftTokenIds={nftTokenIds}
      />
    );
  }

  if (isBuyAction && collectionHash) {
    return (
      <BuyTokenAction
        deploy={deploy}
        collectionHash={collectionHash}
        nftTokenIds={nftTokenIds}
      />
    );
  }

  return <DefaultMarketAction deploy={deploy} />;
};

export default DeployActionMarket;
