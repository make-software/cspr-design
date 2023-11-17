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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sU0FBUyxFQUFFLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEUsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFFRCxJQUFNLG9CQUFvQixHQUFHLFVBQUMsS0FBZTtJQUMzQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDM0IsT0FBTyxlQUFlLENBQUM7S0FDeEI7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQ2xDLFVBQUMsRUFBbUQ7UUFBakQsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsY0FBYSxFQUFiLE1BQU0sbUJBQUcsSUFBSSxLQUFBO0lBQU8sT0FBQSxxQkFDdkQsT0FBTyxFQUFFLE1BQU0sRUFDZixhQUFhLEVBQUUsS0FBSyxFQUNwQixjQUFjLEVBQUUsZUFBZSxFQUMvQixVQUFVLEVBQUUsUUFBUSxFQUNwQixPQUFPLEVBQUUsUUFBUSxFQUNqQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUM1QyxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFDaEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQ2pELFVBQVUsRUFBRSxRQUFRO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ2xDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQ3ZDLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFDN0QsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUV6RCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFELElBRUUsQ0FBQyxLQUFLLElBQUk7UUFDWCxNQUFNLEVBQUUsb0JBQWEsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBRTtLQUN4RCxDQUFDLEdBRUMsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztRQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtLQUM5QyxDQUFDLEVBQ0Y7QUE3QnVELENBNkJ2RCxDQUNILENBQUM7QUFFRixJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQWEsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzlELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsQ0FBQztRQUNWLDJDQUEyQyxFQUFFO1lBQzFDLGlCQUFpQixFQUFFLGNBQWM7U0FDbkM7UUFDRCxnQkFBZ0IsRUFBRTtZQUNkLGlCQUFpQixFQUFFLFdBQVc7WUFDL0IsNERBQTRELEVBQUU7Z0JBQzNELE1BQU0sRUFBRSxDQUFDO2dCQUNSLG9CQUFvQixFQUFFLE1BQU07Z0JBQzNCLGdCQUFnQixFQUFFLE1BQU07YUFDNUI7U0FDSDtRQUNELGdCQUFnQixFQUFFO1lBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7U0FDakQ7S0FDRixDQUFDO0FBdEI2RCxDQXNCN0QsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxXQUFXLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1FBQzlDLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCO1NBQzlDO0tBQ0YsQ0FBQztBQU5tRCxDQU1uRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BELFVBQVUsRUFBRSxFQUFFO0tBQ2YsQ0FBQztBQUZtRCxDQUVuRCxDQUFDLENBQUM7QUFFSixJQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDbEUsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7S0FDL0MsQ0FBQztBQUZpRSxDQUVqRSxDQUFDLENBQUM7QUFFSixNQUFNLENBQU4sSUFBWSxtQkFLWDtBQUxELFdBQVksbUJBQW1CO0lBQzdCLHVEQUFnQyxDQUFBO0lBQ2hDLG9DQUFhLENBQUE7SUFDYixzQ0FBZSxDQUFBO0lBQ2YsNENBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUxXLG1CQUFtQixLQUFuQixtQkFBbUIsUUFLOUI7QUE0QkQsTUFBTSxVQUFVLEtBQUssQ0FBQyxFQW1CVDs7SUFsQlgsSUFBQSxFQUFFLFFBQUEsRUFDRixTQUFTLGVBQUEsRUFDVCxLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUEsRUFDUixRQUFRLGNBQUEsRUFDUixNQUFNLFlBQUEsRUFDTixLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsVUFBVSxnQkFBQSxFQUNWLFVBQVUsZ0JBQUEsRUFDVixVQUFVLGdCQUFBLEVBQ1YsUUFBUSxjQUFBLEVBQ1IsS0FBSyxXQUFBLEVBQ0wsY0FBYyxvQkFBQSxFQUNkLGNBQWMsb0JBQUEsRUFDZCxPQUFPLGFBQUEsRUFDaUIscUJBQXFDLEVBQXJDLGFBQWEsbUJBQUcsYUFBYSxDQUFDLE9BQU8sS0FBQSxFQUMxRCxTQUFTLGNBbEJRLG9OQW1CckIsQ0FEYTtJQUVaLElBQU0sZUFBZSxHQUNuQixjQUFjLElBQUksSUFBSTtRQUNwQixDQUFDLENBQUMsU0FBUztRQUNYLENBQUMsQ0FBQztZQUNFLEdBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFHO2dCQUMxQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsR0FBRztnQkFDUixHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsR0FBRzthQUNWO1lBQ0QsR0FBQyxtQkFBbUIsQ0FBQyxlQUFlLElBQUc7Z0JBQ3JDLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxHQUFHO2dCQUNSLElBQUksRUFBRSxHQUFHO2FBQ1Y7WUFDRCxHQUFDLG1CQUFtQixDQUFDLEtBQUssSUFBRztnQkFDM0IsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNELEdBQUMsbUJBQW1CLENBQUMsUUFBUSxJQUFHO2dCQUM5QixJQUFJLEVBQUUsVUFBVTthQUNqQjtnQkFDRCxjQUFjLENBQUMsQ0FBQztJQUV4QixJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQUs7UUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQztJQUVGLElBQUksS0FBSyxFQUFFO1FBQ1QsVUFBVSxHQUFHLEtBQUMsT0FBTyxJQUFDLEdBQUcsRUFBQywyQkFBMkIsR0FBRyxDQUFDO0tBQzFEO0lBRUQsT0FBTyxDQUNMLEtBQUMsU0FBUyxhQUNSLEVBQUUsRUFBRSxFQUFFLEVBQ04sU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDakQsVUFBVSxFQUFFLGNBQWMsRUFDMUIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsYUFBYSxFQUFFLGFBQWEsZ0JBRTVCLE1BQUMsY0FBYyxhQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFDN0QsVUFBVSxJQUFJLEtBQUMsZUFBZSxjQUFFLFVBQVUsR0FBbUIsRUFFOUQsS0FBQyxXQUFXLGFBQ1YsS0FBSyxFQUFDLEVBQUUsRUFDUixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxJQUNoQixlQUFlLEVBQ2YsU0FBUyxFQUNiLEVBRUQsVUFBVSxJQUFJLEtBQUMsZUFBZSxjQUFFLFVBQVUsR0FBbUIsRUFFN0QsVUFBVSxJQUFJLEtBQUMsbUJBQW1CLGNBQUUsVUFBVSxHQUF1QixLQUN2RCxJQUNQLENBQ2IsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xyXG5pbXBvcnQgRm9ybUZpZWxkLCB7Rm9ybUZpZWxkU3RhdHVzfSBmcm9tICcuLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XHJcblxyXG5leHBvcnQgZW51bSBMYWJlbEZvbnRTaXplIHtcclxuICAgICdkZWZhdWx0JyA9ICdkZWZhdWx0JyxcclxuICAgICdzbWFsbCcgPSAnc21hbGwnLFxyXG59XHJcblxyXG5jb25zdCBnZXRUaGVtZUNvbG9yQnlFcnJvciA9IChlcnJvcj86IGJvb2xlYW4pID0+IHtcclxuICBpZiAoZXJyb3IgPT0gbnVsbCB8fCAhZXJyb3IpIHtcclxuICAgIHJldHVybiAnZmlsbFNlY29uZGFyeSc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJ2NvbnRlbnRSZWQnO1xyXG59O1xyXG5cclxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPElucHV0UHJvcHM+KFxyXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgZXJyb3IsIG1vbm90eXBlLCBoZWlnaHQgPSAnMzYnIH0pID0+ICh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxyXG4gICAgY2FyZXRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcclxuICAgIGZvbnRGYW1pbHk6IG1vbm90eXBlXHJcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cclxuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcclxuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxyXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzIwcHgnLCAnNDAnOiAnMjBweCcgfSwgaGVpZ2h0KSxcclxuICAgIGhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzM2cHgnLCAnNDAnOiAnNDBweCcgfSwgaGVpZ2h0KSxcclxuXHJcbiAgICBwYXRoOiB7XHJcbiAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvckJ5RXJyb3IoZXJyb3IpXSxcclxuICAgIH0sXHJcblxyXG4gICAgLi4uKGVycm9yICYmIHtcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5ib3JkZXJSZWR9YCxcclxuICAgIH0pLFxyXG5cclxuICAgIC4uLihkaXNhYmxlZCAmJiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxyXG4gICAgfSksXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpPElucHV0UHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6ICdpbmhlcml0JyxcclxuICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXHJcbiAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgYm9yZGVyOiAnbm9uZScsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBwYWRkaW5nOiAwLFxyXG4gICcmW3R5cGU9bnVtYmVyXTpmb2N1cywgJlt0eXBlPW51bWJlcl06Ymx1cic6IHtcclxuICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ251bWJlci1pbnB1dCcsXHJcbiAgfSxcclxuICAnJlt0eXBlPW51bWJlcl0nOiB7XHJcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJyxcclxuICAgICAnJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbic6IHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXHJcbiAgICAgfSxcclxuICB9LFxyXG4gICcmOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBQcmVmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgbWFyZ2luUmlnaHQ6IDE2LFxyXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXHJcbiAgcGF0aDoge1xyXG4gICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN1ZmZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXJnaW5MZWZ0OiAxNixcclxufSkpO1xyXG5cclxuY29uc3QgU3VmZml4VGV4dENvbnRhaW5lciA9IHN0eWxlZChTdWZmaXhDb250YWluZXIpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGVudW0gSW5wdXRWYWxpZGF0aW9uVHlwZSB7XHJcbiAgUG9zaXRpdmVJbnRlZ2VyID0gJ3Bvc2l0aXZlX2ludCcsXHJcbiAgQ1NQUiA9ICdjc3ByJyxcclxuICBlbWFpbCA9ICdlbWFpbCcsXHJcbiAgcGFzc3dvcmQgPSAncGFzc3dvcmQnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBtb25vdHlwZT86IGJvb2xlYW47XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgb25DaGFuZ2U/OiAoZXY6IGFueSkgPT4gdm9pZDtcclxuICBvbkZvY3VzPzogKGV2OiBhbnkpID0+IHZvaWQ7XHJcbiAgb25CbHVyPzogKGV2OiBhbnkpID0+IHZvaWQ7XHJcbiAgb25LZXlEb3duPzogKGV2OiBhbnkpID0+IHZvaWQ7XHJcbiAgaGVpZ2h0PzogJzM2JyB8ICc0MCc7XHJcbiAgbWluPzogc3RyaW5nO1xyXG4gIG1heD86IHN0cmluZztcclxuICBzdGVwPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xyXG4gIGxhYmVsRm9udFNpemU/OiBMYWJlbEZvbnRTaXplO1xyXG4gIHJpZ2h0TGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XHJcbiAgcHJlZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XHJcbiAgc3VmZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XHJcbiAgc3VmZml4VGV4dD86IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICBlcnJvcj86IGJvb2xlYW47XHJcbiAgdmFsaWRhdGlvblR5cGU/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xyXG4gIHZhbGlkYXRpb25UZXh0Pzogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0KHtcclxuICBpZCxcclxuICBjbGFzc05hbWUsXHJcbiAgc3R5bGUsXHJcbiAgZGlzYWJsZWQsXHJcbiAgbW9ub3R5cGUsXHJcbiAgaGVpZ2h0LFxyXG4gIGxhYmVsLFxyXG4gIHJpZ2h0TGFiZWwsXHJcbiAgcHJlZml4SWNvbixcclxuICBzdWZmaXhJY29uLFxyXG4gIHN1ZmZpeFRleHQsXHJcbiAgcmVxdWlyZWQsXHJcbiAgZXJyb3IsXHJcbiAgdmFsaWRhdGlvblR5cGUsXHJcbiAgdmFsaWRhdGlvblRleHQsXHJcbiAgb25Gb2N1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEZvbnRTaXplID0gTGFiZWxGb250U2l6ZS5kZWZhdWx0LFxyXG4gIC4uLnJlc3RQcm9wc1xyXG59OiBJbnB1dFByb3BzKSB7XHJcbiAgY29uc3QgdmFsaWRhdGlvblByb3BzID1cclxuICAgIHZhbGlkYXRpb25UeXBlID09IG51bGxcclxuICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgOiB7XHJcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5DU1BSXToge1xyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgbWluOiAnMCcsXHJcbiAgICAgICAgICAgIG1heDogJzAnLFxyXG4gICAgICAgICAgICBzdGVwOiAnMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuUG9zaXRpdmVJbnRlZ2VyXToge1xyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgbWluOiAnMScsXHJcbiAgICAgICAgICAgIG1heDogJzEnLFxyXG4gICAgICAgICAgICBzdGVwOiAnMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuZW1haWxdOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUucGFzc3dvcmRdOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1bdmFsaWRhdGlvblR5cGVdO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xyXG4gICAgb25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50KTtcclxuICB9O1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHN1ZmZpeEljb24gPSA8U3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnXCIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgcmlnaHRMYWJlbD17cmlnaHRMYWJlbH1cclxuICAgICAgc3RhdHVzPXtlcnJvciA/IEZvcm1GaWVsZFN0YXR1cy5FcnJvciA6IHVuZGVmaW5lZH1cclxuICAgICAgc3RhdHVzVGV4dD17dmFsaWRhdGlvblRleHR9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgbGFiZWxGb250U2l6ZT17bGFiZWxGb250U2l6ZX1cclxuICAgID5cclxuICAgICAgPElucHV0Q29udGFpbmVyIG1vbm90eXBlPXttb25vdHlwZX0gZXJyb3I9e2Vycm9yfSBoZWlnaHQ9e2hlaWdodH0+XHJcbiAgICAgICAge3ByZWZpeEljb24gJiYgPFByZWZpeENvbnRhaW5lcj57cHJlZml4SWNvbn08L1ByZWZpeENvbnRhaW5lcj59XHJcblxyXG4gICAgICAgIDxTdHlsZWRJbnB1dFxyXG4gICAgICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICB7Li4udmFsaWRhdGlvblByb3BzfVxyXG4gICAgICAgICAgey4uLnJlc3RQcm9wc31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7c3VmZml4SWNvbiAmJiA8U3VmZml4Q29udGFpbmVyPntzdWZmaXhJY29ufTwvU3VmZml4Q29udGFpbmVyPn1cclxuXHJcbiAgICAgICAge3N1ZmZpeFRleHQgJiYgPFN1ZmZpeFRleHRDb250YWluZXI+e3N1ZmZpeFRleHR9PC9TdWZmaXhUZXh0Q29udGFpbmVyPn1cclxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cclxuICAgIDwvRm9ybUZpZWxkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXX0=