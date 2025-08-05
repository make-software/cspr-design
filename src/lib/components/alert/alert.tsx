import React from 'react';
import styled from 'styled-components';

import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import SvgIcon from '../svg-icon/svg-icon';
import {
  ClockIcon,
  ErrorIcon,
  InfoImportantIcon,
  SuccessIcon,
  WarningIcon,
} from '../../icons-index.ts';

export enum AlertStatus {
  Success = 'success',
  Error = 'error',
  Info = 'info',
  Pending = 'pending',
  Warning = 'warning',
}

const Icons = {
  [AlertStatus.Success]: SuccessIcon,
  [AlertStatus.Info]: InfoImportantIcon,
  [AlertStatus.Pending]: ClockIcon,
  [AlertStatus.Error]: ErrorIcon,
  [AlertStatus.Warning]: WarningIcon,
};

const StatusBackgroundColors = {
  [AlertStatus.Success]: 'borderPrimary',
  [AlertStatus.Info]: 'borderPrimary',
  [AlertStatus.Warning]: 'borderPrimary',
  [AlertStatus.Error]: 'fillSecondaryRedHover',
  [AlertStatus.Pending]: 'fillSecondary',
};

const StatusSvgColors = {
  [AlertStatus.Success]: 'contentGreen',
  [AlertStatus.Info]: 'contentSecondary',
  [AlertStatus.Warning]: 'contentSecondary',
  [AlertStatus.Error]: 'contentRed',
  [AlertStatus.Pending]: 'contentLightBlue',
};

const Container = styled(FlexRow)<Pick<StatusMessageProps, 'status'>>(
  ({ theme, status }) => ({
    minHeight: 52,
    padding: 16,
    borderRadius: theme.borderRadius.base,
    backgroundColor: theme.styleguideColors[StatusBackgroundColors[status]],
    svg: {
      color: theme.styleguideColors[StatusSvgColors[status]],
    },
  }),
);

export interface StatusMessageProps {
  title?: React.ReactNode | string;
  message: React.ReactNode | string;
  status: AlertStatus;
  scale?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lineHeight?: 'xs' | 'sm';
}

export const Alert = (props: StatusMessageProps) => {
  const { message, title, status, scale = 'sm', lineHeight = 'sm' } = props;

  const iconPath = Icons[status];

  if (title) {
    return (
      <Container status={status} itemsSpacing={8}>
        <FlexColumn itemsSpacing={8}>
          <FlexRow align={'center'} itemsSpacing={8}>
            <SvgIcon src={iconPath} alt={`Alert icon with ${status} status`} />
            <BodyText
              size={1}
              lineHeight={lineHeight}
              scale={scale}
              variation={'black'}
            >
              {title}
            </BodyText>
          </FlexRow>

          <BodyText size={3} lineHeight={lineHeight} scale={scale}>
            {message}
          </BodyText>
        </FlexColumn>
      </Container>
    );
  }

  return (
    <Container status={status} align="center" itemsSpacing={8}>
      <SvgIcon src={iconPath} />
      <BodyText size={3} lineHeight={lineHeight} scale={scale}>
        {message}
      </BodyText>
    </Container>
  );
};

export default Alert;
