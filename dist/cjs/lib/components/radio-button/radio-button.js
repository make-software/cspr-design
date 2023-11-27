"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButton = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var Container = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        cursor: 'pointer',
        userSelect: 'none',
    });
});
var OuterCircle = styled_components_1.default.div(function (_a) {
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
var InnerCircle = styled_components_1.default.div(function (_a) {
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
function RadioButton(_a) {
    var selected = _a.selected, onChange = _a.onChange, label = _a.label, value = _a.value, disabled = _a.disabled, color = _a.color;
    return ((0, jsx_runtime_1.jsxs)(Container, tslib_1.__assign({ onClick: function () {
            onChange && onChange(value);
        } }, { children: [(0, jsx_runtime_1.jsx)(OuterCircle, tslib_1.__assign({ disabled: disabled, color: color }, { children: (0, jsx_runtime_1.jsx)(InnerCircle, { unslected: value !== selected, disabled: disabled, color: color }) })), label] })));
}
exports.RadioButton = RadioButton;
exports.default = RadioButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBWXZDLElBQU0sU0FBUyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzQyxPQUFPLEVBQUUsTUFBTTtRQUNmLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7QUFKMEMsQ0FJMUMsQ0FBQyxDQUFDO0FBRUosSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQzVCLFVBQUMsRUFBMEM7UUFBeEMsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsYUFBcUIsRUFBckIsS0FBSyxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDL0MsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixNQUFNLEVBQUUsUUFBUTtZQUNkLENBQUMsQ0FBQyxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUU7WUFDekQsQ0FBQyxDQUFDLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBRTtRQUNoRCxZQUFZLEVBQUUsS0FBSztRQUNuQixPQUFPLEVBQUUsTUFBTTtRQUNmLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFdBQVcsRUFBRSxFQUFFO0tBQ2hCLENBQUM7QUFiOEMsQ0FhOUMsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBSTNCLFVBQUMsRUFBcUQ7UUFBbkQsS0FBSyxXQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsYUFBcUIsRUFBckIsS0FBSyxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDN0QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxQixlQUFlLEVBQUUsUUFBUTtZQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtZQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztLQUNsQyxDQUFDO0FBUDRELENBTzVELENBQUMsQ0FBQztBQUVKLFNBQWdCLFdBQVcsQ0FBQyxFQU9UO1FBTmpCLFFBQVEsY0FBQSxFQUNSLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQTtJQUVMLE9BQU8sQ0FDTCx3QkFBQyxTQUFTLHFCQUNSLE9BQU8sRUFBRTtZQUNQLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxpQkFFRCx1QkFBQyxXQUFXLHFCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssZ0JBQzNDLHVCQUFDLFdBQVcsSUFDVixTQUFTLEVBQUUsS0FBSyxLQUFLLFFBQVEsRUFDN0IsUUFBUSxFQUFFLFFBQVEsRUFDbEIsS0FBSyxFQUFFLEtBQUssR0FDWixJQUNVLEVBQ2IsS0FBSyxLQUNJLENBQ2IsQ0FBQztBQUNKLENBQUM7QUF4QkQsa0NBd0JDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhZGlvQnV0dG9uUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBsYWJlbD86IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgc2VsZWN0ZWQ6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICB1c2VyU2VsZWN0OiAnbm9uZScsXG59KSk7XG5cbmNvbnN0IE91dGVyQ2lyY2xlID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbjsgY29sb3I/OiBzdHJpbmcgfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCwgY29sb3IgPSAnY29udGVudEJsdWUnIH0pID0+ICh7XG4gICAgd2lkdGg6IDI0LFxuICAgIGhlaWdodDogMjQsXG4gICAgbWluV2lkdGg6IDI0LFxuICAgIG1pbkhlaWdodDogMjQsXG4gICAgYm9yZGVyOiBkaXNhYmxlZFxuICAgICAgPyBgMnB4IHNvbGlkICR7dGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeX1gXG4gICAgICA6IGAycHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvbG9yXX1gLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5SaWdodDogMTIsXG4gIH0pXG4pO1xuXG5jb25zdCBJbm5lckNpcmNsZSA9IHN0eWxlZC5kaXY8e1xuICB1bnNsZWN0ZWQ6IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY29sb3I/OiBzdHJpbmc7XG59PigoeyB0aGVtZSwgdW5zbGVjdGVkLCBkaXNhYmxlZCwgY29sb3IgPSAnY29udGVudEJsdWUnIH0pID0+ICh7XG4gIGJvcmRlclJhZGl1czogJzUwJScsXG4gIHdpZHRoOiB1bnNsZWN0ZWQgPyAwIDogMTIsXG4gIGhlaWdodDogdW5zbGVjdGVkID8gMCA6IDEyLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGRpc2FibGVkXG4gICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XG4gICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvbG9yXSxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJhZGlvQnV0dG9uKHtcbiAgc2VsZWN0ZWQsXG4gIG9uQ2hhbmdlLFxuICBsYWJlbCxcbiAgdmFsdWUsXG4gIGRpc2FibGVkLFxuICBjb2xvcixcbn06IFJhZGlvQnV0dG9uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPE91dGVyQ2lyY2xlIGRpc2FibGVkPXtkaXNhYmxlZH0gY29sb3I9e2NvbG9yfT5cbiAgICAgICAgPElubmVyQ2lyY2xlXG4gICAgICAgICAgdW5zbGVjdGVkPXt2YWx1ZSAhPT0gc2VsZWN0ZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgLz5cbiAgICAgIDwvT3V0ZXJDaXJjbGU+XG4gICAgICB7bGFiZWx9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uO1xuIl19