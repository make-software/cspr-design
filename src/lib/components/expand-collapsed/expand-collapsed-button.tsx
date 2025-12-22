import styled from 'styled-components';
import React, { useState } from 'react';
import BodyText from '../body-text/body-text';
import SvgIcon from '../svg-icon/svg-icon';
import ArrowDownIcon from '../../assets/icons/ic-arrow-down.svg';
import FlexRow from '../flex-row/flex-row';

const CollapsedRow = styled(FlexRow)<{ hasTopMargin?: boolean }>(({ theme, hasTopMargin }) => ({
  marginTop: hasTopMargin ? '8px' : 'unset',
  '&:hover': {
    span: {
      color: theme.styleguideColors.contentRed,
    },
    [`${SvgIcon}`]: {
      path: {
        fill: theme.styleguideColors.contentRed,
      },
    },
  },
}));

interface ExpandCollapsedButtonProps {
  expandedLabel: React.ReactNode;
  collapsedLabel: React.ReactNode;
  showArrow?: boolean;
  hasTopMargin?: boolean;
  onExpand?: (collapsed: boolean) => void;
}

export const ExpandCollapsedButton = ({
  expandedLabel,
  collapsedLabel,
  showArrow = true,
  hasTopMargin = true,
  onExpand,
}: ExpandCollapsedButtonProps) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(true);

  return (
    <CollapsedRow
      align="center"
      onClick={() => {
        setCollapsed(!isCollapsed);
        onExpand && onExpand(!isCollapsed);
      }}
      hasTopMargin={hasTopMargin}
    >
      <BodyText scale={'xs'} lineHeight={'xs'} size={3} variation="blue">
        {isCollapsed ? collapsedLabel : expandedLabel}
        {showArrow && (
          <SvgIcon
            src={ArrowDownIcon}
            alt={'Arrow icon'}
            marginLeft
            rotate={!isCollapsed}
          />
        )}
      </BodyText>
    </CollapsedRow>
  );
};

ExpandCollapsedButton.displayName = 'ExpandCollapsedButton';
export default ExpandCollapsedButton;
