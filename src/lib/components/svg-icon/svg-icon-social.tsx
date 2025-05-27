import React from 'react';
import styled from 'styled-components';
import { BaseProps } from '../../types';
import Link from '../link/link';
import SvgIcon from './svg-icon';
import KeybaseIcon from '../../assets/icons/ic-keybase.svg';
import TelegramIcon from '../../assets/icons/ic-telegram.svg';
import TwitterIcon from '../../assets/icons/ic-twitter.svg';
import GitHubIcon from '../../assets/icons/ic-github.svg';
import YoutubeIcon from '../../assets/icons/ic-youtube.svg';
import FacebookIcon from '../../assets/icons/ic-facebook.svg';
import MediumIcon from '../../assets/icons/ic-medium.svg';
import RedditIcon from '../../assets/icons/ic-reddit.svg';
import WechatIcon from '../../assets/icons/ic-wechat.svg';
import TwitterXIcon from '../../assets/icons/ic-twitter_x.svg';
import LinkedinIcon from '../../assets/icons/ic-linkedin.svg';
import WebsiteIcon from '../../assets/icons/ic-website.svg';

const getMediaLogo = {
  keybase: KeybaseIcon,
  telegram: TelegramIcon,
  twitter: TwitterIcon,
  github: GitHubIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon,
  medium: MediumIcon,
  reddit: RedditIcon,
  wechat: WechatIcon,
  twitter_x: TwitterXIcon,
  linkedin: LinkedinIcon,
  website: WebsiteIcon,
};

const getSocialMediaColor = (type: SocialMediaType) => {
  return {
    keybase: '#EA773A',
    telegram: '#0088CC',
    twitter: '#1DA1F2',
    github: '#333333',
    youtube: '#FF0000',
    facebook: '#4267B2',
    medium: '#00AB6C',
    reddit: '#FF4500',
    wechat: '#7BB32E',
    twitter_x: '#0f1419',
    linkedin: '#0a66c2',
    website: '#BABBBF',
  }[type];
};

const getSocialMediaUrl = (type: SocialMediaType, userId: string) => {
  return {
    keybase: 'https://keybase.io/' + userId.replace('@', ''),
    telegram: 'https://t.me/' + userId.replace('@', ''),
    twitter: 'https://twitter.com/' + userId.replace('@', ''),
    twitter_x: 'https://twitter.com/' + userId.replace('@', ''),
    github: 'https://github.com/' + userId.replace('@', ''),
    youtube: 'https://youtube.com/channel/' + userId,
    facebook: 'https://facebook.com/' + userId,
    medium: 'https://medium.com/' + userId,
    reddit: 'https://reddit.com/' + userId,
    wechat: `weixin://dl/chat?${userId}/`,
    linkedin: 'https://www.linkedin.com/company/' + userId,
    website: userId,
  }[type];
};

export type SocialMediaType =
  | 'keybase'
  | 'telegram'
  | 'twitter'
  | 'twitter_x'
  | 'github'
  | 'youtube'
  | 'facebook'
  | 'medium'
  | 'reddit'
  | 'wechat'
  | 'linkedin'
  | 'website';

/* eslint-disable-next-line */
export interface SvgIconSocialProps extends BaseProps {
  socialMediaType: SocialMediaType;
  userId: string;
}

const Container = styled(Link)<Omit<SvgIconSocialProps, 'userId'>>(
  ({ theme, socialMediaType: type }) => ({
    color: theme.styleguideColors.contentSecondary,
    'svg path': {
      fill: theme.styleguideColors.contentSecondary,
    },
    '&:hover': {
      color: getSocialMediaColor(type),
      'svg path': {
        fill: getSocialMediaColor(type),
      },
    },
    '&:active': {
      color: getSocialMediaColor(type),
      'svg path': {
        fill: getSocialMediaColor(type),
      },
    },
  })
);

export const SvgIconSocial = React.forwardRef<
  HTMLAnchorElement,
  SvgIconSocialProps
>(({ socialMediaType: type, userId, ...props }: SvgIconSocialProps, ref) => {
  return (
    <Container
      ref={ref}
      color="inherit"
      socialMediaType={type}
      href={getSocialMediaUrl(type, userId)}
      {...props}
      aria-label={`Go to ${type}`}
    >
      <SvgIcon src={getMediaLogo[type]} alt={type} />
    </Container>
  );
});

export default SvgIconSocial;
