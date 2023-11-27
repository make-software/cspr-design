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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsNkZBQTREO0FBQzVELHVGQUFzRDtBQUl0RCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLElBQUksRUFBRSxhQUFhO0lBQ25CLElBQUksRUFBRSxpQkFBaUI7Q0FDeEIsQ0FBQztBQUVGLElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO0tBQzNDLENBQUM7QUFGd0QsQ0FFeEQsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDbkMsVUFBQyxFQUE2QjtRQUEzQixLQUFLLFdBQUEsRUFBRSxpQkFBa0IsRUFBbEIsU0FBUyxtQkFBRyxNQUFNLEtBQUE7SUFDMUIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdEO0tBQ0YsQ0FBQztBQUxGLENBS0UsQ0FDTCxDQUFDO0FBVUssSUFBTSxRQUFRLEdBQUcsVUFBQyxFQU1UO1FBTGQsS0FBSyxXQUFBLEVBQ0wsYUFBeUIsRUFBekIsS0FBSyxtQkFBRyxpQkFBaUIsS0FBQSxFQUN6QixtQkFBdUIsRUFBdkIsV0FBVyxtQkFBRyxTQUFTLEtBQUEsRUFDdkIsU0FBUyxlQUFBLEVBQ1QsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBO0lBRVYsSUFBQSxLQUFrQyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLEVBQWhELFlBQVksUUFBQSxFQUFFLGVBQWUsUUFBbUIsQ0FBQztJQUN4RCxPQUFPLENBQ0wsdUJBQUMsa0JBQU8scUJBQ04sS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUU7WUFDUCxJQUFBLDJCQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDWixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxnQkFFQSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2Qsd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLGtCQUFrQixJQUFDLEdBQUcsRUFBRSx3QkFBVyxFQUFFLFdBQVcsU0FBRyxFQUNuRCxDQUFDLFFBQVEsSUFBSSxDQUNaLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE9BQU8sZ0JBQ2pDLFdBQVcsSUFDSCxDQUNaLEtBQ08sQ0FDWCxDQUFDLENBQUMsQ0FBQyxDQUNGLHdCQUFDLGtCQUFPLHFCQUFDLEtBQUssRUFBRSxRQUFRLGlCQUN0Qix1QkFBQyxhQUFhLElBQUMsR0FBRyxFQUFFLHFCQUFRLEVBQUUsV0FBVyxRQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUksRUFDakUsQ0FBQyxRQUFRLElBQUksdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsS0FBSyxJQUFZLEtBQzNDLENBQ1gsSUFDTyxDQUNYLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQ1csUUFBQSxRQUFRLFlBa0NuQjtBQUVGLGtCQUFlLGdCQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJztcblxuaW1wb3J0IFN1Y2Nlc3NJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pYy1zdWNjZXNzLnN2Zyc7XG5pbXBvcnQgQ29weUljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLWNvcHkuc3ZnJztcblxudHlwZSBDb3B5SGFzaENvbG9yID0gJ2JsdWUnIHwgJ2dyYXknO1xuXG5jb25zdCBjb3B5SGFzaENvbG9yTWFwcGVyID0ge1xuICBibHVlOiAnY29udGVudEJsdWUnLFxuICBncmF5OiAnY29udGVudFRlcnRpYXJ5Jyxcbn07XG5cbmNvbnN0IFN1Y2Nlc3NJY29uV3JhcHBlciA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbik8eyB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yIH0+KFxuICAoeyB0aGVtZSwgdmFyaWF0aW9uID0gJ2JsdWUnIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvcHlIYXNoQ29sb3JNYXBwZXJbdmFyaWF0aW9uXV0sXG4gICAgICBwYXRoOiB7XG4gICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbY29weUhhc2hDb2xvck1hcHBlclt2YXJpYXRpb25dXSxcbiAgICAgIH0sXG4gICAgfSlcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29weUhhc2hQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjb3BpZWRMYWJlbD86IHN0cmluZztcbiAgbWluaWZpZWQ/OiBib29sZWFuO1xuICB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yO1xufVxuXG5leHBvcnQgY29uc3QgQ29weUhhc2ggPSAoe1xuICB2YWx1ZSxcbiAgbGFiZWwgPSAnQ29weSBQdWJsaWMgS2V5JyxcbiAgY29waWVkTGFiZWwgPSAnQ29waWVkIScsXG4gIHZhcmlhdGlvbixcbiAgbWluaWZpZWQgPSBmYWxzZSxcbn06IENvcHlIYXNoUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ29waWVkSGFzaCwgc2V0SXNDb3BpZWRIYXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleFJvd1xuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb3B5KHZhbHVlKTtcbiAgICAgICAgc2V0SXNDb3BpZWRIYXNoKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkSGFzaChmYWxzZSksIDMwMDApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNDb3BpZWRIYXNoID8gKFxuICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxTdWNjZXNzSWNvbldyYXBwZXIgc3JjPXtTdWNjZXNzSWNvbn0gbWFyZ2luUmlnaHQgLz5cbiAgICAgICAgICB7IW1pbmlmaWVkICYmIChcbiAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSB2YXJpYXRpb249XCJncmVlblwiPlxuICAgICAgICAgICAgICB7Y29waWVkTGFiZWx9XG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN0eWxlZFN2Z0ljb24gc3JjPXtDb3B5SWNvbn0gbWFyZ2luUmlnaHQgdmFyaWF0aW9uPXt2YXJpYXRpb259IC8+XG4gICAgICAgICAgeyFtaW5pZmllZCAmJiA8Qm9keVRleHQgc2l6ZT17M30+e2xhYmVsfTwvQm9keVRleHQ+fVxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICApfVxuICAgIDwvRmxleFJvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlIYXNoO1xuIl19