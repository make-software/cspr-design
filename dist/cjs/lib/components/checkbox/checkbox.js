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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBSXZDLDBFQUEyQztBQUMzQywwRUFBMkM7QUFDM0MseUZBQTBEO0FBQzFELDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQU1qQyxVQUFDLEVBQXNFO1FBQXBFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGtCQUFrQix3QkFBQSxFQUFFLG9CQUFvQiwwQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFDQSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksa0JBQWtCO2dCQUN0QyxDQUFDLENBQUMsa0JBQWtCO2dCQUNwQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO29CQUNwQyxDQUFDLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUNBLE9BQU8sSUFBSSxDQUFDLFFBQVE7b0JBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsTUFBTTthQUNqQjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDWixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDbEIsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsUUFBUTtnQkFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1NBQzVDO0tBQ0YsQ0FBQztBQTlCMEUsQ0E4QjFFLENBQ0wsQ0FBQztBQUVGLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUN4Qix1Q0FBcUIsQ0FBQTtJQUNyQixtQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFHM0I7QUFFRCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsRUFBOEI7SUFBNUIsSUFBQSxnQkFBZ0Isc0JBQUEsRUFBSyxLQUFLLHNCQUE1QixvQkFBOEIsQ0FBRjtJQUN2RCxPQUFPLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDakQsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFNLEtBQUssRUFBSSxDQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNBLHVCQUFDLHVCQUFZLHFCQUFDLElBQUksRUFBRSxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3ZDLENBQUM7QUFDTixDQUFDLENBQUM7QUFZRixTQUFnQixRQUFRLENBQUMsRUFRZ0I7UUFQZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUEsRUFDUixrQkFBa0Isd0JBQUEsRUFDbEIsb0JBQW9CLDBCQUFBLEVBQ3BCLHdCQUEyQyxFQUEzQyxnQkFBZ0IsbUJBQUcsZ0JBQWdCLENBQUMsT0FBTyxLQUFBO0lBRXBFLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBRTtRQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQUcsT0FBTztRQUNyQixDQUFDLENBQUMsUUFBUTtZQUNSLENBQUMsQ0FBQywrQ0FBK0M7WUFDakQsQ0FBQyxDQUFDLHNDQUFzQztRQUMxQyxDQUFDLENBQUMsOEJBQThCLENBQUM7SUFFbkMsT0FBTyxDQUNILHdCQUFDLGFBQWEscUJBQ1YsWUFBWSxFQUFFLENBQUMsRUFDZixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxXQUFXLEVBQ3BCLGtCQUFrQixFQUFFLGtCQUFrQixFQUN0QyxvQkFBb0IsRUFBRSxvQkFBb0IsaUJBRTVDLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6Qix1QkFBQyxxQkFBcUIscUJBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLGdCQUFHLEtBQUssSUFBeUIsS0FDNUUsQ0FDbkIsQ0FBQztBQUNKLENBQUM7QUFqQ0QsNEJBaUNDO0FBRUQsa0JBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcclxuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xyXG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XHJcblxyXG5jb25zdCBTdHlsZWRGbGV4Um93ID0gc3R5bGVkKEZsZXhSb3cpPHtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgY3VzdG9tQ2hlY2tlZENvbG9yPzogc3RyaW5nO1xyXG4gIGN1c3RvbVVuY2hlY2tlZENvbG9yPzogc3RyaW5nO1xyXG59PihcclxuICAgICh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCwgY3VzdG9tQ2hlY2tlZENvbG9yLCBjdXN0b21VbmNoZWNrZWRDb2xvciB9KSA9PiAoe1xyXG4gICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxyXG4gICAgICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgcG9pbnRlckV2ZW50czogZGlzYWJsZWQgPyAnbm9uZScgOiAnYXV0bycsXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIGZpbGw6XHJcbiAgICAgICAgICAgIGNoZWNrZWQgJiYgIWRpc2FibGVkICYmIGN1c3RvbUNoZWNrZWRDb2xvclxyXG4gICAgICAgICAgICAgICAgPyBjdXN0b21DaGVja2VkQ29sb3JcclxuICAgICAgICAgICAgICAgIDogY2hlY2tlZCAmJiAhZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVcclxuICAgICAgICAgICAgICAgICAgICA6ICdub25lJyxcclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICBmaWxsOlxyXG4gICAgICAgICAgICAgIGNoZWNrZWQgJiYgIWRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICA6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlY3Q6IHtcclxuICAgICAgICAgIHN0cm9rZTogZGlzYWJsZWRcclxuICAgICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcclxuICAgICAgICAgICAgICA6IGN1c3RvbVVuY2hlY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICAgID8gY3VzdG9tVW5jaGVja2VkQ29sb3JcclxuICAgICAgICAgICAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNwYW46IHtcclxuICAgICAgICBjb2xvcjogZGlzYWJsZWRcclxuICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XHJcbiAgICAgICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZW51bSBDaGVja2JveEZvbnRTaXplIHtcclxuICAgICdkZWZhdWx0JyA9ICdkZWZhdWx0JyxcclxuICAgICdzbWFsbCcgPSAnc21hbGwnLFxyXG59XHJcblxyXG5jb25zdCBTdHlsZWRDaGVja2JveFdyYXBwZXIgPSAoeyBjaGVja2JveEZvbnRTaXplLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gY2hlY2tib3hGb250U2l6ZSA9PT0gQ2hlY2tib3hGb250U2l6ZS5zbWFsbCA/IChcclxuICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17J3hzJ30gey4uLnByb3BzfSAvPlxyXG4gICAgKSA6IChcclxuICAgICAgICA8U3VidGl0bGVUZXh0IHNpemU9ezJ9IHsuLi5wcm9wc30gLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIG9uQ2hhbmdlPzogKHZhbHVlPzogYW55KSA9PiB2b2lkO1xyXG4gIGNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGN1c3RvbUNoZWNrZWRDb2xvcj86IHN0cmluZztcclxuICBjdXN0b21VbmNoZWNrZWRDb2xvcj86IHN0cmluZztcclxuICBjaGVja2JveEZvbnRTaXplPzogQ2hlY2tib3hGb250U2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrYm94KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2hlY2tlZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21VbmNoZWNrZWRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hGb250U2l6ZSA9IENoZWNrYm94Rm9udFNpemUuZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfTogQ2hlY2tib3hQcm9wcykge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2KSA9PiB7XHJcbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSghY2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaWNvblNyYyA9IGNoZWNrZWRcclxuICAgID8gZGlzYWJsZWRcclxuICAgICAgPyAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQtaW5hY3RpdmUuc3ZnJ1xyXG4gICAgICA6ICdhc3NldHMvaWNvbnMvaWMtY2hlY2tib3gtY2hlY2tlZC5zdmcnXHJcbiAgICA6ICdhc3NldHMvaWNvbnMvaWMtY2hlY2tib3guc3ZnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEZsZXhSb3dcclxuICAgICAgICAgIGl0ZW1zU3BhY2luZz17OH1cclxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgIGN1c3RvbUNoZWNrZWRDb2xvcj17Y3VzdG9tQ2hlY2tlZENvbG9yfVxyXG4gICAgICAgICAgY3VzdG9tVW5jaGVja2VkQ29sb3I9e2N1c3RvbVVuY2hlY2tlZENvbG9yfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFN2Z0ljb24gc3JjPXtpY29uU3JjfSAvPlxyXG4gICAgICAgIDxTdHlsZWRDaGVja2JveFdyYXBwZXIgY2hlY2tib3hGb250U2l6ZT17Y2hlY2tib3hGb250U2l6ZX0+e2xhYmVsfTwvU3R5bGVkQ2hlY2tib3hXcmFwcGVyPlxyXG4gICAgICA8L1N0eWxlZEZsZXhSb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XHJcbiJdfQ==