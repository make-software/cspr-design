"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var Tooltip_1 = require("reakit/Tooltip");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var caption_text_1 = tslib_1.__importDefault(require("../caption-text/caption-text"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var StyledReactTooltip = (0, styled_components_1.default)(Tooltip_1.Tooltip)(function (_a) {
    var theme = _a.theme;
    return ({
        zIndex: theme.zIndex.tooltip,
        color: theme.styleguideColors.contentPrimary,
        backgroundColor: theme.styleguideColors.backgroundPrimary,
        borderRadius: theme.borderRadius.base,
        padding: theme.padding[2],
        boxShadow: theme.boxShadow.tooltip,
        transition: 'opacity 250ms ease-in-out',
        opacity: 0,
        '&[data-enter]': {
            opacity: 1,
        },
    });
});
exports.Tooltip = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, limitWidth = _a.limitWidth, title = _a.title, caption = _a.caption, monotype = _a.monotype, props = tslib_1.__rest(_a, ["children", "limitWidth", "title", "caption", "monotype"]);
    var tooltip = (0, Tooltip_1.useTooltipState)({ animated: 250 });
    if (children == null) {
        return null;
    }
    if (title == null) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.TooltipReference, tslib_1.__assign({}, tooltip, { ref: children.ref }, children.props, { children: function (referenceProps) { return react_1.default.cloneElement(children, referenceProps); } })), (0, jsx_runtime_1.jsx)(StyledReactTooltip, tslib_1.__assign({}, tooltip, props, { children: (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ style: { maxWidth: limitWidth ? '500px' : undefined } }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, { children: [(0, jsx_runtime_1.jsx)(caption_text_1.default, tslib_1.__assign({ size: 2, variation: "gray" }, { children: caption })), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, monotype: monotype }, { children: title }))] }) })) }))] }));
});
exports.default = exports.Tooltip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDBDQUl3QjtBQUN4QixnRkFBdUM7QUFFdkMsNkVBQThDO0FBQzlDLHNGQUF1RDtBQUN2RCxtRkFBb0Q7QUFZcEQsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsaUJBQWEsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMvRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUM1QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUN6RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBRWxDLFVBQVUsRUFBRSwyQkFBMkI7UUFDdkMsT0FBTyxFQUFFLENBQUM7UUFFVixlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0YsQ0FBQztBQWQ4RCxDQWM5RCxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8sR0FBRyxlQUFLLENBQUMsVUFBVSxDQUNyQyxVQUFDLEVBQTRELEVBQUUsR0FBRztJQUEvRCxJQUFBLFFBQVEsY0FBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLHNCQUExRCwwREFBNEQsQ0FBRjtJQUN6RCxJQUFNLE9BQU8sR0FBRyxJQUFBLHlCQUFlLEVBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVuRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixPQUFPLDJEQUFHLFFBQVEsR0FBSSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxDQUNMLDZEQUNFLHVCQUFDLDBCQUFnQix1QkFBSyxPQUFPLElBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQU0sUUFBUSxDQUFDLEtBQUssY0FDakUsVUFBQyxjQUFjLElBQUssT0FBQSxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsRUFBNUMsQ0FBNEMsSUFDaEQsRUFDbkIsdUJBQUMsa0JBQWtCLHVCQUFLLE9BQU8sRUFBTSxLQUFLLGNBQ3hDLGlEQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLGdCQUN4RCx3QkFBQyxxQkFBVSxlQUNULHVCQUFDLHNCQUFXLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQ25DLE9BQU8sSUFDSSxFQUNkLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsZ0JBQ2xDLEtBQUssSUFDRyxJQUNBLElBQ1QsSUFDYSxJQUNwQixDQUNKLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLGtCQUFlLGVBQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUb29sdGlwIGFzIFJlYWtpdFRvb2x0aXAsXG4gIFRvb2x0aXBSZWZlcmVuY2UsXG4gIHVzZVRvb2x0aXBTdGF0ZSxcbn0gZnJvbSAncmVha2l0L1Rvb2x0aXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5cbnR5cGUgUmVmID0gSFRNTERpdkVsZW1lbnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbHRpcFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZyB8IG51bGw7XG4gIGNhcHRpb24/OiBzdHJpbmcgfCBudWxsO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+ICYgYW55O1xuICBtb25vdHlwZT86IGJvb2xlYW47XG4gIGxpbWl0V2lkdGg/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRSZWFjdFRvb2x0aXAgPSBzdHlsZWQoUmVha2l0VG9vbHRpcCkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgekluZGV4OiB0aGVtZS56SW5kZXgudG9vbHRpcCxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgcGFkZGluZzogdGhlbWUucGFkZGluZ1syXSxcbiAgYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3cudG9vbHRpcCxcblxuICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCcsXG4gIG9wYWNpdHk6IDAsXG5cbiAgJyZbZGF0YS1lbnRlcl0nOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgVG9vbHRpcFByb3BzPihcbiAgKHsgY2hpbGRyZW4sIGxpbWl0V2lkdGgsIHRpdGxlLCBjYXB0aW9uLCBtb25vdHlwZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHVzZVRvb2x0aXBTdGF0ZSh7IGFuaW1hdGVkOiAyNTAgfSk7XG5cbiAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlID09IG51bGwpIHtcbiAgICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUb29sdGlwUmVmZXJlbmNlIHsuLi50b29sdGlwfSByZWY9e2NoaWxkcmVuLnJlZn0gey4uLmNoaWxkcmVuLnByb3BzfT5cbiAgICAgICAgICB7KHJlZmVyZW5jZVByb3BzKSA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHJlZmVyZW5jZVByb3BzKX1cbiAgICAgICAgPC9Ub29sdGlwUmVmZXJlbmNlPlxuICAgICAgICA8U3R5bGVkUmVhY3RUb29sdGlwIHsuLi50b29sdGlwfSB7Li4ucHJvcHN9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IGxpbWl0V2lkdGggPyAnNTAwcHgnIDogdW5kZWZpbmVkIH19PlxuICAgICAgICAgICAgPEZsZXhDb2x1bW4+XG4gICAgICAgICAgICAgIDxDYXB0aW9uVGV4dCBzaXplPXsyfSB2YXJpYXRpb249XCJncmF5XCI+XG4gICAgICAgICAgICAgICAge2NhcHRpb259XG4gICAgICAgICAgICAgIDwvQ2FwdGlvblRleHQ+XG4gICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSBtb25vdHlwZT17bW9ub3R5cGV9PlxuICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICAgIDwvRmxleENvbHVtbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdHlsZWRSZWFjdFRvb2x0aXA+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuIl19