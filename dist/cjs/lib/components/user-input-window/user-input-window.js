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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: handleTheme(theme, position), shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onClose: hideXButton
                            ? undefined
                            : function () {
                                return onDismiss && onDismiss(DismissOrigin.HeaderCloseButton);
                            } })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, { children: bodyImg }), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "left" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), !informationOnlyMode && ((0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, margin: '16px 0', error: !!formError, validationType: inputType, validationText: formError }) })), !informationOnlyMode && repeatInput && ((0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: repeatValue, onChange: handleRepeatInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: repeatInput === null || repeatInput === void 0 ? void 0 : repeatInput.label })), placeholder: repeatInput === null || repeatInput === void 0 ? void 0 : repeatInput.placeholder, error: !!repeatInputError, validationType: inputType, validationText: repeatInputError }) })), warningMessage && ((0, jsx_runtime_1.jsx)(warning_message_1.default, { title: warningMessage.title, message: warningMessage.message, margin: warningMessage.margin, iconSrc: warningMessage.iconSrc })), checkboxLabel && ((0, jsx_runtime_1.jsx)(CheckBoxContainer, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.default, { checked: isChecked, label: checkboxLabel, onChange: handleCheckBox, checkboxFontSize: checkbox_1.CheckboxFontSize.small }) }))), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: function () {
                                    return onDismiss && onDismiss(DismissOrigin.DismissButton);
                                }, disabled: !!dismissDisabled }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: handleOnSubmit, disabled: handleDisableButton() }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQW1EO0FBQ25ELDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0QyxpRUFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBQ3BELHVFQUFrRTtBQUNsRSwrRkFFNEM7QUE4QzVDLElBQVksYUFLWDtBQUxELFdBQVksYUFBYTtJQUN2QiwyRUFBaUIsQ0FBQTtJQUNqQixtRUFBYSxDQUFBO0lBQ2IsdURBQU8sQ0FBQTtJQUNQLCtDQUFHLENBQUE7QUFDTCxDQUFDLEVBTFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFLeEI7QUFFRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFN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LE9BQU8sRUFBRSxjQUFjLEVBQ3ZCLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxnQkFFOUIsWUFBWSxJQUNOLEtBQ1EsS0FDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUE3T1csUUFBQSxlQUFlLG1CQTZPMUI7QUFFRixrQkFBZSx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBJbnB1dCwgeyBJbnB1dFZhbGlkYXRpb25UeXBlIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xuaW1wb3J0IHsgdXNlRXNjYXBlS2V5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWVzY2FwZS1rZXknO1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4uL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXInO1xuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IHsgVGhlbWVNb2RlVHlwZSB9IGZyb20gJy4uL25hdmlnYXRpb24vY3Nwci1wcm9kdWN0cy1tZW51L3Byb2R1Y3RzLW1lbnUtaXRlbSc7XG5pbXBvcnQge1xuICBNb2RhbFBvc2l0aW9uLFxuICBNb2RhbFBvc2l0aW9uUHJvcHMsXG59IGZyb20gJy4uL2NvbmZpcm1hdGlvbi13aW5kb3cvY29uZmlybWF0aW9uLXdpbmRvdyc7XG5pbXBvcnQgQ2hlY2tib3gsIHsgQ2hlY2tib3hGb250U2l6ZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94JztcbmltcG9ydCBXYXJuaW5nTWVzc2FnZSwge1xuICBXYXJuaW5nTWVzc2FnZVByb3BzLFxufSBmcm9tICcuLi93YXJuaW5nLW1lc3NhZ2Uvd2FybmluZy1tZXNzYWdlJztcblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uUHJvcHMge1xuICB2YWxpZGF0aW9uTWVzc2FnZTogc3RyaW5nO1xuICByZWdleHBQYXR0ZXJuOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwZWF0SW5wdXRQcm9wcyB7XG4gIHZhbGlkYXRpb25NZXNzYWdlOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBib2R5SW1nPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XG4gIHJlc2V0Rm9ybT86IGJvb2xlYW47XG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGluZm9ybWF0aW9uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xuICByZXBlYXRJbnB1dD86IFJlcGVhdElucHV0UHJvcHM7XG4gIHdhcm5pbmdNZXNzYWdlPzogV2FybmluZ01lc3NhZ2VQcm9wcztcbiAgaW5mb3JtYXRpb25Pbmx5TW9kZT86IGJvb2xlYW47XG4gIGhpZGVYQnV0dG9uPzogYm9vbGVhbjtcbiAgY29uZmlybUxhYmVsOiBzdHJpbmc7XG4gIGNvbmZpcm1EaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ29uZmlybTogKHZhbHVlOiBzdHJpbmcsIGlzQ2hlY2tlZD86IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGNvbmZpcm1Db2xvcj86IHN0cmluZztcbiAgZGlzbWlzc0xhYmVsPzogc3RyaW5nO1xuICBkaXNtaXNzRGlzYWJsZWQ/OiBib29sZWFuO1xuICBvbkRpc21pc3M/OiAob3JpZ2luOiBEaXNtaXNzT3JpZ2luKSA9PiB2b2lkO1xuICBpc01hbmRhdG9yeUNoZWNrQm94PzogYm9vbGVhbjtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlPzogSW5wdXRWYWxpZGF0aW9uVHlwZTtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbkVzYz86IGJvb2xlYW47XG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s/OiBib29sZWFuO1xuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xuICBjaGVja2JveExhYmVsPzogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50O1xuICB2YWxpZGF0aW9uU2V0dGluZz86IFZhbGlkYXRpb25Qcm9wcztcbiAgcG9ydGFsQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIERpc21pc3NPcmlnaW4ge1xuICBIZWFkZXJDbG9zZUJ1dHRvbixcbiAgRGlzbWlzc0J1dHRvbixcbiAgT3ZlcmxheSxcbiAgRVNDLFxufVxuXG5jb25zdCBjZW50ZXJNb2RhbFN0eWxlcyA9IHtcbiAgbGVmdDogJzUwJScsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICczMnB4IDI0cHggMjRweCAyNHB4JyxcbiAgdG9wOiAnNTAlJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbn07XG5cbmNvbnN0IHRvcE1vZGFsU3R5bGVzID0ge1xuICB0b3A6ICc0MHB4JyxcbiAgbGVmdDogJ2F1dG8nLFxuICByaWdodDogJzQwcHgnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMTZweCAyNHB4IDI0cHggMjRweCcsXG59O1xuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZChGbGV4Q29sdW1uKTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgd2lkdGg6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgICAgPyBbJzMwMHB4JywgJzM1MHB4JywgJzM1MHB4J11cbiAgICAgICAgICA6IFsnMzAwcHgnLCAnNDQwcHgnLCAnNDk2cHgnXSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgbWFyZ2luOiAnMTVweCAwIDI0cHggMCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdjxNb2RhbFBvc2l0aW9uUHJvcHM+KCh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvblRleHQgPSBzdHlsZWQoU3VidGl0bGVUZXh0KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGZvbnRXZWlnaHQ6IFs2MDAsIDYwMCwgNzAwXSxcbiAgICBmb250U2l6ZTogWycyMHB4JywgJzI0cHgnLCAnMjRweCddLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5mb3JtYXRpb25UZXh0ID0gc3R5bGVkKEJvZHlUZXh0KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgbWFyZ2luVG9wOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICc0MHB4JyA6IFsnMzJweCcsICczMnB4JywgJzU2cHgnXSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdycsICdyb3cnXSxcbiAgICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpPHsgbWFyZ2luPzogc3RyaW5nIH0+KCh7IHRoZW1lLCBtYXJnaW4gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbjogbWFyZ2luLFxuICAgICc6Zm9jdXMnOiB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IENoZWNrQm94Q29udGFpbmVyID0gc3R5bGVkLmRpdjxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgbWFyZ2luOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICAgID8gJzQwcHggMCAtMjBweCAwJ1xuICAgICAgICAgIDogWyc0MHB4IDAgLTIwcHggMCcsICc0MHB4IDAgLTIwcHggMCcsICc3MnB4IDAgLTQwcHggMCddLFxuICAgIH0pXG4pO1xuXG5jb25zdCBoYW5kbGVUaGVtZSA9ICh0aGVtZSwgcG9zaXRpb24pID0+IHtcbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZE92ZXJsYXksXG4gICAgICB6SW5kZXg6IDE1LFxuICAgIH0sXG4gICAgY29udGVudDpcbiAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4udG9wTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICAuLi5jZW50ZXJNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgfTtcblxuICByZXR1cm4gbW9kYWxTdHlsZTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5wdXRXaW5kb3cgPSAoe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nbyxcbiAgYm9keUltZyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybURpc2FibGVkLFxuICBjb25maXJtQ29sb3IsXG4gIG9uQ29uZmlybSxcbiAgZGlzbWlzc0xhYmVsLFxuICBkaXNtaXNzRGlzYWJsZWQsXG4gIHNob3VsZENsb3NlT25Fc2MsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2ssXG4gIG9uRGlzbWlzcyxcbiAgdGhlbWVNb2RlLFxuICBpbnB1dFR5cGUsXG4gIHBsYWNlaG9sZGVyLFxuICByZXF1aXJlZCA9IGZhbHNlLFxuICBpbnB1dExhYmVsLFxuICBjaGVja2JveExhYmVsLFxuICB2YWxpZGF0aW9uU2V0dGluZyxcbiAgcmVwZWF0SW5wdXQsXG4gIHdhcm5pbmdNZXNzYWdlLFxuICBpbmZvcm1hdGlvbk9ubHlNb2RlLFxuICBpc01hbmRhdG9yeUNoZWNrQm94LFxuICBoaWRlWEJ1dHRvbixcbiAgcmVzZXRGb3JtLFxuICBwb3J0YWxDbGFzcyA9ICdwb3J0YWwnLFxufTogVXNlcklucHV0V2luZG93U2NlbmVQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVwZWF0VmFsdWUsIHNldFJlcGVhdFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Zvcm1FcnJvciwgc2V0Rm9ybUVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcmVwZWF0SW5wdXRFcnJvciwgc2V0UmVwZWF0SW5wdXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGlzT3Blbik7XG5cbiAgdXNlRXNjYXBlS2V5KCgpID0+IHtcbiAgICBpZiAoc2hvdWxkQ2xvc2VPbkVzYykge1xuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICAgIG9uRGlzbWlzcyAmJiBvbkRpc21pc3MoRGlzbWlzc09yaWdpbi5FU0MpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXNldEZvcm0gJiYgc2V0VmFsdWUoJycpO1xuICB9LCBbcmVzZXRGb3JtXSk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrKSB7XG4gICAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgICAgIG9uRGlzbWlzcyAmJiBvbkRpc21pc3MoRGlzbWlzc09yaWdpbi5PdmVybGF5KTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICBjb25zdCByZWdleE1hdGNoZWQgPSAodmFsKSA9PlxuICAgICEhdmFsICYmIHZhbGlkYXRpb25TZXR0aW5nPy5yZWdleHBQYXR0ZXJuLnRlc3QodmFsKTtcblxuICBjb25zdCBpc1ZhbHVlRXF1YWwgPSAoZmlyc3RWYWwsIHNlY29uZFZhbCkgPT5cbiAgICBmaXJzdFZhbCAmJiBzZWNvbmRWYWwgJiYgZmlyc3RWYWwgPT09IHNlY29uZFZhbDtcblxuICBjb25zdCBoYW5kbGVFbnRlcktleURvd24gPSAoZSkgPT4ge1xuICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh2YWwgJiYgIWZvcm1FcnJvcikge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIG9uQ29uZmlybSh2YWwsIGlzQ2hlY2tlZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHJldHVybjtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcbiAgICBvbkNvbmZpcm0odmFsdWUsIGlzQ2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBwYXNzVmFsID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICByZXBlYXRJbnB1dCAmJiByZXBlYXRWYWx1ZSAmJiBzZXRSZXBlYXRWYWx1ZSgnJyk7XG5cbiAgICBpZiAoXG4gICAgICB2YWxpZGF0aW9uU2V0dGluZz8ucmVnZXhwUGF0dGVybiAmJlxuICAgICAgdmFsaWRhdGlvblNldHRpbmc/LnZhbGlkYXRpb25NZXNzYWdlXG4gICAgKSB7XG4gICAgICAhIXBhc3NWYWwgJiYgcmVnZXhNYXRjaGVkKHBhc3NWYWwpXG4gICAgICAgID8gc2V0Rm9ybUVycm9yKG51bGwpXG4gICAgICAgIDogc2V0Rm9ybUVycm9yKGAke3ZhbGlkYXRpb25TZXR0aW5nPy52YWxpZGF0aW9uTWVzc2FnZX1gKTtcbiAgICB9XG4gICAgc2V0VmFsdWUocGFzc1ZhbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVwZWF0SW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCByZXBlYXRWYWwgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIGlmIChyZXBlYXRJbnB1dD8udmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICEhcmVwZWF0VmFsICYmIGlzVmFsdWVFcXVhbCh2YWx1ZSwgcmVwZWF0VmFsKVxuICAgICAgICA/IHNldFJlcGVhdElucHV0RXJyb3IobnVsbClcbiAgICAgICAgOiBzZXRSZXBlYXRJbnB1dEVycm9yKGAke3JlcGVhdElucHV0Py52YWxpZGF0aW9uTWVzc2FnZX1gKTtcbiAgICB9XG4gICAgc2V0UmVwZWF0VmFsdWUocmVwZWF0VmFsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEaXNhYmxlQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmIChjb25maXJtRGlzYWJsZWQpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKGlzTWFuZGF0b3J5Q2hlY2tCb3ggJiYgIWlzQ2hlY2tlZCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoaW5mb3JtYXRpb25Pbmx5TW9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHJlcGVhdElucHV0KSB7XG4gICAgICByZXR1cm4gcmVwZWF0VmFsdWUgPyAhIXJlcGVhdElucHV0RXJyb3IgOiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWUgPyAhIWZvcm1FcnJvciA6IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrQm94ID0gKCkgPT4ge1xuICAgIHNldElzQ2hlY2tlZCghaXNDaGVja2VkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICBzdHlsZT17aGFuZGxlVGhlbWUodGhlbWUsIHBvc2l0aW9uKX1cbiAgICAgICAgICBzaG91bGRDbG9zZU9uRXNjXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xuICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17cG9ydGFsQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICA8TW9kYWxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByZWY9e3JlZn0+XG4gICAgICAgICAgICB7d2l0aEhlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxNb2RhbEhlYWRlclxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxuICAgICAgICAgICAgICAgIGhlYWRlckxvZ289e2hlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgb25DbG9zZT17XG4gICAgICAgICAgICAgICAgICBoaWRlWEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6ICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3MgJiYgb25EaXNtaXNzKERpc21pc3NPcmlnaW4uSGVhZGVyQ2xvc2VCdXR0b24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtib2R5SW1nICYmIDxJbWFnZVdyYXBwZXI+e2JvZHlJbWd9PC9JbWFnZVdyYXBwZXI+fVxuICAgICAgICAgICAgPFN0eWxlZENhcHRpb24gcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgPFN0eWxlZENhcHRpb25UZXh0IHNpemU9ezF9IHNjYWxlPVwibGdcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvblRleHQ+XG4gICAgICAgICAgICA8L1N0eWxlZENhcHRpb24+XG4gICAgICAgICAgICA8RmxleFJvdyBqdXN0aWZ5PVwibGVmdFwiPlxuICAgICAgICAgICAgICA8U3R5bGVkSW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICB7IWluZm9ybWF0aW9uT25seU1vZGUgJiYgKFxuICAgICAgICAgICAgICA8RmxleFJvdz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkSW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgbGFiZWw9ezxCb2R5VGV4dCBzaXplPXsyfT57aW5wdXRMYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgIG1hcmdpbj17JzE2cHggMCd9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ISFmb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVHlwZT17aW5wdXRUeXBlfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHQ9e2Zvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFpbmZvcm1hdGlvbk9ubHlNb2RlICYmIHJlcGVhdElucHV0ICYmIChcbiAgICAgICAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVwZWF0VmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmVwZWF0SW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5RG93bn1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXs8Qm9keVRleHQgc2l6ZT17Mn0+e3JlcGVhdElucHV0Py5sYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtyZXBlYXRJbnB1dD8ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ISFyZXBlYXRJbnB1dEVycm9yfVxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblR5cGU9e2lucHV0VHlwZX1cbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0PXtyZXBlYXRJbnB1dEVycm9yfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7d2FybmluZ01lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICA8V2FybmluZ01lc3NhZ2VcbiAgICAgICAgICAgICAgICB0aXRsZT17d2FybmluZ01lc3NhZ2UudGl0bGV9XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17d2FybmluZ01lc3NhZ2UubWVzc2FnZX1cbiAgICAgICAgICAgICAgICBtYXJnaW49e3dhcm5pbmdNZXNzYWdlLm1hcmdpbn1cbiAgICAgICAgICAgICAgICBpY29uU3JjPXt3YXJuaW5nTWVzc2FnZS5pY29uU3JjfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjaGVja2JveExhYmVsICYmIChcbiAgICAgICAgICAgICAgPENoZWNrQm94Q29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17Y2hlY2tib3hMYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrYm94Rm9udFNpemU9e0NoZWNrYm94Rm9udFNpemUuc21hbGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DaGVja0JveENvbnRhaW5lcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXsnc2Vjb25kYXJ5Qmx1ZSd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3MgJiYgb25EaXNtaXNzKERpc21pc3NPcmlnaW4uRGlzbWlzc0J1dHRvbilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshIWRpc21pc3NEaXNhYmxlZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbmZpcm1Db2xvciA9PT0gJ3JlZCcgPyAncHJpbWFyeVJlZCcgOiAncHJpbWFyeUJsdWUnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uU3VibWl0fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtoYW5kbGVEaXNhYmxlQnV0dG9uKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0V2luZG93O1xuIl19