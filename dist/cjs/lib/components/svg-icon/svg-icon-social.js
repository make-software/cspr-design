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
        '&:hover': {
            color: getSocialMediaColor(type),
        },
        '&:active': {
            color: getSocialMediaColor(type),
        },
    });
});
exports.SvgIconSocial = react_1.default.forwardRef(function (_a, ref) {
    var type = _a.socialMediaType, userId = _a.userId, props = tslib_1.__rest(_a, ["socialMediaType", "userId"]);
    var mapIcon = function () { };
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, color: "inherit", socialMediaType: type, href: getSocialMediaUrl(type, userId) }, props, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: getMediaLogo[type] }) })));
});
exports.default = exports.SvgIconSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFDakMsNkZBQTREO0FBQzVELCtGQUE4RDtBQUM5RCw2RkFBNEQ7QUFDNUQsMkZBQTBEO0FBQzFELDZGQUE0RDtBQUM1RCwrRkFBOEQ7QUFDOUQsMkZBQTBEO0FBQzFELDJGQUEwRDtBQUMxRCwyRkFBMEQ7QUFDMUQsaUdBQStEO0FBQy9ELCtGQUE4RDtBQUM5RCw2RkFBNEQ7QUFFNUQsSUFBTSxZQUFZLEdBQUc7SUFDbkIsT0FBTyxFQUFFLHdCQUFXO0lBQ3BCLFFBQVEsRUFBRSx5QkFBWTtJQUN0QixPQUFPLEVBQUUsd0JBQVc7SUFDcEIsTUFBTSxFQUFFLHVCQUFVO0lBQ2xCLE9BQU8sRUFBRSx3QkFBVztJQUNwQixRQUFRLEVBQUUseUJBQVk7SUFDdEIsTUFBTSxFQUFFLHVCQUFVO0lBQ2xCLE1BQU0sRUFBRSx1QkFBVTtJQUNsQixNQUFNLEVBQUUsdUJBQVU7SUFDbEIsU0FBUyxFQUFFLDBCQUFZO0lBQ3ZCLFFBQVEsRUFBRSx5QkFBWTtJQUN0QixPQUFPLEVBQUUsd0JBQVc7Q0FDckIsQ0FBQztBQUVGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxJQUFxQjtJQUNoRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsTUFBTSxFQUFFLFNBQVM7UUFDakIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLFNBQVM7UUFDakIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsT0FBTyxFQUFFLFNBQVM7S0FDbkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsVUFBQyxJQUFxQixFQUFFLE1BQWM7SUFDOUQsT0FBTztRQUNMLE9BQU8sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDeEQsUUFBUSxFQUFFLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDbkQsT0FBTyxFQUFFLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN6RCxTQUFTLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQzNELE1BQU0sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDdkQsT0FBTyxFQUFFLDhCQUE4QixHQUFHLE1BQU07UUFDaEQsUUFBUSxFQUFFLHVCQUF1QixHQUFHLE1BQU07UUFDMUMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLDJCQUFvQixNQUFNLE1BQUc7UUFDckMsUUFBUSxFQUFFLG1DQUFtQyxHQUFHLE1BQU07UUFDdEQsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQXNCRixJQUFNLFNBQVMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsY0FBSSxDQUFDLENBQzVCLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQW1CLElBQUkscUJBQUE7SUFBTyxPQUFBLENBQUM7UUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDOUMsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7U0FDakM7S0FDRixDQUFDO0FBUm9DLENBUXBDLENBQ0gsQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBRzNDLFVBQUMsRUFBK0QsRUFBRSxHQUFHO0lBQWxFLElBQWlCLElBQUkscUJBQUEsRUFBRSxNQUFNLFlBQUEsRUFBSyxLQUFLLHNCQUF6Qyw2QkFBMkMsQ0FBRjtJQUMxQyxJQUFNLE9BQU8sR0FBRyxjQUFPLENBQUMsQ0FBQztJQUN6QixPQUFPLENBQ0wsdUJBQUMsU0FBUyxxQkFDUixHQUFHLEVBQUUsR0FBRyxFQUNSLEtBQUssRUFBQyxTQUFTLEVBQ2YsZUFBZSxFQUFFLElBQUksRUFDckIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFDakMsS0FBSyxjQUVULHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBSSxJQUMxQixDQUNiLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLHFCQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9saW5rL2xpbmsnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi9zdmctaWNvbic7XG5pbXBvcnQgS2V5YmFzZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWtleWJhc2Uuc3ZnJztcbmltcG9ydCBUZWxlZ3JhbUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXRlbGVncmFtLnN2Zyc7XG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXR3aXR0ZXIuc3ZnJztcbmltcG9ydCBHaXRIdWJJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1naXRodWIuc3ZnJztcbmltcG9ydCBZb3V0dWJlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMteW91dHViZS5zdmcnO1xuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtZmFjZWJvb2suc3ZnJztcbmltcG9ydCBNZWRpdW1JY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1tZWRpdW0uc3ZnJztcbmltcG9ydCBSZWRkaXRJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1yZWRkaXQuc3ZnJztcbmltcG9ydCBXZWNoYXRJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy13ZWNoYXQuc3ZnJztcbmltcG9ydCBUd2l0dGVyWEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXR3aXR0ZXJfeC5zdmcnO1xuaW1wb3J0IExpbmtlZGluSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtbGlua2VkaW4uc3ZnJztcbmltcG9ydCBXZWJzaXRlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtd2Vic2l0ZS5zdmcnO1xuXG5jb25zdCBnZXRNZWRpYUxvZ28gPSB7XG4gIGtleWJhc2U6IEtleWJhc2VJY29uLFxuICB0ZWxlZ3JhbTogVGVsZWdyYW1JY29uLFxuICB0d2l0dGVyOiBUd2l0dGVySWNvbixcbiAgZ2l0aHViOiBHaXRIdWJJY29uLFxuICB5b3V0dWJlOiBZb3V0dWJlSWNvbixcbiAgZmFjZWJvb2s6IEZhY2Vib29rSWNvbixcbiAgbWVkaXVtOiBNZWRpdW1JY29uLFxuICByZWRkaXQ6IFJlZGRpdEljb24sXG4gIHdlY2hhdDogV2VjaGF0SWNvbixcbiAgdHdpdHRlcl94OiBUd2l0dGVyWEljb24sXG4gIGxpbmtlZGluOiBMaW5rZWRpbkljb24sXG4gIHdlYnNpdGU6IFdlYnNpdGVJY29uLFxufTtcblxuY29uc3QgZ2V0U29jaWFsTWVkaWFDb2xvciA9ICh0eXBlOiBTb2NpYWxNZWRpYVR5cGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXliYXNlOiAnI0VBNzczQScsXG4gICAgdGVsZWdyYW06ICcjMDA4OENDJyxcbiAgICB0d2l0dGVyOiAnIzFEQTFGMicsXG4gICAgZ2l0aHViOiAnIzMzMzMzMycsXG4gICAgeW91dHViZTogJyNGRjAwMDAnLFxuICAgIGZhY2Vib29rOiAnIzQyNjdCMicsXG4gICAgbWVkaXVtOiAnIzAwQUI2QycsXG4gICAgcmVkZGl0OiAnI0ZGNDUwMCcsXG4gICAgd2VjaGF0OiAnIzdCQjMyRScsXG4gICAgdHdpdHRlcl94OiAnIzBmMTQxOScsXG4gICAgbGlua2VkaW46ICcjMGE2NmMyJyxcbiAgICB3ZWJzaXRlOiAnI0JBQkJCRicsXG4gIH1bdHlwZV07XG59O1xuXG5jb25zdCBnZXRTb2NpYWxNZWRpYVVybCA9ICh0eXBlOiBTb2NpYWxNZWRpYVR5cGUsIHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5YmFzZTogJ2h0dHBzOi8va2V5YmFzZS5pby8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdGVsZWdyYW06ICdodHRwczovL3QubWUvJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHR3aXR0ZXI6ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0d2l0dGVyX3g6ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHlvdXR1YmU6ICdodHRwczovL3lvdXR1YmUuY29tL2NoYW5uZWwvJyArIHVzZXJJZCxcbiAgICBmYWNlYm9vazogJ2h0dHBzOi8vZmFjZWJvb2suY29tLycgKyB1c2VySWQsXG4gICAgbWVkaXVtOiAnaHR0cHM6Ly9tZWRpdW0uY29tLycgKyB1c2VySWQsXG4gICAgcmVkZGl0OiAnaHR0cHM6Ly9yZWRkaXQuY29tLycgKyB1c2VySWQsXG4gICAgd2VjaGF0OiBgd2VpeGluOi8vZGwvY2hhdD8ke3VzZXJJZH0vYCxcbiAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55LycgKyB1c2VySWQsXG4gICAgd2Vic2l0ZTogdXNlcklkLFxuICB9W3R5cGVdO1xufTtcblxuZXhwb3J0IHR5cGUgU29jaWFsTWVkaWFUeXBlID1cbiAgfCAna2V5YmFzZSdcbiAgfCAndGVsZWdyYW0nXG4gIHwgJ3R3aXR0ZXInXG4gIHwgJ3R3aXR0ZXJfeCdcbiAgfCAnZ2l0aHViJ1xuICB8ICd5b3V0dWJlJ1xuICB8ICdmYWNlYm9vaydcbiAgfCAnbWVkaXVtJ1xuICB8ICdyZWRkaXQnXG4gIHwgJ3dlY2hhdCdcbiAgfCAnbGlua2VkaW4nXG4gIHwgJ3dlYnNpdGUnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvblNvY2lhbFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgc29jaWFsTWVkaWFUeXBlOiBTb2NpYWxNZWRpYVR5cGU7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoTGluayk8T21pdDxTdmdJY29uU29jaWFsUHJvcHMsICd1c2VySWQnPj4oXG4gICh7IHRoZW1lLCBzb2NpYWxNZWRpYVR5cGU6IHR5cGUgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXG4gICAgfSxcbiAgICAnJjphY3RpdmUnOiB7XG4gICAgICBjb2xvcjogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFN2Z0ljb25Tb2NpYWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MQW5jaG9yRWxlbWVudCxcbiAgU3ZnSWNvblNvY2lhbFByb3BzXG4+KCh7IHNvY2lhbE1lZGlhVHlwZTogdHlwZSwgdXNlcklkLCAuLi5wcm9wcyB9OiBTdmdJY29uU29jaWFsUHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCBtYXBJY29uID0gKCkgPT4ge307XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgc29jaWFsTWVkaWFUeXBlPXt0eXBlfVxuICAgICAgaHJlZj17Z2V0U29jaWFsTWVkaWFVcmwodHlwZSwgdXNlcklkKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8U3ZnSWNvbiBzcmM9e2dldE1lZGlhTG9nb1t0eXBlXX0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdJY29uU29jaWFsO1xuIl19