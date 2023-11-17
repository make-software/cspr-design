import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import SubtitleText from '../subtitle-text/subtitle-text';
import BodyText from '../body-text/body-text';
var StyledFlexRow = styled(FlexRow)(function (_a) {
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
export var CheckboxFontSize;
(function (CheckboxFontSize) {
    CheckboxFontSize["default"] = "default";
    CheckboxFontSize["small"] = "small";
})(CheckboxFontSize || (CheckboxFontSize = {}));
var StyledCheckboxWrapper = function (_a) {
    var checkboxFontSize = _a.checkboxFontSize, props = __rest(_a, ["checkboxFontSize"]);
    return checkboxFontSize === CheckboxFontSize.small ? (_jsx(BodyText, __assign({ size: 3, lineHeight: 'xs' }, props))) : (_jsx(SubtitleText, __assign({ size: 2 }, props)));
};
export function Checkbox(_a) {
    var checked = _a.checked, onChange = _a.onChange, label = _a.label, disabled = _a.disabled, customCheckedColor = _a.customCheckedColor, customUncheckedColor = _a.customUncheckedColor, _b = _a.checkboxFontSize, checkboxFontSize = _b === void 0 ? CheckboxFontSize.default : _b;
    var handleClick = function (ev) {
        onChange && onChange(!checked);
    };
    var iconSrc = checked
        ? disabled
            ? 'assets/icons/ic-checkbox-checked-inactive.svg'
            : 'assets/icons/ic-checkbox-checked.svg'
        : 'assets/icons/ic-checkbox.svg';
    return (_jsxs(StyledFlexRow, __assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick, customCheckedColor: customCheckedColor, customUncheckedColor: customUncheckedColor }, { children: [_jsx(SvgIcon, { src: iconSrc }), _jsx(StyledCheckboxWrapper, __assign({ checkboxFontSize: checkboxFontSize }, { children: label }))] })));
}
export default Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFJdkMsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxZQUFZLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxRQUFRLE1BQU0sd0JBQXdCLENBQUM7QUFFOUMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQU1qQyxVQUFDLEVBQXNFO1FBQXBFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGtCQUFrQix3QkFBQSxFQUFFLG9CQUFvQiwwQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFDQSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksa0JBQWtCO2dCQUN0QyxDQUFDLENBQUMsa0JBQWtCO2dCQUNwQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO29CQUNwQyxDQUFDLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUNBLE9BQU8sSUFBSSxDQUFDLFFBQVE7b0JBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsTUFBTTthQUNqQjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDWixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDbEIsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsUUFBUTtnQkFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1NBQzVDO0tBQ0YsQ0FBQztBQTlCMEUsQ0E4QjFFLENBQ0wsQ0FBQztBQUVGLE1BQU0sQ0FBTixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDeEIsdUNBQXFCLENBQUE7SUFDckIsbUNBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsRUFBOEI7SUFBNUIsSUFBQSxnQkFBZ0Isc0JBQUEsRUFBSyxLQUFLLGNBQTVCLG9CQUE4QixDQUFGO0lBQ3ZELE9BQU8sZ0JBQWdCLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNqRCxLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLElBQU0sS0FBSyxFQUFJLENBQ3JELENBQUMsQ0FBQyxDQUFDLENBQ0EsS0FBQyxZQUFZLGFBQUMsSUFBSSxFQUFFLENBQUMsSUFBTSxLQUFLLEVBQUksQ0FDdkMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQVlGLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFRZ0I7UUFQZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUEsRUFDUixrQkFBa0Isd0JBQUEsRUFDbEIsb0JBQW9CLDBCQUFBLEVBQ3BCLHdCQUEyQyxFQUEzQyxnQkFBZ0IsbUJBQUcsZ0JBQWdCLENBQUMsT0FBTyxLQUFBO0lBRXBFLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBRTtRQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQUcsT0FBTztRQUNyQixDQUFDLENBQUMsUUFBUTtZQUNSLENBQUMsQ0FBQywrQ0FBK0M7WUFDakQsQ0FBQyxDQUFDLHNDQUFzQztRQUMxQyxDQUFDLENBQUMsOEJBQThCLENBQUM7SUFFbkMsT0FBTyxDQUNILE1BQUMsYUFBYSxhQUNWLFlBQVksRUFBRSxDQUFDLEVBQ2YsS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxFQUNwQixrQkFBa0IsRUFBRSxrQkFBa0IsRUFDdEMsb0JBQW9CLEVBQUUsb0JBQW9CLGlCQUU1QyxLQUFDLE9BQU8sSUFBQyxHQUFHLEVBQUUsT0FBTyxHQUFJLEVBQ3pCLEtBQUMscUJBQXFCLGFBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLGdCQUFHLEtBQUssSUFBeUIsS0FDNUUsQ0FDbkIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xyXG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XHJcbmltcG9ydCBTdWJ0aXRsZVRleHQgZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xyXG5cclxuY29uc3QgU3R5bGVkRmxleFJvdyA9IHN0eWxlZChGbGV4Um93KTx7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGN1c3RvbUNoZWNrZWRDb2xvcj86IHN0cmluZztcclxuICBjdXN0b21VbmNoZWNrZWRDb2xvcj86IHN0cmluZztcclxufT4oXHJcbiAgICAoeyB0aGVtZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGN1c3RvbUNoZWNrZWRDb2xvciwgY3VzdG9tVW5jaGVja2VkQ29sb3IgfSkgPT4gKHtcclxuICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyxcclxuICAgICAgd2lkdGg6ICdmaXQtY29udGVudCcsXHJcbiAgICAgIHBvaW50ZXJFdmVudHM6IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBmaWxsOlxyXG4gICAgICAgICAgICBjaGVja2VkICYmICFkaXNhYmxlZCAmJiBjdXN0b21DaGVja2VkQ29sb3JcclxuICAgICAgICAgICAgICAgID8gY3VzdG9tQ2hlY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICA6IGNoZWNrZWQgJiYgIWRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgZmlsbDpcclxuICAgICAgICAgICAgICBjaGVja2VkICYmICFkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgOiAnbm9uZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWN0OiB7XHJcbiAgICAgICAgICBzdHJva2U6IGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XHJcbiAgICAgICAgICAgICAgOiBjdXN0b21VbmNoZWNrZWRDb2xvclxyXG4gICAgICAgICAgICAgICAgICA/IGN1c3RvbVVuY2hlY2tlZENvbG9yXHJcbiAgICAgICAgICAgICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzcGFuOiB7XHJcbiAgICAgICAgY29sb3I6IGRpc2FibGVkXHJcbiAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxyXG4gICAgICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGVudW0gQ2hlY2tib3hGb250U2l6ZSB7XHJcbiAgICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXHJcbiAgICAnc21hbGwnID0gJ3NtYWxsJyxcclxufVxyXG5cclxuY29uc3QgU3R5bGVkQ2hlY2tib3hXcmFwcGVyID0gKHsgY2hlY2tib3hGb250U2l6ZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gICAgcmV0dXJuIGNoZWNrYm94Rm9udFNpemUgPT09IENoZWNrYm94Rm9udFNpemUuc21hbGwgPyAoXHJcbiAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9IGxpbmVIZWlnaHQ9eyd4cyd9IHsuLi5wcm9wc30gLz5cclxuICAgICkgOiAoXHJcbiAgICAgICAgPFN1YnRpdGxlVGV4dCBzaXplPXsyfSB7Li4ucHJvcHN9IC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBsYWJlbD86IHN0cmluZztcclxuICBvbkNoYW5nZT86ICh2YWx1ZT86IGFueSkgPT4gdm9pZDtcclxuICBjaGVja2VkOiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBjdXN0b21DaGVja2VkQ29sb3I/OiBzdHJpbmc7XHJcbiAgY3VzdG9tVW5jaGVja2VkQ29sb3I/OiBzdHJpbmc7XHJcbiAgY2hlY2tib3hGb250U2l6ZT86IENoZWNrYm94Rm9udFNpemU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNoZWNrZWRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVW5jaGVja2VkQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94Rm9udFNpemUgPSBDaGVja2JveEZvbnRTaXplLmRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH06IENoZWNrYm94UHJvcHMpIHtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldikgPT4ge1xyXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoIWNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGljb25TcmMgPSBjaGVja2VkXHJcbiAgICA/IGRpc2FibGVkXHJcbiAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC1jaGVja2VkLWluYWN0aXZlLnN2ZydcclxuICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQuc3ZnJ1xyXG4gICAgOiAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LnN2Zyc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRGbGV4Um93XHJcbiAgICAgICAgICBpdGVtc1NwYWNpbmc9ezh9XHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICBjdXN0b21DaGVja2VkQ29sb3I9e2N1c3RvbUNoZWNrZWRDb2xvcn1cclxuICAgICAgICAgIGN1c3RvbVVuY2hlY2tlZENvbG9yPXtjdXN0b21VbmNoZWNrZWRDb2xvcn1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdmdJY29uIHNyYz17aWNvblNyY30gLz5cclxuICAgICAgICA8U3R5bGVkQ2hlY2tib3hXcmFwcGVyIGNoZWNrYm94Rm9udFNpemU9e2NoZWNrYm94Rm9udFNpemV9PntsYWJlbH08L1N0eWxlZENoZWNrYm94V3JhcHBlcj5cclxuICAgICAgPC9TdHlsZWRGbGV4Um93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xyXG4iXX0=