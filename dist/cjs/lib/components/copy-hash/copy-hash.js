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
    var value = _a.value, _b = _a.label, label = _b === void 0 ? 'Copy Public Key' : _b, _c = _a.copiedLabel, copiedLabel = _c === void 0 ? 'Copied!' : _c, variation = _a.variation, _d = _a.minified, minified = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(false), isCopiedHash = _e[0], setIsCopiedHash = _e[1];
    return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ align: "center", onClick: function () {
            (0, copy_to_clipboard_1.default)(value);
            setIsCopiedHash(true);
            setTimeout(function () { return setIsCopiedHash(false); }, 3000);
        } }, { children: isCopiedHash ? ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(SuccessIconWrapper, { src: ic_success_svg_1.default, marginRight: true }), !minified && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, variation: "green" }, { children: copiedLabel })))] }))) : ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: ic_copy_svg_1.default, marginRight: true, variation: variation }), !minified && (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3 }, { children: label }))] }))) })));
};
exports.CopyHash = CopyHash;
exports.default = exports.CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsNkZBQTREO0FBQzVELHVGQUFzRDtBQUl0RCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxpQkFBaUI7Q0FDeEIsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO0tBQzNDLENBQUM7QUFGd0QsQ0FFeEQsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDbkMsVUFBQyxFQUE2QjtRQUEzQixLQUFLLFdBQUEsRUFBRSxpQkFBa0IsRUFBbEIsU0FBUyxtQkFBRyxNQUFNLEtBQUE7SUFDMUIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdEO0tBQ0YsQ0FBQztBQUxGLENBS0UsQ0FDTCxDQUFDO0FBVUssSUFBTSxRQUFRLEdBQUcsVUFBQyxFQU1UO1FBTGQsS0FBSyxXQUFBLEVBQ0wsYUFBeUIsRUFBekIsS0FBSyxtQkFBRyxpQkFBaUIsS0FBQSxFQUN6QixtQkFBdUIsRUFBdkIsV0FBVyxtQkFBRyxTQUFTLEtBQUEsRUFDdkIsU0FBUyxlQUFBLEVBQ1QsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBO0lBRVYsSUFBQSxLQUFrQyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLEVBQWhELFlBQVksUUFBQSxFQUFFLGVBQWUsUUFBbUIsQ0FBQztJQUN4RCxPQUFPLENBQ0wsdUJBQUMsa0JBQU8scUJBQ04sS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUU7WUFDUCxJQUFBLDJCQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDWixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxnQkFFQSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2Qsd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLGtCQUFrQixJQUFDLEdBQUcsRUFBRSx3QkFBVyxFQUFFLFdBQVcsU0FBRyxFQUNuRCxDQUFDLFFBQVEsSUFBSSxDQUNaLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE9BQU8sZ0JBQ2pDLFdBQVcsSUFDSCxDQUNaLEtBQ08sQ0FDWCxDQUFDLENBQUMsQ0FBQyxDQUNGLHdCQUFDLGtCQUFPLHFCQUFDLEtBQUssRUFBRSxRQUFRLGlCQUN0Qix1QkFBQyxhQUFhLElBQUMsR0FBRyxFQUFFLHFCQUFRLEVBQUUsV0FBVyxRQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUksRUFDakUsQ0FBQyxRQUFRLElBQUksdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFZLEtBQzNDLENBQ1gsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQ1csUUFBQSxRQUFRLFlBa0NuQjtBQUVGLGtCQUFlLGdCQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xyXG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XHJcblxyXG5pbXBvcnQgU3VjY2Vzc0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJztcclxuaW1wb3J0IENvcHlJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1jb3B5LnN2Zyc7XHJcblxyXG50eXBlIENvcHlIYXNoQ29sb3IgPSAnYmx1ZScgfCAnZ3JheSc7XHJcblxyXG5jb25zdCBjb3B5SGFzaENvbG9yTWFwcGVyID0ge1xyXG4gIGJsdWU6ICdjb250ZW50Qmx1ZScsXHJcbiAgZ3JheTogJ2NvbnRlbnRUZXJ0aWFyeScsXHJcbn07XHJcblxyXG5jb25zdCBTdWNjZXNzSWNvbldyYXBwZXIgPSBzdHlsZWQoU3ZnSWNvbikoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbik8eyB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yIH0+KFxyXG4gICh7IHRoZW1lLCB2YXJpYXRpb24gPSAnYmx1ZScgfSkgPT5cclxuICAgIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvcHlIYXNoQ29sb3JNYXBwZXJbdmFyaWF0aW9uXV0sXHJcbiAgICAgIHBhdGg6IHtcclxuICAgICAgICBmaWxsOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvcHlIYXNoQ29sb3JNYXBwZXJbdmFyaWF0aW9uXV0sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3B5SGFzaFByb3BzIHtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIGNvcGllZExhYmVsPzogc3RyaW5nO1xyXG4gIG1pbmlmaWVkPzogYm9vbGVhbjtcclxuICB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29weUhhc2ggPSAoe1xyXG4gIHZhbHVlLFxyXG4gIGxhYmVsID0gJ0NvcHkgUHVibGljIEtleScsXHJcbiAgY29waWVkTGFiZWwgPSAnQ29waWVkIScsXHJcbiAgdmFyaWF0aW9uLFxyXG4gIG1pbmlmaWVkID0gZmFsc2UsXHJcbn06IENvcHlIYXNoUHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNDb3BpZWRIYXNoLCBzZXRJc0NvcGllZEhhc2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFJvd1xyXG4gICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBjb3B5KHZhbHVlKTtcclxuICAgICAgICBzZXRJc0NvcGllZEhhc2godHJ1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0NvcGllZEhhc2goZmFsc2UpLCAzMDAwKTtcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2lzQ29waWVkSGFzaCA/IChcclxuICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9PlxyXG4gICAgICAgICAgPFN1Y2Nlc3NJY29uV3JhcHBlciBzcmM9e1N1Y2Nlc3NJY29ufSBtYXJnaW5SaWdodCAvPlxyXG4gICAgICAgICAgeyFtaW5pZmllZCAmJiAoXHJcbiAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSB2YXJpYXRpb249XCJncmVlblwiPlxyXG4gICAgICAgICAgICAgIHtjb3BpZWRMYWJlbH1cclxuICAgICAgICAgICAgPC9Cb2R5VGV4dD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9GbGV4Um93PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICA8U3R5bGVkU3ZnSWNvbiBzcmM9e0NvcHlJY29ufSBtYXJnaW5SaWdodCB2YXJpYXRpb249e3ZhcmlhdGlvbn0gLz5cclxuICAgICAgICAgIHshbWluaWZpZWQgJiYgPEJvZHlUZXh0IHNpemU9ezN9PntsYWJlbH08L0JvZHlUZXh0Pn1cclxuICAgICAgICA8L0ZsZXhSb3c+XHJcbiAgICAgICl9XHJcbiAgICA8L0ZsZXhSb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvcHlIYXNoO1xyXG4iXX0=