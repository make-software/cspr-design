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
    return (_jsx(Container, __assign({ ref: ref, color: "inherit", socialMediaType: type, href: getSocialMediaUrl(type, userId) }, props, { children: _jsx(SvgIcon, { src: getMediaLogo[type], alt: type }) })));
});
export default SvgIconSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxJQUFJLE1BQU0sY0FBYyxDQUFDO0FBQ2hDLE9BQU8sT0FBTyxNQUFNLFlBQVksQ0FBQztBQUNqQyxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFVBQVUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLFlBQVksTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRCxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RCxPQUFPLFdBQVcsTUFBTSxtQ0FBbUMsQ0FBQztBQUU1RCxJQUFNLFlBQVksR0FBRztJQUNuQixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsWUFBWTtJQUN0QixPQUFPLEVBQUUsV0FBVztJQUNwQixNQUFNLEVBQUUsVUFBVTtJQUNsQixPQUFPLEVBQUUsV0FBVztJQUNwQixRQUFRLEVBQUUsWUFBWTtJQUN0QixNQUFNLEVBQUUsVUFBVTtJQUNsQixNQUFNLEVBQUUsVUFBVTtJQUNsQixNQUFNLEVBQUUsVUFBVTtJQUNsQixTQUFTLEVB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Q0FBQyxJQUNqQyxLQUFLLGNBRVQsS0FBQyxPQUFPLElBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxHQUFJLElBQ3JDLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBZSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9saW5rL2xpbmsnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi9zdmctaWNvbic7XG5pbXBvcnQgS2V5YmFzZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWtleWJhc2Uuc3ZnJztcbmltcG9ydCBUZWxlZ3JhbUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXRlbGVncmFtLnN2Zyc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXR3aXR0ZXIuc3ZnJztcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1naXRodWIuc3ZnJztcbmltcG9ydCBZb3V0dWJlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMteW91dHViZS5zdmcnO1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtZmFjZWJvb2suc3ZnJztcbmltcG9ydCBNZWRpdW1JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1tZWRpdW0uc3ZnJztcbmltcG9ydCBSZWRkaXRJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1yZWRkaXQuc3ZnJztcbmltcG9ydCBXZWNoYXRJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy13ZWNoYXQuc3ZnJztcbmltcG9ydCBUd2l0dGVyWEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXR3aXR0ZXJfeC5zdmcnO1xuaW1wb3J0IExpbmtlZGluSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtbGlua2VkaW4uc3ZnJztcbmltcG9ydCBXZWJzaXRlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtd2Vic2l0ZS5zdmcnO1xuXG5jb25zdCBnZXRNZWRpYUxvZ28gPSB7XG4gIGtleWJhc2U6IEtleWJhc2VJY29uLFxuICB0ZWxlZ3JhbTogVGVsZWdyYW1JY29uLFxuICB0d2l0dGVyOiBUd2l0dGVySWNvbixcbiAgZ2l0aHViOiBHaXRIdWJJY29uLFxuICB5b3V0dWJlOiBZb3V0dWJlSWNvbixcbiAgZmFjZWJvb2s6IEZhY2Vib29rSWNvbixcbiAgbWVkaXVtOiBNZWRpdW1JY29uLFxuICByZWRkaXQ6IFJlZGRpdEljb24sXG4gIHdlY2hhdDogV2VjaGF0SWNvbixcbiAgdHdpdHRlcl94OiBUd2l0dGVyWEljb24sXG4gIGxpbmtlZGluOiBMaW5rZWRpbkljb24sXG4gIHdlYnNpdGU6IFdlYnNpdGVJY29uLFxufTtcblxuY29uc3QgZ2V0U29jaWFsTWVkaWFDb2xvciA9ICh0eXBlOiBTb2NpYWxNZWRpYVR5cGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXliYXNlOiAnI0VBNzczQScsXG4gICAgdGVsZWdyYW06ICcjMDA4OENDJyxcbiAgICB0d2l0dGVyOiAnIzFEQTFGMicsXG4gICAgZ2l0aHViOiAnIzMzMzMzMycsXG4gICAgeW91dHViZTogJyNGRjAwMDAnLFxuICAgIGZhY2Vib29rOiAnIzQyNjdCMicsXG4gICAgbWVkaXVtOiAnIzAwQUI2QycsXG4gICAgcmVkZGl0OiAnI0ZGNDUwMCcsXG4gICAgd2VjaGF0OiAnIzdCQjMyRScsXG4gICAgdHdpdHRlcl94OiAnIzBmMTQxOScsXG4gICAgbGlua2VkaW46ICcjMGE2NmMyJyxcbiAgICB3ZWJzaXRlOiAnI0JBQkJCRicsXG4gIH1bdHlwZV07XG59O1xuXG5jb25zdCBnZXRTb2NpYWxNZWRpYVVybCA9ICh0eXBlOiBTb2NpYWxNZWRpYVR5cGUsIHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5YmFzZTogJ2h0dHBzOi8va2V5YmFzZS5pby8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdGVsZWdyYW06ICdodHRwczovL3QubWUvJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHR3aXR0ZXI6ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0d2l0dGVyX3g6ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHlvdXR1YmU6ICdodHRwczovL3lvdXR1YmUuY29tL2NoYW5uZWwvJyArIHVzZXJJZCxcbiAgICBmYWNlYm9vazogJ2h0dHBzOi8vZmFjZWJvb2suY29tLycgKyB1c2VySWQsXG4gICAgbWVkaXVtOiAnaHR0cHM6Ly9tZWRpdW0uY29tLycgKyB1c2VySWQsXG4gICAgcmVkZGl0OiAnaHR0cHM6Ly9yZWRkaXQuY29tLycgKyB1c2VySWQsXG4gICAgd2VjaGF0OiBgd2VpeGluOi8vZGwvY2hhdD8ke3VzZXJJZH0vYCxcbiAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55LycgKyB1c2VySWQsXG4gICAgd2Vic2l0ZTogdXNlcklkLFxuICB9W3R5cGVdO1xufTtcblxuZXhwb3J0IHR5cGUgU29jaWFsTWVkaWFUeXBlID1cbiAgfCAna2V5YmFzZSdcbiAgfCAndGVsZWdyYW0nXG4gIHwgJ3R3aXR0ZXInXG4gIHwgJ3R3aXR0ZXJfeCdcbiAgfCAnZ2l0aHViJ1xuICB8ICd5b3V0dWJlJ1xuICB8ICdmYWNlYm9vaydcbiAgfCAnbWVkaXVtJ1xuICB8ICdyZWRkaXQnXG4gIHwgJ3dlY2hhdCdcbiAgfCAnbGlua2VkaW4nXG4gIHwgJ3dlYnNpdGUnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvblNvY2lhbFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgc29jaWFsTWVkaWFUeXBlOiBTb2NpYWxNZWRpYVR5cGU7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoTGluayk8T21pdDxTdmdJY29uU29jaWFsUHJvcHMsICd1c2VySWQnPj4oXG4gICh7IHRoZW1lLCBzb2NpYWxNZWRpYVR5cGU6IHR5cGUgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgICdzdmcgcGF0aCc6IHtcbiAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICB9LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXG4gICAgICAnc3ZnIHBhdGgnOiB7XG4gICAgICAgIGZpbGw6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6YWN0aXZlJzoge1xuICAgICAgY29sb3I6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXG4gICAgICAnc3ZnIHBhdGgnOiB7XG4gICAgICAgIGZpbGw6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgU3ZnSWNvblNvY2lhbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxBbmNob3JFbGVtZW50LFxuICBTdmdJY29uU29jaWFsUHJvcHNcbj4oKHsgc29jaWFsTWVkaWFUeXBlOiB0eXBlLCB1c2VySWQsIC4uLnByb3BzIH06IFN2Z0ljb25Tb2NpYWxQcm9wcywgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgc29jaWFsTWVkaWFUeXBlPXt0eXBlfVxuICAgICAgaHJlZj17Z2V0U29jaWFsTWVkaWFVcmwodHlwZSwgdXNlcklkKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8U3ZnSWNvbiBzcmM9e2dldE1lZGlhTG9nb1t0eXBlXX0gYWx0PXt0eXBlfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ljb25Tb2NpYWw7XG4iXX0=