"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyHash = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var react_1 = require("react");
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
    var value = _a.value;
    var _b = (0, react_1.useState)(false), isCopiedHash = _b[0], setIsCopiedHash = _b[1];
    return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ align: "center", onClick: function () {
            (0, copy_to_clipboard_1.default)(value);
            setIsCopiedHash(true);
            setTimeout(function () { return setIsCopiedHash(false); }, 3000);
        } }, { children: isCopiedHash ? ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(SuccessIcon, { src: 'assets/icons/ic-success.svg', marginRight: true }), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2, variation: "green" }, { children: "Copied!" }))] }))) : ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: "assets/icons/ic-copy.svg", marginRight: true }), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: "Copy Public Key" }))] }))) })));
};
exports.CopyHash = CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEVBQTJDO0FBQzNDLCtCQUFpQztBQUNqQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsSUFBTSxXQUFXLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDbEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO0tBQzNDLENBQUM7QUFGaUQsQ0FFakQsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDNUMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDbkM7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7Z0JBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVzthQUNuQztTQUNGO0tBQ0YsQ0FBQztBQWJGLENBYUUsQ0FDSCxDQUFDO0FBRUssSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQ3hCLElBQUEsS0FBa0MsSUFBQSxnQkFBUSxFQUFDLEtBQUssQ0FBQyxFQUFoRCxZQUFZLFFBQUEsRUFBRSxlQUFlLFFBQW1CLENBQUM7SUFDeEQsT0FBTyxDQUNMLHVCQUFDLGtCQUFPLHFCQUNOLEtBQUssRUFBQyxRQUFRLEVBQ2QsT0FBTyxFQUFFO1lBQ1AsSUFBQSwyQkFBSSxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1osZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsZ0JBRUEsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNkLHdCQUFDLGtCQUFPLHFCQUFDLEtBQUssRUFBRSxRQUFRLGlCQUN0Qix1QkFBQyxXQUFXLElBQUMsR0FBRyxFQUFFLDZCQUE2QixFQUFFLFdBQVcsU0FBRyxFQUMvRCx1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxPQUFPLDZCQUV6QixLQUNILENBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FDRix3QkFBQyxrQkFBTyxxQkFBQyxLQUFLLEVBQUUsUUFBUSxpQkFDdEIsdUJBQUMsYUFBYSxJQUFDLEdBQUcsRUFBQywwQkFBMEIsRUFBQyxXQUFXLFNBQUcsRUFDNUQsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMscUNBQTRCLEtBQ3JDLENBQ1gsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUExQlcsUUFBQSxRQUFRLFlBMEJuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XG5cbmNvbnN0IFN1Y2Nlc3NJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRHcmVlbixcbn0pKTtcblxuY29uc3QgU3R5bGVkU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGNvbG9yOiBbXG4gICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICBdLFxuICAgIHBhdGg6IHtcbiAgICAgIGZpbGw6IFtcbiAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgXSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IENvcHlIYXNoID0gKHsgdmFsdWUgfSkgPT4ge1xuICBjb25zdCBbaXNDb3BpZWRIYXNoLCBzZXRJc0NvcGllZEhhc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxGbGV4Um93XG4gICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNvcHkodmFsdWUpO1xuICAgICAgICBzZXRJc0NvcGllZEhhc2godHJ1ZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNDb3BpZWRIYXNoKGZhbHNlKSwgMzAwMCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtpc0NvcGllZEhhc2ggPyAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN1Y2Nlc3NJY29uIHNyYz17J2Fzc2V0cy9pY29ucy9pYy1zdWNjZXNzLnN2Zyd9IG1hcmdpblJpZ2h0IC8+XG4gICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9IHZhcmlhdGlvbj1cImdyZWVuXCI+XG4gICAgICAgICAgICBDb3BpZWQhXG4gICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgPC9GbGV4Um93PlxuICAgICAgKSA6IChcbiAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9XCJhc3NldHMvaWNvbnMvaWMtY29weS5zdmdcIiBtYXJnaW5SaWdodCAvPlxuICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXsyfT5Db3B5IFB1YmxpYyBLZXk8L0JvZHlUZXh0PlxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICApfVxuICAgIDwvRmxleFJvdz5cbiAgKTtcbn07XG4iXX0=