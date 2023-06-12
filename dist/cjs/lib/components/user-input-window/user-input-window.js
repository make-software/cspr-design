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
var modal_header_1 = tslib_1.__importDefault(require("../modal-header/modal-header"));
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
    var regexMatched = function (val) { return !!val && getRegexByInputType().test(val); };
    var modalStyle = {
        overlay: {
            backgroundColor: '#0E1126A0',
            zIndex: 15,
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
        var passVal = e.target.value;
        !!passVal && regexMatched(passVal)
            ? setFormError(null)
            : setFormError("".concat(validationMessage));
        setValue(passVal);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, error: !!formError, validationType: inputType, validationText: formError }) }), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: function () { return onConfirm(value); } }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXFEO0FBQ3JELDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0Qyw4REFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBMEJwRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQ0gsUUFBUSxLQUFLLG1DQUFhLENBQUMsUUFBUTtZQUNqQyxDQUFDLENB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RUFDakQsV0FBVyxFQUFFLFdBQVcsRUFDeEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQ2xCLGNBQWMsRUFBRSxTQUFTLEVBQ3pCLGNBQWMsRUFBRSxTQUFTLEdBQ3pCLEdBQ00sRUFDVix3QkFBQyxnQkFBZ0IscUJBQ2YsUUFBUSxFQUFFLFFBQVEsRUFDbEIsR0FBRyxFQUFFLE1BQU0sRUFDWCxPQUFPLEVBQUUsZUFBZSxpQkFFdkIsWUFBWSxJQUFJLENBQ2YsdUJBQUMsZ0JBQU0scUJBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxnQkFDL0MsWUFBWSxJQUNOLENBQ1YsRUFDRCx1QkFBQyxnQkFBTSxxQkFDTCxLQUFLLEVBQUUsWUFBWSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQzVELE9BQU8sRUFBRSxjQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixnQkFFOUIsWUFBWSxJQUNOLEtBQ1EsS0FDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUF4SlcsUUFBQSxlQUFlLG1CQXdKMUI7QUFFRixrQkFBZSx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IElucHV0LCB7IElucHV0VmFsaWRhdGlvblR5cGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5pbXBvcnQgeyB1c2VFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZXNjYXBlLWtleSc7XG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSAnLi4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcbmltcG9ydCB7XG4gIE1vZGFsUG9zaXRpb24sXG4gIE1vZGFsUG9zaXRpb25Qcm9wcyxcbn0gZnJvbSAnLi4vY29uZmlybWF0aW9uLXdpbmRvdy9jb25maXJtYXRpb24td2luZG93JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBib2R5SW1nPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGluZm9ybWF0aW9uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgb25Db25maXJtOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybUNvbG9yPzogc3RyaW5nO1xuICBkaXNtaXNzTGFiZWw/OiBzdHJpbmc7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlOiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbkVzYz86IGJvb2xlYW47XG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s/OiBib29sZWFuO1xuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xuICBwb3J0YWxDbGFzcz86IHN0cmluZztcbn1cblxuY29uc3QgY2VudGVyTW9kYWxTdHlsZXMgPSB7XG4gIGxlZnQ6ICc1MCUnLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMzJweCAyNHB4IDI0cHggMjRweCcsXG4gIHRvcDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG59O1xuXG5jb25zdCB0b3BNb2RhbFN0eWxlcyA9IHtcbiAgdG9wOiAnNDBweCcsXG4gIGxlZnQ6ICdhdXRvJyxcbiAgcmlnaHQ6ICc0MHB4JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzE2cHggMjRweCAyNHB4IDI0cHgnLFxufTtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHdpZHRoOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICAgID8gWycyNjFweCcsICczNTBweCcsICczNTBweCddXG4gICAgICAgICAgOiBbJzI2MXB4JywgJzQwMHB4JywgJzQ0NnB4J10sXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpbjogJzE1cHggMCAzNXB4IDAnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyNHB4J10sXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW5Ub3A6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJzQwcHgnIDogWyczMnB4JywgJzMycHgnLCAnNTZweCddLFxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93JywgJ3JvdyddLFxuICAgIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZChJbnB1dCkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbnB1dFdpbmRvdyA9ICh7XG4gIGlzT3BlbixcbiAgcG9zaXRpb24sXG4gIHRpdGxlLFxuICB3aXRoSGVhZGVyLFxuICBoZWFkZXJMb2dvLFxuICBib2R5SW1nLFxuICBpbmZvcm1hdGlvbixcbiAgY29uZmlybUxhYmVsLFxuICBjb25maXJtQ29sb3IsXG4gIG9uQ29uZmlybSxcbiAgZGlzbWlzc0xhYmVsLFxuICBzaG91bGRDbG9zZU9uRXNjLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICBvbkRpc21pc3MsXG4gIHRoZW1lTW9kZSxcbiAgaW5wdXRUeXBlLFxuICBwbGFjZWhvbGRlcixcbiAgcmVxdWlyZWQgPSBmYWxzZSxcbiAgaW5wdXRMYWJlbCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHBvcnRhbENsYXNzID0gJ3BvcnRhbCcsXG59OiBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Zvcm1FcnJvciwgc2V0Rm9ybUVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oaXNPcGVuKTtcblxuICB1c2VFc2NhcGVLZXkoKCkgPT4gc2hvdWxkQ2xvc2VPbkVzYyAmJiBzZXRTaG93TW9kYWwoZmFsc2UpKTtcblxuICBjb25zdCBnZXRSZWdleEJ5SW5wdXRUeXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgICBjYXNlIElucHV0VmFsaWRhdGlvblR5cGUucGFzc3dvcmQ6XG4gICAgICAgIHJldHVybiAvXlthLXpBLVowLTldezEyfS87XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gL15bYS16QS1aMC05XXsxMn0vO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlZ2V4TWF0Y2hlZCA9ICh2YWwpID0+ICEhdmFsICYmIGdldFJlZ2V4QnlJbnB1dFR5cGUoKS50ZXN0KHZhbCk7XG5cbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMEUxMTI2QTAnLFxuICAgICAgekluZGV4OiAxNSxcbiAgICB9LFxuICAgIGNvbnRlbnQ6XG4gICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnRvcE1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgLi4uY2VudGVyTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW50ZXJLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIG9uQ29uZmlybShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrICYmIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBwYXNzVmFsID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICAhIXBhc3NWYWwgJiYgcmVnZXhNYXRjaGVkKHBhc3NWYWwpXG4gICAgICA/IHNldEZvcm1FcnJvcihudWxsKVxuICAgICAgOiBzZXRGb3JtRXJyb3IoYCR7dmFsaWRhdGlvbk1lc3NhZ2V9YCk7XG5cbiAgICBzZXRWYWx1ZShwYXNzVmFsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICBzdHlsZT17bW9kYWxTdHlsZX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxuICAgICAgICAgIHNob3VsZENsb3NlT25Fc2NcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lciBwb3NpdGlvbj17cG9zaXRpb259IHJlZj17cmVmfT5cbiAgICAgICAgICAgIHt3aXRoSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlPXt0aGVtZU1vZGV9XG4gICAgICAgICAgICAgICAgaGVhZGVyTG9nbz17aGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Ym9keUltZyAmJiA8SW1hZ2VXcmFwcGVyIGp1c3RpZnk9XCJjZW50ZXJcIj57Ym9keUltZ308L0ltYWdlV3JhcHBlcj59XG4gICAgICAgICAgICA8U3R5bGVkQ2FwdGlvbiBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgICAgICAgICA8U3R5bGVkQ2FwdGlvblRleHQgc2l6ZT17MX0gc2NhbGU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uVGV4dD5cbiAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvbj5cbiAgICAgICAgICAgIDxGbGV4Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFN0eWxlZEluZm9ybWF0aW9uVGV4dCBwb3NpdGlvbj17cG9zaXRpb259IHNpemU9ezN9IHNjYWxlPVwic21cIj5cbiAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb259XG4gICAgICAgICAgICAgIDwvU3R5bGVkSW5mb3JtYXRpb25UZXh0PlxuICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXlEb3dufVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8Qm9keVRleHQgc2l6ZT17Mn0+e2lucHV0TGFiZWx9PC9Cb2R5VGV4dD59XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIGVycm9yPXshIWZvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVHlwZT17aW5wdXRUeXBlfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0PXtmb3JtRXJyb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydzZWNvbmRhcnlCbHVlJ30gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlybUNvbG9yID09PSAncmVkJyA/ICdwcmltYXJ5UmVkJyA6ICdwcmltYXJ5Qmx1ZSd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Db25maXJtKHZhbHVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b25zQ29udGFpbmVyPlxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5wdXRXaW5kb3c7XG4iXX0=