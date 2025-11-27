import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Avatar from '../../../components/avatar/avatar';
import DeployFiatAmount from './DeployFiatAmount';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import {
  AccountCentralizedInfo,
  AccountInfoResult,
  DeployTransferResult,
} from '../../../types/types';
import { AccountModel, deriveAccountInfo } from '../../../utils/account';
import FlexRow from '../../flex-row/flex-row';
import BodyText from '../../body-text/body-text';
import Address from '../../address/address';
import { TableDataNamedKey } from '../../table-data-named-key/table-data-named-key';
import Link from '../../link/link';
import AuctionContractIcon from '../../../assets/icons/ic-auction-contract.svg';

interface TransferActionAccountProps {
  publicKey?: string | null;
  accountHash?: string | null;
  loading: boolean;
  purse: string;
  renderAsResultAction: boolean;
  actionPoolAccountHash?: string;
  purseAccountInfoFromTransfer?:
    | AccountInfoResult
    | AccountCentralizedInfo
    | null;
}

const TransferActionAccount = ({
  publicKey,
  accountHash,
  loading,
  purse,
  renderAsResultAction,
  actionPoolAccountHash,
  purseAccountInfoFromTransfer,
}: TransferActionAccountProps) => {
  const { getAccountInfo, getAccountPath, getSearchPath } =
    useDeployActionDataContext();

  const accountInfo = getAccountInfo<AccountInfoResult>(
    publicKey || accountHash || '',
  );
  const accountInfoDetails = deriveAccountInfo(
    accountInfo?.account_info ||
      accountInfo?.centralized_account_info ||
      purseAccountInfoFromTransfer,
  );

  const logo = accountInfoDetails && accountInfoDetails?.logo;
  const name = accountInfoDetails?.name;
  const csprName = accountInfo?.cspr_name;

  const isAuctionPoolAccount = accountHash === actionPoolAccountHash;

  if (isAuctionPoolAccount && renderAsResultAction) {
    return (
      <FlexRow itemsSpacing={8} align={'center'}>
        <Avatar
          size={'small'}
          path={AuctionContractIcon}
          loading={loading}
          alt={'Auction contract logo'}
        />
        <Link
          href={getAccountPath(actionPoolAccountHash)}
          color={'hash'}
          ariaDescription={'Link to account details'}
        >
          Auction Pool
        </Link>
      </FlexRow>
    );
  }

  return publicKey || accountHash ? (
    <Address
      logo={logo}
      name={name}
      hash={publicKey || accountHash}
      csprName={csprName}
      loading={loading}
      navigateToPath={getAccountPath(publicKey || accountHash)}
      avatarSize={'small'}
      hashFontSize={'sm'}
      minifiedCopyNotification
    />
  ) : (
    <TableDataNamedKey
      purse={purse}
      fontSize={'sm'}
      getSearchPath={getSearchPath}
    />
  );
};

interface TransferActionRowProps {
  timeTransactionCurrencyRate: number;
  transfer: DeployTransferResult;
  loading: boolean;
  actionPoolAccountHash: string | undefined;
  renderAsResultAction?: boolean;
}

const TransferActionRow = ({
  timeTransactionCurrencyRate,
  transfer,
  loading,
  actionPoolAccountHash,
  renderAsResultAction = false,
}: TransferActionRowProps) => {
  const { formatCurrency } = useDeployActionDataContext();

  const fromAccountHash = transfer.from_purse_public_key
    ? AccountModel({
        publicKeyHex: transfer.from_purse_public_key,
      }).getAccountHash()
    : '';

  if (loading) {
    return (
      <BodyText size={3}>
        <Skeleton />
      </BodyText>
    );
  }

  const deployActionText = renderAsResultAction ? 'Transferred' : 'Transfer';

  return (
    <FlexRow align={'center'} itemsSpacing={8} wrap={'nowrap'}>
      <BodyText size={3} monotype variation={'black'}>
        {deployActionText}
      </BodyText>{' '}
      <DeployFiatAmount
        amount={transfer.amount}
        rate={timeTransactionCurrencyRate}
        formatCurrency={formatCurrency}
      />
      {renderAsResultAction && (
        <>
          <BodyText size={3} variation="darkGray">
            from
          </BodyText>
          <BodyText size={3} monotype variation="black">
            <TransferActionAccount
              publicKey={transfer.from_purse_public_key}
              accountHash={
                transfer.from_purse_public_key ? fromAccountHash : null
              }
              purse={transfer.from_purse}
              purseAccountInfoFromTransfer={
                transfer.from_purse_account_info ||
                transfer.from_purse_centralized_account_info
              }
              loading={loading}
              renderAsResultAction={renderAsResultAction}
              actionPoolAccountHash={actionPoolAccountHash}
            />
          </BodyText>
        </>
      )}
      <BodyText size={3} variation="darkGray">
        to
      </BodyText>
      <BodyText size={3} monotype variation="black">
        <TransferActionAccount
          publicKey={transfer.to_purse_public_key}
          accountHash={transfer.to_account_hash}
          purse={transfer.to_purse}
          purseAccountInfoFromTransfer={
            transfer.to_purse_account_info ||
            transfer.to_purse_centralized_account_info
          }
          loading={loading}
          renderAsResultAction={renderAsResultAction}
          actionPoolAccountHash={actionPoolAccountHash}
        />
      </BodyText>
    </FlexRow>
  );
};
export default TransferActionRow;
