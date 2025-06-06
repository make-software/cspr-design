"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = exports.CheckboxFontSize = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var ic_checkbox_checked_inactive_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-checkbox-checked-inactive.svg"));
var ic_checkbox_checked_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-checkbox-checked.svg"));
var ic_checkbox_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-checkbox.svg"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var subtitle_text_1 = tslib_1.__importDefault(require("../subtitle-text/subtitle-text"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var StyledFlexRow = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, checked = _a.checked, disabled = _a.disabled, customCheckedColor = _a.customCheckedColor, customUncheckedColor = _a.customUncheckedColor;
    return ({
        cursor: disabled ? 'default' : 'pointer',
        width: 'fit-content',
        pointerEvents: disabled ? 'none' : 'auto',
        svg: {
            fill: checked && !disabled && customCheckedColor
                ? customCheckedColor
                : checked && !disabled
                    ? theme.styleguideColors.contentBlue
                    : 'none',
            path: {
                fill: checked && !disabled
                    ? theme.styleguideColors.backgroundPrimary
                    : checked && disabled
                        ? theme.styleguideColors.contentQuaternary
                        : 'none',
            },
            rect: {
                stroke: disabled
                    ? theme.styleguideColors.contentQuaternary
                    : customUncheckedColor
                        ? customUncheckedColor
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
var CheckboxFontSize;
(function (CheckboxFontSize) {
    CheckboxFontSize["default"] = "default";
    CheckboxFontSize["small"] = "small";
})(CheckboxFontSize = exports.CheckboxFontSize || (exports.CheckboxFontSize = {}));
var StyledCheckboxWrapper = function (_a) {
    var checkboxFontSize = _a.checkboxFontSize, props = tslib_1.__rest(_a, ["checkboxFontSize"]);
    return checkboxFontSize === CheckboxFontSize.small ? ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: 'xs' }, props))) : ((0, jsx_runtime_1.jsx)(subtitle_text_1.default, tslib_1.__assign({ size: 2 }, props)));
};
function Checkbox(_a) {
    var checked = _a.checked, onChange = _a.onChange, label = _a.label, disabled = _a.disabled, customCheckedColor = _a.customCheckedColor, customUncheckedColor = _a.customUncheckedColor, _b = _a.checkboxFontSize, checkboxFontSize = _b === void 0 ? CheckboxFontSize.default : _b;
    var handleClick = function (event) {
        onChange && onChange(event);
    };
    var iconSrc = checked
        ? disabled
            ? ic_checkbox_checked_inactive_svg_1.default
            : ic_checkbox_checked_svg_1.default
        : ic_checkbox_svg_1.default;
    return ((0, jsx_runtime_1.jsxs)(StyledFlexRow, tslib_1.__assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick, customCheckedColor: customCheckedColor, customUncheckedColor: customUncheckedColor, role: "checkbox", "aria-checked": checked, "aria-disabled": disabled, "aria-label": checked ? "Checked" : "Not checked", tabIndex: 0 }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconSrc }), (0, jsx_runtime_1.jsx)(StyledCheckboxWrapper, tslib_1.__assign({ checkboxFontSize: checkboxFontSize }, { children: label }))] })));
}
exports.Checkbox = Checkbox;
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlJQUFzRjtBQUN0RiwrR0FBeUU7QUFDekUsK0ZBQThEO0FBRTlELDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MseUZBQTBEO0FBQzFELDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQVFuQyxVQUFDLEVBQXNFO1FBQXBFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGtCQUFrQix3QkFBQSxFQUFFLG9CQUFvQiwwQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFDRixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksa0JBQWtCO2dCQUN4QyxDQUFDLENBQUMsa0JBQWtCO2dCQUNwQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO29CQUNwQyxDQUFDLENBQUMsTUFBTTtZQUNaLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQ0YsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7b0JBQzFDLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUTt3QkFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7d0JBQzFDLENBQUMsQ0FBQyxNQUFNO2FBQ2I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLFFBQVE7b0JBQ2QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7b0JBQzFDLENBQUMsQ0FBQyxvQkFBb0I7d0JBQ3RCLENBQUMsQ0FBQyxvQkFBb0I7d0JBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVzthQUN2QztTQUNGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLFFBQVE7Z0JBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7Z0JBQzFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztTQUMxQztLQUNGLENBQUM7QUFoQzBFLENBZ0MxRSxDQUNILENBQUM7QUFFRixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDMUIsdUNBQXFCLENBQUE7SUFDckIsbUNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBRUQsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLEVBQThCO0lBQTVCLElBQUEsZ0JBQWdCLHNCQUFBLEVBQUssS0FBSyxzQkFBNUIsb0JBQThCLENBQUY7SUFDekQsT0FBTyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ25ELHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksSUFBTSxLQUFLLEVBQUksQ0FDbkQsQ0FBQyxDQUFDLENBQUMsQ0FDRix1QkFBQyx1QkFBWSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxJQUFNLEtBQUssRUFBSSxDQUNyQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBaUJGLFNBQWdCLFFBQVEsQ0FBQyxFQVFUO1FBUGQsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUFBLEVBQ1IsS0FBSyxXQUFBLEVBQ0wsUUFBUSxjQUFBLEVBQ1Isa0JBQWtCLHdCQUFBLEVBQ2xCLG9CQUFvQiwwQkFBQSxFQUNwQix3QkFBMkMsRUFBM0MsZ0JBQWdCLG1CQUFHLGdCQUFnQixDQUFDLE9BQU8sS0FBQTtJQUUzQyxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQUs7UUFDeEIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUM7SUFFRixJQUFNLE9BQU8sR0FBRyxPQUFPO1FBQ3JCLENBQUMsQ0FBQyxRQUFRO1lBQ1IsQ0FBQyxDQUFDLDBDQUFtQjtZQUNyQixDQUFDLENBQUMsaUNBQWU7UUFDbkIsQ0FBQyxDQUFDLHlCQUFZLENBQUM7SUFFakIsT0FBTyxDQUNMLHdCQUFDLGFBQWEscUJBQ1osWUFBWSxFQUFFLENBQUMsRUFDZixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLGtCQUFrQixFQUFFLGtCQUFrQixFQUN0QyxvQkFBb0IsRUFBRSxvQkFBb0IsRUFDMUMsSUFBSSxFQUFDLFVBQVUsa0JBQ0QsT0FBTyxtQkFDTixRQUFRLGdCQUNYLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQy9DLFFBQVEsRUFBRSxDQUFDLGlCQUVYLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6Qix1QkFBQyxxQkFBcUIscUJBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLGdCQUN0RCxLQUFLLElBQ2dCLEtBQ1YsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUF4Q0QsNEJBd0NDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENoZWNrZWRJbmFjdGl2ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQtaW5hY3RpdmUuc3ZnJztcbmltcG9ydCBDaGVja0JveENoZWNrZWQgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQuc3ZnJztcbmltcG9ydCBDaGVja2JveEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LnN2Zyc7XG5cbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcblxuY29uc3QgU3R5bGVkRmxleFJvdyA9IHN0eWxlZChGbGV4Um93KTx7XG4gIHJvbGU/OiBzdHJpbmc7XG4gIHRhYkluZGV4PzogbnVtYmVyO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjdXN0b21DaGVja2VkQ29sb3I/OiBzdHJpbmc7XG4gIGN1c3RvbVVuY2hlY2tlZENvbG9yPzogc3RyaW5nO1xufT4oXG4gICh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCwgY3VzdG9tQ2hlY2tlZENvbG9yLCBjdXN0b21VbmNoZWNrZWRDb2xvciB9KSA9PiAoe1xuICAgIGN1cnNvcjogZGlzYWJsZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcicsXG4gICAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gICAgcG9pbnRlckV2ZW50czogZGlzYWJsZWQgPyAnbm9uZScgOiAnYXV0bycsXG4gICAgc3ZnOiB7XG4gICAgICBmaWxsOlxuICAgICAgICBjaGVja2VkICYmICFkaXNhYmxlZCAmJiBjdXN0b21DaGVja2VkQ29sb3JcbiAgICAgICAgICA/IGN1c3RvbUNoZWNrZWRDb2xvclxuICAgICAgICAgIDogY2hlY2tlZCAmJiAhZGlzYWJsZWRcbiAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVcbiAgICAgICAgICA6ICdub25lJyxcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgZmlsbDpcbiAgICAgICAgICBjaGVja2VkICYmICFkaXNhYmxlZFxuICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5XG4gICAgICAgICAgICA6IGNoZWNrZWQgJiYgZGlzYWJsZWRcbiAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgICAgICAgOiAnbm9uZScsXG4gICAgICB9LFxuICAgICAgcmVjdDoge1xuICAgICAgICBzdHJva2U6IGRpc2FibGVkXG4gICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XG4gICAgICAgICAgOiBjdXN0b21VbmNoZWNrZWRDb2xvclxuICAgICAgICAgID8gY3VzdG9tVW5jaGVja2VkQ29sb3JcbiAgICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3Bhbjoge1xuICAgICAgY29sb3I6IGRpc2FibGVkXG4gICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBlbnVtIENoZWNrYm94Rm9udFNpemUge1xuICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICdzbWFsbCcgPSAnc21hbGwnLFxufVxuXG5jb25zdCBTdHlsZWRDaGVja2JveFdyYXBwZXIgPSAoeyBjaGVja2JveEZvbnRTaXplLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiBjaGVja2JveEZvbnRTaXplID09PSBDaGVja2JveEZvbnRTaXplLnNtYWxsID8gKFxuICAgIDxCb2R5VGV4dCBzaXplPXszfSBsaW5lSGVpZ2h0PXsneHMnfSB7Li4ucHJvcHN9IC8+XG4gICkgOiAoXG4gICAgPFN1YnRpdGxlVGV4dCBzaXplPXsyfSB7Li4ucHJvcHN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgbGFiZWw/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjaGVja2JveCBpcyBjbGlja2VkXG4gICAqIEBwYXJhbSB2YWx1ZSAtIFtOT1RFXSBjb250YWlucyBIVE1MIGV2ZW50IGluc3RlYWQgb2YgYm9vbGVhbiB2YWx1ZVxuICAgKi9cbiAgb25DaGFuZ2U/OiAodmFsdWU/OiBhbnkpID0+IHZvaWQ7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3VzdG9tQ2hlY2tlZENvbG9yPzogc3RyaW5nO1xuICBjdXN0b21VbmNoZWNrZWRDb2xvcj86IHN0cmluZztcbiAgY2hlY2tib3hGb250U2l6ZT86IENoZWNrYm94Rm9udFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2hhbmdlLFxuICBsYWJlbCxcbiAgZGlzYWJsZWQsXG4gIGN1c3RvbUNoZWNrZWRDb2xvcixcbiAgY3VzdG9tVW5jaGVja2VkQ29sb3IsXG4gIGNoZWNrYm94Rm9udFNpemUgPSBDaGVja2JveEZvbnRTaXplLmRlZmF1bHQsXG59OiBDaGVja2JveFByb3BzKSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGljb25TcmMgPSBjaGVja2VkXG4gICAgPyBkaXNhYmxlZFxuICAgICAgPyBDaGVja2VkSW5hY3RpdmVJY29uXG4gICAgICA6IENoZWNrQm94Q2hlY2tlZFxuICAgIDogQ2hlY2tib3hJY29uO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEZsZXhSb3dcbiAgICAgIGl0ZW1zU3BhY2luZz17OH1cbiAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgIGN1c3RvbUNoZWNrZWRDb2xvcj17Y3VzdG9tQ2hlY2tlZENvbG9yfVxuICAgICAgY3VzdG9tVW5jaGVja2VkQ29sb3I9e2N1c3RvbVVuY2hlY2tlZENvbG9yfVxuICAgICAgcm9sZT1cImNoZWNrYm94XCJcbiAgICAgIGFyaWEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgYXJpYS1sYWJlbD17Y2hlY2tlZCA/IFwiQ2hlY2tlZFwiIDogXCJOb3QgY2hlY2tlZFwifVxuICAgICAgdGFiSW5kZXg9ezB9XG4gICAgPlxuICAgICAgPFN2Z0ljb24gc3JjPXtpY29uU3JjfSAvPlxuICAgICAgPFN0eWxlZENoZWNrYm94V3JhcHBlciBjaGVja2JveEZvbnRTaXplPXtjaGVja2JveEZvbnRTaXplfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9TdHlsZWRDaGVja2JveFdyYXBwZXI+XG4gICAgPC9TdHlsZWRGbGV4Um93PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ==