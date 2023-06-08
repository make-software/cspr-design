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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxnRkFBdUM7QUFDdkMsMEVBQTJDO0FBQzNDLDBFQUEyQztBQUUzQyx5RkFBd0Q7QUFFeEQsSUFBTSxvQkFBb0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUNqRCxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDWixZQUFZLEVBQUUsTUFBTTtLQUN2QixDQUFDO0FBRkYsQ0FFRSxDQUNMLENBQUM7QUFFRixJQUFNLFdBQVcsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUNsQyxNQUFNLEVBQUUsU0FBUztJQUNqQixPQUFPLEVBQUUsUUFBUTtDQUNwQixDQUFDLEVBSG1DLENBR25DLENBQUMsQ0FBQztBQUVKLElBQU0sYUFBYSxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2xELElBQUksRUFBRTtZQUNGLE1BQU0sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztTQUM3QztLQUNKLENBQUM7QUFKbUQsQ0FJbkQsQ0FBQyxDQUFDO0FBUUosSUFBTSxXQUFXLEdBQUcsVUFBQyxFQUEyQztRQUF6QyxTQUFTLGVBQUEsRUFBRSxVQUFVLGdCQUFBO0lBQ3hDLE9BQU8sQ0FDSCx3QkFBQyxvQkFBb0IscUJBQ2pCLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUM3QyxLQUFLLEVBQUMsUUFBUSxpQkFFYixVQUFVLElBQUksVUFBVSxFQUN6Qix1QkFBQyxXQUFXLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUMzQix1QkFBQyxhQUFhLElBQUMsR0FBRyxFQUFFLHNCQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBSSxJQUNqQyxLQUNLLENBQzFCLENBQUM7QUFDTixDQUFDLENBQUM7QUFDRixrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNsb3NlLnN2Zyc7XG5cbmNvbnN0IE1vZGFsSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNDBweCcsXG4gICAgfSlcbik7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxufSkpO1xuXG5jb25zdCBTdHlsZWRTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGF0aDoge1xuICAgICAgICBzdHJva2U6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgfSxcbn0pKTtcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlYWRlclByb3BzIHtcbiAgICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gICAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xufVxuXG5jb25zdCBNb2RhbEhlYWRlciA9ICh7IG9uRGlzbWlzcywgaGVhZGVyTG9nbyB9OiBNb2RhbEhlYWRlclByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsSGVhZGVyQ29udGFpbmVyXG4gICAgICAgICAgICBqdXN0aWZ5PXtoZWFkZXJMb2dvID8gJ3NwYWNlLWJldHdlZW4nIDogJ2VuZCd9XG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJMb2dvICYmIGhlYWRlckxvZ299XG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9e0Nsb3NlSWNvbn0gc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICA8L0Nsb3NlQnV0dG9uPlxuICAgICAgICA8L01vZGFsSGVhZGVyQ29udGFpbmVyPlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWxIZWFkZXI7XG4iXX0=