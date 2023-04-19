import React from "react";
import Identicon from "react-identicons";
// import Skeleton from 'react-loading-skeleton';
import styled from "styled-components";
import SvgIcon from "../svg-icon/svg-icon";
import {getImageProxyUrl} from "../../utils/cache-asset";

export const isValidAccountHash = (
  accountHash?: string | null
): accountHash is string => {
  if (accountHash == null) {
    return false;
  }

  const validHashRegExp = new RegExp("^([0-9A-Fa-f]){64}$");
  return validHashRegExp.test(accountHash.trim());
};

/* eslint-disable-next-line */
export interface AvatarProps {
  hash?: string | null;
  src?: string | null;
  size?: "default" | "big" | "average" | "medium" | "small";
  loading?: boolean;
  isErc20?: boolean;
}

const getCornerRadius = (size: AvatarProps["size"] = "default") =>
  ({
    small: 2,
    default: 2,
    average: 4,
    medium: 12,
    big: 12,
  }[size]);

const getSize = (size: AvatarProps["size"] = "default") =>
  ({
    small: 20,
    default: 32,
    average: 40,
    medium: 80,
    big: 124,
  }[size]);

const getBgColor = (size: AvatarProps["size"] = "default") =>
  ({
    small: "contentTertiary",
    default: "contentQuaternary",
    average: "contentQuaternary",
    medium: "contentQuaternary",
    big: "contentQuaternary",
  }[size]);

const getPadding = (size: AvatarProps["size"] = "default") =>
  ({
    small: 0,
    default: 0,
    average: 0,
    medium: 0,
    big: 0,
  }[size]);

const getMargin = (size: AvatarProps["size"] = "default") =>
  ({
    small: 0,
    default: 4,
    average: 4,
    medium: 4,
    big: 0,
  }[size]);

export const BackgroundWrapper = styled.div<{
  size: AvatarProps["size"];
  withBgColor?: boolean;
}>(({ theme, size, withBgColor = false }) => ({
  borderRadius: getCornerRadius(size),
  height: getSize(size),
  width: getSize(size),
  padding: getPadding(size),
  margin: getMargin(size),
  backgroundColor: withBgColor
    ? theme.styleguideColors[getBgColor(size)]
    : "transparent",
  "& > canvas": {
    borderRadius: getCornerRadius(size),
  },
}));

const IconHashWrapper = styled.div(({ theme }) => ({
  color: theme.styleguideColors.contentOnFill,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

type Ref = HTMLSpanElement;

export const Avatar = React.forwardRef<Ref, AvatarProps>(function Avatar(
  { hash, src, size = "default", loading, isErc20, ...props }: AvatarProps,
  ref
) {
  const RETINA_SCALE = 2;
  const CACHE_TTL = "86400";

  // if (loading || (!hash && !src && !isErc20)) {
  //   return (
  //     <span ref={ref} {...props}>
  //       <Skeleton
  //         style={{
  //           borderRadius: 2,
  //           width: getSize(size),
  //           fontSize: `${getSize(size)}px`,
  //           margin: getMargin(size),
  //         }}
  //       />
  //     </span>
  //   );
  // }

  if (src) {
    const cachedUrl = getImageProxyUrl(src, {
      ttl: CACHE_TTL,
      width: getSize(size) * RETINA_SCALE,
    });
    return (
      <span ref={ref} {...props}>
        <BackgroundWrapper
          size={size}
          style={{
            background: `url("${cachedUrl}") center no-repeat`,
            backgroundSize: `contain`,
          }}
        >
          <div style={{ width: getSize(size), height: getSize(size) }} />
        </BackgroundWrapper>
      </span>
    );
  }
  if (hash && isValidAccountHash(hash)) {
    return (
      <span ref={ref} {...props}>
        <BackgroundWrapper size={size} withBgColor>
          <IconHashWrapper>
            <SvgIcon src="assets/icons/ic-hash.svg" size={getSize(size) - 8} />
          </IconHashWrapper>
        </BackgroundWrapper>
      </span>
    );
  }

  if (isErc20 && !src) {
    return (
      <span ref={ref} {...props}>
        <BackgroundWrapper size={size} withBgColor>
          <IconHashWrapper>
            <SvgIcon
              src="assets/icons/ic-erc20-avatar.svg"
              size={getSize(size)}
            />
          </IconHashWrapper>
        </BackgroundWrapper>
      </span>
    );
  }

  return (
    <span ref={ref} {...props}>
      <BackgroundWrapper size={size}>
        <Identicon
          string={hash?.toLowerCase()}
          size={getSize(size) - getPadding(size)}
          bg="#fff"
          {...props}
        />
      </BackgroundWrapper>
    </span>
  );
});

export default Avatar;
