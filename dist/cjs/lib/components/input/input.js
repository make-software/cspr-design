"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.InputValidationType = exports.LabelFontSize = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
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
var StyledInput = (0, styled_components_1.default)('input')(function (_a) {
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
    return ((0, jsx_runtime_1.jsx)(form_field_1.default, tslib_1.__assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? form_field_1.FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled, labelFontSize: labelFontSize }, { children: (0, jsx_runtime_1.jsxs)(InputContainer, tslib_1.__assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && (0, jsx_runtime_1.jsx)(PrefixContainer, { children: prefixIcon }), (0, jsx_runtime_1.jsx)(StyledInput, tslib_1.__assign({ title: "", disabled: disabled, onFocus: handleFocus, name: name }, validationProps, restProps)), suffixIcon && (0, jsx_runtime_1.jsx)(SuffixContainer, { children: suffixIcon }), suffixText && (0, jsx_runtime_1.jsx)(SuffixTextContainer, { children: suffixText })] })) })));
}
exports.Input = Input;
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw2RUFBc0U7QUFDdEUsMEVBQTJDO0FBRTNDLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFHeEI7QUFFRCxJQUFNLG9CQUFvQixHQUFHLFVBQUMsS0FBZTtJQUMzQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDM0IsT0FBTyxlQUFlLENBQUM7S0FDeEI7SUFFRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsS0FBSyxDQUFDLENBQ2xDLFVBQUMsRUFBbUQ7UUFBakQsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsY0FBYSxFQUFiLE1BQU0sbUJBQUcsSUFBSSxLQUFBO0lBQU8sT0FBQSxxQ0FDdkQsT0FBTyxFQUFFLE1BQU0sRUFDZixhQUFhLEVBQUUsS0FBSyxFQUNwQixjQUFjLEVBQUUsZUFBZSxFQUMvQixVQUFVLEVBQUUsUUFBUSxFQUNwQixPQUFPLEVBQUUsUUFBUSxFQUNqQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQ3JDLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUM1QyxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFDaEQsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQ2pELFVBQVUsRUFBRSxRQUFRO1lBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ2xDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQ3ZDLFFBQVEsRUFBRSxVQUFVLEVBQ3BCLFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFDN0QsTUFBTSxFQUFFLElBQUEsc0JBQVMsRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUV6RCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFELElBRUUsQ0FBQyxLQUFLLElBQUk7UUFDWCxNQUFNLEVBQUUsb0JBQWEsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBRTtLQUN4RCxDQUFDLEdBRUMsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztRQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtLQUM5QyxDQUFDLEVBQ0Y7QUE3QnVELENBNkJ2RCxDQUNILENBQUM7QUFFRixJQUFNLFdBQVcsR0FBRyxJQUFBLDJCQUFNLEVBQUMsT0FBTyxDQUFDLENBQWEsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzlELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsQ0FBQztRQUNWLDJDQUEyQyxFQUFFO1lBQzNDLGlCQUFpQixFQUFFLGNBQWM7U0FDbEM7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixpQkFBaUIsRUFBRSxXQUFXO1lBQzlCLDREQUE0RCxFQUFFO2dCQUM1RCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxvQkFBb0IsRUFBRSxNQUFNO2dCQUM1QixnQkFBZ0IsRUFBRSxNQUFNO2FBQ3pCO1NBQ0Y7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtTQUMvQztLQUNGLENBQUM7QUF0QjZELENBc0I3RCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxJQUFBLDJCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BELFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDOUMsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7U0FDOUM7S0FDRixDQUFDO0FBTm1ELENBTW5ELENBQUMsQ0FBQztBQUVKLElBQU0sZUFBZSxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDcEQsVUFBVSxFQUFFLEVBQUU7S0FDZixDQUFDO0FBRm1ELENBRW5ELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNsRSxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtLQUMvQyxDQUFDO0FBRmlFLENBRWpFLENBQUMsQ0FBQztBQUVKLElBQVksbUJBS1g7QUFMRCxXQUFZLG1CQUFtQjtJQUM3Qix1REFBZ0MsQ0FBQTtJQUNoQyxvQ0FBYSxDQUFBO0lBQ2Isc0NBQWUsQ0FBQTtJQUNmLDRDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFMVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQUs5QjtBQTRCRCxTQUFnQixLQUFLLENBQUMsRUFvQlQ7O0lBbkJYLElBQUEsRUFBRSxRQUFBLEVBQ0YsU0FBUyxlQUFBLEVBQ1QsS0FBSyxXQUFBLEVBQ0wsUUFBUSxjQUFBLEVBQ1IsUUFBUSxjQUFBLEVBQ1IsTUFBTSxZQUFBLEVBQ04sS0FBSyxXQUFBLEVBQ0wsVUFBVSxnQkFBQSxFQUNWLFVBQVUsZ0JBQUEsRUFDVixVQUFVLGdCQUFBLEVBQ1YsVUFBVSxnQkFBQSxFQUNWLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLGNBQWMsb0JBQUEsRUFDZCxjQUFjLG9CQUFBLEVBQ2QsT0FBTyxhQUFBLEVBQ1AsSUFBSSxVQUFBLEVBQ0oscUJBQXFDLEVBQXJDLGFBQWEsbUJBQUcsYUFBYSxDQUFDLE9BQU8sS0FBQSxFQUNsQyxTQUFTLHNCQW5CUSw0TkFvQnJCLENBRGE7SUFFWixJQUFNLGVBQWUsR0FDbkIsY0FBYyxJQUFJLElBQUk7UUFDcEIsQ0FBQyxDQUFDLFNBQVM7UUFDWCxDQUFDLENBQUM7WUFDRSxHQUFDLG1CQUFtQixDQUFDLElBQUksSUFBRztnQkFDMUIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLEdBQUc7YUFDVjtZQUNELEdBQUMsbUJBQW1CLENBQUMsZUFBZSxJQUFHO2dCQUNyQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsR0FBRztnQkFDUixHQUFHLEVBQUUsR0FBRztnQkFDUixJQUFJLEVBQUUsR0FBRzthQUNWO1lBQ0QsR0FBQyxtQkFBbUIsQ0FBQyxLQUFLLElBQUc7Z0JBQzNCLElBQUksRUFBRSxPQUFPO2FBQ2Q7WUFDRCxHQUFDLG1CQUFtQixDQUFDLFFBQVEsSUFBRztnQkFDOUIsSUFBSSxFQUFFLFVBQVU7YUFDakI7Z0JBQ0QsY0FBYyxDQUFDLENBQUM7SUFFeEIsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFLO1FBQ3hCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7SUFFRixJQUFJLEtBQUssRUFBRTtRQUNULFVBQVUsR0FBRyx1QkFBQyxrQkFBTyxJQUFDLEdBQUcsRUFBQywyQkFBMkIsR0FBRyxDQUFDO0tBQzFEO0lBRUQsT0FBTyxDQUNMLHVCQUFDLG9CQUFTLHFCQUNSLEVBQUUsRUFBRSxFQUFFLEVBQ04sU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ2pELFVBQVUsRUFBRSxjQUFjLEVBQzFCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLGFBQWEsRUFBRSxhQUFhLGdCQUU1Qix3QkFBQyxjQUFjLHFCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFDN0QsVUFBVSxJQUFJLHVCQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTlELHVCQUFDLFdBQVcscUJBQ1YsS0FBSyxFQUFDLEVBQUUsRUFDUixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxFQUNwQixJQUFJLEVBQUUsSUFBSSxJQUNOLGVBQWUsRUFDZixTQUFTLEVBQ2IsRUFFRCxVQUFVLElBQUksdUJBQUMsZUFBZSxjQUFFLFVBQVUsR0FBbUIsRUFFN0QsVUFBVSxJQUFJLHVCQUFDLG1CQUFtQixjQUFFLFVBQVUsR0FBdUIsS0FDdkQsSUFDUCxDQUNiLENBQUM7QUFDSixDQUFDO0FBcEZELHNCQW9GQztBQUVELGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IEZvcm1GaWVsZCwgeyBGb3JtRmllbGRTdGF0dXMgfSBmcm9tICcuLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuXG5leHBvcnQgZW51bSBMYWJlbEZvbnRTaXplIHtcbiAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxuICAnc21hbGwnID0gJ3NtYWxsJyxcbn1cblxuY29uc3QgZ2V0VGhlbWVDb2xvckJ5RXJyb3IgPSAoZXJyb3I/OiBib29sZWFuKSA9PiB7XG4gIGlmIChlcnJvciA9PSBudWxsIHx8ICFlcnJvcikge1xuICAgIHJldHVybiAnZmlsbFNlY29uZGFyeSc7XG4gIH1cblxuICByZXR1cm4gJ2NvbnRlbnRSZWQnO1xufTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPElucHV0UHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQsIGVycm9yLCBtb25vdHlwZSwgaGVpZ2h0ID0gJzM2JyB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIGNhcmV0Q29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgZm9udEZhbWlseTogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LnByaW1hcnksXG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzIwcHgnLCAnNDAnOiAnMjBweCcgfSwgaGVpZ2h0KSxcbiAgICBoZWlnaHQ6IG1hdGNoU2l6ZSh7ICczNic6ICczNnB4JywgJzQwJzogJzQwcHgnIH0sIGhlaWdodCksXG5cbiAgICBwYXRoOiB7XG4gICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldFRoZW1lQ29sb3JCeUVycm9yKGVycm9yKV0sXG4gICAgfSxcblxuICAgIC4uLihlcnJvciAmJiB7XG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJvcmRlclJlZH1gLFxuICAgIH0pLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpPElucHV0UHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcbiAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICBib3JkZXI6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZzogMCxcbiAgJyZbdHlwZT1udW1iZXJdOmZvY3VzLCAmW3R5cGU9bnVtYmVyXTpibHVyJzoge1xuICAgICctbW96LWFwcGVhcmFuY2UnOiAnbnVtYmVyLWlucHV0JyxcbiAgfSxcbiAgJyZbdHlwZT1udW1iZXJdJzoge1xuICAgICctbW96LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJyxcbiAgICAnJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbic6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgfSxcbiAgfSxcbiAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IFByZWZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luUmlnaHQ6IDE2LFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICBwYXRoOiB7XG4gICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBTdWZmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpbkxlZnQ6IDE2LFxufSkpO1xuXG5jb25zdCBTdWZmaXhUZXh0Q29udGFpbmVyID0gc3R5bGVkKFN1ZmZpeENvbnRhaW5lcikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbn0pKTtcblxuZXhwb3J0IGVudW0gSW5wdXRWYWxpZGF0aW9uVHlwZSB7XG4gIFBvc2l0aXZlSW50ZWdlciA9ICdwb3NpdGl2ZV9pbnQnLFxuICBDU1BSID0gJ2NzcHInLFxuICBlbWFpbCA9ICdlbWFpbCcsXG4gIHBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBtb25vdHlwZT86IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb25DaGFuZ2U/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25Gb2N1cz86IChldjogYW55KSA9PiB2b2lkO1xuICBvbkJsdXI/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25LZXlEb3duPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIGhlaWdodD86ICczNicgfCAnNDAnO1xuICBtaW4/OiBzdHJpbmc7XG4gIG1heD86IHN0cmluZztcbiAgc3RlcD86IHN0cmluZztcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIGxhYmVsRm9udFNpemU/OiBMYWJlbEZvbnRTaXplO1xuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBwcmVmaXhJY29uPzogUmVhY3ROb2RlIHwgbnVsbDtcbiAgc3VmZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeFRleHQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lPzogc3RyaW5nO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGVycm9yPzogYm9vbGVhbjtcbiAgdmFsaWRhdGlvblR5cGU/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICB2YWxpZGF0aW9uVGV4dD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCh7XG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHN0eWxlLFxuICBkaXNhYmxlZCxcbiAgbW9ub3R5cGUsXG4gIGhlaWdodCxcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHByZWZpeEljb24sXG4gIHN1ZmZpeEljb24sXG4gIHN1ZmZpeFRleHQsXG4gIHJlcXVpcmVkLFxuICBlcnJvcixcbiAgdmFsaWRhdGlvblR5cGUsXG4gIHZhbGlkYXRpb25UZXh0LFxuICBvbkZvY3VzLFxuICBuYW1lLFxuICBsYWJlbEZvbnRTaXplID0gTGFiZWxGb250U2l6ZS5kZWZhdWx0LFxuICAuLi5yZXN0UHJvcHNcbn06IElucHV0UHJvcHMpIHtcbiAgY29uc3QgdmFsaWRhdGlvblByb3BzID1cbiAgICB2YWxpZGF0aW9uVHlwZSA9PSBudWxsXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB7XG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuQ1NQUl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMCcsXG4gICAgICAgICAgICBtYXg6ICcwJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLlBvc2l0aXZlSW50ZWdlcl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMScsXG4gICAgICAgICAgICBtYXg6ICcxJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLmVtYWlsXToge1xuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLnBhc3N3b3JkXToge1xuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9W3ZhbGlkYXRpb25UeXBlXTtcblxuICBjb25zdCBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcbiAgICBvbkZvY3VzICYmIG9uRm9jdXMoZXZlbnQpO1xuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHN1ZmZpeEljb24gPSA8U3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRcbiAgICAgIGlkPXtpZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgcmlnaHRMYWJlbD17cmlnaHRMYWJlbH1cbiAgICAgIHN0YXR1cz17ZXJyb3IgPyBGb3JtRmllbGRTdGF0dXMuRXJyb3IgOiB1bmRlZmluZWR9XG4gICAgICBzdGF0dXNUZXh0PXt2YWxpZGF0aW9uVGV4dH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGxhYmVsRm9udFNpemU9e2xhYmVsRm9udFNpemV9XG4gICAgPlxuICAgICAgPElucHV0Q29udGFpbmVyIG1vbm90eXBlPXttb25vdHlwZX0gZXJyb3I9e2Vycm9yfSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIHtwcmVmaXhJY29uICYmIDxQcmVmaXhDb250YWluZXI+e3ByZWZpeEljb259PC9QcmVmaXhDb250YWluZXI+fVxuXG4gICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB7Li4udmFsaWRhdGlvblByb3BzfVxuICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3N1ZmZpeEljb24gJiYgPFN1ZmZpeENvbnRhaW5lcj57c3VmZml4SWNvbn08L1N1ZmZpeENvbnRhaW5lcj59XG5cbiAgICAgICAge3N1ZmZpeFRleHQgJiYgPFN1ZmZpeFRleHRDb250YWluZXI+e3N1ZmZpeFRleHR9PC9TdWZmaXhUZXh0Q29udGFpbmVyPn1cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgPC9Gb3JtRmllbGQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19