import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { matchSize } from '../../utils/match-size';
import FormField, { FormFieldStatus } from '../form-field/form-field';
import SvgIcon from '../svg-icon/svg-icon';
export var LabelFontSize;
(function (LabelFontSize) {
    LabelFontSize["default"] = "default";
    LabelFontSize["small"] = "small";
})(LabelFontSize || (LabelFontSize = {}));
var getThemeColorByError = function (error) {
    if (error == null || !error) {
        return 'fillSecondary';
    }
    return 'contentRed';
};
var InputContainer = styled('div')(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, error = _a.error, monotype = _a.monotype, _b = _a.height, height = _b === void 0 ? '36' : _b;
    return (__assign(__assign({ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', borderRadius: theme.borderRadius.base, color: theme.styleguideColors.contentPrimary, background: theme.styleguideColors.fillSecondary, caretColor: theme.styleguideColors.fillPrimaryRed, fontFamily: monotype
            ? theme.typography.fontFamily.mono
            : theme.typography.fontFamily.primary, fontSize: '0.875rem', lineHeight: matchSize({ '36': '20px', '40': '20px' }, height), height: matchSize({ '36': '36px', '40': '40px' }, height), path: {
            fill: theme.styleguideColors[getThemeColorByError(error)],
        } }, (error && {
        border: "1px solid ".concat(theme.styleguideColors.borderRed),
    })), (disabled && {
        opacity: 0.5,
        color: theme.styleguideColors.contentTertiary,
    })));
});
var StyledInput = styled('input')(function (_a) {
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
var PrefixContainer = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        marginRight: 16,
        color: theme.styleguideColors.contentSecondary,
        path: {
            fill: theme.styleguideColors.contentSecondary,
        },
    });
});
var SuffixContainer = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        marginLeft: 16,
    });
});
var SuffixTextContainer = styled(SuffixContainer)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentSecondary,
    });
});
export var InputValidationType;
(function (InputValidationType) {
    InputValidationType["PositiveInteger"] = "positive_int";
    InputValidationType["CSPR"] = "cspr";
    InputValidationType["email"] = "email";
    InputValidationType["password"] = "password";
})(InputValidationType || (InputValidationType = {}));
export function Input(_a) {
    var _b;
    var id = _a.id, className = _a.className, style = _a.style, disabled = _a.disabled, monotype = _a.monotype, height = _a.height, label = _a.label, rightLabel = _a.rightLabel, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, suffixText = _a.suffixText, required = _a.required, error = _a.error, validationType = _a.validationType, validationText = _a.validationText, onFocus = _a.onFocus, _c = _a.labelFontSize, labelFontSize = _c === void 0 ? LabelFontSize.default : _c, restProps = __rest(_a, ["id", "className", "style", "disabled", "monotype", "height", "label", "rightLabel", "prefixIcon", "suffixIcon", "suffixText", "required", "error", "validationType", "validationText", "onFocus", "labelFontSize"]);
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
        suffixIcon = _jsx(SvgIcon, { src: "assets/icons/ic-error.svg" });
    }
    return (_jsx(FormField, __assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled, labelFontSize: labelFontSize }, { children: _jsxs(InputContainer, __assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && _jsx(PrefixContainer, { children: prefixIcon }), _jsx(StyledInput, __assign({ title: "", disabled: disabled, onFocus: handleFocus }, validationProps, restProps)), suffixIcon && _jsx(SuffixContainer, { children: suffixIcon }), suffixText && _jsx(SuffixTextContainer, { children: suffixText })] })) })));
}
export default Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sU0FBUyxFQUFFLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFFRCxJQUFNLG9CQUFvQixHQUFHLFVBQUMsS0FBZTtJQUMzQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDM0IsT0FBTyxlQUFlLENBQUM7S0FDeEI7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQ2xDLFVBQUMsRUFBbUQ7UUFBakQsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsY0FBYSxFQUFiLE1BQU0sbUJBQUcsSUFBSSxLQUFBO0lBQU8sT0FBQSxxQkFDdkQsT0FBTyxFQUFFLE1BQU0sRUFDZixhQUFhLEVBQUUsS0FBSyxFQUNwQixjQUFjLEVBQUUsZUFBZSxFQUMvQixVQUFVLEVBQUUsUUFBUSxFQUNwQixPQUFPLEVBQUUsUUFBUSxFQUNqQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FB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eyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IEZvcm1GaWVsZCwge0Zvcm1GaWVsZFN0YXR1c30gZnJvbSAnLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuZXhwb3J0IGVudW0gTGFiZWxGb250U2l6ZSB7XG4gICAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxuICAgICdzbWFsbCcgPSAnc21hbGwnLFxufVxuXG5jb25zdCBnZXRUaGVtZUNvbG9yQnlFcnJvciA9IChlcnJvcj86IGJvb2xlYW4pID0+IHtcbiAgaWYgKGVycm9yID09IG51bGwgfHwgIWVycm9yKSB7XG4gICAgcmV0dXJuICdmaWxsU2Vjb25kYXJ5JztcbiAgfVxuXG4gIHJldHVybiAnY29udGVudFJlZCc7XG59O1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jyk8SW5wdXRQcm9wcz4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgZXJyb3IsIG1vbm90eXBlLCBoZWlnaHQgPSAnMzYnIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgY2FyZXRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICBmb250RmFtaWx5OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub1xuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzAuODc1cmVtJyxcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoeyAnMzYnOiAnMjBweCcsICc0MCc6ICcyMHB4JyB9LCBoZWlnaHQpLFxuICAgIGhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzM2cHgnLCAnNDAnOiAnNDBweCcgfSwgaGVpZ2h0KSxcblxuICAgIHBhdGg6IHtcbiAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvckJ5RXJyb3IoZXJyb3IpXSxcbiAgICB9LFxuXG4gICAgLi4uKGVycm9yICYmIHtcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYm9yZGVyUmVkfWAsXG4gICAgfSksXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoJ2lucHV0Jyk8SW5wdXRQcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBwYWRkaW5nOiAwLFxuICAnJlt0eXBlPW51bWJlcl06Zm9jdXMsICZbdHlwZT1udW1iZXJdOmJsdXInOiB7XG4gICAgICctbW96LWFwcGVhcmFuY2UnOiAnbnVtYmVyLWlucHV0JyxcbiAgfSxcbiAgJyZbdHlwZT1udW1iZXJdJzoge1xuICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICd0ZXh0ZmllbGQnLFxuICAgICAnJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbic6IHtcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgIH0sXG4gIH0sXG4gICcmOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IFByZWZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luUmlnaHQ6IDE2LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICBwYXRoOiB7XG4gICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBTdWZmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpbkxlZnQ6IDE2LFxufSkpO1xuXG5jb25zdCBTdWZmaXhUZXh0Q29udGFpbmVyID0gc3R5bGVkKFN1ZmZpeENvbnRhaW5lcikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbn0pKTtcblxuZXhwb3J0IGVudW0gSW5wdXRWYWxpZGF0aW9uVHlwZSB7XG4gIFBvc2l0aXZlSW50ZWdlciA9ICdwb3NpdGl2ZV9pbnQnLFxuICBDU1BSID0gJ2NzcHInLFxuICBlbWFpbCA9ICdlbWFpbCcsXG4gIHBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBtb25vdHlwZT86IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb25DaGFuZ2U/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25Gb2N1cz86IChldjogYW55KSA9PiB2b2lkO1xuICBvbkJsdXI/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25LZXlEb3duPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIGhlaWdodD86ICczNicgfCAnNDAnO1xuICBtaW4/OiBzdHJpbmc7XG4gIG1heD86IHN0cmluZztcbiAgc3RlcD86IHN0cmluZztcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIGxhYmVsRm9udFNpemU/OiBMYWJlbEZvbnRTaXplO1xuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBwcmVmaXhJY29uPzogUmVhY3ROb2RlIHwgbnVsbDtcbiAgc3VmZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeFRleHQ/OiBzdHJpbmcgfCBudWxsO1xuXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgZXJyb3I/OiBib29sZWFuO1xuICB2YWxpZGF0aW9uVHlwZT86IElucHV0VmFsaWRhdGlvblR5cGU7XG4gIHZhbGlkYXRpb25UZXh0Pzogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElucHV0KHtcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgc3R5bGUsXG4gIGRpc2FibGVkLFxuICBtb25vdHlwZSxcbiAgaGVpZ2h0LFxuICBsYWJlbCxcbiAgcmlnaHRMYWJlbCxcbiAgcHJlZml4SWNvbixcbiAgc3VmZml4SWNvbixcbiAgc3VmZml4VGV4dCxcbiAgcmVxdWlyZWQsXG4gIGVycm9yLFxuICB2YWxpZGF0aW9uVHlwZSxcbiAgdmFsaWRhdGlvblRleHQsXG4gIG9uRm9jdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsRm9udFNpemUgPSBMYWJlbEZvbnRTaXplLmRlZmF1bHQsXG4gIC4uLnJlc3RQcm9wc1xufTogSW5wdXRQcm9wcykge1xuICBjb25zdCB2YWxpZGF0aW9uUHJvcHMgPVxuICAgIHZhbGlkYXRpb25UeXBlID09IG51bGxcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHtcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5DU1BSXToge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBtaW46ICcwJyxcbiAgICAgICAgICAgIG1heDogJzAnLFxuICAgICAgICAgICAgc3RlcDogJzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuUG9zaXRpdmVJbnRlZ2VyXToge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBtaW46ICcxJyxcbiAgICAgICAgICAgIG1heDogJzEnLFxuICAgICAgICAgICAgc3RlcDogJzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuZW1haWxdOiB7XG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUucGFzc3dvcmRdOiB7XG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1bdmFsaWRhdGlvblR5cGVdO1xuXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICAgIG9uRm9jdXMgJiYgb25Gb2N1cyhldmVudCk7XG4gIH07XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgc3VmZml4SWNvbiA9IDxTdmdJY29uIHNyYz1cImFzc2V0cy9pY29ucy9pYy1lcnJvci5zdmdcIiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1GaWVsZFxuICAgICAgaWQ9e2lkfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICByaWdodExhYmVsPXtyaWdodExhYmVsfVxuICAgICAgc3RhdHVzPXtlcnJvciA/IEZvcm1GaWVsZFN0YXR1cy5FcnJvciA6IHVuZGVmaW5lZH1cbiAgICAgIHN0YXR1c1RleHQ9e3ZhbGlkYXRpb25UZXh0fVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgbGFiZWxGb250U2l6ZT17bGFiZWxGb250U2l6ZX1cbiAgICA+XG4gICAgICA8SW5wdXRDb250YWluZXIgbW9ub3R5cGU9e21vbm90eXBlfSBlcnJvcj17ZXJyb3J9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAge3ByZWZpeEljb24gJiYgPFByZWZpeENvbnRhaW5lcj57cHJlZml4SWNvbn08L1ByZWZpeENvbnRhaW5lcj59XG5cbiAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgICAgICB7Li4udmFsaWRhdGlvblByb3BzfVxuICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3N1ZmZpeEljb24gJiYgPFN1ZmZpeENvbnRhaW5lcj57c3VmZml4SWNvbn08L1N1ZmZpeENvbnRhaW5lcj59XG5cbiAgICAgICAge3N1ZmZpeFRleHQgJiYgPFN1ZmZpeFRleHRDb250YWluZXI+e3N1ZmZpeFRleHR9PC9TdWZmaXhUZXh0Q29udGFpbmVyPn1cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgPC9Gb3JtRmllbGQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19