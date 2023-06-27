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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFFakMsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQXFCO0lBQ2hELE9BQU87UUFDTCxPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztRQUNsQixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztLQUNsQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLElBQXFCLEVBQUUsTUFBYztJQUM5RCxPQUFPO1FBQ0wsT0FBTyxFQUFFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN4RCxRQUFRLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxPQUFPLEVBQUUsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3pELE1BQU0sRUFBRSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDdkQsT0FBTyxFQUFFLDhCQUE4QixHQUFHLE1BQU07UUFDaEQsUUFBUSxFQUFFLHVCQUF1QixHQUFHLE1BQU07UUFDMUMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLHFCQUFxQixHQUFHLE1BQU07UUFDdEMsTUFBTSxFQUFFLDJCQUFvQixNQUFNLE1BQUc7S0FDdEMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQW1CRixJQUFNLFNBQVMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsY0FBSSxDQUFDLENBQzVCLFVBQUMsRUFBZ0M7UUFBOUIsS0FBSyxXQUFBLEVBQW1CLElBQUkscUJBQUE7SUFBTyxPQUFBLENBQUM7UUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDOUMsU0FBUyxFQUFFO1lBQ1QsS0FBSyxFQUFFLG1CQUFtQixDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7U0FDakM7S0FDRixDQUFDO0FBUm9DLENBUXBDLENBQ0gsQ0FBQztBQUVXLFFBQUEsYUFBYSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBRzNDLFVBQUMsRUFBK0QsRUFBRSxHQUFHO0lBQWxFLElBQWlCLElBQUkscUJBQUEsRUFBRSxNQUFNLFlBQUEsRUFBSyxLQUFLLHNCQUF6Qyw2QkFBMkMsQ0FBRjtJQUMxQyxPQUFPLENBQ0wsdUJBQUMsU0FBUyxxQkFDUixHQUFHLEVBQUUsR0FBRyxFQUNSLEtBQUssRUFBQyxTQUFTLEVBQ2YsZUFBZSxFQUFFLElBQUksRUFDckIsSUFBSSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFDakMsS0FBSyxjQUVULHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLDBCQUFtQixJQUFJLFNBQU0sR0FBSSxJQUNyQyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLHFCQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICcuLi9saW5rL2xpbmsnO1xyXG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuL3N2Zy1pY29uJztcclxuXHJcbmNvbnN0IGdldFNvY2lhbE1lZGlhQ29sb3IgPSAodHlwZTogU29jaWFsTWVkaWFUeXBlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGtleWJhc2U6ICcjRUE3NzNBJyxcclxuICAgIHRlbGVncmFtOiAnIzAwODhDQycsXHJcbiAgICB0d2l0dGVyOiAnIzFEQTFGMicsXHJcbiAgICBnaXRodWI6ICcjMzMzMzMzJyxcclxuICAgIHlvdXR1YmU6ICcjRkYwMDAwJyxcclxuICAgIGZhY2Vib29rOiAnIzQyNjdCMicsXHJcbiAgICBtZWRpdW06ICcjMDBBQjZDJyxcclxuICAgIHJlZGRpdDogJyNGRjQ1MDAnLFxyXG4gICAgd2VjaGF0OiAnIzdCQjMyRScsXHJcbiAgfVt0eXBlXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNvY2lhbE1lZGlhVXJsID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSwgdXNlcklkOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5YmFzZTogJ2h0dHBzOi8va2V5YmFzZS5pby8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXHJcbiAgICB0ZWxlZ3JhbTogJ2h0dHBzOi8vdC5tZS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXHJcbiAgICB0d2l0dGVyOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXHJcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxyXG4gICAgeW91dHViZTogJ2h0dHBzOi8veW91dHViZS5jb20vY2hhbm5lbC8nICsgdXNlcklkLFxyXG4gICAgZmFjZWJvb2s6ICdodHRwczovL2ZhY2Vib29rLmNvbS8nICsgdXNlcklkLFxyXG4gICAgbWVkaXVtOiAnaHR0cHM6Ly9tZWRpdW0uY29tLycgKyB1c2VySWQsXHJcbiAgICByZWRkaXQ6ICdodHRwczovL3JlZGRpdC5jb20vJyArIHVzZXJJZCxcclxuICAgIHdlY2hhdDogYHdlaXhpbjovL2RsL2NoYXQ/JHt1c2VySWR9L2AsXHJcbiAgfVt0eXBlXTtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFNvY2lhbE1lZGlhVHlwZSA9XHJcbiAgfCAna2V5YmFzZSdcclxuICB8ICd0ZWxlZ3JhbSdcclxuICB8ICd0d2l0dGVyJ1xyXG4gIHwgJ2dpdGh1YidcclxuICB8ICd5b3V0dWJlJ1xyXG4gIHwgJ2ZhY2Vib29rJ1xyXG4gIHwgJ21lZGl1bSdcclxuICB8ICdyZWRkaXQnXHJcbiAgfCAnd2VjaGF0JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb25Tb2NpYWxQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgc29jaWFsTWVkaWFUeXBlOiBTb2NpYWxNZWRpYVR5cGU7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChMaW5rKTxPbWl0PFN2Z0ljb25Tb2NpYWxQcm9wcywgJ3VzZXJJZCc+PihcclxuICAoeyB0aGVtZSwgc29jaWFsTWVkaWFUeXBlOiB0eXBlIH0pID0+ICh7XHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiBnZXRTb2NpYWxNZWRpYUNvbG9yKHR5cGUpLFxyXG4gICAgfSxcclxuICAgICcmOmFjdGl2ZSc6IHtcclxuICAgICAgY29sb3I6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgU3ZnSWNvblNvY2lhbCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgSFRNTEFuY2hvckVsZW1lbnQsXHJcbiAgU3ZnSWNvblNvY2lhbFByb3BzXHJcbj4oKHsgc29jaWFsTWVkaWFUeXBlOiB0eXBlLCB1c2VySWQsIC4uLnByb3BzIH06IFN2Z0ljb25Tb2NpYWxQcm9wcywgcmVmKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgIHNvY2lhbE1lZGlhVHlwZT17dHlwZX1cclxuICAgICAgaHJlZj17Z2V0U29jaWFsTWVkaWFVcmwodHlwZSwgdXNlcklkKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8U3ZnSWNvbiBzcmM9e2Bhc3NldHMvaWNvbnMvaWMtJHt0eXBlfS5zdmdgfSAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdmdJY29uU29jaWFsO1xyXG4iXX0=