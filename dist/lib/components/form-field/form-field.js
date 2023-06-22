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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFFdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sV0FBVyxNQUFNLDhCQUE4QixDQUFDO0FBRXZELElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLFlBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQ2YsYUFBYSxFQUFFLFFBQVEsSUFDcEIsQ0FBQyxRQUFRLElBQUk7UUFDZCxPQUFPLEVBQUUsR0FBRztLQUNiLENBQUMsRUFDRjtBQU51QixDQU12QixDQUNILENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ25ELE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLGVBQWU7UUFDL0IsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtLQUM3QixDQUFDO0FBTmtELENBTWxELENBQUMsQ0FBQztBQUVKLElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUN2QyxVQUFDLEVBQXlCO1FBQXZCLEtBQUssV0FBQSxFQUFVLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUM5QixRQUFRLEVBQUUsVUFBVTtRQUNwQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRCxDQUFDO0FBSDZCLENBRzdCLENBQ0gsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyw4RkFBQSwyQkFFNUMsSUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFOLElBQVksZUFHWDtBQUhELFdBQVksZUFBZTtJQUN6QixrQ0FBZSxDQUFBO0lBQ2Ysc0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhXLGVBQWUsS0FBZixlQUFlLFFBRzFCO0FBVUQsTUFBTSxVQUFVLFNBQVMsQ0FBQyxFQU9UO0lBTmYsSUFBQSxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsTUFBTSxZQUFBLEVBQ04sVUFBVSxnQkFBQSxFQUNWLFFBQVEsY0FBQSxFQUNMLFNBQVMsY0FOWSwyREFPekIsQ0FEYTtJQUVaLE9BQU8sQ0FDTCxNQUFDLGVBQWUsZUFBSyxTQUFTLGVBQzVCLE1BQUMsY0FBYyxlQUNaLEtBQUssSUFBSSxLQUFDLFlBQVksYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxLQUFLLElBQWdCLEVBQ3RELFVBQVUsSUFBSSxLQUFDLFlBQVksYUFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxVQUFVLElBQWdCLElBQ2xELEVBRWhCLFFBQVEsRUFFVCxLQUFDLG1CQUFtQixhQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUNqQyxLQUFDLGlCQUFpQixhQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLFVBQVUsSUFBcUIsSUFDeEMsS0FDTixDQUNuQixDQUFDO0FBQ0osQ0FBQztBQUVELGVBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IHsgU3VidGl0bGVUZXh0IH0gZnJvbSAnLi4vc3VidGl0bGUtdGV4dC9zdWJ0aXRsZS10ZXh0JztcclxuaW1wb3J0IENhcHRpb25UZXh0IGZyb20gJy4uL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQnO1xyXG5cclxuY29uc3QgZ2V0VGhlbWVDb2xvciA9IChzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXMgfCBudWxsKSA9PiB7XHJcbiAgaWYgKHN0YXR1cyA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gJ2NvbnRlbnRUZXJ0aWFyeSc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5FcnJvcl06ICdjb250ZW50UmVkJyxcclxuICAgIFtGb3JtRmllbGRTdGF0dXMuU3VjY2Vzc106ICdjb250ZW50R3JlZW4nLFxyXG4gIH1bc3RhdHVzXTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXHJcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIC4uLihkaXNhYmxlZCAmJiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIH0pLFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAnJiA+IConOiB7IG1hcmdpbkJvdHRvbTogNCB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTdGF0dXNUZXh0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKTxGb3JtRmllbGRQcm9wcz4oXHJcbiAgKHsgdGhlbWUsIHN0YXR1czogc3RhdHVzIH0pID0+ICh7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldFRoZW1lQ29sb3Ioc3RhdHVzKV0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFN0YXR1c0NhcHRpb25UZXh0ID0gc3R5bGVkKENhcHRpb25UZXh0KWBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcblxyXG5leHBvcnQgZW51bSBGb3JtRmllbGRTdGF0dXMge1xyXG4gIEVycm9yID0gJ2Vycm9yJyxcclxuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1GaWVsZFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBsYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcclxuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xyXG4gIHN0YXR1cz86IEZvcm1GaWVsZFN0YXR1cztcclxuICBzdGF0dXNUZXh0Pzogc3RyaW5nIHwgbnVsbDtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3JtRmllbGQoe1xyXG4gIGxhYmVsLFxyXG4gIHJpZ2h0TGFiZWwsXHJcbiAgc3RhdHVzLFxyXG4gIHN0YXR1c1RleHQsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucmVzdFByb3BzXHJcbn06IEZvcm1GaWVsZFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRDb250YWluZXIgey4uLnJlc3RQcm9wc30+XHJcbiAgICAgIDxMYWJlbENvbnRhaW5lcj5cclxuICAgICAgICB7bGFiZWwgJiYgPFN1YnRpdGxlVGV4dCBzaXplPXsxfT57bGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxyXG4gICAgICAgIHtyaWdodExhYmVsICYmIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0+e3JpZ2h0TGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxyXG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxyXG5cclxuICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgPFN0YXR1c1RleHRDb250YWluZXIgc3RhdHVzPXtzdGF0dXN9PlxyXG4gICAgICAgIDxTdGF0dXNDYXB0aW9uVGV4dCBzaXplPXsyfT57c3RhdHVzVGV4dH08L1N0YXR1c0NhcHRpb25UZXh0PlxyXG4gICAgICA8L1N0YXR1c1RleHRDb250YWluZXI+XHJcbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XHJcbiJdfQ==