import React from 'react';
import styled from 'styled-components';
import PageTile from "../page-tile/page-tile";
import FlexRow from "../flex-row/flex-row";
import SvgIcon from "../svg-icon/svg-icon";
import Link from "../link/link";
import InfoColourIcon from '../../assets/icons/ic-info-colour.svg';
import BodyText from "../body-text/body-text";

const StyledPageTile = styled(PageTile)(({ theme }) =>
  theme.withMedia({
    margin: '24px 0 0',
    padding: 0,
    maxWidth: theme.maxWidth,
  })
);

const EventNotificationContainer = styled(FlexRow)<{ withPageTile?: boolean }>(
  ({ theme, withPageTile }) =>
    theme.withMedia({
      width: '100%',
      maxWidth: theme.maxWidth,
      backgroundColor: `${theme.styleguideColors.contentYellow}1F`,
      borderRadius: '4px',
      padding: ['16px 24px', '10px 0'],
      color: withPageTile
        ? theme.styleguideColors.contentPrimary
        : theme.styleguideColors.contentYellow,
      alignItems: ['baseline', 'center'],
    })
);

const TextContainer = styled(FlexRow)(({ theme }) =>
  theme.withMedia({
    flexWrap: 'wrap',
  })
);

const StyledSvgIcon = styled(SvgIcon)(({ theme }) =>
  theme.withMedia({
    path: {
      fill: theme.styleguideColors.contentYellow,
    },
  })
);

const StyledLink = styled(Link)<{ withPageTile?: boolean }>(
  ({ theme, withPageTile }) => ({
    color: withPageTile ? theme.styleguideColors.contentBlue : '#8FA6FF',
  })
);

export interface EventNotificationBannerProps {
  text: string | undefined;
  linkText?: string;
  linkSource?: string;
  withPageTile?: boolean;
}

export const EventNotificationBanner = ({
  text,
  linkText,
  linkSource,
  withPageTile,
}: EventNotificationBannerProps) => {
  if (!text) {
    return null;
  }

  const bannerContent = (
    <EventNotificationContainer
      justify={'center'}
      itemsSpacing={8}
      withPageTile={withPageTile}
    >
      <StyledSvgIcon src={InfoColourIcon} alt={'Event notification icon'} />
      <TextContainer>
        <BodyText size={3}>
          {text}

          {linkText && linkSource && (
            <>
              {' '}
              <StyledLink
                href={linkSource}
                target="_blank"
                rel="noopener noreferrer"
                withPageTile={withPageTile}
              >
                {linkText}
              </StyledLink>
            </>
          )}
        </BodyText>
      </TextContainer>
    </EventNotificationContainer>
  );

  return withPageTile ? (
    <StyledPageTile>{bannerContent}</StyledPageTile>
  ) : (
    bannerContent
  );
};

export default EventNotificationBanner;
