import React from 'react';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import { deriveAccountInfo } from '../../../utils/account';
import { deriveUpdatedAssociatedKey } from '../utils/deploy-action-helpers';
import { DataResponse, Deploy, GetDeployResult } from '../../../types/types';
import { deriveSplitDataFromNamedKeyValue } from '../../../utils/named-key';
import FlexRow from '../../flex-row/flex-row';
import BodyText from '../../body-text/body-text';
import { ContractIdentifier } from '../../contract-identifier/contract-identifier';
import { HashFontSize } from '../../../utils/formatters';
import Address from '../../address/address';

interface DeployAssociatedKeysActionProps {
  deploy: Deploy;
  deployRawData: DataResponse<GetDeployResult> | null;
  renderAsResultAction?: boolean;
}

const DeployActionAssociatedKeys = ({
  deploy,
  deployRawData,
  renderAsResultAction = false,
}: DeployAssociatedKeysActionProps) => {
  const { contractPackage } = deploy;

  const updatedMasterKey = deriveUpdatedAssociatedKey(deployRawData?.data);
  const { hash } = deriveSplitDataFromNamedKeyValue(updatedMasterKey || '');

  const {
    getAccountInfo,
    getPublicKeyAccountHash,
    getContractPackagePath,
    getAccountPath,
  } = useDeployActionDataContext();
  const publicKey = getPublicKeyAccountHash(hash);
  const accountInfo = getAccountInfo(hash);
  const accountInfoData = deriveAccountInfo(
    accountInfo?.account_info || accountInfo?.centralized_account_info,
  );
  const logo = accountInfoData?.logo;
  const name = accountInfo?.name;
  const csprName = accountInfo?.cspr_name;

  const deployActionText = renderAsResultAction
    ? 'Updated account'
    : 'Update account';

  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText size={3} monotype variation={'black'}>
        {deployActionText}
      </BodyText>{' '}
      {(publicKey || !!hash) && (
        <Address
          logo={logo}
          name={name}
          hash={publicKey || hash}
          csprName={csprName}
          loading={!hash}
          navigateToPath={getAccountPath(publicKey || hash)}
          avatarSize={'small'}
          hashFontSize={'sm'}
          minifiedCopyNotification
        />
      )}
      {!renderAsResultAction && (
        <FlexRow itemsSpacing={8} align={'center'}>
          <BodyText size={3} variation={'darkGray'}>
            with
          </BodyText>
          <ContractIdentifier
            hash={contractPackage.contract_package_hash}
            contractPackage={contractPackage}
            hashFontSize={HashFontSize.big}
            avatarSize={'small'}
            getContractPackagePath={getContractPackagePath}
          />
        </FlexRow>
      )}
    </FlexRow>
  );
};
export default DeployActionAssociatedKeys;
