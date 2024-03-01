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
        '&:hover': {
            color: getSocialMediaColor(type),
        },
        '&:active': {
            color: getSocialMediaColor(type),
        },
    });
});
export var SvgIconSocial = React.forwardRef(function (_a, ref) {
    var type = _a.socialMediaType, userId = _a.userId, props = __rest(_a, ["socialMediaType", "userId"]);
    var mapIcon = function () { };
    return (_jsx(Container, __assign({ ref: ref, color: "inherit", socialMediaType: type, href: getSocialMediaUrl(type, userId) }, props, { children: _jsx(SvgIcon, { src: getMediaLogo[type] }) })));
});
export default SvgIconSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxJQUFJLE1BQU0sY0FBYyxDQUFDO0FBQ2hDLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQztBQUNqQyxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFlBQVksTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUU1RCxJQUFNLFlBQVksR0FBRztJQUNuQixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsWUFBWTtJQUN0QixPQUFPLEVBQUUsV0FBVztJQUNwQixNQUFNLEVBQUUsVUFBVTtJQUNsQixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsWUFBWTtJQUN0QixNQUFNLEVBQUUsVUFBVTtJQUNsQixNQUFNLEVBQUUsVUFBVTtJQUNsQixNQUFNLEVBQUUsVUFBVTtJQUNsQixTQUFTLEVB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cG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2xpbmsvbGluayc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuL3N2Zy1pY29uJztcbmltcG9ydCBLZXliYXNlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMta2V5YmFzZS5zdmcnO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtdGVsZWdyYW0uc3ZnJztcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtdHdpdHRlci5zdmcnO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWdpdGh1Yi5zdmcnO1xuaW1wb3J0IFlvdXR1YmVJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy15b3V0dWJlLnN2Zyc7XG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1mYWNlYm9vay5zdmcnO1xuaW1wb3J0IE1lZGl1bUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLW1lZGl1bS5zdmcnO1xuaW1wb3J0IFJlZGRpdEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXJlZGRpdC5zdmcnO1xuaW1wb3J0IFdlY2hhdEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXdlY2hhdC5zdmcnO1xuaW1wb3J0IFR3aXR0ZXJYSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtdHdpdHRlcl94LnN2Zyc7XG5pbXBvcnQgTGlua2VkaW5JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1saW5rZWRpbi5zdmcnO1xuaW1wb3J0IFdlYnNpdGVJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy13ZWJzaXRlLnN2Zyc7XG5cbmNvbnN0IGdldE1lZGlhTG9nbyA9IHtcbiAga2V5YmFzZTogS2V5YmFzZUljb24sXG4gIHRlbGVncmFtOiBUZWxlZ3JhbUljb24sXG4gIHR3aXR0ZXI6IFR3aXR0ZXJJY29uLFxuICBnaXRodWI6IEdpdEh1Ykljb24sXG4gIHlvdXR1YmU6IFlvdXR1YmVJY29uLFxuICBmYWNlYm9vazogRmFjZWJvb2tJY29uLFxuICBtZWRpdW06IE1lZGl1bUljb24sXG4gIHJlZGRpdDogUmVkZGl0SWNvbixcbiAgd2VjaGF0OiBXZWNoYXRJY29uLFxuICB0d2l0dGVyX3g6IFR3aXR0ZXJYSWNvbixcbiAgbGlua2VkaW46IExpbmtlZGluSWNvbixcbiAgd2Vic2l0ZTogV2Vic2l0ZUljb24sXG59O1xuXG5jb25zdCBnZXRTb2NpYWxNZWRpYUNvbG9yID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleWJhc2U6ICcjRUE3NzNBJyxcbiAgICB0ZWxlZ3JhbTogJyMwMDg4Q0MnLFxuICAgIHR3aXR0ZXI6ICcjMURBMUYyJyxcbiAgICBnaXRodWI6ICcjMzMzMzMzJyxcbiAgICB5b3V0dWJlOiAnI0ZGMDAwMCcsXG4gICAgZmFjZWJvb2s6ICcjNDI2N0IyJyxcbiAgICBtZWRpdW06ICcjMDBBQjZDJyxcbiAgICByZWRkaXQ6ICcjRkY0NTAwJyxcbiAgICB3ZWNoYXQ6ICcjN0JCMzJFJyxcbiAgICB0d2l0dGVyX3g6ICcjMGYxNDE5JyxcbiAgICBsaW5rZWRpbjogJyMwYTY2YzInLFxuICAgIHdlYnNpdGU6ICcjQkFCQkJGJyxcbiAgfVt0eXBlXTtcbn07XG5cbmNvbnN0IGdldFNvY2lhbE1lZGlhVXJsID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSwgdXNlcklkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXliYXNlOiAnaHR0cHM6Ly9rZXliYXNlLmlvLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0ZWxlZ3JhbTogJ2h0dHBzOi8vdC5tZS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdHdpdHRlcjogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHR3aXR0ZXJfeDogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20vY2hhbm5lbC8nICsgdXNlcklkLFxuICAgIGZhY2Vib29rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20vJyArIHVzZXJJZCxcbiAgICBtZWRpdW06ICdodHRwczovL21lZGl1bS5jb20vJyArIHVzZXJJZCxcbiAgICByZWRkaXQ6ICdodHRwczovL3JlZGRpdC5jb20vJyArIHVzZXJJZCxcbiAgICB3ZWNoYXQ6IGB3ZWl4aW46Ly9kbC9jaGF0PyR7dXNlcklkfS9gLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvJyArIHVzZXJJZCxcbiAgICB3ZWJzaXRlOiB1c2VySWQsXG4gIH1bdHlwZV07XG59O1xuXG5leHBvcnQgdHlwZSBTb2NpYWxNZWRpYVR5cGUgPVxuICB8ICdrZXliYXNlJ1xuICB8ICd0ZWxlZ3JhbSdcbiAgfCAndHdpdHRlcidcbiAgfCAndHdpdHRlcl94J1xuICB8ICdnaXRodWInXG4gIHwgJ3lvdXR1YmUnXG4gIHwgJ2ZhY2Vib29rJ1xuICB8ICdtZWRpdW0nXG4gIHwgJ3JlZGRpdCdcbiAgfCAnd2VjaGF0J1xuICB8ICdsaW5rZWRpbidcbiAgfCAnd2Vic2l0ZSc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uU29jaWFsUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBzb2NpYWxNZWRpYVR5cGU6IFNvY2lhbE1lZGlhVHlwZTtcbiAgdXNlcklkOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChMaW5rKTxPbWl0PFN2Z0ljb25Tb2NpYWxQcm9wcywgJ3VzZXJJZCc+PihcbiAgKHsgdGhlbWUsIHNvY2lhbE1lZGlhVHlwZTogdHlwZSB9KSA9PiAoe1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICB9LFxuICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgU3ZnSWNvblNvY2lhbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxBbmNob3JFbGVtZW50LFxuICBTdmdJY29uU29jaWFsUHJvcHNcbj4oKHsgc29jaWFsTWVkaWFUeXBlOiB0eXBlLCB1c2VySWQsIC4uLnByb3BzIH06IFN2Z0ljb25Tb2NpYWxQcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IG1hcEljb24gPSAoKSA9PiB7fTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICBzb2NpYWxNZWRpYVR5cGU9e3R5cGV9XG4gICAgICBocmVmPXtnZXRTb2NpYWxNZWRpYVVybCh0eXBlLCB1c2VySWQpfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxTdmdJY29uIHNyYz17Z2V0TWVkaWFMb2dvW3R5cGVdfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ljb25Tb2NpYWw7XG4iXX0=