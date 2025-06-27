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
var products_menu_item_1 = require("../navigation/cspr-products-menu/products-menu-item");
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
            ? ['300px', '350px', '350px']
            : ['300px', '400px', '446px'],
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
                boxShadow: themeMode === products_menu_item_1.ThemeModeType.dark
                    ? '0px 16px 48px rgba(9, 12, 26, 0.5)'
                    : '0px 16px 48px rgba(26, 25, 25, 0.2)',
            }) : tslib_1.__assign(tslib_1.__assign({}, centerModalStyles), {
            backgroundColor: theme.styleguideColors.backgroundPrimary,
            borderColor: theme.styleguideColors.backgroundPrimary,
            boxShadow: themeMode === products_menu_item_1.ThemeModeType.dark
                ? '0px 16px 48px rgba(9, 12, 26, 0.5)'
                : '0px 16px 48px rgba(26, 25, 25, 0.2)',
        }),
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: isOpen, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass, role: "dialog", "aria-modal": "true" }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onClose: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(InformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(StyledDismissButton, tslib_1.__assign({ color: 'utility', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(StyledConfirmButton, tslib_1.__assign({ onClick: onConfirm }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.ConfirmationWindow = ConfirmationWindow;
exports.default = exports.ConfirmationWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsc0ZBQXVEO0FBQ3ZELHlGQUEwRDtBQUMxRCwwRkFBb0Y7QUFFcEYsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLHNDQUFxQixDQUFBO0lBQ3JCLGtDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQXVCRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUss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LGdCQUNuQyxLQUFLLElBQ1ksSUFDTixFQUNoQix1QkFBQyxrQkFBTyxxQkFBQyxPQUFPLEVBQUMsUUFBUSxnQkFDdkIsdUJBQUMsZUFBZSxxQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFDLElBQUksZ0JBQ3JELFdBQVcsSUFDSSxJQUNWLEVBQ1Ysd0JBQUMsZ0JBQWdCLHFCQUNmLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsT0FBTyxFQUFFLGVBQWUsaUJBRXZCLFlBQVksSUFBSSxDQUNmLHVCQUFDLG1CQUFtQixxQkFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLGdCQUN0RCxZQUFZLElBQ08sQ0FDdkIsRUFDRCx1QkFBQyxtQkFBbUIscUJBQUMsT0FBTyxFQUFFLFNBQVMsZ0JBQ3BDLFlBQVksSUFDTyxLQUNMLEtBQ0osSUFDTixDQUNkLEdBQ0EsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBcEdXLFFBQUEsa0JBQWtCLHNCQW9HN0I7QUFFRixrQkFBZSwwQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCB7IFRoZW1lTW9kZVR5cGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LWl0ZW0nO1xuXG5leHBvcnQgZW51bSBNb2RhbFBvc2l0aW9uIHtcbiAgVG9wUmlnaHQgPSAndG9wUmlnaHQnLFxuICBDZW50ZXIgPSAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFBvc2l0aW9uUHJvcHMge1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25XaW5kb3dTY2VuZVByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBib2R5SW1nPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGluZm9ybWF0aW9uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgb25Db25maXJtOiAoKSA9PiB2b2lkO1xuICBjb25maXJtQ29sb3I/OiBzdHJpbmc7XG4gIGRpc21pc3NMYWJlbD86IHN0cmluZztcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xuICBwb3J0YWxDbGFzcz86IHN0cmluZztcbn1cblxuY29uc3QgY2VudGVyTW9kYWxTdHlsZXMgPSB7XG4gIGxlZnQ6ICc1MCUnLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMzJweCAyNHB4IDI0cHggMjRweCcsXG4gIHRvcDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG59O1xuXG5jb25zdCB0b3BNb2RhbFN0eWxlcyA9IHtcbiAgdG9wOiAnNDBweCcsXG4gIGxlZnQ6ICdhdXRvJyxcbiAgcmlnaHQ6ICc0MHB4JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzE2cHggMjRweCAyNHB4IDI0cHgnLFxufTtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHdpZHRoOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICAgID8gWyczMDBweCcsICczNTBweCcsICczNTBweCddXG4gICAgICAgICAgOiBbJzMwMHB4JywgJzQwMHB4JywgJzQ0NnB4J10sXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpbjogJzE1cHggMCAzNXB4IDAnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyNHB4J10sXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0pXG4pO1xuXG5jb25zdCBJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW5Ub3A6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJzQwcHgnIDogWyczMnB4JywgJzMycHgnLCAnNTZweCddLFxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93JywgJ3JvdyddLFxuICAgIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDb25maXJtQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUhvdmVyLFxuICAgIH0sXG4gICAgJzphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWREaXNtaXNzQnV0dG9uID0gc3R5bGVkKEJ1dHRvbikoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICAgIH0sXG4gICAgJzphY3RpdmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlQ2xpY2ssXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25XaW5kb3cgPSAoe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nbyxcbiAgYm9keUltZyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybUNvbG9yLFxuICBvbkNvbmZpcm0sXG4gIGRpc21pc3NMYWJlbCxcbiAgb25EaXNtaXNzLFxuICB0aGVtZU1vZGUsXG4gIHBvcnRhbENsYXNzID0gJ3BvcnRhbCcsXG59OiBDb25maXJtYXRpb25XaW5kb3dTY2VuZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBtb2RhbFN0eWxlID0ge1xuICAgIG92ZXJsYXk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kT3ZlcmxheSxcbiAgICAgIHpJbmRleDogMTUsXG4gICAgfSxcbiAgICBjb250ZW50OlxuICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi50b3BNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZSA9PT0gVGhlbWVNb2RlVHlwZS5kYXJrXG4gICAgICAgICAgICAgICAgICA/ICcwcHggMTZweCA0OHB4IHJnYmEoOSwgMTIsIDI2LCAwLjUpJ1xuICAgICAgICAgICAgICAgICAgOiAnMHB4IDE2cHggNDhweCByZ2JhKDI2LCAyNSwgMjUsIDAuMiknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgLi4uY2VudGVyTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGUgPT09IFRoZW1lTW9kZVR5cGUuZGFya1xuICAgICAgICAgICAgICAgICAgPyAnMHB4IDE2cHggNDhweCByZ2JhKDksIDEyLCAyNiwgMC41KSdcbiAgICAgICAgICAgICAgICAgIDogJzBweCAxNnB4IDQ4cHggcmdiYSgyNiwgMjUsIDI1LCAwLjIpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICBzdHlsZT17bW9kYWxTdHlsZX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxuICAgICAgICAgIHNob3VsZENsb3NlT25Fc2NcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8TW9kYWxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgIHt3aXRoSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlPXt0aGVtZU1vZGV9XG4gICAgICAgICAgICAgICAgaGVhZGVyTG9nbz17aGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtvbkRpc21pc3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2JvZHlJbWcgJiYgPEltYWdlV3JhcHBlciBqdXN0aWZ5PVwiY2VudGVyXCI+e2JvZHlJbWd9PC9JbWFnZVdyYXBwZXI+fVxuICAgICAgICAgICAgPFN0eWxlZENhcHRpb24gcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgPFN0eWxlZENhcHRpb25UZXh0IHNpemU9ezF9IHNjYWxlPVwibGdcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvblRleHQ+XG4gICAgICAgICAgICA8L1N0eWxlZENhcHRpb24+XG4gICAgICAgICAgICA8RmxleFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxJbmZvcm1hdGlvblRleHQgcG9zaXRpb249e3Bvc2l0aW9ufSBzaXplPXszfSBzY2FsZT1cInNtXCI+XG4gICAgICAgICAgICAgICAge2luZm9ybWF0aW9ufVxuICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uVGV4dD5cbiAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZ2FwPXsnMTZweCd9XG4gICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpc21pc3NCdXR0b24gY29sb3I9eyd1dGlsaXR5J30gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXNtaXNzQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8U3R5bGVkQ29uZmlybUJ1dHRvbiBvbkNsaWNrPXtvbkNvbmZpcm19PlxuICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgIDwvU3R5bGVkQ29uZmlybUJ1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybWF0aW9uV2luZG93O1xuIl19