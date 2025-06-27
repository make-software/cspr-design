"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputWindow = exports.DismissOrigin = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var button_1 = tslib_1.__importDefault(require("../button/button"));
var input_1 = tslib_1.__importDefault(require("../input/input"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var react_modal_1 = tslib_1.__importDefault(require("react-modal"));
var use_click_away_1 = require("../../hooks/use-click-away");
var use_escape_key_1 = require("../../hooks/use-escape-key");
var modal_header_1 = tslib_1.__importDefault(require("../modal-header/modal-header"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var confirmation_window_1 = require("../confirmation-window/confirmation-window");
var checkbox_1 = tslib_1.__importStar(require("../checkbox/checkbox"));
var warning_message_1 = tslib_1.__importDefault(require("../warning-message/warning-message"));
var DismissOrigin;
(function (DismissOrigin) {
    DismissOrigin[DismissOrigin["HeaderCloseButton"] = 0] = "HeaderCloseButton";
    DismissOrigin[DismissOrigin["DismissButton"] = 1] = "DismissButton";
    DismissOrigin[DismissOrigin["Overlay"] = 2] = "Overlay";
    DismissOrigin[DismissOrigin["ESC"] = 3] = "ESC";
})(DismissOrigin = exports.DismissOrigin || (exports.DismissOrigin = {}));
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
            : ['300px', '440px', '496px'],
        background: theme.styleguideColors.backgroundPrimary,
        borderColor: theme.styleguideColors.backgroundPrimary,
    });
});
var ImageWrapper = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        margin: '15px 0 24px 0',
    });
});
var StyledCaption = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        textAlign: 'left',
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
    var theme = _a.theme, margin = _a.margin;
    return theme.withMedia({
        width: '100%',
        margin: margin,
        ':focus': {
            outline: 'none',
        },
    });
});
var CheckBoxContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, position = _a.position;
    return theme.withMedia({
        margin: position === confirmation_window_1.ModalPosition.TopRight
            ? '40px 0 -20px 0'
            : ['40px 0 -20px 0', '40px 0 -20px 0', '72px 0 -40px 0'],
    });
});
var handleTheme = function (theme, position) {
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
    return modalStyle;
};
var UserInputWindow = function (_a) {
    var isOpen = _a.isOpen, position = _a.position, title = _a.title, withHeader = _a.withHeader, headerLogo = _a.headerLogo, bodyImg = _a.bodyImg, information = _a.information, confirmLabel = _a.confirmLabel, confirmDisabled = _a.confirmDisabled, confirmColor = _a.confirmColor, onConfirm = _a.onConfirm, dismissLabel = _a.dismissLabel, dismissDisabled = _a.dismissDisabled, shouldCloseOnEsc = _a.shouldCloseOnEsc, shouldCloseOnOverlayClick = _a.shouldCloseOnOverlayClick, onDismiss = _a.onDismiss, themeMode = _a.themeMode, inputType = _a.inputType, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? false : _b, inputLabel = _a.inputLabel, checkboxLabel = _a.checkboxLabel, validationSetting = _a.validationSetting, repeatInput = _a.repeatInput, warningMessage = _a.warningMessage, informationOnlyMode = _a.informationOnlyMode, isMandatoryCheckBox = _a.isMandatoryCheckBox, hideXButton = _a.hideXButton, resetForm = _a.resetForm, _c = _a.portalClass, portalClass = _c === void 0 ? 'portal' : _c;
    var theme = (0, styled_components_1.useTheme)();
    var _d = (0, react_1.useState)(''), value = _d[0], setValue = _d[1];
    var _e = (0, react_1.useState)(''), repeatValue = _e[0], setRepeatValue = _e[1];
    var _f = (0, react_1.useState)(false), isChecked = _f[0], setIsChecked = _f[1];
    var _g = (0, react_1.useState)(null), formError = _g[0], setFormError = _g[1];
    var _h = (0, react_1.useState)(null), repeatInputError = _h[0], setRepeatInputError = _h[1];
    var _j = (0, react_1.useState)(isOpen), showModal = _j[0], setShowModal = _j[1];
    (0, use_escape_key_1.useEscapeKey)(function () {
        if (shouldCloseOnEsc) {
            setShowModal(false);
            onDismiss && onDismiss(DismissOrigin.ESC);
        }
    });
    (0, react_1.useEffect)(function () {
        resetForm && setValue('');
    }, [resetForm]);
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            if (shouldCloseOnOverlayClick) {
                setShowModal(false);
                onDismiss && onDismiss(DismissOrigin.Overlay);
            }
        },
    }).ref;
    var regexMatched = function (val) {
        return !!val && (validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.regexpPattern.test(val));
    };
    var isValueEqual = function (firstVal, secondVal) {
        return firstVal && secondVal && firstVal === secondVal;
    };
    var handleEnterKeyDown = function (e) {
        var val = e.target.value;
        if (val && !formError) {
            if (e.key === 'Enter') {
                onConfirm(val, isChecked);
            }
        }
        else
            return;
    };
    var handleOnSubmit = function () {
        onConfirm(value, isChecked);
    };
    var handleInputChange = function (e) {
        var passVal = e.target.value;
        repeatInput && repeatValue && setRepeatValue('');
        if ((validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.regexpPattern) &&
            (validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.validationMessage)) {
            !!passVal && regexMatched(passVal)
                ? setFormError(null)
                : setFormError("".concat(validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.validationMessage));
        }
        setValue(passVal);
    };
    var handleRepeatInputChange = function (e) {
        var repeatVal = e.target.value;
        if (repeatInput === null || repeatInput === void 0 ? void 0 : repeatInput.validationMessage) {
            !!repeatVal && isValueEqual(value, repeatVal)
                ? setRepeatInputError(null)
                : setRepeatInputError("".concat(repeatInput === null || repeatInput === void 0 ? void 0 : repeatInput.validationMessage));
        }
        setRepeatValue(repeatVal);
    };
    var handleDisableButton = function () {
        if (confirmDisabled)
            return true;
        if (isMandatoryCheckBox && !isChecked)
            return true;
        if (informationOnlyMode)
            return false;
        if (repeatInput) {
            return repeatValue ? !!repeatInputError : true;
        }
        else {
            return value ? !!formError : true;
        }
    };
    var handleCheckBox = function () {
        setIsChecked(!isChecked);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: handleTheme(theme, position), shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass, role: "dialog", "aria-modal": "true" }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onClose: hideXButton
                            ? undefined
                            : function () {
                                return onDismiss && onDismiss(DismissOrigin.HeaderCloseButton);
                            } })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, { children: bodyImg }), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "left" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), !informationOnlyMode && ((0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, margin: '16px 0', error: !!formError, validationType: inputType, validationText: formError }) })), !informationOnlyMode && repeatInput && ((0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: repeatValue, onChange: handleRepeatInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: repeatInput === null || repeatInput === void 0 ? void 0 : repeatInput.label })), placeholder: repeatInput === null || repeatInput === void 0 ? void 0 : repeatInput.placeholder, error: !!repeatInputError, validationType: inputType, validationText: repeatInputError }) })), warningMessage && ((0, jsx_runtime_1.jsx)(warning_message_1.default, { title: warningMessage.title, message: warningMessage.message, margin: warningMessage.margin, iconSrc: warningMessage.iconSrc })), checkboxLabel && ((0, jsx_runtime_1.jsx)(CheckBoxContainer, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.default, { checked: isChecked, label: checkboxLabel, onChange: handleCheckBox, checkboxFontSize: checkbox_1.CheckboxFontSize.small }) }))), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: function () {
                                    return onDismiss && onDismiss(DismissOrigin.DismissButton);
                                }, disabled: !!dismissDisabled }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: handleOnSubmit, disabled: handleDisableButton() }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQW1EO0FBQ25ELDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0QyxpRUFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBQ3BELHVFQUFrRTtBQUNsRSwrRkFFNEM7QUE4QzVDLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN2QiwyRUFBaUIsQ0FBQTtJQUNqQixtRUFBYSxDQUFBO0lBQ2IsdURBQU8sQ0FBQTtJQUNQLCtDQUFHLENBQUE7QUFDTCxDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEI7QUFFRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFN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QyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFDdkIsUUFBUSxFQUFFLG1CQUFtQixFQUFFLGdCQUU5QixZQUFZLElBQ04sS0FDUSxLQUNKLElBQ04sQ0FDZCxHQUNBLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQS9PVyxRQUFBLGVBQWUsbUJBK08xQjtBQUVGLGtCQUFlLHVCQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IElucHV0LCB7IElucHV0VmFsaWRhdGlvblR5cGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5pbXBvcnQgeyB1c2VFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZXNjYXBlLWtleSc7XG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSAnLi4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcbmltcG9ydCB7XG4gIE1vZGFsUG9zaXRpb24sXG4gIE1vZGFsUG9zaXRpb25Qcm9wcyxcbn0gZnJvbSAnLi4vY29uZmlybWF0aW9uLXdpbmRvdy9jb25maXJtYXRpb24td2luZG93JztcbmltcG9ydCBDaGVja2JveCwgeyBDaGVja2JveEZvbnRTaXplIH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3gnO1xuaW1wb3J0IFdhcm5pbmdNZXNzYWdlLCB7XG4gIFdhcm5pbmdNZXNzYWdlUHJvcHMsXG59IGZyb20gJy4uL3dhcm5pbmctbWVzc2FnZS93YXJuaW5nLW1lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25Qcm9wcyB7XG4gIHZhbGlkYXRpb25NZXNzYWdlOiBzdHJpbmc7XG4gIHJlZ2V4cFBhdHRlcm46IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBlYXRJbnB1dFByb3BzIHtcbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJbnB1dFdpbmRvd1NjZW5lUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGJvZHlJbWc/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHBvc2l0aW9uOiBNb2RhbFBvc2l0aW9uO1xuICB0aXRsZTogc3RyaW5nO1xuICB3aXRoSGVhZGVyPzogYm9vbGVhbjtcbiAgcmVzZXRGb3JtPzogYm9vbGVhbjtcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgaW5mb3JtYXRpb24/OiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmc7XG4gIHJlcGVhdElucHV0PzogUmVwZWF0SW5wdXRQcm9wcztcbiAgd2FybmluZ01lc3NhZ2U/OiBXYXJuaW5nTWVzc2FnZVByb3BzO1xuICBpbmZvcm1hdGlvbk9ubHlNb2RlPzogYm9vbGVhbjtcbiAgaGlkZVhCdXR0b24/OiBib29sZWFuO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgY29uZmlybURpc2FibGVkPzogYm9vbGVhbjtcbiAgb25Db25maXJtOiAodmFsdWU6IHN0cmluZywgaXNDaGVja2VkPzogYm9vbGVhbikgPT4gdm9pZDtcbiAgY29uZmlybUNvbG9yPzogc3RyaW5nO1xuICBkaXNtaXNzTGFiZWw/OiBzdHJpbmc7XG4gIGRpc21pc3NEaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uRGlzbWlzcz86IChvcmlnaW46IERpc21pc3NPcmlnaW4pID0+IHZvaWQ7XG4gIGlzTWFuZGF0b3J5Q2hlY2tCb3g/OiBib29sZWFuO1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBzaG91bGRDbG9zZU9uRXNjPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaz86IGJvb2xlYW47XG4gIHRoZW1lTW9kZT86IFRoZW1lTW9kZVR5cGU7XG4gIGNoZWNrYm94TGFiZWw/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHZhbGlkYXRpb25TZXR0aW5nPzogVmFsaWRhdGlvblByb3BzO1xuICBwb3J0YWxDbGFzcz86IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gRGlzbWlzc09yaWdpbiB7XG4gIEhlYWRlckNsb3NlQnV0dG9uLFxuICBEaXNtaXNzQnV0dG9uLFxuICBPdmVybGF5LFxuICBFU0MsXG59XG5cbmNvbnN0IGNlbnRlck1vZGFsU3R5bGVzID0ge1xuICBsZWZ0OiAnNTAlJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzMycHggMjRweCAyNHB4IDI0cHgnLFxuICB0b3A6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxufTtcblxuY29uc3QgdG9wTW9kYWxTdHlsZXMgPSB7XG4gIHRvcDogJzQwcHgnLFxuICBsZWZ0OiAnYXV0bycsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICcxNnB4IDI0cHggMjRweCAyNHB4Jyxcbn07XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkKEZsZXhDb2x1bW4pPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB3aWR0aDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICA/IFsnMzAwcHgnLCAnMzUwcHgnLCAnMzUwcHgnXVxuICAgICAgICAgIDogWyczMDBweCcsICc0NDBweCcsICc0OTZweCddLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW46ICcxNXB4IDAgMjRweCAwJyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb24gPSBzdHlsZWQuZGl2PE1vZGFsUG9zaXRpb25Qcm9wcz4oKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyNHB4J10sXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBCdXR0b25zQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW5Ub3A6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0ID8gJzQwcHgnIDogWyczMnB4JywgJzMycHgnLCAnNTZweCddLFxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93JywgJ3JvdyddLFxuICAgIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZChJbnB1dCk8eyBtYXJnaW4/OiBzdHJpbmcgfT4oKHsgdGhlbWUsIG1hcmdpbiB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgJzpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgQ2hlY2tCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2PE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW46XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgICAgPyAnNDBweCAwIC0yMHB4IDAnXG4gICAgICAgICAgOiBbJzQwcHggMCAtMjBweCAwJywgJzQwcHggMCAtMjBweCAwJywgJzcycHggMCAtNDBweCAwJ10sXG4gICAgfSlcbik7XG5cbmNvbnN0IGhhbmRsZVRoZW1lID0gKHRoZW1lLCBwb3NpdGlvbikgPT4ge1xuICBjb25zdCBtb2RhbFN0eWxlID0ge1xuICAgIG92ZXJsYXk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kT3ZlcmxheSxcbiAgICAgIHpJbmRleDogMTUsXG4gICAgfSxcbiAgICBjb250ZW50OlxuICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi50b3BNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIC4uLmNlbnRlck1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICB9O1xuXG4gIHJldHVybiBtb2RhbFN0eWxlO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbnB1dFdpbmRvdyA9ICh7XG4gIGlzT3BlbixcbiAgcG9zaXRpb24sXG4gIHRpdGxlLFxuICB3aXRoSGVhZGVyLFxuICBoZWFkZXJMb2dvLFxuICBib2R5SW1nLFxuICBpbmZvcm1hdGlvbixcbiAgY29uZmlybUxhYmVsLFxuICBjb25maXJtRGlzYWJsZWQsXG4gIGNvbmZpcm1Db2xvcixcbiAgb25Db25maXJtLFxuICBkaXNtaXNzTGFiZWwsXG4gIGRpc21pc3NEaXNhYmxlZCxcbiAgc2hvdWxkQ2xvc2VPbkVzYyxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayxcbiAgb25EaXNtaXNzLFxuICB0aGVtZU1vZGUsXG4gIGlucHV0VHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHJlcXVpcmVkID0gZmFsc2UsXG4gIGlucHV0TGFiZWwsXG4gIGNoZWNrYm94TGFiZWwsXG4gIHZhbGlkYXRpb25TZXR0aW5nLFxuICByZXBlYXRJbnB1dCxcbiAgd2FybmluZ01lc3NhZ2UsXG4gIGluZm9ybWF0aW9uT25seU1vZGUsXG4gIGlzTWFuZGF0b3J5Q2hlY2tCb3gsXG4gIGhpZGVYQnV0dG9uLFxuICByZXNldEZvcm0sXG4gIHBvcnRhbENsYXNzID0gJ3BvcnRhbCcsXG59OiBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXBlYXRWYWx1ZSwgc2V0UmVwZWF0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyZXBlYXRJbnB1dEVycm9yLCBzZXRSZXBlYXRJbnB1dEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oaXNPcGVuKTtcblxuICB1c2VFc2NhcGVLZXkoKCkgPT4ge1xuICAgIGlmIChzaG91bGRDbG9zZU9uRXNjKSB7XG4gICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgb25EaXNtaXNzICYmIG9uRGlzbWlzcyhEaXNtaXNzT3JpZ2luLkVTQyk7XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlc2V0Rm9ybSAmJiBzZXRWYWx1ZSgnJyk7XG4gIH0sIFtyZXNldEZvcm1dKTtcblxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcbiAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgICAgb25EaXNtaXNzICYmIG9uRGlzbWlzcyhEaXNtaXNzT3JpZ2luLk92ZXJsYXkpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlZ2V4TWF0Y2hlZCA9ICh2YWwpID0+XG4gICAgISF2YWwgJiYgdmFsaWRhdGlvblNldHRpbmc/LnJlZ2V4cFBhdHRlcm4udGVzdCh2YWwpO1xuXG4gIGNvbnN0IGlzVmFsdWVFcXVhbCA9IChmaXJzdFZhbCwgc2Vjb25kVmFsKSA9PlxuICAgIGZpcnN0VmFsICYmIHNlY29uZFZhbCAmJiBmaXJzdFZhbCA9PT0gc2Vjb25kVmFsO1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5RG93biA9IChlKSA9PiB7XG4gICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbCAmJiAhZm9ybUVycm9yKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgb25Db25maXJtKHZhbCwgaXNDaGVja2VkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgcmV0dXJuO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKCkgPT4ge1xuICAgIG9uQ29uZmlybSh2YWx1ZSwgaXNDaGVja2VkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHBhc3NWYWwgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIHJlcGVhdElucHV0ICYmIHJlcGVhdFZhbHVlICYmIHNldFJlcGVhdFZhbHVlKCcnKTtcblxuICAgIGlmIChcbiAgICAgIHZhbGlkYXRpb25TZXR0aW5nPy5yZWdleHBQYXR0ZXJuICYmXG4gICAgICB2YWxpZGF0aW9uU2V0dGluZz8udmFsaWRhdGlvbk1lc3NhZ2VcbiAgICApIHtcbiAgICAgICEhcGFzc1ZhbCAmJiByZWdleE1hdGNoZWQocGFzc1ZhbClcbiAgICAgICAgPyBzZXRGb3JtRXJyb3IobnVsbClcbiAgICAgICAgOiBzZXRGb3JtRXJyb3IoYCR7dmFsaWRhdGlvblNldHRpbmc/LnZhbGlkYXRpb25NZXNzYWdlfWApO1xuICAgIH1cbiAgICBzZXRWYWx1ZShwYXNzVmFsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXBlYXRJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHJlcGVhdFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHJlcGVhdElucHV0Py52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgISFyZXBlYXRWYWwgJiYgaXNWYWx1ZUVxdWFsKHZhbHVlLCByZXBlYXRWYWwpXG4gICAgICAgID8gc2V0UmVwZWF0SW5wdXRFcnJvcihudWxsKVxuICAgICAgICA6IHNldFJlcGVhdElucHV0RXJyb3IoYCR7cmVwZWF0SW5wdXQ/LnZhbGlkYXRpb25NZXNzYWdlfWApO1xuICAgIH1cbiAgICBzZXRSZXBlYXRWYWx1ZShyZXBlYXRWYWwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURpc2FibGVCdXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKGNvbmZpcm1EaXNhYmxlZCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoaXNNYW5kYXRvcnlDaGVja0JveCAmJiAhaXNDaGVja2VkKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChpbmZvcm1hdGlvbk9ubHlNb2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocmVwZWF0SW5wdXQpIHtcbiAgICAgIHJldHVybiByZXBlYXRWYWx1ZSA/ICEhcmVwZWF0SW5wdXRFcnJvciA6IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSA/ICEhZm9ybUVycm9yIDogdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tCb3ggPSAoKSA9PiB7XG4gICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8UmVhY3RNb2RhbFxuICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxuICAgICAgICAgIHN0eWxlPXtoYW5kbGVUaGVtZSh0aGVtZSwgcG9zaXRpb24pfVxuICAgICAgICAgIHNob3VsZENsb3NlT25Fc2NcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cbiAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8TW9kYWxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByZWY9e3JlZn0+XG4gICAgICAgICAgICB7d2l0aEhlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxNb2RhbEhlYWRlclxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxuICAgICAgICAgICAgICAgIGhlYWRlckxvZ289e2hlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgb25DbG9zZT17XG4gICAgICAgICAgICAgICAgICBoaWRlWEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3MgJiYgb25EaXNtaXNzKERpc21pc3NPcmlnaW4uSGVhZGVyQ2xvc2VCdXR0b24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtib2R5SW1nICYmIDxJbWFnZVdyYXBwZXI+e2JvZHlJbWd9PC9JbWFnZVdyYXBwZXI+fVxuICAgICAgICAgICAgPFN0eWxlZENhcHRpb24gcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgPFN0eWxlZENhcHRpb25UZXh0IHNpemU9ezF9IHNjYWxlPVwibGdcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvblRleHQ+XG4gICAgICAgICAgICA8L1N0eWxlZENhcHRpb24+XG4gICAgICAgICAgICA8RmxleFJvdyBqdXN0aWZ5PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8U3R5bGVkSW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICB7IWluZm9ybWF0aW9uT25seU1vZGUgJiYgKFxuICAgICAgICAgICAgICA8RmxleFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgbGFiZWw9ezxCb2R5VGV4dCBzaXplPXsyfT57aW5wdXRMYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgIG1hcmdpbj17JzE2cHggMCd9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ISFmb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVHlwZT17aW5wdXRUeXBlfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHQ9e2Zvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFpbmZvcm1hdGlvbk9ubHlNb2RlICYmIHJlcGVhdElucHV0ICYmIChcbiAgICAgICAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVwZWF0VmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmVwZWF0SW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8Qm9keVRleHQgc2l6ZT17Mn0+e3JlcGVhdElucHV0Py5sYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtyZXBlYXRJbnB1dD8ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ISFyZXBlYXRJbnB1dEVycm9yfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblR5cGU9e2lucHV0VHlwZX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0PXtyZXBlYXRJbnB1dEVycm9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7d2FybmluZ01lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICA8V2FybmluZ01lc3NhZ2VcbiAgICAgICAgICAgICAgICB0aXRsZT17d2FybmluZ01lc3NhZ2UudGl0bGV9XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17d2FybmluZ01lc3NhZ2UubWVzc2FnZX1cbiAgICAgICAgICAgICAgICBtYXJnaW49e3dhcm5pbmdNZXNzYWdlLm1hcmdpbn1cbiAgICAgICAgICAgICAgICBpY29uU3JjPXt3YXJuaW5nTWVzc2FnZS5pY29uU3JjfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjaGVja2JveExhYmVsICYmIChcbiAgICAgICAgICAgICAgPENoZWNrQm94Q29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17Y2hlY2tib3hMYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrYm94Rm9udFNpemU9e0NoZWNrYm94Rm9udFNpemUuc21hbGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DaGVja0JveENvbnRhaW5lcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5Qmx1ZSd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3MgJiYgb25EaXNtaXNzKERpc21pc3NPcmlnaW4uRGlzbWlzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIWRpc21pc3NEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbmZpcm1Db2xvciA9PT0gJ3JlZCcgPyAncHJpbWFyeVJlZCcgOiAncHJpbWFyeUJsdWUnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uU3VibWl0fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtoYW5kbGVEaXNhYmxlQnV0dG9uKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0V2luZG93O1xuIl19