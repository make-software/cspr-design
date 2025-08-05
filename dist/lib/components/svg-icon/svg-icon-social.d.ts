import { default as React } from 'react';
import { BaseProps } from '../../types';
export type SocialMediaType = 'keybase' | 'telegram' | 'twitter' | 'twitter_x' | 'github' | 'youtube' | 'facebook' | 'medium' | 'reddit' | 'wechat' | 'linkedin' | 'website';
export interface SvgIconSocialProps extends BaseProps {
    socialMediaType: SocialMediaType;
    userId: string;
}
export declare const SvgIconSocial: React.ForwardRefExoticComponent<SvgIconSocialProps & React.RefAttributes<HTMLAnchorElement>>;
export default SvgIconSocial;
//# sourceMappingURL=svg-icon-social.d.ts.map