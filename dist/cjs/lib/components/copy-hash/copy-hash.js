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
var SuccessIconWrapper = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentGreen,
    });
});
var StyledSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        color: [
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentBlue,
        ],
        path: {
            fill: [
                theme.styleguideColors.contentTertiary,
                theme.styleguideColors.contentTertiary,
                theme.styleguideColors.contentBlue,
            ],
        },
    });
});
var CopyHash = function (_a) {
    var value = _a.value, _b = _a.label, label = _b === void 0 ? 'Copy Public Key' : _b, _c = _a.copiedLabel, copiedLabel = _c === void 0 ? 'Copied!' : _c, _d = _a.minified, minified = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(false), isCopiedHash = _e[0], setIsCopiedHash = _e[1];
    return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ align: "center", onClick: function () {
            (0, copy_to_clipboard_1.default)(value);
            setIsCopiedHash(true);
            setTimeout(function () { return setIsCopiedHash(false); }, 3000);
        } }, { children: isCopiedHash ? ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(SuccessIconWrapper, { src: ic_success_svg_1.default, marginRight: true }), !minified && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, variation: "green" }, { children: copiedLabel })))] }))) : ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_copy_svg_1.default, marginRight: true }), !minified && (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3 }, { children: label }))] }))) })));
};
exports.CopyHash = CopyHash;
exports.default = exports.CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsNkZBQTREO0FBQzVELHVGQUFzRDtBQUV0RCxJQUFNLGtCQUFrQixHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3pELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtLQUMzQyxDQUFDO0FBRndELENBRXhELENBQUMsQ0FBQztBQUVKLElBQU0sYUFBYSxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQzVDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLEtBQUssRUFBRTtZQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1lBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1NBQ25DO1FBQ0QsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFO2dCQUNKLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtnQkFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7YUFDbkM7U0FDRjtLQUNGLENBQUM7QUFiRixDQWFFLENBQ0gsQ0FBQztBQVNLLElBQU0sUUFBUSxHQUFHLFVBQUMsRUFLVDtRQUpkLEtBQUssV0FBQSxFQUNMLGFBQXlCLEVBQXpCLEtBQUssbUJBQUcsaUJBQWlCLEtBQUEsRUFDekIsbUJBQXVCLEVBQXZCLFdBQVcsbUJBQUcsU0FBUyxLQUFBLEVBQ3ZCLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQTtJQUVWLElBQUEsS0FBa0MsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxFQUFoRCxZQUFZLFFBQUEsRUFBRSxlQUFlLFFBQW1CLENBQUM7SUFDeEQsT0FBTyxDQUNMLHVCQUFDLGtCQUFPLHFCQUNOLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFFO1lBQ1AsSUFBQSwyQkFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1osZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsZ0JBRUEsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNkLHdCQUFDLGtCQUFPLHFCQUFDLEtBQUssRUFBRSxRQUFRLGlCQUN0Qix1QkFBQyxrQkFBa0IsSUFBQyxHQUFHLEVBQUUsd0JBQVcsRUFBRSxXQUFXLFNBQUcsRUFDbkQsQ0FBQyxRQUFRLElBQUksQ0FDWix1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxPQUFPLGdCQUNqQyxXQUFXLElBQ0gsQ0FDWixLQUNPLENBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FDRix3QkFBQyxrQkFBTyxxQkFBQyxLQUFLLEVBQUUsUUFBUSxpQkFDdEIsdUJBQUMsYUFBYSxJQUFDLEdBQUcsRUFBRSxxQkFBUSxFQUFFLFdBQVcsU0FBRyxFQUMzQyxDQUFDLFFBQVEsSUFBSSx1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxLQUFLLElBQVksS0FDM0MsQ0FDWCxJQUNPLENBQ1gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWpDVyxRQUFBLFFBQVEsWUFpQ25CO0FBRUYsa0JBQWUsZ0JBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuXG5pbXBvcnQgU3VjY2Vzc0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJztcbmltcG9ydCBDb3B5SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY29weS5zdmcnO1xuXG5jb25zdCBTdWNjZXNzSWNvbldyYXBwZXIgPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEdyZWVuLFxufSkpO1xuXG5jb25zdCBTdHlsZWRTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgY29sb3I6IFtcbiAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgIF0sXG4gICAgcGF0aDoge1xuICAgICAgZmlsbDogW1xuICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICBdLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvcHlIYXNoUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgY29waWVkTGFiZWw/OiBzdHJpbmc7XG4gIG1pbmlmaWVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENvcHlIYXNoID0gKHtcbiAgdmFsdWUsXG4gIGxhYmVsID0gJ0NvcHkgUHVibGljIEtleScsXG4gIGNvcGllZExhYmVsID0gJ0NvcGllZCEnLFxuICBtaW5pZmllZCA9IGZhbHNlLFxufTogQ29weUhhc2hQcm9wcykgPT4ge1xuICBjb25zdCBbaXNDb3BpZWRIYXNoLCBzZXRJc0NvcGllZEhhc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxGbGV4Um93XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvcHkodmFsdWUpO1xuICAgICAgICBzZXRJc0NvcGllZEhhc2godHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNDb3BpZWRIYXNoKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpc0NvcGllZEhhc2ggPyAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN1Y2Nlc3NJY29uV3JhcHBlciBzcmM9e1N1Y2Nlc3NJY29ufSBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIHshbWluaWZpZWQgJiYgKFxuICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9IHZhcmlhdGlvbj1cImdyZWVuXCI+XG4gICAgICAgICAgICAgIHtjb3BpZWRMYWJlbH1cbiAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9e0NvcHlJY29ufSBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIHshbWluaWZpZWQgJiYgPEJvZHlUZXh0IHNpemU9ezN9PntsYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKX1cbiAgICA8L0ZsZXhSb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3B5SGFzaDtcbiJdfQ==