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
    var mapIcon = function () { };
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, color: "inherit", socialMediaType: type, href: getSocialMediaUrl(type, userId) }, props, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: getMediaLogo[type] }) })));
});
exports.default = exports.SvgIconSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFDakMsNkZBQTREO0FBQzVELCtGQUE4RDtBQUM5RCw2RkFBNEQ7QUFDNUQsMkZBQTBEO0FBQzFELDZGQUE0RDtBQUM1RCwrRkFBOEQ7QUFDOUQsMkZBQTBEO0FBQzFELDJGQUEwRDtBQUMxRCwyRkFBMEQ7QUFDMUQsaUdBQStEO0FBQy9ELCtGQUE4RDtBQUM5RCw2RkFBNEQ7QUFFNUQsSUFBTSxZQUFZLEdBQUc7SUFDbkIsT0FBTyxFQUFFLHdCQUFXO0lBQ3BCLFFBQVEsRUFBRSx5QkFBWTtJQUN0QixPQUFPLEVBQUUsd0JBQVc7SUFDcEIsTUFBTSxFQUFFLHVCQUFVO0lBQ2xCLE9BQU8sRUFBRSx3QkFBVztJQUNwQixRQUFRLEVBQUUseUJBQVk7SUFDdEIsTUFBTSxFQUFFLHVCQUFVO0lBQ2xCLE1BQU0sRUFBRSx1QkFBVTtJQUNsQixNQUFNLEVBQUUsdUJBQVU7SUFDbEIsU0FBUyxFQUFFLDBCQUFZO0lBQ3ZCLFFBQVEsRUFBRSx5QkFBWTtJQUN0QixPQUFPLEVBQUUsd0JBQVc7Q0FDckIsQ0FBQztBQUVGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxJQUFxQjtJQUNoRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsT0FBTyxFQUFFLFNBQVM7S0FDbkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBQyxJQUFxQixFQUFFLE1BQWM7SUFDOUQsT0FBTztRQUNMLE9BQU8sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDeEQsUUFBUSxFQUFFLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDbkQsT0FBTyxFQUFFLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN6RCxTQUFTLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQzNELE1BQU0sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDdkQsT0FBTyxFQUFFLDhCQUE4QixHQUFHLE1BQU07UUFDaEQsUUFBUSxFQUFFLHVCQUF1QixHQUFHLE1BQU07UUFDMUMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLDJCQUFvQixNQUFNLE1BQUc7UUFDckMsUUFBUSxFQUFFLG1DQUFtQyxHQUFHLE1BQU07UUFDdEQsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQXNCRixJQUFNLFNBQVMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsY0FBSSxDQUFDLENBQzVCLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQW1CLElBQUkscUJBQUE7SUFBTyxPQUFBLENBQUM7UUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDOUMsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7U0FDOUM7UUFDRCxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2FBQ2hDO1NBQ0Y7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFVBQVUsRUFBRTtnQkFDVixJQUFJLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2FBQ2hDO1NBQ0Y7S0FDRixDQUFDO0FBakJvQyxDQWlCcEMsQ0FDSCxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FHM0MsVUFBQyxFQUErRCxFQUFFLEdBQUc7SUFBbEUsSUFBaUIsSUFBSSxxQkFBQSxFQUFFLE1BQU0sWUFBQSxFQUFLLEtBQUssc0JBQXpDLDZCQUEyQyxDQUFGO0lBQzFDLElBQU0sT0FBTyxHQUFHLGNBQU8sQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFDLFNBQVMsRUFDZixlQUFlLEVBQUUsSUFBSSxFQUNyQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUNqQyxLQUFLLGNBRVQsdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFJLElBQzFCLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUscUJBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2xpbmsvbGluayc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuL3N2Zy1pY29uJztcbmltcG9ydCBLZXliYXNlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMta2V5YmFzZS5zdmcnO1xuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtdGVsZWdyYW0uc3ZnJztcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtdHdpdHRlci5zdmcnO1xuaW1wb3J0IEdpdEh1Ykljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWdpdGh1Yi5zdmcnO1xuaW1wb3J0IFlvdXR1YmVJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy15b3V0dWJlLnN2Zyc7XG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1mYWNlYm9vay5zdmcnO1xuaW1wb3J0IE1lZGl1bUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLW1lZGl1bS5zdmcnO1xuaW1wb3J0IFJlZGRpdEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXJlZGRpdC5zdmcnO1xuaW1wb3J0IFdlY2hhdEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXdlY2hhdC5zdmcnO1xuaW1wb3J0IFR3aXR0ZXJYSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtdHdpdHRlcl94LnN2Zyc7XG5pbXBvcnQgTGlua2VkaW5JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1saW5rZWRpbi5zdmcnO1xuaW1wb3J0IFdlYnNpdGVJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy13ZWJzaXRlLnN2Zyc7XG5cbmNvbnN0IGdldE1lZGlhTG9nbyA9IHtcbiAga2V5YmFzZTogS2V5YmFzZUljb24sXG4gIHRlbGVncmFtOiBUZWxlZ3JhbUljb24sXG4gIHR3aXR0ZXI6IFR3aXR0ZXJJY29uLFxuICBnaXRodWI6IEdpdEh1Ykljb24sXG4gIHlvdXR1YmU6IFlvdXR1YmVJY29uLFxuICBmYWNlYm9vazogRmFjZWJvb2tJY29uLFxuICBtZWRpdW06IE1lZGl1bUljb24sXG4gIHJlZGRpdDogUmVkZGl0SWNvbixcbiAgd2VjaGF0OiBXZWNoYXRJY29uLFxuICB0d2l0dGVyX3g6IFR3aXR0ZXJYSWNvbixcbiAgbGlua2VkaW46IExpbmtlZGluSWNvbixcbiAgd2Vic2l0ZTogV2Vic2l0ZUljb24sXG59O1xuXG5jb25zdCBnZXRTb2NpYWxNZWRpYUNvbG9yID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleWJhc2U6ICcjRUE3NzNBJyxcbiAgICB0ZWxlZ3JhbTogJyMwMDg4Q0MnLFxuICAgIHR3aXR0ZXI6ICcjMURBMUYyJyxcbiAgICBnaXRodWI6ICcjMzMzMzMzJyxcbiAgICB5b3V0dWJlOiAnI0ZGMDAwMCcsXG4gICAgZmFjZWJvb2s6ICcjNDI2N0IyJyxcbiAgICBtZWRpdW06ICcjMDBBQjZDJyxcbiAgICByZWRkaXQ6ICcjRkY0NTAwJyxcbiAgICB3ZWNoYXQ6ICcjN0JCMzJFJyxcbiAgICB0d2l0dGVyX3g6ICcjMGYxNDE5JyxcbiAgICBsaW5rZWRpbjogJyMwYTY2YzInLFxuICAgIHdlYnNpdGU6ICcjQkFCQkJGJyxcbiAgfVt0eXBlXTtcbn07XG5cbmNvbnN0IGdldFNvY2lhbE1lZGlhVXJsID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSwgdXNlcklkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXliYXNlOiAnaHR0cHM6Ly9rZXliYXNlLmlvLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0ZWxlZ3JhbTogJ2h0dHBzOi8vdC5tZS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdHdpdHRlcjogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHR3aXR0ZXJfeDogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20vY2hhbm5lbC8nICsgdXNlcklkLFxuICAgIGZhY2Vib29rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20vJyArIHVzZXJJZCxcbiAgICBtZWRpdW06ICdodHRwczovL21lZGl1bS5jb20vJyArIHVzZXJJZCxcbiAgICByZWRkaXQ6ICdodHRwczovL3JlZGRpdC5jb20vJyArIHVzZXJJZCxcbiAgICB3ZWNoYXQ6IGB3ZWl4aW46Ly9kbC9jaGF0PyR7dXNlcklkfS9gLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvJyArIHVzZXJJZCxcbiAgICB3ZWJzaXRlOiB1c2VySWQsXG4gIH1bdHlwZV07XG59O1xuXG5leHBvcnQgdHlwZSBTb2NpYWxNZWRpYVR5cGUgPVxuICB8ICdrZXliYXNlJ1xuICB8ICd0ZWxlZ3JhbSdcbiAgfCAndHdpdHRlcidcbiAgfCAndHdpdHRlcl94J1xuICB8ICdnaXRodWInXG4gIHwgJ3lvdXR1YmUnXG4gIHwgJ2ZhY2Vib29rJ1xuICB8ICdtZWRpdW0nXG4gIHwgJ3JlZGRpdCdcbiAgfCAnd2VjaGF0J1xuICB8ICdsaW5rZWRpbidcbiAgfCAnd2Vic2l0ZSc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uU29jaWFsUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBzb2NpYWxNZWRpYVR5cGU6IFNvY2lhbE1lZGlhVHlwZTtcbiAgdXNlcklkOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChMaW5rKTxPbWl0PFN2Z0ljb25Tb2NpYWxQcm9wcywgJ3VzZXJJZCc+PihcbiAgKHsgdGhlbWUsIHNvY2lhbE1lZGlhVHlwZTogdHlwZSB9KSA9PiAoe1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgJ3N2ZyBwYXRoJzoge1xuICAgICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICAgICdzdmcgcGF0aCc6IHtcbiAgICAgICAgZmlsbDogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjphY3RpdmUnOiB7XG4gICAgICBjb2xvcjogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICAgICdzdmcgcGF0aCc6IHtcbiAgICAgICAgZmlsbDogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBTdmdJY29uU29jaWFsID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEFuY2hvckVsZW1lbnQsXG4gIFN2Z0ljb25Tb2NpYWxQcm9wc1xuPigoeyBzb2NpYWxNZWRpYVR5cGU6IHR5cGUsIHVzZXJJZCwgLi4ucHJvcHMgfTogU3ZnSWNvblNvY2lhbFByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgbWFwSWNvbiA9ICgpID0+IHt9O1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgIHNvY2lhbE1lZGlhVHlwZT17dHlwZX1cbiAgICAgIGhyZWY9e2dldFNvY2lhbE1lZGlhVXJsKHR5cGUsIHVzZXJJZCl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFN2Z0ljb24gc3JjPXtnZXRNZWRpYUxvZ29bdHlwZV19IC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnSWNvblNvY2lhbDtcbiJdfQ==