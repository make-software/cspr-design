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
        x: '#0f1419',
        linkedin: '#0a66c2',
        website: '#BABBBF'
    }[type];
};
var getSocialMediaUrl = function (type, userId) {
    return {
        keybase: 'https://keybase.io/' + userId.replace('@', ''),
        telegram: 'https://t.me/' + userId.replace('@', ''),
        twitter: 'https://twitter.com/' + userId.replace('@', ''),
        x: 'https://twitter.com/' + userId.replace('@', ''),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24tc29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3N2Zy1pY29uL3N2Zy1pY29uLXNvY2lhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBMEI7QUFDMUIsZ0ZBQXVDO0FBRXZDLDhEQUFnQztBQUNoQyxnRUFBaUM7QUFFakMsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQXFCO0lBQ2hELE9BQU87UUFDTCxPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixPQUFPLEVBQUUsU0FBUztRQUNsQixNQUFNLEVBQUUsU0FBUztRQUNqQixPQUFPLEVBQUUsU0FBUztRQUNsQixRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsU0FBUztRQUNqQixDQUFDLEVBQUUsU0FBUztRQUNaLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE9BQU8sRUFBRSxTQUFTO0tBQ25CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDVixDQUFDLENBQUM7QUFFRixJQUFNLGlCQUFpQixHQUFHLFVBQUMsSUFBcUIsRUFBRSxNQUFjO0lBQzlELE9BQU87UUFDTCxPQUFPLEVBQUUscUJBQXFCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3hELFFBQVEsRUFBRSxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDekQsQ0FBQyxFQUFFLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUNuRCxNQUFNLEVBQUUscUJBQXFCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3ZELE9BQU8sRUFBRSw4QkFBOEIsR0FBRyxNQUFNO1FBQ2hELFFBQVEsRUFBRSx1QkFBdUIsR0FBRyxNQUFNO1FBQzFDLE1BQU0sRUFBRSxxQkFBcUIsR0FBRyxNQUFNO1FBQ3RDLE1BQU0sRUFBRSxxQkFBcUIsR0FBRyxNQUFNO1FBQ3RDLE1BQU0sRUFBRSwyQkFBb0IsTUFBTSxNQUFHO1FBQ3JDLFFBQVEsRUFBRSxtQ0FBbUMsR0FBRyxNQUFNO1FBQ3RELE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDVixDQUFDLENBQUM7QUFzQkYsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGNBQUksQ0FBQyxDQUM1QixVQUFDLEVBQWdDO1FBQTlCLEtBQUssV0FBQSxFQUFtQixJQUFJLHFCQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQzlDLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7U0FDakM7UUFDRCxVQUFVLEVBQUU7WUFDVixLQUFLLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxDQUFDO1NBQ2pDO0tBQ0YsQ0FBQztBQVJvQyxDQVFwQyxDQUNILENBQUM7QUFFVyxRQUFBLGFBQWEsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUczQyxVQUFDLEVBQStELEVBQUUsR0FBRztJQUFsRSxJQUFpQixJQUFJLHFCQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUssS0FBSyxzQkFBekMsNkJBQTJDLENBQUY7SUFDMUMsT0FBTyxDQUNMLHVCQUFDLFNBQVMscUJBQ1IsR0FBRyxFQUFFLEdBQUcsRUFDUixLQUFLLEVBQUMsU0FBUyxFQUNmLGVBQWUsRUFBRSxJQUFJLEVBQ3JCLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQ2pDLEtBQUssY0FFVCx1QkFBQyxrQkFBTyxJQUFDLEdBQUcsRUFBRSwwQkFBbUIsSUFBSSxTQUFNLEdBQUksSUFDckMsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxxQkFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vbGluay9saW5rJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4vc3ZnLWljb24nO1xuXG5jb25zdCBnZXRTb2NpYWxNZWRpYUNvbG9yID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGtleWJhc2U6ICcjRUE3NzNBJyxcbiAgICB0ZWxlZ3JhbTogJyMwMDg4Q0MnLFxuICAgIHR3aXR0ZXI6ICcjMURBMUYyJyxcbiAgICBnaXRodWI6ICcjMzMzMzMzJyxcbiAgICB5b3V0dWJlOiAnI0ZGMDAwMCcsXG4gICAgZmFjZWJvb2s6ICcjNDI2N0IyJyxcbiAgICBtZWRpdW06ICcjMDBBQjZDJyxcbiAgICByZWRkaXQ6ICcjRkY0NTAwJyxcbiAgICB3ZWNoYXQ6ICcjN0JCMzJFJyxcbiAgICB4OiAnIzBmMTQxOScsXG4gICAgbGlua2VkaW46ICcjMGE2NmMyJyxcbiAgICB3ZWJzaXRlOiAnI0JBQkJCRidcbiAgfVt0eXBlXTtcbn07XG5cbmNvbnN0IGdldFNvY2lhbE1lZGlhVXJsID0gKHR5cGU6IFNvY2lhbE1lZGlhVHlwZSwgdXNlcklkOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXliYXNlOiAnaHR0cHM6Ly9rZXliYXNlLmlvLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICB0ZWxlZ3JhbTogJ2h0dHBzOi8vdC5tZS8nICsgdXNlcklkLnJlcGxhY2UoJ0AnLCAnJyksXG4gICAgdHdpdHRlcjogJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHg6ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyB1c2VySWQucmVwbGFjZSgnQCcsICcnKSxcbiAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vJyArIHVzZXJJZC5yZXBsYWNlKCdAJywgJycpLFxuICAgIHlvdXR1YmU6ICdodHRwczovL3lvdXR1YmUuY29tL2NoYW5uZWwvJyArIHVzZXJJZCxcbiAgICBmYWNlYm9vazogJ2h0dHBzOi8vZmFjZWJvb2suY29tLycgKyB1c2VySWQsXG4gICAgbWVkaXVtOiAnaHR0cHM6Ly9tZWRpdW0uY29tLycgKyB1c2VySWQsXG4gICAgcmVkZGl0OiAnaHR0cHM6Ly9yZWRkaXQuY29tLycgKyB1c2VySWQsXG4gICAgd2VjaGF0OiBgd2VpeGluOi8vZGwvY2hhdD8ke3VzZXJJZH0vYCxcbiAgICBsaW5rZWRpbjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55LycgKyB1c2VySWQsXG4gICAgd2Vic2l0ZTogdXNlcklkXG4gIH1bdHlwZV07XG59O1xuXG5leHBvcnQgdHlwZSBTb2NpYWxNZWRpYVR5cGUgPVxuICB8ICdrZXliYXNlJ1xuICB8ICd0ZWxlZ3JhbSdcbiAgfCAndHdpdHRlcidcbiAgfCAneCdcbiAgfCAnZ2l0aHViJ1xuICB8ICd5b3V0dWJlJ1xuICB8ICdmYWNlYm9vaydcbiAgfCAnbWVkaXVtJ1xuICB8ICdyZWRkaXQnXG4gIHwgJ3dlY2hhdCdcbiAgfCAnbGlua2VkaW4nXG4gIHwgJ3dlYnNpdGUnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvblNvY2lhbFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgc29jaWFsTWVkaWFUeXBlOiBTb2NpYWxNZWRpYVR5cGU7XG4gIHVzZXJJZDogc3RyaW5nO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoTGluayk8T21pdDxTdmdJY29uU29jaWFsUHJvcHMsICd1c2VySWQnPj4oXG4gICh7IHRoZW1lLCBzb2NpYWxNZWRpYVR5cGU6IHR5cGUgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGdldFNvY2lhbE1lZGlhQ29sb3IodHlwZSksXG4gICAgfSxcbiAgICAnJjphY3RpdmUnOiB7XG4gICAgICBjb2xvcjogZ2V0U29jaWFsTWVkaWFDb2xvcih0eXBlKSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFN2Z0ljb25Tb2NpYWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxuICBIVE1MQW5jaG9yRWxlbWVudCxcbiAgU3ZnSWNvblNvY2lhbFByb3BzXG4+KCh7IHNvY2lhbE1lZGlhVHlwZTogdHlwZSwgdXNlcklkLCAuLi5wcm9wcyB9OiBTdmdJY29uU29jaWFsUHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIHJlZj17cmVmfVxuICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgIHNvY2lhbE1lZGlhVHlwZT17dHlwZX1cbiAgICAgIGhyZWY9e2dldFNvY2lhbE1lZGlhVXJsKHR5cGUsIHVzZXJJZCl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPFN2Z0ljb24gc3JjPXtgYXNzZXRzL2ljb25zL2ljLSR7dHlwZX0uc3ZnYH0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdJY29uU29jaWFsO1xuIl19