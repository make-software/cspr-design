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
var modal_header_1 = tslib_1.__importDefault(require("../modal-header/modal-header"));
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
    padding: '16px 24px 24px 24px',
};
var ModalContainer = (0, styled_components_1.default)(flex_column_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        width: position === ModalPosition.TopRight
            ? ['261px', '350px', '350px']
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
        textAlign: position === ModalPosition.TopRight ? 'left' : 'center',
        marginBottom: '16px',
    });
});
var StyledCaptionText = (0, styled_components_1.default)(subtitle_text_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        fontWeight: [600, 600, 700],
        fontSize: ['20px', '24px', '24px'],
        color: theme.styleguideColors.contentPrimary,
    });
});
var InformationText = (0, styled_components_1.default)(body_text_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        textAlign: position === ModalPosition.TopRight ? 'left' : 'center',
        color: theme.styleguideColors.contentSecondary,
    });
});
var ButtonsContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        marginTop: position === ModalPosition.TopRight ? '40px' : ['32px', '32px', '56px'],
        flexDirection: ['column', 'row', 'row'],
    });
});
var ConfirmationWindow = function (_a) {
    var isOpen = _a.isOpen, position = _a.position, title = _a.title, withHeader = _a.withHeader, headerLogo = _a.headerLogo, bodyImg = _a.bodyImg, information = _a.information, confirmLabel = _a.confirmLabel, confirmColor = _a.confirmColor, onConfirm = _a.onConfirm, dismissLabel = _a.dismissLabel, onDismiss = _a.onDismiss, themeMode = _a.themeMode, _b = _a.portalClass, portalClass = _b === void 0 ? 'portal' : _b;
    var theme = (0, styled_components_1.useTheme)();
    var modalStyle = {
        overlay: {
            backgroundColor: theme.styleguideColors.backgroundOverlay,
            zIndex: 15,
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
    var StyledConfirmButton = (0, styled_components_1.default)(button_1.default)(function (_a) {
        var theme = _a.theme;
        return theme.withMedia({
            backgroundColor: theme.styleguideColors.fillPrimaryBlue,
            ':hover': {
                background: theme.styleguideColors.fillPrimaryBlueHover,
            },
            ':active': {
                background: theme.styleguideColors.fillPrimaryBlueClick,
            },
        });
    });
    var StyledDismissButton = (0, styled_components_1.default)(button_1.default)(function (_a) {
        var theme = _a.theme;
        return theme.withMedia({
            color: theme.styleguideColors.contentBlue,
            ':hover': {
                background: theme.styleguideColors.fillSecondaryBlueHover,
            },
            ':active': {
                background: theme.styleguideColors.fillSecondaryBlueClick,
            },
        });
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: isOpen, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(InformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(StyledDismissButton, tslib_1.__assign({ color: 'utility', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(StyledConfirmButton, tslib_1.__assign({ onClick: onConfirm }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.ConfirmationWindow = ConfirmationWindow;
exports.default = exports.ConfirmationWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsc0ZBQXVEO0FBQ3ZELHlGQUEwRDtBQUcxRCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsc0NBQXFCLENBQUE7SUFDckIsa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBdUJELElBQU0saUJBQWlCLEdBQUc7SUFDeEIsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsU0FBUyxFQUFFLHVCQUF1QjtDQUNuQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUc7SUFDckIsR0FBRyxFQUFFLE1BQU07SUFDWCxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7Q0FDL0IsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBQ3ZDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ2hCLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FB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LEVBQ1gsT0FBTyxFQUFFLGVBQWUsaUJBRXZCLFlBQVksSUFBSSxDQUNmLHVCQUFDLG1CQUFtQixxQkFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLGdCQUN0RCxZQUFZLElBQ08sQ0FDdkIsRUFDRCx1QkFBQyxtQkFBbUIscUJBQUMsT0FBTyxFQUFFLFNBQVMsZ0JBQ3BDLFlBQVksSUFDTyxLQUNMLEtBQ0osSUFDTixDQUNkLEdBQ0EsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBbEhXLFFBQUEsa0JBQWtCLHNCQWtIN0I7QUFFRixrQkFBZSwwQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xyXG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4uL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXInO1xyXG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XHJcbmltcG9ydCB7IFRoZW1lTW9kZVR5cGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LWl0ZW0nO1xyXG5cclxuZXhwb3J0IGVudW0gTW9kYWxQb3NpdGlvbiB7XHJcbiAgVG9wUmlnaHQgPSAndG9wUmlnaHQnLFxyXG4gIENlbnRlciA9ICdjZW50ZXInLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsUG9zaXRpb25Qcm9wcyB7XHJcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcyB7XHJcbiAgaXNPcGVuOiBib29sZWFuO1xyXG4gIGJvZHlJbWc/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XHJcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB3aXRoSGVhZGVyPzogYm9vbGVhbjtcclxuICBoZWFkZXJMb2dvPzogUmVhY3QuUmVhY3RFbGVtZW50O1xyXG4gIGluZm9ybWF0aW9uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xyXG4gIGNvbmZpcm1MYWJlbDogc3RyaW5nO1xyXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcclxuICBjb25maXJtQ29sb3I/OiBzdHJpbmc7XHJcbiAgZGlzbWlzc0xhYmVsPzogc3RyaW5nO1xyXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcclxuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xyXG4gIHBvcnRhbENsYXNzPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBjZW50ZXJNb2RhbFN0eWxlcyA9IHtcclxuICBsZWZ0OiAnNTAlJyxcclxuICByaWdodDogJ2F1dG8nLFxyXG4gIGJvdHRvbTogJ2F1dG8nLFxyXG4gIGJvcmRlcjogJ25vbmUnLFxyXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxyXG4gIHBhZGRpbmc6ICczMnB4IDI0cHggMjRweCAyNHB4JyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbn07XHJcblxyXG5jb25zdCB0b3BNb2RhbFN0eWxlcyA9IHtcclxuICB0b3A6ICc0MHB4JyxcclxuICBsZWZ0OiAnYXV0bycsXHJcbiAgcmlnaHQ6ICc0MHB4JyxcclxuICBib3JkZXI6ICdub25lJyxcclxuICBib3R0b206ICdhdXRvJyxcclxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICBwYWRkaW5nOiAnMTZweCAyNHB4IDI0cHggMjRweCcsXHJcbn07XHJcblxyXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZChGbGV4Q29sdW1uKTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxyXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxyXG4gICAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgICAgd2lkdGg6XHJcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcclxuICAgICAgICAgID8gWycyNjFweCcsICczNTBweCcsICczNTBweCddXHJcbiAgICAgICAgICA6IFsnMjYxcHgnLCAnNDAwcHgnLCAnNDQ2cHgnXSxcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcclxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+XHJcbiAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgIG1hcmdpbjogJzE1cHggMCAzNXB4IDAnLFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdjxNb2RhbFBvc2l0aW9uUHJvcHM+KCh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkQ2FwdGlvblRleHQgPSBzdHlsZWQoU3VidGl0bGVUZXh0KSgoeyB0aGVtZSB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBmb250V2VpZ2h0OiBbNjAwLCA2MDAsIDcwMF0sXHJcbiAgICBmb250U2l6ZTogWycyMHB4JywgJzI0cHgnLCAnMjRweCddLFxyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IEluZm9ybWF0aW9uVGV4dCA9IHN0eWxlZChCb2R5VGV4dCk8TW9kYWxQb3NpdGlvblByb3BzPihcclxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cclxuICAgIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICAgIHRleHRBbGlnbjogcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnbGVmdCcgOiAnY2VudGVyJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXHJcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XHJcbiAgICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgICBtYXJnaW5Ub3A6XHJcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnNDBweCcgOiBbJzMycHgnLCAnMzJweCcsICc1NnB4J10sXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdycsICdyb3cnXSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uV2luZG93ID0gKHtcclxuICBpc09wZW4sXHJcbiAgcG9zaXRpb24sXHJcbiAgdGl0bGUsXHJcbiAgd2l0aEhlYWRlcixcclxuICBoZWFkZXJMb2dvLFxyXG4gIGJvZHlJbWcsXHJcbiAgaW5mb3JtYXRpb24sXHJcbiAgY29uZmlybUxhYmVsLFxyXG4gIGNvbmZpcm1Db2xvcixcclxuICBvbkNvbmZpcm0sXHJcbiAgZGlzbWlzc0xhYmVsLFxyXG4gIG9uRGlzbWlzcyxcclxuICB0aGVtZU1vZGUsXHJcbiAgcG9ydGFsQ2xhc3MgPSAncG9ydGFsJyxcclxufTogQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRPdmVybGF5LFxyXG4gICAgICB6SW5kZXg6IDE1LFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIC4uLnRvcE1vZGFsU3R5bGVzLFxyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDoge1xyXG4gICAgICAgICAgICAuLi5jZW50ZXJNb2RhbFN0eWxlcyxcclxuICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgU3R5bGVkQ29uZmlybUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pKCh7IHRoZW1lIH0pID0+XHJcbiAgICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlSG92ZXIsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6YWN0aXZlJzoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlQ2xpY2ssXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IFN0eWxlZERpc21pc3NCdXR0b24gPSBzdHlsZWQoQnV0dG9uKSgoeyB0aGVtZSB9KSA9PlxyXG4gICAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxyXG4gICAgICB9LFxyXG4gICAgICAnOmFjdGl2ZSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlQ2xpY2ssXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8UmVhY3RNb2RhbFxyXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgICBzdHlsZT17bW9kYWxTdHlsZX1cclxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkRpc21pc3N9XHJcbiAgICAgICAgICBzaG91bGRDbG9zZU9uRXNjXHJcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXHJcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWU9e3BvcnRhbENsYXNzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lciBwb3NpdGlvbj17cG9zaXRpb259PlxyXG4gICAgICAgICAgICB7d2l0aEhlYWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyXHJcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cclxuICAgICAgICAgICAgICAgIGhlYWRlckxvZ289e2hlYWRlckxvZ299XHJcbiAgICAgICAgICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Ym9keUltZyAmJiA8SW1hZ2VXcmFwcGVyIGp1c3RpZnk9XCJjZW50ZXJcIj57Ym9keUltZ308L0ltYWdlV3JhcHBlcj59XHJcbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uIHBvc2l0aW9uPXtwb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZENhcHRpb25UZXh0IHNpemU9ezF9IHNjYWxlPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8L1N0eWxlZENhcHRpb25UZXh0PlxyXG4gICAgICAgICAgICA8L1N0eWxlZENhcHRpb24+XHJcbiAgICAgICAgICAgIDxGbGV4Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8SW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgICAge2luZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgIDwvSW5mb3JtYXRpb25UZXh0PlxyXG4gICAgICAgICAgICA8L0ZsZXhSb3c+XHJcbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpc21pc3NCdXR0b24gY29sb3I9eyd1dGlsaXR5J30gb25DbGljaz17b25EaXNtaXNzfT5cclxuICAgICAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGlzbWlzc0J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxTdHlsZWRDb25maXJtQnV0dG9uIG9uQ2xpY2s9e29uQ29uZmlybX0+XHJcbiAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ29uZmlybUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9CdXR0b25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cclxuICAgICAgICA8L1JlYWN0TW9kYWw+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybWF0aW9uV2luZG93O1xyXG4iXX0=