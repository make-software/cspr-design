import { __assign, __makeTemplateObject, __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { SubtitleText } from '../subtitle-text/subtitle-text';
import CaptionText from '../caption-text/caption-text';
import BodyText from "../body-text/body-text";
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
export var LabelFontSize;
(function (LabelFontSize) {
    LabelFontSize["default"] = "default";
    LabelFontSize["small"] = "small";
})(LabelFontSize || (LabelFontSize = {}));
var StyledLabelText = function (_a) {
    var labelFontSize = _a.labelFontSize, props = __rest(_a, ["labelFontSize"]);
    return labelFontSize === LabelFontSize.small ? (_jsx(BodyText, __assign({ size: 1, lineHeight: 'xs' }, props))) : (_jsx(SubtitleText, __assign({ size: 1 }, props)));
};
export var FormFieldStatus;
(function (FormFieldStatus) {
    FormFieldStatus["Error"] = "error";
    FormFieldStatus["Success"] = "success";
})(FormFieldStatus || (FormFieldStatus = {}));
export function FormField(_a) {
    var label = _a.label, rightLabel = _a.rightLabel, status = _a.status, statusText = _a.statusText, children = _a.children, _b = _a.labelFontSize, labelFontSize = _b === void 0 ? LabelFontSize.default : _b, restProps = __rest(_a, ["label", "rightLabel", "status", "statusText", "children", "labelFontSize"]);
    return (_jsxs(StyledContainer, __assign({}, restProps, { children: [_jsxs(LabelContainer, { children: [label && _jsx(StyledLabelText, __assign({ labelFontSize: labelFontSize }, { children: label })), rightLabel && _jsx(StyledLabelText, __assign({ labelFontSize: labelFontSize }, { children: rightLabel }))] }), children, _jsx(StatusTextContainer, __assign({ status: status }, { children: _jsx(StatusCaptionText, __assign({ size: 2 }, { children: statusText })) }))] })));
}
export default FormField;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sV0FBVyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZELE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBRTlDLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLFlBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLFFBQVEsSUFDcEIsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztLQUNiLENBQUMsRUFDRjtBQU51QixDQU12QixDQUNILENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLGVBQWU7UUFDL0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtLQUM3QixDQUFDO0FBTmtELENBTWxELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2QyxVQUFDLEVBQXlCO1FBQXZCLEtBQUssV0FBQSxFQUFVLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM5QixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDO0FBSDZCLENBRzdCLENBQ0gsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyw4RkFBQSwyQkFFNUMsSUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBQTJCO0lBQXpCLElBQUEsYUFBYSxtQkFBQSxFQUFLLEtBQUssY0FBekIsaUJBQTJCLENBQUY7SUFDOUMsT0FBTyxhQUFhLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDM0MsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFNLEtBQUssRUFBSSxDQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNBLEtBQUMsWUFBWSxhQUFDLElBQUksRUFBRSxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3ZDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLGtDQUFlLENBQUE7SUFDZixzQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsZUFBZSxLQUFmLGVBQWUsUUFHMUI7QUFXRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEVBUVQ7SUFQZixJQUFBLEtBQUssV0FBQSxFQUNMLFVBQVUsZ0JBQUEsRUFDVixNQUFNLFlBQUEsRUFDTixVQUFVLGdCQUFBLEVBQ1YsUUFBUSxjQUFBLEVBQ1IscUJBQXFDLEVBQXJDLGFBQWEsbUJBQUcsYUFBYSxDQUFDLE9BQU8sS0FBQSxFQUNsQyxTQUFTLGNBUFksNEVBUXpCLENBRGE7SUFFWixPQUFPLENBQ0wsTUFBQyxlQUFlLGVBQUssU0FBUyxlQUM1QixNQUFDLGNBQWMsZUFDWixLQUFLLElBQUksS0FBQyxlQUFlLGFBQUMsYUFBYSxFQUFFLGFBQWEsZ0JBQUcsS0FBSyxJQUFtQixFQUNqRixVQUFVLElBQUksS0FBQyxlQUFlLGFBQUMsYUFBYSxFQUFFLGFBQWEsZ0JBQUcsVUFBVSxJQUFtQixJQUM3RSxFQUVoQixRQUFRLEVBRVQsS0FBQyxtQkFBbUIsYUFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDakMsS0FBQyxpQkFBaUIsYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxVQUFVLElBQXFCLElBQ3hDLEtBQ04sQ0FDbkIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCB7IFN1YnRpdGxlVGV4dCB9IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XHJcbmltcG9ydCBDYXB0aW9uVGV4dCBmcm9tICcuLi9jYXB0aW9uLXRleHQvY2FwdGlvbi10ZXh0JztcclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gXCIuLi9ib2R5LXRleHQvYm9keS10ZXh0XCI7XHJcblxyXG5jb25zdCBnZXRUaGVtZUNvbG9yID0gKHN0YXR1cz86IEZvcm1GaWVsZFN0YXR1cyB8IG51bGwpID0+IHtcclxuICBpZiAoc3RhdHVzID09IG51bGwpIHtcclxuICAgIHJldHVybiAnY29udGVudFRlcnRpYXJ5JztcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBbRm9ybUZpZWxkU3RhdHVzLkVycm9yXTogJ2NvbnRlbnRSZWQnLFxyXG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5TdWNjZXNzXTogJ2NvbnRlbnRHcmVlbicsXHJcbiAgfVtzdGF0dXNdO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PihcclxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgLi4uKGRpc2FibGVkICYmIHtcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSksXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICcmID4gKic6IHsgbWFyZ2luQm90dG9tOiA0IH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0YXR1c1RleHRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPEZvcm1GaWVsZFByb3BzPihcclxuICAoeyB0aGVtZSwgc3RhdHVzOiBzdGF0dXMgfSkgPT4gKHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvcihzdGF0dXMpXSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgU3RhdHVzQ2FwdGlvblRleHQgPSBzdHlsZWQoQ2FwdGlvblRleHQpYFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBlbnVtIExhYmVsRm9udFNpemUge1xyXG4gICAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxyXG4gICAgJ3NtYWxsJyA9ICdzbWFsbCcsXHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZExhYmVsVGV4dCA9ICh7IGxhYmVsRm9udFNpemUsIC4uLnByb3BzIH0pID0+IHtcclxuICAgIHJldHVybiBsYWJlbEZvbnRTaXplID09PSBMYWJlbEZvbnRTaXplLnNtYWxsID8gKFxyXG4gICAgICAgIDxCb2R5VGV4dCBzaXplPXsxfSBsaW5lSGVpZ2h0PXsneHMnfSB7Li4ucHJvcHN9IC8+XHJcbiAgICApIDogKFxyXG4gICAgICAgIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0gey4uLnByb3BzfSAvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIEZvcm1GaWVsZFN0YXR1cyB7XHJcbiAgRXJyb3IgPSAnZXJyb3InLFxyXG4gIFN1Y2Nlc3MgPSAnc3VjY2VzcycsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUZpZWxkUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xyXG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xyXG4gIHJpZ2h0TGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XHJcbiAgc3RhdHVzPzogRm9ybUZpZWxkU3RhdHVzO1xyXG4gIHN0YXR1c1RleHQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBsYWJlbEZvbnRTaXplPzogTGFiZWxGb250U2l6ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1GaWVsZCh7XHJcbiAgbGFiZWwsXHJcbiAgcmlnaHRMYWJlbCxcclxuICBzdGF0dXMsXHJcbiAgc3RhdHVzVGV4dCxcclxuICBjaGlsZHJlbixcclxuICBsYWJlbEZvbnRTaXplID0gTGFiZWxGb250U2l6ZS5kZWZhdWx0LFxyXG4gIC4uLnJlc3RQcm9wc1xyXG59OiBGb3JtRmllbGRQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ29udGFpbmVyIHsuLi5yZXN0UHJvcHN9PlxyXG4gICAgICA8TGFiZWxDb250YWluZXI+XHJcbiAgICAgICAge2xhYmVsICYmIDxTdHlsZWRMYWJlbFRleHQgbGFiZWxGb250U2l6ZT17bGFiZWxGb250U2l6ZX0+e2xhYmVsfTwvU3R5bGVkTGFiZWxUZXh0Pn1cclxuICAgICAgICB7cmlnaHRMYWJlbCAmJiA8U3R5bGVkTGFiZWxUZXh0IGxhYmVsRm9udFNpemU9e2xhYmVsRm9udFNpemV9PntyaWdodExhYmVsfTwvU3R5bGVkTGFiZWxUZXh0Pn1cclxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cclxuXHJcbiAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgIDxTdGF0dXNUZXh0Q29udGFpbmVyIHN0YXR1cz17c3RhdHVzfT5cclxuICAgICAgICA8U3RhdHVzQ2FwdGlvblRleHQgc2l6ZT17Mn0+e3N0YXR1c1RleHR9PC9TdGF0dXNDYXB0aW9uVGV4dD5cclxuICAgICAgPC9TdGF0dXNUZXh0Q29udGFpbmVyPlxyXG4gICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xyXG4iXX0=