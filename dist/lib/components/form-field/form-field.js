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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sV0FBVyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZELE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBRTlDLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLFlBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLFFBQVEsSUFDcEIsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztLQUNiLENBQUMsRUFDRjtBQU51QixDQU12QixDQUNILENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLGVBQWU7UUFDL0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtLQUM3QixDQUFDO0FBTmtELENBTWxELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2QyxVQUFDLEVBQXlCO1FBQXZCLEtBQUssV0FBQSxFQUFVLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM5QixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDO0FBSDZCLENBRzdCLENBQ0gsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyw4RkFBQSwyQkFFNUMsSUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBQTJCO0lBQXpCLElBQUEsYUFBYSxtQkFBQSxFQUFLLEtBQUssY0FBekIsaUJBQTJCLENBQUY7SUFDOUMsT0FBTyxhQUFhLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDM0MsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFNLEtBQUssRUFBSSxDQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNBLEtBQUMsWUFBWSxhQUFDLElBQUksRUFBRSxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3ZDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLGtDQUFlLENBQUE7SUFDZixzQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsZUFBZSxLQUFmLGVBQWUsUUFHMUI7QUFXRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEVBUVQ7SUFQZixJQUFBLEtBQUssV0FBQSxFQUNMLFVBQVUsZ0JBQUEsRUFDVixNQUFNLFlBQUEsRUFDTixVQUFVLGdCQUFBLEVBQ1YsUUFBUSxjQUFBLEVBQ1IscUJBQXFDLEVBQXJDLGFBQWEsbUJBQUcsYUFBYSxDQUFDLE9BQU8sS0FBQSxFQUNsQyxTQUFTLGNBUFksNEVBUXpCLENBRGE7SUFFWixPQUFPLENBQ0wsTUFBQyxlQUFlLGVBQUssU0FBUyxlQUM1QixNQUFDLGNBQWMsZUFDWixLQUFLLElBQUksS0FBQyxlQUFlLGFBQUMsYUFBYSxFQUFFLGFBQWEsZ0JBQUcsS0FBSyxJQUFtQixFQUNqRixVQUFVLElBQUksS0FBQyxlQUFlLGFBQUMsYUFBYSxFQUFFLGFBQWEsZ0JBQUcsVUFBVSxJQUFtQixJQUM3RSxFQUVoQixRQUFRLEVBRVQsS0FBQyxtQkFBbUIsYUFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDakMsS0FBQyxpQkFBaUIsYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxVQUFVLElBQXFCLElBQ3hDLEtBQ04sQ0FDbkIsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFN1YnRpdGxlVGV4dCB9IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSBcIi4uL2JvZHktdGV4dC9ib2R5LXRleHRcIjtcblxuY29uc3QgZ2V0VGhlbWVDb2xvciA9IChzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXMgfCBudWxsKSA9PiB7XG4gIGlmIChzdGF0dXMgPT0gbnVsbCkge1xuICAgIHJldHVybiAnY29udGVudFRlcnRpYXJ5JztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5FcnJvcl06ICdjb250ZW50UmVkJyxcbiAgICBbRm9ybUZpZWxkU3RhdHVzLlN1Y2Nlc3NdOiAnY29udGVudEdyZWVuJyxcbiAgfVtzdGF0dXNdO1xufTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICcmID4gKic6IHsgbWFyZ2luQm90dG9tOiA0IH0sXG59KSk7XG5cbmNvbnN0IFN0YXR1c1RleHRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPEZvcm1GaWVsZFByb3BzPihcbiAgKHsgdGhlbWUsIHN0YXR1czogc3RhdHVzIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvcihzdGF0dXMpXSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0YXR1c0NhcHRpb25UZXh0ID0gc3R5bGVkKENhcHRpb25UZXh0KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuYDtcblxuZXhwb3J0IGVudW0gTGFiZWxGb250U2l6ZSB7XG4gICAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxuICAgICdzbWFsbCcgPSAnc21hbGwnLFxufVxuXG5jb25zdCBTdHlsZWRMYWJlbFRleHQgPSAoeyBsYWJlbEZvbnRTaXplLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIGxhYmVsRm9udFNpemUgPT09IExhYmVsRm9udFNpemUuc21hbGwgPyAoXG4gICAgICAgIDxCb2R5VGV4dCBzaXplPXsxfSBsaW5lSGVpZ2h0PXsneHMnfSB7Li4ucHJvcHN9IC8+XG4gICAgKSA6IChcbiAgICAgICAgPFN1YnRpdGxlVGV4dCBzaXplPXsxfSB7Li4ucHJvcHN9IC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBlbnVtIEZvcm1GaWVsZFN0YXR1cyB7XG4gIEVycm9yID0gJ2Vycm9yJyxcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtRmllbGRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXM7XG4gIHN0YXR1c1RleHQ/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGxhYmVsRm9udFNpemU/OiBMYWJlbEZvbnRTaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybUZpZWxkKHtcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHN0YXR1cyxcbiAgc3RhdHVzVGV4dCxcbiAgY2hpbGRyZW4sXG4gIGxhYmVsRm9udFNpemUgPSBMYWJlbEZvbnRTaXplLmRlZmF1bHQsXG4gIC4uLnJlc3RQcm9wc1xufTogRm9ybUZpZWxkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyIHsuLi5yZXN0UHJvcHN9PlxuICAgICAgPExhYmVsQ29udGFpbmVyPlxuICAgICAgICB7bGFiZWwgJiYgPFN0eWxlZExhYmVsVGV4dCBsYWJlbEZvbnRTaXplPXtsYWJlbEZvbnRTaXplfT57bGFiZWx9PC9TdHlsZWRMYWJlbFRleHQ+fVxuICAgICAgICB7cmlnaHRMYWJlbCAmJiA8U3R5bGVkTGFiZWxUZXh0IGxhYmVsRm9udFNpemU9e2xhYmVsRm9udFNpemV9PntyaWdodExhYmVsfTwvU3R5bGVkTGFiZWxUZXh0Pn1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG5cbiAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgPFN0YXR1c1RleHRDb250YWluZXIgc3RhdHVzPXtzdGF0dXN9PlxuICAgICAgICA8U3RhdHVzQ2FwdGlvblRleHQgc2l6ZT17Mn0+e3N0YXR1c1RleHR9PC9TdGF0dXNDYXB0aW9uVGV4dD5cbiAgICAgIDwvU3RhdHVzVGV4dENvbnRhaW5lcj5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuIl19