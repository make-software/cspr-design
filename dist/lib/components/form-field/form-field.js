import { __assign, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { SubtitleText } from '../subtitle-text/subtitle-text';
import CaptionText from "../caption-text/caption-text";
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
    return (_jsxs(StyledContainer, __assign({}, restProps, { children: [_jsxs(LabelContainer, { children: [label && _jsx(SubtitleText, __assign({ size: 1 }, { children: label })), rightLabel && _jsx(SubtitleText, __assign({ size: 1 }, { children: rightLabel }))] }), children, _jsx(StatusTextContainer, __assign({ status: status }, { children: _jsx(CaptionText, __assign({ size: 2 }, { children: statusText })) }))] })));
}
export default FormField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sV0FBVyxNQUFNLDhCQUE4QixDQUFDO0FBRXZELElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLFlBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLFFBQVEsSUFDcEIsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztLQUNiLENBQUMsRUFDRjtBQU51QixDQU12QixDQUNILENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLGVBQWU7UUFDL0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtLQUM3QixDQUFDO0FBTmtELENBTWxELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2QyxVQUFDLEVBQXlCO1FBQXZCLEtBQUssV0FBQSxFQUFVLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDO0FBRjZCLENBRTdCLENBQ0gsQ0FBQztBQUVGLE1BQU0sQ0FBTixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLHNDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxlQUFlLEtBQWYsZUFBZSxRQUcxQjtBQVVELE1BQU0sVUFBVSxTQUFTLENBQUMsRUFPVDtJQU5mLElBQUEsS0FBSyxXQUFBLEVBQ0wsVUFBVSxnQkFBQSxFQUNWLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixRQUFRLGNBQUEsRUFDTCxTQUFTLGNBTlksMkRBT3pCLENBRGE7SUFFWixPQUFPLENBQ0wsTUFBQyxlQUFlLGVBQUssU0FBUyxlQUM1QixNQUFDLGNBQWMsZUFDWixLQUFLLElBQUksS0FBQyxZQUFZLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFnQixFQUN0RCxVQUFVLElBQUksS0FBQyxZQUFZLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFnQixJQUNsRCxFQUVoQixRQUFRLEVBRVQsS0FBQyxtQkFBbUIsYUFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDakMsS0FBQyxXQUFXLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFlLElBQzVCLEtBQ04sQ0FDbkIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFN1YnRpdGxlVGV4dCB9IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSBcIi4uL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHRcIjtcblxuY29uc3QgZ2V0VGhlbWVDb2xvciA9IChzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXMgfCBudWxsKSA9PiB7XG4gIGlmIChzdGF0dXMgPT0gbnVsbCkge1xuICAgIHJldHVybiAnY29udGVudFRlcnRpYXJ5JztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5FcnJvcl06ICdjb250ZW50UmVkJyxcbiAgICBbRm9ybUZpZWxkU3RhdHVzLlN1Y2Nlc3NdOiAnY29udGVudEdyZWVuJyxcbiAgfVtzdGF0dXNdO1xufTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICcmID4gKic6IHsgbWFyZ2luQm90dG9tOiA0IH0sXG59KSk7XG5cbmNvbnN0IFN0YXR1c1RleHRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPEZvcm1GaWVsZFByb3BzPihcbiAgKHsgdGhlbWUsIHN0YXR1czogc3RhdHVzIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvcihzdGF0dXMpXSxcbiAgfSlcbik7XG5cbmV4cG9ydCBlbnVtIEZvcm1GaWVsZFN0YXR1cyB7XG4gIEVycm9yID0gJ2Vycm9yJyxcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtRmllbGRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXM7XG4gIHN0YXR1c1RleHQ/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtRmllbGQoe1xuICBsYWJlbCxcbiAgcmlnaHRMYWJlbCxcbiAgc3RhdHVzLFxuICBzdGF0dXNUZXh0LFxuICBjaGlsZHJlbixcbiAgLi4ucmVzdFByb3BzXG59OiBGb3JtRmllbGRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgey4uLnJlc3RQcm9wc30+XG4gICAgICA8TGFiZWxDb250YWluZXI+XG4gICAgICAgIHtsYWJlbCAmJiA8U3VidGl0bGVUZXh0IHNpemU9ezF9PntsYWJlbH08L1N1YnRpdGxlVGV4dD59XG4gICAgICAgIHtyaWdodExhYmVsICYmIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0+e3JpZ2h0TGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cblxuICAgICAge2NoaWxkcmVufVxuXG4gICAgICA8U3RhdHVzVGV4dENvbnRhaW5lciBzdGF0dXM9e3N0YXR1c30+XG4gICAgICAgIDxDYXB0aW9uVGV4dCBzaXplPXsyfT57c3RhdHVzVGV4dH08L0NhcHRpb25UZXh0PlxuICAgICAgPC9TdGF0dXNUZXh0Q29udGFpbmVyPlxuICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iXX0=