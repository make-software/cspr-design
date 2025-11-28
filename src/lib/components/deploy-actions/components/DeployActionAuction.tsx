import React from 'react';
import { AuctionManagerEntryPoint } from 'casper-js-sdk';
import { deriveAccountInfo } from '../../../utils/account.tsx';
import { useMatchMedia } from '../../../utils/match-media';
import DeployFiatAmount from './DeployFiatAmount';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import AuctionContractIcon from '../../../assets/icons/ic-auction-contract.svg';
import FlexRow from '../../flex-row/flex-row';
import Avatar from '../../avatar/avatar';
import BodyText from '../../body-text/body-text';
import Link from '../../link/link';
import { AccountInfoResult, Deploy } from '../../../types/types';
import Address from '../../address/address';

const auctionActionNameMap = {
  [AuctionManagerEntryPoint.add]: 'Add',
  [AuctionManagerEntryPoint.withdraw]: 'Withdraw',
  [AuctionManagerEntryPoint.activate]: 'Activate',
  [AuctionManagerEntryPoint.delegate]: 'Delegate',
  [AuctionManagerEntryPoint.undelegate]: 'Undelegate',
  [AuctionManagerEntryPoint.redelegate]: 'Redelegate',
};

const AuctionContractIdentifier = ({
  identifier,
  contract_package_hash,
}: {
  identifier: string;
  contract_package_hash: string | undefined;
}) => {
  const { csprLiveDomainPath } = useDeployActionDataContext();
  return (
    <FlexRow align="center" itemsSpacing={8}>
      <Avatar
        path={AuctionContractIcon}
        size={'small'}
        alt={'Auction contract logo'}
      />
      <BodyText size={3} variation="blue" monotype>
        <Link
          href={`${csprLiveDomainPath}/contract-package/${contract_package_hash}`}
          ariaDescription={'Link to contract package details'}
          color={'primaryBlue'}
        >
          {identifier}
        </Link>
      </BodyText>
    </FlexRow>
  );
};

const ValidatorAccountInfo = ({ publicKey, prefix }) => {
  const { getAccountInfo, csprLiveDomainPath } = useDeployActionDataContext();
  const avatarSize = useMatchMedia(['small', 'default'], []);

  const accountInfo = getAccountInfo<AccountInfoResult>(publicKey);
  const validatorLogo = deriveAccountInfo(
    accountInfo?.account_info || accountInfo?.centralized_account_info,
  );
  const validatorName = accountInfo?.account_info?.info?.owner?.name;

  return publicKey ? (
    <>
      <BodyText size={3} variation="darkGray">
        {prefix}
      </BodyText>
      <Address
        logo={validatorLogo && validatorLogo?.logo}
        name={validatorName}
        hash={publicKey}
        loading={!publicKey}
        navigateToPath={`${csprLiveDomainPath}/account/${publicKey}`}
        avatarSize={avatarSize}
        hashFontSize={'sm'}
        minifiedCopyNotification
      />
    </>
  ) : null;
};

const DefaultAuctionAction = ({ deploy }: { deploy: Deploy }) => (
  <FlexRow align={'center'} itemsSpacing={8}>
    <BodyText size={3} monotype variation={'black'}>
      {deploy.entryPoint?.name}
    </BodyText>
    <BodyText size={3} variation="darkGray">
      with
    </BodyText>
    <AuctionContractIdentifier
      identifier={'Auction System Contract'}
      contract_package_hash={deploy.contractPackage?.contract_package_hash}
    />
  </FlexRow>
);

const ManageAuctionBidAction = ({ deploy }: { deploy: Deploy }) => {
  const { args, timeTransactionCurrencyRate, contractPackage, entryPoint } =
    deploy;
  const amount = args.amount?.parsed as string;

  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText size={3} monotype variation={'black'}>
        {auctionActionNameMap[entryPoint?.name || '']}
      </BodyText>
      <AuctionContractIdentifier
        identifier={'Auction'}
        contract_package_hash={contractPackage?.contract_package_hash}
      />
      <BodyText size={3} variation="black" monotype>
        bid
      </BodyText>
      {amount && (
        <>
          <BodyText size={3} variation="darkGray">
            of
          </BodyText>
          <DeployFiatAmount
            amount={amount}
            rate={timeTransactionCurrencyRate}
          />
        </>
      )}
    </FlexRow>
  );
};

const DelegationAuctionAction = ({ deploy }: { deploy: Deploy }) => {
  const { timeTransactionCurrencyRate, entryPoint, args } = deploy;

  const amount = args.amount?.parsed as string;
  const initialValidatorPrefix =
    entryPoint?.name === AuctionManagerEntryPoint.delegate ? 'to' : 'from';

  return (
    <FlexRow align={'center'} gap={8}>
      <BodyText size={3} monotype variation={'black'}>
        {auctionActionNameMap[entryPoint?.name || '']}
      </BodyText>
      {amount && (
        <DeployFiatAmount amount={amount} rate={timeTransactionCurrencyRate} />
      )}
      <ValidatorAccountInfo
        publicKey={args.validator?.parsed as string}
        prefix={initialValidatorPrefix}
      />
      <ValidatorAccountInfo
        publicKey={args.new_validator?.parsed as string}
        prefix={'to'}
      />
    </FlexRow>
  );
};

const DeployActionAuction = ({ deploy }: { deploy: Deploy }) => {
  const { entryPoint } = deploy;

  const entryPointName = entryPoint?.name || '';

  const isManageAuctionBidAction =
    entryPointName === AuctionManagerEntryPoint.activate ||
    entryPointName === AuctionManagerEntryPoint.withdraw ||
    entryPointName === AuctionManagerEntryPoint.add;

  const isDelegationAction =
    entryPointName === AuctionManagerEntryPoint.delegate ||
    entryPointName === AuctionManagerEntryPoint.undelegate ||
    entryPointName === AuctionManagerEntryPoint.redelegate;

  if (isDelegationAction) {
    return <DelegationAuctionAction deploy={deploy} />;
  }

  if (isManageAuctionBidAction) {
    return <ManageAuctionBidAction deploy={deploy} />;
  }

  return <DefaultAuctionAction deploy={deploy} />;
};

export default DeployActionAuction;
