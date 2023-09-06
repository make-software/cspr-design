"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = exports.FormFieldStatus = exports.LabelFontSize = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var subtitle_text_1 = require("../subtitle-text/subtitle-text");
var caption_text_1 = tslib_1.__importDefault(require("../caption-text/caption-text"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
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
var StyledContainer = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (tslib_1.__assign({ display: 'flex', flexDirection: 'column' }, (disabled && {
        opacity: 0.5,
    })));
});
var LabelContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > *': { marginBottom: 4 },
    });
});
var StatusTextContainer = (0, styled_components_1.default)('div')(function (_a) {
    var theme = _a.theme, status = _a.status;
    return ({
        position: 'relative',
        color: theme.styleguideColors[getThemeColor(status)],
    });
});
var StatusCaptionText = (0, styled_components_1.default)(caption_text_1.default)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var LabelFontSize;
(function (LabelFontSize) {
    LabelFontSize["default"] = "default";
    LabelFontSize["small"] = "small";
})(LabelFontSize = exports.LabelFontSize || (exports.LabelFontSize = {}));
var StyledLabelText = function (_a) {
    var labelFontSize = _a.labelFontSize, props = tslib_1.__rest(_a, ["labelFontSize"]);
    return labelFontSize === LabelFontSize.small ? ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 1, lineHeight: 'xs' }, props))) : ((0, jsx_runtime_1.jsx)(subtitle_text_1.SubtitleText, tslib_1.__assign({ size: 1 }, props)));
};
var FormFieldStatus;
(function (FormFieldStatus) {
    FormFieldStatus["Error"] = "error";
    FormFieldStatus["Success"] = "success";
})(FormFieldStatus = exports.FormFieldStatus || (exports.FormFieldStatus = {}));
function FormField(_a) {
    var label = _a.label, rightLabel = _a.rightLabel, status = _a.status, statusText = _a.statusText, children = _a.children, _b = _a.labelFontSize, labelFontSize = _b === void 0 ? LabelFontSize.default : _b, restProps = tslib_1.__rest(_a, ["label", "rightLabel", "status", "statusText", "children", "labelFontSize"]);
    return ((0, jsx_runtime_1.jsxs)(StyledContainer, tslib_1.__assign({}, restProps, { children: [(0, jsx_runtime_1.jsxs)(LabelContainer, { children: [label && (0, jsx_runtime_1.jsx)(StyledLabelText, tslib_1.__assign({ labelFontSize: labelFontSize }, { children: label })), rightLabel && (0, jsx_runtime_1.jsx)(StyledLabelText, tslib_1.__assign({ labelFontSize: labelFontSize }, { children: rightLabel }))] }), children, (0, jsx_runtime_1.jsx)(StatusTextContainer, tslib_1.__assign({ status: status }, { children: (0, jsx_runtime_1.jsx)(StatusCaptionText, tslib_1.__assign({ size: 2 }, { children: statusText })) }))] })));
}
exports.FormField = FormField;
exports.default = FormField;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLGdFQUE4RDtBQUM5RCxzRkFBdUQ7QUFDdkQsNkVBQThDO0FBRTlDLElBQU0sYUFBYSxHQUFHLFVBQUMsTUFBK0I7O0lBQ3BELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtRQUNsQixPQUFPLGlCQUFpQixDQUFDO0tBQzFCO0lBRUQsT0FBTztRQUNMLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxZQUFZO1FBQ3JDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxjQUFjO1lBQ3pDLE1BQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQ2hDLFVBQUMsRUFBbUI7UUFBakIsS0FBSyxXQUFBLEVBQUUsUUFBUSxjQUFBO0lBQU8sT0FBQSxvQkFDdkIsT0FBTyxFQUFFLE1BQU0sRUFDZixhQUFhLEVBQUUsUUFBUSxJQUNwQixDQUFDLFFBQVEsSUFBSTtRQUNkLE9BQU8sRUFBRSxHQUFHO0tBQ2IsQ0FBQyxFQUNGO0FBTnVCLENBTXZCLENBQ0gsQ0FBQztBQUVGLElBQU0sY0FBYyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDbkQsT0FBTyxFQUFFLE1BQU07UUFDZixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUUsUUFBUTtRQUNwQixjQUFjLEVBQUUsZUFBZTtRQUMvQixPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFO0tBQzdCLENBQUM7QUFOa0QsQ0FNbEQsQ0FBQyxDQUFDO0FBRUosSUFBTSxtQkFBbUIsR0FBRyxJQUFBLDJCQUFNLEVBQUMsS0FBSyxDQUFDLENBQ3ZDLFVBQUMsRUFBeUI7UUFBdkIsS0FBSyxXQUFBLEVBQVUsTUFBTSxZQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzlCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JELENBQUM7QUFINkIsQ0FHN0IsQ0FDSCxDQUFDO0FBRUYsSUFBTSxpQkFBaUIsR0FBRyxJQUFBLDJCQUFNLEVBQUMsc0JBQVcsQ0FBQyxzR0FBQSwyQkFFNUMsSUFBQSxDQUFDO0FBRUYsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3JCLG9DQUFxQixDQUFBO0lBQ3JCLGdDQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUd4QjtBQUVELElBQU0sZUFBZSxHQUFHLFVBQUMsRUFBMkI7SUFBekIsSUFBQSxhQUFhLG1CQUFBLEVBQUssS0FBSyxzQkFBekIsaUJBQTJCLENBQUY7SUFDOUMsT0FBTyxhQUFhLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDM0MsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFNLEtBQUssRUFBSSxDQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUNBLHVCQUFDLDRCQUFZLHFCQUFDLElBQUksRUFBRSxDQUFDLElBQU0sS0FBSyxFQUFJLENBQ3ZDLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLHNDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQVdELFNBQWdCLFNBQVMsQ0FBQyxFQVFUO0lBUGYsSUFBQSxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsTUFBTSxZQUFBLEVBQ04sVUFBVSxnQkFBQSxFQUNWLFFBQVEsY0FBQSxFQUNSLHFCQUFxQyxFQUFyQyxhQUFhLG1CQUFHLGFBQWEsQ0FBQyxPQUFPLEtBQUEsRUFDbEMsU0FBUyxzQkFQWSw0RUFRekIsQ0FEYTtJQUVaLE9BQU8sQ0FDTCx3QkFBQyxlQUFlLHVCQUFLLFNBQVMsZUFDNUIsd0JBQUMsY0FBYyxlQUNaLEtBQUssSUFBSSx1QkFBQyxlQUFlLHFCQUFDLGFBQWEsRUFBRSxhQUFhLGdCQUFHLEtBQUssSUFBbUIsRUFDakYsVUFBVSxJQUFJLHVCQUFDLGVBQWUscUJBQUMsYUFBYSxFQUFFLGFBQWEsZ0JBQUcsVUFBVSxJQUFtQixJQUM3RSxFQUVoQixRQUFRLEVBRVQsdUJBQUMsbUJBQW1CLHFCQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUNqQyx1QkFBQyxpQkFBaUIscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFxQixJQUN4QyxLQUNOLENBQ25CLENBQUM7QUFDSixDQUFDO0FBdkJELDhCQXVCQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFN1YnRpdGxlVGV4dCB9IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSBcIi4uL2JvZHktdGV4dC9ib2R5LXRleHRcIjtcblxuY29uc3QgZ2V0VGhlbWVDb2xvciA9IChzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXMgfCBudWxsKSA9PiB7XG4gIGlmIChzdGF0dXMgPT0gbnVsbCkge1xuICAgIHJldHVybiAnY29udGVudFRlcnRpYXJ5JztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5FcnJvcl06ICdjb250ZW50UmVkJyxcbiAgICBbRm9ybUZpZWxkU3RhdHVzLlN1Y2Nlc3NdOiAnY29udGVudEdyZWVuJyxcbiAgfVtzdGF0dXNdO1xufTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdjx7IGRpc2FibGVkPzogYm9vbGVhbiB9PihcbiAgKHsgdGhlbWUsIGRpc2FibGVkIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfSksXG4gIH0pXG4pO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICcmID4gKic6IHsgbWFyZ2luQm90dG9tOiA0IH0sXG59KSk7XG5cbmNvbnN0IFN0YXR1c1RleHRDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpPEZvcm1GaWVsZFByb3BzPihcbiAgKHsgdGhlbWUsIHN0YXR1czogc3RhdHVzIH0pID0+ICh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbZ2V0VGhlbWVDb2xvcihzdGF0dXMpXSxcbiAgfSlcbik7XG5cbmNvbnN0IFN0YXR1c0NhcHRpb25UZXh0ID0gc3R5bGVkKENhcHRpb25UZXh0KWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuYDtcblxuZXhwb3J0IGVudW0gTGFiZWxGb250U2l6ZSB7XG4gICAgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnLFxuICAgICdzbWFsbCcgPSAnc21hbGwnLFxufVxuXG5jb25zdCBTdHlsZWRMYWJlbFRleHQgPSAoeyBsYWJlbEZvbnRTaXplLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIGxhYmVsRm9udFNpemUgPT09IExhYmVsRm9udFNpemUuc21hbGwgPyAoXG4gICAgICAgIDxCb2R5VGV4dCBzaXplPXsxfSBsaW5lSGVpZ2h0PXsneHMnfSB7Li4ucHJvcHN9IC8+XG4gICAgKSA6IChcbiAgICAgICAgPFN1YnRpdGxlVGV4dCBzaXplPXsxfSB7Li4ucHJvcHN9IC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBlbnVtIEZvcm1GaWVsZFN0YXR1cyB7XG4gIEVycm9yID0gJ2Vycm9yJyxcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtRmllbGRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXM7XG4gIHN0YXR1c1RleHQ/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGxhYmVsRm9udFNpemU/OiBMYWJlbEZvbnRTaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybUZpZWxkKHtcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHN0YXR1cyxcbiAgc3RhdHVzVGV4dCxcbiAgY2hpbGRyZW4sXG4gIGxhYmVsRm9udFNpemUgPSBMYWJlbEZvbnRTaXplLmRlZmF1bHQsXG4gIC4uLnJlc3RQcm9wc1xufTogRm9ybUZpZWxkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyIHsuLi5yZXN0UHJvcHN9PlxuICAgICAgPExhYmVsQ29udGFpbmVyPlxuICAgICAgICB7bGFiZWwgJiYgPFN0eWxlZExhYmVsVGV4dCBsYWJlbEZvbnRTaXplPXtsYWJlbEZvbnRTaXplfT57bGFiZWx9PC9TdHlsZWRMYWJlbFRleHQ+fVxuICAgICAgICB7cmlnaHRMYWJlbCAmJiA8U3R5bGVkTGFiZWxUZXh0IGxhYmVsRm9udFNpemU9e2xhYmVsRm9udFNpemV9PntyaWdodExhYmVsfTwvU3R5bGVkTGFiZWxUZXh0Pn1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG5cbiAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgPFN0YXR1c1RleHRDb250YWluZXIgc3RhdHVzPXtzdGF0dXN9PlxuICAgICAgICA8U3RhdHVzQ2FwdGlvblRleHQgc2l6ZT17Mn0+e3N0YXR1c1RleHR9PC9TdGF0dXNDYXB0aW9uVGV4dD5cbiAgICAgIDwvU3RhdHVzVGV4dENvbnRhaW5lcj5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuIl19