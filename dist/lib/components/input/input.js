import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { matchSize } from '../../utils/match-size';
import FormField, { FormFieldStatus } from '../form-field/form-field';
import SvgIcon from '../svg-icon/svg-icon';
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
        '&[type=number]': {
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
})(InputValidationType || (InputValidationType = {}));
export function Input(_a) {
    var _b;
    var id = _a.id, className = _a.className, style = _a.style, disabled = _a.disabled, monotype = _a.monotype, height = _a.height, label = _a.label, rightLabel = _a.rightLabel, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, suffixText = _a.suffixText, required = _a.required, error = _a.error, validationType = _a.validationType, validationText = _a.validationText, onFocus = _a.onFocus, restProps = __rest(_a, ["id", "className", "style", "disabled", "monotype", "height", "label", "rightLabel", "prefixIcon", "suffixIcon", "suffixText", "required", "error", "validationType", "validationText", "onFocus"]);
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
            _b)[validationType];
    var handleFocus = function (event) {
        event.target.select();
        onFocus && onFocus(event);
    };
    if (error) {
        suffixIcon = _jsx(SvgIcon, { src: "assets/icons/ic-error.svg" });
    }
    return (_jsx(FormField, __assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled }, { children: _jsxs(InputContainer, __assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && _jsx(PrefixContainer, { children: prefixIcon }), _jsx(StyledInput, __assign({ title: "", disabled: disabled, onFocus: handleFocus }, validationProps, restProps)), suffixIcon && _jsx(SuffixContainer, { children: suffixIcon }), suffixText && _jsx(SuffixTextContainer, { children: suffixText })] })) })));
}
export default Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sU0FBUyxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQWU7SUFDM0MsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzNCLE9BQU8sZUFBZSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNsQyxVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGNBQWEsRUFBYixNQUFNLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEscUJBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLEtBQUssRUFDcEIsY0FBYyxFQUFFLGVBQWUsRUFDL0IsVUFBVSxFQUFFLFFBQVEsRUFDcEIsT0FBTyxFQUFFLFFBQVEsRUFDakIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDNUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQ2hELFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUNqRCxVQUFVLEVBQUUsUUFBUTtZQUNs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QUFTLEVBQ3BCLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLEVBQUUsVUFBVSxFQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ2pELFVBQVUsRUFBRSxjQUFjLEVBQzFCLFFBQVEsRUFBRSxRQUFRLGdCQUVsQixNQUFDLGNBQWMsYUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQzdELFVBQVUsSUFBSSxLQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTlELEtBQUMsV0FBVyxhQUNWLEtBQUssRUFBQyxFQUFFLEVBQ1IsUUFBUSxFQUFFLFFBQVEsRUFDbEIsT0FBTyxFQUFFLFdBQVcsSUFDaEIsZUFBZSxFQUNmLFNBQVMsRUFDYixFQUVELFVBQVUsSUFBSSxLQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTdELFVBQVUsSUFBSSxLQUFDLG1CQUFtQixjQUFFLFVBQVUsR0FBdUIsS0FDdkQsSUFDUCxDQUNiLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBGb3JtRmllbGQsIHsgRm9ybUZpZWxkU3RhdHVzIH0gZnJvbSAnLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuY29uc3QgZ2V0VGhlbWVDb2xvckJ5RXJyb3IgPSAoZXJyb3I/OiBib29sZWFuKSA9PiB7XG4gIGlmIChlcnJvciA9PSBudWxsIHx8ICFlcnJvcikge1xuICAgIHJldHVybiAnZmlsbFNlY29uZGFyeSc7XG4gIH1cblxuICByZXR1cm4gJ2NvbnRlbnRSZWQnO1xufTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPElucHV0UHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQsIGVycm9yLCBtb25vdHlwZSwgaGVpZ2h0ID0gJzM2JyB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIGNhcmV0Q29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgZm9udEZhbWlseTogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LnByaW1hcnksXG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzIwcHgnLCAnNDAnOiAnMjBweCcgfSwgaGVpZ2h0KSxcbiAgICBoZWlnaHQ6IG1hdGNoU2l6ZSh7ICczNic6ICczNnB4JywgJzQwJzogJzQwcHgnIH0sIGhlaWdodCksXG5cbiAgICBwYXRoOiB7XG4gICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldFRoZW1lQ29sb3JCeUVycm9yKGVycm9yKV0sXG4gICAgfSxcblxuICAgIC4uLihlcnJvciAmJiB7XG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJvcmRlclJlZH1gLFxuICAgIH0pLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpPElucHV0UHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcbiAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICBib3JkZXI6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZzogMCxcbiAgJyZbdHlwZT1udW1iZXJdJzoge1xuICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogMTYsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN1ZmZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogMTYsXG59KSk7XG5cbmNvbnN0IFN1ZmZpeFRleHRDb250YWluZXIgPSBzdHlsZWQoU3VmZml4Q29udGFpbmVyKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxufSkpO1xuXG5leHBvcnQgZW51bSBJbnB1dFZhbGlkYXRpb25UeXBlIHtcbiAgUG9zaXRpdmVJbnRlZ2VyID0gJ3Bvc2l0aXZlX2ludCcsXG4gIENTUFIgPSAnY3NwcicsXG4gIGVtYWlsID0gJ2VtYWlsJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBtb25vdHlwZT86IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb25DaGFuZ2U/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25Gb2N1cz86IChldjogYW55KSA9PiB2b2lkO1xuICBvbkJsdXI/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25LZXlEb3duPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIGhlaWdodD86ICczNicgfCAnNDAnO1xuICBtaW4/OiBzdHJpbmc7XG4gIG1heD86IHN0cmluZztcbiAgc3RlcD86IHN0cmluZztcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHJpZ2h0TGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHByZWZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xuICBzdWZmaXhJY29uPzogUmVhY3ROb2RlIHwgbnVsbDtcbiAgc3VmZml4VGV4dD86IHN0cmluZyB8IG51bGw7XG5cbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xuICBlcnJvcj86IGJvb2xlYW47XG4gIHZhbGlkYXRpb25UeXBlPzogSW5wdXRWYWxpZGF0aW9uVHlwZTtcbiAgdmFsaWRhdGlvblRleHQ/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW5wdXQoe1xuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBzdHlsZSxcbiAgZGlzYWJsZWQsXG4gIG1vbm90eXBlLFxuICBoZWlnaHQsXG4gIGxhYmVsLFxuICByaWdodExhYmVsLFxuICBwcmVmaXhJY29uLFxuICBzdWZmaXhJY29uLFxuICBzdWZmaXhUZXh0LFxuICByZXF1aXJlZCxcbiAgZXJyb3IsXG4gIHZhbGlkYXRpb25UeXBlLFxuICB2YWxpZGF0aW9uVGV4dCxcbiAgb25Gb2N1cyxcbiAgLi4ucmVzdFByb3BzXG59OiBJbnB1dFByb3BzKSB7XG4gIGNvbnN0IHZhbGlkYXRpb25Qcm9wcyA9XG4gICAgdmFsaWRhdGlvblR5cGUgPT0gbnVsbFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDoge1xuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLkNTUFJdOiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIG1pbjogJzAnLFxuICAgICAgICAgICAgbWF4OiAnMCcsXG4gICAgICAgICAgICBzdGVwOiAnMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5Qb3NpdGl2ZUludGVnZXJdOiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIG1pbjogJzEnLFxuICAgICAgICAgICAgbWF4OiAnMScsXG4gICAgICAgICAgICBzdGVwOiAnMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5lbWFpbF06IHtcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVt2YWxpZGF0aW9uVHlwZV07XG5cbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gICAgb25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50KTtcbiAgfTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBzdWZmaXhJY29uID0gPFN2Z0ljb24gc3JjPVwiYXNzZXRzL2ljb25zL2ljLWVycm9yLnN2Z1wiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUZpZWxkXG4gICAgICBpZD17aWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIHJpZ2h0TGFiZWw9e3JpZ2h0TGFiZWx9XG4gICAgICBzdGF0dXM9e2Vycm9yID8gRm9ybUZpZWxkU3RhdHVzLkVycm9yIDogdW5kZWZpbmVkfVxuICAgICAgc3RhdHVzVGV4dD17dmFsaWRhdGlvblRleHR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgPlxuICAgICAgPElucHV0Q29udGFpbmVyIG1vbm90eXBlPXttb25vdHlwZX0gZXJyb3I9e2Vycm9yfSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIHtwcmVmaXhJY29uICYmIDxQcmVmaXhDb250YWluZXI+e3ByZWZpeEljb259PC9QcmVmaXhDb250YWluZXI+fVxuXG4gICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgey4uLnZhbGlkYXRpb25Qcm9wc31cbiAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtzdWZmaXhJY29uICYmIDxTdWZmaXhDb250YWluZXI+e3N1ZmZpeEljb259PC9TdWZmaXhDb250YWluZXI+fVxuXG4gICAgICAgIHtzdWZmaXhUZXh0ICYmIDxTdWZmaXhUZXh0Q29udGFpbmVyPntzdWZmaXhUZXh0fTwvU3VmZml4VGV4dENvbnRhaW5lcj59XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgIDwvRm9ybUZpZWxkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==