"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.InputValidationType = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var form_field_1 = tslib_1.__importStar(require("../form-field/form-field"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
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
    var id = _a.id, className = _a.className, style = _a.style, disabled = _a.disabled, monotype = _a.monotype, height = _a.height, label = _a.label, rightLabel = _a.rightLabel, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, suffixText = _a.suffixText, required = _a.required, error = _a.error, validationType = _a.validationType, validationText = _a.validationText, onFocus = _a.onFocus, _c = _a.labelFontSize, labelFontSize = _c === void 0 ? form_field_1.LabelFontSize.default : _c, restProps = tslib_1.__rest(_a, ["id", "className", "style", "disabled", "monotype", "height", "label", "rightLabel", "prefixIcon", "suffixIcon", "suffixText", "required", "error", "validationType", "validationText", "onFocus", "labelFontSize"]);
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
    return ((0, jsx_runtime_1.jsx)(form_field_1.default, tslib_1.__assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? form_field_1.FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled, labelFontSize: labelFontSize }, { children: (0, jsx_runtime_1.jsxs)(InputContainer, tslib_1.__assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && (0, jsx_runtime_1.jsx)(PrefixContainer, { children: prefixIcon }), (0, jsx_runtime_1.jsx)(StyledInput, tslib_1.__assign({ title: "", disabled: disabled, onFocus: handleFocus }, validationProps, restProps)), suffixIcon && (0, jsx_runtime_1.jsx)(SuffixContainer, { children: suffixIcon }), suffixText && (0, jsx_runtime_1.jsx)(SuffixTextContainer, { children: suffixText })] })) })));
}
exports.Input = Input;
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw2RUFBbUY7QUFDbkYsMEVBQTJDO0FBRTNDLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFlO0lBQzNDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDbEMsVUFBQyxFQUFtRDtRQUFqRCxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxjQUFhLEVBQWIsTUFBTSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLHFDQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLGNBQWMsRUFBRSxlQUFlLEVBQy9CLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQzVDLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNoRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDakQsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8s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S0FBSyxFQUFFO1FBQ1QsVUFBVSxHQUFHLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFDLDJCQUEyQixHQUFHLENBQUM7S0FDMUQ7SUFFRCxPQUFPLENBQ0wsdUJBQUMsb0JBQVMscUJBQ1IsRUFBRSxFQUFFLEVBQUUsRUFDTixTQUFTLEVBQUUsU0FBUyxFQUNwQixLQUFLLEVBQUUsS0FBSyxFQUNaLEtBQUssRUFBRSxLQUFLLEVBQ1osVUFBVSxFQUFFLFVBQVUsRUFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFDakQsVUFBVSxFQUFFLGNBQWMsRUFDMUIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsYUFBYSxFQUFFLGFBQWEsZ0JBRTVCLHdCQUFDLGNBQWMscUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUM3RCxVQUFVLElBQUksdUJBQUMsZUFBZSxjQUFFLFVBQVUsR0FBbUIsRUFFOUQsdUJBQUMsV0FBVyxxQkFDVixLQUFLLEVBQUMsRUFBRSxFQUNSLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxXQUFXLElBQ2hCLGVBQWUsRUFDZixTQUFTLEVBQ2IsRUFFRCxVQUFVLElBQUksdUJBQUMsZUFBZSxjQUFFLFVBQVUsR0FBbUIsRUFFN0QsVUFBVSxJQUFJLHVCQUFDLG1CQUFtQixjQUFFLFVBQVUsR0FBdUIsS0FDdkQsSUFDUCxDQUNiLENBQUM7QUFDSixDQUFDO0FBbEZELHNCQWtGQztBQUVELGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IEZvcm1GaWVsZCwge0Zvcm1GaWVsZFN0YXR1cywgTGFiZWxGb250U2l6ZX0gZnJvbSAnLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuY29uc3QgZ2V0VGhlbWVDb2xvckJ5RXJyb3IgPSAoZXJyb3I/OiBib29sZWFuKSA9PiB7XG4gIGlmIChlcnJvciA9PSBudWxsIHx8ICFlcnJvcikge1xuICAgIHJldHVybiAnZmlsbFNlY29uZGFyeSc7XG4gIH1cblxuICByZXR1cm4gJ2NvbnRlbnRSZWQnO1xufTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPElucHV0UHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQsIGVycm9yLCBtb25vdHlwZSwgaGVpZ2h0ID0gJzM2JyB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIGNhcmV0Q29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgZm9udEZhbWlseTogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LnByaW1hcnksXG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzIwcHgnLCAnNDAnOiAnMjBweCcgfSwgaGVpZ2h0KSxcbiAgICBoZWlnaHQ6IG1hdGNoU2l6ZSh7ICczNic6ICczNnB4JywgJzQwJzogJzQwcHgnIH0sIGhlaWdodCksXG5cbiAgICBwYXRoOiB7XG4gICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldFRoZW1lQ29sb3JCeUVycm9yKGVycm9yKV0sXG4gICAgfSxcblxuICAgIC4uLihlcnJvciAmJiB7XG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJvcmRlclJlZH1gLFxuICAgIH0pLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpPElucHV0UHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcbiAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICBib3JkZXI6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZzogMCxcbiAgJyZbdHlwZT1udW1iZXJdOmZvY3VzLCAmW3R5cGU9bnVtYmVyXTpibHVyJzoge1xuICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ251bWJlci1pbnB1dCcsXG4gIH0sXG4gICcmW3R5cGU9bnVtYmVyXSc6IHtcbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJyxcbiAgICAgJyY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24nOiB7XG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnLFxuICAgICB9LFxuICB9LFxuICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBQcmVmaXhDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gIG1hcmdpblJpZ2h0OiAxNixcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgU3VmZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5MZWZ0OiAxNixcbn0pKTtcblxuY29uc3QgU3VmZml4VGV4dENvbnRhaW5lciA9IHN0eWxlZChTdWZmaXhDb250YWluZXIpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG59KSk7XG5cbmV4cG9ydCBlbnVtIElucHV0VmFsaWRhdGlvblR5cGUge1xuICBQb3NpdGl2ZUludGVnZXIgPSAncG9zaXRpdmVfaW50JyxcbiAgQ1NQUiA9ICdjc3ByJyxcbiAgZW1haWwgPSAnZW1haWwnLFxuICBwYXNzd29yZCA9ICdwYXNzd29yZCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG9uQ2hhbmdlPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uRm9jdXM/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25CbHVyPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uS2V5RG93bj86IChldjogYW55KSA9PiB2b2lkO1xuICBoZWlnaHQ/OiAnMzYnIHwgJzQwJztcbiAgbWluPzogc3RyaW5nO1xuICBtYXg/OiBzdHJpbmc7XG4gIHN0ZXA/OiBzdHJpbmc7XG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBsYWJlbEZvbnRTaXplPzogTGFiZWxGb250U2l6ZTtcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcHJlZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xuICBzdWZmaXhUZXh0Pzogc3RyaW5nIHwgbnVsbDtcblxuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGVycm9yPzogYm9vbGVhbjtcbiAgdmFsaWRhdGlvblR5cGU/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICB2YWxpZGF0aW9uVGV4dD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCh7XG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHN0eWxlLFxuICBkaXNhYmxlZCxcbiAgbW9ub3R5cGUsXG4gIGhlaWdodCxcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHByZWZpeEljb24sXG4gIHN1ZmZpeEljb24sXG4gIHN1ZmZpeFRleHQsXG4gIHJlcXVpcmVkLFxuICBlcnJvcixcbiAgdmFsaWRhdGlvblR5cGUsXG4gIHZhbGlkYXRpb25UZXh0LFxuICBvbkZvY3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEZvbnRTaXplID0gTGFiZWxGb250U2l6ZS5kZWZhdWx0LFxuICAuLi5yZXN0UHJvcHNcbn06IElucHV0UHJvcHMpIHtcbiAgY29uc3QgdmFsaWRhdGlvblByb3BzID1cbiAgICB2YWxpZGF0aW9uVHlwZSA9PSBudWxsXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB7XG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuQ1NQUl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMCcsXG4gICAgICAgICAgICBtYXg6ICcwJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLlBvc2l0aXZlSW50ZWdlcl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMScsXG4gICAgICAgICAgICBtYXg6ICcxJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLmVtYWlsXToge1xuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLnBhc3N3b3JkXToge1xuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9W3ZhbGlkYXRpb25UeXBlXTtcblxuICBjb25zdCBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcbiAgICBvbkZvY3VzICYmIG9uRm9jdXMoZXZlbnQpO1xuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHN1ZmZpeEljb24gPSA8U3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRcbiAgICAgIGlkPXtpZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgcmlnaHRMYWJlbD17cmlnaHRMYWJlbH1cbiAgICAgIHN0YXR1cz17ZXJyb3IgPyBGb3JtRmllbGRTdGF0dXMuRXJyb3IgOiB1bmRlZmluZWR9XG4gICAgICBzdGF0dXNUZXh0PXt2YWxpZGF0aW9uVGV4dH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGxhYmVsRm9udFNpemU9e2xhYmVsRm9udFNpemV9XG4gICAgPlxuICAgICAgPElucHV0Q29udGFpbmVyIG1vbm90eXBlPXttb25vdHlwZX0gZXJyb3I9e2Vycm9yfSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIHtwcmVmaXhJY29uICYmIDxQcmVmaXhDb250YWluZXI+e3ByZWZpeEljb259PC9QcmVmaXhDb250YWluZXI+fVxuXG4gICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICAgICAgey4uLnZhbGlkYXRpb25Qcm9wc31cbiAgICAgICAgICB7Li4ucmVzdFByb3BzfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtzdWZmaXhJY29uICYmIDxTdWZmaXhDb250YWluZXI+e3N1ZmZpeEljb259PC9TdWZmaXhDb250YWluZXI+fVxuXG4gICAgICAgIHtzdWZmaXhUZXh0ICYmIDxTdWZmaXhUZXh0Q29udGFpbmVyPntzdWZmaXhUZXh0fTwvU3VmZml4VGV4dENvbnRhaW5lcj59XG4gICAgICA8L0lucHV0Q29udGFpbmVyPlxuICAgIDwvRm9ybUZpZWxkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ==