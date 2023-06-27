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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBSXZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MseUZBQTBEO0FBRTFELElBQU0sYUFBYSxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBR2xDLFVBQUMsRUFBNEI7UUFBMUIsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN4QyxLQUFLLEVBQUUsYUFBYTtRQUNwQixhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDekMsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUN4RSxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUNGLE9BQU8sSUFBSSxDQUFDLFFBQVE7b0JBQ2xCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsTUFBTTthQUNiO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxRQUFRO29CQUNkLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7YUFDdkM7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxRQUFRO2dCQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO2dCQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7U0FDMUM7S0FDRixDQUFDO0FBdkJtQyxDQXVCbkMsQ0FBQyxDQUFDO0FBU0osU0FBZ0IsUUFBUSxDQUFDLEVBS1Q7UUFKZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUE7SUFFUixJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQUU7UUFDckIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUVGLElBQU0sT0FBTyxHQUFHLE9BQU87UUFDckIsQ0FBQyxDQUFDLFFBQVE7WUFDUixDQUFDLENBQUMsK0NBQStDO1lBQ2pELENBQUMsQ0FBQyxzQ0FBc0M7UUFDMUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDO0lBRW5DLE9BQU8sQ0FDTCx3QkFBQyxhQUFhLHFCQUNaLFlBQVksRUFBRSxDQUFDLEVBQ2YsS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxpQkFFcEIsdUJBQUMsa0JBQU8sSUFBQyxHQUFHLEVBQUUsT0FBTyxHQUFJLEVBQ3pCLHVCQUFDLHVCQUFZLHFCQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLEtBQUssSUFBZ0IsS0FDL0IsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUE1QkQsNEJBNEJDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcclxuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xyXG5cclxuY29uc3QgU3R5bGVkRmxleFJvdyA9IHN0eWxlZChGbGV4Um93KTx7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59PigoeyB0aGVtZSwgY2hlY2tlZCwgZGlzYWJsZWQgfSkgPT4gKHtcclxuICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxyXG4gIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gIHBvaW50ZXJFdmVudHM6IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nLFxyXG4gIHN2Zzoge1xyXG4gICAgZmlsbDogY2hlY2tlZCAmJiAhZGlzYWJsZWQgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlIDogJ25vbmUnLFxyXG4gICAgcGF0aDoge1xyXG4gICAgICBmaWxsOlxyXG4gICAgICAgIGNoZWNrZWQgJiYgIWRpc2FibGVkXHJcbiAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnlcclxuICAgICAgICAgIDogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHJlY3Q6IHtcclxuICAgICAgc3Ryb2tlOiBkaXNhYmxlZFxyXG4gICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxyXG4gICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcGFuOiB7XHJcbiAgICBjb2xvcjogZGlzYWJsZWRcclxuICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XHJcbiAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIGxhYmVsPzogUmVhY3QuUmVhY3RFbGVtZW50IHwgc3RyaW5nO1xyXG4gIG9uQ2hhbmdlPzogKHZhbHVlPzogYW55KSA9PiB2b2lkO1xyXG4gIGNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tib3goe1xyXG4gIGNoZWNrZWQsXHJcbiAgb25DaGFuZ2UsXHJcbiAgbGFiZWwsXHJcbiAgZGlzYWJsZWQsXHJcbn06IENoZWNrYm94UHJvcHMpIHtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldikgPT4ge1xyXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoIWNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGljb25TcmMgPSBjaGVja2VkXHJcbiAgICA/IGRpc2FibGVkXHJcbiAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC1jaGVja2VkLWluYWN0aXZlLnN2ZydcclxuICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQuc3ZnJ1xyXG4gICAgOiAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LnN2Zyc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRmxleFJvd1xyXG4gICAgICBpdGVtc1NwYWNpbmc9ezh9XHJcbiAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgID5cclxuICAgICAgPFN2Z0ljb24gc3JjPXtpY29uU3JjfSAvPlxyXG4gICAgICA8U3VidGl0bGVUZXh0IHNpemU9ezJ9PntsYWJlbH08L1N1YnRpdGxlVGV4dD5cclxuICAgIDwvU3R5bGVkRmxleFJvdz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcclxuIl19