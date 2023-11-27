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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFFakMsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQXFCO0lBQ2hELE9BQU87UUFDTCxPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztRQUNsQixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixTQUFTLEVBQUUsU0FBUztRQUNwQixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztLQUNuQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQXFCLEVBQUUsTUFBYztJQUM5RCxPQUFPO1FBQ0wsT0FBTyxFQUFFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN4RCxRQUFRLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3pELFNBQVMsRUFBRSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDM0QsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN2RCxPQUFPLEVBQUUsOEJBQThCLEdBQUcsTUFBTTtRQUNoRCxRQUFRLEVBQUUsdUJBQXVCLEdBQUcsTUFBTTtRQUMxQyxNQUFNLEVBQUUscUJBQXFCLEdBQUcsTUFBTTtRQUN0QyxNQUFNLEVBQUUscUJBQXFCLEdBQUcsTUFBTTtRQUN0QyxNQUFNLEVBQUUsMkJBQW9CLE1BQU0sTUFBRztRQUNyQyxRQUFRLEVBQUUsbUNBQW1DLEdBQUcsTUFBTTtRQUN0RCxPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBc0JGLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDNUIsVUFBQyxFQUFnQztRQUE5QixLQUFLLFdBQUEsRUFBbUIsSUFBSSxxQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtRQUM5QyxTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1NBQ2pDO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQztTQUNqQztLQUNGLENBQUM7QUFSb0MsQ0FRcEMsQ0FDSCxDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FHM0MsVUFBQyxFQUErRCxFQUFFLEdBQUc7SUFBbEUsSUFBaUIsSUFBSSxxQkFBQSxFQUFFLE1BQU0sWUFBQSxFQUFLLEtBQUssc0JBQXpDLDZCQUEyQyxDQUFGO0lBQzFDLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFDLFNBQVMsRUFDZixlQUFlLEVBQUUsSUFBSSxFQUNyQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUNqQyxLQUFLLGNBRVQsdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUUsMEJBQW1CLElBQUksU0FBTSxHQUFJLElBQ3JDLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUscUJBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL2xpbmsvbGluayc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuL3N2Zy1pY29uJztcblxuY29uc3QgZ2V0U29jaWFsTWVkaWFDb2xvciA9ICh0eXBlOiBTb2NpYWxNZWRpYVR5cGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXliYXNlOiAnI0VBNzczQScsXG4gICAgdGVsZWdyYW06ICcjMDA4OENDJyxcbiAgICB0d2l0dGVyOiAnIzFEQTFGMicsXG4gICAgZ2l0aHViOiAnIzMzMzMzMycsXG4gICAgeW91dHViZTogJyNGRjAwMDAnLFxuICAgIGZhY2Vib29rOiAnIzQyNjdCMicsXG4gICAgbWVkaXVtOiAnIzAwQUI2QycsXG4gICAgcmVkZGl0OiAnI0ZGNDUwMCcsXG4gICAgd2VjaGF0OiAnIzdCQjMyRScsXG4gICAgdHdpdHRlcl94OiAnIzBmMTQxOScsXG4gICAgbGlua2VkaW46ICcjMGE2NmMyJyxcbiAgICB3ZWJzaXRlOiAnI0JBQkJCRidcbiAgfVt0eXBlXTtcbn07XG5cbmNvbnN0IGdldFNvY2lhbE1lZGlhVXJsID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSwgdXNlcklkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXliYXNlOiAnaHR0cHM6Ly9rZXliYXNlLmlvLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0ZWxlZ3JhbTogJ2h0dHBzOi8vdC5tZS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdHdpdHRlcjogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHR3aXR0ZXJfeDogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20vY2hhbm5lbC8nICsgdXNlcklkLFxuICAgIGZhY2Vib29rOiAnaHR0cHM6Ly9mYWNlYm9vay5jb20vJyArIHVzZXJJZCxcbiAgICBtZWRpdW06ICdodHRwczovL21lZGl1bS5jb20vJyArIHVzZXJJZCxcbiAgICByZWRkaXQ6ICdodHRwczovL3JlZGRpdC5jb20vJyArIHVzZXJJZCxcbiAgICB3ZWNoYXQ6IGB3ZWl4aW46Ly9kbC9jaGF0PyR7dXNlcklkfS9gLFxuICAgIGxpbmtlZGluOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvJyArIHVzZXJJZCxcbiAgICB3ZWJzaXRlOiB1c2VySWRcbiAgfVt0eXBlXTtcbn07XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE1lZGlhVHlwZSA9XG4gIHwgJ2tleWJhc2UnXG4gIHwgJ3RlbGVncmFtJ1xuICB8ICd0d2l0dGVyJ1xuICB8ICd0d2l0dGVyX3gnXG4gIHwgJ2dpdGh1YidcbiAgfCAneW91dHViZSdcbiAgfCAnZmFjZWJvb2snXG4gIHwgJ21lZGl1bSdcbiAgfCAncmVkZGl0J1xuICB8ICd3ZWNoYXQnXG4gIHwgJ2xpbmtlZGluJ1xuICB8ICd3ZWJzaXRlJztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb25Tb2NpYWxQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHNvY2lhbE1lZGlhVHlwZTogU29jaWFsTWVkaWFUeXBlO1xuICB1c2VySWQ6IHN0cmluZztcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKExpbmspPE9taXQ8U3ZnSWNvblNvY2lhbFByb3BzLCAndXNlcklkJz4+KFxuICAoeyB0aGVtZSwgc29jaWFsTWVkaWFUeXBlOiB0eXBlIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxuICAgIH0sXG4gICAgJyY6YWN0aXZlJzoge1xuICAgICAgY29sb3I6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBTdmdJY29uU29jaWFsID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgSFRNTEFuY2hvckVsZW1lbnQsXG4gIFN2Z0ljb25Tb2NpYWxQcm9wc1xuPigoeyBzb2NpYWxNZWRpYVR5cGU6IHR5cGUsIHVzZXJJZCwgLi4ucHJvcHMgfTogU3ZnSWNvblNvY2lhbFByb3BzLCByZWYpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICBzb2NpYWxNZWRpYVR5cGU9e3R5cGV9XG4gICAgICBocmVmPXtnZXRTb2NpYWxNZWRpYVVybCh0eXBlLCB1c2VySWQpfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxTdmdJY29uIHNyYz17YGFzc2V0cy9pY29ucy9pYy0ke3R5cGV9LnN2Z2B9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnSWNvblNvY2lhbDtcbiJdfQ==