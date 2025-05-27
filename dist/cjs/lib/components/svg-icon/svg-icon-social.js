"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgIconSocial = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var link_1 = tslib_1.__importDefault(require("../link/link"));
var svg_icon_1 = tslib_1.__importDefault(require("./svg-icon"));
var ic_keybase_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-keybase.svg"));
var ic_telegram_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-telegram.svg"));
var ic_twitter_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-twitter.svg"));
var ic_github_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-github.svg"));
var ic_youtube_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-youtube.svg"));
var ic_facebook_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-facebook.svg"));
var ic_medium_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-medium.svg"));
var ic_reddit_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-reddit.svg"));
var ic_wechat_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-wechat.svg"));
var ic_twitter_x_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-twitter_x.svg"));
var ic_linkedin_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-linkedin.svg"));
var ic_website_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-website.svg"));
var getMediaLogo = {
    keybase: ic_keybase_svg_1.default,
    telegram: ic_telegram_svg_1.default,
    twitter: ic_twitter_svg_1.default,
    github: ic_github_svg_1.default,
    youtube: ic_youtube_svg_1.default,
    facebook: ic_facebook_svg_1.default,
    medium: ic_medium_svg_1.default,
    reddit: ic_reddit_svg_1.default,
    wechat: ic_wechat_svg_1.default,
    twitter_x: ic_twitter_x_svg_1.default,
    linkedin: ic_linkedin_svg_1.default,
    website: ic_website_svg_1.default,
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
var Container = (0, styled_components_1.default)(link_1.default)(function (_a) {
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
exports.SvgIconSocial = react_1.default.forwardRef(function (_a, ref) {
    var type = _a.socialMediaType, userId = _a.userId, props = tslib_1.__rest(_a, ["socialMediaType", "userId"]);
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, color: "inherit", socialMediaType: type, href: getSocialMediaUrl(type, userId) }, props, { "aria-label": "Go to ".concat(type) }, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: getMediaLogo[type], alt: type }) })));
});
exports.default = exports.SvgIconSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFDakMsNkZBQTREO0FBQzVELCtGQUE4RDtBQUM5RCw2RkFBNEQ7QUFDNUQsMkZBQTBEO0FBQzFELDZGQUE0RDtBQUM1RCwrRkFBOEQ7QUFDOUQsMkZBQTBEO0FBQzFELDJGQUEwRDtBQUMxRCwyRkFBMEQ7QUFDMUQsaUdBQStEO0FBQy9ELCtGQUE4RDtBQUM5RCw2RkFBNEQ7QUFFNUQsSUFBTSxZQUFZLEdBQUc7SUFDbkIsT0FBTyxFQUFFLHdCQUFXO0lBQ3BCLFFBQVEsRUFBRSx5QkFBWTtJQUN0QixPQUFPLEVBQUUsd0JBQVc7SUFDcEIsTUFBTSxFQUFFLHVCQUFVO0lBQ2xCLE9BQU8sRUFBRSx3QkFBVztJQUNwQixRQUFRLEVBQUUseUJBQVk7SUFDdEIsTUFBTSxFQUFFLHVCQUFVO0lBQ2xCLE1BQU0sRUFBRSx1QkFBVTtJQUNsQixNQUFNLEVBQUUsdUJBQVU7SUFDbEIsU0FBUyxFQUFFLDBCQUFZO0lBQ3ZCLFFBQVEsRUFBRSx5QkFBWTtJQUN0QixPQUFPLEVBQUUsd0JBQVc7Q0FDckIsQ0FBQztBQUVGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxJQUFxQjtJQUNoRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsT0FBTyxFQUFFLFNBQVM7S0FDbkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBQyxJQUFxQixFQUFFLE1BQWM7SUFDOUQsT0FBTztRQUNMLE9BQU8sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDeEQsUUFBUSxFQUFFLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDbkQsT0FBTyxFQUFFLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN6RCxTQUFTLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQzNELE1BQU0sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDdkQsT0FBTyxFQUFFLDhCQUE4QixHQUFHLE1BQU07UUFDaEQsUUFBUSxFQUFFLHVCQUF1QixHQUFHLE1BQU07UUFDMUMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLDJCQUFvQixNQUFNLE1BQUc7UUFDckMsUUFBUSxFQUFFLG1DQUFtQyxHQUFHLE1BQU07UUFDdEQsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQXNCRixJQUFNLFNBQVMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsY0FBSSxDQUFDLENBQzVCLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQW1CLElBQUkscUJBQUE7SUFBTyxPQUFBLENBQUM7UUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDOUMsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7U0FDOUM7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2FBQ2hDO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2FBQ2hDO1NBQ0Y7S0FDRixDQUFDO0FBakJvQyxDQWlCcEMsQ0FDSCxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FHM0MsVUFBQyxFQUErRCxFQUFFLEdBQUc7SUFBbEUsSUFBaUIsSUFBSSxxQkFBQSxFQUFFLE1BQU0sWUFBQSxFQUFLLEtBQUssc0JBQXpDLDZCQUEyQyxDQUFGO0lBQzFDLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFDLFNBQVMsRUFDZixlQUFlLEVBQUUsSUFBSSxFQUNyQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUNqQyxLQUFLLGtCQUNHLGdCQUFTLElBQUksQ0FBRSxnQkFFM0IsdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUksSUFDckMsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxxQkFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vbGluay9saW5rJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4vc3ZnLWljb24nO1xuaW1wb3J0IEtleWJhc2VJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1rZXliYXNlLnN2Zyc7XG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy10ZWxlZ3JhbS5zdmcnO1xuaW1wb3J0IFR3aXR0ZXJJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy10d2l0dGVyLnN2Zyc7XG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtZ2l0aHViLnN2Zyc7XG5pbXBvcnQgWW91dHViZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXlvdXR1YmUuc3ZnJztcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgTWVkaXVtSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtbWVkaXVtLnN2Zyc7XG5pbXBvcnQgUmVkZGl0SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtcmVkZGl0LnN2Zyc7XG5pbXBvcnQgV2VjaGF0SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtd2VjaGF0LnN2Zyc7XG5pbXBvcnQgVHdpdHRlclhJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy10d2l0dGVyX3guc3ZnJztcbmltcG9ydCBMaW5rZWRpbkljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWxpbmtlZGluLnN2Zyc7XG5pbXBvcnQgV2Vic2l0ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXdlYnNpdGUuc3ZnJztcblxuY29uc3QgZ2V0TWVkaWFMb2dvID0ge1xuICBrZXliYXNlOiBLZXliYXNlSWNvbixcbiAgdGVsZWdyYW06IFRlbGVncmFtSWNvbixcbiAgdHdpdHRlcjogVHdpdHRlckljb24sXG4gIGdpdGh1YjogR2l0SHViSWNvbixcbiAgeW91dHViZTogWW91dHViZUljb24sXG4gIGZhY2Vib29rOiBGYWNlYm9va0ljb24sXG4gIG1lZGl1bTogTWVkaXVtSWNvbixcbiAgcmVkZGl0OiBSZWRkaXRJY29uLFxuICB3ZWNoYXQ6IFdlY2hhdEljb24sXG4gIHR3aXR0ZXJfeDogVHdpdHRlclhJY29uLFxuICBsaW5rZWRpbjogTGlua2VkaW5JY29uLFxuICB3ZWJzaXRlOiBXZWJzaXRlSWNvbixcbn07XG5cbmNvbnN0IGdldFNvY2lhbE1lZGlhQ29sb3IgPSAodHlwZTogU29jaWFsTWVkaWFUeXBlKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5YmFzZTogJyNFQTc3M0EnLFxuICAgIHRlbGVncmFtOiAnIzAwODhDQycsXG4gICAgdHdpdHRlcjogJyMxREExRjInLFxuICAgIGdpdGh1YjogJyMzMzMzMzMnLFxuICAgIHlvdXR1YmU6ICcjRkYwMDAwJyxcbiAgICBmYWNlYm9vazogJyM0MjY3QjInLFxuICAgIG1lZGl1bTogJyMwMEFCNkMnLFxuICAgIHJlZGRpdDogJyNGRjQ1MDAnLFxuICAgIHdlY2hhdDogJyM3QkIzMkUnLFxuICAgIHR3aXR0ZXJfeDogJyMwZjE0MTknLFxuICAgIGxpbmtlZGluOiAnIzBhNjZjMicsXG4gICAgd2Vic2l0ZTogJyNCQUJCQkYnLFxuICB9W3R5cGVdO1xufTtcblxuY29uc3QgZ2V0U29jaWFsTWVkaWFVcmwgPSAodHlwZTogU29jaWFsTWVkaWFUeXBlLCB1c2VySWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleWJhc2U6ICdodHRwczovL2tleWJhc2UuaW8vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHRlbGVncmFtOiAnaHR0cHM6Ly90Lm1lLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0d2l0dGVyOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdHdpdHRlcl94OiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB5b3V0dWJlOiAnaHR0cHM6Ly95b3V0dWJlLmNvbS9jaGFubmVsLycgKyB1c2VySWQsXG4gICAgZmFjZWJvb2s6ICdodHRwczovL2ZhY2Vib29rLmNvbS8nICsgdXNlcklkLFxuICAgIG1lZGl1bTogJ2h0dHBzOi8vbWVkaXVtLmNvbS8nICsgdXNlcklkLFxuICAgIHJlZGRpdDogJ2h0dHBzOi8vcmVkZGl0LmNvbS8nICsgdXNlcklkLFxuICAgIHdlY2hhdDogYHdlaXhpbjovL2RsL2NoYXQ/JHt1c2VySWR9L2AsXG4gICAgbGlua2VkaW46ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS8nICsgdXNlcklkLFxuICAgIHdlYnNpdGU6IHVzZXJJZCxcbiAgfVt0eXBlXTtcbn07XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE1lZGlhVHlwZSA9XG4gIHwgJ2tleWJhc2UnXG4gIHwgJ3RlbGVncmFtJ1xuICB8ICd0d2l0dGVyJ1xuICB8ICd0d2l0dGVyX3gnXG4gIHwgJ2dpdGh1YidcbiAgfCAneW91dHViZSdcbiAgfCAnZmFjZWJvb2snXG4gIHwgJ21lZGl1bSdcbiAgfCAncmVkZGl0J1xuICB8ICd3ZWNoYXQnXG4gIHwgJ2xpbmtlZGluJ1xuICB8ICd3ZWJzaXRlJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb25Tb2NpYWxQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHNvY2lhbE1lZGlhVHlwZTogU29jaWFsTWVkaWFUeXBlO1xuICB1c2VySWQ6IHN0cmluZztcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKExpbmspPE9taXQ8U3ZnSWNvblNvY2lhbFByb3BzLCAndXNlcklkJz4+KFxuICAoeyB0aGVtZSwgc29jaWFsTWVkaWFUeXBlOiB0eXBlIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICAnc3ZnIHBhdGgnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgfSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgJ3N2ZyBwYXRoJzoge1xuICAgICAgICBmaWxsOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgJ3N2ZyBwYXRoJzoge1xuICAgICAgICBmaWxsOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFN2Z0ljb25Tb2NpYWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MQW5jaG9yRWxlbWVudCxcbiAgU3ZnSWNvblNvY2lhbFByb3BzXG4+KCh7IHNvY2lhbE1lZGlhVHlwZTogdHlwZSwgdXNlcklkLCAuLi5wcm9wcyB9OiBTdmdJY29uU29jaWFsUHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgIHNvY2lhbE1lZGlhVHlwZT17dHlwZX1cbiAgICAgIGhyZWY9e2dldFNvY2lhbE1lZGlhVXJsKHR5cGUsIHVzZXJJZCl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBhcmlhLWxhYmVsPXtgR28gdG8gJHt0eXBlfWB9XG4gICAgPlxuICAgICAgPFN2Z0ljb24gc3JjPXtnZXRNZWRpYUxvZ29bdHlwZV19IGFsdD17dHlwZX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdJY29uU29jaWFsO1xuIl19