import React from 'react';
import styled from 'styled-components';
import FlexColumn from '../flex-column/flex-column';
import SubtitleText from '../subtitle-text/subtitle-text';
import BodyText from '../body-text/body-text';

export interface ModalContentHeaderProps {
  title: string;
  subtitle?: string;
  appName?: string;
  margin?: string;
}

const HeaderContainer = styled(FlexColumn)<{ margin?: string }>(
  ({ theme, margin }) =>
    theme.withMedia({
      margin: margin ? margin : '16px 0 16px 0',
    }),
);
export const ModalContentHeader = ({
  title,
  subtitle,
  appName,
  margin,
}: ModalContentHeaderProps) => {
  return (
    <HeaderContainer align="center" itemsSpacing={4} margin={margin}>
      <SubtitleText scale="lg" size={1} variation="black">
        {title}
      </SubtitleText>
      {(subtitle || appName) && (
        <BodyText scale="md" size={3} variation="darkGray">
          {`${subtitle && subtitle} `}
          {appName && (
            <BodyText scale="md" size={3} variation="black">
              {appName}
            </BodyText>
          )}
        </BodyText>
      )}
    </HeaderContainer>
  );
};

export default ModalContentHeader;
