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
    return ((0, jsx_runtime_1.jsx)(form_field_1.default, tslib_1.__assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? form_field_1.FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled, labelFontSize: labelFontSize }, { children: (0, jsx_runtime_1.jsxs)(InputContainer, tslib_1.__assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && (0, jsx_runtime_1.jsx)(PrefixContainer, { children: prefixIcon }), (0, jsx_runtime_1.jsx)(exports.InputRef, tslib_1.__assign({ title: "", disabled: disabled, onFocus: handleFocus, name: name, "aria-required": !!required, "aria-labelledby": id }, validationProps, restProps)), suffixIcon && (0, jsx_runtime_1.jsx)(SuffixContainer, { children: suffixIcon }), suffixText && (0, jsx_runtime_1.jsx)(SuffixTextContainer, { children: suffixText })] })) })));
}
exports.Input = Input;
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQXlDO0FBQ3pDLGdGQUF1QztBQUN2QyxxREFBbUQ7QUFDbkQsNkVBQXNFO0FBQ3RFLDBFQUEyQztBQUUzQyxJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsb0NBQXFCLENBQUE7SUFDckIsZ0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQWU7SUFDM0MsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQzNCLE9BQU8sZUFBZSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxZQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUNsQyxVQUFDLEVBQW1EO1FBQWpELEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGNBQWEsRUFBYixNQUFNLG1CQUFHLElBQUksS0FBQTtJQUFPLE9BQUEscUNBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLEtBQUssRUFDcEIsY0FBYyxFQUFFLGVBQWUsRUFDL0IsVUFBVSxFQUFFLFFBQVEsRUFDcEIsT0FBTyxFQUFFLFFBQVEsRUFDakIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUNyQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDNUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQ2hELFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUNqRCxVQUFVLEVBQUUsUUFBUTtZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUN2QyxRQUFRLEVBQUUsVUFBVSxFQUNwQixVQUFVLEVBQUUsSUFBQSxzQkFBUyxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQzdELE1BQU0sRUFBRSxJQUFBLHNCQUFTLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFFekQsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxRCxJQUVFLENBQUMsS0FBSyxJQUFJO1FBQ1gsTUFBTSxFQUFFLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUU7S0FDeEQsQ0FBQyxHQUVDLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEdBQUc7UUFDWixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7S0FDOUMsQ0FBQyxFQUNGO0FBN0J1RCxDQTZCdkQsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxLQUFLLENBQWEsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNELEtBQUssRUFBRSxTQUFTO1FBQ2hCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFFBQVEsRUFBRSxTQUFTO1FBQ25CLE1BQU0sRUFBRSxNQUFNO1FBQ2QsS0FBSyxFQUFFLE1BQU07UUFDYixPQUFPLEVBQUUsQ0FBQztRQUNWLDJDQUEyQyxFQUFFO1lBQzNDLGlCQUFpQixFQUFFLGNBQWM7U0FDbEM7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixpQkFBaUIsRUFBRSxXQUFXO1lBQzlCLDREQUE0RCxFQUFFO2dCQUM1RCxNQUFNLEVBQUUsQ0FBQztnQkFDVCxvQkFBb0IsRUFBRSxNQUFNO2dCQUM1QixnQkFBZ0IsRUFBRSxNQUFNO2FBQ3pCO1NBQ0Y7UUFDRCxnQkFBZ0IsRUFBRTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtTQUMvQztLQUNGLENBQUM7QUF0QjBELENBc0IxRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRyxJQUFBLDJCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BELFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7UUFDOUMsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7U0FDOUM7S0FDRixDQUFDO0FBTm1ELENBTW5ELENBQUMsQ0FBQztBQUVKLElBQU0sZUFBZSxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDcEQsVUFBVSxFQUFFLEVBQUU7S0FDZixDQUFDO0FBRm1ELENBRW5ELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGVBQWUsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNsRSxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtLQUMvQyxDQUFDO0FBRmlFLENBRWpFLENBQUMsQ0FBQztBQUVKLElBQVksbUJBS1g7QUFMRCxXQUFZLG1CQUFtQjtJQUM3Qix1REFBZ0MsQ0FBQTtJQUNoQyxvQ0FBYSxDQUFBO0lBQ2Isc0NBQWUsQ0FBQTtJQUNmLDRDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFMVyxtQkFBbUIsR0FBbkIsMkJBQW1CLEtBQW5CLDJCQUFtQixRQUs5QjtBQThCWSxRQUFBLFFBQVEsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFrQixTQUFTLFFBQVEsQ0FDekUsS0FBaUIsRUFDakIsR0FBRztJQUVILE9BQU8sdUJBQUMsV0FBVyx1QkFBSyxLQUFLLElBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBZ0IsS0FBSyxDQUFDLEVBb0JUOztJQW5CWCxJQUFBLEVBQUUsUUFBQSxFQUNGLFNBQVMsZUFBQSxFQUNULEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQSxFQUNSLFFBQVEsY0FBQSxFQUNSLE1BQU0sWUFBQSxFQUNOLEtBQUssV0FBQSxFQUNMLFVBQVUsZ0JBQUEsRUFDVixVQUFVLGdCQUFBLEVBQ1YsVUFBVSxnQkFBQSxFQUNWLFVBQVUsZ0JBQUEsRUFDVixRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxjQUFjLG9CQUFBLEVBQ2QsY0FBYyxvQkFBQSxFQUNkLE9BQU8sYUFBQSxFQUNQLElBQUksVUFBQSxFQUNKLHFCQUFxQyxFQUFyQyxhQUFhLG1CQUFHLGFBQWEsQ0FBQyxPQUFPLEtBQUEsRUFDbEMsU0FBUyxzQkFuQlEsNE5Bb0JyQixDQURhO0lBRVosSUFBTSxlQUFlLEdBQ25CLGNBQWMsSUFBSSxJQUFJO1FBQ3BCLENBQUMsQ0FBQyxTQUFTO1FBQ1gsQ0FBQyxDQUFDO1lBQ0UsR0FBQyxtQkFBbUIsQ0FBQyxJQUFJLElBQUc7Z0JBQzFCLElBQUksRUFBRSxRQUFRO2dCQUNkLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxHQUFHO2dCQUNSLElBQUksRUFBRSxHQUFHO2FBQ1Y7WUFDRCxHQUFDLG1CQUFtQixDQUFDLGVBQWUsSUFBRztnQkFDckMsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLEdBQUc7YUFDVjtZQUNELEdBQUMsbUJBQW1CLENBQUMsS0FBSyxJQUFHO2dCQUMzQixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0QsR0FBQyxtQkFBbUIsQ0FBQyxRQUFRLElBQUc7Z0JBQzlCLElBQUksRUFBRSxVQUFVO2FBQ2pCO2dCQUNELGNBQWMsQ0FBQyxDQUFDO0lBRXhCLElBQU0sV0FBVyxHQUFHLFVBQUMsS0FBSztRQUN4QixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxLQUFLLEVBQUU7UUFDVCxVQUFVLEdBQUcsdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUMsMkJBQTJCLEdBQUcsQ0FBQztLQUMxRDtJQUVELE9BQU8sQ0FDTCx1QkFBQyxvQkFBUyxxQkFDUixFQUFFLEVBQUUsRUFBRSxFQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLEVBQUUsVUFBVSxFQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUNqRCxVQUFVLEVBQUUsY0FBYyxFQUMxQixRQUFRLEVBQUUsUUFBUSxFQUNsQixhQUFhLEVBQUUsYUFBYSxnQkFFNUIsd0JBQUMsY0FBYyxxQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQzdELFVBQVUsSUFBSSx1QkFBQyxlQUFlLGNBQUUsVUFBVSxHQUFtQixFQUU5RCx1QkFBQyxnQkFBUSxxQkFDUCxLQUFLLEVBQUMsRUFBRSxFQUNSLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLElBQUksRUFBRSxJQUFJLG1CQUNLLENBQUMsQ0FBQyxRQUFRLHFCQUNSLEVBQUUsSUFDZixlQUFlLEVBQ2YsU0FBUyxFQUNiLEVBRUQsVUFBVSxJQUFJLHVCQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTdELFVBQVUsSUFBSSx1QkFBQyxtQkFBbUIsY0FBRSxVQUFVLEdBQXVCLEtBQ3ZELElBQ1AsQ0FDYixDQUFDO0FBQ0osQ0FBQztBQXRGRCxzQkFzRkM7QUFFRCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBGb3JtRmllbGQsIHsgRm9ybUZpZWxkU3RhdHVzIH0gZnJvbSAnLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuZXhwb3J0IGVudW0gTGFiZWxGb250U2l6ZSB7XG4gICdkZWZhdWx0JyA9ICdkZWZhdWx0JyxcbiAgJ3NtYWxsJyA9ICdzbWFsbCcsXG59XG5cbmNvbnN0IGdldFRoZW1lQ29sb3JCeUVycm9yID0gKGVycm9yPzogYm9vbGVhbikgPT4ge1xuICBpZiAoZXJyb3IgPT0gbnVsbCB8fCAhZXJyb3IpIHtcbiAgICByZXR1cm4gJ2ZpbGxTZWNvbmRhcnknO1xuICB9XG5cbiAgcmV0dXJuICdjb250ZW50UmVkJztcbn07XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKTxJbnB1dFByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkLCBlcnJvciwgbW9ub3R5cGUsIGhlaWdodCA9ICczNicgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICBjYXJldENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIGZvbnRGYW1pbHk6IG1vbm90eXBlXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5tb25vXG4gICAgICA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5wcmltYXJ5LFxuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZSh7ICczNic6ICcyMHB4JywgJzQwJzogJzIwcHgnIH0sIGhlaWdodCksXG4gICAgaGVpZ2h0OiBtYXRjaFNpemUoeyAnMzYnOiAnMzZweCcsICc0MCc6ICc0MHB4JyB9LCBoZWlnaHQpLFxuXG4gICAgcGF0aDoge1xuICAgICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tnZXRUaGVtZUNvbG9yQnlFcnJvcihlcnJvcildLFxuICAgIH0sXG5cbiAgICAuLi4oZXJyb3IgJiYge1xuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5ib3JkZXJSZWR9YCxcbiAgICB9KSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dDxJbnB1dFByb3BzPigoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogJ2luaGVyaXQnLFxuICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXG4gIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBhZGRpbmc6IDAsXG4gICcmW3R5cGU9bnVtYmVyXTpmb2N1cywgJlt0eXBlPW51bWJlcl06Ymx1cic6IHtcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ251bWJlci1pbnB1dCcsXG4gIH0sXG4gICcmW3R5cGU9bnVtYmVyXSc6IHtcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ3RleHRmaWVsZCcsXG4gICAgJyY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24nOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gICcmOjpwbGFjZWhvbGRlcic6IHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBQcmVmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiAxNixcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3VmZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5MZWZ0OiAxNixcbn0pKTtcblxuY29uc3QgU3VmZml4VGV4dENvbnRhaW5lciA9IHN0eWxlZChTdWZmaXhDb250YWluZXIpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG59KSk7XG5cbmV4cG9ydCBlbnVtIElucHV0VmFsaWRhdGlvblR5cGUge1xuICBQb3NpdGl2ZUludGVnZXIgPSAncG9zaXRpdmVfaW50JyxcbiAgQ1NQUiA9ICdjc3ByJyxcbiAgZW1haWwgPSAnZW1haWwnLFxuICBwYXNzd29yZCA9ICdwYXNzd29yZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wc1xuICBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICByZWY/OiBSZWFjdC5Gb3J3YXJkZWRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG9uQ2hhbmdlPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uRm9jdXM/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25CbHVyPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uS2V5RG93bj86IChldjogYW55KSA9PiB2b2lkO1xuICBoZWlnaHQ/OiAnMzYnIHwgJzQwJztcbiAgc3RlcD86IHN0cmluZztcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIGxhYmVsRm9udFNpemU/OiBMYWJlbEZvbnRTaXplO1xuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBwcmVmaXhJY29uPzogUmVhY3ROb2RlIHwgbnVsbDtcbiAgc3VmZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeFRleHQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lPzogc3RyaW5nO1xuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGVycm9yPzogYm9vbGVhbjtcbiAgdmFsaWRhdGlvblR5cGU/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICB2YWxpZGF0aW9uVGV4dD86IHN0cmluZyB8IG51bGw7XG59XG5cbnR5cGUgUmVmID0gSFRNTElucHV0RWxlbWVudDtcblxuZXhwb3J0IGNvbnN0IElucHV0UmVmID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIElucHV0UHJvcHM+KGZ1bmN0aW9uIElucHV0UmVmKFxuICBwcm9wczogSW5wdXRQcm9wcyxcbiAgcmVmXG4pIHtcbiAgcmV0dXJuIDxTdHlsZWRJbnB1dCB7Li4ucHJvcHN9IHJlZj17cmVmfSAvPjtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gSW5wdXQoe1xuICBpZCxcbiAgY2xhc3NOYW1lLFxuICBzdHlsZSxcbiAgZGlzYWJsZWQsXG4gIG1vbm90eXBlLFxuICBoZWlnaHQsXG4gIGxhYmVsLFxuICByaWdodExhYmVsLFxuICBwcmVmaXhJY29uLFxuICBzdWZmaXhJY29uLFxuICBzdWZmaXhUZXh0LFxuICByZXF1aXJlZCxcbiAgZXJyb3IsXG4gIHZhbGlkYXRpb25UeXBlLFxuICB2YWxpZGF0aW9uVGV4dCxcbiAgb25Gb2N1cyxcbiAgbmFtZSxcbiAgbGFiZWxGb250U2l6ZSA9IExhYmVsRm9udFNpemUuZGVmYXVsdCxcbiAgLi4ucmVzdFByb3BzXG59OiBJbnB1dFByb3BzKSB7XG4gIGNvbnN0IHZhbGlkYXRpb25Qcm9wcyA9XG4gICAgdmFsaWRhdGlvblR5cGUgPT0gbnVsbFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDoge1xuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLkNTUFJdOiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIG1pbjogJzAnLFxuICAgICAgICAgICAgbWF4OiAnMCcsXG4gICAgICAgICAgICBzdGVwOiAnMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5Qb3NpdGl2ZUludGVnZXJdOiB7XG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIG1pbjogJzEnLFxuICAgICAgICAgICAgbWF4OiAnMScsXG4gICAgICAgICAgICBzdGVwOiAnMCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5lbWFpbF06IHtcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5wYXNzd29yZF06IHtcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVt2YWxpZGF0aW9uVHlwZV07XG5cbiAgY29uc3QgaGFuZGxlRm9jdXMgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gICAgb25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50KTtcbiAgfTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICBzdWZmaXhJY29uID0gPFN2Z0ljb24gc3JjPVwiYXNzZXRzL2ljb25zL2ljLWVycm9yLnN2Z1wiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUZpZWxkXG4gICAgICBpZD17aWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIHJpZ2h0TGFiZWw9e3JpZ2h0TGFiZWx9XG4gICAgICBzdGF0dXM9e2Vycm9yID8gRm9ybUZpZWxkU3RhdHVzLkVycm9yIDogdW5kZWZpbmVkfVxuICAgICAgc3RhdHVzVGV4dD17dmFsaWRhdGlvblRleHR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBsYWJlbEZvbnRTaXplPXtsYWJlbEZvbnRTaXplfVxuICAgID5cbiAgICAgIDxJbnB1dENvbnRhaW5lciBtb25vdHlwZT17bW9ub3R5cGV9IGVycm9yPXtlcnJvcn0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICB7cHJlZml4SWNvbiAmJiA8UHJlZml4Q29udGFpbmVyPntwcmVmaXhJY29ufTwvUHJlZml4Q29udGFpbmVyPn1cblxuICAgICAgICA8SW5wdXRSZWZcbiAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uRm9jdXM9e2hhbmRsZUZvY3VzfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgYXJpYS1yZXF1aXJlZD17ISFyZXF1aXJlZH1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2lkfVxuICAgICAgICAgIHsuLi52YWxpZGF0aW9uUHJvcHN9XG4gICAgICAgICAgey4uLnJlc3RQcm9wc31cbiAgICAgICAgLz5cblxuICAgICAgICB7c3VmZml4SWNvbiAmJiA8U3VmZml4Q29udGFpbmVyPntzdWZmaXhJY29ufTwvU3VmZml4Q29udGFpbmVyPn1cblxuICAgICAgICB7c3VmZml4VGV4dCAmJiA8U3VmZml4VGV4dENvbnRhaW5lcj57c3VmZml4VGV4dH08L1N1ZmZpeFRleHRDb250YWluZXI+fVxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cbiAgICA8L0Zvcm1GaWVsZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=