import React from 'react';
import { Badge } from '../../badge/badge';
import CaptionText from '../../caption-text/caption-text';
import FlexRow from '../../flex-row/flex-row';
import NavLink from '../../nav-link/nav-link';
import FlexColumn from '../../flex-column/flex-column';
import styled, { useTheme } from 'styled-components';
import { useMatchMedia } from '../../../utils/match-media';
import SvgIcon from '../../svg-icon/svg-icon';
import BodyText from '../../body-text/body-text';

export interface ProductsMenuItemProps {
  comingSoonBadgeLabel?: string;
  newBadgeLabel?: string;
  selected?: boolean;
  descriptionText?: string;
  nameLabel: string;
  link: string;
  icon: string;
}

export enum ThemeModeType {
  light = 'light',
  dark = 'dark',
}

export const ProductItemWrapper = styled.span<{
  isOpen?: boolean;
  selected?: boolean;
}>(({ theme, isOpen, selected }) =>
  theme.withMedia({
    display: 'flex',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: ['8px 12px', '8px 12px', '16px'],
    width: ['208px', '208px', '172px'],
    height: ['56px', '56px', '137px'],

    '&:hover': {
      borderRadius: theme.borderRadius.base,
      background: theme.styleguideColors.backgroundSecondary,
    },

    ...(selected && {
      background: theme.styleguideColors.backgroundSecondary,
      pointerEvents: 'none',
    }),
  })
);

export const ProductItemLink = styled(NavLink)(({ theme, disabled }) =>
  theme.withMedia({
    color: theme.styleguideColors.contentPrimary,
    textDecoration: 'none',

    '&:hover': {
      color: theme.styleguideColors.contentBlue,
    },
    '&:active': {
      color: theme.styleguideColors.contentLightBlue,
    },

    ...(disabled && {
      color: theme.styleguideColors.contentSecondary,
      '&:hover > *': {
        color: theme.styleguideColors.contentSecondary,
      },
    }),
  })
);

const StyledBodyText =  styled(BodyText)`
    white-space: nowrap;
`

const defaultIcon = {
  [ThemeModeType.light]: 'assets/icons/ic-sand-clock-light.svg',
  [ThemeModeType.dark]: 'assets/icons/ic-sand-clock-dark.svg',
};

export const ProductsMenuItem = ({
  nameLabel,
  link,
  icon,
  descriptionText,
  selected = false,
  newBadgeLabel,
  comingSoonBadgeLabel,
}: ProductsMenuItemProps) => {
  const theme = useTheme();

  let badge;
  if (comingSoonBadgeLabel) {
    badge = <Badge label={comingSoonBadgeLabel} variation={'violet'} lineHeight={'xxs'} />;
  } else if (newBadgeLabel) {
    badge = <Badge label={newBadgeLabel} variation={'green'} lineHeight={'xxs'} />;
  } else {
    badge = (
      <CaptionText size={2} variation={'lightGray'}>
        {descriptionText}
      </CaptionText>
    );
  }

  const mobile = (
    <FlexRow itemsSpacing={8} justify={'flex-start'} grow={1}>
      <ProductItemLink href={link} target={'_blank'} disabled={!!comingSoonBadgeLabel}>
        <FlexRow itemsSpacing={8} grow={1}>
          <SvgIcon src={icon || defaultIcon[theme.themeName]} size={32} />
          <FlexColumn itemsSpacing={4}>
            {badge}
            <StyledBodyText size={1}>{nameLabel}</StyledBodyText>
          </FlexColumn>
        </FlexRow>
      </ProductItemLink>
    </FlexRow>
  );

  const desktop = (
    <ProductItemLink href={link} target={'_blank'} disabled={!!comingSoonBadgeLabel}>
      <FlexColumn
        itemsSpacing={16}
        align={'center'}
        justify={'center'}
        grow={1}
      >
        <SvgIcon src={icon || defaultIcon[theme.themeName]} size={48} />
        <FlexColumn itemsSpacing={4} align={'center'}>
          {badge}
          <StyledBodyText size={1}>{nameLabel}</StyledBodyText>
        </FlexColumn>
      </FlexColumn>
    </ProductItemLink>
  );

  const productMedia = useMatchMedia([mobile, mobile, desktop], []);

  return (
    <ProductItemWrapper selected={selected}>{productMedia}</ProductItemWrapper>
  );
};
