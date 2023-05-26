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
        color: theme.styleguideColors[getThemeColor(status)],
    });
});
var FormFieldStatus;
(function (FormFieldStatus) {
    FormFieldStatus["Error"] = "error";
    FormFieldStatus["Success"] = "success";
})(FormFieldStatus = exports.FormFieldStatus || (exports.FormFieldStatus = {}));
function FormField(_a) {
    var label = _a.label, rightLabel = _a.rightLabel, status = _a.status, statusText = _a.statusText, children = _a.children, restProps = tslib_1.__rest(_a, ["label", "rightLabel", "status", "statusText", "children"]);
    return ((0, jsx_runtime_1.jsxs)(StyledContainer, tslib_1.__assign({}, restProps, { children: [(0, jsx_runtime_1.jsxs)(LabelContainer, { children: [label && (0, jsx_runtime_1.jsx)(subtitle_text_1.SubtitleText, tslib_1.__assign({ size: 1 }, { children: label })), rightLabel && (0, jsx_runtime_1.jsx)(subtitle_text_1.SubtitleText, tslib_1.__assign({ size: 1 }, { children: rightLabel }))] }), children, (0, jsx_runtime_1.jsx)(StatusTextContainer, tslib_1.__assign({ status: status }, { children: (0, jsx_runtime_1.jsx)(caption_text_1.default, tslib_1.__assign({ size: 2 }, { children: statusText })) }))] })));
}
exports.FormField = FormField;
exports.default = FormField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLGdFQUE4RDtBQUM5RCxzRkFBdUQ7QUFFdkQsSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUErQjs7SUFDcEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE9BQU8saUJBQWlCLENBQUM7S0FDMUI7SUFFRCxPQUFPO1FBQ0wsR0FBQyxlQUFlLENBQUMsS0FBSyxJQUFHLFlBQVk7UUFDckMsR0FBQyxlQUFlLENBQUMsT0FBTyxJQUFHLGNBQWM7WUFDekMsTUFBTSxDQUFDLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLG9CQUN2QixPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxRQUFRLElBQ3BCLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEdBQUc7S0FDYixDQUFDLEVBQ0Y7QUFOdUIsQ0FNdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRCxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUU7S0FDN0IsQ0FBQztBQU5rRCxDQU1sRCxDQUFDLENBQUM7QUFFSixJQUFNLG1CQUFtQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDdkMsVUFBQyxFQUF5QjtRQUF2QixLQUFLLFdBQUEsRUFBVSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDOUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckQsQ0FBQztBQUY2QixDQUU3QixDQUNILENBQUM7QUFFRixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLHNDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQVVELFNBQWdCLFNBQVMsQ0FBQyxFQU9UO0lBTmYsSUFBQSxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsTUFBTSxZQUFBLEVBQ04sVUFBVSxnQkFBQSxFQUNWLFFBQVEsY0FBQSxFQUNMLFNBQVMsc0JBTlksMkRBT3pCLENBRGE7SUFFWixPQUFPLENBQ0wsd0JBQUMsZUFBZSx1QkFBSyxTQUFTLGVBQzVCLHdCQUFDLGNBQWMsZUFDWixLQUFLLElBQUksdUJBQUMsNEJBQVkscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFnQixFQUN0RCxVQUFVLElBQUksdUJBQUMsNEJBQVkscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFnQixJQUNsRCxFQUVoQixRQUFRLEVBRVQsdUJBQUMsbUJBQW1CLHFCQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUNqQyx1QkFBQyxzQkFBVyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxVQUFVLElBQWUsSUFDNUIsS0FDTixDQUNuQixDQUFDO0FBQ0osQ0FBQztBQXRCRCw4QkFzQkM7QUFFRCxrQkFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBTdWJ0aXRsZVRleHQgfSBmcm9tICcuLi9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQnO1xuaW1wb3J0IENhcHRpb25UZXh0IGZyb20gXCIuLi9jYXB0aW9uLXRleHQvY2FwdGlvbi10ZXh0XCI7XG5cbmNvbnN0IGdldFRoZW1lQ29sb3IgPSAoc3RhdHVzPzogRm9ybUZpZWxkU3RhdHVzIHwgbnVsbCkgPT4ge1xuICBpZiAoc3RhdHVzID09IG51bGwpIHtcbiAgICByZXR1cm4gJ2NvbnRlbnRUZXJ0aWFyeSc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtGb3JtRmllbGRTdGF0dXMuRXJyb3JdOiAnY29udGVudFJlZCcsXG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5TdWNjZXNzXTogJ2NvbnRlbnRHcmVlbicsXG4gIH1bc3RhdHVzXTtcbn07XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAnJiA+IConOiB7IG1hcmdpbkJvdHRvbTogNCB9LFxufSkpO1xuXG5jb25zdCBTdGF0dXNUZXh0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKTxGb3JtRmllbGRQcm9wcz4oXG4gICh7IHRoZW1lLCBzdGF0dXM6IHN0YXR1cyB9KSA9PiAoe1xuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldFRoZW1lQ29sb3Ioc3RhdHVzKV0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZW51bSBGb3JtRmllbGRTdGF0dXMge1xuICBFcnJvciA9ICdlcnJvcicsXG4gIFN1Y2Nlc3MgPSAnc3VjY2VzcycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybUZpZWxkUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBsYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcmlnaHRMYWJlbD86IFJlYWN0Tm9kZSB8IHN0cmluZztcbiAgc3RhdHVzPzogRm9ybUZpZWxkU3RhdHVzO1xuICBzdGF0dXNUZXh0Pzogc3RyaW5nIHwgbnVsbDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRm9ybUZpZWxkKHtcbiAgbGFiZWwsXG4gIHJpZ2h0TGFiZWwsXG4gIHN0YXR1cyxcbiAgc3RhdHVzVGV4dCxcbiAgY2hpbGRyZW4sXG4gIC4uLnJlc3RQcm9wc1xufTogRm9ybUZpZWxkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyIHsuLi5yZXN0UHJvcHN9PlxuICAgICAgPExhYmVsQ29udGFpbmVyPlxuICAgICAgICB7bGFiZWwgJiYgPFN1YnRpdGxlVGV4dCBzaXplPXsxfT57bGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxuICAgICAgICB7cmlnaHRMYWJlbCAmJiA8U3VidGl0bGVUZXh0IHNpemU9ezF9PntyaWdodExhYmVsfTwvU3VidGl0bGVUZXh0Pn1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG5cbiAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgPFN0YXR1c1RleHRDb250YWluZXIgc3RhdHVzPXtzdGF0dXN9PlxuICAgICAgICA8Q2FwdGlvblRleHQgc2l6ZT17Mn0+e3N0YXR1c1RleHR9PC9DYXB0aW9uVGV4dD5cbiAgICAgIDwvU3RhdHVzVGV4dENvbnRhaW5lcj5cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuIl19