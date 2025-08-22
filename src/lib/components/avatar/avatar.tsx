import React from 'react';
import styled from 'styled-components';
import SvgIcon from '../svg-icon/svg-icon';
import { getImageProxyUrl } from '../../utils/cache-asset';
import Identicon from '../identicon/identicon.tsx';
import { Erc20AvatarIcon, HashIcon } from '../../icons-index.ts';
import Skeleton from 'react-loading-skeleton';

export const isValidAccountHash = (
  accountHash?: string | null,
): accountHash is string => {
  if (accountHash == null) {
    return false;
  }

  const validHashRegExp = new RegExp('^([0-9A-Fa-f]){64}$');
  return validHashRegExp.test(accountHash.trim());
};

export interface AvatarProps<T = any> {
  hash?: string | null;
  src?: string | null;
  size?: 'default' | 'big' | 'average' | 'medium' | 'small' | 'tiny';
  loading?: boolean;
  isErc20?: boolean;
  transparentBg?: boolean;
}

const getCornerRadius = (size: string = 'default') => {
  const cornerRadiusMap: Record<string, number> = {
    tiny: 2,
    small: 2,
    default: 2,
    average: 4,
    medium: 12,
    big: 12,
  };

  return cornerRadiusMap[size] || cornerRadiusMap.default;
};

const getSize = (size: string = 'default'): number => {
  const sizeMap: Record<string, number> = {
    tiny: 16,
    small: 20,
    average: 28,
    default: 32,
    medium: 80,
    big: 124,
  };

  return sizeMap[size] || sizeMap.default;
};

const getBgColor = (size: string = 'default') => {
  const bgColorMap: Record<string, string> = {
    tiny: 'contentTertiary',
    small: 'contentTertiary',
    default: 'contentQuaternary',
    average: 'contentQuaternary',
    medium: 'contentQuaternary',
    big: 'contentQuaternary',
  };

  return bgColorMap[size] || bgColorMap.default;
};

const getMargin = (size: string = 'default') => {
  const marginMap: Record<string, number> = {
    tiny: 0,
    small: 0,
    default: 4,
    average: 4,
    medium: 4,
    big: 0,
  };

  return marginMap[size] || marginMap.default;
};

export const BackgroundWrapper = styled.div<{
  sizeType: string;
  withBgColor?: boolean;
}>(({ theme, sizeType, withBgColor = false }) => ({
  borderRadius: getCornerRadius(sizeType),
  height: getSize(sizeType),
  width: getSize(sizeType),
  padding: 0,
  margin: getMargin(sizeType),
  backgroundColor: withBgColor
    ? theme.styleguideColors[getBgColor(sizeType)]
    : 'transparent',
  '& > canvas': {
    borderRadius: getCornerRadius(sizeType),
  },
}));

const IconHashWrapper = styled.div(({ theme }) => ({
  color: theme.styleguideColors.contentOnFill,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

type Ref = HTMLSpanElement;

export const Avatar = React.forwardRef<Ref, AvatarProps>(function Avatar(
  props: AvatarProps,
  ref,
) {
  const {
    loading,
    hash,
    src,
    size = 'default',
    isErc20,
    transparentBg,
    ...restProps
  } = props;
  const avatarSize = getSize(size);

  const RETINA_SCALE = 2;
  const CACHE_TTL = '86400';

  if (loading || (!hash && !src && !isErc20)) {
    return (
      <div {...restProps}>
        <Skeleton
          style={{
            borderRadius: 2,
            width: avatarSize,
            fontSize: `${avatarSize}px`,
            margin: getMargin(size),
          }}
        />
      </div>
    );
  }

  if (src) {
    const cachedUrl = getImageProxyUrl(src, {
      ttl: CACHE_TTL,
      width: avatarSize * RETINA_SCALE,
    });
    return (
      <span ref={ref} {...restProps}>
        <BackgroundWrapper
          sizeType={size}
          style={{
            background: `url("${cachedUrl}") center / contain no-repeat`,
          }}
        >
          <div style={{ width: avatarSize, height: avatarSize }} />
        </BackgroundWrapper>
      </span>
    );
  }
  if (hash && isValidAccountHash(hash)) {
    return (
      <span ref={ref} {...restProps}>
        <BackgroundWrapper sizeType={size} withBgColor={transparentBg}>
          <IconHashWrapper>
            <SvgIcon src={HashIcon} size={avatarSize - 8} />
          </IconHashWrapper>
        </BackgroundWrapper>
      </span>
    );
  }

  if (isErc20 && !src) {
    return (
      <span ref={ref} {...restProps}>
        <BackgroundWrapper sizeType={size} withBgColor={transparentBg}>
          <IconHashWrapper>
            <SvgIcon src={Erc20AvatarIcon} size={avatarSize} />
          </IconHashWrapper>
        </BackgroundWrapper>
      </span>
    );
  }

  return (
    <span ref={ref} {...restProps}>
      <BackgroundWrapper sizeType={size}>
        {hash && (
          <Identicon hexString={hash} size={avatarSize} {...restProps} />
        )}
      </BackgroundWrapper>
    </span>
  );
});

export default Avatar;
