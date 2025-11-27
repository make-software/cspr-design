import React from 'react';
import styled from 'styled-components';
import {Deploy, DeployResult} from "../../types/types";
import Tooltip from "../tooltip/tooltip";
import SvgIcon from "../svg-icon/svg-icon";
import FlexRow from "../flex-row/flex-row";
import BodyText from "../body-text/body-text";
import SuccessIcon from '../../assets/icons/ic-success.svg';
import ClockIcon from '../../assets/icons/ic-clock.svg';
import ErrorIcon from '../../assets/icons/ic-error.svg';
import CrossIcon from '../../assets/icons/ic-cross.svg';

export enum DeployStatusSize {
  Small = 14,
  Medium = 16,
}

export enum Status {
  Success = 'success',
  Processed = 'processed',
  Error = 'error',
  /** @deprecated Became 'Processed' */
  Executed = 'executed',
  Pending = 'pending',
  Expired = 'expired',
}

const StatusIcons = {
  [Status.Success]: SuccessIcon,
  [Status.Pending]: ClockIcon,
  [Status.Error]: ErrorIcon,
  [Status.Expired]: CrossIcon,
};

const StatusColors = {
  [Status.Success]: 'contentGreen',
  [Status.Pending]: 'contentLightBlue',
  [Status.Error]: 'contentRed',
  [Status.Expired]: 'contentTertiary',
};

export interface DeployStatusProps {
  deployResult: DeployResult | Deploy | null | undefined;
  iconWithText?: boolean;
  size?: 14 | 16;
}

const SvgIconWrapper = styled.span<{ status: Status }>(({ theme, status }) => ({
  color: theme.styleguideColors[StatusColors[status]],
  marginRight: 8,
  display: 'flex',
  alignItems: 'center',
}));

export const getDeployStatus = (
  deployResult?: DeployResult | Deploy | null
): Status => {
  if (
    deployResult &&
    deployResult?.status &&
    deployResult?.status !== Status.Processed &&
    deployResult?.status !== Status.Executed
  ) {
    return deployResult?.status as Status;
  }

  if (deployResult?.errorMessage) {
    return Status.Error;
  }

  return Status.Success;
};

export const DeployStatus = ({
  deployResult,
  iconWithText,
  size = DeployStatusSize.Medium,
    i18n: t = (hash) => hash
}: DeployStatusProps) => {

  const StatusLabel = {
    [Status.Success]: t('Success'),
    [Status.Processed]: t('Processed'),
    [Status.Error]: t('Error'),
    [Status.Executed]: t('Executed'),
    [Status.Pending]: t('Pending'),
    [Status.Expired]: t('Expired'),
  };

  const status = getDeployStatus(deployResult);
  const message = deployResult?.errorMessage || StatusLabel[status];

  if (!iconWithText) {
    return (
      <Tooltip scale={'xs'} lineHeight={'xs'} tooltipContent={message.toString()}>
        <SvgIconWrapper status={status}>
          <SvgIcon
            src={StatusIcons[status]}
            size={size}
            role={'img'}
            alt={t(`Transaction status: ${status} icon`)}
          />
        </SvgIconWrapper>
      </Tooltip>
    );
  }

  return (
    <FlexRow align="center">
      <SvgIconWrapper status={status}>
        <SvgIcon
          src={StatusIcons[status]}
          size={size}
          role={'img'}
          alt={t(`Transaction status: ${status} icon`)}
        />
      </SvgIconWrapper>
      <BodyText size={3}>{message}</BodyText>
    </FlexRow>
  );
};
