import React from 'react';
import DeployActionDefault from './DeployActionDefault';
import { Cep18ActionRow } from './Cep18ActionRow';
import { useDeployActionDataContext } from '../services/deploy-action-context';
import {Deploy} from "../../../types/types";
import {
  prepareActionMessageDataForDeployDetails,
  prepareFtActionMessageDataForDeployDetails
} from "../utils/prepare-action-messages";

interface DeployActionCep18Props {
  deploy: Deploy;
}

export const DeployActionCep18 = ({ deploy }: DeployActionCep18Props) => {
  const { getPublicKeyAccountHash, i18n } = useDeployActionDataContext();
  const message = prepareFtActionMessageDataForDeployDetails(
    deploy,
    getPublicKeyAccountHash,
    i18n
  );

  if (!message) {
    return <DeployActionDefault deploy={deploy} />;
  }

  const { amount, actionName, contractPrefix, account1, prefix1, account2 } =
    message;

  return (
    <Cep18ActionRow
      amount={amount}
      contractPackage={deploy.contractPackage}
      actionName={actionName}
      prefix={contractPrefix}
      senderPrefix={prefix1}
      to_hash={account2?.hash}
      to_public_key={account2?.publicKey}
      to_type={account2?.hashType}
      from_type={account1?.hashType}
      from_hash={account1?.hash}
      from_public_key={account1?.publicKey}
    />
  );
};
