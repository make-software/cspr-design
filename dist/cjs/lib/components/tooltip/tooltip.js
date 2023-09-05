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
var match_size_1 = require("../../utils/match-size");
var StyledReactTooltip = (0, styled_components_1.default)(Tooltip_1.Tooltip)(function (_a) {
    var theme = _a.theme, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c;
    return ({
        zIndex: theme.zIndex.tooltip,
        color: theme.styleguideColors.contentPrimary,
        backgroundColor: theme.styleguideColors.backgroundPrimary,
        borderRadius: theme.borderRadius.base,
        padding: theme.padding[2],
        boxShadow: theme.boxShadow.tooltip,
        transition: 'opacity 250ms ease-in-out',
        opacity: 0,
        fontSize: (0, match_size_1.matchSize)({
            sm: '1.3rem',
            xs: '0.8125rem',
        }, scale),
        lineHeight: (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight),
        '&[data-enter]': {
            opacity: 1,
        },
    });
});
exports.Tooltip = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, limitWidth = _a.limitWidth, title = _a.title, caption = _a.caption, monotype = _a.monotype, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c, props = tslib_1.__rest(_a, ["children", "limitWidth", "title", "caption", "monotype", "lineHeight", "scale"]);
    var tooltip = (0, Tooltip_1.useTooltipState)({ animated: 250 });
    if (children == null) {
        return null;
    }
    if (title == null) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.TooltipReference, tslib_1.__assign({}, tooltip, { ref: children.ref }, children.props, { children: function (referenceProps) { return react_1.default.cloneElement(children, referenceProps); } })), (0, jsx_runtime_1.jsx)(StyledReactTooltip, tslib_1.__assign({}, tooltip, props, { children: (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ style: { maxWidth: limitWidth ? '500px' : undefined } }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, { children: [(0, jsx_runtime_1.jsx)(caption_text_1.default, tslib_1.__assign({ size: 2, variation: "gray" }, { children: caption })), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, monotype: monotype, lineHeight: lineHeight, scale: scale }, { children: title }))] }) })) }))] }));
});
exports.default = exports.Tooltip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDBDQUl3QjtBQUN4QixnRkFBdUM7QUFFdkMsNkVBQThDO0FBQzlDLHNGQUF1RDtBQUN2RCxtRkFBb0Q7QUFDcEQscURBQWlEO0FBZ0JqRCxJQUFNLGtCQUFrQixHQUFHLElBQUEsMkJBQU0sRUFBQyxpQkFBYSxDQUFDLENBQTBCLFVBQUMsRUFBMEM7UUFBeEMsS0FBSyxXQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBWSxFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3pILE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1FBQzVDLGVBQWUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3pELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDckMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87UUFFbEMsVUFBVSxFQUFFLDJCQUEyQjtRQUN2QyxPQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2hCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsV0FBVztTQUNsQixFQUNBLEtBQUssQ0FDUjtRQUNELFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNoQixFQUNELFVBQVUsQ0FDYjtRQUNELGVBQWUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRixDQUFDO0FBM0J3SCxDQTJCeEgsQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDckMsVUFBQyxFQUE2RixFQUFFLEdBQUc7SUFBaEcsSUFBQSxRQUFRLGNBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBWSxFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBLEVBQUssS0FBSyxzQkFBM0YsaUZBQTZGLENBQUY7SUFDMUYsSUFBTSxPQUFPLEdBQUcsSUFBQSx5QkFBZSxFQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFbkQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTywyREFBRyxRQUFRLEdBQUksQ0FBQztLQUN4QjtJQUVELE9BQU8sQ0FDTCw2REFDRSx1QkFBQywwQkFBZ0IsdUJBQUssT0FBTyxJQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxJQUFNLFFBQVEsQ0FBQyxLQUFLLGNBQ2pFLFVBQUMsY0FBYyxJQUFLLE9BQUEsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLEVBQTVDLENBQTRDLElBQ2hELEVBQ25CLHVCQUFDLGtCQUFrQix1QkFBSyxPQUFPLEVBQU0sS0FBSyxjQUN4QyxpREFBSyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxnQkFDeEQsd0JBQUMscUJBQVUsZUFDVCx1QkFBQyxzQkFBVyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUNuQyxPQUFPLElBQ0ksRUFDZCx1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxnQkFDeEUsS0FBSyxJQUNHLElBQ0EsSUFDVCxJQUNhLElBQ3BCLENBQ0osQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsa0JBQWUsZUFBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFRvb2x0aXAgYXMgUmVha2l0VG9vbHRpcCxcbiAgVG9vbHRpcFJlZmVyZW5jZSxcbiAgdXNlVG9vbHRpcFN0YXRlLFxufSBmcm9tICdyZWFraXQvVG9vbHRpcCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBDYXB0aW9uVGV4dCBmcm9tICcuLi9jYXB0aW9uLXRleHQvY2FwdGlvbi10ZXh0JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCB7bWF0Y2hTaXplfSBmcm9tIFwiLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZVwiO1xuXG50eXBlIFJlZiA9IEhUTUxEaXZFbGVtZW50O1xuXG50eXBlIFN0eWxlZFJlYWN0VG9vbHRpcFByb3BzID0ge1xuICAgIGxpbmVIZWlnaHQ/OiAneHMnIHwgJ3NtJztcbiAgICBzY2FsZT86ICd4cycgfCAnc20nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHRpdGxlPzogSlNYLkVsZW1lbnQgfCBzdHJpbmcgfCBudWxsO1xuICBjYXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiAmIGFueTtcbiAgbW9ub3R5cGU/OiBib29sZWFuO1xuICBsaW1pdFdpZHRoPzogYm9vbGVhbjtcbn1cbmNvbnN0IFN0eWxlZFJlYWN0VG9vbHRpcCA9IHN0eWxlZChSZWFraXRUb29sdGlwKTxTdHlsZWRSZWFjdFRvb2x0aXBQcm9wcz4oKHsgdGhlbWUsIGxpbmVIZWlnaHQgPSAnc20nLCBzY2FsZSA9ICdzbScgfSkgPT4gKHtcbiAgekluZGV4OiB0aGVtZS56SW5kZXgudG9vbHRpcCxcbiAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFByaW1hcnksXG4gIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgcGFkZGluZzogdGhlbWUucGFkZGluZ1syXSxcbiAgYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3cudG9vbHRpcCxcblxuICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCcsXG4gIG9wYWNpdHk6IDAsXG4gIGZvbnRTaXplOiBtYXRjaFNpemUoXG4gICAgIHtcbiAgICAgICAgIHNtOiAnMS4zcmVtJyxcbiAgICAgICAgIHhzOiAnMC44MTI1cmVtJyxcbiAgICAgfSxcbiAgICAgIHNjYWxlXG4gICksXG4gIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgeHM6ICcxLjI1cmVtJyxcbiAgICAgIH0sXG4gICAgICBsaW5lSGVpZ2h0XG4gICksXG4gICcmW2RhdGEtZW50ZXJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFRvb2x0aXBQcm9wcyAmIFN0eWxlZFJlYWN0VG9vbHRpcFByb3BzPihcbiAgKHsgY2hpbGRyZW4sIGxpbWl0V2lkdGgsIHRpdGxlLCBjYXB0aW9uLCBtb25vdHlwZSwgbGluZUhlaWdodCA9ICdzbScsIHNjYWxlID0gJ3NtJywgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHVzZVRvb2x0aXBTdGF0ZSh7IGFuaW1hdGVkOiAyNTAgfSk7XG5cbiAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlID09IG51bGwpIHtcbiAgICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUb29sdGlwUmVmZXJlbmNlIHsuLi50b29sdGlwfSByZWY9e2NoaWxkcmVuLnJlZn0gey4uLmNoaWxkcmVuLnByb3BzfT5cbiAgICAgICAgICB7KHJlZmVyZW5jZVByb3BzKSA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHJlZmVyZW5jZVByb3BzKX1cbiAgICAgICAgPC9Ub29sdGlwUmVmZXJlbmNlPlxuICAgICAgICA8U3R5bGVkUmVhY3RUb29sdGlwIHsuLi50b29sdGlwfSB7Li4ucHJvcHN9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IGxpbWl0V2lkdGggPyAnNTAwcHgnIDogdW5kZWZpbmVkIH19PlxuICAgICAgICAgICAgPEZsZXhDb2x1bW4+XG4gICAgICAgICAgICAgIDxDYXB0aW9uVGV4dCBzaXplPXsyfSB2YXJpYXRpb249XCJncmF5XCI+XG4gICAgICAgICAgICAgICAge2NhcHRpb259XG4gICAgICAgICAgICAgIDwvQ2FwdGlvblRleHQ+XG4gICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSBtb25vdHlwZT17bW9ub3R5cGV9IGxpbmVIZWlnaHQ9e2xpbmVIZWlnaHR9IHNjYWxlPXtzY2FsZX0+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgPC9GbGV4Q29sdW1uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1N0eWxlZFJlYWN0VG9vbHRpcD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0=