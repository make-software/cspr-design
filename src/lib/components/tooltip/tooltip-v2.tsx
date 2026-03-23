import React, { useId } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import styled from 'styled-components';
import { BaseProps } from '../../types';
import BodyText from '../body-text/body-text';
import CaptionText from '../caption-text/caption-text';
import FlexColumn from '../flex-column/flex-column';
import { matchSize } from '../../utils/match-size';

type StyledTooltipProps = {
  lineHeight?: 'xs' | 'sm';
  scale?: 'xs' | 'sm';
  paddingScale?: 1 | 2;
};

export interface TooltipV2Props extends BaseProps {
  tooltipContent?: JSX.Element | string | null;
  caption?: string | null;
  additionalBlock?: React.ReactElement<any> & any;
  children?: React.ReactElement<any> & any;
  monotype?: boolean;
  limitWidth?: boolean | string;
}

const StyledReactTooltip = styled(ReactTooltip).withConfig<StyledTooltipProps>({
  shouldForwardProp: (prop) =>
    !['paddingScale', 'lineHeight', 'scale'].includes(prop),
})<StyledTooltipProps>(({ theme, lineHeight = 'sm', scale = 'sm', paddingScale = 2 }) => ({
  zIndex: `${theme.zIndex.tooltip} !important`,
  color: `${theme.styleguideColors.contentPrimary} !important`,
  backgroundColor: `${theme.styleguideColors.backgroundPrimary} !important`,
  borderRadius: `${theme.borderRadius.base}px !important`,
  padding: `${theme.padding[paddingScale]} !important`,
  boxShadow: `${theme.boxShadow.tooltip} !important`,
  opacity: '1 !important',
  fontSize: matchSize(
    {
      sm: '1.3rem',
      xs: '0.8125rem',
    },
    scale,
  ),
  lineHeight: matchSize(
    {
      sm: '1.5rem',
      xs: '1.25rem',
    },
    lineHeight,
  ),
  '&.react-tooltip': {
    maxWidth: 'none',
  },
  '&.react-tooltip__place-top .react-tooltip-arrow, &.react-tooltip__place-bottom .react-tooltip-arrow, &.react-tooltip__place-left .react-tooltip-arrow, &.react-tooltip__place-right .react-tooltip-arrow': {
    display: 'none',
  },
}));

export const TooltipV2 = React.forwardRef<
  HTMLDivElement,
  TooltipV2Props & StyledTooltipProps
>(
  (
    {
      children,
      limitWidth,
      tooltipContent,
      caption,
      additionalBlock,
      monotype,
      lineHeight = 'sm',
      scale = 'sm',
      paddingScale = 2,
      ...props
    },
    _ref,
  ) => {
    const id = useId();
    const maxWidth = limitWidth
      ? typeof limitWidth === 'string'
        ? limitWidth
        : '500px'
      : undefined;

    if (children == null) {
      return null;
    }

    if (tooltipContent == null) {
      return <>{children}</>;
    }

    const trigger = React.cloneElement(children, {
      'data-tooltip-id': id,
    });

    return (
      <>
        {trigger}
        <StyledReactTooltip
          id={id}
          lineHeight={lineHeight}
          scale={scale}
          paddingScale={paddingScale}
          render={() => (
            <div style={{ maxWidth }}>
              <FlexColumn itemsSpacing={8}>
                <FlexColumn>
                  <CaptionText size={2} variation="gray">
                    {caption}
                  </CaptionText>
                  <BodyText
                    size={3}
                    monotype={monotype}
                    lineHeight={lineHeight}
                    scale={scale}
                  >
                    {tooltipContent}
                  </BodyText>
                </FlexColumn>
                {additionalBlock}
              </FlexColumn>
            </div>
          )}
          {...props}
        />
      </>
    );
  },
);

export default TooltipV2;
