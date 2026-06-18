import { default as React } from 'react';
import { BaseProps } from '../../types';
export type SocialMediaType = 'keybase' | 'telegram' | 'twitter' | 'twitter_x' | 'github' | 'youtube' | 'facebook' | 'medium' | 'reddit' | 'wechat' | 'linkedin' | 'website';
export type SvgIconSocialProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href' | 'color'> & {
    socialMediaType: SocialMediaType;
    userId: string;
};
export declare const SvgIconSocial: React.ForwardRefExoticComponent<BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color" | "href" | keyof BaseProps> & {
    socialMediaType: SocialMediaType;
    userId: string;
} & React.RefAttributes<HTMLAnchorElement>>;
export default SvgIconSocial;
//# sourceMappingURL=svg-icon-social.d.ts.map