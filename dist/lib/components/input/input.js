import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
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
var StyledInput = styled.input(function (_a) {
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
export var InputRef = React.forwardRef(function InputRef(props, ref) {
    return _jsx(StyledInput, __assign({}, props, { ref: ref }));
});
export function Input(_a) {
    var _b;
    var id = _a.id, className = _a.className, style = _a.style, disabled = _a.disabled, monotype = _a.monotype, height = _a.height, label = _a.label, rightLabel = _a.rightLabel, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, suffixText = _a.suffixText, required = _a.required, error = _a.error, validationType = _a.validationType, validationText = _a.validationText, onFocus = _a.onFocus, name = _a.name, _c = _a.labelFontSize, labelFontSize = _c === void 0 ? LabelFontSize.default : _c, restProps = __rest(_a, ["id", "className", "style", "disabled", "monotype", "height", "label", "rightLabel", "prefixIcon", "suffixIcon", "suffixText", "required", "error", "validationType", "validationText", "onFocus", "name", "labelFontSize"]);
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
    return (_jsx(FormField, __assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled, labelFontSize: labelFontSize }, { children: _jsxs(InputContainer, __assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && _jsx(PrefixContainer, { children: prefixIcon }), _jsx(InputRef, __assign({ title: "", disabled: disabled, onFocus: handleFocus, name: name, "aria-required": !!required, "aria-labelledby": id }, validationProps, restProps)), suffixIcon && _jsx(SuffixContainer, { children: suffixIcon }), suffixText && _jsx(SuffixTextContainer, { children: suffixText })] })) })));
}
export default Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxLQUFvQixNQUFNLE9BQU8sQ0FBQztBQUN6QyxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxTQUFTLEVBQUUsRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUUzQyxNQUFNLENBQU4sSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLG9DQUFxQixDQUFBO0lBQ3JCLGdDQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQUVELElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFlO0lBQzNDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDbEMsVUFBQyxFQUFtRDtRQUFqRCxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxjQUFhLEVBQWIsTUFBTSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLHFCQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLGNBQWMsRUFBRSxlQUFlLEVBQy9CLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsS0FB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TyxFQUFFLFdBQVcsRUFDcEIsSUFBSSxFQUFFLElBQUksbUJBQ0ssQ0FBQyxDQUFDLFFBQVEscUJBQ1IsRUFBRSxJQUNmLGVBQWUsRUFDZixTQUFTLEVBQ2IsRUFFRCxVQUFVLElBQUksS0FBQyxlQUFlLGNBQUUsVUFBVSxHQUFtQixFQUU3RCxVQUFVLElBQUksS0FBQyxtQkFBbUIsY0FBRSxVQUFVLEdBQXVCLEtBQ3ZELElBQ1AsQ0FDYixDQUFDO0FBQ0osQ0FBQztBQUVELGVBQWUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgRm9ybUZpZWxkLCB7IEZvcm1GaWVsZFN0YXR1cyB9IGZyb20gJy4uL2Zvcm0tZmllbGQvZm9ybS1maWVsZCc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5cbmV4cG9ydCBlbnVtIExhYmVsRm9udFNpemUge1xuICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICdzbWFsbCcgPSAnc21hbGwnLFxufVxuXG5jb25zdCBnZXRUaGVtZUNvbG9yQnlFcnJvciA9IChlcnJvcj86IGJvb2xlYW4pID0+IHtcbiAgaWYgKGVycm9yID09IG51bGwgfHwgIWVycm9yKSB7XG4gICAgcmV0dXJuICdmaWxsU2Vjb25kYXJ5JztcbiAgfVxuXG4gIHJldHVybiAnY29udGVudFJlZCc7XG59O1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jyk8SW5wdXRQcm9wcz4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgZXJyb3IsIG1vbm90eXBlLCBoZWlnaHQgPSAnMzYnIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogJzAgMTZweCcsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4gICAgY2FyZXRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICBmb250RmFtaWx5OiBtb25vdHlwZVxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub1xuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcbiAgICBmb250U2l6ZTogJzAuODc1cmVtJyxcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoeyAnMzYnOiAnMjBweCcsICc0MCc6ICcyMHB4JyB9LCBoZWlnaHQpLFxuICAgIGhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzM2cHgnLCAnNDAnOiAnNDBweCcgfSwgaGVpZ2h0KSxcblxuICAgIHBhdGg6IHtcbiAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvckJ5RXJyb3IoZXJyb3IpXSxcbiAgICB9LFxuXG4gICAgLi4uKGVycm9yICYmIHtcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYm9yZGVyUmVkfWAsXG4gICAgfSksXG5cbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXQ8SW5wdXRQcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6ICdpbmhlcml0JyxcbiAgYmFja2dyb3VuZDogJ2luaGVyaXQnLFxuICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBwYWRkaW5nOiAwLFxuICAnJlt0eXBlPW51bWJlcl06Zm9jdXMsICZbdHlwZT1udW1iZXJdOmJsdXInOiB7XG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICdudW1iZXItaW5wdXQnLFxuICB9LFxuICAnJlt0eXBlPW51bWJlcl0nOiB7XG4gICAgJy1tb3otYXBwZWFyYW5jZSc6ICd0ZXh0ZmllbGQnLFxuICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogMTYsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN1ZmZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogMTYsXG59KSk7XG5cbmNvbnN0IFN1ZmZpeFRleHRDb250YWluZXIgPSBzdHlsZWQoU3VmZml4Q29udGFpbmVyKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxufSkpO1xuXG5leHBvcnQgZW51bSBJbnB1dFZhbGlkYXRpb25UeXBlIHtcbiAgUG9zaXRpdmVJbnRlZ2VyID0gJ3Bvc2l0aXZlX2ludCcsXG4gIENTUFIgPSAnY3NwcicsXG4gIGVtYWlsID0gJ2VtYWlsJyxcbiAgcGFzc3dvcmQgPSAncGFzc3dvcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgcmVmPzogUmVhY3QuRm9yd2FyZGVkUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvbkNoYW5nZT86IChldjogYW55KSA9PiB2b2lkO1xuICBvbkZvY3VzPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uQmx1cj86IChldjogYW55KSA9PiB2b2lkO1xuICBvbktleURvd24/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgaGVpZ2h0PzogJzM2JyB8ICc0MCc7XG4gIHN0ZXA/OiBzdHJpbmc7XG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBsYWJlbEZvbnRTaXplPzogTGFiZWxGb250U2l6ZTtcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcHJlZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xuICBzdWZmaXhUZXh0Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBlcnJvcj86IGJvb2xlYW47XG4gIHZhbGlkYXRpb25UeXBlPzogSW5wdXRWYWxpZGF0aW9uVHlwZTtcbiAgdmFsaWRhdGlvblRleHQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG50eXBlIFJlZiA9IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBJbnB1dFJlZiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBJbnB1dFByb3BzPihmdW5jdGlvbiBJbnB1dFJlZihcbiAgcHJvcHM6IElucHV0UHJvcHMsXG4gIHJlZlxuKSB7XG4gIHJldHVybiA8U3R5bGVkSW5wdXQgey4uLnByb3BzfSByZWY9e3JlZn0gLz47XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIElucHV0KHtcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgc3R5bGUsXG4gIGRpc2FibGVkLFxuICBtb25vdHlwZSxcbiAgaGVpZ2h0LFxuICBsYWJlbCxcbiAgcmlnaHRMYWJlbCxcbiAgcHJlZml4SWNvbixcbiAgc3VmZml4SWNvbixcbiAgc3VmZml4VGV4dCxcbiAgcmVxdWlyZWQsXG4gIGVycm9yLFxuICB2YWxpZGF0aW9uVHlwZSxcbiAgdmFsaWRhdGlvblRleHQsXG4gIG9uRm9jdXMsXG4gIG5hbWUsXG4gIGxhYmVsRm9udFNpemUgPSBMYWJlbEZvbnRTaXplLmRlZmF1bHQsXG4gIC4uLnJlc3RQcm9wc1xufTogSW5wdXRQcm9wcykge1xuICBjb25zdCB2YWxpZGF0aW9uUHJvcHMgPVxuICAgIHZhbGlkYXRpb25UeXBlID09IG51bGxcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHtcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5DU1BSXToge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBtaW46ICcwJyxcbiAgICAgICAgICAgIG1heDogJzAnLFxuICAgICAgICAgICAgc3RlcDogJzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuUG9zaXRpdmVJbnRlZ2VyXToge1xuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBtaW46ICcxJyxcbiAgICAgICAgICAgIG1heDogJzEnLFxuICAgICAgICAgICAgc3RlcDogJzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuZW1haWxdOiB7XG4gICAgICAgICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUucGFzc3dvcmRdOiB7XG4gICAgICAgICAgICB0eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1bdmFsaWRhdGlvblR5cGVdO1xuXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICAgIG9uRm9jdXMgJiYgb25Gb2N1cyhldmVudCk7XG4gIH07XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgc3VmZml4SWNvbiA9IDxTdmdJY29uIHNyYz1cImFzc2V0cy9pY29ucy9pYy1lcnJvci5zdmdcIiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1GaWVsZFxuICAgICAgaWQ9e2lkfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICByaWdodExhYmVsPXtyaWdodExhYmVsfVxuICAgICAgc3RhdHVzPXtlcnJvciA/IEZvcm1GaWVsZFN0YXR1cy5FcnJvciA6IHVuZGVmaW5lZH1cbiAgICAgIHN0YXR1c1RleHQ9e3ZhbGlkYXRpb25UZXh0fVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgbGFiZWxGb250U2l6ZT17bGFiZWxGb250U2l6ZX1cbiAgICA+XG4gICAgICA8SW5wdXRDb250YWluZXIgbW9ub3R5cGU9e21vbm90eXBlfSBlcnJvcj17ZXJyb3J9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAge3ByZWZpeEljb24gJiYgPFByZWZpeENvbnRhaW5lcj57cHJlZml4SWNvbn08L1ByZWZpeENvbnRhaW5lcj59XG5cbiAgICAgICAgPElucHV0UmVmXG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGFyaWEtcmVxdWlyZWQ9eyEhcmVxdWlyZWR9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtpZH1cbiAgICAgICAgICB7Li4udmFsaWRhdGlvblByb3BzfVxuICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3N1ZmZpeEljb24gJiYgPFN1ZmZpeENvbnRhaW5lcj57c3VmZml4SWNvbn08L1N1ZmZpeENvbnRhaW5lcj59XG5cbiAgICAgICAge3N1ZmZpeFRleHQgJiYgPFN1ZmZpeFRleHRDb250YWluZXI+e3N1ZmZpeFRleHR9PC9TdWZmaXhUZXh0Q29udGFpbmVyPn1cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgPC9Gb3JtRmllbGQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19