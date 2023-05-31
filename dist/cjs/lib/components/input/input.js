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
    var id = _a.id, className = _a.className, style = _a.style, disabled = _a.disabled, monotype = _a.monotype, height = _a.height, label = _a.label, rightLabel = _a.rightLabel, prefixIcon = _a.prefixIcon, suffixIcon = _a.suffixIcon, suffixText = _a.suffixText, required = _a.required, error = _a.error, validationType = _a.validationType, validationText = _a.validationText, onFocus = _a.onFocus, restProps = tslib_1.__rest(_a, ["id", "className", "style", "disabled", "monotype", "height", "label", "rightLabel", "prefixIcon", "suffixIcon", "suffixText", "required", "error", "validationType", "validationText", "onFocus"]);
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
    return ((0, jsx_runtime_1.jsx)(form_field_1.default, tslib_1.__assign({ id: id, className: className, style: style, label: label, rightLabel: rightLabel, status: error ? form_field_1.FormFieldStatus.Error : undefined, statusText: validationText, disabled: disabled }, { children: (0, jsx_runtime_1.jsxs)(InputContainer, tslib_1.__assign({ monotype: monotype, error: error, height: height }, { children: [prefixIcon && (0, jsx_runtime_1.jsx)(PrefixContainer, { children: prefixIcon }), (0, jsx_runtime_1.jsx)(StyledInput, tslib_1.__assign({ title: "", disabled: disabled, onFocus: handleFocus }, validationProps, restProps)), suffixIcon && (0, jsx_runtime_1.jsx)(SuffixContainer, { children: suffixIcon }), suffixText && (0, jsx_runtime_1.jsx)(SuffixTextContainer, { children: suffixText })] })) })));
}
exports.Input = Input;
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw2RUFBc0U7QUFDdEUsMEVBQTJDO0FBRTNDLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFlO0lBQzNDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDbEMsVUFBQyxFQUFtRDtRQUFqRCxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxjQUFhLEVBQWIsTUFBTSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLHFDQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLGNBQWMsRUFBRSxlQUFlLEVBQy9CLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQzVDLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNoRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDakQsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8s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QUFFLEVBQ04sU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ2pELFVBQVUsRUFBRSxjQUFjLEVBQzFCLFFBQVEsRUFBRSxRQUFRLGdCQUVsQix3QkFBQyxjQUFjLHFCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFDN0QsVUFBVSxJQUFJLHVCQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTlELHVCQUFDLFdBQVcscUJBQ1YsS0FBSyxFQUFDLEVBQUUsRUFDUixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxJQUNoQixlQUFlLEVBQ2YsU0FBUyxFQUNiLEVBRUQsVUFBVSxJQUFJLHVCQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTdELFVBQVUsSUFBSSx1QkFBQyxtQkFBbUIsY0FBRSxVQUFVLEdBQXVCLEtBQ3ZELElBQ1AsQ0FDYixDQUFDO0FBQ0osQ0FBQztBQWhGRCxzQkFnRkM7QUFFRCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBGb3JtRmllbGQsIHsgRm9ybUZpZWxkU3RhdHVzIH0gZnJvbSAnLi4vZm9ybS1maWVsZC9mb3JtLWZpZWxkJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuY29uc3QgZ2V0VGhlbWVDb2xvckJ5RXJyb3IgPSAoZXJyb3I/OiBib29sZWFuKSA9PiB7XG4gIGlmIChlcnJvciA9PSBudWxsIHx8ICFlcnJvcikge1xuICAgIHJldHVybiAnZmlsbFNlY29uZGFyeSc7XG4gIH1cblxuICByZXR1cm4gJ2NvbnRlbnRSZWQnO1xufTtcblxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPElucHV0UHJvcHM+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQsIGVycm9yLCBtb25vdHlwZSwgaGVpZ2h0ID0gJzM2JyB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgIGNhcmV0Q29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gICAgZm9udEZhbWlseTogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cbiAgICAgIDogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LnByaW1hcnksXG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzIwcHgnLCAnNDAnOiAnMjBweCcgfSwgaGVpZ2h0KSxcbiAgICBoZWlnaHQ6IG1hdGNoU2l6ZSh7ICczNic6ICczNnB4JywgJzQwJzogJzQwcHgnIH0sIGhlaWdodCksXG5cbiAgICBwYXRoOiB7XG4gICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldFRoZW1lQ29sb3JCeUVycm9yKGVycm9yKV0sXG4gICAgfSxcblxuICAgIC4uLihlcnJvciAmJiB7XG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJvcmRlclJlZH1gLFxuICAgIH0pLFxuXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpPElucHV0UHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJhY2tncm91bmQ6ICdpbmhlcml0JyxcbiAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICBib3JkZXI6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgcGFkZGluZzogMCxcbiAgJyZbdHlwZT1udW1iZXJdJzoge1xuICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICAnJjo6cGxhY2Vob2xkZXInOiB7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogMTYsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN1ZmZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogMTYsXG59KSk7XG5cbmNvbnN0IFN1ZmZpeFRleHRDb250YWluZXIgPSBzdHlsZWQoU3VmZml4Q29udGFpbmVyKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxufSkpO1xuXG5leHBvcnQgZW51bSBJbnB1dFZhbGlkYXRpb25UeXBlIHtcbiAgUG9zaXRpdmVJbnRlZ2VyID0gJ3Bvc2l0aXZlX2ludCcsXG4gIENTUFIgPSAnY3NwcicsXG4gIGVtYWlsID0gJ2VtYWlsJyxcbiAgcGFzc3dvcmQgPSAncGFzc3dvcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvbkNoYW5nZT86IChldjogYW55KSA9PiB2b2lkO1xuICBvbkZvY3VzPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uQmx1cj86IChldjogYW55KSA9PiB2b2lkO1xuICBvbktleURvd24/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgaGVpZ2h0PzogJzM2JyB8ICc0MCc7XG4gIG1pbj86IHN0cmluZztcbiAgbWF4Pzogc3RyaW5nO1xuICBzdGVwPzogc3RyaW5nO1xuICBsYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcHJlZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xuICBzdWZmaXhUZXh0Pzogc3RyaW5nIHwgbnVsbDtcblxuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGVycm9yPzogYm9vbGVhbjtcbiAgdmFsaWRhdGlvblR5cGU/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICB2YWxpZGF0aW9uVGV4dD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCh7XG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHN0eWxlLFxuICBkaXNhYmxlZCxcbiAgbW9ub3R5cGUsXG4gIGhlaWdodCxcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHByZWZpeEljb24sXG4gIHN1ZmZpeEljb24sXG4gIHN1ZmZpeFRleHQsXG4gIHJlcXVpcmVkLFxuICBlcnJvcixcbiAgdmFsaWRhdGlvblR5cGUsXG4gIHZhbGlkYXRpb25UZXh0LFxuICBvbkZvY3VzLFxuICAuLi5yZXN0UHJvcHNcbn06IElucHV0UHJvcHMpIHtcbiAgY29uc3QgdmFsaWRhdGlvblByb3BzID1cbiAgICB2YWxpZGF0aW9uVHlwZSA9PSBudWxsXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB7XG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuQ1NQUl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMCcsXG4gICAgICAgICAgICBtYXg6ICcwJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLlBvc2l0aXZlSW50ZWdlcl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMScsXG4gICAgICAgICAgICBtYXg6ICcxJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLmVtYWlsXToge1xuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLnBhc3N3b3JkXToge1xuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9W3ZhbGlkYXRpb25UeXBlXTtcblxuICBjb25zdCBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcbiAgICBvbkZvY3VzICYmIG9uRm9jdXMoZXZlbnQpO1xuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHN1ZmZpeEljb24gPSA8U3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRcbiAgICAgIGlkPXtpZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgcmlnaHRMYWJlbD17cmlnaHRMYWJlbH1cbiAgICAgIHN0YXR1cz17ZXJyb3IgPyBGb3JtRmllbGRTdGF0dXMuRXJyb3IgOiB1bmRlZmluZWR9XG4gICAgICBzdGF0dXNUZXh0PXt2YWxpZGF0aW9uVGV4dH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICA+XG4gICAgICA8SW5wdXRDb250YWluZXIgbW9ub3R5cGU9e21vbm90eXBlfSBlcnJvcj17ZXJyb3J9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAge3ByZWZpeEljb24gJiYgPFByZWZpeENvbnRhaW5lcj57cHJlZml4SWNvbn08L1ByZWZpeENvbnRhaW5lcj59XG5cbiAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgICAgICB7Li4udmFsaWRhdGlvblByb3BzfVxuICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3N1ZmZpeEljb24gJiYgPFN1ZmZpeENvbnRhaW5lcj57c3VmZml4SWNvbn08L1N1ZmZpeENvbnRhaW5lcj59XG5cbiAgICAgICAge3N1ZmZpeFRleHQgJiYgPFN1ZmZpeFRleHRDb250YWluZXI+e3N1ZmZpeFRleHR9PC9TdWZmaXhUZXh0Q29udGFpbmVyPn1cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgPC9Gb3JtRmllbGQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19