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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: isOpen && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: isOpen, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(InformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(StyledDismissButton, tslib_1.__assign({ color: 'utility', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(StyledConfirmButton, tslib_1.__assign({ onClick: onConfirm }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.ConfirmationWindow = ConfirmationWindow;
exports.default = exports.ConfirmationWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWF0aW9uLXdpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDBFQUEyQztBQUMzQyxtRkFBb0Q7QUFDcEQsb0VBQXNDO0FBQ3RDLDZFQUE4QztBQUM5QyxvRUFBcUM7QUFDckMsc0ZBQXVEO0FBQ3ZELHlGQUEwRDtBQUMxRCwwRkFBb0Y7QUFFcEYsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLHNDQUFxQixDQUFBO0lBQ3JCLGtDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQXVCRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUss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QUMsa0JBQU8scUJBQUMsT0FBTyxFQUFDLFFBQVEsZ0JBQ3ZCLHVCQUFDLGVBQWUscUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxJQUFJLGdCQUNyRCxXQUFXLElBQ0ksSUFDVixFQUNWLHdCQUFDLGdCQUFnQixxQkFDZixRQUFRLEVBQUUsUUFBUSxFQUNsQixHQUFHLEVBQUUsTUFBTSxFQUNYLE9BQU8sRUFBRSxlQUFlLGlCQUV2QixZQUFZLElBQUksQ0FDZix1QkFBQyxtQkFBbUIscUJBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxnQkFDdEQsWUFBWSxJQUNPLENBQ3ZCLEVBQ0QsdUJBQUMsbUJBQW1CLHFCQUFDLE9BQU8sRUFBRSxTQUFTLGdCQUNwQyxZQUFZLElBQ08sS0FDTCxLQUNKLElBQ04sQ0FDZCxHQUNBLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQWxHVyxRQUFBLGtCQUFrQixzQkFrRzdCO0FBRUYsa0JBQWUsMEJBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSAnLi4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcblxuZXhwb3J0IGVudW0gTW9kYWxQb3NpdGlvbiB7XG4gIFRvcFJpZ2h0ID0gJ3RvcFJpZ2h0JyxcbiAgQ2VudGVyID0gJ2NlbnRlcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxQb3NpdGlvblByb3BzIHtcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgYm9keUltZz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdpdGhIZWFkZXI/OiBib29sZWFuO1xuICBoZWFkZXJMb2dvPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBpbmZvcm1hdGlvbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZztcbiAgY29uZmlybUxhYmVsOiBzdHJpbmc7XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgY29uZmlybUNvbG9yPzogc3RyaW5nO1xuICBkaXNtaXNzTGFiZWw/OiBzdHJpbmc7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcbiAgcG9ydGFsQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNlbnRlck1vZGFsU3R5bGVzID0ge1xuICBsZWZ0OiAnNTAlJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzMycHggMjRweCAyNHB4IDI0cHgnLFxuICB0b3A6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxufTtcblxuY29uc3QgdG9wTW9kYWxTdHlsZXMgPSB7XG4gIHRvcDogJzQwcHgnLFxuICBsZWZ0OiAnYXV0bycsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICcxNnB4IDI0cHggMjRweCAyNHB4Jyxcbn07XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkKEZsZXhDb2x1bW4pPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB3aWR0aDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICA/IFsnMzAwcHgnLCAnMzUwcHgnLCAnMzUwcHgnXVxuICAgICAgICAgIDogWyczMDBweCcsICc0MDBweCcsICc0NDZweCddLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW46ICcxNXB4IDAgMzVweCAwJyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb24gPSBzdHlsZWQuZGl2PE1vZGFsUG9zaXRpb25Qcm9wcz4oKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgdGV4dEFsaWduOiBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICdsZWZ0JyA6ICdjZW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvblRleHQgPSBzdHlsZWQoU3VidGl0bGVUZXh0KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGZvbnRXZWlnaHQ6IFs2MDAsIDYwMCwgNzAwXSxcbiAgICBmb250U2l6ZTogWycyMHB4JywgJzI0cHgnLCAnMjRweCddLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICB9KVxuKTtcblxuY29uc3QgSW5mb3JtYXRpb25UZXh0ID0gc3R5bGVkKEJvZHlUZXh0KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgdGV4dEFsaWduOiBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICdsZWZ0JyA6ICdjZW50ZXInLFxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgbWFyZ2luVG9wOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICc0MHB4JyA6IFsnMzJweCcsICczMnB4JywgJzU2cHgnXSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdycsICdyb3cnXSxcbiAgICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ29uZmlybUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZSxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVIb3ZlcixcbiAgICB9LFxuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWVDbGljayxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkRGlzbWlzc0J1dHRvbiA9IHN0eWxlZChCdXR0b24pKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgJzpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICB9LFxuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUNsaWNrLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uV2luZG93ID0gKHtcbiAgaXNPcGVuLFxuICBwb3NpdGlvbixcbiAgdGl0bGUsXG4gIHdpdGhIZWFkZXIsXG4gIGhlYWRlckxvZ28sXG4gIGJvZHlJbWcsXG4gIGluZm9ybWF0aW9uLFxuICBjb25maXJtTGFiZWwsXG4gIGNvbmZpcm1Db2xvcixcbiAgb25Db25maXJtLFxuICBkaXNtaXNzTGFiZWwsXG4gIG9uRGlzbWlzcyxcbiAgdGhlbWVNb2RlLFxuICBwb3J0YWxDbGFzcyA9ICdwb3J0YWwnLFxufTogQ29uZmlybWF0aW9uV2luZG93U2NlbmVQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZE92ZXJsYXksXG4gICAgICB6SW5kZXg6IDE1LFxuICAgIH0sXG4gICAgY29udGVudDpcbiAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4udG9wTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJveFNoYWRvdzpcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGUgPT09IFRoZW1lTW9kZVR5cGUuZGFya1xuICAgICAgICAgICAgICAgICAgPyAnMHB4IDE2cHggNDhweCByZ2JhKDksIDEyLCAyNiwgMC41KSdcbiAgICAgICAgICAgICAgICAgIDogJzBweCAxNnB4IDQ4cHggcmdiYSgyNiwgMjUsIDI1LCAwLjIpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIC4uLmNlbnRlck1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlID09PSBUaGVtZU1vZGVUeXBlLmRhcmtcbiAgICAgICAgICAgICAgICAgID8gJzBweCAxNnB4IDQ4cHggcmdiYSg5LCAxMiwgMjYsIDAuNSknXG4gICAgICAgICAgICAgICAgICA6ICcwcHggMTZweCA0OHB4IHJnYmEoMjYsIDI1LCAyNSwgMC4yKScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgc3R5bGU9e21vZGFsU3R5bGV9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uRGlzbWlzc31cbiAgICAgICAgICBzaG91bGRDbG9zZU9uRXNjXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xuICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17cG9ydGFsQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICA8TW9kYWxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgIHt3aXRoSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlPXt0aGVtZU1vZGV9XG4gICAgICAgICAgICAgICAgaGVhZGVyTG9nbz17aGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Ym9keUltZyAmJiA8SW1hZ2VXcmFwcGVyIGp1c3RpZnk9XCJjZW50ZXJcIj57Ym9keUltZ308L0ltYWdlV3JhcHBlcj59XG4gICAgICAgICAgICA8U3R5bGVkQ2FwdGlvbiBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgICAgICAgICA8U3R5bGVkQ2FwdGlvblRleHQgc2l6ZT17MX0gc2NhbGU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uVGV4dD5cbiAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvbj5cbiAgICAgICAgICAgIDxGbGV4Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEluZm9ybWF0aW9uVGV4dCBwb3NpdGlvbj17cG9zaXRpb259IHNpemU9ezN9IHNjYWxlPVwic21cIj5cbiAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb259XG4gICAgICAgICAgICAgIDwvSW5mb3JtYXRpb25UZXh0PlxuICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICAgICAgICBnYXA9eycxNnB4J31cbiAgICAgICAgICAgICAganVzdGlmeT17J3NwYWNlLWJldHdlZW4nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsICYmIChcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGlzbWlzc0J1dHRvbiBjb2xvcj17J3V0aWxpdHknfSBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbH1cbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpc21pc3NCdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxTdHlsZWRDb25maXJtQnV0dG9uIG9uQ2xpY2s9e29uQ29uZmlybX0+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgPC9TdHlsZWRDb25maXJtQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b25zQ29udGFpbmVyPlxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtYXRpb25XaW5kb3c7XG4iXX0=