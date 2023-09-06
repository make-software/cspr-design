import React from 'react';
import {
  Tooltip as ReakitTooltip,
  TooltipReference,
  useTooltipState,
} from 'reakit/Tooltip';
import styled from 'styled-components';
import { BaseProps } from '../../types';
import BodyText from '../body-text/body-text';
import CaptionText from '../caption-text/caption-text';
import FlexColumn from '../flex-column/flex-column';
import {matchSize} from "../../utils/match-size";

type Ref = HTMLDivElement;

type StyledReactTooltipProps = {
    lineHeight?: 'xs' | 'sm';
    scale?: 'xs' | 'sm';
    paddingScale?: 1 | 2;
}

export interface TooltipProps extends BaseProps {
  title?: JSX.Element | string | null;
  caption?: string | null;
  children?: React.ReactElement<any> & any;
  monotype?: boolean;
  limitWidth?: boolean;
}
const StyledReactTooltip = styled(ReakitTooltip)<StyledReactTooltipProps>(({ theme, lineHeight = 'sm', scale = 'sm', paddingScale = 2 }) => ({
  zIndex: theme.zIndex.tooltip,
  color: theme.styleguideColors.contentPrimary,
  backgroundColor: theme.styleguideColors.backgroundPrimary,
  borderRadius: theme.borderRadius.base,
  padding: theme.padding[paddingScale],
  boxShadow: theme.boxShadow.tooltip,

  transition: 'opacity 250ms ease-in-out',
  opacity: 0,
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
  '&[data-enter]': {
    opacity: 1,
  },
}));

export const Tooltip = React.forwardRef<Ref, TooltipProps & StyledReactTooltipProps>(
  ({ children, limitWidth, title, caption, monotype, lineHeight = 'sm', scale = 'sm', ...props }, ref) => {
    const tooltip = useTooltipState({ animated: 250 });

    if (children == null) {
      return null;
    }

    if (title == null) {
      return <>{children}</>;
    }

    return (
      <>
        <TooltipReference {...tooltip} ref={children.ref} {...children.props}>
          {(referenceProps) => React.cloneElement(children, referenceProps)}
        </TooltipReference>
        <StyledReactTooltip {...tooltip} {...props}>
          <div style={{ maxWidth: limitWidth ? '500px' : undefined }}>
            <FlexColumn>
              <CaptionText size={2} variation="gray">
                {caption}
              </CaptionText>
              <BodyText size={3} monotype={monotype} lineHeight={lineHeight} scale={scale}>
                {title}
              </BodyText>
            </FlexColumn>
          </div>
        </StyledReactTooltip>
      </>
    );
  }
);

export default Tooltip;
