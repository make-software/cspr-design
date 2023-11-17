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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: isOpen, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(InformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(StyledDismissButton, tslib_1.__assign({ color: 'utility', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(StyledConfirmButton, tslib_1.__assign({ onClick: onConfirm }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.ConfirmationWindow = ConfirmationWindow;
exports.default = exports.ConfirmationWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsc0ZBQXVEO0FBQ3ZELHlGQUEwRDtBQUMxRCwwRkFBb0Y7QUFFcEYsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLHNDQUFxQixDQUFBO0lBQ3JCLGtDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQXVCRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUss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QUMsa0JBQU8scUJBQUMsT0FBTyxFQUFDLFFBQVEsZ0JBQ3ZCLHVCQUFDLGVBQWUscUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxJQUFJLGdCQUNyRCxXQUFXLElBQ0ksSUFDVixFQUNWLHdCQUFDLGdCQUFnQixxQkFDZixRQUFRLEVBQUUsUUFBUSxFQUNsQixHQUFHLEVBQUUsTUFBTSxFQUNYLE9BQU8sRUFBRSxlQUFlLGlCQUV2QixZQUFZLElBQUksQ0FDZix1QkFBQyxtQkFBbUIscUJBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxnQkFDdEQsWUFBWSxJQUNPLENBQ3ZCLEVBQ0QsdUJBQUMsbUJBQW1CLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUNwQyxZQUFZLElBQ08sS0FDTCxLQUNKLElBQ04sQ0FDZCxHQUNBLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQWxHVyxRQUFBLGtCQUFrQixzQkFrRzdCO0FBRUYsa0JBQWUsMEJBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XHJcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xyXG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyJztcclxuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xyXG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcclxuXHJcbmV4cG9ydCBlbnVtIE1vZGFsUG9zaXRpb24ge1xyXG4gIFRvcFJpZ2h0ID0gJ3RvcFJpZ2h0JyxcclxuICBDZW50ZXIgPSAnY2VudGVyJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb2RhbFBvc2l0aW9uUHJvcHMge1xyXG4gIHBvc2l0aW9uOiBNb2RhbFBvc2l0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1hdGlvbldpbmRvd1NjZW5lUHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBib2R5SW1nPzogUmVhY3QuUmVhY3RFbGVtZW50O1xyXG4gIHBvc2l0aW9uOiBNb2RhbFBvc2l0aW9uO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XHJcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcclxuICBpbmZvcm1hdGlvbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZztcclxuICBjb25maXJtTGFiZWw6IHN0cmluZztcclxuICBvbkNvbmZpcm06ICgpID0+IHZvaWQ7XHJcbiAgY29uZmlybUNvbG9yPzogc3RyaW5nO1xyXG4gIGRpc21pc3NMYWJlbD86IHN0cmluZztcclxuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XHJcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcclxuICBwb3J0YWxDbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY2VudGVyTW9kYWxTdHlsZXMgPSB7XHJcbiAgbGVmdDogJzUwJScsXHJcbiAgcmlnaHQ6ICdhdXRvJyxcclxuICBib3R0b206ICdhdXRvJyxcclxuICBib3JkZXI6ICdub25lJyxcclxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICBwYWRkaW5nOiAnMzJweCAyNHB4IDI0cHggMjRweCcsXHJcbiAgdG9wOiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG59O1xyXG5cclxuY29uc3QgdG9wTW9kYWxTdHlsZXMgPSB7XHJcbiAgdG9wOiAnNDBweCcsXHJcbiAgbGVmdDogJ2F1dG8nLFxyXG4gIHJpZ2h0OiAnNDBweCcsXHJcbiAgYm9yZGVyOiAnbm9uZScsXHJcbiAgYm90dG9tOiAnYXV0bycsXHJcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXHJcbiAgcGFkZGluZzogJzE2cHggMjRweCAyNHB4IDI0cHgnLFxyXG59O1xyXG5cclxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcclxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cclxuICAgIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICAgIHdpZHRoOlxyXG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XHJcbiAgICAgICAgICA/IFsnMjYxcHgnLCAnMzUwcHgnLCAnMzUwcHgnXVxyXG4gICAgICAgICAgOiBbJzI2MXB4JywgJzQwMHB4JywgJzQ0NnB4J10sXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBtYXJnaW46ICcxNXB4IDAgMzVweCAwJyxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgdGV4dEFsaWduOiBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICdsZWZ0JyA6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFN0eWxlZENhcHRpb25UZXh0ID0gc3R5bGVkKFN1YnRpdGxlVGV4dCkoKHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxyXG4gICAgZm9udFNpemU6IFsnMjBweCcsICcyNHB4JywgJzI0cHgnXSxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXHJcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XHJcbiAgICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxyXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxyXG4gICAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgICAgbWFyZ2luVG9wOlxyXG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJzQwcHgnIDogWyczMnB4JywgJzMycHgnLCAnNTZweCddLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkQ29uZmlybUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pKCh7IHRoZW1lIH0pID0+XHJcbiAgICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWUsXHJcbiAgICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVIb3ZlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgICc6YWN0aXZlJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZUNsaWNrLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkRGlzbWlzc0J1dHRvbiA9IHN0eWxlZChCdXR0b24pKCh7IHRoZW1lIH0pID0+XHJcbiAgICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gICAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgICc6YWN0aXZlJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlQ2xpY2ssXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uV2luZG93ID0gKHtcclxuICBpc09wZW4sXHJcbiAgcG9zaXRpb24sXHJcbiAgdGl0bGUsXHJcbiAgd2l0aEhlYWRlcixcclxuICBoZWFkZXJMb2dvLFxyXG4gIGJvZHlJbWcsXHJcbiAgaW5mb3JtYXRpb24sXHJcbiAgY29uZmlybUxhYmVsLFxyXG4gIGNvbmZpcm1Db2xvcixcclxuICBvbkNvbmZpcm0sXHJcbiAgZGlzbWlzc0xhYmVsLFxyXG4gIG9uRGlzbWlzcyxcclxuICB0aGVtZU1vZGUsXHJcbiAgcG9ydGFsQ2xhc3MgPSAncG9ydGFsJyxcclxufTogQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRPdmVybGF5LFxyXG4gICAgICB6SW5kZXg6IDE1LFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6XHJcbiAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIC4uLnRvcE1vZGFsU3R5bGVzLFxyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZSA9PT0gVGhlbWVNb2RlVHlwZS5kYXJrXHJcbiAgICAgICAgICAgICAgICAgID8gJzBweCAxNnB4IDQ4cHggcmdiYSg5LCAxMiwgMjYsIDAuNSknXHJcbiAgICAgICAgICAgICAgICAgIDogJzBweCAxNnB4IDQ4cHggcmdiYSgyNiwgMjUsIDI1LCAwLjIpJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IHtcclxuICAgICAgICAgICAgLi4uY2VudGVyTW9kYWxTdHlsZXMsXHJcbiAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlID09PSBUaGVtZU1vZGVUeXBlLmRhcmtcclxuICAgICAgICAgICAgICAgICAgPyAnMHB4IDE2cHggNDhweCByZ2JhKDksIDEyLCAyNiwgMC41KSdcclxuICAgICAgICAgICAgICAgICAgOiAnMHB4IDE2cHggNDhweCByZ2JhKDI2LCAyNSwgMjUsIDAuMiknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPFJlYWN0TW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxyXG4gICAgICAgICAgc3R5bGU9e21vZGFsU3R5bGV9XHJcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxyXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY1xyXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xyXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TW9kYWxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufT5cclxuICAgICAgICAgICAge3dpdGhIZWFkZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxNb2RhbEhlYWRlclxyXG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlPXt0aGVtZU1vZGV9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJMb2dvPXtoZWFkZXJMb2dvfVxyXG4gICAgICAgICAgICAgICAgb25EaXNtaXNzPXtvbkRpc21pc3N9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2JvZHlJbWcgJiYgPEltYWdlV3JhcHBlciBqdXN0aWZ5PVwiY2VudGVyXCI+e2JvZHlJbWd9PC9JbWFnZVdyYXBwZXI+fVxyXG4gICAgICAgICAgICA8U3R5bGVkQ2FwdGlvbiBwb3NpdGlvbj17cG9zaXRpb259PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uVGV4dCBzaXplPXsxfSBzY2FsZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uVGV4dD5cclxuICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uPlxyXG4gICAgICAgICAgICA8RmxleFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPEluZm9ybWF0aW9uVGV4dCBwb3NpdGlvbj17cG9zaXRpb259IHNpemU9ezN9IHNjYWxlPVwic21cIj5cclxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICA8L0luZm9ybWF0aW9uVGV4dD5cclxuICAgICAgICAgICAgPC9GbGV4Um93PlxyXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgICAgICAgICBnYXA9eycxNnB4J31cclxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsICYmIChcclxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXNtaXNzQnV0dG9uIGNvbG9yPXsndXRpbGl0eSd9IG9uQ2xpY2s9e29uRGlzbWlzc30+XHJcbiAgICAgICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWx9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpc21pc3NCdXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8U3R5bGVkQ29uZmlybUJ1dHRvbiBvbkNsaWNrPXtvbkNvbmZpcm19PlxyXG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cclxuICAgICAgICAgICAgICA8L1N0eWxlZENvbmZpcm1CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XHJcbiAgICAgICAgPC9SZWFjdE1vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1hdGlvbldpbmRvdztcclxuIl19