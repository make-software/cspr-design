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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLHFEQUFtRDtBQUNuRCw2RUFBc0U7QUFDdEUsMEVBQTJDO0FBRTNDLElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFlO0lBQzNDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLGVBQWUsQ0FBQztLQUN4QjtJQUVELE9BQU8sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDbEMsVUFBQyxFQUFtRDtRQUFqRCxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxjQUFhLEVBQWIsTUFBTSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLHFDQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxLQUFLLEVBQ3BCLGNBQWMsRUFBRSxlQUFlLEVBQy9CLFVBQVUsRUFBRSxRQUFRLEVBQ3BCLE9BQU8sRUFBRSxRQUFRLEVBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFDckMsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQzVDLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNoRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFDakQsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8s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QUFFLEVBQ04sU0FBUyxFQUFFLFNBQVMsRUFDcEIsS0FBSyxFQUFFLEtBQUssRUFDWixLQUFLLEVBQUUsS0FBSyxFQUNaLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQ2pELFVBQVUsRUFBRSxjQUFjLEVBQzFCLFFBQVEsRUFBRSxRQUFRLGdCQUVsQix3QkFBQyxjQUFjLHFCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFDN0QsVUFBVSxJQUFJLHVCQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTlELHVCQUFDLFdBQVcscUJBQ1YsS0FBSyxFQUFDLEVBQUUsRUFDUixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxJQUNoQixlQUFlLEVBQ2YsU0FBUyxFQUNiLEVBRUQsVUFBVSxJQUFJLHVCQUFDLGVBQWUsY0FBRSxVQUFVLEdBQW1CLEVBRTdELFVBQVUsSUFBSSx1QkFBQyxtQkFBbUIsY0FBRSxVQUFVLEdBQXVCLEtBQ3ZELElBQ1AsQ0FDYixDQUFDO0FBQ0osQ0FBQztBQWhGRCxzQkFnRkM7QUFFRCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcclxuaW1wb3J0IEZvcm1GaWVsZCwgeyBGb3JtRmllbGRTdGF0dXMgfSBmcm9tICcuLi9mb3JtLWZpZWxkL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XHJcblxyXG5jb25zdCBnZXRUaGVtZUNvbG9yQnlFcnJvciA9IChlcnJvcj86IGJvb2xlYW4pID0+IHtcclxuICBpZiAoZXJyb3IgPT0gbnVsbCB8fCAhZXJyb3IpIHtcclxuICAgIHJldHVybiAnZmlsbFNlY29uZGFyeSc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gJ2NvbnRlbnRSZWQnO1xyXG59O1xyXG5cclxuY29uc3QgSW5wdXRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPElucHV0UHJvcHM+KFxyXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgZXJyb3IsIG1vbm90eXBlLCBoZWlnaHQgPSAnMzYnIH0pID0+ICh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICcwIDE2cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxyXG4gICAgY2FyZXRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcclxuICAgIGZvbnRGYW1pbHk6IG1vbm90eXBlXHJcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9cclxuICAgICAgOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkucHJpbWFyeSxcclxuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxyXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzIwcHgnLCAnNDAnOiAnMjBweCcgfSwgaGVpZ2h0KSxcclxuICAgIGhlaWdodDogbWF0Y2hTaXplKHsgJzM2JzogJzM2cHgnLCAnNDAnOiAnNDBweCcgfSwgaGVpZ2h0KSxcclxuXHJcbiAgICBwYXRoOiB7XHJcbiAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvckJ5RXJyb3IoZXJyb3IpXSxcclxuICAgIH0sXHJcblxyXG4gICAgLi4uKGVycm9yICYmIHtcclxuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5ib3JkZXJSZWR9YCxcclxuICAgIH0pLFxyXG5cclxuICAgIC4uLihkaXNhYmxlZCAmJiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxyXG4gICAgfSksXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkKCdpbnB1dCcpPElucHV0UHJvcHM+KCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgY29sb3I6ICdpbmhlcml0JyxcclxuICBiYWNrZ3JvdW5kOiAnaW5oZXJpdCcsXHJcbiAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgYm9yZGVyOiAnbm9uZScsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBwYWRkaW5nOiAwLFxyXG4gICcmW3R5cGU9bnVtYmVyXSc6IHtcclxuICAgICcmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uJzoge1xyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXHJcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICAnJjo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFByZWZpeENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBtYXJnaW5SaWdodDogMTYsXHJcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFNlY29uZGFyeSxcclxuICBwYXRoOiB7XHJcbiAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRTZWNvbmRhcnksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3VmZml4Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIG1hcmdpbkxlZnQ6IDE2LFxyXG59KSk7XHJcblxyXG5jb25zdCBTdWZmaXhUZXh0Q29udGFpbmVyID0gc3R5bGVkKFN1ZmZpeENvbnRhaW5lcikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZW51bSBJbnB1dFZhbGlkYXRpb25UeXBlIHtcclxuICBQb3NpdGl2ZUludGVnZXIgPSAncG9zaXRpdmVfaW50JyxcclxuICBDU1BSID0gJ2NzcHInLFxyXG4gIGVtYWlsID0gJ2VtYWlsJyxcclxuICBwYXNzd29yZCA9ICdwYXNzd29yZCcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIG1vbm90eXBlPzogYm9vbGVhbjtcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICB2YWx1ZT86IHN0cmluZyB8IG51bWJlcjtcclxuICBvbkNoYW5nZT86IChldjogYW55KSA9PiB2b2lkO1xyXG4gIG9uRm9jdXM/OiAoZXY6IGFueSkgPT4gdm9pZDtcclxuICBvbkJsdXI/OiAoZXY6IGFueSkgPT4gdm9pZDtcclxuICBvbktleURvd24/OiAoZXY6IGFueSkgPT4gdm9pZDtcclxuICBoZWlnaHQ/OiAnMzYnIHwgJzQwJztcclxuICBtaW4/OiBzdHJpbmc7XHJcbiAgbWF4Pzogc3RyaW5nO1xyXG4gIHN0ZXA/OiBzdHJpbmc7XHJcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XHJcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcclxuICBwcmVmaXhJY29uPzogUmVhY3ROb2RlIHwgbnVsbDtcclxuICBzdWZmaXhJY29uPzogUmVhY3ROb2RlIHwgbnVsbDtcclxuICBzdWZmaXhUZXh0Pzogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgcmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gIGVycm9yPzogYm9vbGVhbjtcclxuICB2YWxpZGF0aW9uVHlwZT86IElucHV0VmFsaWRhdGlvblR5cGU7XHJcbiAgdmFsaWRhdGlvblRleHQ/OiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXQoe1xyXG4gIGlkLFxyXG4gIGNsYXNzTmFtZSxcclxuICBzdHlsZSxcclxuICBkaXNhYmxlZCxcclxuICBtb25vdHlwZSxcclxuICBoZWlnaHQsXHJcbiAgbGFiZWwsXHJcbiAgcmlnaHRMYWJlbCxcclxuICBwcmVmaXhJY29uLFxyXG4gIHN1ZmZpeEljb24sXHJcbiAgc3VmZml4VGV4dCxcclxuICByZXF1aXJlZCxcclxuICBlcnJvcixcclxuICB2YWxpZGF0aW9uVHlwZSxcclxuICB2YWxpZGF0aW9uVGV4dCxcclxuICBvbkZvY3VzLFxyXG4gIC4uLnJlc3RQcm9wc1xyXG59OiBJbnB1dFByb3BzKSB7XHJcbiAgY29uc3QgdmFsaWRhdGlvblByb3BzID1cclxuICAgIHZhbGlkYXRpb25UeXBlID09IG51bGxcclxuICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgOiB7XHJcbiAgICAgICAgICBbSW5wdXRWYWxpZGF0aW9uVHlwZS5DU1BSXToge1xyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgbWluOiAnMCcsXHJcbiAgICAgICAgICAgIG1heDogJzAnLFxyXG4gICAgICAgICAgICBzdGVwOiAnMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuUG9zaXRpdmVJbnRlZ2VyXToge1xyXG4gICAgICAgICAgICB0eXBlOiAnbnVtYmVyJyxcclxuICAgICAgICAgICAgbWluOiAnMScsXHJcbiAgICAgICAgICAgIG1heDogJzEnLFxyXG4gICAgICAgICAgICBzdGVwOiAnMCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUuZW1haWxdOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgW0lucHV0VmFsaWRhdGlvblR5cGUucGFzc3dvcmRdOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1bdmFsaWRhdGlvblR5cGVdO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb2N1cyA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xyXG4gICAgb25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50KTtcclxuICB9O1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHN1ZmZpeEljb24gPSA8U3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnXCIgLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1GaWVsZFxyXG4gICAgICBpZD17aWR9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgcmlnaHRMYWJlbD17cmlnaHRMYWJlbH1cclxuICAgICAgc3RhdHVzPXtlcnJvciA/IEZvcm1GaWVsZFN0YXR1cy5FcnJvciA6IHVuZGVmaW5lZH1cclxuICAgICAgc3RhdHVzVGV4dD17dmFsaWRhdGlvblRleHR9XHJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgID5cclxuICAgICAgPElucHV0Q29udGFpbmVyIG1vbm90eXBlPXttb25vdHlwZX0gZXJyb3I9e2Vycm9yfSBoZWlnaHQ9e2hlaWdodH0+XHJcbiAgICAgICAge3ByZWZpeEljb24gJiYgPFByZWZpeENvbnRhaW5lcj57cHJlZml4SWNvbn08L1ByZWZpeENvbnRhaW5lcj59XHJcblxyXG4gICAgICAgIDxTdHlsZWRJbnB1dFxyXG4gICAgICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgb25Gb2N1cz17aGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICB7Li4udmFsaWRhdGlvblByb3BzfVxyXG4gICAgICAgICAgey4uLnJlc3RQcm9wc31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICB7c3VmZml4SWNvbiAmJiA8U3VmZml4Q29udGFpbmVyPntzdWZmaXhJY29ufTwvU3VmZml4Q29udGFpbmVyPn1cclxuXHJcbiAgICAgICAge3N1ZmZpeFRleHQgJiYgPFN1ZmZpeFRleHRDb250YWluZXI+e3N1ZmZpeFRleHR9PC9TdWZmaXhUZXh0Q29udGFpbmVyPn1cclxuICAgICAgPC9JbnB1dENvbnRhaW5lcj5cclxuICAgIDwvRm9ybUZpZWxkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iXX0=