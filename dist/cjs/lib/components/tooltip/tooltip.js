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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDBDQUl3QjtBQUN4QixnRkFBdUM7QUFFdkMsNkVBQThDO0FBQzlDLHNGQUF1RDtBQUN2RCxtRkFBb0Q7QUFZcEQsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsaUJBQWEsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMvRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQzVCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUM1QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUN6RCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO1FBQ3JDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPO1FBRWxDLFVBQVUsRUFBRSwyQkFBMkI7UUFDdkMsT0FBTyxFQUFFLENBQUM7UUFFVixlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztTQUNYO0tBQ0YsQ0FBQztBQWQ4RCxDQWM5RCxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8sR0FBRyxlQUFLLENBQUMsVUFBVSxDQUNyQyxVQUFDLEVBQTRELEVBQUUsR0FBRztJQUEvRCxJQUFBLFFBQVEsY0FBQSxFQUFFLFVBQVUsZ0JBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxLQUFLLHNCQUExRCwwREFBNEQsQ0FBRjtJQUN6RCxJQUFNLE9BQU8sR0FBRyxJQUFBLHlCQUFlLEVBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUVuRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixPQUFPLDJEQUFHLFFBQVEsR0FBSSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxDQUNMLDZEQUNFLHVCQUFDLDBCQUFnQix1QkFBSyxPQUFPLElBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQU0sUUFBUSxDQUFDLEtBQUssY0FDakUsVUFBQyxjQUFjLElBQUssT0FBQSxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsRUFBNUMsQ0FBNEMsSUFDaEQsRUFDbkIsdUJBQUMsa0JBQWtCLHVCQUFLLE9BQU8sRUFBTSxLQUFLLGNBQ3hDLGlEQUFLLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLGdCQUN4RCx3QkFBQyxxQkFBVSxlQUNULHVCQUFDLHNCQUFXLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQ25DLE9BQU8sSUFDSSxFQUNkLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsZ0JBQ2xDLEtBQUssSUFDRyxJQUNBLElBQ1QsSUFDYSxJQUNwQixDQUNKLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLGtCQUFlLGVBQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgVG9vbHRpcCBhcyBSZWFraXRUb29sdGlwLFxyXG4gIFRvb2x0aXBSZWZlcmVuY2UsXHJcbiAgdXNlVG9vbHRpcFN0YXRlLFxyXG59IGZyb20gJ3JlYWtpdC9Ub29sdGlwJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xyXG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XHJcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcclxuXHJcbnR5cGUgUmVmID0gSFRNTERpdkVsZW1lbnQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgdGl0bGU/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGNhcHRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4gJiBhbnk7XHJcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xyXG4gIGxpbWl0V2lkdGg/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRSZWFjdFRvb2x0aXAgPSBzdHlsZWQoUmVha2l0VG9vbHRpcCkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC50b29sdGlwLFxyXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxyXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcclxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gIHBhZGRpbmc6IHRoZW1lLnBhZGRpbmdbMl0sXHJcbiAgYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3cudG9vbHRpcCxcclxuXHJcbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMjUwbXMgZWFzZS1pbi1vdXQnLFxyXG4gIG9wYWNpdHk6IDAsXHJcblxyXG4gICcmW2RhdGEtZW50ZXJdJzoge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBUb29sdGlwUHJvcHM+KFxyXG4gICh7IGNoaWxkcmVuLCBsaW1pdFdpZHRoLCB0aXRsZSwgY2FwdGlvbiwgbW9ub3R5cGUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xyXG4gICAgY29uc3QgdG9vbHRpcCA9IHVzZVRvb2x0aXBTdGF0ZSh7IGFuaW1hdGVkOiAyNTAgfSk7XHJcblxyXG4gICAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpdGxlID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUb29sdGlwUmVmZXJlbmNlIHsuLi50b29sdGlwfSByZWY9e2NoaWxkcmVuLnJlZn0gey4uLmNoaWxkcmVuLnByb3BzfT5cclxuICAgICAgICAgIHsocmVmZXJlbmNlUHJvcHMpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgcmVmZXJlbmNlUHJvcHMpfVxyXG4gICAgICAgIDwvVG9vbHRpcFJlZmVyZW5jZT5cclxuICAgICAgICA8U3R5bGVkUmVhY3RUb29sdGlwIHsuLi50b29sdGlwfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogbGltaXRXaWR0aCA/ICc1MDBweCcgOiB1bmRlZmluZWQgfX0+XHJcbiAgICAgICAgICAgIDxGbGV4Q29sdW1uPlxyXG4gICAgICAgICAgICAgIDxDYXB0aW9uVGV4dCBzaXplPXsyfSB2YXJpYXRpb249XCJncmF5XCI+XHJcbiAgICAgICAgICAgICAgICB7Y2FwdGlvbn1cclxuICAgICAgICAgICAgICA8L0NhcHRpb25UZXh0PlxyXG4gICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSBtb25vdHlwZT17bW9ub3R5cGV9PlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XHJcbiAgICAgICAgICAgIDwvRmxleENvbHVtbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3R5bGVkUmVhY3RUb29sdGlwPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcclxuIl19