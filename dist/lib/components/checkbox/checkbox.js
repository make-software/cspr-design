import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import CheckedInactiveIcon from '../../assets/icons/ic-checkbox-checked-inactive.svg';
import CheckBoxChecked from '../../assets/icons/ic-checkbox-checked.svg';
import CheckboxIcon from '../../assets/icons/ic-checkbox.svg';
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
    var handleClick = function (event) {
        onChange && onChange(event);
    };
    var iconSrc = checked
        ? disabled
            ? CheckedInactiveIcon
            : CheckBoxChecked
        : CheckboxIcon;
    return (_jsxs(StyledFlexRow, __assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick, customCheckedColor: customCheckedColor, customUncheckedColor: customUncheckedColor, role: "checkbox", "aria-checked": checked, "aria-disabled": disabled, "aria-label": checked ? "Checked" : "Not checked", tabIndex: 0 }, { children: [_jsx(SvgIcon, { src: iconSrc }), _jsx(StyledCheckboxWrapper, __assign({ checkboxFontSize: checkboxFontSize }, { children: label }))] })));
}
export default Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxtQkFBbUIsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLGVBQWUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RCxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUU5QyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBUW5DLFVBQUMsRUFBc0U7UUFBcEUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsa0JBQWtCLHdCQUFBLEVBQUUsb0JBQW9CLDBCQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN4QyxLQUFLLEVBQUUsYUFBYTtRQUNwQixhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDekMsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUNGLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxrQkFBa0I7Z0JBQ3hDLENBQUMsQ0FBQyxrQkFBa0I7Z0JBQ3BCLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRO29CQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7b0JBQ3BDLENBQUMsQ0FBQyxNQUFNO1lBQ1os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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDaGVja2VkSW5hY3RpdmVJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC1jaGVja2VkLWluYWN0aXZlLnN2Zyc7XG5pbXBvcnQgQ2hlY2tCb3hDaGVja2VkIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC1jaGVja2VkLnN2Zyc7XG5pbXBvcnQgQ2hlY2tib3hJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1jaGVja2JveC5zdmcnO1xuXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5cbmNvbnN0IFN0eWxlZEZsZXhSb3cgPSBzdHlsZWQoRmxleFJvdyk8e1xuICByb2xlPzogc3RyaW5nO1xuICB0YWJJbmRleD86IG51bWJlcjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3VzdG9tQ2hlY2tlZENvbG9yPzogc3RyaW5nO1xuICBjdXN0b21VbmNoZWNrZWRDb2xvcj86IHN0cmluZztcbn0+KFxuICAoeyB0aGVtZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGN1c3RvbUNoZWNrZWRDb2xvciwgY3VzdG9tVW5jaGVja2VkQ29sb3IgfSkgPT4gKHtcbiAgICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxuICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICAgIHBvaW50ZXJFdmVudHM6IGRpc2FibGVkID8gJ25vbmUnIDogJ2F1dG8nLFxuICAgIHN2Zzoge1xuICAgICAgZmlsbDpcbiAgICAgICAgY2hlY2tlZCAmJiAhZGlzYWJsZWQgJiYgY3VzdG9tQ2hlY2tlZENvbG9yXG4gICAgICAgICAgPyBjdXN0b21DaGVja2VkQ29sb3JcbiAgICAgICAgICA6IGNoZWNrZWQgJiYgIWRpc2FibGVkXG4gICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXG4gICAgICAgICAgOiAnbm9uZScsXG4gICAgICBwYXRoOiB7XG4gICAgICAgIGZpbGw6XG4gICAgICAgICAgY2hlY2tlZCAmJiAhZGlzYWJsZWRcbiAgICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeVxuICAgICAgICAgICAgOiBjaGVja2VkICYmIGRpc2FibGVkXG4gICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcbiAgICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgfSxcbiAgICAgIHJlY3Q6IHtcbiAgICAgICAgc3Ryb2tlOiBkaXNhYmxlZFxuICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgICAgIDogY3VzdG9tVW5jaGVja2VkQ29sb3JcbiAgICAgICAgICA/IGN1c3RvbVVuY2hlY2tlZENvbG9yXG4gICAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNwYW46IHtcbiAgICAgIGNvbG9yOiBkaXNhYmxlZFxuICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcbiAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZW51bSBDaGVja2JveEZvbnRTaXplIHtcbiAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxuICAnc21hbGwnID0gJ3NtYWxsJyxcbn1cblxuY29uc3QgU3R5bGVkQ2hlY2tib3hXcmFwcGVyID0gKHsgY2hlY2tib3hGb250U2l6ZSwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gY2hlY2tib3hGb250U2l6ZSA9PT0gQ2hlY2tib3hGb250U2l6ZS5zbWFsbCA/IChcbiAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17J3hzJ30gey4uLnByb3BzfSAvPlxuICApIDogKFxuICAgIDxTdWJ0aXRsZVRleHQgc2l6ZT17Mn0gey4uLnByb3BzfSAvPlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByb3BzXG4gIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIGxhYmVsPzogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50O1xuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY2hlY2tib3ggaXMgY2xpY2tlZFxuICAgKiBAcGFyYW0gdmFsdWUgLSBbTk9URV0gY29udGFpbnMgSFRNTCBldmVudCBpbnN0ZWFkIG9mIGJvb2xlYW4gdmFsdWVcbiAgICovXG4gIG9uQ2hhbmdlPzogKHZhbHVlPzogYW55KSA9PiB2b2lkO1xuICBjaGVja2VkOiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGN1c3RvbUNoZWNrZWRDb2xvcj86IHN0cmluZztcbiAgY3VzdG9tVW5jaGVja2VkQ29sb3I/OiBzdHJpbmc7XG4gIGNoZWNrYm94Rm9udFNpemU/OiBDaGVja2JveEZvbnRTaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tib3goe1xuICBjaGVja2VkLFxuICBvbkNoYW5nZSxcbiAgbGFiZWwsXG4gIGRpc2FibGVkLFxuICBjdXN0b21DaGVja2VkQ29sb3IsXG4gIGN1c3RvbVVuY2hlY2tlZENvbG9yLFxuICBjaGVja2JveEZvbnRTaXplID0gQ2hlY2tib3hGb250U2l6ZS5kZWZhdWx0LFxufTogQ2hlY2tib3hQcm9wcykge1xuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGV2ZW50KTtcbiAgfTtcblxuICBjb25zdCBpY29uU3JjID0gY2hlY2tlZFxuICAgID8gZGlzYWJsZWRcbiAgICAgID8gQ2hlY2tlZEluYWN0aXZlSWNvblxuICAgICAgOiBDaGVja0JveENoZWNrZWRcbiAgICA6IENoZWNrYm94SWNvbjtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRGbGV4Um93XG4gICAgICBpdGVtc1NwYWNpbmc9ezh9XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICBjdXN0b21DaGVja2VkQ29sb3I9e2N1c3RvbUNoZWNrZWRDb2xvcn1cbiAgICAgIGN1c3RvbVVuY2hlY2tlZENvbG9yPXtjdXN0b21VbmNoZWNrZWRDb2xvcn1cbiAgICAgIHJvbGU9XCJjaGVja2JveFwiXG4gICAgICBhcmlhLWNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICBhcmlhLWRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGFyaWEtbGFiZWw9e2NoZWNrZWQgPyBcIkNoZWNrZWRcIiA6IFwiTm90IGNoZWNrZWRcIn1cbiAgICAgIHRhYkluZGV4PXswfVxuICAgID5cbiAgICAgIDxTdmdJY29uIHNyYz17aWNvblNyY30gLz5cbiAgICAgIDxTdHlsZWRDaGVja2JveFdyYXBwZXIgY2hlY2tib3hGb250U2l6ZT17Y2hlY2tib3hGb250U2l6ZX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvU3R5bGVkQ2hlY2tib3hXcmFwcGVyPlxuICAgIDwvU3R5bGVkRmxleFJvdz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0=