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
    var onClose = _a.onClose, headerLogo = _a.headerLogo;
    return ((0, jsx_runtime_1.jsxs)(ModalHeaderContainer, tslib_1.__assign({ justify: headerLogo ? 'space-between' : 'end', align: "center" }, { children: [headerLogo && headerLogo, onClose && ((0, jsx_runtime_1.jsx)(CloseButton, tslib_1.__assign({ onClick: onClose }, { children: (0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_close_svg_1.default, size: 20 }) })))] })));
};
exports.ModalHeader = ModalHeader;
exports.default = exports.ModalHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFFM0MseUZBQXdEO0FBRXhELElBQU0sb0JBQW9CLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDbkQsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsWUFBWSxFQUFFLE1BQU07S0FDckIsQ0FBQztBQUZGLENBRUUsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUM7SUFDcEMsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFFBQVE7Q0FDbEIsQ0FBQyxFQUhtQyxDQUduQyxDQUFDLENBQUM7QUFFSixJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDM0M7S0FDRixDQUFDO0FBSm1ELENBSW5ELENBQUMsQ0FBQztBQVFHLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBeUM7UUFBdkMsT0FBTyxhQUFBLEVBQUUsVUFBVSxnQkFBQTtJQUMvQyxPQUFPLENBQ0wsd0JBQUMsb0JBQW9CLHFCQUNuQixPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDN0MsS0FBSyxFQUFDLFFBQVEsaUJBRWIsVUFBVSxJQUFJLFVBQVUsRUFDeEIsT0FBTyxJQUFJLENBQ1YsdUJBQUMsV0FBVyxxQkFBQyxPQUFPLEVBQUUsT0FBTyxnQkFDM0IsdUJBQUMsYUFBYSxJQUFDLEdBQUcsRUFBRSxzQkFBUyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUksSUFDL0IsQ0FDZixLQUNvQixDQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBZFcsUUFBQSxXQUFXLGVBY3RCO0FBQ0Ysa0JBQWUsbUJBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCB7IFRoZW1lTW9kZVR5cGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LWl0ZW0nO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2xvc2Uuc3ZnJztcblxuY29uc3QgTW9kYWxIZWFkZXJDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW5Cb3R0b206ICc0MHB4JyxcbiAgfSlcbik7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgcGFkZGluZzogJzAgMTBweCcsXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgcGF0aDoge1xuICAgIHN0cm9rZTogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlYWRlclByb3BzIHtcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHRoZW1lTW9kZT86IFRoZW1lTW9kZVR5cGU7XG59XG5cbmV4cG9ydCBjb25zdCBNb2RhbEhlYWRlciA9ICh7IG9uQ2xvc2UsIGhlYWRlckxvZ28gfTogTW9kYWxIZWFkZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNb2RhbEhlYWRlckNvbnRhaW5lclxuICAgICAganVzdGlmeT17aGVhZGVyTG9nbyA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdlbmQnfVxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIHtoZWFkZXJMb2dvICYmIGhlYWRlckxvZ299XG4gICAgICB7b25DbG9zZSAmJiAoXG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9e0Nsb3NlSWNvbn0gc2l6ZT17MjB9IC8+XG4gICAgICAgIDwvQ2xvc2VCdXR0b24+XG4gICAgICApfVxuICAgIDwvTW9kYWxIZWFkZXJDb250YWluZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxIZWFkZXI7XG4iXX0=