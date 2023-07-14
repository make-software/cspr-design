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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLGdFQUE4RDtBQUM5RCxzRkFBdUQ7QUFFdkQsSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUErQjs7SUFDcEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE9BQU8saUJBQWlCLENBQUM7S0FDMUI7SUFFRCxPQUFPO1FBQ0wsR0FBQyxlQUFlLENBQUMsS0FBSyxJQUFHLFlBQVk7UUFDckMsR0FBQyxlQUFlLENBQUMsT0FBTyxJQUFHLGNBQWM7WUFDekMsTUFBTSxDQUFDLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FDaEMsVUFBQyxFQUFtQjtRQUFqQixLQUFLLFdBQUEsRUFBRSxRQUFRLGNBQUE7SUFBTyxPQUFBLG9CQUN2QixPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxRQUFRLElBQ3BCLENBQUMsUUFBUSxJQUFJO1FBQ2QsT0FBTyxFQUFFLEdBQUc7S0FDYixDQUFDLEVBQ0Y7QUFOdUIsQ0FNdkIsQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRCxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGNBQWMsRUFBRSxlQUFlO1FBQy9CLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUU7S0FDN0IsQ0FBQztBQU5rRCxDQU1sRCxDQUFDLENBQUM7QUFFSixJQUFNLG1CQUFtQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDdkMsVUFBQyxFQUF5QjtRQUF2QixLQUFLLFdBQUEsRUFBVSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDOUIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckQsQ0FBQztBQUg2QixDQUc3QixDQUNILENBQUM7QUFFRixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxzQkFBVyxDQUFDLHNHQUFBLDJCQUU1QyxJQUFBLENBQUM7QUFFRixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLHNDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUcxQjtBQVVELFNBQWdCLFNBQVMsQ0FBQyxFQU9UO0lBTmYsSUFBQSxLQUFLLFdBQUEsRUFDTCxVQUFVLGdCQUFBLEVBQ1YsTUFBTSxZQUFBLEVBQ04sVUFBVSxnQkFBQSxFQUNWLFFBQVEsY0FBQSxFQUNMLFNBQVMsc0JBTlksMkRBT3pCLENBRGE7SUFFWixPQUFPLENBQ0wsd0JBQUMsZUFBZSx1QkFBSyxTQUFTLGVBQzVCLHdCQUFDLGNBQWMsZUFDWixLQUFLLElBQUksdUJBQUMsNEJBQVkscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFnQixFQUN0RCxVQUFVLElBQUksdUJBQUMsNEJBQVkscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFnQixJQUNsRCxFQUVoQixRQUFRLEVBRVQsdUJBQUMsbUJBQW1CLHFCQUFDLE1BQU0sRUFBRSxNQUFNLGdCQUNqQyx1QkFBQyxpQkFBaUIscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsVUFBVSxJQUFxQixJQUN4QyxLQUNOLENBQ25CLENBQUM7QUFDSixDQUFDO0FBdEJELDhCQXNCQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFN1YnRpdGxlVGV4dCB9IGZyb20gJy4uL3N1YnRpdGxlLXRleHQvc3VidGl0bGUtdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5cbmNvbnN0IGdldFRoZW1lQ29sb3IgPSAoc3RhdHVzPzogRm9ybUZpZWxkU3RhdHVzIHwgbnVsbCkgPT4ge1xuICBpZiAoc3RhdHVzID09IG51bGwpIHtcbiAgICByZXR1cm4gJ2NvbnRlbnRUZXJ0aWFyeSc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIFtGb3JtRmllbGRTdGF0dXMuRXJyb3JdOiAnY29udGVudFJlZCcsXG4gICAgW0Zvcm1GaWVsZFN0YXR1cy5TdWNjZXNzXTogJ2NvbnRlbnRHcmVlbicsXG4gIH1bc3RhdHVzXTtcbn07XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXY8eyBkaXNhYmxlZD86IGJvb2xlYW4gfT4oXG4gICh7IHRoZW1lLCBkaXNhYmxlZCB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH0pLFxuICB9KVxuKTtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAnJiA+IConOiB7IG1hcmdpbkJvdHRvbTogNCB9LFxufSkpO1xuXG5jb25zdCBTdGF0dXNUZXh0Q29udGFpbmVyID0gc3R5bGVkKCdkaXYnKTxGb3JtRmllbGRQcm9wcz4oXG4gICh7IHRoZW1lLCBzdGF0dXM6IHN0YXR1cyB9KSA9PiAoe1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2dldFRoZW1lQ29sb3Ioc3RhdHVzKV0sXG4gIH0pXG4pO1xuXG5jb25zdCBTdGF0dXNDYXB0aW9uVGV4dCA9IHN0eWxlZChDYXB0aW9uVGV4dClgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmV4cG9ydCBlbnVtIEZvcm1GaWVsZFN0YXR1cyB7XG4gIEVycm9yID0gJ2Vycm9yJyxcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtRmllbGRQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGxhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICByaWdodExhYmVsPzogUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBzdGF0dXM/OiBGb3JtRmllbGRTdGF0dXM7XG4gIHN0YXR1c1RleHQ/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtRmllbGQoe1xuICBsYWJlbCxcbiAgcmlnaHRMYWJlbCxcbiAgc3RhdHVzLFxuICBzdGF0dXNUZXh0LFxuICBjaGlsZHJlbixcbiAgLi4ucmVzdFByb3BzXG59OiBGb3JtRmllbGRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDb250YWluZXIgey4uLnJlc3RQcm9wc30+XG4gICAgICA8TGFiZWxDb250YWluZXI+XG4gICAgICAgIHtsYWJlbCAmJiA8U3VidGl0bGVUZXh0IHNpemU9ezF9PntsYWJlbH08L1N1YnRpdGxlVGV4dD59XG4gICAgICAgIHtyaWdodExhYmVsICYmIDxTdWJ0aXRsZVRleHQgc2l6ZT17MX0+e3JpZ2h0TGFiZWx9PC9TdWJ0aXRsZVRleHQ+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cblxuICAgICAge2NoaWxkcmVufVxuXG4gICAgICA8U3RhdHVzVGV4dENvbnRhaW5lciBzdGF0dXM9e3N0YXR1c30+XG4gICAgICAgIDxTdGF0dXNDYXB0aW9uVGV4dCBzaXplPXsyfT57c3RhdHVzVGV4dH08L1N0YXR1c0NhcHRpb25UZXh0PlxuICAgICAgPC9TdGF0dXNUZXh0Q29udGFpbmVyPlxuICAgIDwvU3R5bGVkQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iXX0=