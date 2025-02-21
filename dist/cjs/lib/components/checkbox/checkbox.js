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
    return ((0, jsx_runtime_1.jsxs)(StyledFlexRow, tslib_1.__assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick, customCheckedColor: customCheckedColor, customUncheckedColor: customUncheckedColor }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconSrc }), (0, jsx_runtime_1.jsx)(StyledCheckboxWrapper, tslib_1.__assign({ checkboxFontSize: checkboxFontSize }, { children: label }))] })));
}
exports.Checkbox = Checkbox;
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLGlJQUFzRjtBQUN0RiwrR0FBeUU7QUFDekUsK0ZBQThEO0FBRzlELDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MseUZBQTBEO0FBQzFELDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQU1uQyxVQUFDLEVBQXNFO1FBQXBFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGtCQUFrQix3QkFBQSxFQUFFLG9CQUFvQiwwQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFDRixPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksa0JBQWtCO2dCQUN4QyxDQUFDLENBQUMsa0JBQWtCO2dCQUNwQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO29CQUNwQyxDQUFDLENBQUMsTUFBTTtZQUNaLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQ0YsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7b0JBQzFDLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUTt3QkFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7d0JBQzFDLENBQUMsQ0FBQyxNQUFNO2FBQ2I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLFFBQVE7b0JBQ2QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7b0JBQzFDLENBQUMsQ0FBQyxvQkFBb0I7d0JBQ3RCLENBQUMsQ0FBQyxvQkFBb0I7d0JBQ3RCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVzthQUN2QztTQUNGO1FBQ0QsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLFFBQVE7Z0JBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7Z0JBQzFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztTQUMxQztLQUNGLENBQUM7QUFoQzBFLENBZ0MxRSxDQUNILENBQUM7QUFFRixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDMUIsdUNBQXFCLENBQUE7SUFDckIsbUNBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBRUQsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLEVBQThCO0lBQTVCLElBQUEsZ0JBQWdCLHNCQUFBLEVBQUssS0FBSyxzQkFBNUIsb0JBQThCLENBQUY7SUFDekQsT0FBTyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ25ELHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksSUFBTSxLQUFLLEVBQUksQ0FDbkQsQ0FBQyxDQUFDLENBQUMsQ0FDRix1QkFBQyx1QkFBWSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxJQUFNLEtBQUssRUFBSSxDQUNyQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBaUJGLFNBQWdCLFFBQVEsQ0FBQyxFQVFUO1FBUGQsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUFBLEVBQ1IsS0FBSyxXQUFBLEVBQ0wsUUFBUSxjQUFBLEVBQ1Isa0JBQWtCLHdCQUFBLEVBQ2xCLG9CQUFvQiwwQkFBQSxFQUNwQix3QkFBMkMsRUFBM0MsZ0JBQWdCLG1CQUFHLGdCQUFnQixDQUFDLE9BQU8sS0FBQTtJQUUzQyxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQUs7UUFDeEIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUM7SUFFRixJQUFNLE9BQU8sR0FBRyxPQUFPO1FBQ3JCLENBQUMsQ0FBQyxRQUFRO1lBQ1IsQ0FBQyxDQUFDLDBDQUFtQjtZQUNyQixDQUFDLENBQUMsaUNBQWU7UUFDbkIsQ0FBQyxDQUFDLHlCQUFZLENBQUM7SUFFakIsT0FBTyxDQUNMLHdCQUFDLGFBQWEscUJBQ1osWUFBWSxFQUFFLENBQUMsRUFDZixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLGtCQUFrQixFQUFFLGtCQUFrQixFQUN0QyxvQkFBb0IsRUFBRSxvQkFBb0IsaUJBRTFDLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6Qix1QkFBQyxxQkFBcUIscUJBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLGdCQUN0RCxLQUFLLElBQ2dCLEtBQ1YsQ0FDakIsQ0FBQztBQUNKLENBQUM7QUFuQ0QsNEJBbUNDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENoZWNrZWRJbmFjdGl2ZUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQtaW5hY3RpdmUuc3ZnJztcbmltcG9ydCBDaGVja0JveENoZWNrZWQgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQuc3ZnJztcbmltcG9ydCBDaGVja2JveEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcblxuY29uc3QgU3R5bGVkRmxleFJvdyA9IHN0eWxlZChGbGV4Um93KTx7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGN1c3RvbUNoZWNrZWRDb2xvcj86IHN0cmluZztcbiAgY3VzdG9tVW5jaGVja2VkQ29sb3I/OiBzdHJpbmc7XG59PihcbiAgKHsgdGhlbWUsIGNoZWNrZWQsIGRpc2FibGVkLCBjdXN0b21DaGVja2VkQ29sb3IsIGN1c3RvbVVuY2hlY2tlZENvbG9yIH0pID0+ICh7XG4gICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgICBwb2ludGVyRXZlbnRzOiBkaXNhYmxlZCA/ICdub25lJyA6ICdhdXRvJyxcbiAgICBzdmc6IHtcbiAgICAgIGZpbGw6XG4gICAgICAgIGNoZWNrZWQgJiYgIWRpc2FibGVkICYmIGN1c3RvbUNoZWNrZWRDb2xvclxuICAgICAgICAgID8gY3VzdG9tQ2hlY2tlZENvbG9yXG4gICAgICAgICAgOiBjaGVja2VkICYmICFkaXNhYmxlZFxuICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZVxuICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgcGF0aDoge1xuICAgICAgICBmaWxsOlxuICAgICAgICAgIGNoZWNrZWQgJiYgIWRpc2FibGVkXG4gICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnlcbiAgICAgICAgICAgIDogY2hlY2tlZCAmJiBkaXNhYmxlZFxuICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XG4gICAgICAgICAgICA6ICdub25lJyxcbiAgICAgIH0sXG4gICAgICByZWN0OiB7XG4gICAgICAgIHN0cm9rZTogZGlzYWJsZWRcbiAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcbiAgICAgICAgICA6IGN1c3RvbVVuY2hlY2tlZENvbG9yXG4gICAgICAgICAgPyBjdXN0b21VbmNoZWNrZWRDb2xvclxuICAgICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzcGFuOiB7XG4gICAgICBjb2xvcjogZGlzYWJsZWRcbiAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XG4gICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGVudW0gQ2hlY2tib3hGb250U2l6ZSB7XG4gICdkZWZhdWx0JyA9ICdkZWZhdWx0JyxcbiAgJ3NtYWxsJyA9ICdzbWFsbCcsXG59XG5cbmNvbnN0IFN0eWxlZENoZWNrYm94V3JhcHBlciA9ICh7IGNoZWNrYm94Rm9udFNpemUsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIGNoZWNrYm94Rm9udFNpemUgPT09IENoZWNrYm94Rm9udFNpemUuc21hbGwgPyAoXG4gICAgPEJvZHlUZXh0IHNpemU9ezN9IGxpbmVIZWlnaHQ9eyd4cyd9IHsuLi5wcm9wc30gLz5cbiAgKSA6IChcbiAgICA8U3VidGl0bGVUZXh0IHNpemU9ezJ9IHsuLi5wcm9wc30gLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hQcm9wc1xuICBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBsYWJlbD86IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNoZWNrYm94IGlzIGNsaWNrZWRcbiAgICogQHBhcmFtIHZhbHVlIC0gW05PVEVdIGNvbnRhaW5zIEhUTUwgZXZlbnQgaW5zdGVhZCBvZiBib29sZWFuIHZhbHVlXG4gICAqL1xuICBvbkNoYW5nZT86ICh2YWx1ZT86IGFueSkgPT4gdm9pZDtcbiAgY2hlY2tlZDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjdXN0b21DaGVja2VkQ29sb3I/OiBzdHJpbmc7XG4gIGN1c3RvbVVuY2hlY2tlZENvbG9yPzogc3RyaW5nO1xuICBjaGVja2JveEZvbnRTaXplPzogQ2hlY2tib3hGb250U2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrYm94KHtcbiAgY2hlY2tlZCxcbiAgb25DaGFuZ2UsXG4gIGxhYmVsLFxuICBkaXNhYmxlZCxcbiAgY3VzdG9tQ2hlY2tlZENvbG9yLFxuICBjdXN0b21VbmNoZWNrZWRDb2xvcixcbiAgY2hlY2tib3hGb250U2l6ZSA9IENoZWNrYm94Rm9udFNpemUuZGVmYXVsdCxcbn06IENoZWNrYm94UHJvcHMpIHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShldmVudCk7XG4gIH07XG5cbiAgY29uc3QgaWNvblNyYyA9IGNoZWNrZWRcbiAgICA/IGRpc2FibGVkXG4gICAgICA/IENoZWNrZWRJbmFjdGl2ZUljb25cbiAgICAgIDogQ2hlY2tCb3hDaGVja2VkXG4gICAgOiBDaGVja2JveEljb247XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRmxleFJvd1xuICAgICAgaXRlbXNTcGFjaW5nPXs4fVxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgY3VzdG9tQ2hlY2tlZENvbG9yPXtjdXN0b21DaGVja2VkQ29sb3J9XG4gICAgICBjdXN0b21VbmNoZWNrZWRDb2xvcj17Y3VzdG9tVW5jaGVja2VkQ29sb3J9XG4gICAgPlxuICAgICAgPFN2Z0ljb24gc3JjPXtpY29uU3JjfSAvPlxuICAgICAgPFN0eWxlZENoZWNrYm94V3JhcHBlciBjaGVja2JveEZvbnRTaXplPXtjaGVja2JveEZvbnRTaXplfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9TdHlsZWRDaGVja2JveFdyYXBwZXI+XG4gICAgPC9TdHlsZWRGbGV4Um93PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ==