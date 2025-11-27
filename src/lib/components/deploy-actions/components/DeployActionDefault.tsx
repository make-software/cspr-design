import React from 'react';
import FlexRow from '../../flex-row/flex-row';
import BodyText from '../../body-text/body-text';
import { Deploy } from '../../../types/types';
import { HashFontSize } from '../../contract-identifier/default-contract-identifier';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import { ContractIdentifier } from '../../contract-identifier/contract-identifier';

const DeployActionDefault = ({ deploy }: { deploy: Deploy }) => {
  const { getContractPackagePath } = useDeployActionDataContext();
  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        {deploy.entryPoint?.name}
      </BodyText>
      <BodyText variation={'darkGray'} size={3}>
        with
      </BodyText>
      <ContractIdentifier
        hash={deploy.contractPackage.contract_package_hash}
        contractPackage={deploy.contractPackage}
        avatarSize={'small'}
        hashFontSize={HashFontSize.big}
        getContractPackagePath={getContractPackagePath}
      />
    </FlexRow>
  );
};

export default DeployActionDefault;
