"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationWindow = exports.ModalPosition = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var button_1 = tslib_1.__importDefault(require("../button/button"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var react_modal_1 = tslib_1.__importDefault(require("react-modal"));
var modal_header_1 = tslib_1.__importDefault(require("./modal-header"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var ModalPosition;
(function (ModalPosition) {
    ModalPosition["TopRight"] = "topRight";
    ModalPosition["Center"] = "center";
})(ModalPosition = exports.ModalPosition || (exports.ModalPosition = {}));
var centerModalStyles = {
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    borderRadius: '12px',
    padding: '32px 24px 24px 24px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
};
var topModalStyles = {
    top: '40px',
    left: 'auto',
    right: '40px',
    border: 'none',
    bottom: 'auto',
    borderRadius: '12px',
    padding: '16px 24px 24px 24px'
};
var ModalContainer = (0, styled_components_1.default)(flex_column_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        width: position === ModalPosition.TopRight
            ? ['350px', '350px', '350px']
            : ['261px', '400px', '446px'],
        background: theme.styleguideColors.backgroundPrimary,
        borderColor: theme.styleguideColors.backgroundPrimary,
    });
});
var ImageWrapper = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        margin: '15px 0 35px 0',
    });
});
var StyledCaption = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        textAlign: position === ModalPosition.TopRight
            ? 'left'
            : 'center',
        marginBottom: '16px',
    });
});
var StyledCaptionText = (0, styled_components_1.default)(subtitle_text_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        fontWeight: [600, 600, 700],
        fontSize: ['20px', '24px', '24px'],
    });
});
var InformationText = (0, styled_components_1.default)(body_text_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        textAlign: position === ModalPosition.TopRight
            ? 'left'
            : 'center',
        color: theme.styleguideColors.contentSecondary,
    });
});
var ButtonsContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        marginTop: position === ModalPosition.TopRight
            ? '40px'
            : ['32px', '32px', '56px'],
        flexDirection: ['column', 'row', 'row'],
    });
});
var ConfirmationWindow = function (_a) {
    var isOpen = _a.isOpen, position = _a.position, title = _a.title, withHeader = _a.withHeader, headerLogo = _a.headerLogo, bodyImg = _a.bodyImg, information = _a.information, confirmLabel = _a.confirmLabel, confirmColor = _a.confirmColor, onConfirm = _a.onConfirm, dismissLabel = _a.dismissLabel, onDismiss = _a.onDismiss, themeMode = _a.themeMode, _b = _a.portalClass, portalClass = _b === void 0 ? 'portal' : _b;
    var theme = (0, styled_components_1.useTheme)();
    var modalStyle = {
        overlay: {
            backgroundColor: '#0E1126A0',
        },
        content: position === ModalPosition.TopRight
            ? tslib_1.__assign(tslib_1.__assign({}, topModalStyles), {
                backgroundColor: theme.styleguideColors.backgroundPrimary,
                borderColor: theme.styleguideColors.backgroundPrimary,
            }) : tslib_1.__assign(tslib_1.__assign({}, centerModalStyles), {
            backgroundColor: theme.styleguideColors.backgroundPrimary,
            borderColor: theme.styleguideColors.backgroundPrimary,
        }),
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: isOpen, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(InformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: onConfirm }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.ConfirmationWindow = ConfirmationWindow;
exports.default = exports.ConfirmationWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsd0VBQXlDO0FBQ3pDLHlGQUEwRDtBQUcxRCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsc0NBQXFCLENBQUE7SUFDckIsa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBdUJELElBQU0saUJBQWlCLEdBQUc7SUFDeEIsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsU0FBUyxFQUFFLHVCQUF1QjtDQUNuQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUc7SUFDckIsR0FBRyxFQUFFLE1BQU07SUFDWCxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7Q0FDL0IsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBQ3ZDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ2hCLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FB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QU8scUJBQUMsT0FBTyxFQUFDLFFBQVEsZ0JBQ3ZCLHVCQUFDLGVBQWUscUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxJQUFJLGdCQUNyRCxXQUFXLElBQ0ksSUFDVixFQUNWLHdCQUFDLGdCQUFnQixxQkFDZixRQUFRLEVBQUUsUUFBUSxFQUNsQixHQUFHLEVBQUUsTUFBTSxFQUNYLE9BQU8sRUFBRSxlQUFlLGlCQUV2QixZQUFZLElBQUksQ0FDZix1QkFBQyxnQkFBTSxxQkFBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxTQUFTLGdCQUMvQyxZQUFZLElBQ04sQ0FDVixFQUNELHVCQUFDLGdCQUFNLHFCQUNMLEtBQUssRUFBRSxZQUFZLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDNUQsT0FBTyxFQUFFLFNBQVMsZ0JBRWpCLFlBQVksSUFDTixLQUNRLEtBQ0osSUFDTixDQUNkLEdBQ0EsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBNUZXLFFBQUEsa0JBQWtCLHNCQTRGN0I7QUFFRixrQkFBZSwwQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcblxuZXhwb3J0IGVudW0gTW9kYWxQb3NpdGlvbiB7XG4gIFRvcFJpZ2h0ID0gJ3RvcFJpZ2h0JyxcbiAgQ2VudGVyID0gJ2NlbnRlcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQb3NpdGlvblByb3BzIHtcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgYm9keUltZz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdpdGhIZWFkZXI/OiBib29sZWFuO1xuICBoZWFkZXJMb2dvPzogc3RyaW5nO1xuICBpbmZvcm1hdGlvbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZztcbiAgY29uZmlybUxhYmVsOiBzdHJpbmc7XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgY29uZmlybUNvbG9yPzogc3RyaW5nO1xuICBkaXNtaXNzTGFiZWw/OiBzdHJpbmc7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcbiAgcG9ydGFsQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNlbnRlck1vZGFsU3R5bGVzID0ge1xuICBsZWZ0OiAnNTAlJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzMycHggMjRweCAyNHB4IDI0cHgnLFxuICB0b3A6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxufTtcblxuY29uc3QgdG9wTW9kYWxTdHlsZXMgPSB7XG4gIHRvcDogJzQwcHgnLFxuICBsZWZ0OiAnYXV0bycsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICcxNnB4IDI0cHggMjRweCAyNHB4J1xufTtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHdpZHRoOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICAgID8gWyczNTBweCcsICczNTBweCcsICczNTBweCddXG4gICAgICAgICAgOiBbJzI2MXB4JywgJzQwMHB4JywgJzQ0NnB4J10sXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW46ICcxNXB4IDAgMzVweCAwJyxcbiAgICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgID8gJ2xlZnQnXG4gICAgICAgIDogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyNHB4J10sXG4gIH0pXG4pO1xuXG5jb25zdCBJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgICAgPyAnbGVmdCcgXG4gICAgICAgICAgOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIG1hcmdpblRvcDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICAgID8gJzQwcHgnIFxuICAgICAgICAgICAgOiBbJzMycHgnLCAnMzJweCcsICc1NnB4J10sXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25XaW5kb3cgPSAoe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nbyxcbiAgYm9keUltZyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybUNvbG9yLFxuICBvbkNvbmZpcm0sXG4gIGRpc21pc3NMYWJlbCxcbiAgb25EaXNtaXNzLFxuICB0aGVtZU1vZGUsXG4gIHBvcnRhbENsYXNzID0gJ3BvcnRhbCcsXG59OiBDb25maXJtYXRpb25XaW5kb3dTY2VuZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICAgIGNvbnN0IG1vZGFsU3R5bGUgPSB7XG4gICAgICBvdmVybGF5OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRTExMjZBMCcsXG4gICAgICB9LFxuICAgICAgY29udGVudDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgLi4udG9wTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIC4uLmNlbnRlck1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8UmVhY3RNb2RhbFxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgIHN0eWxlPXttb2RhbFN0eWxlfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkRpc21pc3N9XG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY1xuICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2tcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWU9e3BvcnRhbENsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICB7d2l0aEhlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxNb2RhbEhlYWRlclxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxuICAgICAgICAgICAgICAgIGhlYWRlckxvZ289e2hlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgb25EaXNtaXNzPXtvbkRpc21pc3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2JvZHlJbWcgJiYgPEltYWdlV3JhcHBlciBqdXN0aWZ5PVwiY2VudGVyXCI+e2JvZHlJbWd9PC9JbWFnZVdyYXBwZXI+fVxuICAgICAgICAgICAgPFN0eWxlZENhcHRpb24gcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgPFN0eWxlZENhcHRpb25UZXh0IHNpemU9ezF9IHNjYWxlPVwibGdcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvblRleHQ+XG4gICAgICAgICAgICA8L1N0eWxlZENhcHRpb24+XG4gICAgICAgICAgICA8RmxleFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxJbmZvcm1hdGlvblRleHQgcG9zaXRpb249e3Bvc2l0aW9ufSBzaXplPXszfSBzY2FsZT1cInNtXCI+XG4gICAgICAgICAgICAgICAge2luZm9ybWF0aW9ufVxuICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uVGV4dD5cbiAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZ2FwPXsnMTZweCd9XG4gICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3NlY29uZGFyeUJsdWUnfSBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb25maXJtQ29sb3IgPT09ICdyZWQnID8gJ3ByaW1hcnlSZWQnIDogJ3ByaW1hcnlCbHVlJ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvbmZpcm19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybWF0aW9uV2luZG93O1xuIl19