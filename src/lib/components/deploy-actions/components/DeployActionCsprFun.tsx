import React from 'react';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import { deriveSplitDataFromNamedKeyValue } from '../../../utils/named-key';
import { HashFontSize } from '../../../utils/formatters';
import FlexRow from '../../flex-row/flex-row';
import BodyText from '../../body-text/body-text';
import { ContractIdentifier } from '../../contract-identifier/contract-identifier';

const DeployActionCsprFun = ({ deploy }) => {
  const contractHash = deploy.args.token_to_trade_contract_hash_key.parsed;
  const { hash } = deriveSplitDataFromNamedKeyValue(contractHash);
  const { getContractInfoByHash, csprLiveDomainPath } =
    useDeployActionDataContext();

  const contractInfo = getContractInfoByHash(hash);
  const contractPackageInfo = contractInfo?.contract_package;
  return (
    <FlexRow align={'center'} itemsSpacing={8}>
      <BodyText monotype size={3} wordBreak noWrap variation={'black'}>
        CSPR.fun trade
      </BodyText>

      {contractPackageInfo ? (
        <>
          <BodyText size={3} noWrap variation={'darkGray'}>
            with
          </BodyText>

          <FlexRow align={'center'} itemsSpacing={2}>
            <ContractIdentifier
              hash={contractInfo?.contract_package_hash}
              avatarSize={'small'}
              hashFontSize={HashFontSize.big}
              contractPackage={contractPackageInfo}
              hideContractIdentifier={false}
              path={`${csprLiveDomainPath}/contract-package/${contractInfo?.contract_package_hash}`}
            />
          </FlexRow>
        </>
      ) : null}
    </FlexRow>
  );
};

export default DeployActionCsprFun;
