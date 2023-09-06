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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw2RUFBc0U7QUFDdEUsMEVBQTJDO0FBRTNDLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFlO0lBQzNDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDbEMsVUFBQyxFQUFtRDtRQUFqRCxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxjQUFhLEVBQWIsTUFBTSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLHFDQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLGNBQWMsRUFBRSxlQUFlLEVBQy9CLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQzVDLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNoRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDakQsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8s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MkJBQTJCLEdBQUcsQ0FBQztLQUMxRDtJQUVELE9BQU8sQ0FDTCx1QkFBQyxvQkFBUyxxQkFDUixFQUFFLEVBQUUsRUFBRSxFQUNOLFNBQVMsRUFBRSxTQUFTLEVBQ3BCLEtBQUssRUFBRSxLQUFLLEVBQ1osS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLEVBQUUsVUFBVSxFQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUNqRCxVQUFVLEVBQUUsY0FBYyxFQUMxQixRQUFRLEVBQUUsUUFBUSxnQkFFbEIsd0JBQUMsY0FBYyxxQkFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQzdELFVBQVUsSUFBSSx1QkFBQyxlQUFlLGNBQUUsVUFBVSxHQUFtQixFQUU5RCx1QkFBQyxXQUFXLHFCQUNWLEtBQUssRUFBQyxFQUFFLEVBQ1IsUUFBUSxFQUFFLFFBQVEsRUFDbEIsT0FBTyxFQUFFLFdBQVcsSUFDaEIsZUFBZSxFQUNmLFNBQVMsRUFDYixFQUVELFVBQVUsSUFBSSx1QkFBQyxlQUFlLGNBQUUsVUFBVSxHQUFtQixFQUU3RCxVQUFVLElBQUksdUJBQUMsbUJBQW1CLGNBQUUsVUFBVSxHQUF1QixLQUN2RCxJQUNQLENBQ2IsQ0FBQztBQUNKLENBQUM7QUFoRkQsc0JBZ0ZDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XG5pbXBvcnQgRm9ybUZpZWxkLCB7IEZvcm1GaWVsZFN0YXR1cyB9IGZyb20gJy4uL2Zvcm0tZmllbGQvZm9ybS1maWVsZCc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5cbmNvbnN0IGdldFRoZW1lQ29sb3JCeUVycm9yID0gKGVycm9yPzogYm9vbGVhbikgPT4ge1xuICBpZiAoZXJyb3IgPT0gbnVsbCB8fCAhZXJyb3IpIHtcbiAgICByZXR1cm4gJ2ZpbGxTZWNvbmRhcnknO1xuICB9XG5cbiAgcmV0dXJuICdjb250ZW50UmVkJztcbn07XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKTxJbnB1dFByb3BzPihcbiAgKHsgdGhlbWUsIGRpc2FibGVkLCBlcnJvciwgbW9ub3R5cGUsIGhlaWdodCA9ICczNicgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcbiAgICBjYXJldENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxuICAgIGZvbnRGYW1pbHk6IG1vbm90eXBlXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5tb25vXG4gICAgICA6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseS5wcmltYXJ5LFxuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxuICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZSh7ICczNic6ICcyMHB4JywgJzQwJzogJzIwcHgnIH0sIGhlaWdodCksXG4gICAgaGVpZ2h0OiBtYXRjaFNpemUoeyAnMzYnOiAnMzZweCcsICc0MCc6ICc0MHB4JyB9LCBoZWlnaHQpLFxuXG4gICAgcGF0aDoge1xuICAgICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tnZXRUaGVtZUNvbG9yQnlFcnJvcihlcnJvcildLFxuICAgIH0sXG5cbiAgICAuLi4oZXJyb3IgJiYge1xuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5ib3JkZXJSZWR9YCxcbiAgICB9KSxcblxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZCgnaW5wdXQnKTxJbnB1dFByb3BzPigoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogJ2luaGVyaXQnLFxuICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXG4gIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHBhZGRpbmc6IDAsXG4gICcmW3R5cGU9bnVtYmVyXTpmb2N1cywgJlt0eXBlPW51bWJlcl06Ymx1cic6IHtcbiAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICdudW1iZXItaW5wdXQnLFxuICB9LFxuICAnJlt0eXBlPW51bWJlcl0nOiB7XG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ3RleHRmaWVsZCcsXG4gICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICAgfSxcbiAgfSxcbiAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUHJlZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXJnaW5SaWdodDogMTYsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIHBhdGg6IHtcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXG4gIH0sXG59KSk7XG5cbmNvbnN0IFN1ZmZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgbWFyZ2luTGVmdDogMTYsXG59KSk7XG5cbmNvbnN0IFN1ZmZpeFRleHRDb250YWluZXIgPSBzdHlsZWQoU3VmZml4Q29udGFpbmVyKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxufSkpO1xuXG5leHBvcnQgZW51bSBJbnB1dFZhbGlkYXRpb25UeXBlIHtcbiAgUG9zaXRpdmVJbnRlZ2VyID0gJ3Bvc2l0aXZlX2ludCcsXG4gIENTUFIgPSAnY3NwcicsXG4gIGVtYWlsID0gJ2VtYWlsJyxcbiAgcGFzc3dvcmQgPSAncGFzc3dvcmQnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHZhbHVlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvbkNoYW5nZT86IChldjogYW55KSA9PiB2b2lkO1xuICBvbkZvY3VzPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uQmx1cj86IChldjogYW55KSA9PiB2b2lkO1xuICBvbktleURvd24/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgaGVpZ2h0PzogJzM2JyB8ICc0MCc7XG4gIG1pbj86IHN0cmluZztcbiAgbWF4Pzogc3RyaW5nO1xuICBzdGVwPzogc3RyaW5nO1xuICBsYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcHJlZml4SWNvbj86IFJlYWN0Tm9kZSB8IG51bGw7XG4gIHN1ZmZpeEljb24/OiBSZWFjdE5vZGUgfCBudWxsO1xuICBzdWZmaXhUZXh0Pzogc3RyaW5nIHwgbnVsbDtcblxuICByZXF1aXJlZD86IGJvb2xlYW47XG4gIGVycm9yPzogYm9vbGVhbjtcbiAgdmFsaWRhdGlvblR5cGU/OiBJbnB1dFZhbGlkYXRpb25UeXBlO1xuICB2YWxpZGF0aW9uVGV4dD86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnB1dCh7XG4gIGlkLFxuICBjbGFzc05hbWUsXG4gIHN0eWxlLFxuICBkaXNhYmxlZCxcbiAgbW9ub3R5cGUsXG4gIGhlaWdodCxcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHByZWZpeEljb24sXG4gIHN1ZmZpeEljb24sXG4gIHN1ZmZpeFRleHQsXG4gIHJlcXVpcmVkLFxuICBlcnJvcixcbiAgdmFsaWRhdGlvblR5cGUsXG4gIHZhbGlkYXRpb25UZXh0LFxuICBvbkZvY3VzLFxuICAuLi5yZXN0UHJvcHNcbn06IElucHV0UHJvcHMpIHtcbiAgY29uc3QgdmFsaWRhdGlvblByb3BzID1cbiAgICB2YWxpZGF0aW9uVHlwZSA9PSBudWxsXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB7XG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuQ1NQUl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMCcsXG4gICAgICAgICAgICBtYXg6ICcwJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLlBvc2l0aXZlSW50ZWdlcl06IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgbWluOiAnMScsXG4gICAgICAgICAgICBtYXg6ICcxJyxcbiAgICAgICAgICAgIHN0ZXA6ICcwJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLmVtYWlsXToge1xuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtJbnB1dFZhbGlkYXRpb25UeXBlLnBhc3N3b3JkXToge1xuICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9W3ZhbGlkYXRpb25UeXBlXTtcblxuICBjb25zdCBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcbiAgICBvbkZvY3VzICYmIG9uRm9jdXMoZXZlbnQpO1xuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHN1ZmZpeEljb24gPSA8U3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRcbiAgICAgIGlkPXtpZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgcmlnaHRMYWJlbD17cmlnaHRMYWJlbH1cbiAgICAgIHN0YXR1cz17ZXJyb3IgPyBGb3JtRmllbGRTdGF0dXMuRXJyb3IgOiB1bmRlZmluZWR9XG4gICAgICBzdGF0dXNUZXh0PXt2YWxpZGF0aW9uVGV4dH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICA+XG4gICAgICA8SW5wdXRDb250YWluZXIgbW9ub3R5cGU9e21vbm90eXBlfSBlcnJvcj17ZXJyb3J9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAge3ByZWZpeEljb24gJiYgPFByZWZpeENvbnRhaW5lcj57cHJlZml4SWNvbn08L1ByZWZpeENvbnRhaW5lcj59XG5cbiAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgICAgICB7Li4udmFsaWRhdGlvblByb3BzfVxuICAgICAgICAgIHsuLi5yZXN0UHJvcHN9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3N1ZmZpeEljb24gJiYgPFN1ZmZpeENvbnRhaW5lcj57c3VmZml4SWNvbn08L1N1ZmZpeENvbnRhaW5lcj59XG5cbiAgICAgICAge3N1ZmZpeFRleHQgJiYgPFN1ZmZpeFRleHRDb250YWluZXI+e3N1ZmZpeFRleHR9PC9TdWZmaXhUZXh0Q29udGFpbmVyPn1cbiAgICAgIDwvSW5wdXRDb250YWluZXI+XG4gICAgPC9Gb3JtRmllbGQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19