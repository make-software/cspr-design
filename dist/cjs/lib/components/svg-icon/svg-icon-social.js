"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgIconSocial = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var link_1 = tslib_1.__importDefault(require("../link/link"));
var svg_icon_1 = tslib_1.__importDefault(require("./svg-icon"));
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
    }[type];
};
var getSocialMediaUrl = function (type, userId) {
    return {
        keybase: 'https://keybase.io/' + userId.replace('@', ''),
        telegram: 'https://t.me/' + userId.replace('@', ''),
        twitter: 'https://twitter.com/' + userId.replace('@', ''),
        github: 'https://github.com/' + userId.replace('@', ''),
        youtube: 'https://youtube.com/channel/' + userId,
        facebook: 'https://facebook.com/' + userId,
        medium: 'https://medium.com/' + userId,
        reddit: 'https://reddit.com/' + userId,
        wechat: "weixin://dl/chat?".concat(userId, "/"),
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
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, color: "inherit", socialMediaType: type, href: getSocialMediaUrl(type, userId) }, props, { children: (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: "assets/icons/ic-".concat(type, ".svg") }) })));
});
exports.default = exports.SvgIconSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFFakMsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQXFCO0lBQ2hELE9BQU87UUFDTCxPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztRQUNsQixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQXFCLEVBQUUsTUFBYztJQUM5RCxPQUFPO1FBQ0wsT0FBTyxFQUFFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN4RCxRQUFRLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3pELE1BQU0sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDdkQsT0FBTyxFQUFFLDhCQUE4QixHQUFHLE1BQU07UUFDaEQsUUFBUSxFQUFFLHVCQUF1QixHQUFHLE1BQU07UUFDMUMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLDJCQUFvQixNQUFNLE1BQUc7S0FDdEMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQW1CRixJQUFNLFNBQVMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsY0FBSSxDQUFDLENBQzVCLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQW1CLElBQUkscUJBQUE7SUFBTyxPQUFBLENBQUM7UUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDOUMsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7U0FDakM7S0FDRixDQUFDO0FBUm9DLENBUXBDLENBQ0gsQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBRzNDLFVBQUMsRUFBK0QsRUFBRSxHQUFHO0lBQWxFLElBQWlCLElBQUkscUJBQUEsRUFBRSxNQUFNLFlBQUEsRUFBSyxLQUFLLHNCQUF6Qyw2QkFBMkMsQ0FBRjtJQUMxQyxPQUFPLENBQ0wsdUJBQUMsU0FBUyxxQkFDUixHQUFHLEVBQUUsR0FBRyxFQUNSLEtBQUssRUFBQyxTQUFTLEVBQ2YsZUFBZSxFQUFFLElBQUksRUFDckIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFDakMsS0FBSyxjQUVULHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLDBCQUFtQixJQUFJLFNBQU0sR0FBSSxJQUNyQyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLHFCQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICcuLi9saW5rL2xpbmsnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi9zdmctaWNvbic7XG5cbmNvbnN0IGdldFNvY2lhbE1lZGlhQ29sb3IgPSAodHlwZTogU29jaWFsTWVkaWFUeXBlKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5YmFzZTogJyNFQTc3M0EnLFxuICAgIHRlbGVncmFtOiAnIzAwODhDQycsXG4gICAgdHdpdHRlcjogJyMxREExRjInLFxuICAgIGdpdGh1YjogJyMzMzMzMzMnLFxuICAgIHlvdXR1YmU6ICcjRkYwMDAwJyxcbiAgICBmYWNlYm9vazogJyM0MjY3QjInLFxuICAgIG1lZGl1bTogJyMwMEFCNkMnLFxuICAgIHJlZGRpdDogJyNGRjQ1MDAnLFxuICAgIHdlY2hhdDogJyM3QkIzMkUnLFxuICB9W3R5cGVdO1xufTtcblxuY29uc3QgZ2V0U29jaWFsTWVkaWFVcmwgPSAodHlwZTogU29jaWFsTWVkaWFUeXBlLCB1c2VySWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleWJhc2U6ICdodHRwczovL2tleWJhc2UuaW8vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHRlbGVncmFtOiAnaHR0cHM6Ly90Lm1lLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0d2l0dGVyOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB5b3V0dWJlOiAnaHR0cHM6Ly95b3V0dWJlLmNvbS9jaGFubmVsLycgKyB1c2VySWQsXG4gICAgZmFjZWJvb2s6ICdodHRwczovL2ZhY2Vib29rLmNvbS8nICsgdXNlcklkLFxuICAgIG1lZGl1bTogJ2h0dHBzOi8vbWVkaXVtLmNvbS8nICsgdXNlcklkLFxuICAgIHJlZGRpdDogJ2h0dHBzOi8vcmVkZGl0LmNvbS8nICsgdXNlcklkLFxuICAgIHdlY2hhdDogYHdlaXhpbjovL2RsL2NoYXQ/JHt1c2VySWR9L2AsXG4gIH1bdHlwZV07XG59O1xuXG5leHBvcnQgdHlwZSBTb2NpYWxNZWRpYVR5cGUgPVxuICB8ICdrZXliYXNlJ1xuICB8ICd0ZWxlZ3JhbSdcbiAgfCAndHdpdHRlcidcbiAgfCAnZ2l0aHViJ1xuICB8ICd5b3V0dWJlJ1xuICB8ICdmYWNlYm9vaydcbiAgfCAnbWVkaXVtJ1xuICB8ICdyZWRkaXQnXG4gIHwgJ3dlY2hhdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uU29jaWFsUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBzb2NpYWxNZWRpYVR5cGU6IFNvY2lhbE1lZGlhVHlwZTtcbiAgdXNlcklkOiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChMaW5rKTxPbWl0PFN2Z0ljb25Tb2NpYWxQcm9wcywgJ3VzZXJJZCc+PihcbiAgKHsgdGhlbWUsIHNvY2lhbE1lZGlhVHlwZTogdHlwZSB9KSA9PiAoe1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICB9LFxuICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgU3ZnSWNvblNvY2lhbCA9IFJlYWN0LmZvcndhcmRSZWY8XG4gIEhUTUxBbmNob3JFbGVtZW50LFxuICBTdmdJY29uU29jaWFsUHJvcHNcbj4oKHsgc29jaWFsTWVkaWFUeXBlOiB0eXBlLCB1c2VySWQsIC4uLnByb3BzIH06IFN2Z0ljb25Tb2NpYWxQcm9wcywgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgc29jaWFsTWVkaWFUeXBlPXt0eXBlfVxuICAgICAgaHJlZj17Z2V0U29jaWFsTWVkaWFVcmwodHlwZSwgdXNlcklkKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8U3ZnSWNvbiBzcmM9e2Bhc3NldHMvaWNvbnMvaWMtJHt0eXBlfS5zdmdgfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0ljb25Tb2NpYWw7XG4iXX0=