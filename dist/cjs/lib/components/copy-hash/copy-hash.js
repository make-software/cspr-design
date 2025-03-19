"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyHash = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var copy_to_clipboard_1 = tslib_1.__importDefault(require("copy-to-clipboard"));
var ic_success_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-success.svg"));
var ic_copy_svg_1 = tslib_1.__importDefault(require("../../assets/icons/ic-copy.svg"));
var copyHashColorMapper = {
    blue: 'contentBlue',
    gray: 'contentTertiary',
};
var SuccessIconWrapper = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentGreen,
    });
});
var StyledSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.variation, variation = _b === void 0 ? 'blue' : _b;
    return theme.withMedia({
        color: theme.styleguideColors[copyHashColorMapper[variation]],
        path: {
            fill: theme.styleguideColors[copyHashColorMapper[variation]],
        },
    });
});
var CopyHash = function (_a) {
    var value = _a.value, _b = _a.label, label = _b === void 0 ? 'Copy Public Key' : _b, _c = _a.copiedLabel, copiedLabel = _c === void 0 ? 'Copied!' : _c, variation = _a.variation, styles = _a.styles, _d = _a.minified, minified = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(false), isCopiedHash = _e[0], setIsCopiedHash = _e[1];
    return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ style: styles, align: "center", onClick: function () {
            (0, copy_to_clipboard_1.default)(value);
            setIsCopiedHash(true);
            setTimeout(function () { return setIsCopiedHash(false); }, 3000);
        } }, { children: isCopiedHash ? ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(SuccessIconWrapper, { src: ic_success_svg_1.default, marginRight: true }), !minified && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, variation: "green" }, { children: copiedLabel })))] }))) : ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_copy_svg_1.default, marginRight: true, variation: variation }), !minified && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, variation: 'black' }, { children: label })))] }))) })));
};
exports.CopyHash = CopyHash;
exports.default = exports.CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsNkZBQTREO0FBQzVELHVGQUFzRDtBQUl0RCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxpQkFBaUI7Q0FDeEIsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO0tBQzNDLENBQUM7QUFGd0QsQ0FFeEQsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDbkMsVUFBQyxFQUE2QjtRQUEzQixLQUFLLFdBQUEsRUFBRSxpQkFBa0IsRUFBbEIsU0FBUyxtQkFBRyxNQUFNLEtBQUE7SUFDMUIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdEO0tBQ0YsQ0FBQztBQUxGLENBS0UsQ0FDTCxDQUFDO0FBV0ssSUFBTSxRQUFRLEdBQUcsVUFBQyxFQU9UO1FBTmQsS0FBSyxXQUFBLEVBQ0wsYUFBeUIsRUFBekIsS0FBSyxtQkFBRyxpQkFBaUIsS0FBQSxFQUN6QixtQkFBdUIsRUFBdkIsV0FBVyxtQkFBRyxTQUFTLEtBQUEsRUFDdkIsU0FBUyxlQUFBLEVBQ1QsTUFBTSxZQUFBLEVBQ04sZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBO0lBRVYsSUFBQSxLQUFrQyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLEVBQWhELFlBQVksUUFBQSxFQUFFLGVBQWUsUUFBbUIsQ0FBQztJQUN4RCxPQUFPLENBQ0wsdUJBQUMsa0JBQU8scUJBQ04sS0FBSyxFQUFFLE1BQU0sRUFDYixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBRTtZQUNQLElBQUEsMkJBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztZQUNaLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLGdCQUVBLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDZCx3QkFBQyxrQkFBTyxxQkFBQyxLQUFLLEVBQUUsUUFBUSxpQkFDdEIsdUJBQUMsa0JBQWtCLElBQUMsR0FBRyxFQUFFLHdCQUFXLEVBQUUsV0FBVyxTQUFHLEVBQ25ELENBQUMsUUFBUSxJQUFJLENBQ1osdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsT0FBTyxnQkFDakMsV0FBVyxJQUNILENBQ1osS0FDTyxDQUNYLENBQUMsQ0FBQyxDQUFDLENBQ0Ysd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLGFBQWEsSUFBQyxHQUFHLEVBQUUscUJBQVEsRUFBRSxXQUFXLFFBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxFQUNqRSxDQUFDLFFBQVEsSUFBSSxDQUNaLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sZ0JBQ2xDLEtBQUssSUFDRyxDQUNaLEtBQ08sQ0FDWCxJQUNPLENBQ1gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXhDVyxRQUFBLFFBQVEsWUF3Q25CO0FBRUYsa0JBQWUsZ0JBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuXG5pbXBvcnQgU3VjY2Vzc0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJztcbmltcG9ydCBDb3B5SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY29weS5zdmcnO1xuXG50eXBlIENvcHlIYXNoQ29sb3IgPSAnYmx1ZScgfCAnZ3JheSc7XG5cbmNvbnN0IGNvcHlIYXNoQ29sb3JNYXBwZXIgPSB7XG4gIGJsdWU6ICdjb250ZW50Qmx1ZScsXG4gIGdyYXk6ICdjb250ZW50VGVydGlhcnknLFxufTtcblxuY29uc3QgU3VjY2Vzc0ljb25XcmFwcGVyID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRHcmVlbixcbn0pKTtcblxuY29uc3QgU3R5bGVkU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKTx7IHZhcmlhdGlvbj86IENvcHlIYXNoQ29sb3IgfT4oXG4gICh7IHRoZW1lLCB2YXJpYXRpb24gPSAnYmx1ZScgfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbY29weUhhc2hDb2xvck1hcHBlclt2YXJpYXRpb25dXSxcbiAgICAgIHBhdGg6IHtcbiAgICAgICAgZmlsbDogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tjb3B5SGFzaENvbG9yTWFwcGVyW3ZhcmlhdGlvbl1dLFxuICAgICAgfSxcbiAgICB9KVxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb3B5SGFzaFByb3BzIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgc3R5bGVzPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGNvcGllZExhYmVsPzogc3RyaW5nO1xuICBtaW5pZmllZD86IGJvb2xlYW47XG4gIHZhcmlhdGlvbj86IENvcHlIYXNoQ29sb3I7XG59XG5cbmV4cG9ydCBjb25zdCBDb3B5SGFzaCA9ICh7XG4gIHZhbHVlLFxuICBsYWJlbCA9ICdDb3B5IFB1YmxpYyBLZXknLFxuICBjb3BpZWRMYWJlbCA9ICdDb3BpZWQhJyxcbiAgdmFyaWF0aW9uLFxuICBzdHlsZXMsXG4gIG1pbmlmaWVkID0gZmFsc2UsXG59OiBDb3B5SGFzaFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NvcGllZEhhc2gsIHNldElzQ29waWVkSGFzaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPEZsZXhSb3dcbiAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvcHkodmFsdWUpO1xuICAgICAgICBzZXRJc0NvcGllZEhhc2godHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNDb3BpZWRIYXNoKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpc0NvcGllZEhhc2ggPyAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN1Y2Nlc3NJY29uV3JhcHBlciBzcmM9e1N1Y2Nlc3NJY29ufSBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIHshbWluaWZpZWQgJiYgKFxuICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9IHZhcmlhdGlvbj1cImdyZWVuXCI+XG4gICAgICAgICAgICAgIHtjb3BpZWRMYWJlbH1cbiAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9e0NvcHlJY29ufSBtYXJnaW5SaWdodCB2YXJpYXRpb249e3ZhcmlhdGlvbn0gLz5cbiAgICAgICAgICB7IW1pbmlmaWVkICYmIChcbiAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSB2YXJpYXRpb249eydibGFjayd9PlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgICl9XG4gICAgPC9GbGV4Um93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weUhhc2g7XG4iXX0=