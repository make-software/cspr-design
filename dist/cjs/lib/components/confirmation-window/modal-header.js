"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return ((0, jsx_runtime_1.jsxs)(ModalHeaderContainer, tslib_1.__assign({ justify: headerLogo ? "space-between" : "end", align: "center" }, { children: [headerLogo && (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: headerLogo }), (0, jsx_runtime_1.jsx)(CloseButton, tslib_1.__assign({ onClick: onDismiss }, { children: (0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_close_svg_1.default, size: 20 }) }))] })));
};
exports.default = ModalHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi13aW5kb3cvbW9kYWwtaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFFM0MseUZBQXdEO0FBRXhELElBQU0sb0JBQW9CLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDbkQsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsWUFBWSxFQUFFLE1BQU07S0FDckIsQ0FBQztBQUZGLENBRUUsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUM7SUFDcEMsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFFBQVE7Q0FDbEIsQ0FBQyxFQUhtQyxDQUduQyxDQUFDLENBQUM7QUFFSixJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDM0M7S0FDRixDQUFDO0FBSm1ELENBSW5ELENBQUMsQ0FBQztBQVFKLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBMkM7UUFBekMsU0FBUyxlQUFBLEVBQUUsVUFBVSxnQkFBQTtJQUMxQyxPQUFPLENBQ0wsd0JBQUMsb0JBQW9CLHFCQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxRQUFRLGlCQUM3RSxVQUFVLElBQUksdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUUsVUFBVSxHQUFJLEVBQzdDLHVCQUFDLFdBQVcscUJBQUMsT0FBTyxFQUFFLFNBQVMsZ0JBQzdCLHVCQUFDLGFBQWEsSUFBQyxHQUFHLEVBQUUsc0JBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFJLElBQy9CLEtBQ08sQ0FDeEIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUNGLGtCQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCB7IFRoZW1lTW9kZVR5cGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LWl0ZW0nO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2xvc2Uuc3ZnJztcblxuY29uc3QgTW9kYWxIZWFkZXJDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgfSlcbik7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogJzAgMTBweCcsXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIE1vZGFsSGVhZGVyUHJvcHMge1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIGhlYWRlckxvZ28/OiBzdHJpbmc7XG4gIHRoZW1lTW9kZT86IFRoZW1lTW9kZVR5cGU7XG59XG5cbmNvbnN0IE1vZGFsSGVhZGVyID0gKHsgb25EaXNtaXNzLCBoZWFkZXJMb2dvIH06IE1vZGFsSGVhZGVyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWxIZWFkZXJDb250YWluZXIganVzdGlmeT17aGVhZGVyTG9nbyA/IFwic3BhY2UtYmV0d2VlblwiOiBcImVuZFwifSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7aGVhZGVyTG9nbyAmJiA8U3ZnSWNvbiBzcmM9e2hlYWRlckxvZ299IC8+fVxuICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e29uRGlzbWlzc30+XG4gICAgICAgIDxTdHlsZWRTdmdJY29uIHNyYz17Q2xvc2VJY29ufSBzaXplPXsyMH0gLz5cbiAgICAgIDwvQ2xvc2VCdXR0b24+XG4gICAgPC9Nb2RhbEhlYWRlckNvbnRhaW5lcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb2RhbEhlYWRlcjtcbiJdfQ==