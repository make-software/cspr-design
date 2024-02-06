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
var input_1 = tslib_1.__importDefault(require("../input/input"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var react_modal_1 = tslib_1.__importDefault(require("react-modal"));
var use_click_away_1 = require("../../hooks/use-click-away");
var use_escape_key_1 = require("../../hooks/use-escape-key");
var modal_header_1 = tslib_1.__importDefault(require("../modal-header/modal-header"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var confirmation_window_1 = require("../confirmation-window/confirmation-window");
var checkbox_1 = tslib_1.__importStar(require("../checkbox/checkbox"));
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
        textAlign: 'left',
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
    var isOpen = _a.isOpen, position = _a.position, title = _a.title, withHeader = _a.withHeader, headerLogo = _a.headerLogo, bodyImg = _a.bodyImg, information = _a.information, confirmLabel = _a.confirmLabel, confirmColor = _a.confirmColor, onConfirm = _a.onConfirm, dismissLabel = _a.dismissLabel, shouldCloseOnEsc = _a.shouldCloseOnEsc, shouldCloseOnOverlayClick = _a.shouldCloseOnOverlayClick, onDismiss = _a.onDismiss, themeMode = _a.themeMode, inputType = _a.inputType, placeholder = _a.placeholder, _b = _a.required, required = _b === void 0 ? false : _b, inputLabel = _a.inputLabel, checkboxLabel = _a.checkboxLabel, validationSetting = _a.validationSetting, _c = _a.portalClass, portalClass = _c === void 0 ? 'portal' : _c;
    var theme = (0, styled_components_1.useTheme)();
    var _d = (0, react_1.useState)(''), value = _d[0], setValue = _d[1];
    var _e = (0, react_1.useState)(false), isChecked = _e[0], setIsChecked = _e[1];
    var _f = (0, react_1.useState)(null), formError = _f[0], setFormError = _f[1];
    var _g = (0, react_1.useState)(isOpen), showModal = _g[0], setShowModal = _g[1];
    (0, use_escape_key_1.useEscapeKey)(function () { return shouldCloseOnEsc && setShowModal(false); });
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            shouldCloseOnOverlayClick && setShowModal(false);
        },
    }).ref;
    var regexMatched = function (val) {
        return !!val && (validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.regexpPattern.test(val));
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
        if ((validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.regexpPattern) &&
            (validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.validationMessage)) {
            !!passVal && regexMatched(passVal)
                ? setFormError(null)
                : setFormError("".concat(validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.validationMessage));
        }
        setValue(passVal);
    };
    var handleCheckBox = function () {
        setIsChecked(!isChecked);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: handleTheme(theme, position), onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onClose: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, { children: bodyImg }), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, error: !!formError, validationType: inputType, validationText: formError }) }), checkboxLabel && ((0, jsx_runtime_1.jsx)(CheckBoxContainer, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.default, { checked: isChecked, label: checkboxLabel, onChange: handleCheckBox, checkboxFontSize: checkbox_1.CheckboxFontSize.small }) }))), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: handleOnSubmit, disabled: value ? !!formError : true }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0QyxpRUFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBQ3BELHVFQUFrRTtBQStCbEUsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixJQUFJLEVBQUUsS0FBSztJQUNYLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsdUJBQXVCO0NBQ25DLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRztJQUNyQixHQUFHLEVBQUUsTUFBTTtJQUNYLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtDQUMvQixDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FDdkMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFDaEIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUNILFFBQVEsS0FBSyxtQ0FBYSxDQUFDLFFBQVE7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LFFBQVEsRUFBRSxjQUFjLEVBQ3hCLGdCQUFnQixFQUFFLDJCQUFnQixDQUFDLEtBQUssR0FDeEMsSUFDZ0IsQ0FDckIsRUFDRCx3QkFBQyxnQkFBZ0IscUJBQ2YsUUFBUSxFQUFFLFFBQVEsRUFDbEIsR0FBRyxFQUFFLE1BQU0sRUFDWCxPQUFPLEVBQUUsZUFBZSxpQkFFdkIsWUFBWSxJQUFJLENBQ2YsdUJBQUMsZ0JBQU0scUJBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsU0FBUyxnQkFDL0MsWUFBWSxJQUNOLENBQ1YsRUFDRCx1QkFBQyxnQkFBTSxxQkFDTCxLQUFLLEVBQUUsWUFBWSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQzVELE9BQU8sRUFBRSxjQUFjLEVBQ3ZCLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBRW5DLFlBQVksSUFDTixLQUNRLEtBQ0osSUFDTixDQUNkLEdBQ0EsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBckpXLFFBQUEsZUFBZSxtQkFxSjFCO0FBRUYsa0JBQWUsdUJBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgdXNlVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IElucHV0LCB7IElucHV0VmFsaWRhdGlvblR5cGUgfSBmcm9tICcuLi9pbnB1dC9pbnB1dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5pbXBvcnQgeyB1c2VFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtZXNjYXBlLWtleSc7XG5pbXBvcnQgTW9kYWxIZWFkZXIgZnJvbSAnLi4vbW9kYWwtaGVhZGVyL21vZGFsLWhlYWRlcic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgeyBUaGVtZU1vZGVUeXBlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9jc3ByLXByb2R1Y3RzLW1lbnUvcHJvZHVjdHMtbWVudS1pdGVtJztcbmltcG9ydCB7XG4gIE1vZGFsUG9zaXRpb24sXG4gIE1vZGFsUG9zaXRpb25Qcm9wcyxcbn0gZnJvbSAnLi4vY29uZmlybWF0aW9uLXdpbmRvdy9jb25maXJtYXRpb24td2luZG93JztcbmltcG9ydCBDaGVja2JveCwgeyBDaGVja2JveEZvbnRTaXplIH0gZnJvbSAnLi4vY2hlY2tib3gvY2hlY2tib3gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25Qcm9wcyB7XG4gIHZhbGlkYXRpb25NZXNzYWdlOiBzdHJpbmc7XG4gIHJlZ2V4cFBhdHRlcm46IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVXNlcklucHV0V2luZG93U2NlbmVQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgYm9keUltZz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgcG9zaXRpb246IE1vZGFsUG9zaXRpb247XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHdpdGhIZWFkZXI/OiBib29sZWFuO1xuICBoZWFkZXJMb2dvPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBpbmZvcm1hdGlvbj86IFJlYWN0LlJlYWN0RWxlbWVudCB8IHN0cmluZztcbiAgY29uZmlybUxhYmVsOiBzdHJpbmc7XG4gIG9uQ29uZmlybTogKHZhbHVlOiBzdHJpbmcsIGlzQ2hlY2tlZD86IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGNvbmZpcm1Db2xvcj86IHN0cmluZztcbiAgZGlzbWlzc0xhYmVsPzogc3RyaW5nO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIGlucHV0TGFiZWw/OiBzdHJpbmc7XG4gIGlucHV0VHlwZTogSW5wdXRWYWxpZGF0aW9uVHlwZTtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbkVzYz86IGJvb2xlYW47XG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s/OiBib29sZWFuO1xuICB0aGVtZU1vZGU/OiBUaGVtZU1vZGVUeXBlO1xuICBjaGVja2JveExhYmVsPzogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50O1xuICB2YWxpZGF0aW9uU2V0dGluZz86IFZhbGlkYXRpb25Qcm9wcztcbiAgcG9ydGFsQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNlbnRlck1vZGFsU3R5bGVzID0ge1xuICBsZWZ0OiAnNTAlJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzMycHggMjRweCAyNHB4IDI0cHgnLFxuICB0b3A6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxufTtcblxuY29uc3QgdG9wTW9kYWxTdHlsZXMgPSB7XG4gIHRvcDogJzQwcHgnLFxuICBsZWZ0OiAnYXV0bycsXG4gIHJpZ2h0OiAnNDBweCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICcxNnB4IDI0cHggMjRweCAyNHB4Jyxcbn07XG5cbmNvbnN0IE1vZGFsQ29udGFpbmVyID0gc3R5bGVkKEZsZXhDb2x1bW4pPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB3aWR0aDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICA/IFsnMzAwcHgnLCAnMzUwcHgnLCAnMzUwcHgnXVxuICAgICAgICAgIDogWyczMDBweCcsICc0MDBweCcsICc0NDZweCddLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgIH0pXG4pO1xuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW46ICcxNXB4IDAgMjRweCAwJyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb24gPSBzdHlsZWQuZGl2PE1vZGFsUG9zaXRpb25Qcm9wcz4oKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uVGV4dCA9IHN0eWxlZChTdWJ0aXRsZVRleHQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgZm9udFdlaWdodDogWzYwMCwgNjAwLCA3MDBdLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyNHB4J10sXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbmZvcm1hdGlvblRleHQgPSBzdHlsZWQoQm9keVRleHQpPE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIG1hcmdpblRvcDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnNDBweCcgOiBbJzMycHgnLCAnMzJweCcsICc1NnB4J10sXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXG4gICAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKElucHV0KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgJzpmb2N1cyc6IHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgQ2hlY2tCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2PE1vZGFsUG9zaXRpb25Qcm9wcz4oXG4gICh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtYXJnaW46XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgICAgPyAnNDBweCAwIC0yMHB4IDAnXG4gICAgICAgICAgOiBbJzQwcHggMCAtMjBweCAwJywgJzQwcHggMCAtMjBweCAwJywgJzcycHggMCAtNDBweCAwJ10sXG4gICAgfSlcbik7XG5cbmNvbnN0IGhhbmRsZVRoZW1lID0gKHRoZW1lLCBwb3NpdGlvbikgPT4ge1xuICBjb25zdCBtb2RhbFN0eWxlID0ge1xuICAgIG92ZXJsYXk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kT3ZlcmxheSxcbiAgICAgIHpJbmRleDogMTUsXG4gICAgfSxcbiAgICBjb250ZW50OlxuICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi50b3BNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgIC4uLntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIC4uLmNlbnRlck1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICB9O1xuXG4gIHJldHVybiBtb2RhbFN0eWxlO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbnB1dFdpbmRvdyA9ICh7XG4gIGlzT3BlbixcbiAgcG9zaXRpb24sXG4gIHRpdGxlLFxuICB3aXRoSGVhZGVyLFxuICBoZWFkZXJMb2dvLFxuICBib2R5SW1nLFxuICBpbmZvcm1hdGlvbixcbiAgY29uZmlybUxhYmVsLFxuICBjb25maXJtQ29sb3IsXG4gIG9uQ29uZmlybSxcbiAgZGlzbWlzc0xhYmVsLFxuICBzaG91bGRDbG9zZU9uRXNjLFxuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICBvbkRpc21pc3MsXG4gIHRoZW1lTW9kZSxcbiAgaW5wdXRUeXBlLFxuICBwbGFjZWhvbGRlcixcbiAgcmVxdWlyZWQgPSBmYWxzZSxcbiAgaW5wdXRMYWJlbCxcbiAgY2hlY2tib3hMYWJlbCxcbiAgdmFsaWRhdGlvblNldHRpbmcsXG4gIHBvcnRhbENsYXNzID0gJ3BvcnRhbCcsXG59OiBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtmb3JtRXJyb3IsIHNldEZvcm1FcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGlzT3Blbik7XG5cbiAgdXNlRXNjYXBlS2V5KCgpID0+IHNob3VsZENsb3NlT25Fc2MgJiYgc2V0U2hvd01vZGFsKGZhbHNlKSk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2sgJiYgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCByZWdleE1hdGNoZWQgPSAodmFsKSA9PlxuICAgICEhdmFsICYmIHZhbGlkYXRpb25TZXR0aW5nPy5yZWdleHBQYXR0ZXJuLnRlc3QodmFsKTtcblxuICBjb25zdCBoYW5kbGVFbnRlcktleURvd24gPSAoZSkgPT4ge1xuICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh2YWwgJiYgIWZvcm1FcnJvcikge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIG9uQ29uZmlybSh2YWwsIGlzQ2hlY2tlZCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHJldHVybjtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcbiAgICBvbkNvbmZpcm0odmFsdWUsIGlzQ2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBwYXNzVmFsID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoXG4gICAgICB2YWxpZGF0aW9uU2V0dGluZz8ucmVnZXhwUGF0dGVybiAmJlxuICAgICAgdmFsaWRhdGlvblNldHRpbmc/LnZhbGlkYXRpb25NZXNzYWdlXG4gICAgKSB7XG4gICAgICAhIXBhc3NWYWwgJiYgcmVnZXhNYXRjaGVkKHBhc3NWYWwpXG4gICAgICAgID8gc2V0Rm9ybUVycm9yKG51bGwpXG4gICAgICAgIDogc2V0Rm9ybUVycm9yKGAke3ZhbGlkYXRpb25TZXR0aW5nPy52YWxpZGF0aW9uTWVzc2FnZX1gKTtcbiAgICB9XG4gICAgc2V0VmFsdWUocGFzc1ZhbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tCb3ggPSAoKSA9PiB7XG4gICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8UmVhY3RNb2RhbFxuICAgICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxuICAgICAgICAgIHN0eWxlPXtoYW5kbGVUaGVtZSh0aGVtZSwgcG9zaXRpb24pfVxuICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkRpc21pc3N9XG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY1xuICAgICAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2tcbiAgICAgICAgICBwb3J0YWxDbGFzc05hbWU9e3BvcnRhbENsYXNzfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsQ29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0gcmVmPXtyZWZ9PlxuICAgICAgICAgICAge3dpdGhIZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8TW9kYWxIZWFkZXJcbiAgICAgICAgICAgICAgICB0aGVtZU1vZGU9e3RoZW1lTW9kZX1cbiAgICAgICAgICAgICAgICBoZWFkZXJMb2dvPXtoZWFkZXJMb2dvfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uRGlzbWlzc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Ym9keUltZyAmJiA8SW1hZ2VXcmFwcGVyPntib2R5SW1nfTwvSW1hZ2VXcmFwcGVyPn1cbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uVGV4dCBzaXplPXsxfSBzY2FsZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L1N0eWxlZENhcHRpb25UZXh0PlxuICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uPlxuICAgICAgICAgICAgPEZsZXhSb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8U3R5bGVkSW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8RmxleFJvdz5cbiAgICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleURvd259XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxCb2R5VGV4dCBzaXplPXsyfT57aW5wdXRMYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgZXJyb3I9eyEhZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UeXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHQ9e2Zvcm1FcnJvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgIHtjaGVja2JveExhYmVsICYmIChcbiAgICAgICAgICAgICAgPENoZWNrQm94Q29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17Y2hlY2tib3hMYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrYm94Rm9udFNpemU9e0NoZWNrYm94Rm9udFNpemUuc21hbGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DaGVja0JveENvbnRhaW5lcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydzZWNvbmRhcnlCbHVlJ30gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlybUNvbG9yID09PSAncmVkJyA/ICdwcmltYXJ5UmVkJyA6ICdwcmltYXJ5Qmx1ZSd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25TdWJtaXR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlID8gISFmb3JtRXJyb3IgOiB0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnB1dFdpbmRvdztcbiJdfQ==