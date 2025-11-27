import React from 'react';
import { PrecisionCase } from '../../../utils/currency';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import {
  AccountInfoResult,
  DeployContractPackageResult,
  TransactorHashType,
} from '../../../types/types';
import FlexRow from '../../flex-row/flex-row';
import BodyText from '../../body-text/body-text';
import { HashFontSize } from '../../../utils/formatters';
import { ContractIdentifier } from '../../contract-identifier/contract-identifier';
import Cep18FormattedAmount from '../../cep18-formatted-amount/cep18-formatted-amount';
import TransactorInfo from '../../transactor-info/transactor-info';

interface Cep18ActionRowProps {
  actionName: string | undefined;
  prefix?: string | null;
  senderPrefix?: string | null;
  amount?: string;
  contractPackage: DeployContractPackageResult;
  from_hash?: string;
  from_public_key?: string | null;
  from_type?: TransactorHashType;
  to_hash?: string;
  to_public_key?: string | null;
  to_type?: TransactorHashType;
}

export const Cep18ActionRow = ({
  amount,
  contractPackage,
  from_public_key,
  from_hash,
  from_type,
  to_hash,
  to_type,
  to_public_key,
  actionName,
  prefix,
  senderPrefix,
}: Cep18ActionRowProps) => {
  const {
    getAccountInfo,
    getAccountPath,
    getContractPackagePath,
    getContractPackageInfoByHash,
  } = useDeployActionDataContext();
  const fromAccountInfo = getAccountInfo<AccountInfoResult>(
    from_public_key || from_hash || '',
  );
  const toAccountInfo = getAccountInfo<AccountInfoResult>(
    to_public_key || to_hash || '',
  );

  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {actionName}
      </BodyText>
      {prefix && (
        <BodyText size={3} noWrap variation={'darkGray'}>
          {prefix}
        </BodyText>
      )}
      {amount && (
        <BodyText size={3} monotype variation={'black'}>
          <Cep18FormattedAmount
            amount={amount}
            precisionCase={PrecisionCase.deployCost}
            contractPackage={contractPackage}
          />
        </BodyText>
      )}
      <FlexRow align={'center'} itemsSpacing={2}>
        <BodyText size={3} noWrap variation={'darkGray'}>
          (
        </BodyText>
        <ContractIdentifier
          hash={contractPackage?.contract_package_hash}
          avatarSize={'small'}
          hashFontSize={HashFontSize.big}
          contractPackage={contractPackage}
          getContractPackagePath={getContractPackagePath}
          hideContractType
        />
        <BodyText size={3} noWrap variation={'darkGray'}>
          ) token(s)
        </BodyText>
      </FlexRow>

      {from_hash && (
        <>
          <BodyText size={3} noWrap variation={'darkGray'}>
            {senderPrefix}
          </BodyText>
          <TransactorInfo
            type={from_type}
            accountInfo={
              fromAccountInfo?.account_info ||
              fromAccountInfo?.centralized_account_info
            }
            contractPackage={getContractPackageInfoByHash(from_hash)}
            csprName={fromAccountInfo?.cspr_name}
            publicKey={from_public_key}
            hashFontSize={'sm'}
            avatarSize="small"
            hash={from_hash}
            loading={false}
            getContractPackagePath={getContractPackagePath}
            getAccountPath={getAccountPath}
          />
        </>
      )}
      {to_hash && (
        <>
          <BodyText size={3} noWrap variation={'darkGray'}>
            to
          </BodyText>
          <TransactorInfo
            type={to_type}
            accountInfo={
              toAccountInfo?.account_info ||
              toAccountInfo?.centralized_account_info
            }
            contractPackage={getContractPackageInfoByHash(to_hash)}
            csprName={toAccountInfo?.cspr_name}
            publicKey={to_public_key}
            hashFontSize={'sm'}
            avatarSize="small"
            hash={to_hash}
            loading={false}
            getContractPackagePath={getContractPackagePath}
            getAccountPath={getAccountPath}
          />
        </>
      )}
    </FlexRow>
  );
};
