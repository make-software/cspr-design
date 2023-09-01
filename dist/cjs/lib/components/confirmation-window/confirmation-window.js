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
            backgroundColor: '#0E1126A0',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsc0ZBQXVEO0FBQ3ZELHlGQUEwRDtBQUcxRCxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsc0NBQXFCLENBQUE7SUFDckIsa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBdUJELElBQU0saUJBQWlCLEdBQUc7SUFDeEIsSUFBSSxFQUFFLEtBQUs7SUFDWCxLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0lBQzlCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsU0FBUyxFQUFFLHVCQUF1QjtDQUNuQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUc7SUFDckIsR0FBRyxFQUFFLE1BQU07SUFDWCxJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7Q0FDL0IsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxxQkFBVSxDQUFDLENBQ3ZDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ2hCLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FB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RXZCLFlBQVksSUFBSSxDQUNmLHVCQUFDLG1CQUFtQixxQkFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLGdCQUN0RCxZQUFZLElBQ08sQ0FDdkIsRUFDRCx1QkFBQyxtQkFBbUIscUJBQUMsT0FBTyxFQUFFLFNBQVMsZ0JBQ3BDLFlBQVksSUFDTyxLQUNMLEtBQ0osSUFDTixDQUNkLEdBQ0EsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBcEhXLFFBQUEsa0JBQWtCLHNCQW9IN0I7QUFFRixrQkFBZSwwQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCB7IFRoZW1lTW9kZVR5cGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LWl0ZW0nO1xuXG5leHBvcnQgZW51bSBNb2RhbFBvc2l0aW9uIHtcbiAgVG9wUmlnaHQgPSAndG9wUmlnaHQnLFxuICBDZW50ZXIgPSAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFBvc2l0aW9uUHJvcHMge1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25XaW5kb3dTY2VuZVByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBib2R5SW1nPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGluZm9ybWF0aW9uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgb25Db25maXJtOiAoKSA9PiB2b2lkO1xuICBjb25maXJtQ29sb3I/OiBzdHJpbmc7XG4gIGRpc21pc3NMYWJlbD86IHN0cmluZztcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xuICBwb3J0YWxDbGFzcz86IHN0cmluZztcbn1cblxuY29uc3QgY2VudGVyTW9kYWxTdHlsZXMgPSB7XG4gIGxlZnQ6ICc1MCUnLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMzJweCAyNHB4IDI0cHggMjRweCcsXG4gIHRvcDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG59O1xuXG5jb25zdCB0b3BNb2RhbFN0eWxlcyA9IHtcbiAgdG9wOiAnNDBweCcsXG4gIGxlZnQ6ICdhdXRvJyxcbiAgcmlnaHQ6ICc0MHB4JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzE2cHggMjRweCAyNHB4IDI0cHgnLFxufTtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHdpZHRoOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICAgID8gWycyNjFweCcsICczNTBweCcsICczNTBweCddXG4gICAgICAgICAgOiBbJzI2MXB4JywgJzQwMHB4JywgJzQ0NnB4J10sXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpbjogJzE1cHggMCAzNXB4IDAnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyNHB4J10sXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0pXG4pO1xuXG5jb25zdCBJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW5Ub3A6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJzQwcHgnIDogWyczMnB4JywgJzMycHgnLCAnNTZweCddLFxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93JywgJ3JvdyddLFxuICAgIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uV2luZG93ID0gKHtcbiAgaXNPcGVuLFxuICBwb3NpdGlvbixcbiAgdGl0bGUsXG4gIHdpdGhIZWFkZXIsXG4gIGhlYWRlckxvZ28sXG4gIGJvZHlJbWcsXG4gIGluZm9ybWF0aW9uLFxuICBjb25maXJtTGFiZWwsXG4gIGNvbmZpcm1Db2xvcixcbiAgb25Db25maXJtLFxuICBkaXNtaXNzTGFiZWwsXG4gIG9uRGlzbWlzcyxcbiAgdGhlbWVNb2RlLFxuICBwb3J0YWxDbGFzcyA9ICdwb3J0YWwnLFxufTogQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMEUxMTI2QTAnLFxuICAgICAgekluZGV4OiAxNSxcbiAgICB9LFxuICAgIGNvbnRlbnQ6XG4gICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnRvcE1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgLi4uY2VudGVyTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gIH07XG5cbiAgICBjb25zdCBTdHlsZWRDb25maXJtQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikoXG4gICAgICAgICh7IHRoZW1lIH0pID0+XG4gICAgICAgICAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWUsXG4gICAgICAgICAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVIb3ZlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICc6YWN0aXZlJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBTdHlsZWREaXNtaXNzQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikoXG4gICAgICAgICh7IHRoZW1lIH0pID0+XG4gICAgICAgICAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICAgICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICc6YWN0aXZlJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlQ2xpY2ssXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICBzdHlsZT17bW9kYWxTdHlsZX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxuICAgICAgICAgIHNob3VsZENsb3NlT25Fc2NcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lciBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgICAgICAge3dpdGhIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cbiAgICAgICAgICAgICAgICBoZWFkZXJMb2dvPXtoZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtib2R5SW1nICYmIDxJbWFnZVdyYXBwZXIganVzdGlmeT1cImNlbnRlclwiPntib2R5SW1nfTwvSW1hZ2VXcmFwcGVyPn1cbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uVGV4dCBzaXplPXsxfSBzY2FsZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L1N0eWxlZENhcHRpb25UZXh0PlxuICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uPlxuICAgICAgICAgICAgPEZsZXhSb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8SW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9JbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXNtaXNzQnV0dG9uIGNvbG9yPXsndXRpbGl0eSd9IG9uQ2xpY2s9e29uRGlzbWlzc30+XG4gICAgICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsfVxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGlzbWlzc0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPFN0eWxlZENvbmZpcm1CdXR0b24gb25DbGljaz17b25Db25maXJtfT5cbiAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICA8L1N0eWxlZENvbmZpcm1CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbldpbmRvdztcbiJdfQ==