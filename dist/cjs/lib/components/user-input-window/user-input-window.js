"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputWindow = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var button_1 = tslib_1.__importDefault(require("../button/button"));
var input_1 = tslib_1.__importStar(require("../input/input"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var react_modal_1 = tslib_1.__importDefault(require("react-modal"));
var use_click_away_1 = require("../../hooks/use-click-away");
var use_escape_key_1 = require("../../hooks/use-escape-key");
var modal_header_1 = tslib_1.__importDefault(require("./modal-header"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var confirmation_window_1 = require("../confirmation-window/confirmation-window");
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
        width: position === confirmation_window_1.ModalPosition.TopRight
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
        textAlign: position === confirmation_window_1.ModalPosition.TopRight ? 'left' : 'center',
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
var StyledInformationText = (0, styled_components_1.default)(body_text_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        textAlign: position === confirmation_window_1.ModalPosition.TopRight ? 'left' : 'center',
        color: theme.styleguideColors.contentSecondary,
    });
});
var ButtonsContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        marginTop: position === confirmation_window_1.ModalPosition.TopRight ? '40px' : ['32px', '32px', '56px'],
        flexDirection: ['column', 'row', 'row'],
    });
});
var StyledInput = (0, styled_components_1.default)(input_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        width: '100%',
    });
});
var UserInputWindow = function (_a) {
    var isOpen = _a.isOpen, position = _a.position, title = _a.title, withHeader = _a.withHeader, headerLogo = _a.headerLogo, bodyImg = _a.bodyImg, information = _a.information, confirmLabel = _a.confirmLabel, confirmColor = _a.confirmColor, onConfirm = _a.onConfirm, dismissLabel = _a.dismissLabel, shouldCloseOnEsc = _a.shouldCloseOnEsc, shouldCloseOnOverlayClick = _a.shouldCloseOnOverlayClick, onDismiss = _a.onDismiss, themeMode = _a.themeMode, inputType = _a.inputType, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? false : _b, inputLabel = _a.inputLabel, validationMessage = _a.validationMessage, _c = _a.portalClass, portalClass = _c === void 0 ? 'portal' : _c;
    var theme = (0, styled_components_1.useTheme)();
    var _d = (0, react_1.useState)(''), value = _d[0], setValue = _d[1];
    var _e = (0, react_1.useState)(null), formError = _e[0], setFormError = _e[1];
    var _f = (0, react_1.useState)(isOpen), showModal = _f[0], setShowModal = _f[1];
    (0, use_escape_key_1.useEscapeKey)(function () { return shouldCloseOnEsc && setShowModal(false); });
    var getRegexByInputType = (0, react_1.useCallback)(function () {
        switch (inputType) {
            case input_1.InputValidationType.password:
                return /^[a-zA-Z0-9]{12}/;
            default:
                return /^[a-zA-Z0-9]{12}/;
        }
    }, []);
    var regexMatched = !!value && getRegexByInputType().test(value);
    var modalStyle = {
        overlay: {
            backgroundColor: '#0E1126A0',
        },
        content: position === confirmation_window_1.ModalPosition.TopRight
            ? tslib_1.__assign(tslib_1.__assign({}, topModalStyles), {
                backgroundColor: theme.styleguideColors.backgroundPrimary,
                borderColor: theme.styleguideColors.backgroundPrimary,
            }) : tslib_1.__assign(tslib_1.__assign({}, centerModalStyles), {
            backgroundColor: theme.styleguideColors.backgroundPrimary,
            borderColor: theme.styleguideColors.backgroundPrimary,
        }),
    };
    var handleEnterKeyDown = function (e) {
        if (e.key === 'Enter') {
            onConfirm(e.target.value);
        }
    };
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            shouldCloseOnOverlayClick && setShowModal(false);
        },
    }).ref;
    var handleInputChange = function (e) {
        regexMatched ? setFormError(null) : setFormError("".concat(validationMessage));
        setValue(e.target.value);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, error: !!formError, validationType: inputType, validationText: formError }) }), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: function () { return onConfirm(value); } }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXFEO0FBQ3JELDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0Qyw4REFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHdFQUF5QztBQUN6Qyx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBMEJwRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQ0gsUUFBUSxLQUFLLG1DQUFhLENBQUMsUUFBUTtZQUNqQyxDQUFDLENB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Z0IscUJBQ2YsUUFBUSxFQUFFLFFBQVEsRUFDbEIsR0FBRyxFQUFFLE1BQU0sRUFDWCxPQUFPLEVBQUUsZUFBZSxpQkFFdkIsWUFBWSxJQUFJLENBQ2YsdUJBQUMsZ0JBQU0scUJBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxnQkFDL0MsWUFBWSxJQUNOLENBQ1YsRUFDRCx1QkFBQyxnQkFBTSxxQkFDTCxLQUFLLEVBQUUsWUFBWSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQzVELE9BQU8sRUFBRSxjQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixnQkFFOUIsWUFBWSxJQUNOLEtBQ1EsS0FDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFsSlcsUUFBQSxlQUFlLG1CQWtKMUI7QUFFRixrQkFBZSx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IElucHV0LCB7IElucHV0VmFsaWRhdGlvblR5cGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5pbXBvcnQgeyB1c2VFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZXNjYXBlLWtleSc7XG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSAnLi9tb2RhbC1oZWFkZXInO1xuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IHsgVGhlbWVNb2RlVHlwZSB9IGZyb20gJy4uL25hdmlnYXRpb24vY3Nwci1wcm9kdWN0cy1tZW51L3Byb2R1Y3RzLW1lbnUtaXRlbSc7XG5pbXBvcnQge1xuICBNb2RhbFBvc2l0aW9uLFxuICBNb2RhbFBvc2l0aW9uUHJvcHMsXG59IGZyb20gJy4uL2NvbmZpcm1hdGlvbi13aW5kb3cvY29uZmlybWF0aW9uLXdpbmRvdyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlcklucHV0V2luZG93U2NlbmVQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgYm9keUltZz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdpdGhIZWFkZXI/OiBib29sZWFuO1xuICBoZWFkZXJMb2dvPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBpbmZvcm1hdGlvbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZztcbiAgY29uZmlybUxhYmVsOiBzdHJpbmc7XG4gIG9uQ29uZmlybTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbmZpcm1Db2xvcj86IHN0cmluZztcbiAgZGlzbWlzc0xhYmVsPzogc3RyaW5nO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZTogSW5wdXRWYWxpZGF0aW9uVHlwZTtcbiAgdmFsaWRhdGlvbk1lc3NhZ2U/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIHNob3VsZENsb3NlT25Fc2M/OiBib29sZWFuO1xuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPzogYm9vbGVhbjtcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcbiAgcG9ydGFsQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNlbnRlck1vZGFsU3R5bGVzID0ge1xuICBsZWZ0OiAnNTAlJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzMycHggMjRweCAyNHB4IDI0cHgnLFxuICB0b3A6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxufTtcblxuY29uc3QgdG9wTW9kYWxTdHlsZXMgPSB7XG4gIHRvcDogJzQwcHgnLFxuICBsZWZ0OiAnYXV0bycsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICcxNnB4IDI0cHggMjRweCAyNHB4Jyxcbn07XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkKEZsZXhDb2x1bW4pPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB3aWR0aDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICA/IFsnMjYxcHgnLCAnMzUwcHgnLCAnMzUwcHgnXVxuICAgICAgICAgIDogWycyNjFweCcsICc0MDBweCcsICc0NDZweCddLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW46ICcxNXB4IDAgMzVweCAwJyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb24gPSBzdHlsZWQuZGl2PE1vZGFsUG9zaXRpb25Qcm9wcz4oKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgdGV4dEFsaWduOiBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICdsZWZ0JyA6ICdjZW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvblRleHQgPSBzdHlsZWQoU3VidGl0bGVUZXh0KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGZvbnRXZWlnaHQ6IFs2MDAsIDYwMCwgNzAwXSxcbiAgICBmb250U2l6ZTogWycyMHB4JywgJzI0cHgnLCAnMjRweCddLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5mb3JtYXRpb25UZXh0ID0gc3R5bGVkKEJvZHlUZXh0KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgdGV4dEFsaWduOiBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICdsZWZ0JyA6ICdjZW50ZXInLFxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgbWFyZ2luVG9wOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICc0MHB4JyA6IFsnMzJweCcsICczMnB4JywgJzU2cHgnXSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdycsICdyb3cnXSxcbiAgICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBVc2VySW5wdXRXaW5kb3cgPSAoe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nbyxcbiAgYm9keUltZyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybUNvbG9yLFxuICBvbkNvbmZpcm0sXG4gIGRpc21pc3NMYWJlbCxcbiAgc2hvdWxkQ2xvc2VPbkVzYyxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayxcbiAgb25EaXNtaXNzLFxuICB0aGVtZU1vZGUsXG4gIGlucHV0VHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHJlcXVpcmVkID0gZmFsc2UsXG4gIGlucHV0TGFiZWwsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICBwb3J0YWxDbGFzcyA9ICdwb3J0YWwnLFxufTogVXNlcklucHV0V2luZG93U2NlbmVQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmb3JtRXJyb3IsIHNldEZvcm1FcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGlzT3Blbik7XG5cbiAgdXNlRXNjYXBlS2V5KCgpID0+IHNob3VsZENsb3NlT25Fc2MgJiYgc2V0U2hvd01vZGFsKGZhbHNlKSk7XG5cbiAgY29uc3QgZ2V0UmVnZXhCeUlucHV0VHlwZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzd2l0Y2ggKGlucHV0VHlwZSkge1xuICAgICAgY2FzZSBJbnB1dFZhbGlkYXRpb25UeXBlLnBhc3N3b3JkOlxuICAgICAgICByZXR1cm4gL15bYS16QS1aMC05XXsxMn0vO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIC9eW2EtekEtWjAtOV17MTJ9LztcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCByZWdleE1hdGNoZWQgPSAhIXZhbHVlICYmIGdldFJlZ2V4QnlJbnB1dFR5cGUoKS50ZXN0KHZhbHVlKTtcblxuICBjb25zdCBtb2RhbFN0eWxlID0ge1xuICAgIG92ZXJsYXk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRTExMjZBMCcsXG4gICAgfSxcbiAgICBjb250ZW50OlxuICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi50b3BNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIC4uLmNlbnRlck1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBvbkNvbmZpcm0oZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcbiAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayAmJiBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICByZWdleE1hdGNoZWQgPyBzZXRGb3JtRXJyb3IobnVsbCkgOiBzZXRGb3JtRXJyb3IoYCR7dmFsaWRhdGlvbk1lc3NhZ2V9YCk7XG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8UmVhY3RNb2RhbFxuICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxuICAgICAgICAgIHN0eWxlPXttb2RhbFN0eWxlfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkRpc21pc3N9XG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY1xuICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2tcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWU9e3BvcnRhbENsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0gcmVmPXtyZWZ9PlxuICAgICAgICAgICAge3dpdGhIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cbiAgICAgICAgICAgICAgICBoZWFkZXJMb2dvPXtoZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtib2R5SW1nICYmIDxJbWFnZVdyYXBwZXIganVzdGlmeT1cImNlbnRlclwiPntib2R5SW1nfTwvSW1hZ2VXcmFwcGVyPn1cbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uVGV4dCBzaXplPXsxfSBzY2FsZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L1N0eWxlZENhcHRpb25UZXh0PlxuICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uPlxuICAgICAgICAgICAgPEZsZXhSb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8U3R5bGVkSW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8RmxleFJvdz5cbiAgICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleURvd259XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxCb2R5VGV4dCBzaXplPXsyfT57aW5wdXRMYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgZXJyb3I9eyEhZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UeXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHQ9e2Zvcm1FcnJvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZ2FwPXsnMTZweCd9XG4gICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3NlY29uZGFyeUJsdWUnfSBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb25maXJtQ29sb3IgPT09ICdyZWQnID8gJ3ByaW1hcnlSZWQnIDogJ3ByaW1hcnlCbHVlJ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0odmFsdWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnB1dFdpbmRvdztcbiJdfQ==