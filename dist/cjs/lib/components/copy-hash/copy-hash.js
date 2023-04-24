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
var SuccessIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
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
        } }, { children: isCopiedHash ? ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(SuccessIcon, { src: './assets/icons/ic-success.svg', marginRight: true }), !minified && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2, variation: "green" }, { children: copiedLabel })))] }))) : ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: "./assets/icons/ic-copy.svg", marginRight: true }), !minified && (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: label }))] }))) })));
};
exports.CopyHash = CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsSUFBTSxXQUFXLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDbEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO0tBQzNDLENBQUM7QUFGaUQsQ0FFakQsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDNUMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDbkM7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7Z0JBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVzthQUNuQztTQUNGO0tBQ0YsQ0FBQztBQWJGLENBYUUsQ0FDSCxDQUFDO0FBU0ssSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUtUO1FBSmQsS0FBSyxXQUFBLEVBQ0wsYUFBeUIsRUFBekIsS0FBSyxtQkFBRyxpQkFBaUIsS0FBQSxFQUN6QixtQkFBdUIsRUFBdkIsV0FBVyxtQkFBRyxTQUFTLEtBQUEsRUFDdkIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBO0lBRVYsSUFBQSxLQUFrQyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLEVBQWhELFlBQVksUUFBQSxFQUFFLGVBQWUsUUFBbUIsQ0FBQztJQUN4RCxPQUFPLENBQ0wsdUJBQUMsa0JBQU8scUJBQ04sS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUU7WUFDUCxJQUFBLDJCQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDWixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxnQkFFQSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2Qsd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLFdBQVcsSUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUUsV0FBVyxTQUFHLEVBQ2hFLENBQUMsUUFBUSxJQUFJLENBQ1osdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsT0FBTyxnQkFDakMsV0FBVyxJQUNILENBQ1osS0FDTyxDQUNYLENBQUMsQ0FBQyxDQUFDLENBQ0Ysd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLGFBQWEsSUFBQyxHQUFHLEVBQUMsNEJBQTRCLEVBQUMsV0FBVyxTQUFHLEVBQzdELENBQUMsUUFBUSxJQUFJLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLEtBQUssSUFBWSxLQUMzQyxDQUNYLElBQ08sQ0FDWCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBakNXLFFBQUEsUUFBUSxZQWlDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJztcblxuY29uc3QgU3VjY2Vzc0ljb24gPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEdyZWVuLFxufSkpO1xuXG5jb25zdCBTdHlsZWRTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgY29sb3I6IFtcbiAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgIF0sXG4gICAgcGF0aDoge1xuICAgICAgZmlsbDogW1xuICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICBdLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvcHlIYXNoUHJvcHMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgY29waWVkTGFiZWw/OiBzdHJpbmc7XG4gIG1pbmlmaWVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IENvcHlIYXNoID0gKHtcbiAgdmFsdWUsXG4gIGxhYmVsID0gJ0NvcHkgUHVibGljIEtleScsXG4gIGNvcGllZExhYmVsID0gJ0NvcGllZCEnLFxuICBtaW5pZmllZCA9IGZhbHNlLFxufTogQ29weUhhc2hQcm9wcykgPT4ge1xuICBjb25zdCBbaXNDb3BpZWRIYXNoLCBzZXRJc0NvcGllZEhhc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxGbGV4Um93XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvcHkodmFsdWUpO1xuICAgICAgICBzZXRJc0NvcGllZEhhc2godHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNDb3BpZWRIYXNoKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpc0NvcGllZEhhc2ggPyAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN1Y2Nlc3NJY29uIHNyYz17Jy4vYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJ30gbWFyZ2luUmlnaHQgLz5cbiAgICAgICAgICB7IW1pbmlmaWVkICYmIChcbiAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXsyfSB2YXJpYXRpb249XCJncmVlblwiPlxuICAgICAgICAgICAgICB7Y29waWVkTGFiZWx9XG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN0eWxlZFN2Z0ljb24gc3JjPVwiLi9hc3NldHMvaWNvbnMvaWMtY29weS5zdmdcIiBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIHshbWluaWZpZWQgJiYgPEJvZHlUZXh0IHNpemU9ezJ9PntsYWJlbH08L0JvZHlUZXh0Pn1cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKX1cbiAgICA8L0ZsZXhSb3c+XG4gICk7XG59O1xuIl19