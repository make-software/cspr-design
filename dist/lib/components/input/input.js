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
    InputValidationType["password"] = "password";
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
    return (_jsx(FormField, __assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled }, { children: _jsxs(InputContainer, __assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && _jsx(PrefixContainer, { children: prefixIcon }), _jsx(StyledInput, __assign({ title: "", disabled: disabled, onFocus: handleFocus }, validationProps, restProps)), suffixIcon && _jsx(SuffixContainer, { children: suffixIcon }), suffixText && _jsx(SuffixTextContainer, { children: suffixText })] })) })));
}
export default Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sU0FBUyxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEUsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQWU7SUFDM0MsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzNCLE9BQU8sZUFBZSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNsQyxVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGNBQWEsRUFBYixNQUFNLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEscUJBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLEtBQUssRUFDcEIsY0FBYyxFQUFFLGVBQWUsRUFDL0IsVUFBVSxFQUFFLFFBQVEsRUFDcEIsT0FBTyxFQUFFLFFBQVEsRUFDakIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDNUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQ2hELFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUNqRCxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QyxRQUFRLEVBQUUsVUFBVSxFQUNwQixVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQzdELE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFFekQsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxRCxJQUVFLENBQUMsS0FBSyxJQUFJO1FBQ1gsTUFBTSxFQUFFLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUU7S0FDeEQsQ0FBQyxHQUVDLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEdBQUc7UUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7S0FDOUMsQ0FBQyxFQUNGO0FBN0J1RCxDQTZCdkQsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFhLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUM5RCxLQUFLLEVBQUUsU0FBUztRQUNoQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsU0FBUztRQUNyQixRQUFRLEVBQUUsU0FBUztRQUNuQixNQUFNLEVBQUUsTUFBTTtRQUNkLEtBQUssRUFBRSxNQUFNO1FBQ2IsT0FBTyxFQUFFLENBQUM7UUFDVixnQkFBZ0IsRUFBRTtZQUNoQiw0REFBNEQsRUFBRTtnQkFDNUQsTUFBTSxFQUFFLENBQUM7Z0JBQ1Qsb0JBQW9CLEVBQUUsTUFBTTtnQkFDNUIsZ0JBQWdCLEVBQUUsTUFBTTthQUN6QjtTQUNGO1FBQ0QsZ0JBQWdCLEVBQUU7WUFDaEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7U0FDL0M7S0FDRixDQUFDO0FBbEI2RCxDQWtCN0QsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQzlDLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1NBQzlDO0tBQ0YsQ0FBQztBQU5tRCxDQU1uRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BELFVBQVUsRUFBRSxFQUFFO0tBQ2YsQ0FBQztBQUZtRCxDQUVuRCxDQUFDLENBQUM7QUFFSixJQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDbEUsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7S0FDL0MsQ0FBQztBQUZpRSxDQUVqRSxDQUFDLENBQUM7QUFFSixNQUFNLENBQU4sSUFBWSxtQkFLWDtBQUxELFdBQVksbUJBQW1CO0lBQzdCLHVEQUFnQyxDQUFBO0lBQ2hDLG9DQUFhLENBQUE7SUFDYixzQ0FBZSxDQUFBO0lBQ2YsNENBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUxXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFLOUI7QUEyQkQsTUFBTSxVQUFVLEtBQUssQ0FBQyxFQWtCVDs7SUFqQlgsSUFBQSxFQUFFLFFBQUEsRUFDRixTQUFTLGVBQUEsRUFDVCxLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUEsRUFDUixRQUFRLGNBQUEsRUFDUixNQUFNLFlBQUEsRUFDTixLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsVUFBVSxnQkFBQSxFQUNWLFVBQVUsZ0JBQUEsRUFDVixVQUFVLGdCQUFBLEVBQ1YsUUFBUSxjQUFBLEVBQ1IsS0FBSyxXQUFBLEVBQ0wsY0FBYyxvQkFBQSxFQUNkLGNBQWMsb0JBQUEsRUFDZCxPQUFPLGFBQUEsRUFDSixTQUFTLGNBakJRLG1NQWtCckIsQ0FEYTtJQUVaLElBQU0sZUFBZSxHQUNuQixjQUFjLElBQUksSUFBSTtRQUNwQixDQUFDLENBQUMsU0FBUztRQUNYLENBQUMsQ0FBQztZQUNFLEdBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFHO2dCQUMxQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsR0FBRztnQkFDUixHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsR0FBRzthQUNWO1lBQ0QsR0FBQyxtQkFBbUIsQ0FBQyxlQUFlLElBQUc7Z0JBQ3JDLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxHQUFHO2dCQUNSLElBQUksRUFBRSxHQUFHO2FBQ1Y7WUFDRCxHQUFDLG1CQUFtQixDQUFDLEtBQUssSUFBRztnQkFDM0IsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNELEdBQUMsbUJBQW1CLENBQUMsUUFBUSxJQUFHO2dCQUM5QixJQUFJLEVBQUUsVUFBVTthQUNqQjtnQkFDRCxjQUFjLENBQUMsQ0FBQztJQUV4QixJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQUs7UUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztJQUVGLElBQUksS0FBSyxFQUFFO1FBQ1QsVUFBVSxHQUFHLEtBQUMsT0FBTyxJQUFDLEdBQUcsRUFBQywyQkFBMkIsR0FBRyxDQUFDO0tBQzFEO0lBRUQsT0FBTyxDQUNMLEtBQUMsU0FBUyxhQUNSLEVBQUUsRUFBRSxFQUFFLEVBQ04sU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDakQsVUFBVSxFQUFFLGNBQWMsRUFDMUIsUUFBUSxFQUFFLFFBQVEsZ0JBRWxCLE1BQUMsY0FBYyxhQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFDN0QsVUFBVSxJQUFJLEtBQUMsZUFBZSxjQUFFLFVBQVUsR0FBbUIsRUFFOUQsS0FBQyxXQUFXLGFBQ1YsS0FBSyxFQUFDLEVBQUUsRUFDUixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxJQUNoQixlQUFlLEVBQ2YsU0FBUyxFQUNiLEVBRUQsVUFBVSxJQUFJLEtBQUMsZUFBZSxjQUFFLFVBQVUsR0FBbUIsRUFFN0QsVUFBVSxJQUFJLEtBQUMsbUJBQW1CLGNBQUUsVUFBVSxHQUF1QixLQUN2RCxJQUNQLENBQ2IsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xyXG5pbXBvcnQgRm9ybUZpZWxkLCB7IEZvcm1GaWVsZFN0YXR1cyB9IGZyb20gJy4uL2Zvcm0tZmllbGQvZm9ybS1maWVsZCc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcclxuXHJcbmNvbnN0IGdldFRoZW1lQ29sb3JCeUVycm9yID0gKGVycm9yPzogYm9vbGVhbikgPT4ge1xyXG4gIGlmIChlcnJvciA9PSBudWxsIHx8ICFlcnJvcikge1xyXG4gICAgcmV0dXJuICdmaWxsU2Vjb25kYXJ5JztcclxuICB9XHJcblxyXG4gIHJldHVybiAnY29udGVudFJlZCc7XHJcbn07XHJcblxyXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jyk8SW5wdXRQcm9wcz4oXHJcbiAgKHsgdGhlbWUsIGRpc2FibGVkLCBlcnJvciwgbW9ub3R5cGUsIGhlaWdodCA9ICczNicgfSkgPT4gKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogJzAgMTZweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXHJcbiAgICBjYXJldENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxyXG4gICAgZm9udEZhbWlseTogbW9ub3R5cGVcclxuICAgICAgPyB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub1xyXG4gICAgICA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5wcmltYXJ5LFxyXG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXHJcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoeyAnMzYnOiAnMjBweCcsICc0MCc6ICcyMHB4JyB9LCBoZWlnaHQpLFxyXG4gICAgaGVpZ2h0OiBtYXRjaFNpemUoeyAnMzYnOiAnMzZweCcsICc0MCc6ICc0MHB4JyB9LCBoZWlnaHQpLFxyXG5cclxuICAgIHBhdGg6IHtcclxuICAgICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tnZXRUaGVtZUNvbG9yQnlFcnJvcihlcnJvcildLFxyXG4gICAgfSxcclxuXHJcbiAgICAuLi4oZXJyb3IgJiYge1xyXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJvcmRlclJlZH1gLFxyXG4gICAgfSksXHJcblxyXG4gICAgLi4uKGRpc2FibGVkICYmIHtcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXHJcbiAgICB9KSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQoJ2lucHV0Jyk8SW5wdXRQcm9wcz4oKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcclxuICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcbiAgZm9udFNpemU6ICdpbmhlcml0JyxcclxuICBib3JkZXI6ICdub25lJyxcclxuICB3aWR0aDogJzEwMCUnLFxyXG4gIHBhZGRpbmc6IDAsXHJcbiAgJyZbdHlwZT1udW1iZXJdJzoge1xyXG4gICAgJyY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24nOiB7XHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcclxuICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gICcmOjpwbGFjZWhvbGRlcic6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIG1hcmdpblJpZ2h0OiAxNixcclxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxyXG4gIHBhdGg6IHtcclxuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTdWZmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgbWFyZ2luTGVmdDogMTYsXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN1ZmZpeFRleHRDb250YWluZXIgPSBzdHlsZWQoU3VmZml4Q29udGFpbmVyKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBlbnVtIElucHV0VmFsaWRhdGlvblR5cGUge1xyXG4gIFBvc2l0aXZlSW50ZWdlciA9ICdwb3NpdGl2ZV9pbnQnLFxyXG4gIENTUFIgPSAnY3NwcicsXHJcbiAgZW1haWwgPSAnZW1haWwnLFxyXG4gIHBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIG9uQ2hhbmdlPzogKGV2OiBhbnkpID0+IHZvaWQ7XHJcbiAgb25Gb2N1cz86IChldjogYW55KSA9PiB2b2lkO1xyXG4gIG9uQmx1cj86IChldjogYW55KSA9PiB2b2lkO1xyXG4gIG9uS2V5RG93bj86IChldjogYW55KSA9PiB2b2lkO1xyXG4gIGhlaWdodD86ICczNicgfCAnNDAnO1xyXG4gIG1pbj86IHN0cmluZztcclxuICBtYXg/OiBzdHJpbmc7XHJcbiAgc3RlcD86IHN0cmluZztcclxuICBsYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcclxuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xyXG4gIHByZWZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xyXG4gIHN1ZmZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xyXG4gIHN1ZmZpeFRleHQ/OiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgZXJyb3I/OiBib29sZWFuO1xyXG4gIHZhbGlkYXRpb25UeXBlPzogSW5wdXRWYWxpZGF0aW9uVHlwZTtcclxuICB2YWxpZGF0aW9uVGV4dD86IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCh7XHJcbiAgaWQsXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHN0eWxlLFxyXG4gIGRpc2FibGVkLFxyXG4gIG1vbm90eXBlLFxyXG4gIGhlaWdodCxcclxuICBsYWJlbCxcclxuICByaWdodExhYmVsLFxyXG4gIHByZWZpeEljb24sXHJcbiAgc3VmZml4SWNvbixcclxuICBzdWZmaXhUZXh0LFxyXG4gIHJlcXVpcmVkLFxyXG4gIGVycm9yLFxyXG4gIHZhbGlkYXRpb25UeXBlLFxyXG4gIHZhbGlkYXRpb25UZXh0LFxyXG4gIG9uRm9jdXMsXHJcbiAgLi4ucmVzdFByb3BzXHJcbn06IElucHV0UHJvcHMpIHtcclxuICBjb25zdCB2YWxpZGF0aW9uUHJvcHMgPVxyXG4gICAgdmFsaWRhdGlvblR5cGUgPT0gbnVsbFxyXG4gICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICA6IHtcclxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLkNTUFJdOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICBtaW46ICcwJyxcclxuICAgICAgICAgICAgbWF4OiAnMCcsXHJcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5Qb3NpdGl2ZUludGVnZXJdOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxyXG4gICAgICAgICAgICBtaW46ICcxJyxcclxuICAgICAgICAgICAgbWF4OiAnMScsXHJcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5lbWFpbF06IHtcclxuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5wYXNzd29yZF06IHtcclxuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVt2YWxpZGF0aW9uVHlwZV07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvY3VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC50YXJnZXQuc2VsZWN0KCk7XHJcbiAgICBvbkZvY3VzICYmIG9uRm9jdXMoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgc3VmZml4SWNvbiA9IDxTdmdJY29uIHNyYz1cImFzc2V0cy9pY29ucy9pYy1lcnJvci5zdmdcIiAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUZpZWxkXHJcbiAgICAgIGlkPXtpZH1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICByaWdodExhYmVsPXtyaWdodExhYmVsfVxyXG4gICAgICBzdGF0dXM9e2Vycm9yID8gRm9ybUZpZWxkU3RhdHVzLkVycm9yIDogdW5kZWZpbmVkfVxyXG4gICAgICBzdGF0dXNUZXh0PXt2YWxpZGF0aW9uVGV4dH1cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXRDb250YWluZXIgbW9ub3R5cGU9e21vbm90eXBlfSBlcnJvcj17ZXJyb3J9IGhlaWdodD17aGVpZ2h0fT5cclxuICAgICAgICB7cHJlZml4SWNvbiAmJiA8UHJlZml4Q29udGFpbmVyPntwcmVmaXhJY29ufTwvUHJlZml4Q29udGFpbmVyPn1cclxuXHJcbiAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICB0aXRsZT1cIlwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cclxuICAgICAgICAgIHsuLi52YWxpZGF0aW9uUHJvcHN9XHJcbiAgICAgICAgICB7Li4ucmVzdFByb3BzfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtzdWZmaXhJY29uICYmIDxTdWZmaXhDb250YWluZXI+e3N1ZmZpeEljb259PC9TdWZmaXhDb250YWluZXI+fVxyXG5cclxuICAgICAgICB7c3VmZml4VGV4dCAmJiA8U3VmZml4VGV4dENvbnRhaW5lcj57c3VmZml4VGV4dH08L1N1ZmZpeFRleHRDb250YWluZXI+fVxyXG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxyXG4gICAgPC9Gb3JtRmllbGQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiJdfQ==