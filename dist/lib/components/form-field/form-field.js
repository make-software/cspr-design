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
    var id = _a.id, label = _a.label, rightLabel = _a.rightLabel, status = _a.status, statusText = _a.statusText, children = _a.children, _b = _a.labelFontSize, labelFontSize = _b === void 0 ? LabelFontSize.default : _b, restProps = __rest(_a, ["id", "label", "rightLabel", "status", "statusText", "children", "labelFontSize"]);
    return (_jsxs(StyledContainer, __assign({}, restProps, { children: [_jsxs(LabelContainer, { children: [label && _jsx(StyledLabelText, __assign({ labelFontSize: labelFontSize, id: id }, { children: label })), rightLabel && _jsx(StyledLabelText, __assign({ labelFontSize: labelFontSize }, { children: rightLabel }))] }), children, _jsx(StatusTextContainer, __assign({ status: status, role: "alert", "aria-live": "assertive" }, { children: _jsx(StatusCaptionText, __assign({ size: 2 }, { children: statusText })) }))] })));
}
export default FormField;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sV0FBVyxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZELE9BQU8sUUFBUSxNQUFNLHdCQUF3QixDQUFDO0FBRTlDLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLFlBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLFFBQVEsSUFDcEIsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztLQUNiLENBQUMsRUFDRjtBQU51QixDQU12QixDQUNILENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLGVBQWU7UUFDL0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtLQUM3QixDQUFDO0FBTmtELENBTWxELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2QyxVQUFDLEVBQXlCO1FBQXZCLEtBQUssV0FBQSxFQUFVLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM5QixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDO0FBSDZCLENBRzdCLENBQ0gsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyw4RkFBQSwyQkFFNUMsSUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7QUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBQTJCO0lBQXpCLElBQUEsYUFBYSxtQkFBQSxFQUFLLEtBQUssY0FBekIsaUJBQTJCLENBQUY7SUFDOUMsT0FBTyxhQUFhLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDM0MsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFNLEtBQUssRUFBSSxDQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNBLEtBQUMsWUFBWSxhQUFDLElBQUksRUFBRSxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3ZDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxlQUdYO0FBSEQsV0FBWSxlQUFlO0lBQ3pCLGtDQUFlLENBQUE7SUFDZixzQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsZUFBZSxLQUFmLGVBQWUsUUFHMUI7QUFXRCxNQUFNLFVBQVUsU0FBUyxDQUFDLEVBU1Q7SUFSZixJQUFBLEVBQUUsUUFBQSxFQUNGLEtBQUssV0FBQSxFQUNMLFVBQVUsZ0JBQUEsRUFDVixNQUFNLFlBQUEsRUFDTixVQUFVLGdCQUFBLEVBQ1YsUUFBUSxjQUFBLEVBQ1IscUJBQXFDLEVBQXJDLGFBQWEsbUJBQUcsYUFBYSxDQUFDLE9BQU8sS0FBQSxFQUNsQyxTQUFTLGNBUlksa0ZBU3pCLENBRGE7SUFFWixPQUFPLENBQ0wsTUFBQyxlQUFlLGVBQUssU0FBUyxlQUM1QixNQUFDLGNBQWMsZUFDWixLQUFLLElBQUksS0FBQyxlQUFlLGFBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxFQUFFLEVBQUUsRUFBRSxnQkFBRyxLQUFLLElBQW1CLEVBQ3pGLFVBQVUsSUFBSSxLQUFDLGVBQWUsYUFBQyxhQUFhLEVBQUUsYUFBYSxnQkFBRyxVQUFVLElBQW1CLElBQzdFLEVBRWhCLFFBQVEsRUFFVCxLQUFDLG1CQUFtQixhQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLE9BQU8sZUFBVyxXQUFXLGdCQUNyRSxLQUFDLGlCQUFpQixhQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLFVBQVUsSUFBcUIsSUFDeEMsS0FDTixDQUNuQixDQUFDO0FBQ0osQ0FBQztBQUVELGVBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU3VidGl0bGVUZXh0IH0gZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcbmltcG9ydCBDYXB0aW9uVGV4dCBmcm9tICcuLi9jYXB0aW9uLXRleHQvY2FwdGlvbi10ZXh0JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tIFwiLi4vYm9keS10ZXh0L2JvZHktdGV4dFwiO1xuXG5jb25zdCBnZXRUaGVtZUNvbG9yID0gKHN0YXR1cz86IEZvcm1GaWVsZFN0YXR1cyB8IG51bGwpID0+IHtcbiAgaWYgKHN0YXR1cyA9PSBudWxsKSB7XG4gICAgcmV0dXJuICdjb250ZW50VGVydGlhcnknO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBbRm9ybUZpZWxkU3RhdHVzLkVycm9yXTogJ2NvbnRlbnRSZWQnLFxuICAgIFtGb3JtRmllbGRTdGF0dXMuU3VjY2Vzc106ICdjb250ZW50R3JlZW4nLFxuICB9W3N0YXR1c107XG59O1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KFxuICAoeyB0aGVtZSwgZGlzYWJsZWQgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgLi4uKGRpc2FibGVkICYmIHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9KSxcbiAgfSlcbik7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgJyYgPiAqJzogeyBtYXJnaW5Cb3R0b206IDQgfSxcbn0pKTtcblxuY29uc3QgU3RhdHVzVGV4dENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jyk8Rm9ybUZpZWxkUHJvcHM+KFxuICAoeyB0aGVtZSwgc3RhdHVzOiBzdGF0dXMgfSkgPT4gKHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tnZXRUaGVtZUNvbG9yKHN0YXR1cyldLFxuICB9KVxuKTtcblxuY29uc3QgU3RhdHVzQ2FwdGlvblRleHQgPSBzdHlsZWQoQ2FwdGlvblRleHQpYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5gO1xuXG5leHBvcnQgZW51bSBMYWJlbEZvbnRTaXplIHtcbiAgICAnZGVmYXVsdCcgPSAnZGVmYXVsdCcsXG4gICAgJ3NtYWxsJyA9ICdzbWFsbCcsXG59XG5cbmNvbnN0IFN0eWxlZExhYmVsVGV4dCA9ICh7IGxhYmVsRm9udFNpemUsIC4uLnByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gbGFiZWxGb250U2l6ZSA9PT0gTGFiZWxGb250U2l6ZS5zbWFsbCA/IChcbiAgICAgICAgPEJvZHlUZXh0IHNpemU9ezF9IGxpbmVIZWlnaHQ9eyd4cyd9IHsuLi5wcm9wc30gLz5cbiAgICApIDogKFxuICAgICAgICA8U3VidGl0bGVUZXh0IHNpemU9ezF9IHsuLi5wcm9wc30gLz5cbiAgICApO1xufTtcblxuZXhwb3J0IGVudW0gRm9ybUZpZWxkU3RhdHVzIHtcbiAgRXJyb3IgPSAnZXJyb3InLFxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1GaWVsZFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHJpZ2h0TGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHN0YXR1cz86IEZvcm1GaWVsZFN0YXR1cztcbiAgc3RhdHVzVGV4dD86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbGFiZWxGb250U2l6ZT86IExhYmVsRm9udFNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtRmllbGQoe1xuICBpZCxcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHN0YXR1cyxcbiAgc3RhdHVzVGV4dCxcbiAgY2hpbGRyZW4sXG4gIGxhYmVsRm9udFNpemUgPSBMYWJlbEZvbnRTaXplLmRlZmF1bHQsXG4gIC4uLnJlc3RQcm9wc1xufTogRm9ybUZpZWxkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyIHsuLi5yZXN0UHJvcHN9PlxuICAgICAgPExhYmVsQ29udGFpbmVyPlxuICAgICAgICB7bGFiZWwgJiYgPFN0eWxlZExhYmVsVGV4dCBsYWJlbEZvbnRTaXplPXtsYWJlbEZvbnRTaXplfSBpZD17aWR9PntsYWJlbH08L1N0eWxlZExhYmVsVGV4dD59XG4gICAgICAgIHtyaWdodExhYmVsICYmIDxTdHlsZWRMYWJlbFRleHQgbGFiZWxGb250U2l6ZT17bGFiZWxGb250U2l6ZX0+e3JpZ2h0TGFiZWx9PC9TdHlsZWRMYWJlbFRleHQ+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cblxuICAgICAge2NoaWxkcmVufVxuXG4gICAgICA8U3RhdHVzVGV4dENvbnRhaW5lciBzdGF0dXM9e3N0YXR1c30gcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+XG4gICAgICAgIDxTdGF0dXNDYXB0aW9uVGV4dCBzaXplPXsyfT57c3RhdHVzVGV4dH08L1N0YXR1c0NhcHRpb25UZXh0PlxuICAgICAgPC9TdGF0dXNUZXh0Q29udGFpbmVyPlxuICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iXX0=