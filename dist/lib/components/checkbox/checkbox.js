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
            ? CheckedInactiveIcon
            : CheckBoxChecked
        : CheckboxIcon;
    return (_jsxs(StyledFlexRow, __assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick, customCheckedColor: customCheckedColor, customUncheckedColor: customUncheckedColor }, { children: [_jsx(SvgIcon, { src: iconSrc }), _jsx(StyledCheckboxWrapper, __assign({ checkboxFontSize: checkboxFontSize }, { children: label }))] })));
}
export default Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxtQkFBbUIsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLGVBQWUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLFlBQVksTUFBTSxvQ0FBb0MsQ0FBQztBQUc5RCxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUU5QyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBTWpDLFVBQUMsRUFBc0U7UUFBcEUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsa0JBQWtCLHdCQUFBLEVBQUUsb0JBQW9CLDBCQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUN4QyxLQUFLLEVBQUUsYUFBYTtRQUNwQixhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDekMsR0FBRyxFQUFFO1lBQ0gsSUFBSSxFQUNBLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxrQkFBa0I7Z0JBQ3RDLENBQUMsQ0FBQyxrQkFBa0I7Z0JBQ3BCLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRO29CQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7b0JBQ3BDLENBQUMsQ0FBQyxNQUFNO1lBQ3BCLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQ0EsT0FBTyxJQUFJLENBQUMsUUFBUTtvQkFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7b0JBQzFDLENBQUMsQ0FBQyxNQUFNO2FBQ2pCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxRQUFRO29CQUNaLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO29CQUMxQyxDQUFDLENBQUMsb0JBQW9CO3dCQUNsQixDQUFDLENBQUMsb0JBQW9CO3dCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7YUFDN0M7U0FDRjtRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxRQUFRO2dCQUNYLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO2dCQUMxQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7U0FDNUM7S0FDRixDQUFDO0FBOUIwRSxDQThCMUUsQ0FDTCxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUN4Qix1Q0FBcUIsQ0FBQTtJQUNyQixtQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUczQjtBQUVELElBQU0scUJBQXFCLEdBQUcsVUFBQyxFQUE4QjtJQUE1QixJQUFBLGdCQUFnQixzQkFBQSxFQUFLLEtBQUssY0FBNUIsb0JBQThCLENBQUY7SUFDdkQsT0FBTyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2pELEtBQUMsUUFBUSxhQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksSUFBTSxLQUFLLEVBQUksQ0FDckQsQ0FBQyxDQUFDLENBQUMsQ0FDQSxLQUFDLFlBQVksYUFBQyxJQUFJLEVBQUUsQ0FBQyxJQUFNLEtBQUssRUFBSSxDQUN2QyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBWUYsTUFBTSxVQUFVLFFBQVEsQ0FBQyxFQVFnQjtRQVBkLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQSxFQUNSLGtCQUFrQix3QkFBQSxFQUNsQixvQkFBb0IsMEJBQUEsRUFDcEIsd0JBQTJDLEVBQTNDLGdCQUFnQixtQkFBRyxnQkFBZ0IsQ0FBQyxPQUFPLEtBQUE7SUFFcEUsSUFBTSxXQUFXLEdBQUcsVUFBQyxFQUFFO1FBQ3JCLFFBQVEsSUFBSSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUM7SUFFRixJQUFNLE9BQU8sR0FBRyxPQUFPO1FBQ3JCLENBQUMsQ0FBQyxRQUFRO1lBQ0osQ0FBQyxDQUFDLG1CQUFtQjtZQUNyQixDQUFDLENBQUMsZUFBZTtRQUNyQixDQUFDLENBQUMsWUFBWSxDQUFBO0lBRWxCLE9BQU8sQ0FDSCxNQUFDLGFBQWEsYUFDVixZQUFZLEVBQUUsQ0FBQyxFQUNmLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFFLE9BQU8sRUFDaEIsUUFBUSxFQUFFLFFBQVEsRUFDbEIsT0FBTyxFQUFFLFdBQVcsRUFDcEIsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQ3RDLG9CQUFvQixFQUFFLG9CQUFvQixpQkFFNUMsS0FBQyxPQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6QixLQUFDLHFCQUFxQixhQUFDLGdCQUFnQixFQUFFLGdCQUFnQixnQkFBRyxLQUFLLElBQXlCLEtBQzVFLENBQ25CLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ2hlY2tlZEluYWN0aXZlSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2hlY2tib3gtY2hlY2tlZC1pbmFjdGl2ZS5zdmcnO1xuaW1wb3J0IENoZWNrQm94Q2hlY2tlZCBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2hlY2tib3gtY2hlY2tlZC5zdmcnO1xuaW1wb3J0IENoZWNrYm94SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY2hlY2tib3guc3ZnJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuXG5jb25zdCBTdHlsZWRGbGV4Um93ID0gc3R5bGVkKEZsZXhSb3cpPHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgY3VzdG9tQ2hlY2tlZENvbG9yPzogc3RyaW5nO1xuICBjdXN0b21VbmNoZWNrZWRDb2xvcj86IHN0cmluZztcbn0+KFxuICAgICh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCwgY3VzdG9tQ2hlY2tlZENvbG9yLCBjdXN0b21VbmNoZWNrZWRDb2xvciB9KSA9PiAoe1xuICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJyxcbiAgICAgIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICAgICAgcG9pbnRlckV2ZW50czogZGlzYWJsZWQgPyAnbm9uZScgOiAnYXV0bycsXG4gICAgICBzdmc6IHtcbiAgICAgICAgZmlsbDpcbiAgICAgICAgICAgIGNoZWNrZWQgJiYgIWRpc2FibGVkICYmIGN1c3RvbUNoZWNrZWRDb2xvclxuICAgICAgICAgICAgICAgID8gY3VzdG9tQ2hlY2tlZENvbG9yXG4gICAgICAgICAgICAgICAgOiBjaGVja2VkICYmICFkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVcbiAgICAgICAgICAgICAgICAgICAgOiAnbm9uZScsXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICBmaWxsOlxuICAgICAgICAgICAgICBjaGVja2VkICYmICFkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5XG4gICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVjdDoge1xuICAgICAgICAgIHN0cm9rZTogZGlzYWJsZWRcbiAgICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XG4gICAgICAgICAgICAgIDogY3VzdG9tVW5jaGVja2VkQ29sb3JcbiAgICAgICAgICAgICAgICAgID8gY3VzdG9tVW5jaGVja2VkQ29sb3JcbiAgICAgICAgICAgICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBzcGFuOiB7XG4gICAgICAgIGNvbG9yOiBkaXNhYmxlZFxuICAgICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XG4gICAgICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gICAgICB9LFxuICAgIH0pXG4pO1xuXG5leHBvcnQgZW51bSBDaGVja2JveEZvbnRTaXplIHtcbiAgICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICAgJ3NtYWxsJyA9ICdzbWFsbCcsXG59XG5cbmNvbnN0IFN0eWxlZENoZWNrYm94V3JhcHBlciA9ICh7IGNoZWNrYm94Rm9udFNpemUsIC4uLnByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gY2hlY2tib3hGb250U2l6ZSA9PT0gQ2hlY2tib3hGb250U2l6ZS5zbWFsbCA/IChcbiAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9IGxpbmVIZWlnaHQ9eyd4cyd9IHsuLi5wcm9wc30gLz5cbiAgICApIDogKFxuICAgICAgICA8U3VidGl0bGVUZXh0IHNpemU9ezJ9IHsuLi5wcm9wc30gLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDaGVja2JveFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgbGFiZWw/OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIG9uQ2hhbmdlPzogKHZhbHVlPzogYW55KSA9PiB2b2lkO1xuICBjaGVja2VkOiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGN1c3RvbUNoZWNrZWRDb2xvcj86IHN0cmluZztcbiAgY3VzdG9tVW5jaGVja2VkQ29sb3I/OiBzdHJpbmc7XG4gIGNoZWNrYm94Rm9udFNpemU/OiBDaGVja2JveEZvbnRTaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hlY2tib3goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNoZWNrZWRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVVuY2hlY2tlZENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hGb250U2l6ZSA9IENoZWNrYm94Rm9udFNpemUuZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgIH06IENoZWNrYm94UHJvcHMpIHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXYpID0+IHtcbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSghY2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgaWNvblNyYyA9IGNoZWNrZWRcbiAgICA/IGRpc2FibGVkXG4gICAgICAgICAgPyBDaGVja2VkSW5hY3RpdmVJY29uXG4gICAgICAgICAgOiBDaGVja0JveENoZWNrZWRcbiAgICAgIDogQ2hlY2tib3hJY29uXG5cbiAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRGbGV4Um93XG4gICAgICAgICAgaXRlbXNTcGFjaW5nPXs4fVxuICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICBjdXN0b21DaGVja2VkQ29sb3I9e2N1c3RvbUNoZWNrZWRDb2xvcn1cbiAgICAgICAgICBjdXN0b21VbmNoZWNrZWRDb2xvcj17Y3VzdG9tVW5jaGVja2VkQ29sb3J9XG4gICAgICA+XG4gICAgICAgIDxTdmdJY29uIHNyYz17aWNvblNyY30gLz5cbiAgICAgICAgPFN0eWxlZENoZWNrYm94V3JhcHBlciBjaGVja2JveEZvbnRTaXplPXtjaGVja2JveEZvbnRTaXplfT57bGFiZWx9PC9TdHlsZWRDaGVja2JveFdyYXBwZXI+XG4gICAgICA8L1N0eWxlZEZsZXhSb3c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIl19