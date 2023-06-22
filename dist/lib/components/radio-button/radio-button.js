import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
var Container = styled.div(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        cursor: 'pointer',
        userSelect: 'none',
    });
});
var OuterCircle = styled.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled, _b = _a.color, color = _b === void 0 ? 'contentBlue' : _b;
    return ({
        width: 24,
        height: 24,
        minWidth: 24,
        minHeight: 24,
        border: disabled
            ? "2px solid ".concat(theme.styleguideColors.contentQuaternary)
            : "2px solid ".concat(theme.styleguideColors[color]),
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    });
});
var InnerCircle = styled.div(function (_a) {
    var theme = _a.theme, unslected = _a.unslected, disabled = _a.disabled, _b = _a.color, color = _b === void 0 ? 'contentBlue' : _b;
    return ({
        borderRadius: '50%',
        width: unslected ? 0 : 12,
        height: unslected ? 0 : 12,
        backgroundColor: disabled
            ? theme.styleguideColors.contentQuaternary
            : theme.styleguideColors[color],
    });
});
export function RadioButton(_a) {
    var selected = _a.selected, onChange = _a.onChange, label = _a.label, value = _a.value, disabled = _a.disabled, color = _a.color;
    return (_jsxs(Container, __assign({ onClick: function () {
            onChange && onChange(value);
        } }, { children: [_jsx(OuterCircle, __assign({ disabled: disabled, color: color }, { children: _jsx(InnerCircle, { unslected: value !== selected, disabled: disabled, color: color }) })), label] })));
}
export default RadioButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFZdkMsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDM0MsT0FBTyxFQUFFLE1BQU07UUFDZixNQUFNLEVBQUUsU0FBUztRQUNqQixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0FBSjBDLENBSTFDLENBQUMsQ0FBQztBQUVKLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQzVCLFVBQUMsRUFBMEM7UUFBeEMsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsYUFBcUIsRUFBckIsS0FBSyxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDL0MsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixNQUFNLEVBQUUsUUFBUTtZQUNkLENBQUMsQ0FBQyxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUU7WUFDekQsQ0FBQyxDQUFDLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBRTtRQUNoRCxZQUFZLEVBQUUsS0FBSztRQUNuQixPQUFPLEVBQUUsTUFBTTtRQUNmLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFdBQVcsRUFBRSxFQUFFO0tBQ2hCLENBQUM7QUFiOEMsQ0FhOUMsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FJM0IsVUFBQyxFQUFxRDtRQUFuRCxLQUFLLFdBQUEsRUFBRSxTQUFTLGVBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxhQUFxQixFQUFyQixLQUFLLG1CQUFHLGFBQWEsS0FBQTtJQUFPLE9BQUEsQ0FBQztRQUM3RCxZQUFZLEVBQUUsS0FBSztRQUNuQixLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDekIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQzFCLGVBQWUsRUFBRSxRQUFRO1lBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1lBQzFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0tBQ2xDLENBQUM7QUFQNEQsQ0FPNUQsQ0FBQyxDQUFDO0FBRUosTUFBTSxVQUFVLFdBQVcsQ0FBQyxFQU9UO1FBTmpCLFFBQVEsY0FBQSxFQUNSLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQTtJQUVMLE9BQU8sQ0FDTCxNQUFDLFNBQVMsYUFDUixPQUFPLEVBQUU7WUFDUCxRQUFRLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsaUJBRUQsS0FBQyxXQUFXLGFBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxnQkFDM0MsS0FBQyxXQUFXLElBQ1YsU0FBUyxFQUFFLEtBQUssS0FBSyxRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLEtBQUssRUFBRSxLQUFLLEdBQ1osSUFDVSxFQUNiLEtBQUssS0FDSSxDQUNiLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSYWRpb0J1dHRvblByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBsYWJlbD86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBvbkNoYW5nZT86ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIHNlbGVjdGVkOiBzdHJpbmc7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBjb2xvcj86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgdXNlclNlbGVjdDogJ25vbmUnLFxyXG59KSk7XHJcblxyXG5jb25zdCBPdXRlckNpcmNsZSA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW47IGNvbG9yPzogc3RyaW5nIH0+KFxyXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgY29sb3IgPSAnY29udGVudEJsdWUnIH0pID0+ICh7XHJcbiAgICB3aWR0aDogMjQsXHJcbiAgICBoZWlnaHQ6IDI0LFxyXG4gICAgbWluV2lkdGg6IDI0LFxyXG4gICAgbWluSGVpZ2h0OiAyNCxcclxuICAgIGJvcmRlcjogZGlzYWJsZWRcclxuICAgICAgPyBgMnB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeX1gXHJcbiAgICAgIDogYDJweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbY29sb3JdfWAsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5SaWdodDogMTIsXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IElubmVyQ2lyY2xlID0gc3R5bGVkLmRpdjx7XHJcbiAgdW5zbGVjdGVkOiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBjb2xvcj86IHN0cmluZztcclxufT4oKHsgdGhlbWUsIHVuc2xlY3RlZCwgZGlzYWJsZWQsIGNvbG9yID0gJ2NvbnRlbnRCbHVlJyB9KSA9PiAoe1xyXG4gIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgd2lkdGg6IHVuc2xlY3RlZCA/IDAgOiAxMixcclxuICBoZWlnaHQ6IHVuc2xlY3RlZCA/IDAgOiAxMixcclxuICBiYWNrZ3JvdW5kQ29sb3I6IGRpc2FibGVkXHJcbiAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcclxuICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tjb2xvcl0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSYWRpb0J1dHRvbih7XHJcbiAgc2VsZWN0ZWQsXHJcbiAgb25DaGFuZ2UsXHJcbiAgbGFiZWwsXHJcbiAgdmFsdWUsXHJcbiAgZGlzYWJsZWQsXHJcbiAgY29sb3IsXHJcbn06IFJhZGlvQnV0dG9uUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8T3V0ZXJDaXJjbGUgZGlzYWJsZWQ9e2Rpc2FibGVkfSBjb2xvcj17Y29sb3J9PlxyXG4gICAgICAgIDxJbm5lckNpcmNsZVxyXG4gICAgICAgICAgdW5zbGVjdGVkPXt2YWx1ZSAhPT0gc2VsZWN0ZWR9XHJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9PdXRlckNpcmNsZT5cclxuICAgICAge2xhYmVsfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9CdXR0b247XHJcbiJdfQ==