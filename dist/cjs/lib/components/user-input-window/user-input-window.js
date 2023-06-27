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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXFEO0FBQ3JELDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0Qyw4REFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBMEJwRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQ0gsUUFBUSxLQUFLLG1DQUFhLENBQUMsUUFBUTtZQUNqQyxDQUFDLENB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M0IsU0FBUyxFQUFFLGtCQUFrQixFQUM3QixLQUFLLEVBQUUsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFZLEVBQ2pELFdBQVcsRUFBRSxXQUFXLEVBQ3hCLEtBQUssRUFBRSxDQUFDLENBQUMsU0FBUyxFQUNsQixjQUFjLEVBQUUsU0FBUyxFQUN6QixjQUFjLEVBQUUsU0FBUyxHQUN6QixHQUNNLEVBQ1Ysd0JBQUMsZ0JBQWdCLHFCQUNmLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsT0FBTyxFQUFFLGVBQWUsaUJBRXZCLFlBQVksSUFBSSxDQUNmLHVCQUFDLGdCQUFNLHFCQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsZ0JBQy9DLFlBQVksSUFDTixDQUNWLEVBQ0QsdUJBQUMsZ0JBQU0scUJBQ0wsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUM1RCxPQUFPLEVBQUUsY0FBTSxPQUFBLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBaEIsQ0FBZ0IsRUFDL0IsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFFbkMsWUFBWSxJQUNOLEtBQ1EsS0FDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUE3SlcsUUFBQSxlQUFlLG1CQTZKMUI7QUFFRixrQkFBZSx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xyXG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCBJbnB1dCwgeyBJbnB1dFZhbGlkYXRpb25UeXBlIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQnO1xyXG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XHJcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xyXG5pbXBvcnQgeyB1c2VFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZXNjYXBlLWtleSc7XHJcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyJztcclxuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xyXG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcclxuaW1wb3J0IHtcclxuICBNb2RhbFBvc2l0aW9uLFxyXG4gIE1vZGFsUG9zaXRpb25Qcm9wcyxcclxufSBmcm9tICcuLi9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzIHtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgYm9keUltZz86IFJlYWN0LlJlYWN0RWxlbWVudDtcclxuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHdpdGhIZWFkZXI/OiBib29sZWFuO1xyXG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XHJcbiAgaW5mb3JtYXRpb24/OiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgY29uZmlybUxhYmVsOiBzdHJpbmc7XHJcbiAgb25Db25maXJtOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICBjb25maXJtQ29sb3I/OiBzdHJpbmc7XHJcbiAgZGlzbWlzc0xhYmVsPzogc3RyaW5nO1xyXG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcclxuICBpbnB1dExhYmVsPzogc3RyaW5nO1xyXG4gIGlucHV0VHlwZTogSW5wdXRWYWxpZGF0aW9uVHlwZTtcclxuICB2YWxpZGF0aW9uTWVzc2FnZT86IHN0cmluZztcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgc2hvdWxkQ2xvc2VPbkVzYz86IGJvb2xlYW47XHJcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaz86IGJvb2xlYW47XHJcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcclxuICBwb3J0YWxDbGFzcz86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY2VudGVyTW9kYWxTdHlsZXMgPSB7XHJcbiAgbGVmdDogJzUwJScsXHJcbiAgcmlnaHQ6ICdhdXRvJyxcclxuICBib3R0b206ICdhdXRvJyxcclxuICBib3JkZXI6ICdub25lJyxcclxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuICBwYWRkaW5nOiAnMzJweCAyNHB4IDI0cHggMjRweCcsXHJcbiAgdG9wOiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG59O1xyXG5cclxuY29uc3QgdG9wTW9kYWxTdHlsZXMgPSB7XHJcbiAgdG9wOiAnNDBweCcsXHJcbiAgbGVmdDogJ2F1dG8nLFxyXG4gIHJpZ2h0OiAnNDBweCcsXHJcbiAgYm9yZGVyOiAnbm9uZScsXHJcbiAgYm90dG9tOiAnYXV0bycsXHJcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXHJcbiAgcGFkZGluZzogJzE2cHggMjRweCAyNHB4IDI0cHgnLFxyXG59O1xyXG5cclxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcclxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cclxuICAgIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICAgIHdpZHRoOlxyXG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XHJcbiAgICAgICAgICA/IFsnMjYxcHgnLCAnMzUwcHgnLCAnMzUwcHgnXVxyXG4gICAgICAgICAgOiBbJzI2MXB4JywgJzQwMHB4JywgJzQ0NnB4J10sXHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgfSlcclxuKTtcclxuXHJcbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBtYXJnaW46ICcxNXB4IDAgMzVweCAwJyxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgdGV4dEFsaWduOiBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICdsZWZ0JyA6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFN0eWxlZENhcHRpb25UZXh0ID0gc3R5bGVkKFN1YnRpdGxlVGV4dCkoKHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxyXG4gICAgZm9udFNpemU6IFsnMjBweCcsICcyNHB4JywgJzI0cHgnXSxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBTdHlsZWRJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXHJcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XHJcbiAgICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgICB0ZXh0QWxpZ246IHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJ2xlZnQnIDogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxyXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxyXG4gICAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgICAgbWFyZ2luVG9wOlxyXG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJzQwcHgnIDogWyczMnB4JywgJzMycHgnLCAnNTZweCddLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpKCh7IHRoZW1lIH0pID0+XHJcbiAgdGhlbWUud2l0aE1lZGlhKHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5wdXRXaW5kb3cgPSAoe1xyXG4gIGlzT3BlbixcclxuICBwb3NpdGlvbixcclxuICB0aXRsZSxcclxuICB3aXRoSGVhZGVyLFxyXG4gIGhlYWRlckxvZ28sXHJcbiAgYm9keUltZyxcclxuICBpbmZvcm1hdGlvbixcclxuICBjb25maXJtTGFiZWwsXHJcbiAgY29uZmlybUNvbG9yLFxyXG4gIG9uQ29uZmlybSxcclxuICBkaXNtaXNzTGFiZWwsXHJcbiAgc2hvdWxkQ2xvc2VPbkVzYyxcclxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxyXG4gIG9uRGlzbWlzcyxcclxuICB0aGVtZU1vZGUsXHJcbiAgaW5wdXRUeXBlLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIHJlcXVpcmVkID0gZmFsc2UsXHJcbiAgaW5wdXRMYWJlbCxcclxuICB2YWxpZGF0aW9uTWVzc2FnZSxcclxuICBwb3J0YWxDbGFzcyA9ICdwb3J0YWwnLFxyXG59OiBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGlzT3Blbik7XHJcblxyXG4gIHVzZUVzY2FwZUtleSgoKSA9PiBzaG91bGRDbG9zZU9uRXNjICYmIHNldFNob3dNb2RhbChmYWxzZSkpO1xyXG5cclxuICBjb25zdCBnZXRSZWdleEJ5SW5wdXRUeXBlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcclxuICAgICAgY2FzZSBJbnB1dFZhbGlkYXRpb25UeXBlLnBhc3N3b3JkOlxyXG4gICAgICAgIHJldHVybiAvXlthLXpBLVowLTldezEyfS87XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIC9eW2EtekEtWjAtOV17MTJ9LztcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJlZ2V4TWF0Y2hlZCA9ICh2YWwpID0+ICEhdmFsICYmIGdldFJlZ2V4QnlJbnB1dFR5cGUoKS50ZXN0KHZhbCk7XHJcblxyXG4gIGNvbnN0IG1vZGFsU3R5bGUgPSB7XHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRTExMjZBMCcsXHJcbiAgICAgIHpJbmRleDogMTUsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDpcclxuICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcclxuICAgICAgICA/IHtcclxuICAgICAgICAgICAgLi4udG9wTW9kYWxTdHlsZXMsXHJcbiAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIC4uLmNlbnRlck1vZGFsU3R5bGVzLFxyXG4gICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFbnRlcktleURvd24gPSAoZSkgPT4ge1xyXG4gICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIGlmICh2YWwgJiYgIWZvcm1FcnJvcikge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBvbkNvbmZpcm0odmFsKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHJldHVybjtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcclxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2sgJiYgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGxldCBwYXNzVmFsID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgISFwYXNzVmFsICYmIHJlZ2V4TWF0Y2hlZChwYXNzVmFsKVxyXG4gICAgICA/IHNldEZvcm1FcnJvcihudWxsKVxyXG4gICAgICA6IHNldEZvcm1FcnJvcihgJHt2YWxpZGF0aW9uTWVzc2FnZX1gKTtcclxuXHJcbiAgICBzZXRWYWx1ZShwYXNzVmFsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Nob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgPFJlYWN0TW9kYWxcclxuICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgICAgc3R5bGU9e21vZGFsU3R5bGV9XHJcbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxyXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY1xyXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xyXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TW9kYWxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgIHt3aXRoSGVhZGVyICYmIChcclxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcclxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxyXG4gICAgICAgICAgICAgICAgaGVhZGVyTG9nbz17aGVhZGVyTG9nb31cclxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtib2R5SW1nICYmIDxJbWFnZVdyYXBwZXIganVzdGlmeT1cImNlbnRlclwiPntib2R5SW1nfTwvSW1hZ2VXcmFwcGVyPn1cclxuICAgICAgICAgICAgPFN0eWxlZENhcHRpb24gcG9zaXRpb249e3Bvc2l0aW9ufT5cclxuICAgICAgICAgICAgICA8U3R5bGVkQ2FwdGlvblRleHQgc2l6ZT17MX0gc2NhbGU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvblRleHQ+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvbj5cclxuICAgICAgICAgICAgPEZsZXhSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRJbmZvcm1hdGlvblRleHQgcG9zaXRpb249e3Bvc2l0aW9ufSBzaXplPXszfSBzY2FsZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmZvcm1hdGlvblRleHQ+XHJcbiAgICAgICAgICAgIDwvRmxleFJvdz5cclxuICAgICAgICAgICAgPEZsZXhSb3c+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5RG93bn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXs8Qm9keVRleHQgc2l6ZT17Mn0+e2lucHV0TGFiZWx9PC9Cb2R5VGV4dD59XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBlcnJvcj17ISFmb3JtRXJyb3J9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVHlwZT17aW5wdXRUeXBlfVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHQ9e2Zvcm1FcnJvcn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0ZsZXhSb3c+XHJcbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxyXG4gICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3NlY29uZGFyeUJsdWUnfSBvbkNsaWNrPXtvbkRpc21pc3N9PlxyXG4gICAgICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlybUNvbG9yID09PSAncmVkJyA/ICdwcmltYXJ5UmVkJyA6ICdwcmltYXJ5Qmx1ZSd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0odmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlID8gISFmb3JtRXJyb3IgOiB0cnVlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjb25maXJtTGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cclxuICAgICAgICAgIDwvTW9kYWxDb250YWluZXI+XHJcbiAgICAgICAgPC9SZWFjdE1vZGFsPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnB1dFdpbmRvdztcclxuIl19