import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
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
var getMediaLogo = {
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
var getSocialMediaColor = function (type) {
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
var getSocialMediaUrl = function (type, userId) {
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
        wechat: "weixin://dl/chat?".concat(userId, "/"),
        linkedin: 'https://www.linkedin.com/company/' + userId,
        website: userId,
    }[type];
};
var Container = styled(Link)(function (_a) {
    var theme = _a.theme, type = _a.socialMediaType;
    return ({
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
    });
});
export var SvgIconSocial = React.forwardRef(function (_a, ref) {
    var type = _a.socialMediaType, userId = _a.userId, props = __rest(_a, ["socialMediaType", "userId"]);
    var mapIcon = function () { };
    return (_jsx(Container, __assign({ ref: ref, color: "inherit", socialMediaType: type, href: getSocialMediaUrl(type, userId) }, props, { children: _jsx(SvgIcon, { src: getMediaLogo[type] }) })));
});
export default SvgIconSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxJQUFJLE1BQU0sY0FBYyxDQUFDO0FBQ2hDLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQztBQUNqQyxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFlBQVksTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUU1RCxJQUFNLFlBQVksR0FBRztJQUNuQixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsWUFBWTtJQUN0QixPQUFPLEVBQUUsV0FBVztJQUNwQixNQUFNLEVBQUUsVUFBVTtJQUNsQixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsWUFBWTtJQUN0QixNQUFNLEVBQUUsVUFBVTtJQUNsQixNQUFNLEVBQUUsVUFBVTtJQUNsQixNQUFNLEVBQUUsVUFBVTtJQUNsQixTQUFTLEVB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QUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUNqQyxLQUFLLGNBRVQsS0FBQyxPQUFPLElBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBSSxJQUMxQixDQUNiLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGVBQWUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vbGluay9saW5rJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4vc3ZnLWljb24nO1xuaW1wb3J0IEtleWJhc2VJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1rZXliYXNlLnN2Zyc7XG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy10ZWxlZ3JhbS5zdmcnO1xuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy10d2l0dGVyLnN2Zyc7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtZ2l0aHViLnN2Zyc7XG5pbXBvcnQgWW91dHViZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXlvdXR1YmUuc3ZnJztcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgTWVkaXVtSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtbWVkaXVtLnN2Zyc7XG5pbXBvcnQgUmVkZGl0SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtcmVkZGl0LnN2Zyc7XG5pbXBvcnQgV2VjaGF0SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtd2VjaGF0LnN2Zyc7XG5pbXBvcnQgVHdpdHRlclhJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy10d2l0dGVyX3guc3ZnJztcbmltcG9ydCBMaW5rZWRpbkljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWxpbmtlZGluLnN2Zyc7XG5pbXBvcnQgV2Vic2l0ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXdlYnNpdGUuc3ZnJztcblxuY29uc3QgZ2V0TWVkaWFMb2dvID0ge1xuICBrZXliYXNlOiBLZXliYXNlSWNvbixcbiAgdGVsZWdyYW06IFRlbGVncmFtSWNvbixcbiAgdHdpdHRlcjogVHdpdHRlckljb24sXG4gIGdpdGh1YjogR2l0SHViSWNvbixcbiAgeW91dHViZTogWW91dHViZUljb24sXG4gIGZhY2Vib29rOiBGYWNlYm9va0ljb24sXG4gIG1lZGl1bTogTWVkaXVtSWNvbixcbiAgcmVkZGl0OiBSZWRkaXRJY29uLFxuICB3ZWNoYXQ6IFdlY2hhdEljb24sXG4gIHR3aXR0ZXJfeDogVHdpdHRlclhJY29uLFxuICBsaW5rZWRpbjogTGlua2VkaW5JY29uLFxuICB3ZWJzaXRlOiBXZWJzaXRlSWNvbixcbn07XG5cbmNvbnN0IGdldFNvY2lhbE1lZGlhQ29sb3IgPSAodHlwZTogU29jaWFsTWVkaWFUeXBlKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5YmFzZTogJyNFQTc3M0EnLFxuICAgIHRlbGVncmFtOiAnIzAwODhDQycsXG4gICAgdHdpdHRlcjogJyMxREExRjInLFxuICAgIGdpdGh1YjogJyMzMzMzMzMnLFxuICAgIHlvdXR1YmU6ICcjRkYwMDAwJyxcbiAgICBmYWNlYm9vazogJyM0MjY3QjInLFxuICAgIG1lZGl1bTogJyMwMEFCNkMnLFxuICAgIHJlZGRpdDogJyNGRjQ1MDAnLFxuICAgIHdlY2hhdDogJyM3QkIzMkUnLFxuICAgIHR3aXR0ZXJfeDogJyMwZjE0MTknLFxuICAgIGxpbmtlZGluOiAnIzBhNjZjMicsXG4gICAgd2Vic2l0ZTogJyNCQUJCQkYnLFxuICB9W3R5cGVdO1xufTtcblxuY29uc3QgZ2V0U29jaWFsTWVkaWFVcmwgPSAodHlwZTogU29jaWFsTWVkaWFUeXBlLCB1c2VySWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleWJhc2U6ICdodHRwczovL2tleWJhc2UuaW8vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHRlbGVncmFtOiAnaHR0cHM6Ly90Lm1lLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0d2l0dGVyOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdHdpdHRlcl94OiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB5b3V0dWJlOiAnaHR0cHM6Ly95b3V0dWJlLmNvbS9jaGFubmVsLycgKyB1c2VySWQsXG4gICAgZmFjZWJvb2s6ICdodHRwczovL2ZhY2Vib29rLmNvbS8nICsgdXNlcklkLFxuICAgIG1lZGl1bTogJ2h0dHBzOi8vbWVkaXVtLmNvbS8nICsgdXNlcklkLFxuICAgIHJlZGRpdDogJ2h0dHBzOi8vcmVkZGl0LmNvbS8nICsgdXNlcklkLFxuICAgIHdlY2hhdDogYHdlaXhpbjovL2RsL2NoYXQ/JHt1c2VySWR9L2AsXG4gICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS8nICsgdXNlcklkLFxuICAgIHdlYnNpdGU6IHVzZXJJZCxcbiAgfVt0eXBlXTtcbn07XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE1lZGlhVHlwZSA9XG4gIHwgJ2tleWJhc2UnXG4gIHwgJ3RlbGVncmFtJ1xuICB8ICd0d2l0dGVyJ1xuICB8ICd0d2l0dGVyX3gnXG4gIHwgJ2dpdGh1YidcbiAgfCAneW91dHViZSdcbiAgfCAnZmFjZWJvb2snXG4gIHwgJ21lZGl1bSdcbiAgfCAncmVkZGl0J1xuICB8ICd3ZWNoYXQnXG4gIHwgJ2xpbmtlZGluJ1xuICB8ICd3ZWJzaXRlJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb25Tb2NpYWxQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHNvY2lhbE1lZGlhVHlwZTogU29jaWFsTWVkaWFUeXBlO1xuICB1c2VySWQ6IHN0cmluZztcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKExpbmspPE9taXQ8U3ZnSWNvblNvY2lhbFByb3BzLCAndXNlcklkJz4+KFxuICAoeyB0aGVtZSwgc29jaWFsTWVkaWFUeXBlOiB0eXBlIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICAnc3ZnIHBhdGgnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgJ3N2ZyBwYXRoJzoge1xuICAgICAgICBmaWxsOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgJ3N2ZyBwYXRoJzoge1xuICAgICAgICBmaWxsOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFN2Z0ljb25Tb2NpYWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MQW5jaG9yRWxlbWVudCxcbiAgU3ZnSWNvblNvY2lhbFByb3BzXG4+KCh7IHNvY2lhbE1lZGlhVHlwZTogdHlwZSwgdXNlcklkLCAuLi5wcm9wcyB9OiBTdmdJY29uU29jaWFsUHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCBtYXBJY29uID0gKCkgPT4ge307XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgc29jaWFsTWVkaWFUeXBlPXt0eXBlfVxuICAgICAgaHJlZj17Z2V0U29jaWFsTWVkaWFVcmwodHlwZSwgdXNlcklkKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8U3ZnSWNvbiBzcmM9e2dldE1lZGlhTG9nb1t0eXBlXX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdJY29uU29jaWFsO1xuIl19