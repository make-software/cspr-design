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
    return ((0, jsx_runtime_1.jsxs)(ModalHeaderContainer, tslib_1.__assign({ justify: headerLogo ? 'space-between' : 'end', align: "center" }, { children: [headerLogo && headerLogo, (0, jsx_runtime_1.jsx)(CloseButton, tslib_1.__assign({ onClick: onDismiss }, { children: (0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_close_svg_1.default, size: 20 }) }))] })));
};
exports.default = ModalHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi13aW5kb3cvbW9kYWwtaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFFM0MseUZBQXdEO0FBRXhELElBQU0sb0JBQW9CLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDbkQsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsWUFBWSxFQUFFLE1BQU07S0FDckIsQ0FBQztBQUZGLENBRUUsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLENBQUM7SUFDcEMsTUFBTSxFQUFFLFNBQVM7SUFDakIsT0FBTyxFQUFFLFFBQVE7Q0FDbEIsQ0FBQyxFQUhtQyxDQUduQyxDQUFDLENBQUM7QUFFSixJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDM0M7S0FDRixDQUFDO0FBSm1ELENBSW5ELENBQUMsQ0FBQztBQVFKLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBMkM7UUFBekMsU0FBUyxlQUFBLEVBQUUsVUFBVSxnQkFBQTtJQUMxQyxPQUFPLENBQ0wsd0JBQUMsb0JBQW9CLHFCQUNuQixPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDN0MsS0FBSyxFQUFDLFFBQVEsaUJBRWIsVUFBVSxJQUFJLFVBQVUsRUFDekIsdUJBQUMsV0FBVyxxQkFBQyxPQUFPLEVBQUUsU0FBUyxnQkFDN0IsdUJBQUMsYUFBYSxJQUFDLEdBQUcsRUFBRSxzQkFBUyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUksSUFDL0IsS0FDTyxDQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQ0Ysa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IHsgVGhlbWVNb2RlVHlwZSB9IGZyb20gJy4uL25hdmlnYXRpb24vY3Nwci1wcm9kdWN0cy1tZW51L3Byb2R1Y3RzLW1lbnUtaXRlbSc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1jbG9zZS5zdmcnO1xuXG5jb25zdCBNb2RhbEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpbkJvdHRvbTogJzQwcHgnLFxuICB9KVxuKTtcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMCAxMHB4Jyxcbn0pKTtcblxuY29uc3QgU3R5bGVkU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgTW9kYWxIZWFkZXJQcm9wcyB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcbn1cblxuY29uc3QgTW9kYWxIZWFkZXIgPSAoeyBvbkRpc21pc3MsIGhlYWRlckxvZ28gfTogTW9kYWxIZWFkZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNb2RhbEhlYWRlckNvbnRhaW5lclxuICAgICAganVzdGlmeT17aGVhZGVyTG9nbyA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdlbmQnfVxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIHtoZWFkZXJMb2dvICYmIGhlYWRlckxvZ299XG4gICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgPFN0eWxlZFN2Z0ljb24gc3JjPXtDbG9zZUljb259IHNpemU9ezIwfSAvPlxuICAgICAgPC9DbG9zZUJ1dHRvbj5cbiAgICA8L01vZGFsSGVhZGVyQ29udGFpbmVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsSGVhZGVyO1xuIl19