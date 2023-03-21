import React from 'react';
import styled from 'styled-components';

import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';

const Container = styled(FlexRow)<Pick<StatusMessageProps, 'status'>>(
  ({ theme, status }) => ({
    minHeight: 52,
    padding: 16,
    borderRadius: theme.borderRadius.base,
    backgroundColor:
      status === AlertStatus.Success
        ? theme.styleguideColors.fillSecondaryBlueHover
        : theme.styleguideColors.fillSecondaryRedHover,
    svg: {
      color:
        status === AlertStatus.Success
          ? theme.styleguideColors.contentLightBlue
          : theme.styleguideColors.contentRed,
    },
  })
);

export enum AlertStatus {
  Success = 'success',
  Error = 'error',
}

export interface StatusMessageProps {
  message: string | React.ReactNode;
  status: AlertStatus;
}

export const Alert = (props: StatusMessageProps) => {
  const { message, status } = props;

  const iconSrc =
    status === 'success'
      ? 'assets/icons/ic-clock.svg'
      : 'assets/icons/ic-error.svg';

  return (
    <Container status={status} align="center" itemsSpacing={8}>
      <SvgIcon src={iconSrc} />
      <BodyText size={3}>{message}</BodyText>
    </Container>
  );
};

export default Alert;
