import React from 'react';
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import BodyText from '../body-text/body-text';
import SvgIcon from '../svg-icon/svg-icon';

export interface WarningMessageProps {
  iconSrc?: string;
  title: string;
  message: string | React.ReactElement;
  margin?: string;
}

const StyledWarningMessage = styled.div<{ margin?: string }>(
  ({ theme, margin }) =>
    theme.withMedia({
      padding: ['10px', '16px', '16px'],
      alignItems: 'center',
      gap: '8px',
      alignSelf: 'stretch',
      backgroundColor: theme.styleguideColors.fillSecondary,
      borderRadius: '4px',
      margin: margin ? margin : '0 0 24px 0',
    }),
);

const StyledHeaderRow = styled(FlexRow)(({ theme }) =>
  theme.withMedia({
    marginBottom: '8px',
  }),
);

const StyledHeaderText = styled(BodyText)<{ margin: string }>(({ theme }) =>
  theme.withMedia({
    marginLeft: '8px',
    lineHeight: ['18px', '1.5rem', '1.5rem'],
  }),
);

/** @deprecated Please use <Alert /> with `iconSrc` instead of it. */
export const WarningMessage = ({
  iconSrc,
  title,
  message,
  margin,
}: WarningMessageProps) => {
  return (
    <StyledWarningMessage margin={margin}>
      <StyledHeaderRow justify={'flex-start'} align={'center'}>
        {iconSrc && <SvgIcon src={iconSrc} />}
        <StyledHeaderText
          size={1}
          scale={'xs'}
          variation={'black'}
          margin={iconSrc ? '8px' : '0'}
        >
          {title}
        </StyledHeaderText>
      </StyledHeaderRow>
      <BodyText size={3} scale={'xs'} variation={'black'}>
        {message}
      </BodyText>
    </StyledWarningMessage>
  );
};

export default WarningMessage;
