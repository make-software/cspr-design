import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { SubtitleText } from '../subtitle-text/subtitle-text';
var getThemeColor = function (status) {
    var _a;
    if (status == null) {
        return 'contentTertiary';
    }
    return (_a = {},
        _a[FormFieldStatus.Error] = 'contentRed',
        _a[FormFieldStatus.Success] = 'contentGreen',
        _a)[status];
};
var StyledContainer = styled.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (__assign({ display: 'flex', flexDirection: 'column' }, (disabled && {
        opacity: 0.5,
    })));
});
var LabelContainer = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > *': { marginBottom: 4 },
    });
});
var StatusTextContainer = styled('div')(function (_a) {
    var theme = _a.theme, status = _a.status;
    return ({
        color: theme.styleguideColors[getThemeColor(status)],
    });
});
export var FormFieldStatus;
(function (FormFieldStatus) {
    FormFieldStatus["Error"] = "error";
    FormFieldStatus["Success"] = "success";
})(FormFieldStatus || (FormFieldStatus = {}));
export function FormField(_a) {
    var label = _a.label, rightLabel = _a.rightLabel, status = _a.status, statusText = _a.statusText, children = _a.children, restProps = __rest(_a, ["label", "rightLabel", "status", "statusText", "children"]);
    return (_jsxs(StyledContainer, __assign({}, restProps, { children: [_jsxs(LabelContainer, { children: [label && _jsx(SubtitleText, __assign({ size: 1 }, { children: label })), rightLabel && _jsx(SubtitleText, __assign({ size: 1 }, { children: rightLabel }))] }), children, _jsx(StatusTextContainer, __assign({ status: status }, { children: _jsx(SubtitleText, __assign({ size: 2 }, { children: statusText })) }))] })));
}
export default FormField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLFlBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLFFBQVEsSUFDcEIsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztLQUNiLENBQUMsRUFDRjtBQU51QixDQU12QixDQUNILENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLGVBQWU7UUFDL0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtLQUM3QixDQUFDO0FBTmtELENBTWxELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2QyxVQUFDLEVBQXlCO1FBQXZCLEtBQUssV0FBQSxFQUFVLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDO0FBRjZCLENBRTdCLENBQ0gsQ0FBQztBQUVGLE1BQU0sQ0FBTixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLHNDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxlQUFlLEtBQWYsZUFBZSxRQUcxQjtBQVVELE1BQU0sVUFBVSxTQUFTLENBQUMsRUFPVDtJQU5mLElBQUEsS0FBSyxXQUFBLEVBQ0wsVUFBVSxnQkFBQSxFQUNWLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixRQUFRLGNBQUEsRUFDTCxTQUFTLGNBTlksMkRBT3pCLENBRGE7SUFFWixPQUFPLENBQ0wsTUFBQyxlQUFlLGVBQUssU0FBUyxlQUM1QixNQUFDLGNBQWMsZUFDWixLQUFLLElBQUksS0FBQyxZQUFZLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFnQixFQUN0RCxVQUFVLElBQUksS0FBQyxZQUFZLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFnQixJQUNsRCxFQUVoQixRQUFRLEVBRVQsS0FBQyxtQkFBbUIsYUFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDakMsS0FBQyxZQUFZLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFnQixJQUM5QixLQUNOLENBQ25CLENBQUM7QUFDSixDQUFDO0FBRUQsZUFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBTdWJ0aXRsZVRleHQgfSBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuXG5jb25zdCBnZXRUaGVtZUNvbG9yID0gKHN0YXR1cz86IEZvcm1GaWVsZFN0YXR1cyB8IG51bGwpID0+IHtcbiAgaWYgKHN0YXR1cyA9PSBudWxsKSB7XG4gICAgcmV0dXJuICdjb250ZW50VGVydGlhcnknO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBbRm9ybUZpZWxkU3RhdHVzLkVycm9yXTogJ2NvbnRlbnRSZWQnLFxuICAgIFtGb3JtRmllbGRTdGF0dXMuU3VjY2Vzc106ICdjb250ZW50R3JlZW4nLFxuICB9W3N0YXR1c107XG59O1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgJyYgPiAqJzogeyBtYXJnaW5Cb3R0b206IDQgfSxcbn0pKTtcblxuY29uc3QgU3RhdHVzVGV4dENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jyk8Rm9ybUZpZWxkUHJvcHM+KFxuICAoeyB0aGVtZSwgc3RhdHVzOiBzdGF0dXMgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tnZXRUaGVtZUNvbG9yKHN0YXR1cyldLFxuICB9KVxuKTtcblxuZXhwb3J0IGVudW0gRm9ybUZpZWxkU3RhdHVzIHtcbiAgRXJyb3IgPSAnZXJyb3InLFxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1GaWVsZFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHJpZ2h0TGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHN0YXR1cz86IEZvcm1GaWVsZFN0YXR1cztcbiAgc3RhdHVzVGV4dD86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1GaWVsZCh7XG4gIGxhYmVsLFxuICByaWdodExhYmVsLFxuICBzdGF0dXMsXG4gIHN0YXR1c1RleHQsXG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0UHJvcHNcbn06IEZvcm1GaWVsZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRhaW5lciB7Li4ucmVzdFByb3BzfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lcj5cbiAgICAgICAge2xhYmVsICYmIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0+e2xhYmVsfTwvU3VidGl0bGVUZXh0Pn1cbiAgICAgICAge3JpZ2h0TGFiZWwgJiYgPFN1YnRpdGxlVGV4dCBzaXplPXsxfT57cmlnaHRMYWJlbH08L1N1YnRpdGxlVGV4dD59XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuXG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIDxTdGF0dXNUZXh0Q29udGFpbmVyIHN0YXR1cz17c3RhdHVzfT5cbiAgICAgICAgPFN1YnRpdGxlVGV4dCBzaXplPXsyfT57c3RhdHVzVGV4dH08L1N1YnRpdGxlVGV4dD5cbiAgICAgIDwvU3RhdHVzVGV4dENvbnRhaW5lcj5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuIl19