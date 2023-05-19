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
    blue: 'fillPrimaryBlue',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsNkZBQTREO0FBQzVELHVGQUFzRDtBQUl0RCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsSUFBSSxFQUFFLGlCQUFpQjtDQUN4QixDQUFDO0FBRUYsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUN6RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFlBQVk7S0FDM0MsQ0FBQztBQUZ3RCxDQUV4RCxDQUFDLENBQUM7QUFFSixJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUNuQyxVQUFDLEVBQTZCO1FBQTNCLEtBQUssV0FBQSxFQUFFLGlCQUFrQixFQUFsQixTQUFTLG1CQUFHLE1BQU0sS0FBQTtJQUMxQixPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0Q7S0FDRixDQUFDO0FBTEYsQ0FLRSxDQUNMLENBQUM7QUFVSyxJQUFNLFFBQVEsR0FBRyxVQUFDLEVBTVQ7UUFMZCxLQUFLLFdBQUEsRUFDTCxhQUF5QixFQUF6QixLQUFLLG1CQUFHLGlCQUFpQixLQUFBLEVBQ3pCLG1CQUF1QixFQUF2QixXQUFXLG1CQUFHLFNBQVMsS0FBQSxFQUN2QixTQUFTLGVBQUEsRUFDVCxnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLLEtBQUE7SUFFVixJQUFBLEtBQWtDLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsRUFBaEQsWUFBWSxRQUFBLEVBQUUsZUFBZSxRQUFtQixDQUFDO0lBQ3hELE9BQU8sQ0FDTCx1QkFBQyxrQkFBTyxxQkFDTixLQUFLLEVBQUMsUUFBUSxFQUNkLE9BQU8sRUFBRTtZQUNQLElBQUEsMkJBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztZQUNaLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxDQUFDLGdCQUVBLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FDZCx3QkFBQyxrQkFBTyxxQkFBQyxLQUFLLEVBQUUsUUFBUSxpQkFDdEIsdUJBQUMsa0JBQWtCLElBQUMsR0FBRyxFQUFFLHdCQUFXLEVBQUUsV0FBVyxTQUFHLEVBQ25ELENBQUMsUUFBUSxJQUFJLENBQ1osdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsT0FBTyxnQkFDakMsV0FBVyxJQUNILENBQ1osS0FDTyxDQUNYLENBQUMsQ0FBQyxDQUFDLENBQ0Ysd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLGFBQWEsSUFBQyxHQUFHLEVBQUUscUJBQVEsRUFBRSxXQUFXLFFBQUMsU0FBUyxFQUFFLFNBQVMsR0FBSSxFQUNqRSxDQUFDLFFBQVEsSUFBSSx1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxnQkFBRyxLQUFLLElBQVksS0FDM0MsQ0FDWCxJQUNPLENBQ1gsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWxDVyxRQUFBLFFBQVEsWUFrQ25CO0FBRUYsa0JBQWUsZ0JBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xuXG5pbXBvcnQgU3VjY2Vzc0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJztcbmltcG9ydCBDb3B5SWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWMtY29weS5zdmcnO1xuXG50eXBlIENvcHlIYXNoQ29sb3IgPSAnYmx1ZScgfCAnZ3JheSc7XG5cbmNvbnN0IGNvcHlIYXNoQ29sb3JNYXBwZXIgPSB7XG4gIGJsdWU6ICdmaWxsUHJpbWFyeUJsdWUnLFxuICBncmF5OiAnY29udGVudFRlcnRpYXJ5Jyxcbn07XG5cbmNvbnN0IFN1Y2Nlc3NJY29uV3JhcHBlciA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50R3JlZW4sXG59KSk7XG5cbmNvbnN0IFN0eWxlZFN2Z0ljb24gPSBzdHlsZWQoU3ZnSWNvbik8eyB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yIH0+KFxuICAoeyB0aGVtZSwgdmFyaWF0aW9uID0gJ2JsdWUnIH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW2NvcHlIYXNoQ29sb3JNYXBwZXJbdmFyaWF0aW9uXV0sXG4gICAgICBwYXRoOiB7XG4gICAgICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbY29weUhhc2hDb2xvck1hcHBlclt2YXJpYXRpb25dXSxcbiAgICAgIH0sXG4gICAgfSlcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29weUhhc2hQcm9wcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBjb3BpZWRMYWJlbD86IHN0cmluZztcbiAgbWluaWZpZWQ/OiBib29sZWFuO1xuICB2YXJpYXRpb24/OiBDb3B5SGFzaENvbG9yO1xufVxuXG5leHBvcnQgY29uc3QgQ29weUhhc2ggPSAoe1xuICB2YWx1ZSxcbiAgbGFiZWwgPSAnQ29weSBQdWJsaWMgS2V5JyxcbiAgY29waWVkTGFiZWwgPSAnQ29waWVkIScsXG4gIHZhcmlhdGlvbixcbiAgbWluaWZpZWQgPSBmYWxzZSxcbn06IENvcHlIYXNoUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ29waWVkSGFzaCwgc2V0SXNDb3BpZWRIYXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleFJvd1xuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb3B5KHZhbHVlKTtcbiAgICAgICAgc2V0SXNDb3BpZWRIYXNoKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkSGFzaChmYWxzZSksIDMwMDApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNDb3BpZWRIYXNoID8gKFxuICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxTdWNjZXNzSWNvbldyYXBwZXIgc3JjPXtTdWNjZXNzSWNvbn0gbWFyZ2luUmlnaHQgLz5cbiAgICAgICAgICB7IW1pbmlmaWVkICYmIChcbiAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSB2YXJpYXRpb249XCJncmVlblwiPlxuICAgICAgICAgICAgICB7Y29waWVkTGFiZWx9XG4gICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgPFN0eWxlZFN2Z0ljb24gc3JjPXtDb3B5SWNvbn0gbWFyZ2luUmlnaHQgdmFyaWF0aW9uPXt2YXJpYXRpb259IC8+XG4gICAgICAgICAgeyFtaW5pZmllZCAmJiA8Qm9keVRleHQgc2l6ZT17M30+e2xhYmVsfTwvQm9keVRleHQ+fVxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICApfVxuICAgIDwvRmxleFJvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlIYXNoO1xuIl19