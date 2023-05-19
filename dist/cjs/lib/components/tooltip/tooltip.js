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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDBDQUl3QjtBQUN4QixnRkFBdUM7QUFFdkMsNkVBQThDO0FBQzlDLHNGQUF1RDtBQUN2RCxtRkFBb0Q7QUFZcEQsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsaUJBQWEsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMvRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUM1QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUN6RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBRWxDLFVBQVUsRUFBRSwyQkFBMkI7UUFDdkMsT0FBTyxFQUFFLENBQUM7UUFFVixlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0YsQ0FBQztBQWQ4RCxDQWM5RCxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8sR0FBRyxlQUFLLENBQUMsVUFBVSxDQUNyQyxVQUFDLEVBQTRELEVBQUUsR0FBRztJQUEvRCxJQUFBLFFBQVEsY0FBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLHNCQUExRCwwREFBNEQsQ0FBRjtJQUN6RCxJQUFNLE9BQU8sR0FBRyxJQUFBLHlCQUFlLEVBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVuRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixPQUFPLDJEQUFHLFFBQVEsR0FBSSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxDQUNMLDZEQUNFLHVCQUFDLDBCQUFnQix1QkFBSyxPQUFPLElBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQU0sUUFBUSxDQUFDLEtBQUssY0FDakUsVUFBQyxjQUFjLElBQUssT0FBQSxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsRUFBNUMsQ0FBNEMsSUFDaEQsRUFDbkIsdUJBQUMsa0JBQWtCLHVCQUFLLE9BQU8sRUFBTSxLQUFLLGNBQ3hDLGlEQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLGdCQUN4RCx3QkFBQyxxQkFBVSxlQUNULHVCQUFDLHNCQUFXLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQ25DLE9BQU8sSUFDSSxFQUNkLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsZ0JBQ2xDLEtBQUssSUFDRyxJQUNBLElBQ1QsSUFDYSxJQUNwQixDQUNKLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLGtCQUFlLGVBQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUb29sdGlwIGFzIFJlYWtpdFRvb2x0aXAsXG4gIFRvb2x0aXBSZWZlcmVuY2UsXG4gIHVzZVRvb2x0aXBTdGF0ZSxcbn0gZnJvbSAncmVha2l0L1Rvb2x0aXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5cbnR5cGUgUmVmID0gSFRNTERpdkVsZW1lbnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbHRpcFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgdGl0bGU/OiBzdHJpbmcgfCBudWxsO1xuICBjYXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiAmIGFueTtcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xuICBsaW1pdFdpZHRoPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkUmVhY3RUb29sdGlwID0gc3R5bGVkKFJlYWtpdFRvb2x0aXApKCh7IHRoZW1lIH0pID0+ICh7XG4gIHpJbmRleDogdGhlbWUuekluZGV4LnRvb2x0aXAsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIHBhZGRpbmc6IHRoZW1lLnBhZGRpbmdbMl0sXG4gIGJveFNoYWRvdzogdGhlbWUuYm94U2hhZG93LnRvb2x0aXAsXG5cbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQnLFxuICBvcGFjaXR5OiAwLFxuXG4gICcmW2RhdGEtZW50ZXJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFRvb2x0aXBQcm9wcz4oXG4gICh7IGNoaWxkcmVuLCBsaW1pdFdpZHRoLCB0aXRsZSwgY2FwdGlvbiwgbW9ub3R5cGUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB1c2VUb29sdGlwU3RhdGUoeyBhbmltYXRlZDogMjUwIH0pO1xuXG4gICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8VG9vbHRpcFJlZmVyZW5jZSB7Li4udG9vbHRpcH0gcmVmPXtjaGlsZHJlbi5yZWZ9IHsuLi5jaGlsZHJlbi5wcm9wc30+XG4gICAgICAgICAgeyhyZWZlcmVuY2VQcm9wcykgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCByZWZlcmVuY2VQcm9wcyl9XG4gICAgICAgIDwvVG9vbHRpcFJlZmVyZW5jZT5cbiAgICAgICAgPFN0eWxlZFJlYWN0VG9vbHRpcCB7Li4udG9vbHRpcH0gey4uLnByb3BzfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBsaW1pdFdpZHRoID8gJzUwMHB4JyA6IHVuZGVmaW5lZCB9fT5cbiAgICAgICAgICAgIDxGbGV4Q29sdW1uPlxuICAgICAgICAgICAgICA8Q2FwdGlvblRleHQgc2l6ZT17Mn0gdmFyaWF0aW9uPVwiZ3JheVwiPlxuICAgICAgICAgICAgICAgIHtjYXB0aW9ufVxuICAgICAgICAgICAgICA8L0NhcHRpb25UZXh0PlxuICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbW9ub3R5cGU9e21vbm90eXBlfT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3R5bGVkUmVhY3RUb29sdGlwPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiJdfQ==