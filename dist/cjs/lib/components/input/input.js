"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.InputRef = exports.InputValidationType = exports.LabelFontSize = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var form_field_1 = tslib_1.__importStar(require("../form-field/form-field"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var LabelFontSize;
(function (LabelFontSize) {
    LabelFontSize["default"] = "default";
    LabelFontSize["small"] = "small";
})(LabelFontSize = exports.LabelFontSize || (exports.LabelFontSize = {}));
var getThemeColorByError = function (error) {
    if (error == null || !error) {
        return 'fillSecondary';
    }
    return 'contentRed';
};
var InputContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, error = _a.error, monotype = _a.monotype, _b = _a.height, height = _b === void 0 ? '36' : _b;
    return (tslib_1.__assign(tslib_1.__assign({ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', borderRadius: theme.borderRadius.base, color: theme.styleguideColors.contentPrimary, background: theme.styleguideColors.fillSecondary, caretColor: theme.styleguideColors.fillPrimaryRed, fontFamily: monotype
            ? theme.typography.fontFamily.mono
            : theme.typography.fontFamily.primary, fontSize: '0.875rem', lineHeight: (0, match_size_1.matchSize)({ '36': '20px', '40': '20px' }, height), height: (0, match_size_1.matchSize)({ '36': '36px', '40': '40px' }, height), path: {
            fill: theme.styleguideColors[getThemeColorByError(error)],
        } }, (error && {
        border: "1px solid ".concat(theme.styleguideColors.borderRed),
    })), (disabled && {
        opacity: 0.5,
        color: theme.styleguideColors.contentTertiary,
    })));
});
var StyledInput = styled_components_1.default.input(function (_a) {
    var theme = _a.theme;
    return ({
        color: 'inherit',
        background: 'inherit',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        border: 'none',
        width: '100%',
        padding: 0,
        '&[type=number]:focus, &[type=number]:blur': {
            '-moz-appearance': 'number-input',
        },
        '&[type=number]': {
            '-moz-appearance': 'textfield',
            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                margin: 0,
                '-webkit-appearance': 'none',
                'pointer-events': 'none',
            },
        },
        '&::placeholder': {
            color: theme.styleguideColors.contentSecondary,
        },
    });
});
var PrefixContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        marginRight: 16,
        color: theme.styleguideColors.contentSecondary,
        path: {
            fill: theme.styleguideColors.contentSecondary,
        },
    });
});
var SuffixContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        marginLeft: 16,
    });
});
var SuffixTextContainer = (0, styled_components_1.default)(SuffixContainer)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentSecondary,
    });
});
var InputValidationType;
(function (InputValidationType) {
    InputValidationType["PositiveInteger"] = "positive_int";
    InputValidationType["CSPR"] = "cspr";
    InputValidationType["email"] = "email";
    InputValidationType["password"] = "password";
})(InputValidationType = exports.InputValidationType || (exports.InputValidationType = {}));
exports.InputRef = react_1.default.forwardRef(function InputRef(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledInput, tslib_1.__assign({}, props, { ref: ref }));
});
function Input(_a) {
    var _b;
    var id = _a.id, className = _a.className, style = _a.style, disabled = _a.disabled, monotype = _a.monotype, height = _a.height, label = _a.label, rightLabel = _a.rightLabel, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, suffixText = _a.suffixText, required = _a.required, error = _a.error, validationType = _a.validationType, validationText = _a.validationText, onFocus = _a.onFocus, name = _a.name, _c = _a.labelFontSize, labelFontSize = _c === void 0 ? LabelFontSize.default : _c, restProps = tslib_1.__rest(_a, ["id", "className", "style", "disabled", "monotype", "height", "label", "rightLabel", "prefixIcon", "suffixIcon", "suffixText", "required", "error", "validationType", "validationText", "onFocus", "name", "labelFontSize"]);
    var validationProps = validationType == null
        ? undefined
        : (_b = {},
            _b[InputValidationType.CSPR] = {
                type: 'number',
                min: '0',
                max: '0',
                step: '0',
            },
            _b[InputValidationType.PositiveInteger] = {
                type: 'number',
                min: '1',
                max: '1',
                step: '0',
            },
            _b[InputValidationType.email] = {
                type: 'email',
            },
            _b[InputValidationType.password] = {
                type: 'password',
            },
            _b)[validationType];
    var handleFocus = function (event) {
        event.target.select();
        onFocus && onFocus(event);
    };
    if (error) {
        suffixIcon = (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: "assets/icons/ic-error.svg" });
    }
    return ((0, jsx_runtime_1.jsx)(form_field_1.default, tslib_1.__assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? form_field_1.FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled, labelFontSize: labelFontSize }, { children: (0, jsx_runtime_1.jsxs)(InputContainer, tslib_1.__assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && (0, jsx_runtime_1.jsx)(PrefixContainer, { children: prefixIcon }), (0, jsx_runtime_1.jsx)(exports.InputRef, tslib_1.__assign({ title: "", disabled: disabled, onFocus: handleFocus, name: name }, validationProps, restProps)), suffixIcon && (0, jsx_runtime_1.jsx)(SuffixContainer, { children: suffixIcon }), suffixText && (0, jsx_runtime_1.jsx)(SuffixTextContainer, { children: suffixText })] })) })));
}
exports.Input = Input;
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQXlDO0FBQ3pDLGdGQUF1QztBQUN2QyxxREFBbUQ7QUFDbkQsNkVBQXNFO0FBQ3RFLDBFQUEyQztBQUUzQyxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsb0NBQXFCLENBQUE7SUFDckIsZ0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQWU7SUFDM0MsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzNCLE9BQU8sZUFBZSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUNsQyxVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGNBQWEsRUFBYixNQUFNLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEscUNBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLEtBQUssRUFDcEIsY0FBYyxFQUFFLGVBQWUsRUFDL0IsVUFBVSxFQUFFLFFBQVEsRUFDcEIsT0FBTyxFQUFFLFFBQVEsRUFDakIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDNUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQ2hELFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMs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QUFlLGNBQUUsVUFBVSxHQUFtQixFQUU3RCxVQUFVLElBQUksdUJBQUMsbUJBQW1CLGNBQUUsVUFBVSxHQUF1QixLQUN2RCxJQUNQLENBQ2IsQ0FBQztBQUNKLENBQUM7QUFwRkQsc0JBb0ZDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgRm9ybUZpZWxkLCB7IEZvcm1GaWVsZFN0YXR1cyB9IGZyb20gJy4uL2Zvcm0tZmllbGQvZm9ybS1maWVsZCc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5cbmV4cG9ydCBlbnVtIExhYmVsRm9udFNpemUge1xuICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICdzbWFsbCcgPSAnc21hbGwnLFxufVxuXG5jb25zdCBnZXRUaGVtZUNvbG9yQnlFcnJvciA9IChlcnJvcj86IGJvb2xlYW4pID0+IHtcbiAgaWYgKGVycm9yID09IG51bGwgfHwgIWVycm9yKSB7XG4gICAgcmV0dXJuICdmaWxsU2Vjb25kYXJ5JztcbiAgfVxuXG4gIHJldHVybiAnY29udGVudFJlZCc7XG59O1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jyk8SW5wdXRQcm9wcz4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgZXJyb3IsIG1vbm90eXBlLCBoZWlnaHQgPSAnMzYnIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgY2FyZXRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICBmb250RmFtaWx5OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub1xuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzAuODc1cmVtJyxcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoeyAnMzYnOiAnMjBweCcsICc0MCc6ICcyMHB4JyB9LCBoZWlnaHQpLFxuICAgIGhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzM2cHgnLCAnNDAnOiAnNDBweCcgfSwgaGVpZ2h0KSxcblxuICAgIHBhdGg6IHtcbiAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvckJ5RXJyb3IoZXJyb3IpXSxcbiAgICB9LFxuXG4gICAgLi4uKGVycm9yICYmIHtcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYm9yZGVyUmVkfWAsXG4gICAgfSksXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXQ8SW5wdXRQcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBwYWRkaW5nOiAwLFxuICAnJlt0eXBlPW51bWJlcl06Zm9jdXMsICZbdHlwZT1udW1iZXJdOmJsdXInOiB7XG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdudW1iZXItaW5wdXQnLFxuICB9LFxuICAnJlt0eXBlPW51bWJlcl0nOiB7XG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICd0ZXh0ZmllbGQnLFxuICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogMTYsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN1ZmZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogMTYsXG59KSk7XG5cbmNvbnN0IFN1ZmZpeFRleHRDb250YWluZXIgPSBzdHlsZWQoU3VmZml4Q29udGFpbmVyKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxufSkpO1xuXG5leHBvcnQgZW51bSBJbnB1dFZhbGlkYXRpb25UeXBlIHtcbiAgUG9zaXRpdmVJbnRlZ2VyID0gJ3Bvc2l0aXZlX2ludCcsXG4gIENTUFIgPSAnY3NwcicsXG4gIGVtYWlsID0gJ2VtYWlsJyxcbiAgcGFzc3dvcmQgPSAncGFzc3dvcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgcmVmPzogUmVhY3QuRm9yd2FyZGVkUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvbkNoYW5nZT86IChldjogYW55KSA9PiB2b2lkO1xuICBvbkZvY3VzPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uQmx1cj86IChldjogYW55KSA9PiB2b2lkO1xuICBvbktleURvd24/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgaGVpZ2h0PzogJzM2JyB8ICc0MCc7XG4gIHN0ZXA/OiBzdHJpbmc7XG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBsYWJlbEZvbnRTaXplPzogTGFiZWxGb250U2l6ZTtcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcHJlZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xuICBzdWZmaXhUZXh0Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBlcnJvcj86IGJvb2xlYW47XG4gIHZhbGlkYXRpb25UeXBlPzogSW5wdXRWYWxpZGF0aW9uVHlwZTtcbiAgdmFsaWRhdGlvblRleHQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG50eXBlIFJlZiA9IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBJbnB1dFJlZiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBJbnB1dFByb3BzPihmdW5jdGlvbiBJbnB1dFJlZihcbiAgcHJvcHM6IElucHV0UHJvcHMsXG4gIHJlZlxuKSB7XG4gIHJldHVybiA8U3R5bGVkSW5wdXQgey4uLnByb3BzfSByZWY9e3JlZn0gLz47XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIElucHV0KHtcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgc3R5bGUsXG4gIGRpc2FibGVkLFxuICBtb25vdHlwZSxcbiAgaGVpZ2h0LFxuICBsYWJlbCxcbiAgcmlnaHRMYWJlbCxcbiAgcHJlZml4SWNvbixcbiAgc3VmZml4SWNvbixcbiAgc3VmZml4VGV4dCxcbiAgcmVxdWlyZWQsXG4gIGVycm9yLFxuICB2YWxpZGF0aW9uVHlwZSxcbiAgdmFsaWRhdGlvblRleHQsXG4gIG9uRm9jdXMsXG4gIG5hbWUsXG4gIGxhYmVsRm9udFNpemUgPSBMYWJlbEZvbnRTaXplLmRlZmF1bHQsXG4gIC4uLnJlc3RQcm9wc1xufTogSW5wdXRQcm9wcykge1xuICBjb25zdCB2YWxpZGF0aW9uUHJvcHMgPVxuICAgIHZhbGlkYXRpb25UeXBlID09IG51bGxcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHtcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5DU1BSXToge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBtaW46ICcwJyxcbiAgICAgICAgICAgIG1heDogJzAnLFxuICAgICAgICAgICAgc3RlcDogJzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuUG9zaXRpdmVJbnRlZ2VyXToge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBtaW46ICcxJyxcbiAgICAgICAgICAgIG1heDogJzEnLFxuICAgICAgICAgICAgc3RlcDogJzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuZW1haWxdOiB7XG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUucGFzc3dvcmRdOiB7XG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1bdmFsaWRhdGlvblR5cGVdO1xuXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICAgIG9uRm9jdXMgJiYgb25Gb2N1cyhldmVudCk7XG4gIH07XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgc3VmZml4SWNvbiA9IDxTdmdJY29uIHNyYz1cImFzc2V0cy9pY29ucy9pYy1lcnJvci5zdmdcIiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1GaWVsZFxuICAgICAgaWQ9e2lkfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICByaWdodExhYmVsPXtyaWdodExhYmVsfVxuICAgICAgc3RhdHVzPXtlcnJvciA/IEZvcm1GaWVsZFN0YXR1cy5FcnJvciA6IHVuZGVmaW5lZH1cbiAgICAgIHN0YXR1c1RleHQ9e3ZhbGlkYXRpb25UZXh0fVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgbGFiZWxGb250U2l6ZT17bGFiZWxGb250U2l6ZX1cbiAgICA+XG4gICAgICA8SW5wdXRDb250YWluZXIgbW9ub3R5cGU9e21vbm90eXBlfSBlcnJvcj17ZXJyb3J9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAge3ByZWZpeEljb24gJiYgPFByZWZpeENvbnRhaW5lcj57cHJlZml4SWNvbn08L1ByZWZpeENvbnRhaW5lcj59XG5cbiAgICAgICAgPElucHV0UmVmXG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHsuLi52YWxpZGF0aW9uUHJvcHN9XG4gICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgLz5cblxuICAgICAgICB7c3VmZml4SWNvbiAmJiA8U3VmZml4Q29udGFpbmVyPntzdWZmaXhJY29ufTwvU3VmZml4Q29udGFpbmVyPn1cblxuICAgICAgICB7c3VmZml4VGV4dCAmJiA8U3VmZml4VGV4dENvbnRhaW5lcj57c3VmZml4VGV4dH08L1N1ZmZpeFRleHRDb250YWluZXI+fVxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cbiAgICA8L0Zvcm1GaWVsZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=