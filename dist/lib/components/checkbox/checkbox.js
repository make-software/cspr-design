import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
import SubtitleText from '../subtitle-text/subtitle-text';
var StyledFlexRow = styled(FlexRow)(function (_a) {
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
export function Checkbox(_a) {
    var checked = _a.checked, onChange = _a.onChange, label = _a.label, disabled = _a.disabled;
    var handleClick = function (ev) {
        onChange && onChange(!checked);
    };
    var iconSrc = checked
        ? disabled
            ? 'assets/icons/ic-checkbox-checked-inactive.svg'
            : 'assets/icons/ic-checkbox-checked.svg'
        : 'assets/icons/ic-checkbox.svg';
    return (_jsxs(StyledFlexRow, __assign({ itemsSpacing: 8, align: "center", checked: checked, disabled: disabled, onClick: handleClick }, { children: [_jsx(SvgIcon, { src: iconSrc }), _jsx(SubtitleText, __assign({ size: 2 }, { children: label }))] })));
}
export default Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFJdkMsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxZQUFZLE1BQU0sZ0NBQWdDLENBQUM7QUFFMUQsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUdsQyxVQUFDLEVBQTRCO1FBQTFCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDeEUsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFDRixPQUFPLElBQUksQ0FBQyxRQUFRO29CQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLE1BQU07YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDZCxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2FBQ3ZDO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsUUFBUTtnQkFDYixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1NBQzFDO0tBQ0YsQ0FBQztBQXZCbUMsQ0F1Qm5DLENBQUMsQ0FBQztBQVNKLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFLVDtRQUpkLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQTtJQUVSLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBRTtRQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQUcsT0FBTztRQUNyQixDQUFDLENBQUMsUUFBUTtZQUNSLENBQUMsQ0FBQywrQ0FBK0M7WUFDakQsQ0FBQyxDQUFDLHNDQUFzQztRQUMxQyxDQUFDLENBQUMsOEJBQThCLENBQUM7SUFFbkMsT0FBTyxDQUNMLE1BQUMsYUFBYSxhQUNaLFlBQVksRUFBRSxDQUFDLEVBQ2YsS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxpQkFFcEIsS0FBQyxPQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6QixLQUFDLFlBQVksYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxLQUFLLElBQWdCLEtBQy9CLENBQ2pCLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IFN1YnRpdGxlVGV4dCBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuXG5jb25zdCBTdHlsZWRGbGV4Um93ID0gc3R5bGVkKEZsZXhSb3cpPHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn0+KCh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCB9KSA9PiAoe1xuICBjdXJzb3I6IGRpc2FibGVkID8gJ2RlZmF1bHQnIDogJ3BvaW50ZXInLFxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgcG9pbnRlckV2ZW50czogZGlzYWJsZWQgPyAnbm9uZScgOiAnYXV0bycsXG4gIHN2Zzoge1xuICAgIGZpbGw6IGNoZWNrZWQgJiYgIWRpc2FibGVkID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSA6ICdub25lJyxcbiAgICBwYXRoOiB7XG4gICAgICBmaWxsOlxuICAgICAgICBjaGVja2VkICYmICFkaXNhYmxlZFxuICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeVxuICAgICAgICAgIDogJ25vbmUnLFxuICAgIH0sXG4gICAgcmVjdDoge1xuICAgICAgc3Ryb2tlOiBkaXNhYmxlZFxuICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcbiAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgIH0sXG4gIH0sXG4gIHNwYW46IHtcbiAgICBjb2xvcjogZGlzYWJsZWRcbiAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UXVhdGVybmFyeVxuICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICB9LFxufSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIENoZWNrYm94UHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBsYWJlbD86IHN0cmluZztcbiAgb25DaGFuZ2U/OiAodmFsdWU/OiBhbnkpID0+IHZvaWQ7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrYm94KHtcbiAgY2hlY2tlZCxcbiAgb25DaGFuZ2UsXG4gIGxhYmVsLFxuICBkaXNhYmxlZCxcbn06IENoZWNrYm94UHJvcHMpIHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXYpID0+IHtcbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSghY2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgaWNvblNyYyA9IGNoZWNrZWRcbiAgICA/IGRpc2FibGVkXG4gICAgICA/ICdhc3NldHMvaWNvbnMvaWMtY2hlY2tib3gtY2hlY2tlZC1pbmFjdGl2ZS5zdmcnXG4gICAgICA6ICdhc3NldHMvaWNvbnMvaWMtY2hlY2tib3gtY2hlY2tlZC5zdmcnXG4gICAgOiAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LnN2Zyc7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRmxleFJvd1xuICAgICAgaXRlbXNTcGFjaW5nPXs4fVxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgID5cbiAgICAgIDxTdmdJY29uIHNyYz17aWNvblNyY30gLz5cbiAgICAgIDxTdWJ0aXRsZVRleHQgc2l6ZT17Mn0+e2xhYmVsfTwvU3VidGl0bGVUZXh0PlxuICAgIDwvU3R5bGVkRmxleFJvdz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0=