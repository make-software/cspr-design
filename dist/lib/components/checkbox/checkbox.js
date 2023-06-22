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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFJdkMsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxZQUFZLE1BQU0sZ0NBQWdDLENBQUM7QUFFMUQsSUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUdsQyxVQUFDLEVBQTRCO1FBQTFCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEMsS0FBSyxFQUFFLGFBQWE7UUFDcEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3pDLEdBQUcsRUFBRTtZQUNILElBQUksRUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDeEUsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFDRixPQUFPLElBQUksQ0FBQyxRQUFRO29CQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLE1BQU07YUFDYjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsUUFBUTtvQkFDZCxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtvQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO2FBQ3ZDO1NBQ0Y7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsUUFBUTtnQkFDYixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtnQkFDMUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1NBQzFDO0tBQ0YsQ0FBQztBQXZCbUMsQ0F1Qm5DLENBQUMsQ0FBQztBQVNKLE1BQU0sVUFBVSxRQUFRLENBQUMsRUFLVDtRQUpkLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQTtJQUVSLElBQU0sV0FBVyxHQUFHLFVBQUMsRUFBRTtRQUNyQixRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQUcsT0FBTztRQUNyQixDQUFDLENBQUMsUUFBUTtZQUNSLENBQUMsQ0FBQywrQ0FBK0M7WUFDakQsQ0FBQyxDQUFDLHNDQUFzQztRQUMxQyxDQUFDLENBQUMsOEJBQThCLENBQUM7SUFFbkMsT0FBTyxDQUNMLE1BQUMsYUFBYSxhQUNaLFlBQVksRUFBRSxDQUFDLEVBQ2YsS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUUsT0FBTyxFQUNoQixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsV0FBVyxpQkFFcEIsS0FBQyxPQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6QixLQUFDLFlBQVksYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxLQUFLLElBQWdCLEtBQy9CLENBQ2pCLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xyXG5pbXBvcnQgU3VidGl0bGVUZXh0IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XHJcblxyXG5jb25zdCBTdHlsZWRGbGV4Um93ID0gc3R5bGVkKEZsZXhSb3cpPHtcclxuICBjaGVja2VkPzogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn0+KCh7IHRoZW1lLCBjaGVja2VkLCBkaXNhYmxlZCB9KSA9PiAoe1xyXG4gIGN1cnNvcjogZGlzYWJsZWQgPyAnZGVmYXVsdCcgOiAncG9pbnRlcicsXHJcbiAgd2lkdGg6ICdmaXQtY29udGVudCcsXHJcbiAgcG9pbnRlckV2ZW50czogZGlzYWJsZWQgPyAnbm9uZScgOiAnYXV0bycsXHJcbiAgc3ZnOiB7XHJcbiAgICBmaWxsOiBjaGVja2VkICYmICFkaXNhYmxlZCA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUgOiAnbm9uZScsXHJcbiAgICBwYXRoOiB7XHJcbiAgICAgIGZpbGw6XHJcbiAgICAgICAgY2hlY2tlZCAmJiAhZGlzYWJsZWRcclxuICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeVxyXG4gICAgICAgICAgOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgcmVjdDoge1xyXG4gICAgICBzdHJva2U6IGRpc2FibGVkXHJcbiAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRRdWF0ZXJuYXJ5XHJcbiAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNwYW46IHtcclxuICAgIGNvbG9yOiBkaXNhYmxlZFxyXG4gICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFF1YXRlcm5hcnlcclxuICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hlY2tib3hQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgbGFiZWw/OiBSZWFjdC5SZWFjdEVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgb25DaGFuZ2U/OiAodmFsdWU/OiBhbnkpID0+IHZvaWQ7XHJcbiAgY2hlY2tlZDogYm9vbGVhbjtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveCh7XHJcbiAgY2hlY2tlZCxcclxuICBvbkNoYW5nZSxcclxuICBsYWJlbCxcclxuICBkaXNhYmxlZCxcclxufTogQ2hlY2tib3hQcm9wcykge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2KSA9PiB7XHJcbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSghY2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaWNvblNyYyA9IGNoZWNrZWRcclxuICAgID8gZGlzYWJsZWRcclxuICAgICAgPyAnYXNzZXRzL2ljb25zL2ljLWNoZWNrYm94LWNoZWNrZWQtaW5hY3RpdmUuc3ZnJ1xyXG4gICAgICA6ICdhc3NldHMvaWNvbnMvaWMtY2hlY2tib3gtY2hlY2tlZC5zdmcnXHJcbiAgICA6ICdhc3NldHMvaWNvbnMvaWMtY2hlY2tib3guc3ZnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRGbGV4Um93XHJcbiAgICAgIGl0ZW1zU3BhY2luZz17OH1cclxuICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxyXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgPlxyXG4gICAgICA8U3ZnSWNvbiBzcmM9e2ljb25TcmN9IC8+XHJcbiAgICAgIDxTdWJ0aXRsZVRleHQgc2l6ZT17Mn0+e2xhYmVsfTwvU3VidGl0bGVUZXh0PlxyXG4gICAgPC9TdHlsZWRGbGV4Um93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xyXG4iXX0=