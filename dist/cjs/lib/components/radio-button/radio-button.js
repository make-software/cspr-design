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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBWXZDLElBQU0sU0FBUyxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzQyxPQUFPLEVBQUUsTUFBTTtRQUNmLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7QUFKMEMsQ0FJMUMsQ0FBQyxDQUFDO0FBRUosSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQzVCLFVBQUMsRUFBMEM7UUFBeEMsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsYUFBcUIsRUFBckIsS0FBSyxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDL0MsS0FBSyxFQUFFLEVBQUU7UUFDVCxNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEVBQUU7UUFDYixNQUFNLEVBQUUsUUFBUTtZQUNkLENBQUMsQ0FBQyxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUU7WUFDekQsQ0FBQyxDQUFDLG9CQUFhLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBRTtRQUNoRCxZQUFZLEVBQUUsS0FBSztRQUNuQixPQUFPLEVBQUUsTUFBTTtRQUNmLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFdBQVcsRUFBRSxFQUFFO0tBQ2hCLENBQUM7QUFiOEMsQ0FhOUMsQ0FDSCxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBSTNCLFVBQUMsRUFBcUQ7UUFBbkQsS0FBSyxXQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsYUFBcUIsRUFBckIsS0FBSyxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDN0QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3pCLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUMxQixlQUFlLEVBQUUsUUFBUTtZQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtZQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztLQUNsQyxDQUFDO0FBUDRELENBTzVELENBQUMsQ0FBQztBQUVKLFNBQWdCLFdBQVcsQ0FBQyxFQU9UO1FBTmpCLFFBQVEsY0FBQSxFQUNSLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQTtJQUVMLE9BQU8sQ0FDTCx3QkFBQyxTQUFTLHFCQUNSLE9BQU8sRUFBRTtZQUNQLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxpQkFFRCx1QkFBQyxXQUFXLHFCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssZ0JBQzNDLHVCQUFDLFdBQVcsSUFDVixTQUFTLEVBQUUsS0FBSyxLQUFLLFFBQVEsRUFDN0IsUUFBUSxFQUFFLFFBQVEsRUFDbEIsS0FBSyxFQUFFLEtBQUssR0FDWixJQUNVLEVBQ2IsS0FBSyxLQUNJLENBQ2IsQ0FBQztBQUNKLENBQUM7QUF4QkQsa0NBd0JDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmFkaW9CdXR0b25Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgbGFiZWw/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgb25DaGFuZ2U/OiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICBzZWxlY3RlZDogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIHVzZXJTZWxlY3Q6ICdub25lJyxcclxufSkpO1xyXG5cclxuY29uc3QgT3V0ZXJDaXJjbGUgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuOyBjb2xvcj86IHN0cmluZyB9PihcclxuICAoeyB0aGVtZSwgZGlzYWJsZWQsIGNvbG9yID0gJ2NvbnRlbnRCbHVlJyB9KSA9PiAoe1xyXG4gICAgd2lkdGg6IDI0LFxyXG4gICAgaGVpZ2h0OiAyNCxcclxuICAgIG1pbldpZHRoOiAyNCxcclxuICAgIG1pbkhlaWdodDogMjQsXHJcbiAgICBib3JkZXI6IGRpc2FibGVkXHJcbiAgICAgID8gYDJweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnl9YFxyXG4gICAgICA6IGAycHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvbG9yXX1gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDEyLFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBJbm5lckNpcmNsZSA9IHN0eWxlZC5kaXY8e1xyXG4gIHVuc2xlY3RlZDogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbn0+KCh7IHRoZW1lLCB1bnNsZWN0ZWQsIGRpc2FibGVkLCBjb2xvciA9ICdjb250ZW50Qmx1ZScgfSkgPT4gKHtcclxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gIHdpZHRoOiB1bnNsZWN0ZWQgPyAwIDogMTIsXHJcbiAgaGVpZ2h0OiB1bnNsZWN0ZWQgPyAwIDogMTIsXHJcbiAgYmFja2dyb3VuZENvbG9yOiBkaXNhYmxlZFxyXG4gICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XHJcbiAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbY29sb3JdLFxyXG59KSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmFkaW9CdXR0b24oe1xyXG4gIHNlbGVjdGVkLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGxhYmVsLFxyXG4gIHZhbHVlLFxyXG4gIGRpc2FibGVkLFxyXG4gIGNvbG9yLFxyXG59OiBSYWRpb0J1dHRvblByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJcclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPE91dGVyQ2lyY2xlIGRpc2FibGVkPXtkaXNhYmxlZH0gY29sb3I9e2NvbG9yfT5cclxuICAgICAgICA8SW5uZXJDaXJjbGVcclxuICAgICAgICAgIHVuc2xlY3RlZD17dmFsdWUgIT09IHNlbGVjdGVkfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvT3V0ZXJDaXJjbGU+XHJcbiAgICAgIHtsYWJlbH1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhZGlvQnV0dG9uO1xyXG4iXX0=