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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxRQUFRLE1BQU0sd0JBQXdCLENBQUM7QUFDOUMsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFDM0MsT0FBTyxPQUFPLE1BQU0sc0JBQXNCLENBQUM7QUFFM0MsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUMvQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3RCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsT0FBTyxFQUFFLEVBQUU7UUFDWCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLGVBQWUsRUFDYixNQUFNLEtBQUssV0FBVyxDQUFDLE9BQU87WUFDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0I7WUFDL0MsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUI7UUFDbEQsR0FBRyxFQUFFO1lBQ0gsS0FBSyxFQUNILE1BQU0sS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0I7Z0JBQ3pDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtTQUN4QztLQUNGLENBQUM7QUFkcUIsQ0FjckIsQ0FDSCxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixrQ0FBbUIsQ0FBQTtJQUNuQiw4QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxXQUFXLEtBQVgsV0FBVyxRQUd0QjtBQU9ELE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQXlCO0lBQ3JDLElBQUEsT0FBTyxHQUFhLEtBQUssUUFBbEIsRUFBRSxNQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7SUFFbEMsSUFBTSxPQUFPLEdBQ1gsTUFBTSxLQUFLLFNBQVM7UUFDbEIsQ0FBQyxDQUFDLDJCQUEyQjtRQUM3QixDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFFbEMsT0FBTyxDQUNMLE1BQUMsU0FBUyxhQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUUsQ0FBQyxpQkFDdkQsS0FBQyxPQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUN6QixLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxPQUFPLElBQVksS0FDN0IsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPFBpY2s8U3RhdHVzTWVzc2FnZVByb3BzLCAnc3RhdHVzJz4+KFxuICAoeyB0aGVtZSwgc3RhdHVzIH0pID0+ICh7XG4gICAgbWluSGVpZ2h0OiA1MixcbiAgICBwYWRkaW5nOiAxNixcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgIHN0YXR1cyA9PT0gQWxlcnRTdGF0dXMuU3VjY2Vzc1xuICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlclxuICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeVJlZEhvdmVyLFxuICAgIHN2Zzoge1xuICAgICAgY29sb3I6XG4gICAgICAgIHN0YXR1cyA9PT0gQWxlcnRTdGF0dXMuU3VjY2Vzc1xuICAgICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50TGlnaHRCbHVlXG4gICAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBlbnVtIEFsZXJ0U3RhdHVzIHtcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJyxcbiAgRXJyb3IgPSAnZXJyb3InLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXR1c01lc3NhZ2VQcm9wcyB7XG4gIG1lc3NhZ2U6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgc3RhdHVzOiBBbGVydFN0YXR1cztcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gKHByb3BzOiBTdGF0dXNNZXNzYWdlUHJvcHMpID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlLCBzdGF0dXMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGljb25TcmMgPVxuICAgIHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnXG4gICAgICA/ICdhc3NldHMvaWNvbnMvaWMtY2xvY2suc3ZnJ1xuICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWVycm9yLnN2Zyc7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIHN0YXR1cz17c3RhdHVzfSBhbGlnbj1cImNlbnRlclwiIGl0ZW1zU3BhY2luZz17OH0+XG4gICAgICA8U3ZnSWNvbiBzcmM9e2ljb25TcmN9IC8+XG4gICAgICA8Qm9keVRleHQgc2l6ZT17M30+e21lc3NhZ2V9PC9Cb2R5VGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIl19