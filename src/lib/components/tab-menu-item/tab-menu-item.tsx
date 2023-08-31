import React from 'react';
import styled from 'styled-components';

import { ActivableProps } from '../../types';
import Button, { ButtonProps } from '../button/button';
import SvgIcon from '../svg-icon/svg-icon';
import FlexRow from '../flex-row/flex-row';
import {matchSize} from "../../utils/match-size";

/* eslint-disable-next-line */
export interface TabMenuItemProps extends ButtonProps, ActivableProps {
  disabled?: boolean;
  tooltip?: string;
  lineHeight?: 'xs' | 'sm';
  scale?: 'xs' | 'sm';
}

const StyledButton = styled(Button)<TabMenuItemProps>(
  ({ theme, active, disabled, lineHeight = 'sm', scale = 'sm' }) =>
    theme.withMedia({
      minWidth: [131, 140],
      padding: '6px',
      maxWidth: 'fit-content',
      height: 32,
      fontSize: matchSize(
          {
              sm: '1.3rem',
              xs: '0.8125rem',
          },
          scale
      ),
        lineHeight: matchSize(
            {
                sm: '1.5rem',
                xs: '1.25rem',
            },
            lineHeight
        ),
      fontWeight: theme.typography.fontWeight.medium,
      cursor: 'pointer',
      marginLeft: 2,
      color: theme.styleguideColors.contentBlue,
      borderRadius: 0,
      textTransform: 'capitalize',
      ':first-of-type': {
        borderRadius: '4px 0 0 4px',
      },
      ':last-of-type': {
        borderRadius: '0 4px 4px 0',
      },

      ':hover': {
        background: theme.styleguideColors.fillSecondaryBlueHover,
        color: theme.styleguideColors.contentBlue,
      },
      ':active': {
        background: theme.styleguideColors.fillSecondaryBlueClick,
        color: theme.styleguideColors.contentBlue,
      },

      ...(active && {
        cursor: 'default',
        background: theme.styleguideColors.fillPrimaryBlue,
        color: theme.styleguideColors.contentOnFill,
        ':hover': {
          background: theme.styleguideColors.fillPrimaryBlue,
        },
        ':active': {
          background: theme.styleguideColors.fillPrimaryBlue,
        },
      }),

      ...(disabled && {
        cursor: 'default',
        pointerEvents: 'none',
        color: theme.styleguideColors.contentTertiary,
      }),
    })
);

export function TabMenuItem(props: TabMenuItemProps) {
  return (
      <StyledButton color="utility" {...props}>
        <FlexRow gap={3} align={'center'}>
          {props.children}
          {props.tooltip && (
            <SvgIcon width={17} height={16} src="assets/icons/ic-info.svg" />
          )}
        </FlexRow>
      </StyledButton>
  );
}

export default TabMenuItem;
