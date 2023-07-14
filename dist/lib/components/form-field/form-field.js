import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { SubtitleText } from '../subtitle-text/subtitle-text';
import CaptionText from '../caption-text/caption-text';
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
        position: 'relative',
        color: theme.styleguideColors[getThemeColor(status)],
    });
});
var StatusCaptionText = styled(CaptionText)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
export var FormFieldStatus;
(function (FormFieldStatus) {
    FormFieldStatus["Error"] = "error";
    FormFieldStatus["Success"] = "success";
})(FormFieldStatus || (FormFieldStatus = {}));
export function FormField(_a) {
    var label = _a.label, rightLabel = _a.rightLabel, status = _a.status, statusText = _a.statusText, children = _a.children, restProps = __rest(_a, ["label", "rightLabel", "status", "statusText", "children"]);
    return (_jsxs(StyledContainer, __assign({}, restProps, { children: [_jsxs(LabelContainer, { children: [label && _jsx(SubtitleText, __assign({ size: 1 }, { children: label })), rightLabel && _jsx(SubtitleText, __assign({ size: 1 }, { children: rightLabel }))] }), children, _jsx(StatusTextContainer, __assign({ status: status }, { children: _jsx(StatusCaptionText, __assign({ size: 2 }, { children: statusText })) }))] })));
}
export default FormField;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sV0FBVyxNQUFNLDhCQUE4QixDQUFDO0FBRXZELElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLFlBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLFFBQVEsSUFDcEIsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztLQUNiLENBQUMsRUFDRjtBQU51QixDQU12QixDQUNILENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLGVBQWU7UUFDL0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtLQUM3QixDQUFDO0FBTmtELENBTWxELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2QyxVQUFDLEVBQXlCO1FBQXZCLEtBQUssV0FBQSxFQUFVLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM5QixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDO0FBSDZCLENBRzdCLENBQ0gsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyw4RkFBQSwyQkFFNUMsSUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN6QixrQ0FBZSxDQUFBO0lBQ2Ysc0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCO0FBVUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxFQU9UO0lBTmYsSUFBQSxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsTUFBTSxZQUFBLEVBQ04sVUFBVSxnQkFBQSxFQUNWLFFBQVEsY0FBQSxFQUNMLFNBQVMsY0FOWSwyREFPekIsQ0FEYTtJQUVaLE9BQU8sQ0FDTCxNQUFDLGVBQWUsZUFBSyxTQUFTLGVBQzVCLE1BQUMsY0FBYyxlQUNaLEtBQUssSUFBSSxLQUFDLFlBQVksYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxLQUFLLElBQWdCLEVBQ3RELFVBQVUsSUFBSSxLQUFDLFlBQVksYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxVQUFVLElBQWdCLElBQ2xELEVBRWhCLFFBQVEsRUFFVCxLQUFDLG1CQUFtQixhQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUNqQyxLQUFDLGlCQUFpQixhQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLFVBQVUsSUFBcUIsSUFDeEMsS0FDTixDQUNuQixDQUFDO0FBQ0osQ0FBQztBQUVELGVBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU3VidGl0bGVUZXh0IH0gZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCBDYXB0aW9uVGV4dCBmcm9tICcuLi9jYXB0aW9uLXRleHQvY2FwdGlvbi10ZXh0JztcblxuY29uc3QgZ2V0VGhlbWVDb2xvciA9IChzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXMgfCBudWxsKSA9PiB7XG4gIGlmIChzdGF0dXMgPT0gbnVsbCkge1xuICAgIHJldHVybiAnY29udGVudFRlcnRpYXJ5JztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5FcnJvcl06ICdjb250ZW50UmVkJyxcbiAgICBbRm9ybUZpZWxkU3RhdHVzLlN1Y2Nlc3NdOiAnY29udGVudEdyZWVuJyxcbiAgfVtzdGF0dXNdO1xufTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICcmID4gKic6IHsgbWFyZ2luQm90dG9tOiA0IH0sXG59KSk7XG5cbmNvbnN0IFN0YXR1c1RleHRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPEZvcm1GaWVsZFByb3BzPihcbiAgKHsgdGhlbWUsIHN0YXR1czogc3RhdHVzIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvcihzdGF0dXMpXSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0YXR1c0NhcHRpb25UZXh0ID0gc3R5bGVkKENhcHRpb25UZXh0KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuYDtcblxuZXhwb3J0IGVudW0gRm9ybUZpZWxkU3RhdHVzIHtcbiAgRXJyb3IgPSAnZXJyb3InLFxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1GaWVsZFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHJpZ2h0TGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHN0YXR1cz86IEZvcm1GaWVsZFN0YXR1cztcbiAgc3RhdHVzVGV4dD86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1GaWVsZCh7XG4gIGxhYmVsLFxuICByaWdodExhYmVsLFxuICBzdGF0dXMsXG4gIHN0YXR1c1RleHQsXG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0UHJvcHNcbn06IEZvcm1GaWVsZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRhaW5lciB7Li4ucmVzdFByb3BzfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lcj5cbiAgICAgICAge2xhYmVsICYmIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0+e2xhYmVsfTwvU3VidGl0bGVUZXh0Pn1cbiAgICAgICAge3JpZ2h0TGFiZWwgJiYgPFN1YnRpdGxlVGV4dCBzaXplPXsxfT57cmlnaHRMYWJlbH08L1N1YnRpdGxlVGV4dD59XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuXG4gICAgICB7Y2hpbGRyZW59XG5cbiAgICAgIDxTdGF0dXNUZXh0Q29udGFpbmVyIHN0YXR1cz17c3RhdHVzfT5cbiAgICAgICAgPFN0YXR1c0NhcHRpb25UZXh0IHNpemU9ezJ9PntzdGF0dXNUZXh0fTwvU3RhdHVzQ2FwdGlvblRleHQ+XG4gICAgICA8L1N0YXR1c1RleHRDb250YWluZXI+XG4gICAgPC9TdHlsZWRDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1GaWVsZDtcbiJdfQ==