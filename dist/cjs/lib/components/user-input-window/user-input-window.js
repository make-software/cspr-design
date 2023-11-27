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
            backgroundColor: theme.styleguideColors.backgroundOverlay,
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
        var val = e.target.value;
        if (val && !formError) {
            if (e.key === 'Enter') {
                onConfirm(val);
            }
        }
        else
            return;
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, error: !!formError, validationType: inputType, validationText: formError }) }), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: function () { return onConfirm(value); }, disabled: value ? !!formError : true }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXFEO0FBQ3JELDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0Qyw4REFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBMEJwRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQ0gsUUFBUSxLQUFLLG1DQUFhLENBQUMsUUFBUTtZQUNqQyxDQUFDLENB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QUNaLFFBQVEsRUFBRSxpQkFBaUIsRUFDM0IsU0FBUyxFQUFFLGtCQUFrQixFQUM3QixLQUFLLEVBQUUsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFZLEVBQ2pELFdBQVcsRUFBRSxXQUFXLEVBQ3hCLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxFQUNsQixjQUFjLEVBQUUsU0FBUyxFQUN6QixjQUFjLEVBQUUsU0FBUyxHQUN6QixHQUNNLEVBQ1Ysd0JBQUMsZ0JBQWdCLHFCQUNmLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsT0FBTyxFQUFFLGVBQWUsaUJBRXZCLFlBQVksSUFBSSxDQUNmLHVCQUFDLGdCQUFNLHFCQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsZ0JBQy9DLFlBQVksSUFDTixDQUNWLEVBQ0QsdUJBQUMsZ0JBQU0scUJBQ0wsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUM1RCxPQUFPLEVBQUUsY0FBTSxPQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsRUFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFFbkMsWUFBWSxJQUNOLEtBQ1EsS0FDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUE3SlcsUUFBQSxlQUFlLG1CQTZKMUI7QUFFRixrQkFBZSx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IElucHV0LCB7IElucHV0VmFsaWRhdGlvblR5cGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5pbXBvcnQgeyB1c2VFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZXNjYXBlLWtleSc7XG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSAnLi4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcbmltcG9ydCB7XG4gIE1vZGFsUG9zaXRpb24sXG4gIE1vZGFsUG9zaXRpb25Qcm9wcyxcbn0gZnJvbSAnLi4vY29uZmlybWF0aW9uLXdpbmRvdy9jb25maXJtYXRpb24td2luZG93JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBib2R5SW1nPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGluZm9ybWF0aW9uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgb25Db25maXJtOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgY29uZmlybUNvbG9yPzogc3RyaW5nO1xuICBkaXNtaXNzTGFiZWw/OiBzdHJpbmc7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlOiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbkVzYz86IGJvb2xlYW47XG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s/OiBib29sZWFuO1xuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xuICBwb3J0YWxDbGFzcz86IHN0cmluZztcbn1cblxuY29uc3QgY2VudGVyTW9kYWxTdHlsZXMgPSB7XG4gIGxlZnQ6ICc1MCUnLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMzJweCAyNHB4IDI0cHggMjRweCcsXG4gIHRvcDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG59O1xuXG5jb25zdCB0b3BNb2RhbFN0eWxlcyA9IHtcbiAgdG9wOiAnNDBweCcsXG4gIGxlZnQ6ICdhdXRvJyxcbiAgcmlnaHQ6ICc0MHB4JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzE2cHggMjRweCAyNHB4IDI0cHgnLFxufTtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHdpZHRoOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICAgID8gWyczMDBweCcsICczNTBweCcsICczNTBweCddXG4gICAgICAgICAgOiBbJzMwMHB4JywgJzQwMHB4JywgJzQ0NnB4J10sXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpbjogJzE1cHggMCAzNXB4IDAnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyNHB4J10sXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW5Ub3A6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJzQwcHgnIDogWyczMnB4JywgJzMycHgnLCAnNTZweCddLFxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93JywgJ3JvdyddLFxuICAgIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZChJbnB1dCkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbnB1dFdpbmRvdyA9ICh7XG4gIGlzT3BlbixcbiAgcG9zaXRpb24sXG4gIHRpdGxlLFxuICB3aXRoSGVhZGVyLFxuICBoZWFkZXJMb2dvLFxuICBib2R5SW1nLFxuICBpbmZvcm1hdGlvbixcbiAgY29uZmlybUxhYmVsLFxuICBjb25maXJtQ29sb3IsXG4gIG9uQ29uZmlybSxcbiAgZGlzbWlzc0xhYmVsLFxuICBzaG91bGRDbG9zZU9uRXNjLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICBvbkRpc21pc3MsXG4gIHRoZW1lTW9kZSxcbiAgaW5wdXRUeXBlLFxuICBwbGFjZWhvbGRlcixcbiAgcmVxdWlyZWQgPSBmYWxzZSxcbiAgaW5wdXRMYWJlbCxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHBvcnRhbENsYXNzID0gJ3BvcnRhbCcsXG59OiBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Zvcm1FcnJvciwgc2V0Rm9ybUVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oaXNPcGVuKTtcblxuICB1c2VFc2NhcGVLZXkoKCkgPT4gc2hvdWxkQ2xvc2VPbkVzYyAmJiBzZXRTaG93TW9kYWwoZmFsc2UpKTtcblxuICBjb25zdCBnZXRSZWdleEJ5SW5wdXRUeXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgICBjYXNlIElucHV0VmFsaWRhdGlvblR5cGUucGFzc3dvcmQ6XG4gICAgICAgIHJldHVybiAvXlthLXpBLVowLTldezEyfS87XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gL15bYS16QS1aMC05XXsxMn0vO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlZ2V4TWF0Y2hlZCA9ICh2YWwpID0+ICEhdmFsICYmIGdldFJlZ2V4QnlJbnB1dFR5cGUoKS50ZXN0KHZhbCk7XG5cbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZE92ZXJsYXksXG4gICAgICB6SW5kZXg6IDE1LFxuICAgIH0sXG4gICAgY29udGVudDpcbiAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4udG9wTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAuLi5jZW50ZXJNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbnRlcktleURvd24gPSAoZSkgPT4ge1xuICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh2YWwgJiYgIWZvcm1FcnJvcikge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIG9uQ29uZmlybSh2YWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm47XG4gIH07XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2sgJiYgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHBhc3NWYWwgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgICEhcGFzc1ZhbCAmJiByZWdleE1hdGNoZWQocGFzc1ZhbClcbiAgICAgID8gc2V0Rm9ybUVycm9yKG51bGwpXG4gICAgICA6IHNldEZvcm1FcnJvcihgJHt2YWxpZGF0aW9uTWVzc2FnZX1gKTtcblxuICAgIHNldFZhbHVlKHBhc3NWYWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8UmVhY3RNb2RhbFxuICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxuICAgICAgICAgIHN0eWxlPXttb2RhbFN0eWxlfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkRpc21pc3N9XG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY1xuICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2tcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWU9e3BvcnRhbENsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0gcmVmPXtyZWZ9PlxuICAgICAgICAgICAge3dpdGhIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cbiAgICAgICAgICAgICAgICBoZWFkZXJMb2dvPXtoZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtib2R5SW1nICYmIDxJbWFnZVdyYXBwZXIganVzdGlmeT1cImNlbnRlclwiPntib2R5SW1nfTwvSW1hZ2VXcmFwcGVyPn1cbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uVGV4dCBzaXplPXsxfSBzY2FsZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L1N0eWxlZENhcHRpb25UZXh0PlxuICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uPlxuICAgICAgICAgICAgPEZsZXhSb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8U3R5bGVkSW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8RmxleFJvdz5cbiAgICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleURvd259XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxCb2R5VGV4dCBzaXplPXsyfT57aW5wdXRMYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgZXJyb3I9eyEhZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UeXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHQ9e2Zvcm1FcnJvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZ2FwPXsnMTZweCd9XG4gICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3NlY29uZGFyeUJsdWUnfSBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb25maXJtQ29sb3IgPT09ICdyZWQnID8gJ3ByaW1hcnlSZWQnIDogJ3ByaW1hcnlCbHVlJ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0odmFsdWUpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZSA/ICEhZm9ybUVycm9yIDogdHJ1ZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CdXR0b25zQ29udGFpbmVyPlxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XG4gICAgICAgIDwvUmVhY3RNb2RhbD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5wdXRXaW5kb3c7XG4iXX0=