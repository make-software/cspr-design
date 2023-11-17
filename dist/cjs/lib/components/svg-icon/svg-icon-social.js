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
        twitter_x: '#0f1419',
        linkedin: '#0a66c2',
        website: '#BABBBF'
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
        website: userId
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFFakMsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQXFCO0lBQ2hELE9BQU87UUFDTCxPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztRQUNsQixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztLQUNuQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQXFCLEVBQUUsTUFBYztJQUM5RCxPQUFPO1FBQ0wsT0FBTyxFQUFFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN4RCxRQUFRLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3pELFNBQVMsRUFBRSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDM0QsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN2RCxPQUFPLEVBQUUsOEJBQThCLEdBQUcsTUFBTTtRQUNoRCxRQUFRLEVBQUUsdUJBQXVCLEdBQUcsTUFBTTtRQUMxQyxNQUFNLEVBQUUscUJBQXFCLEdBQUcsTUFBTTtRQUN0QyxNQUFNLEVBQUUscUJBQXFCLEdBQUcsTUFBTTtRQUN0QyxNQUFNLEVBQUUsMkJBQW9CLE1BQU0sTUFBRztRQUNyQyxRQUFRLEVBQUUsbUNBQW1DLEdBQUcsTUFBTTtRQUN0RCxPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBc0JGLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDNUIsVUFBQyxFQUFnQztRQUE5QixLQUFLLFdBQUEsRUFBbUIsSUFBSSxxQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtRQUM5QyxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1NBQ2pDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQztTQUNqQztLQUNGLENBQUM7QUFSb0MsQ0FRcEMsQ0FDSCxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FHM0MsVUFBQyxFQUErRCxFQUFFLEdBQUc7SUFBbEUsSUFBaUIsSUFBSSxxQkFBQSxFQUFFLE1BQU0sWUFBQSxFQUFLLEtBQUssc0JBQXpDLDZCQUEyQyxDQUFGO0lBQzFDLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFDLFNBQVMsRUFDZixlQUFlLEVBQUUsSUFBSSxFQUNyQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUNqQyxLQUFLLGNBRVQsdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUUsMEJBQW1CLElBQUksU0FBTSxHQUFJLElBQ3JDLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUscUJBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJy4uL2xpbmsvbGluayc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJy4vc3ZnLWljb24nO1xyXG5cclxuY29uc3QgZ2V0U29jaWFsTWVkaWFDb2xvciA9ICh0eXBlOiBTb2NpYWxNZWRpYVR5cGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5YmFzZTogJyNFQTc3M0EnLFxyXG4gICAgdGVsZWdyYW06ICcjMDA4OENDJyxcclxuICAgIHR3aXR0ZXI6ICcjMURBMUYyJyxcclxuICAgIGdpdGh1YjogJyMzMzMzMzMnLFxyXG4gICAgeW91dHViZTogJyNGRjAwMDAnLFxyXG4gICAgZmFjZWJvb2s6ICcjNDI2N0IyJyxcclxuICAgIG1lZGl1bTogJyMwMEFCNkMnLFxyXG4gICAgcmVkZGl0OiAnI0ZGNDUwMCcsXHJcbiAgICB3ZWNoYXQ6ICcjN0JCMzJFJyxcclxuICAgIHR3aXR0ZXJfeDogJyMwZjE0MTknLFxyXG4gICAgbGlua2VkaW46ICcjMGE2NmMyJyxcclxuICAgIHdlYnNpdGU6ICcjQkFCQkJGJ1xyXG4gIH1bdHlwZV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTb2NpYWxNZWRpYVVybCA9ICh0eXBlOiBTb2NpYWxNZWRpYVR5cGUsIHVzZXJJZDogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGtleWJhc2U6ICdodHRwczovL2tleWJhc2UuaW8vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxyXG4gICAgdGVsZWdyYW06ICdodHRwczovL3QubWUvJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxyXG4gICAgdHdpdHRlcjogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxyXG4gICAgdHdpdHRlcl94OiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXHJcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxyXG4gICAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20vY2hhbm5lbC8nICsgdXNlcklkLFxyXG4gICAgZmFjZWJvb2s6ICdodHRwczovL2ZhY2Vib29rLmNvbS8nICsgdXNlcklkLFxyXG4gICAgbWVkaXVtOiAnaHR0cHM6Ly9tZWRpdW0uY29tLycgKyB1c2VySWQsXHJcbiAgICByZWRkaXQ6ICdodHRwczovL3JlZGRpdC5jb20vJyArIHVzZXJJZCxcclxuICAgIHdlY2hhdDogYHdlaXhpbjovL2RsL2NoYXQ/JHt1c2VySWR9L2AsXHJcbiAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55LycgKyB1c2VySWQsXHJcbiAgICB3ZWJzaXRlOiB1c2VySWRcclxuICB9W3R5cGVdO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgU29jaWFsTWVkaWFUeXBlID1cclxuICB8ICdrZXliYXNlJ1xyXG4gIHwgJ3RlbGVncmFtJ1xyXG4gIHwgJ3R3aXR0ZXInXHJcbiAgfCAndHdpdHRlcl94J1xyXG4gIHwgJ2dpdGh1YidcclxuICB8ICd5b3V0dWJlJ1xyXG4gIHwgJ2ZhY2Vib29rJ1xyXG4gIHwgJ21lZGl1bSdcclxuICB8ICdyZWRkaXQnXHJcbiAgfCAnd2VjaGF0J1xyXG4gIHwgJ2xpbmtlZGluJ1xyXG4gIHwgJ3dlYnNpdGUnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvblNvY2lhbFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBzb2NpYWxNZWRpYVR5cGU6IFNvY2lhbE1lZGlhVHlwZTtcclxuICB1c2VySWQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKExpbmspPE9taXQ8U3ZnSWNvblNvY2lhbFByb3BzLCAndXNlcklkJz4+KFxyXG4gICh7IHRoZW1lLCBzb2NpYWxNZWRpYVR5cGU6IHR5cGUgfSkgPT4gKHtcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgY29sb3I6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXHJcbiAgICB9LFxyXG4gICAgJyY6YWN0aXZlJzoge1xyXG4gICAgICBjb2xvcjogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdmdJY29uU29jaWFsID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBIVE1MQW5jaG9yRWxlbWVudCxcclxuICBTdmdJY29uU29jaWFsUHJvcHNcclxuPigoeyBzb2NpYWxNZWRpYVR5cGU6IHR5cGUsIHVzZXJJZCwgLi4ucHJvcHMgfTogU3ZnSWNvblNvY2lhbFByb3BzLCByZWYpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgc29jaWFsTWVkaWFUeXBlPXt0eXBlfVxyXG4gICAgICBocmVmPXtnZXRTb2NpYWxNZWRpYVVybCh0eXBlLCB1c2VySWQpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxTdmdJY29uIHNyYz17YGFzc2V0cy9pY29ucy9pYy0ke3R5cGV9LnN2Z2B9IC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN2Z0ljb25Tb2NpYWw7XHJcbiJdfQ==