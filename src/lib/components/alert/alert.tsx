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
  [AlertStatus.Success]: { color: 'borderPrimary', alpha: 'FF' },
  [AlertStatus.Info]: { color: 'borderPrimary', alpha: 'FF' },
  [AlertStatus.Warning]: { color: 'borderPrimary', alpha: 'FF' },
  [AlertStatus.Error]: { color: 'fillSecondaryRedHover', alpha: 'FF' },
  [AlertStatus.Pending]: { color: 'fillSecondary', alpha: 'FF' },
};

const StatusBackgroundColorsTinted = {
  [AlertStatus.Success]: { color: 'contentGreen', alpha: '1A' },
  [AlertStatus.Info]: { color: 'borderPrimary', alpha: 'FF' },
  [AlertStatus.Warning]: { color: 'contentLightYellow', alpha: 'CC' },
  [AlertStatus.Error]: { color: 'borderRed', alpha: '1A' },
  [AlertStatus.Pending]: { color: 'fillSecondary', alpha: 'FF' },
} as const;

const StatusSvgColors = {
  [AlertStatus.Success]: 'contentGreen',
  [AlertStatus.Info]: 'contentSecondary',
  [AlertStatus.Warning]: 'contentSecondary',
  [AlertStatus.Error]: 'contentRed',
  [AlertStatus.Pending]: 'contentLightBlue',
};

const Container = styled(FlexRow)<
  Pick<StatusMessageProps, 'status' | 'variant'>
>(({ theme, status, variant }) => {
  const background =
    variant === 'default'
      ? StatusBackgroundColors[status]
      : StatusBackgroundColorsTinted[status];

  const calculatedBackgroundColor = background
    ? `${theme.styleguideColors[background.color].slice(0, 7)}${background.alpha}`
    : undefined;

  return {
    minHeight: 52,
    padding: 16,
    borderRadius: theme.borderRadius.base,
    backgroundColor: calculatedBackgroundColor,
    svg: {
      color: theme.styleguideColors[StatusSvgColors[status]],
    },
  };
});

export interface StatusMessageProps {
  title?: React.ReactNode | string;
  message: React.ReactNode | string;
  status: AlertStatus;
  scale?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  lineHeight?: 'xs' | 'sm';
  /** Able to provide any existing icon or a path to it.
   *
   * NOTE: default status icons will not work in that case */
  iconSrc?: string;
  /** Able to provide any background color or a path to it from theme
   *
   * NOTE: default color will not work in that case */
  variant?: 'default' | 'filled';
}

export const Alert = (props: StatusMessageProps) => {
  const {
    message,
    title,
    status,
    scale = 'sm',
    lineHeight = 'sm',
    variant = 'default',
  } = props;

  const iconPath = props.iconSrc ? props.iconSrc : Icons[status];
  const statusAlert = (props.iconSrc ? '' : status) as AlertStatus;

  if (title) {
    return (
      <Container status={statusAlert} itemsSpacing={8} variant={variant}>
        <FlexColumn itemsSpacing={8}>
          <FlexRow align={'center'} itemsSpacing={8}>
            <SvgIcon
              src={iconPath}
              alt={`Alert icon with ${statusAlert} status`}
            />
            <BodyText
              size={1}
              lineHeight={lineHeight}
              scale={scale}
              variation={'black'}
            >
              {title}
            </BodyText>
          </FlexRow>

          <BodyText
            variation={'black'}
            size={3}
            lineHeight={lineHeight}
            scale={scale}
          >
            {message}
          </BodyText>
        </FlexColumn>
      </Container>
    );
  }

  return (
    <Container status={statusAlert} align="center" itemsSpacing={8}>
      <SvgIcon src={iconPath} />
      <BodyText
        size={3}
        lineHeight={lineHeight}
        scale={scale}
        variation={'black'}
      >
        {message}
      </BodyText>
    </Container>
  );
};

export default Alert;
