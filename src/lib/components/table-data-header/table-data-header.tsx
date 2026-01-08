import React from 'react';
import styled from 'styled-components';

import { BaseProps } from '../../base-types.ts';
import BodyText from '../body-text/body-text';
import Tooltip from '../tooltip/tooltip';
import FlexRow from '../flex-row/flex-row';

export interface TableDataHeaderProps extends BaseProps {
  align?: 'left' | 'right' | 'center';
  fitContent?: boolean;
  tooltipText?: JSX.Element | string | undefined;
  icon?: JSX.Element | undefined;
  fixedWidthRem?: number;
}

const StyledTableDataHeader = styled.th<TableDataHeaderProps>(
  ({ theme, align = 'left', fitContent, fixedWidthRem }) => ({
    textAlign: align,
    height: 20,
    padding: 8,
    ':first-of-type': {
      paddingLeft: 20,
    },
    ':last-of-type': {
      paddingRight: 20,
    },
    ...(fitContent && {
      width: '1%',
    }),
    ...(fixedWidthRem && {
      width: `${fixedWidthRem}rem`,
    }),
    textTransform: 'capitalize',
  }),
);

const StyledHeaderGroup = styled.div(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export function TableDataHeader({
  children,
  tooltipText,
  icon,
  ...restProps
}: TableDataHeaderProps) {
  return (
    <StyledTableDataHeader {...restProps}>
      <StyledHeaderGroup>
        <Tooltip tooltipContent={tooltipText} limitWidth>
          <FlexRow gap={3} align={'center'}>
            <BodyText size={1} scale={'xs'}>
              {children}
            </BodyText>
            {icon}
          </FlexRow>
        </Tooltip>
      </StyledHeaderGroup>
    </StyledTableDataHeader>
  );
}

export default TableDataHeader;
