import React from 'react';
import { Cep18ActionRow } from './Cep18ActionRow';
import {FTActionTypeEnum} from "../../../types/FTToken";

const ftResultActionNameMap = {
  [FTActionTypeEnum.Approve]: 'Granted transfer rights',
  [FTActionTypeEnum.Transfer]: 'Transferred',
  [FTActionTypeEnum.Burn]: 'Burned',
  [FTActionTypeEnum.Mint]: 'Minted',
};

const ftResultActionSenderPrefixesMap = {
  [FTActionTypeEnum.Transfer]: 'from',
  [FTActionTypeEnum.Approve]: 'to',
  [FTActionTypeEnum.Burn]: 'owned by',
};

export const DeployResultCep18 = ({ ftAction }) => {
  const actionName = ftResultActionNameMap[ftAction.ft_action_type_id];
  const prefix =
    ftAction.ft_action_type_id === FTActionTypeEnum.Approve ? 'for' : null;
  const senderPrefix =
    ftResultActionSenderPrefixesMap[ftAction.ft_action_type_id];

  return (
    <Cep18ActionRow
      {...ftAction}
      contractPackage={ftAction.contract_package}
      actionName={actionName}
      prefix={prefix}
      senderPrefix={senderPrefix}
      from_hash={
        ftAction.ft_action_type_id === FTActionTypeEnum.Approve
          ? null
          : ftAction.from_hash
      }
    />
  );
};
