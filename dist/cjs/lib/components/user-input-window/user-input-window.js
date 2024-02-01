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
var CheckBoxContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        margin: '40px 0 -20px 0',
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
    var regexMatched = function (val) { return !!val && (validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.regexpPattern.test(val)); };
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
        if ((validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.regexpPattern) && (validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.validationMessage)) {
            !!passVal && regexMatched(passVal)
                ? setFormError(null)
                : setFormError("".concat(validationSetting === null || validationSetting === void 0 ? void 0 : validationSetting.validationMessage));
        }
        setValue(passVal);
    };
    var handleCheckBox = function () {
        setIsChecked(!isChecked);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: handleTheme(theme, position), onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, error: !!formError, validationType: inputType, validationText: formError }) }), checkboxLabel && ((0, jsx_runtime_1.jsx)(CheckBoxContainer, { children: (0, jsx_runtime_1.jsx)(checkbox_1.default, { checked: isChecked, label: checkboxLabel, onChange: handleCheckBox, checkboxFontSize: checkbox_1.CheckboxFontSize.small }) })), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: handleOnSubmit, disabled: value ? !!formError : true }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0QyxpRUFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBQ3BELHVFQUFrRTtBQStCbEUsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixJQUFJLEVBQUUsS0FBSztJQUNYLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsdUJBQXVCO0NBQ25DLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRztJQUNyQixHQUFHLEVBQUUsTUFBTTtJQUNYLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtDQUMvQixDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FDdkMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFDaEIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUNILFFBQVEsS0FBSyxtQ0FBYSxDQUFDLFFBQVE7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Z0IsQ0FBQyxLQUFLLEdBQ3hDLEdBQ2dCLENBQ3JCLEVBQ0Qsd0JBQUMsZ0JBQWdCLHFCQUNmLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEdBQUcsRUFBRSxNQUFNLEVBQ1gsT0FBTyxFQUFFLGVBQWUsaUJBRXZCLFlBQVksSUFBSSxDQUNmLHVCQUFDLGdCQUFNLHFCQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLFNBQVMsZ0JBQy9DLFlBQVksSUFDTixDQUNWLEVBQ0QsdUJBQUMsZ0JBQU0scUJBQ0wsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUN2QixRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUVuQyxZQUFZLElBQ04sS0FDUSxLQUNKLElBQ04sQ0FDZCxHQUNBLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQWpKVyxRQUFBLGVBQWUsbUJBaUoxQjtBQUVGLGtCQUFlLHVCQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IHVzZVRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBJbnB1dCwgeyBJbnB1dFZhbGlkYXRpb25UeXBlIH0gZnJvbSAnLi4vaW5wdXQvaW5wdXQnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IFJlYWN0TW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xuaW1wb3J0IHsgdXNlRXNjYXBlS2V5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWVzY2FwZS1rZXknO1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4uL21vZGFsLWhlYWRlci9tb2RhbC1oZWFkZXInO1xuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IHsgVGhlbWVNb2RlVHlwZSB9IGZyb20gJy4uL25hdmlnYXRpb24vY3Nwci1wcm9kdWN0cy1tZW51L3Byb2R1Y3RzLW1lbnUtaXRlbSc7XG5pbXBvcnQge1xuICBNb2RhbFBvc2l0aW9uLFxuICBNb2RhbFBvc2l0aW9uUHJvcHMsXG59IGZyb20gJy4uL2NvbmZpcm1hdGlvbi13aW5kb3cvY29uZmlybWF0aW9uLXdpbmRvdyc7XG5pbXBvcnQgQ2hlY2tib3gsIHsgQ2hlY2tib3hGb250U2l6ZSB9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94JztcblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uUHJvcHMge1xuICB2YWxpZGF0aW9uTWVzc2FnZTogc3RyaW5nO1xuICByZWdleHBQYXR0ZXJuOiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJbnB1dFdpbmRvd1NjZW5lUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGJvZHlJbWc/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHBvc2l0aW9uOiBNb2RhbFBvc2l0aW9uO1xuICB0aXRsZTogc3RyaW5nO1xuICB3aXRoSGVhZGVyPzogYm9vbGVhbjtcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgaW5mb3JtYXRpb24/OiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmc7XG4gIGNvbmZpcm1MYWJlbDogc3RyaW5nO1xuICBvbkNvbmZpcm06ICh2YWx1ZTogc3RyaW5nLCBpc0NoZWNrZWQ/OiBib29sZWFuKSA9PiB2b2lkO1xuICBjb25maXJtQ29sb3I/OiBzdHJpbmc7XG4gIGRpc21pc3NMYWJlbD86IHN0cmluZztcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU6IElucHV0VmFsaWRhdGlvblR5cGU7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIHNob3VsZENsb3NlT25Fc2M/OiBib29sZWFuO1xuICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPzogYm9vbGVhbjtcbiAgdGhlbWVNb2RlPzogVGhlbWVNb2RlVHlwZTtcbiAgY2hlY2tib3hMYWJlbD86IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgdmFsaWRhdGlvblNldHRpbmc/OiBWYWxpZGF0aW9uUHJvcHM7XG4gIHBvcnRhbENsYXNzPzogc3RyaW5nO1xufVxuXG5jb25zdCBjZW50ZXJNb2RhbFN0eWxlcyA9IHtcbiAgbGVmdDogJzUwJScsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICczMnB4IDI0cHggMjRweCAyNHB4JyxcbiAgdG9wOiAnNTAlJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbn07XG5cbmNvbnN0IHRvcE1vZGFsU3R5bGVzID0ge1xuICB0b3A6ICc0MHB4JyxcbiAgbGVmdDogJ2F1dG8nLFxuICByaWdodDogJzQwcHgnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMTZweCAyNHB4IDI0cHggMjRweCcsXG59O1xuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZChGbGV4Q29sdW1uKTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgd2lkdGg6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgICAgPyBbJzMwMHB4JywgJzM1MHB4JywgJzM1MHB4J11cbiAgICAgICAgICA6IFsnMzAwcHgnLCAnNDAwcHgnLCAnNDQ2cHgnXSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgbWFyZ2luOiAnMTVweCAwIDM1cHggMCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdjxNb2RhbFBvc2l0aW9uUHJvcHM+KCh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHRleHRBbGlnbjogcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnbGVmdCcgOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb25UZXh0ID0gc3R5bGVkKFN1YnRpdGxlVGV4dCkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBmb250V2VpZ2h0OiBbNjAwLCA2MDAsIDcwMF0sXG4gICAgZm9udFNpemU6IFsnMjBweCcsICcyNHB4JywgJzI0cHgnXSxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZEluZm9ybWF0aW9uVGV4dCA9IHN0eWxlZChCb2R5VGV4dCk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHRleHRBbGlnbjogcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnbGVmdCcgOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIG1hcmdpblRvcDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnNDBweCcgOiBbJzMycHgnLCAnMzJweCcsICc1NnB4J10sXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXG4gICAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKElucHV0KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0pXG4pO1xuXG5jb25zdCBDaGVja0JveENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW46ICc0MHB4IDAgLTIwcHggMCcsXG4gIH0pXG4pO1xuXG5jb25zdCBoYW5kbGVUaGVtZSA9ICh0aGVtZSwgcG9zaXRpb24pID0+IHtcbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZE92ZXJsYXksXG4gICAgICB6SW5kZXg6IDE1LFxuICAgIH0sXG4gICAgY29udGVudDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAuLi50b3BNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAuLi5jZW50ZXJNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIG1vZGFsU3R5bGU7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBVc2VySW5wdXRXaW5kb3cgPSAoe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nbyxcbiAgYm9keUltZyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybUNvbG9yLFxuICBvbkNvbmZpcm0sXG4gIGRpc21pc3NMYWJlbCxcbiAgc2hvdWxkQ2xvc2VPbkVzYyxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayxcbiAgb25EaXNtaXNzLFxuICB0aGVtZU1vZGUsXG4gIGlucHV0VHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHJlcXVpcmVkID0gZmFsc2UsXG4gIGlucHV0TGFiZWwsXG4gIGNoZWNrYm94TGFiZWwsXG4gIHZhbGlkYXRpb25TZXR0aW5nLFxuICBwb3J0YWxDbGFzcyA9ICdwb3J0YWwnLFxufTogVXNlcklucHV0V2luZG93U2NlbmVQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihpc09wZW4pO1xuXG4gIHVzZUVzY2FwZUtleSgoKSA9PiBzaG91bGRDbG9zZU9uRXNjICYmIHNldFNob3dNb2RhbChmYWxzZSkpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrICYmIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVnZXhNYXRjaGVkID0gKHZhbCkgPT4gISF2YWwgJiYgdmFsaWRhdGlvblNldHRpbmc/LnJlZ2V4cFBhdHRlcm4udGVzdCh2YWwpO1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5RG93biA9IChlKSA9PiB7XG4gICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbCAmJiAhZm9ybUVycm9yKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgb25Db25maXJtKHZhbCwgaXNDaGVja2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm47XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoKSA9PiB7XG4gICAgb25Db25maXJtKHZhbHVlLCBpc0NoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgcGFzc1ZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYodmFsaWRhdGlvblNldHRpbmc/LnJlZ2V4cFBhdHRlcm4gJiYgdmFsaWRhdGlvblNldHRpbmc/LnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAhIXBhc3NWYWwgJiYgcmVnZXhNYXRjaGVkKHBhc3NWYWwpXG4gICAgICAgICAgPyBzZXRGb3JtRXJyb3IobnVsbClcbiAgICAgICAgICA6IHNldEZvcm1FcnJvcihgJHt2YWxpZGF0aW9uU2V0dGluZz8udmFsaWRhdGlvbk1lc3NhZ2V9YCk7XG4gICAgfVxuICAgIHNldFZhbHVlKHBhc3NWYWwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrQm94ID0gKCkgPT4ge1xuICAgIHNldElzQ2hlY2tlZCghaXNDaGVja2VkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICBzdHlsZT17aGFuZGxlVGhlbWUodGhlbWUsIHBvc2l0aW9uKX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxuICAgICAgICAgIHNob3VsZENsb3NlT25Fc2NcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lciBwb3NpdGlvbj17cG9zaXRpb259IHJlZj17cmVmfT5cbiAgICAgICAgICAgIHt3aXRoSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlPXt0aGVtZU1vZGV9XG4gICAgICAgICAgICAgICAgaGVhZGVyTG9nbz17aGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Ym9keUltZyAmJiA8SW1hZ2VXcmFwcGVyIGp1c3RpZnk9XCJjZW50ZXJcIj57Ym9keUltZ308L0ltYWdlV3JhcHBlcj59XG4gICAgICAgICAgICA8U3R5bGVkQ2FwdGlvbiBwb3NpdGlvbj17cG9zaXRpb259PlxuICAgICAgICAgICAgICA8U3R5bGVkQ2FwdGlvblRleHQgc2l6ZT17MX0gc2NhbGU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uVGV4dD5cbiAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvbj5cbiAgICAgICAgICAgIDxGbGV4Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPFN0eWxlZEluZm9ybWF0aW9uVGV4dCBwb3NpdGlvbj17cG9zaXRpb259IHNpemU9ezN9IHNjYWxlPVwic21cIj5cbiAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb259XG4gICAgICAgICAgICAgIDwvU3R5bGVkSW5mb3JtYXRpb25UZXh0PlxuICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgPEZsZXhSb3c+XG4gICAgICAgICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlRW50ZXJLZXlEb3dufVxuICAgICAgICAgICAgICAgIGxhYmVsPXs8Qm9keVRleHQgc2l6ZT17Mn0+e2lucHV0TGFiZWx9PC9Cb2R5VGV4dD59XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgIGVycm9yPXshIWZvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVHlwZT17aW5wdXRUeXBlfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0PXtmb3JtRXJyb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICB7Y2hlY2tib3hMYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxDaGVja0JveENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtjaGVja2JveExhYmVsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgY2hlY2tib3hGb250U2l6ZT17Q2hlY2tib3hGb250U2l6ZS5zbWFsbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NoZWNrQm94Q29udGFpbmVyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZ2FwPXsnMTZweCd9XG4gICAgICAgICAgICAgIGp1c3RpZnk9eydzcGFjZS1iZXR3ZWVuJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj17J3NlY29uZGFyeUJsdWUnfSBvbkNsaWNrPXtvbkRpc21pc3N9PlxuICAgICAgICAgICAgICAgICAge2Rpc21pc3NMYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb25maXJtQ29sb3IgPT09ICdyZWQnID8gJ3ByaW1hcnlSZWQnIDogJ3ByaW1hcnlCbHVlJ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVPblN1Ym1pdH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dmFsdWUgPyAhIWZvcm1FcnJvciA6IHRydWV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0V2luZG93O1xuIl19