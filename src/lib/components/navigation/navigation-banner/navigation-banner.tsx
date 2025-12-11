import React from 'react';
import styled from 'styled-components';
import { matchSize } from '../../../utils/match-size';
import { useMatchMedia } from '../../../utils/match-media';
import { TextProps } from '../../text/text';
import Label from '../../label/label';
import { Badge } from '../../badge/badge';

/* eslint-disable-next-line */
export interface NavigationBannerProps {
  message: string | React.ReactNode;
  link?: string;
}

export interface NavigationBannerStyleProps extends TextProps {
  size: 1 | 2 | 3;
  color: 'red' | 'blue' | 'lightBlue';
}

const getTopBannerColors = (
  theme,
  color: NavigationBannerStyleProps['color']
) =>
  ({
    blue: theme.colorSpecialCase.blueBanner,
    red: theme.styleguideColors.fillPrimaryRed,
    lightBlue: theme.colorSpecialCase.blueBanner2,
  }[color]);

const StyledTopBanner = styled.div<NavigationBannerStyleProps>(
  ({ theme, size = 2, color }) => ({
    background: getTopBannerColors(theme, color),
    padding: matchSize(
      {
        1: 5,
        2: 14,
        3: 16,
      },
      size
    ),
    width: '100%',
  })
);

const BannerLink = styled.a(({ theme }) =>
  theme.withMedia({
    color: [theme.styleguideColors.contentOnFill],
    cursor: 'pointer',
    '&:hover': {
      color: [theme.styleguideColors.contentTertiary],
    },
    textDecoration: 'none',
  })
);

const NavigationBanner = ({ message, link }: NavigationBannerProps) => {
  const bannerWithLink = (
    <BannerLink target={'_blank'} href={link}>
      {message}
    </BannerLink>
  );

  const staticBanner = <BannerLink>{message}</BannerLink>;

  const onAbove = (
    <Badge variation={'blue'} label={link ? bannerWithLink : staticBanner} />
  );

  const onMobile = (
    <StyledTopBanner size={1} color="lightBlue">
      <Label size={1} variation="white">
        {link ? bannerWithLink : staticBanner}
      </Label>
    </StyledTopBanner>
  );

  const responsiveNavigationBanner = useMatchMedia(
    [onMobile, onMobile, onAbove],
    []
  );

  return responsiveNavigationBanner;
};

export default NavigationBanner;
