"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalHeader = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var ic_close_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-close.svg"));
var ModalHeaderContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        marginBottom: '40px',
    });
});
var CloseButton = styled_components_1.default.div(function () { return ({
    cursor: 'pointer',
    padding: '0 10px',
}); });
var StyledSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        path: {
            stroke: theme.styleguideColors.contentBlue,
        },
    });
});
var ModalHeader = function (_a) {
    var onDismiss = _a.onDismiss, headerLogo = _a.headerLogo;
    return ((0, jsx_runtime_1.jsxs)(ModalHeaderContainer, tslib_1.__assign({ justify: headerLogo ? 'space-between' : 'end', align: "center" }, { children: [headerLogo && headerLogo, (0, jsx_runtime_1.jsx)(CloseButton, tslib_1.__assign({ onClick: onDismiss }, { children: (0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_close_svg_1.default, size: 20 }) }))] })));
};
exports.ModalHeader = ModalHeader;
exports.default = exports.ModalHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFFM0MseUZBQXdEO0FBRXhELElBQU0sb0JBQW9CLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDbkQsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsWUFBWSxFQUFFLE1BQU07S0FDckIsQ0FBQztBQUZGLENBRUUsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUM7SUFDcEMsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFFBQVE7Q0FDbEIsQ0FBQyxFQUhtQyxDQUduQyxDQUFDLENBQUM7QUFFSixJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDM0M7S0FDRixDQUFDO0FBSm1ELENBSW5ELENBQUMsQ0FBQztBQVFHLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBMkM7UUFBekMsU0FBUyxlQUFBLEVBQUUsVUFBVSxnQkFBQTtJQUNqRCxPQUFPLENBQ0wsd0JBQUMsb0JBQW9CLHFCQUNuQixPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDN0MsS0FBSyxFQUFDLFFBQVEsaUJBRWIsVUFBVSxJQUFJLFVBQVUsRUFDekIsdUJBQUMsV0FBVyxxQkFBQyxPQUFPLEVBQUUsU0FBUyxnQkFDN0IsdUJBQUMsYUFBYSxJQUFDLEdBQUcsRUFBRSxzQkFBUyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUksSUFDL0IsS0FDTyxDQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBWlcsUUFBQSxXQUFXLGVBWXRCO0FBQ0Ysa0JBQWUsbUJBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcclxuaW1wb3J0IHsgVGhlbWVNb2RlVHlwZSB9IGZyb20gJy4uL25hdmlnYXRpb24vY3Nwci1wcm9kdWN0cy1tZW51L3Byb2R1Y3RzLW1lbnUtaXRlbSc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNsb3NlLnN2Zyc7XHJcblxyXG5jb25zdCBNb2RhbEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuZGl2KCgpID0+ICh7XHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgcGFkZGluZzogJzAgMTBweCcsXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBwYXRoOiB7XHJcbiAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlYWRlclByb3BzIHtcclxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XHJcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcclxuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWxIZWFkZXIgPSAoeyBvbkRpc21pc3MsIGhlYWRlckxvZ28gfTogTW9kYWxIZWFkZXJQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxIZWFkZXJDb250YWluZXJcclxuICAgICAganVzdGlmeT17aGVhZGVyTG9nbyA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdlbmQnfVxyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICA+XHJcbiAgICAgIHtoZWFkZXJMb2dvICYmIGhlYWRlckxvZ299XHJcbiAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkRpc21pc3N9PlxyXG4gICAgICAgIDxTdHlsZWRTdmdJY29uIHNyYz17Q2xvc2VJY29ufSBzaXplPXsyMH0gLz5cclxuICAgICAgPC9DbG9zZUJ1dHRvbj5cclxuICAgIDwvTW9kYWxIZWFkZXJDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxIZWFkZXI7XHJcbiJdfQ==