"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = exports.CheckboxFontSize = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
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
    var handleClick = function (ev) {
        onChange && onChange(!checked);
    };
    var iconSrc = checked
        ? disabled
            ? 'assets/icons/ic-checkbox-checked-inactive.svg'
            : 'assets/icons/ic-checkbox-checked.svg'
        : 'assets/icons/ic-checkbox.svg';
    return ((0, jsx_runtime_1.jsxs)(StyledFlexRow, tslib_1.__assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick, customCheckedColor: customCheckedColor, customUncheckedColor: customUncheckedColor }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconSrc }), (0, jsx_runtime_1.jsx)(StyledCheckboxWrapper, tslib_1.__assign({ checkboxFontSize: checkboxFontSize }, { children: label }))] })));
}
exports.Checkbox = Checkbox;
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBSXZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MseUZBQTBEO0FBQzFELDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQU1qQyxVQUFDLEVBQXNFO1FBQXBFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGtCQUFrQix3QkFBQSxFQUFFLG9CQUFvQiwwQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFDQSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksa0JBQWtCO2dCQUN0QyxDQUFDLENBQUMsa0JBQWtCO2dCQUNwQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO29CQUNwQyxDQUFDLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUNBLE9BQU8sSUFBSSxDQUFDLFFBQVE7b0JBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsTUFBTTthQUNqQjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDWixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDbEIsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsUUFBUTtnQkFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1NBQzVDO0tBQ0YsQ0FBQztBQTlCMEUsQ0E4QjFFLENBQ0wsQ0FBQztBQUVGLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUN4Qix1Q0FBcUIsQ0FBQTtJQUNyQixtQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFHM0I7QUFFRCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsRUFBOEI7SUFBNUIsSUFBQSxnQkFBZ0Isc0JBQUEsRUFBSyxLQUFLLHNCQUE1QixvQkFBOEIsQ0FBRjtJQUN2RCxPQUFPLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDakQsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFNLEtBQUssRUFBSSxDQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNBLHVCQUFDLHVCQUFZLHFCQUFDLElBQUksRUFBRSxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3ZDLENBQUM7QUFDTixDQUFDLENBQUM7QUFZRixTQUFnQixRQUFRLENBQUMsRUFRZ0I7UUFQZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUEsRUFDUixrQkFBa0Isd0JBQUEsRUFDbEIsb0JBQW9CLDBCQUFBLEVBQ3BCLHdCQUEyQyxFQUEzQyxnQkFBZ0IsbUJBQUcsZ0JBQWdCLENBQUMsT0FBTyxLQUFBO0lBRXBFLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBRTtRQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQUcsT0FBTztRQUNyQixDQUFDLENBQUMsUUFBUTtZQUNSLENBQUMsQ0FBQywrQ0FBK0M7WUFDakQsQ0FBQyxDQUFDLHNDQUFzQztRQUMxQyxDQUFDLENBQUMsOEJBQThCLENBQUM7SUFFbkMsT0FBTyxDQUNILHdCQUFDLGFBQWEscUJBQ1YsWUFBWSxFQUFFLENBQUMsRUFDZixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLGtCQUFrQixFQUFFLGtCQUFrQixFQUN0QyxvQkFBb0IsRUFBRSxvQkFBb0IsaUJBRTVDLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6Qix1QkFBQyxxQkFBcUIscUJBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLGdCQUFHLEtBQUssSUFBeUIsS0FDNUUsQ0FDbkIsQ0FBQztBQUNKLENBQUM7QUFqQ0QsNEJBaUNDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcblxuY29uc3QgU3R5bGVkRmxleFJvdyA9IHN0eWxlZChGbGV4Um93KTx7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGN1c3RvbUNoZWNrZWRDb2xvcj86IHN0cmluZztcbiAgY3VzdG9tVW5jaGVja2VkQ29sb3I/OiBzdHJpbmc7XG59PihcbiAgICAoeyB0aGVtZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGN1c3RvbUNoZWNrZWRDb2xvciwgY3VzdG9tVW5jaGVja2VkQ29sb3IgfSkgPT4gKHtcbiAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcicsXG4gICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nLFxuICAgICAgc3ZnOiB7XG4gICAgICAgIGZpbGw6XG4gICAgICAgICAgICBjaGVja2VkICYmICFkaXNhYmxlZCAmJiBjdXN0b21DaGVja2VkQ29sb3JcbiAgICAgICAgICAgICAgICA/IGN1c3RvbUNoZWNrZWRDb2xvclxuICAgICAgICAgICAgICAgIDogY2hlY2tlZCAmJiAhZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXG4gICAgICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgZmlsbDpcbiAgICAgICAgICAgICAgY2hlY2tlZCAmJiAhZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeVxuICAgICAgICAgICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgIH0sXG4gICAgICAgIHJlY3Q6IHtcbiAgICAgICAgICBzdHJva2U6IGRpc2FibGVkXG4gICAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgICAgICAgICA6IGN1c3RvbVVuY2hlY2tlZENvbG9yXG4gICAgICAgICAgICAgICAgICA/IGN1c3RvbVVuY2hlY2tlZENvbG9yXG4gICAgICAgICAgICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc3Bhbjoge1xuICAgICAgICBjb2xvcjogZGlzYWJsZWRcbiAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgICAgfSxcbiAgICB9KVxuKTtcblxuZXhwb3J0IGVudW0gQ2hlY2tib3hGb250U2l6ZSB7XG4gICAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxuICAgICdzbWFsbCcgPSAnc21hbGwnLFxufVxuXG5jb25zdCBTdHlsZWRDaGVja2JveFdyYXBwZXIgPSAoeyBjaGVja2JveEZvbnRTaXplLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIGNoZWNrYm94Rm9udFNpemUgPT09IENoZWNrYm94Rm9udFNpemUuc21hbGwgPyAoXG4gICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSBsaW5lSGVpZ2h0PXsneHMnfSB7Li4ucHJvcHN9IC8+XG4gICAgKSA6IChcbiAgICAgICAgPFN1YnRpdGxlVGV4dCBzaXplPXsyfSB7Li4ucHJvcHN9IC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBvbkNoYW5nZT86ICh2YWx1ZT86IGFueSkgPT4gdm9pZDtcbiAgY2hlY2tlZDogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjdXN0b21DaGVja2VkQ29sb3I/OiBzdHJpbmc7XG4gIGN1c3RvbVVuY2hlY2tlZENvbG9yPzogc3RyaW5nO1xuICBjaGVja2JveEZvbnRTaXplPzogQ2hlY2tib3hGb250U2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrYm94KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DaGVja2VkQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21VbmNoZWNrZWRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94Rm9udFNpemUgPSBDaGVja2JveEZvbnRTaXplLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICB9OiBDaGVja2JveFByb3BzKSB7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2KSA9PiB7XG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoIWNoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IGljb25TcmMgPSBjaGVja2VkXG4gICAgPyBkaXNhYmxlZFxuICAgICAgPyAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQtaW5hY3RpdmUuc3ZnJ1xuICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQuc3ZnJ1xuICAgIDogJ2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC5zdmcnO1xuXG4gIHJldHVybiAoXG4gICAgICA8U3R5bGVkRmxleFJvd1xuICAgICAgICAgIGl0ZW1zU3BhY2luZz17OH1cbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgY3VzdG9tQ2hlY2tlZENvbG9yPXtjdXN0b21DaGVja2VkQ29sb3J9XG4gICAgICAgICAgY3VzdG9tVW5jaGVja2VkQ29sb3I9e2N1c3RvbVVuY2hlY2tlZENvbG9yfVxuICAgICAgPlxuICAgICAgICA8U3ZnSWNvbiBzcmM9e2ljb25TcmN9IC8+XG4gICAgICAgIDxTdHlsZWRDaGVja2JveFdyYXBwZXIgY2hlY2tib3hGb250U2l6ZT17Y2hlY2tib3hGb250U2l6ZX0+e2xhYmVsfTwvU3R5bGVkQ2hlY2tib3hXcmFwcGVyPlxuICAgICAgPC9TdHlsZWRGbGV4Um93PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ==