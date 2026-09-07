import React from 'react';
import {
  Tooltip as AriakitTooltip,
  TooltipAnchor,
  useTooltipStore,
} from '@ariakit/react/tooltip';
import styled from 'styled-components';
import { BaseProps } from '../../types';
import BodyText from '../body-text/body-text';
import CaptionText from '../caption-text/caption-text';
import FlexColumn from '../flex-column/flex-column';
import { matchSize } from '../../utils/match-size';

type Ref = HTMLDivElement;

type StyledReactTooltipProps = {
  lineHeight?: 'xs' | 'sm';
  scale?: 'xs' | 'sm';
  paddingScale?: 1 | 2;
  padding?: string;
};

export interface TooltipProps extends BaseProps {
  tooltipContent?: JSX.Element | string | null;
  caption?: string | null;
  additionalBlock?: React.ReactElement<any> & any;
  children?: React.ReactElement<any> & any;
  monotype?: boolean;
  limitWidth?: boolean | string;
}

const StyledReactTooltip = styled(
    AriakitTooltip,
).withConfig<StyledReactTooltipProps>({
    shouldForwardProp: (prop) => prop !== 'paddingScale',
})(({ theme, lineHeight = 'sm', scale = 'sm', paddingScale = 2, padding }) => ({
    zIndex: theme.zIndex.tooltip,
    color: theme.styleguideColors.contentPrimary,
    backgroundColor: theme.styleguideColors.backgroundPrimary,
    borderRadius: theme.borderRadius.base,
    padding: padding || theme.padding[paddingScale],
    boxShadow: theme.boxShadow.tooltip,

    transition: 'opacity 250ms ease-in-out',
    opacity: 0,
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
    '&[data-enter]': {
      opacity: 1,
    },
  }),
);

export const Tooltip = React.forwardRef<
  Ref,
  TooltipProps & StyledReactTooltipProps
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
      padding,
      ...props
    },
    ref,
  ) => {
    // Ariakit derives the animation lifetime from the existing CSS transition.
    const tooltip = useTooltipStore({ showTimeout: 0 });
    const generatedId = React.useId();
    const tooltipId = props.id || generatedId;
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

    return (
      <>
        <TooltipAnchor
          store={tooltip}
          render={React.cloneElement(children, {
            // Modern Ariakit tooltips are visual-only by default. Preserve the
            // Reakit description contract without replacing the child's name.
            'aria-describedby': [children.props['aria-describedby'], tooltipId]
              .filter(Boolean)
              .join(' '),
          })}
        />
        <StyledReactTooltip paddingScale={paddingScale} padding={padding} store={tooltip} ref={ref} {...props} id={tooltipId}>
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
        </StyledReactTooltip>
      </>
    );
  },
);

export default Tooltip;
