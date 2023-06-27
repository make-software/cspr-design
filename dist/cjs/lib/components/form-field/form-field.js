"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = exports.FormFieldStatus = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var subtitle_text_1 = require("../subtitle-text/subtitle-text");
var caption_text_1 = tslib_1.__importDefault(require("../caption-text/caption-text"));
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
var FormFieldStatus;
(function (FormFieldStatus) {
    FormFieldStatus["Error"] = "error";
    FormFieldStatus["Success"] = "success";
})(FormFieldStatus = exports.FormFieldStatus || (exports.FormFieldStatus = {}));
function FormField(_a) {
    var label = _a.label, rightLabel = _a.rightLabel, status = _a.status, statusText = _a.statusText, children = _a.children, restProps = tslib_1.__rest(_a, ["label", "rightLabel", "status", "statusText", "children"]);
    return ((0, jsx_runtime_1.jsxs)(StyledContainer, tslib_1.__assign({}, restProps, { children: [(0, jsx_runtime_1.jsxs)(LabelContainer, { children: [label && (0, jsx_runtime_1.jsx)(subtitle_text_1.SubtitleText, tslib_1.__assign({ size: 1 }, { children: label })), rightLabel && (0, jsx_runtime_1.jsx)(subtitle_text_1.SubtitleText, tslib_1.__assign({ size: 1 }, { children: rightLabel }))] }), children, (0, jsx_runtime_1.jsx)(StatusTextContainer, tslib_1.__assign({ status: status }, { children: (0, jsx_runtime_1.jsx)(StatusCaptionText, tslib_1.__assign({ size: 2 }, { children: statusText })) }))] })));
}
exports.FormField = FormField;
exports.default = FormField;
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLGdFQUE4RDtBQUM5RCxzRkFBdUQ7QUFFdkQsSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUErQjs7SUFDcEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE9BQU8saUJBQWlCLENBQUM7S0FDMUI7SUFFRCxPQUFPO1FBQ0wsR0FBQyxlQUFlLENBQUMsS0FBSyxJQUFHLFlBQVk7UUFDckMsR0FBQyxlQUFlLENBQUMsT0FBTyxJQUFHLGNBQWM7WUFDekMsTUFBTSxDQUFDLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLG9CQUN2QixPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxRQUFRLElBQ3BCLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEdBQUc7S0FDYixDQUFDLEVBQ0Y7QUFOdUIsQ0FNdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRCxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUU7S0FDN0IsQ0FBQztBQU5rRCxDQU1sRCxDQUFDLENBQUM7QUFFSixJQUFNLG1CQUFtQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDdkMsVUFBQyxFQUF5QjtRQUF2QixLQUFLLFdBQUEsRUFBVSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDOUIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckQsQ0FBQztBQUg2QixDQUc3QixDQUNILENBQUM7QUFFRixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxzQkFBVyxDQUFDLHNHQUFBLDJCQUU1QyxJQUFBLENBQUM7QUFFRixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLHNDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQVVELFNBQWdCLFNBQVMsQ0FBQyxFQU9UO0lBTmYsSUFBQSxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsTUFBTSxZQUFBLEVBQ04sVUFBVSxnQkFBQSxFQUNWLFFBQVEsY0FBQSxFQUNMLFNBQVMsc0JBTlksMkRBT3pCLENBRGE7SUFFWixPQUFPLENBQ0wsd0JBQUMsZUFBZSx1QkFBSyxTQUFTLGVBQzVCLHdCQUFDLGNBQWMsZUFDWixLQUFLLElBQUksdUJBQUMsNEJBQVkscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFnQixFQUN0RCxVQUFVLElBQUksdUJBQUMsNEJBQVkscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFnQixJQUNsRCxFQUVoQixRQUFRLEVBRVQsdUJBQUMsbUJBQW1CLHFCQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUNqQyx1QkFBQyxpQkFBaUIscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFxQixJQUN4QyxLQUNOLENBQ25CLENBQUM7QUFDSixDQUFDO0FBdEJELDhCQXNCQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCB7IFN1YnRpdGxlVGV4dCB9IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XHJcbmltcG9ydCBDYXB0aW9uVGV4dCBmcm9tICcuLi9jYXB0aW9uLXRleHQvY2FwdGlvbi10ZXh0JztcclxuXHJcbmNvbnN0IGdldFRoZW1lQ29sb3IgPSAoc3RhdHVzPzogRm9ybUZpZWxkU3RhdHVzIHwgbnVsbCkgPT4ge1xyXG4gIGlmIChzdGF0dXMgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuICdjb250ZW50VGVydGlhcnknO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIFtGb3JtRmllbGRTdGF0dXMuRXJyb3JdOiAnY29udGVudFJlZCcsXHJcbiAgICBbRm9ybUZpZWxkU3RhdHVzLlN1Y2Nlc3NdOiAnY29udGVudEdyZWVuJyxcclxuICB9W3N0YXR1c107XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgZGlzYWJsZWQ/OiBib29sZWFuIH0+KFxyXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAuLi4oZGlzYWJsZWQgJiYge1xyXG4gICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB9KSxcclxuICB9KVxyXG4pO1xyXG5cclxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgJyYgPiAqJzogeyBtYXJnaW5Cb3R0b206IDQgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU3RhdHVzVGV4dENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jyk8Rm9ybUZpZWxkUHJvcHM+KFxyXG4gICh7IHRoZW1lLCBzdGF0dXM6IHN0YXR1cyB9KSA9PiAoe1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tnZXRUaGVtZUNvbG9yKHN0YXR1cyldLFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBTdGF0dXNDYXB0aW9uVGV4dCA9IHN0eWxlZChDYXB0aW9uVGV4dClgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGVudW0gRm9ybUZpZWxkU3RhdHVzIHtcclxuICBFcnJvciA9ICdlcnJvcicsXHJcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtRmllbGRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgbGFiZWw/OiBSZWFjdE5vZGUgfCBzdHJpbmc7XHJcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcclxuICBzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXM7XHJcbiAgc3RhdHVzVGV4dD86IHN0cmluZyB8IG51bGw7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9ybUZpZWxkKHtcclxuICBsYWJlbCxcclxuICByaWdodExhYmVsLFxyXG4gIHN0YXR1cyxcclxuICBzdGF0dXNUZXh0LFxyXG4gIGNoaWxkcmVuLFxyXG4gIC4uLnJlc3RQcm9wc1xyXG59OiBGb3JtRmllbGRQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkQ29udGFpbmVyIHsuLi5yZXN0UHJvcHN9PlxyXG4gICAgICA8TGFiZWxDb250YWluZXI+XHJcbiAgICAgICAge2xhYmVsICYmIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0+e2xhYmVsfTwvU3VidGl0bGVUZXh0Pn1cclxuICAgICAgICB7cmlnaHRMYWJlbCAmJiA8U3VidGl0bGVUZXh0IHNpemU9ezF9PntyaWdodExhYmVsfTwvU3VidGl0bGVUZXh0Pn1cclxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cclxuXHJcbiAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgIDxTdGF0dXNUZXh0Q29udGFpbmVyIHN0YXR1cz17c3RhdHVzfT5cclxuICAgICAgICA8U3RhdHVzQ2FwdGlvblRleHQgc2l6ZT17Mn0+e3N0YXR1c1RleHR9PC9TdGF0dXNDYXB0aW9uVGV4dD5cclxuICAgICAgPC9TdGF0dXNUZXh0Q29udGFpbmVyPlxyXG4gICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xyXG4iXX0=