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
    var regexMatched = !!value && getRegexByInputType().test(value);
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
        regexMatched ? setFormError(null) : setFormError("".concat(validationMessage));
        setValue(e.target.value);
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: modalStyle, onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, tslib_1.__assign({ justify: "center" }, { children: bodyImg })), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, error: !!formError, validationType: inputType, validationText: formError }) }), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: function () { return onConfirm(value); } }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXFEO0FBQ3JELDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0Qyw4REFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBMEJwRCxJQUFNLGlCQUFpQixHQUFHO0lBQ3hCLElBQUksRUFBRSxLQUFLO0lBQ1gsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QixHQUFHLEVBQUUsS0FBSztJQUNWLFNBQVMsRUFBRSx1QkFBdUI7Q0FDbkMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEdBQUcsRUFBRSxNQUFNO0lBQ1gsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0lBQ2QsTUFBTSxFQUFFLE1BQU07SUFDZCxZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUscUJBQXFCO0NBQy9CLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMscUJBQVUsQ0FBQyxDQUN2QyxVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNoQixPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQ0gsUUFBUSxLQUFLLG1DQUFhLENBQUMsUUFBUTtZQUNqQyxDQUFDLENB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R0FDTSxFQUNWLHdCQUFDLGdCQUFnQixxQkFDZixRQUFRLEVBQUUsUUFBUSxFQUNsQixHQUFHLEVBQUUsTUFBTSxFQUNYLE9BQU8sRUFBRSxlQUFlLGlCQUV2QixZQUFZLElBQUksQ0FDZix1QkFBQyxnQkFBTSxxQkFBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxTQUFTLGdCQUMvQyxZQUFZLElBQ04sQ0FDVixFQUNELHVCQUFDLGdCQUFNLHFCQUNMLEtBQUssRUFBRSxZQUFZLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDNUQsT0FBTyxFQUFFLGNBQU0sT0FBQSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQWhCLENBQWdCLGdCQUU5QixZQUFZLElBQ04sS0FDUSxLQUNKLElBQ04sQ0FDZCxHQUNBLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FBQztBQW5KVyxRQUFBLGVBQWUsbUJBbUoxQjtBQUVGLGtCQUFlLHVCQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgSW5wdXQsIHsgSW5wdXRWYWxpZGF0aW9uVHlwZSB9IGZyb20gJy4uL2lucHV0L2lucHV0JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5JztcbmltcG9ydCB7IHVzZUVzY2FwZUtleSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1lc2NhcGUta2V5JztcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCB7IFRoZW1lTW9kZVR5cGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LWl0ZW0nO1xuaW1wb3J0IHtcbiAgTW9kYWxQb3NpdGlvbixcbiAgTW9kYWxQb3NpdGlvblByb3BzLFxufSBmcm9tICcuLi9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJJbnB1dFdpbmRvd1NjZW5lUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIGJvZHlJbWc/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHBvc2l0aW9uOiBNb2RhbFBvc2l0aW9uO1xuICB0aXRsZTogc3RyaW5nO1xuICB3aXRoSGVhZGVyPzogYm9vbGVhbjtcbiAgaGVhZGVyTG9nbz86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgaW5mb3JtYXRpb24/OiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmc7XG4gIGNvbmZpcm1MYWJlbDogc3RyaW5nO1xuICBvbkNvbmZpcm06ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBjb25maXJtQ29sb3I/OiBzdHJpbmc7XG4gIGRpc21pc3NMYWJlbD86IHN0cmluZztcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICBpbnB1dExhYmVsPzogc3RyaW5nO1xuICBpbnB1dFR5cGU6IElucHV0VmFsaWRhdGlvblR5cGU7XG4gIHZhbGlkYXRpb25NZXNzYWdlPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBzaG91bGRDbG9zZU9uRXNjPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaz86IGJvb2xlYW47XG4gIHRoZW1lTW9kZT86IFRoZW1lTW9kZVR5cGU7XG4gIHBvcnRhbENsYXNzPzogc3RyaW5nO1xufVxuXG5jb25zdCBjZW50ZXJNb2RhbFN0eWxlcyA9IHtcbiAgbGVmdDogJzUwJScsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gIHBhZGRpbmc6ICczMnB4IDI0cHggMjRweCAyNHB4JyxcbiAgdG9wOiAnNTAlJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbn07XG5cbmNvbnN0IHRvcE1vZGFsU3R5bGVzID0ge1xuICB0b3A6ICc0MHB4JyxcbiAgbGVmdDogJ2F1dG8nLFxuICByaWdodDogJzQwcHgnLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMTZweCAyNHB4IDI0cHggMjRweCcsXG59O1xuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZChGbGV4Q29sdW1uKTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgd2lkdGg6XG4gICAgICAgIHBvc2l0aW9uID09PSBNb2RhbFBvc2l0aW9uLlRvcFJpZ2h0XG4gICAgICAgICAgPyBbJzI2MXB4JywgJzM1MHB4JywgJzM1MHB4J11cbiAgICAgICAgICA6IFsnMjYxcHgnLCAnNDAwcHgnLCAnNDQ2cHgnXSxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgbWFyZ2luOiAnMTVweCAwIDM1cHggMCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRDYXB0aW9uID0gc3R5bGVkLmRpdjxNb2RhbFBvc2l0aW9uUHJvcHM+KCh7IHRoZW1lLCBwb3NpdGlvbiB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHRleHRBbGlnbjogcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnbGVmdCcgOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb25UZXh0ID0gc3R5bGVkKFN1YnRpdGxlVGV4dCkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBmb250V2VpZ2h0OiBbNjAwLCA2MDAsIDcwMF0sXG4gICAgZm9udFNpemU6IFsnMjBweCcsICcyNHB4JywgJzI0cHgnXSxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZEluZm9ybWF0aW9uVGV4dCA9IHN0eWxlZChCb2R5VGV4dCk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHRleHRBbGlnbjogcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnbGVmdCcgOiAnY2VudGVyJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIG1hcmdpblRvcDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHQgPyAnNDBweCcgOiBbJzMycHgnLCAnMzJweCcsICc1NnB4J10sXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnLCAncm93J10sXG4gICAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKElucHV0KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgVXNlcklucHV0V2luZG93ID0gKHtcbiAgaXNPcGVuLFxuICBwb3NpdGlvbixcbiAgdGl0bGUsXG4gIHdpdGhIZWFkZXIsXG4gIGhlYWRlckxvZ28sXG4gIGJvZHlJbWcsXG4gIGluZm9ybWF0aW9uLFxuICBjb25maXJtTGFiZWwsXG4gIGNvbmZpcm1Db2xvcixcbiAgb25Db25maXJtLFxuICBkaXNtaXNzTGFiZWwsXG4gIHNob3VsZENsb3NlT25Fc2MsXG4gIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2ssXG4gIG9uRGlzbWlzcyxcbiAgdGhlbWVNb2RlLFxuICBpbnB1dFR5cGUsXG4gIHBsYWNlaG9sZGVyLFxuICByZXF1aXJlZCA9IGZhbHNlLFxuICBpbnB1dExhYmVsLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgcG9ydGFsQ2xhc3MgPSAncG9ydGFsJyxcbn06IFVzZXJJbnB1dFdpbmRvd1NjZW5lUHJvcHMpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihpc09wZW4pO1xuXG4gIHVzZUVzY2FwZUtleSgoKSA9PiBzaG91bGRDbG9zZU9uRXNjICYmIHNldFNob3dNb2RhbChmYWxzZSkpO1xuXG4gIGNvbnN0IGdldFJlZ2V4QnlJbnB1dFR5cGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICAgIGNhc2UgSW5wdXRWYWxpZGF0aW9uVHlwZS5wYXNzd29yZDpcbiAgICAgICAgcmV0dXJuIC9eW2EtekEtWjAtOV17MTJ9LztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAvXlthLXpBLVowLTldezEyfS87XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVnZXhNYXRjaGVkID0gISF2YWx1ZSAmJiBnZXRSZWdleEJ5SW5wdXRUeXBlKCkudGVzdCh2YWx1ZSk7XG5cbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMEUxMTI2QTAnLFxuICAgICAgekluZGV4OiAxNSxcbiAgICB9LFxuICAgIGNvbnRlbnQ6XG4gICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnRvcE1vZGFsU3R5bGVzLFxuICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgLi4uY2VudGVyTW9kYWxTdHlsZXMsXG4gICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRW50ZXJLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIG9uQ29uZmlybShlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrICYmIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHJlZ2V4TWF0Y2hlZCA/IHNldEZvcm1FcnJvcihudWxsKSA6IHNldEZvcm1FcnJvcihgJHt2YWxpZGF0aW9uTWVzc2FnZX1gKTtcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtzaG93TW9kYWx9XG4gICAgICAgICAgc3R5bGU9e21vZGFsU3R5bGV9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e29uRGlzbWlzc31cbiAgICAgICAgICBzaG91bGRDbG9zZU9uRXNjXG4gICAgICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja1xuICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17cG9ydGFsQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICA8TW9kYWxDb250YWluZXIgcG9zaXRpb249e3Bvc2l0aW9ufSByZWY9e3JlZn0+XG4gICAgICAgICAgICB7d2l0aEhlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxNb2RhbEhlYWRlclxuICAgICAgICAgICAgICAgIHRoZW1lTW9kZT17dGhlbWVNb2RlfVxuICAgICAgICAgICAgICAgIGhlYWRlckxvZ289e2hlYWRlckxvZ299XG4gICAgICAgICAgICAgICAgb25EaXNtaXNzPXtvbkRpc21pc3N9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2JvZHlJbWcgJiYgPEltYWdlV3JhcHBlciBqdXN0aWZ5PVwiY2VudGVyXCI+e2JvZHlJbWd9PC9JbWFnZVdyYXBwZXI+fVxuICAgICAgICAgICAgPFN0eWxlZENhcHRpb24gcG9zaXRpb249e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgPFN0eWxlZENhcHRpb25UZXh0IHNpemU9ezF9IHNjYWxlPVwibGdcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvU3R5bGVkQ2FwdGlvblRleHQ+XG4gICAgICAgICAgICA8L1N0eWxlZENhcHRpb24+XG4gICAgICAgICAgICA8RmxleFJvdyBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxTdHlsZWRJbmZvcm1hdGlvblRleHQgcG9zaXRpb249e3Bvc2l0aW9ufSBzaXplPXszfSBzY2FsZT1cInNtXCI+XG4gICAgICAgICAgICAgICAge2luZm9ybWF0aW9ufVxuICAgICAgICAgICAgICA8L1N0eWxlZEluZm9ybWF0aW9uVGV4dD5cbiAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgIDxGbGV4Um93PlxuICAgICAgICAgICAgICA8U3R5bGVkSW5wdXRcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUVudGVyS2V5RG93bn1cbiAgICAgICAgICAgICAgICBsYWJlbD17PEJvZHlUZXh0IHNpemU9ezJ9PntpbnB1dExhYmVsfTwvQm9keVRleHQ+fVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBlcnJvcj17ISFmb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblR5cGU9e2lucHV0VHlwZX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dD17Zm9ybUVycm9yfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4Um93PlxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICAgICAgICBnYXA9eycxNnB4J31cbiAgICAgICAgICAgICAganVzdGlmeT17J3NwYWNlLWJldHdlZW4nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPXsnc2Vjb25kYXJ5Qmx1ZSd9IG9uQ2xpY2s9e29uRGlzbWlzc30+XG4gICAgICAgICAgICAgICAgICB7ZGlzbWlzc0xhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbmZpcm1Db2xvciA9PT0gJ3JlZCcgPyAncHJpbWFyeVJlZCcgOiAncHJpbWFyeUJsdWUnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29uZmlybSh2YWx1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uc0NvbnRhaW5lcj5cbiAgICAgICAgICA8L01vZGFsQ29udGFpbmVyPlxuICAgICAgICA8L1JlYWN0TW9kYWw+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcklucHV0V2luZG93O1xuIl19