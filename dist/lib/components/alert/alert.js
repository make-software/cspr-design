import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import BodyText from '../body-text/body-text';
import FlexRow from '../flex-row/flex-row';
import SvgIcon from '../svg-icon/svg-icon';
var Container = styled(FlexRow)(function (_a) {
    var theme = _a.theme, status = _a.status;
    return ({
        minHeight: 52,
        padding: 16,
        borderRadius: theme.borderRadius.base,
        backgroundColor: status === AlertStatus.Success
            ? theme.styleguideColors.fillSecondaryBlueHover
            : theme.styleguideColors.fillSecondaryRedHover,
        svg: {
            color: status === AlertStatus.Success
                ? theme.styleguideColors.contentLightBlue
                : theme.styleguideColors.contentRed,
        },
    });
});
export var AlertStatus;
(function (AlertStatus) {
    AlertStatus["Success"] = "success";
    AlertStatus["Error"] = "error";
})(AlertStatus || (AlertStatus = {}));
export var Alert = function (props) {
    var message = props.message, status = props.status;
    var iconSrc = status === 'success'
        ? 'assets/icons/ic-clock.svg'
        : 'assets/icons/ic-error.svg';
    return (_jsxs(Container, __assign({ status: status, align: "center", itemsSpacing: 8 }, { children: [_jsx(SvgIcon, { src: iconSrc }), _jsx(BodyText, __assign({ size: 3 }, { children: message }))] })));
};
export default Alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxRQUFRLE1BQU0sd0JBQXdCLENBQUM7QUFDOUMsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUMvQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3RCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFLEVBQUU7UUFDWCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLGVBQWUsRUFDYixNQUFNLEtBQUssV0FBVyxDQUFDLE9BQU87WUFDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0I7WUFDL0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUI7UUFDbEQsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUNILE1BQU0sS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7Z0JBQ3pDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtTQUN4QztLQUNGLENBQUM7QUFkcUIsQ0FjckIsQ0FDSCxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixrQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QjtBQU9ELE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQXlCO0lBQ3JDLElBQUEsT0FBTyxHQUFhLEtBQUssUUFBbEIsRUFBRSxNQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7SUFFbEMsSUFBTSxPQUFPLEdBQ1gsTUFBTSxLQUFLLFNBQVM7UUFDbEIsQ0FBQyxDQUFDLDJCQUEyQjtRQUM3QixDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFFbEMsT0FBTyxDQUNMLE1BQUMsU0FBUyxhQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUUsQ0FBQyxpQkFDdkQsS0FBQyxPQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6QixLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxPQUFPLElBQVksS0FDN0IsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcclxuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xyXG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8UGljazxTdGF0dXNNZXNzYWdlUHJvcHMsICdzdGF0dXMnPj4oXHJcbiAgKHsgdGhlbWUsIHN0YXR1cyB9KSA9PiAoe1xyXG4gICAgbWluSGVpZ2h0OiA1MixcclxuICAgIHBhZGRpbmc6IDE2LFxyXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgc3RhdHVzID09PSBBbGVydFN0YXR1cy5TdWNjZXNzXHJcbiAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXJcclxuICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeVJlZEhvdmVyLFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIGNvbG9yOlxyXG4gICAgICAgIHN0YXR1cyA9PT0gQWxlcnRTdGF0dXMuU3VjY2Vzc1xyXG4gICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRMaWdodEJsdWVcclxuICAgICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UmVkLFxyXG4gICAgfSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGVudW0gQWxlcnRTdGF0dXMge1xyXG4gIFN1Y2Nlc3MgPSAnc3VjY2VzcycsXHJcbiAgRXJyb3IgPSAnZXJyb3InLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c01lc3NhZ2VQcm9wcyB7XHJcbiAgbWVzc2FnZTogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHN0YXR1czogQWxlcnRTdGF0dXM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBbGVydCA9IChwcm9wczogU3RhdHVzTWVzc2FnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBtZXNzYWdlLCBzdGF0dXMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBpY29uU3JjID1cclxuICAgIHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnXHJcbiAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1jbG9jay5zdmcnXHJcbiAgICAgIDogJ2Fzc2V0cy9pY29ucy9pYy1lcnJvci5zdmcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBzdGF0dXM9e3N0YXR1c30gYWxpZ249XCJjZW50ZXJcIiBpdGVtc1NwYWNpbmc9ezh9PlxyXG4gICAgICA8U3ZnSWNvbiBzcmM9e2ljb25TcmN9IC8+XHJcbiAgICAgIDxCb2R5VGV4dCBzaXplPXszfT57bWVzc2FnZX08L0JvZHlUZXh0PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xyXG4iXX0=