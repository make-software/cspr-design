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
        margin: position === confirmation_window_1.ModalPosition.TopRight ? '40px 0 -20px 0' : ['40px 0 -20px 0', '40px 0 -20px 0', '72px 0 -40px 0']
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showModal && ((0, jsx_runtime_1.jsx)(react_modal_1.default, tslib_1.__assign({ isOpen: showModal, style: handleTheme(theme, position), onRequestClose: onDismiss, shouldCloseOnEsc: true, shouldCloseOnOverlayClick: true, portalClassName: portalClass }, { children: (0, jsx_runtime_1.jsxs)(ModalContainer, tslib_1.__assign({ position: position, ref: ref }, { children: [withHeader && ((0, jsx_runtime_1.jsx)(modal_header_1.default, { themeMode: themeMode, headerLogo: headerLogo, onDismiss: onDismiss })), bodyImg && (0, jsx_runtime_1.jsx)(ImageWrapper, { children: bodyImg }), (0, jsx_runtime_1.jsx)(StyledCaption, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(StyledCaptionText, tslib_1.__assign({ size: 1, scale: "lg" }, { children: title })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ justify: "center" }, { children: (0, jsx_runtime_1.jsx)(StyledInformationText, tslib_1.__assign({ position: position, size: 3, scale: "sm" }, { children: information })) })), (0, jsx_runtime_1.jsx)(flex_row_1.default, { children: (0, jsx_runtime_1.jsx)(StyledInput, { required: required, value: value, onChange: handleInputChange, onKeyDown: handleEnterKeyDown, label: (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: inputLabel })), placeholder: placeholder, error: !!formError, validationType: inputType, validationText: formError }) }), checkboxLabel && ((0, jsx_runtime_1.jsx)(CheckBoxContainer, tslib_1.__assign({ position: position }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.default, { checked: isChecked, label: checkboxLabel, onChange: handleCheckBox, checkboxFontSize: checkbox_1.CheckboxFontSize.small }) }))), (0, jsx_runtime_1.jsxs)(ButtonsContainer, tslib_1.__assign({ position: position, gap: '16px', justify: 'space-between' }, { children: [dismissLabel && ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: 'secondaryBlue', onClick: onDismiss }, { children: dismissLabel }))), (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: confirmColor === 'red' ? 'primaryRed' : 'primaryBlue', onClick: handleOnSubmit, disabled: value ? !!formError : true }, { children: confirmLabel }))] }))] })) }))) }));
};
exports.UserInputWindow = UserInputWindow;
exports.default = exports.UserInputWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbnB1dC13aW5kb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXNlci1pbnB1dC13aW5kb3cvdXNlci1pbnB1dC13aW5kb3cudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDZFQUFxRDtBQUNyRCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELG9FQUFzQztBQUN0QyxpRUFBNEQ7QUFDNUQsNkVBQThDO0FBQzlDLG9FQUFxQztBQUNyQyw2REFBMEQ7QUFDMUQsNkRBQTBEO0FBQzFELHNGQUF1RDtBQUN2RCx5RkFBMEQ7QUFFMUQsa0ZBR29EO0FBQ3BELHVFQUFrRTtBQStCbEUsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixJQUFJLEVBQUUsS0FBSztJQUNYLEtBQUssRUFBRSxNQUFNO0lBQ2IsTUFBTSxFQUFFLE1BQU07SUFDZCxNQUFNLEVBQUUsTUFBTTtJQUNkLFlBQVksRUFBRSxNQUFNO0lBQ3BCLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsdUJBQXVCO0NBQ25DLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRztJQUNyQixHQUFHLEVBQUUsTUFBTTtJQUNYLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsTUFBTTtJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLHFCQUFxQjtDQUMvQixDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FDdkMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFDaEIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUNILFFBQVEsS0FBSyxtQ0FBYSxDQUFDLFFBQVE7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USxFQUFFLGNBQWMsRUFDeEIsZ0JBQWdCLEVBQUUsMkJBQWdCLENBQUMsS0FBSyxHQUN4QyxJQUNnQixDQUNyQixFQUNELHdCQUFDLGdCQUFnQixxQkFDZixRQUFRLEVBQUUsUUFBUSxFQUNsQixHQUFHLEVBQUUsTUFBTSxFQUNYLE9BQU8sRUFBRSxlQUFlLGlCQUV2QixZQUFZLElBQUksQ0FDZix1QkFBQyxnQkFBTSxxQkFBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxTQUFTLGdCQUMvQyxZQUFZLElBQ04sQ0FDVixFQUNELHVCQUFDLGdCQUFNLHFCQUNMLEtBQUssRUFBRSxZQUFZLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFDdkIsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFFbkMsWUFBWSxJQUNOLEtBQ1EsS0FDSixJQUNOLENBQ2QsR0FDQSxDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFqSlcsUUFBQSxlQUFlLG1CQWlKMUI7QUFFRixrQkFBZSx1QkFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwgeyB1c2VUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgSW5wdXQsIHsgSW5wdXRWYWxpZGF0aW9uVHlwZSB9IGZyb20gJy4uL2lucHV0L2lucHV0JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5JztcbmltcG9ydCB7IHVzZUVzY2FwZUtleSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1lc2NhcGUta2V5JztcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuLi9tb2RhbC1oZWFkZXIvbW9kYWwtaGVhZGVyJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCB7IFRoZW1lTW9kZVR5cGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LWl0ZW0nO1xuaW1wb3J0IHtcbiAgTW9kYWxQb3NpdGlvbixcbiAgTW9kYWxQb3NpdGlvblByb3BzLFxufSBmcm9tICcuLi9jb25maXJtYXRpb24td2luZG93L2NvbmZpcm1hdGlvbi13aW5kb3cnO1xuaW1wb3J0IENoZWNrYm94LCB7IENoZWNrYm94Rm9udFNpemUgfSBmcm9tICcuLi9jaGVja2JveC9jaGVja2JveCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvblByb3BzIHtcbiAgdmFsaWRhdGlvbk1lc3NhZ2U6IHN0cmluZztcbiAgcmVnZXhwUGF0dGVybjogYW55O1xufVxuZXhwb3J0IGludGVyZmFjZSBVc2VySW5wdXRXaW5kb3dTY2VuZVByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBib2R5SW1nPzogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBwb3NpdGlvbjogTW9kYWxQb3NpdGlvbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgd2l0aEhlYWRlcj86IGJvb2xlYW47XG4gIGhlYWRlckxvZ28/OiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIGluZm9ybWF0aW9uPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xuICBjb25maXJtTGFiZWw6IHN0cmluZztcbiAgb25Db25maXJtOiAodmFsdWU6IHN0cmluZywgaXNDaGVja2VkPzogYm9vbGVhbikgPT4gdm9pZDtcbiAgY29uZmlybUNvbG9yPzogc3RyaW5nO1xuICBkaXNtaXNzTGFiZWw/OiBzdHJpbmc7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgaW5wdXRMYWJlbD86IHN0cmluZztcbiAgaW5wdXRUeXBlOiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBzaG91bGRDbG9zZU9uRXNjPzogYm9vbGVhbjtcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljaz86IGJvb2xlYW47XG4gIHRoZW1lTW9kZT86IFRoZW1lTW9kZVR5cGU7XG4gIGNoZWNrYm94TGFiZWw/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHZhbGlkYXRpb25TZXR0aW5nPzogVmFsaWRhdGlvblByb3BzO1xuICBwb3J0YWxDbGFzcz86IHN0cmluZztcbn1cblxuY29uc3QgY2VudGVyTW9kYWxTdHlsZXMgPSB7XG4gIGxlZnQ6ICc1MCUnLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMzJweCAyNHB4IDI0cHggMjRweCcsXG4gIHRvcDogJzUwJScsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG59O1xuXG5jb25zdCB0b3BNb2RhbFN0eWxlcyA9IHtcbiAgdG9wOiAnNDBweCcsXG4gIGxlZnQ6ICdhdXRvJyxcbiAgcmlnaHQ6ICc0MHB4JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBib3JkZXJSYWRpdXM6ICcxMnB4JyxcbiAgcGFkZGluZzogJzE2cHggMjRweCAyNHB4IDI0cHgnLFxufTtcblxuY29uc3QgTW9kYWxDb250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHdpZHRoOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodFxuICAgICAgICAgID8gWyczMDBweCcsICczNTBweCcsICczNTBweCddXG4gICAgICAgICAgOiBbJzMwMHB4JywgJzQwMHB4JywgJzQ0NnB4J10sXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gICAgfSlcbik7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZChGbGV4Um93KSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpbjogJzE1cHggMCAyNHB4IDAnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkQ2FwdGlvbiA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZENhcHRpb25UZXh0ID0gc3R5bGVkKFN1YnRpdGxlVGV4dCkoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBmb250V2VpZ2h0OiBbNjAwLCA2MDAsIDcwMF0sXG4gICAgZm9udFNpemU6IFsnMjBweCcsICcyNHB4JywgJzI0cHgnXSxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZEluZm9ybWF0aW9uVGV4dCA9IHN0eWxlZChCb2R5VGV4dCk8TW9kYWxQb3NpdGlvblByb3BzPihcbiAgKHsgdGhlbWUsIHBvc2l0aW9uIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgICB9KVxuKTtcblxuY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxNb2RhbFBvc2l0aW9uUHJvcHM+KFxuICAoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgbWFyZ2luVG9wOlxuICAgICAgICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICc0MHB4JyA6IFsnMzJweCcsICczMnB4JywgJzU2cHgnXSxcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdycsICdyb3cnXSxcbiAgICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoSW5wdXQpKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAnOmZvY3VzJzoge1xuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBDaGVja0JveENvbnRhaW5lciA9IHN0eWxlZC5kaXY8TW9kYWxQb3NpdGlvblByb3BzPigoeyB0aGVtZSwgcG9zaXRpb24gfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW46ICBwb3NpdGlvbiA9PT0gTW9kYWxQb3NpdGlvbi5Ub3BSaWdodCA/ICc0MHB4IDAgLTIwcHggMCcgOiBbJzQwcHggMCAtMjBweCAwJywnNDBweCAwIC0yMHB4IDAnLCc3MnB4IDAgLTQwcHggMCddXG4gIH0pXG4pO1xuXG5jb25zdCBoYW5kbGVUaGVtZSA9ICh0aGVtZSwgcG9zaXRpb24pID0+IHtcbiAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICBvdmVybGF5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZE92ZXJsYXksXG4gICAgICB6SW5kZXg6IDE1LFxuICAgIH0sXG4gICAgY29udGVudDpcbiAgICAgICAgcG9zaXRpb24gPT09IE1vZGFsUG9zaXRpb24uVG9wUmlnaHRcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAuLi50b3BNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAuLi5jZW50ZXJNb2RhbFN0eWxlcyxcbiAgICAgICAgICAgICAgLi4ue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIG1vZGFsU3R5bGU7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBVc2VySW5wdXRXaW5kb3cgPSAoe1xuICBpc09wZW4sXG4gIHBvc2l0aW9uLFxuICB0aXRsZSxcbiAgd2l0aEhlYWRlcixcbiAgaGVhZGVyTG9nbyxcbiAgYm9keUltZyxcbiAgaW5mb3JtYXRpb24sXG4gIGNvbmZpcm1MYWJlbCxcbiAgY29uZmlybUNvbG9yLFxuICBvbkNvbmZpcm0sXG4gIGRpc21pc3NMYWJlbCxcbiAgc2hvdWxkQ2xvc2VPbkVzYyxcbiAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayxcbiAgb25EaXNtaXNzLFxuICB0aGVtZU1vZGUsXG4gIGlucHV0VHlwZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHJlcXVpcmVkID0gZmFsc2UsXG4gIGlucHV0TGFiZWwsXG4gIGNoZWNrYm94TGFiZWwsXG4gIHZhbGlkYXRpb25TZXR0aW5nLFxuICBwb3J0YWxDbGFzcyA9ICdwb3J0YWwnLFxufTogVXNlcklucHV0V2luZG93U2NlbmVQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZm9ybUVycm9yLCBzZXRGb3JtRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihpc09wZW4pO1xuXG4gIHVzZUVzY2FwZUtleSgoKSA9PiBzaG91bGRDbG9zZU9uRXNjICYmIHNldFNob3dNb2RhbChmYWxzZSkpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrICYmIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVnZXhNYXRjaGVkID0gKHZhbCkgPT4gISF2YWwgJiYgdmFsaWRhdGlvblNldHRpbmc/LnJlZ2V4cFBhdHRlcm4udGVzdCh2YWwpO1xuXG4gIGNvbnN0IGhhbmRsZUVudGVyS2V5RG93biA9IChlKSA9PiB7XG4gICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbCAmJiAhZm9ybUVycm9yKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgb25Db25maXJtKHZhbCwgaXNDaGVja2VkKVxuICAgICAgfVxuICAgIH0gZWxzZSByZXR1cm47XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoKSA9PiB7XG4gICAgb25Db25maXJtKHZhbHVlLCBpc0NoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgcGFzc1ZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYodmFsaWRhdGlvblNldHRpbmc/LnJlZ2V4cFBhdHRlcm4gJiYgdmFsaWRhdGlvblNldHRpbmc/LnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAhIXBhc3NWYWwgJiYgcmVnZXhNYXRjaGVkKHBhc3NWYWwpXG4gICAgICAgICAgPyBzZXRGb3JtRXJyb3IobnVsbClcbiAgICAgICAgICA6IHNldEZvcm1FcnJvcihgJHt2YWxpZGF0aW9uU2V0dGluZz8udmFsaWRhdGlvbk1lc3NhZ2V9YCk7XG4gICAgfVxuICAgIHNldFZhbHVlKHBhc3NWYWwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrQm94ID0gKCkgPT4ge1xuICAgIHNldElzQ2hlY2tlZCghaXNDaGVja2VkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd01vZGFsICYmIChcbiAgICAgICAgPFJlYWN0TW9kYWxcbiAgICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICBzdHlsZT17aGFuZGxlVGhlbWUodGhlbWUsIHBvc2l0aW9uKX1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaXNtaXNzfVxuICAgICAgICAgIHNob3VsZENsb3NlT25Fc2NcbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrXG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXtwb3J0YWxDbGFzc31cbiAgICAgICAgPlxuICAgICAgICAgIDxNb2RhbENvbnRhaW5lciBwb3NpdGlvbj17cG9zaXRpb259IHJlZj17cmVmfT5cbiAgICAgICAgICAgIHt3aXRoSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyXG4gICAgICAgICAgICAgICAgdGhlbWVNb2RlPXt0aGVtZU1vZGV9XG4gICAgICAgICAgICAgICAgaGVhZGVyTG9nbz17aGVhZGVyTG9nb31cbiAgICAgICAgICAgICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Ym9keUltZyAmJiA8SW1hZ2VXcmFwcGVyPntib2R5SW1nfTwvSW1hZ2VXcmFwcGVyPn1cbiAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgIDxTdHlsZWRDYXB0aW9uVGV4dCBzaXplPXsxfSBzY2FsZT1cImxnXCI+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L1N0eWxlZENhcHRpb25UZXh0PlxuICAgICAgICAgICAgPC9TdHlsZWRDYXB0aW9uPlxuICAgICAgICAgICAgPEZsZXhSb3cganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8U3R5bGVkSW5mb3JtYXRpb25UZXh0IHBvc2l0aW9uPXtwb3NpdGlvbn0gc2l6ZT17M30gc2NhbGU9XCJzbVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmZvcm1hdGlvblRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICAgICAgICA8RmxleFJvdz5cbiAgICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVFbnRlcktleURvd259XG4gICAgICAgICAgICAgICAgbGFiZWw9ezxCb2R5VGV4dCBzaXplPXsyfT57aW5wdXRMYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgZXJyb3I9eyEhZm9ybUVycm9yfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UeXBlPXtpbnB1dFR5cGV9XG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHQ9e2Zvcm1FcnJvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleFJvdz5cbiAgICAgICAgICAgIHtjaGVja2JveExhYmVsICYmIChcbiAgICAgICAgICAgICAgPENoZWNrQm94Q29udGFpbmVyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17Y2hlY2tib3hMYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgIGNoZWNrYm94Rm9udFNpemU9e0NoZWNrYm94Rm9udFNpemUuc21hbGx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DaGVja0JveENvbnRhaW5lcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgICAgICAgIGdhcD17JzE2cHgnfVxuICAgICAgICAgICAgICBqdXN0aWZ5PXsnc3BhY2UtYmV0d2Vlbid9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9eydzZWNvbmRhcnlCbHVlJ30gb25DbGljaz17b25EaXNtaXNzfT5cbiAgICAgICAgICAgICAgICAgIHtkaXNtaXNzTGFiZWx9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj17Y29uZmlybUNvbG9yID09PSAncmVkJyA/ICdwcmltYXJ5UmVkJyA6ICdwcmltYXJ5Qmx1ZSd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25TdWJtaXR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlID8gISFmb3JtRXJyb3IgOiB0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0J1dHRvbnNDb250YWluZXI+XG4gICAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cbiAgICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnB1dFdpbmRvdztcbiJdfQ==