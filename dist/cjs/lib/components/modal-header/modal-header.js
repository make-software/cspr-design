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
    var theme = _a.theme, marginBottom = _a.marginBottom;
    return theme.withMedia({
        marginBottom: marginBottom ? marginBottom : '40px',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFFM0MseUZBQXdEO0FBRXhELElBQU0sb0JBQW9CLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDMUMsVUFBQyxFQUF1QjtRQUFyQixLQUFLLFdBQUEsRUFBRSxZQUFZLGtCQUFBO0lBQ3BCLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTTtLQUNuRCxDQUFDO0FBRkYsQ0FFRSxDQUNMLENBQUM7QUFFRixJQUFNLFdBQVcsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUNwQyxNQUFNLEVBQUUsU0FBUztJQUNqQixPQUFPLEVBQUUsUUFBUTtDQUNsQixDQUFDLEVBSG1DLENBR25DLENBQUMsQ0FBQztBQUVKLElBQU0sYUFBYSxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BELElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztTQUMzQztLQUNGLENBQUM7QUFKbUQsQ0FJbkQsQ0FBQyxDQUFDO0FBUUcsSUFBTSxXQUFXLEdBQUcsVUFBQyxFQUF5QztRQUF2QyxPQUFPLGFBQUEsRUFBRSxVQUFVLGdCQUFBO0lBQy9DLE9BQU8sQ0FDTCx3QkFBQyxvQkFBb0IscUJBQ25CLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUM3QyxLQUFLLEVBQUMsUUFBUSxpQkFFYixVQUFVLElBQUksVUFBVSxFQUN4QixPQUFPLElBQUksQ0FDVix1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxPQUFPLGdCQUMzQix1QkFBQyxhQUFhLElBQUMsR0FBRyxFQUFFLHNCQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBSSxJQUMvQixDQUNmLEtBQ29CLENBQ3hCLENBQUM7QUFDSixDQUFDLENBQUM7QUFkVyxRQUFBLFdBQVcsZUFjdEI7QUFDRixrQkFBZSxtQkFBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IHsgVGhlbWVNb2RlVHlwZSB9IGZyb20gJy4uL25hdmlnYXRpb24vY3Nwci1wcm9kdWN0cy1tZW51L3Byb2R1Y3RzLW1lbnUtaXRlbSc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1jbG9zZS5zdmcnO1xuXG5jb25zdCBNb2RhbEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IG1hcmdpbkJvdHRvbT86IHN0cmluZyB9PihcbiAgKHsgdGhlbWUsIG1hcmdpbkJvdHRvbSB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW5Cb3R0b206IG1hcmdpbkJvdHRvbSA/IG1hcmdpbkJvdHRvbSA6ICc0MHB4JyxcbiAgICB9KVxuKTtcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMCAxMHB4Jyxcbn0pKTtcblxuY29uc3QgU3R5bGVkU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBwYXRoOiB7XG4gICAgc3Ryb2tlOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICB9LFxufSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVhZGVyUHJvcHMge1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcbn1cblxuZXhwb3J0IGNvbnN0IE1vZGFsSGVhZGVyID0gKHsgb25DbG9zZSwgaGVhZGVyTG9nbyB9OiBNb2RhbEhlYWRlclByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1vZGFsSGVhZGVyQ29udGFpbmVyXG4gICAgICBqdXN0aWZ5PXtoZWFkZXJMb2dvID8gJ3NwYWNlLWJldHdlZW4nIDogJ2VuZCd9XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgPlxuICAgICAge2hlYWRlckxvZ28gJiYgaGVhZGVyTG9nb31cbiAgICAgIHtvbkNsb3NlICYmIChcbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgIDxTdHlsZWRTdmdJY29uIHNyYz17Q2xvc2VJY29ufSBzaXplPXsyMH0gLz5cbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cbiAgICAgICl9XG4gICAgPC9Nb2RhbEhlYWRlckNvbnRhaW5lcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNb2RhbEhlYWRlcjtcbiJdfQ==