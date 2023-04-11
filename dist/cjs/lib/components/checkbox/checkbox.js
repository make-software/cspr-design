"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var StyledFlexRow = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, checked = _a.checked, disabled = _a.disabled;
    return ({
        cursor: disabled ? 'default' : 'pointer',
        width: 'fit-content',
        pointerEvents: disabled ? 'none' : 'auto',
        svg: {
            fill: checked && !disabled ? theme.styleguideColors.contentBlue : 'none',
            path: {
                fill: checked && !disabled
                    ? theme.styleguideColors.backgroundPrimary
                    : 'none',
            },
            rect: {
                stroke: disabled
                    ? theme.styleguideColors.contentQuaternary
                    : theme.styleguideColors.contentBlue,
            },
        },
        span: {
            color: disabled
                ? theme.styleguideColors.contentQuaternary
                : theme.styleguideColors.contentPrimary,
        },
    });
});
function Checkbox(_a) {
    var checked = _a.checked, onChange = _a.onChange, label = _a.label, disabled = _a.disabled;
    var handleClick = function (ev) {
        onChange && onChange(!checked);
    };
    var iconSrc = checked
        ? disabled
            ? 'assets/icons/ic-checkbox-checked-inactive.svg'
            : 'assets/icons/ic-checkbox-checked.svg'
        : 'assets/icons/ic-checkbox.svg';
    return ((0, jsx_runtime_1.jsxs)(StyledFlexRow, tslib_1.__assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconSrc }), (0, jsx_runtime_1.jsx)(subtitle_text_1.default, tslib_1.__assign({ size: 2 }, { children: label }))] })));
}
exports.Checkbox = Checkbox;
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBSXZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MseUZBQTBEO0FBRTFELElBQU0sYUFBYSxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBR2xDLFVBQUMsRUFBNEI7UUFBMUIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN4QyxLQUFLLEVBQUUsYUFBYTtRQUNwQixhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDekMsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUN4RSxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUNGLE9BQU8sSUFBSSxDQUFDLFFBQVE7b0JBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsTUFBTTthQUNiO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxRQUFRO29CQUNkLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7YUFDdkM7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxRQUFRO2dCQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO2dCQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7U0FDMUM7S0FDRixDQUFDO0FBdkJtQyxDQXVCbkMsQ0FBQyxDQUFDO0FBU0osU0FBZ0IsUUFBUSxDQUFDLEVBS1Q7UUFKZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUE7SUFFUixJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQUU7UUFDckIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUVGLElBQU0sT0FBTyxHQUFHLE9BQU87UUFDckIsQ0FBQyxDQUFDLFFBQVE7WUFDUixDQUFDLENBQUMsK0NBQStDO1lBQ2pELENBQUMsQ0FBQyxzQ0FBc0M7UUFDMUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDO0lBRW5DLE9BQU8sQ0FDTCx3QkFBQyxhQUFhLHFCQUNaLFlBQVksRUFBRSxDQUFDLEVBQ2YsS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxpQkFFcEIsdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUUsT0FBTyxHQUFJLEVBQ3pCLHVCQUFDLHVCQUFZLHFCQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLEtBQUssSUFBZ0IsS0FDL0IsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUE1QkQsNEJBNEJDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcblxuY29uc3QgU3R5bGVkRmxleFJvdyA9IHN0eWxlZChGbGV4Um93KTx7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59PigoeyB0aGVtZSwgY2hlY2tlZCwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgY3Vyc29yOiBkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyxcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gIHBvaW50ZXJFdmVudHM6IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nLFxuICBzdmc6IHtcbiAgICBmaWxsOiBjaGVja2VkICYmICFkaXNhYmxlZCA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUgOiAnbm9uZScsXG4gICAgcGF0aDoge1xuICAgICAgZmlsbDpcbiAgICAgICAgY2hlY2tlZCAmJiAhZGlzYWJsZWRcbiAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnlcbiAgICAgICAgICA6ICdub25lJyxcbiAgICB9LFxuICAgIHJlY3Q6IHtcbiAgICAgIHN0cm9rZTogZGlzYWJsZWRcbiAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XG4gICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICB9LFxuICB9LFxuICBzcGFuOiB7XG4gICAgY29sb3I6IGRpc2FibGVkXG4gICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcbiAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlPzogKHZhbHVlPzogYW55KSA9PiB2b2lkO1xuICBjaGVja2VkOiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2hhbmdlLFxuICBsYWJlbCxcbiAgZGlzYWJsZWQsXG59OiBDaGVja2JveFByb3BzKSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2KSA9PiB7XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoIWNoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IGljb25TcmMgPSBjaGVja2VkXG4gICAgPyBkaXNhYmxlZFxuICAgICAgPyAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQtaW5hY3RpdmUuc3ZnJ1xuICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQuc3ZnJ1xuICAgIDogJ2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC5zdmcnO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEZsZXhSb3dcbiAgICAgIGl0ZW1zU3BhY2luZz17OH1cbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICA+XG4gICAgICA8U3ZnSWNvbiBzcmM9e2ljb25TcmN9IC8+XG4gICAgICA8U3VidGl0bGVUZXh0IHNpemU9ezJ9PntsYWJlbH08L1N1YnRpdGxlVGV4dD5cbiAgICA8L1N0eWxlZEZsZXhSb3c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIl19