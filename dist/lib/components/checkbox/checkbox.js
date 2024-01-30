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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFJdkMsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxZQUFZLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUQsT0FBTyxRQUFRLE1BQU0sd0JBQXdCLENBQUM7QUFFOUMsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQU1qQyxVQUFDLEVBQXNFO1FBQXBFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGtCQUFrQix3QkFBQSxFQUFFLG9CQUFvQiwwQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUMzRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFDQSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksa0JBQWtCO2dCQUN0QyxDQUFDLENBQUMsa0JBQWtCO2dCQUNwQixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO29CQUNwQyxDQUFDLENBQUMsTUFBTTtZQUNwQixJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUNBLE9BQU8sSUFBSSxDQUFDLFFBQVE7b0JBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsTUFBTTthQUNqQjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDWixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDbEIsQ0FBQyxDQUFDLG9CQUFvQjt3QkFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2FBQzdDO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsUUFBUTtnQkFDWCxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1NBQzVDO0tBQ0YsQ0FBQztBQTlCMEUsQ0E4QjFFLENBQ0wsQ0FBQztBQUVGLE1BQU0sQ0FBTixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDeEIsdUNBQXFCLENBQUE7SUFDckIsbUNBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsRUFBOEI7SUFBNUIsSUFBQSxnQkFBZ0Isc0JBQUEsRUFBSyxLQUFLLGNBQTVCLG9CQUE4QixDQUFGO0lBQ3ZELE9BQU8sZ0JBQWdCLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNqRCxLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLElBQU0sS0FBSyxFQUFJLENBQ3JELENBQUMsQ0FBQyxDQUFDLENBQ0EsS0FBQyxZQUFZLGFBQUMsSUFBSSxFQUFFLENBQUMsSUFBTSxLQUFLLEVBQUksQ0FDdkMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQVlGLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFRZ0I7UUFQZCxPQUFPLGFBQUEsRUFDUCxRQUFRLGNBQUEsRUFDUixLQUFLLFdBQUEsRUFDTCxRQUFRLGNBQUEsRUFDUixrQkFBa0Isd0JBQUEsRUFDbEIsb0JBQW9CLDBCQUFBLEVBQ3BCLHdCQUEyQyxFQUEzQyxnQkFBZ0IsbUJBQUcsZ0JBQWdCLENBQUMsT0FBTyxLQUFBO0lBRXBFLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBRTtRQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQUcsT0FBTztRQUNyQixDQUFDLENBQUMsUUFBUTtZQUNSLENBQUMsQ0FBQywrQ0FBK0M7WUFDakQsQ0FBQyxDQUFDLHNDQUFzQztRQUMxQyxDQUFDLENBQUMsOEJBQThCLENBQUM7SUFFbkMsT0FBTyxDQUNILE1BQUMsYUFBYSxhQUNWLFlBQVksRUFBRSxDQUFDLEVBQ2YsS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxFQUNwQixrQkFBa0IsRUFBRSxrQkFBa0IsRUFDdEMsb0JBQW9CLEVBQUUsb0JBQW9CLGlCQUU1QyxLQUFDLE9BQU8sSUFBQyxHQUFHLEVBQUUsT0FBTyxHQUFJLEVBQ3pCLEtBQUMscUJBQXFCLGFBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLGdCQUFHLEtBQUssSUFBeUIsS0FDNUUsQ0FDbkIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5cbmNvbnN0IFN0eWxlZEZsZXhSb3cgPSBzdHlsZWQoRmxleFJvdyk8e1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjdXN0b21DaGVja2VkQ29sb3I/OiBzdHJpbmc7XG4gIGN1c3RvbVVuY2hlY2tlZENvbG9yPzogc3RyaW5nO1xufT4oXG4gICAgKHsgdGhlbWUsIGNoZWNrZWQsIGRpc2FibGVkLCBjdXN0b21DaGVja2VkQ29sb3IsIGN1c3RvbVVuY2hlY2tlZENvbG9yIH0pID0+ICh7XG4gICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxuICAgICAgd2lkdGg6ICdmaXQtY29udGVudCcsXG4gICAgICBwb2ludGVyRXZlbnRzOiBkaXNhYmxlZCA/ICdub25lJyA6ICdhdXRvJyxcbiAgICAgIHN2Zzoge1xuICAgICAgICBmaWxsOlxuICAgICAgICAgICAgY2hlY2tlZCAmJiAhZGlzYWJsZWQgJiYgY3VzdG9tQ2hlY2tlZENvbG9yXG4gICAgICAgICAgICAgICAgPyBjdXN0b21DaGVja2VkQ29sb3JcbiAgICAgICAgICAgICAgICA6IGNoZWNrZWQgJiYgIWRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZVxuICAgICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgIGZpbGw6XG4gICAgICAgICAgICAgIGNoZWNrZWQgJiYgIWRpc2FibGVkXG4gICAgICAgICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnlcbiAgICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgICByZWN0OiB7XG4gICAgICAgICAgc3Ryb2tlOiBkaXNhYmxlZFxuICAgICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcbiAgICAgICAgICAgICAgOiBjdXN0b21VbmNoZWNrZWRDb2xvclxuICAgICAgICAgICAgICAgICAgPyBjdXN0b21VbmNoZWNrZWRDb2xvclxuICAgICAgICAgICAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHNwYW46IHtcbiAgICAgICAgY29sb3I6IGRpc2FibGVkXG4gICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcbiAgICAgICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICAgIH0sXG4gICAgfSlcbik7XG5cbmV4cG9ydCBlbnVtIENoZWNrYm94Rm9udFNpemUge1xuICAgICdkZWZhdWx0JyA9ICdkZWZhdWx0JyxcbiAgICAnc21hbGwnID0gJ3NtYWxsJyxcbn1cblxuY29uc3QgU3R5bGVkQ2hlY2tib3hXcmFwcGVyID0gKHsgY2hlY2tib3hGb250U2l6ZSwgLi4ucHJvcHMgfSkgPT4ge1xuICAgIHJldHVybiBjaGVja2JveEZvbnRTaXplID09PSBDaGVja2JveEZvbnRTaXplLnNtYWxsID8gKFxuICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17J3hzJ30gey4uLnByb3BzfSAvPlxuICAgICkgOiAoXG4gICAgICAgIDxTdWJ0aXRsZVRleHQgc2l6ZT17Mn0gey4uLnByb3BzfSAvPlxuICAgICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBsYWJlbD86IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgb25DaGFuZ2U/OiAodmFsdWU/OiBhbnkpID0+IHZvaWQ7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3VzdG9tQ2hlY2tlZENvbG9yPzogc3RyaW5nO1xuICBjdXN0b21VbmNoZWNrZWRDb2xvcj86IHN0cmluZztcbiAgY2hlY2tib3hGb250U2l6ZT86IENoZWNrYm94Rm9udFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2hlY2tlZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVW5jaGVja2VkQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveEZvbnRTaXplID0gQ2hlY2tib3hGb250U2l6ZS5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgfTogQ2hlY2tib3hQcm9wcykge1xuICBjb25zdCBoYW5kbGVDbGljayA9IChldikgPT4ge1xuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKCFjaGVja2VkKTtcbiAgfTtcblxuICBjb25zdCBpY29uU3JjID0gY2hlY2tlZFxuICAgID8gZGlzYWJsZWRcbiAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC1jaGVja2VkLWluYWN0aXZlLnN2ZydcbiAgICAgIDogJ2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC1jaGVja2VkLnN2ZydcbiAgICA6ICdhc3NldHMvaWNvbnMvaWMtY2hlY2tib3guc3ZnJztcblxuICByZXR1cm4gKFxuICAgICAgPFN0eWxlZEZsZXhSb3dcbiAgICAgICAgICBpdGVtc1NwYWNpbmc9ezh9XG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgIGN1c3RvbUNoZWNrZWRDb2xvcj17Y3VzdG9tQ2hlY2tlZENvbG9yfVxuICAgICAgICAgIGN1c3RvbVVuY2hlY2tlZENvbG9yPXtjdXN0b21VbmNoZWNrZWRDb2xvcn1cbiAgICAgID5cbiAgICAgICAgPFN2Z0ljb24gc3JjPXtpY29uU3JjfSAvPlxuICAgICAgICA8U3R5bGVkQ2hlY2tib3hXcmFwcGVyIGNoZWNrYm94Rm9udFNpemU9e2NoZWNrYm94Rm9udFNpemV9PntsYWJlbH08L1N0eWxlZENoZWNrYm94V3JhcHBlcj5cbiAgICAgIDwvU3R5bGVkRmxleFJvdz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0=