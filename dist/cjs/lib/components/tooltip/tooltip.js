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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDBDQUl3QjtBQUN4QixnRkFBdUM7QUFFdkMsNkVBQThDO0FBQzlDLHNGQUF1RDtBQUN2RCxtRkFBb0Q7QUFDcEQscURBQWlEO0FBZ0JqRCxJQUFNLGtCQUFrQixHQUFHLElBQUEsMkJBQU0sRUFBQyxpQkFBYSxDQUFDLENBQTBCLFVBQUMsRUFBMEM7UUFBeEMsS0FBSyxXQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBWSxFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3pILE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1FBQzVDLGVBQWUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3pELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDckMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87UUFFbEMsVUFBVSxFQUFFLDJCQUEyQjtRQUN2QyxPQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2hCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsV0FBVztTQUNsQixFQUNBLEtBQUssQ0FDUjtRQUNELFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNoQixFQUNELFVBQVUsQ0FDYjtRQUNELGVBQWUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRixDQUFDO0FBM0J3SCxDQTJCeEgsQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDckMsVUFBQyxFQUE0RCxFQUFFLEdBQUc7SUFBL0QsSUFBQSxRQUFRLGNBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUssS0FBSyxzQkFBMUQsMERBQTRELENBQUY7SUFDekQsSUFBTSxPQUFPLEdBQUcsSUFBQSx5QkFBZSxFQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFFbkQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTywyREFBRyxRQUFRLEdBQUksQ0FBQztLQUN4QjtJQUVELE9BQU8sQ0FDTCw2REFDRSx1QkFBQywwQkFBZ0IsdUJBQUssT0FBTyxJQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxJQUFNLFFBQVEsQ0FBQyxLQUFLLGNBQ2pFLFVBQUMsY0FBYyxJQUFLLE9BQUEsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLEVBQTVDLENBQTRDLElBQ2hELEVBQ25CLHVCQUFDLGtCQUFrQix1QkFBSyxPQUFPLEVBQU0sS0FBSyxjQUN4QyxpREFBSyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxnQkFDeEQsd0JBQUMscUJBQVUsZUFDVCx1QkFBQyxzQkFBVyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUNuQyxPQUFPLElBQ0ksRUFDZCx1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLGdCQUNsQyxLQUFLLElBQ0csSUFDQSxJQUNULElBQ2EsSUFDcEIsQ0FDSixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVG9vbHRpcCBhcyBSZWFraXRUb29sdGlwLFxuICBUb29sdGlwUmVmZXJlbmNlLFxuICB1c2VUb29sdGlwU3RhdGUsXG59IGZyb20gJ3JlYWtpdC9Ub29sdGlwJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IENhcHRpb25UZXh0IGZyb20gJy4uL2NhcHRpb24tdGV4dC9jYXB0aW9uLXRleHQnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IHttYXRjaFNpemV9IGZyb20gXCIuLi8uLi91dGlscy9tYXRjaC1zaXplXCI7XG5cbnR5cGUgUmVmID0gSFRNTERpdkVsZW1lbnQ7XG5cbnR5cGUgU3R5bGVkUmVhY3RUb29sdGlwUHJvcHMgPSB7XG4gICAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xuICAgIHNjYWxlPzogJ3hzJyB8ICdzbSc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9vbHRpcFByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgdGl0bGU/OiBKU1guRWxlbWVudCB8IHN0cmluZyB8IG51bGw7XG4gIGNhcHRpb24/OiBzdHJpbmcgfCBudWxsO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+ICYgYW55O1xuICBtb25vdHlwZT86IGJvb2xlYW47XG4gIGxpbWl0V2lkdGg/OiBib29sZWFuO1xufVxuY29uc3QgU3R5bGVkUmVhY3RUb29sdGlwID0gc3R5bGVkKFJlYWtpdFRvb2x0aXApPFN0eWxlZFJlYWN0VG9vbHRpcFByb3BzPigoeyB0aGVtZSwgbGluZUhlaWdodCA9ICdzbScsIHNjYWxlID0gJ3NtJyB9KSA9PiAoe1xuICB6SW5kZXg6IHRoZW1lLnpJbmRleC50b29sdGlwLFxuICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICBwYWRkaW5nOiB0aGVtZS5wYWRkaW5nWzJdLFxuICBib3hTaGFkb3c6IHRoZW1lLmJveFNoYWRvdy50b29sdGlwLFxuXG4gIHRyYW5zaXRpb246ICdvcGFjaXR5IDI1MG1zIGVhc2UtaW4tb3V0JyxcbiAgb3BhY2l0eTogMCxcbiAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAge1xuICAgICAgICAgc206ICcxLjNyZW0nLFxuICAgICAgICAgeHM6ICcwLjgxMjVyZW0nLFxuICAgICB9LFxuICAgICAgc2NhbGVcbiAgKSxcbiAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAgIHNtOiAnMS41cmVtJyxcbiAgICAgICAgICB4czogJzEuMjVyZW0nLFxuICAgICAgfSxcbiAgICAgIGxpbmVIZWlnaHRcbiAgKSxcbiAgJyZbZGF0YS1lbnRlcl0nOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgVG9vbHRpcFByb3BzICYgU3R5bGVkUmVhY3RUb29sdGlwUHJvcHM+KFxuICAoeyBjaGlsZHJlbiwgbGltaXRXaWR0aCwgdGl0bGUsIGNhcHRpb24sIG1vbm90eXBlLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCB0b29sdGlwID0gdXNlVG9vbHRpcFN0YXRlKHsgYW5pbWF0ZWQ6IDI1MCB9KTtcblxuICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFRvb2x0aXBSZWZlcmVuY2Ugey4uLnRvb2x0aXB9IHJlZj17Y2hpbGRyZW4ucmVmfSB7Li4uY2hpbGRyZW4ucHJvcHN9PlxuICAgICAgICAgIHsocmVmZXJlbmNlUHJvcHMpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgcmVmZXJlbmNlUHJvcHMpfVxuICAgICAgICA8L1Rvb2x0aXBSZWZlcmVuY2U+XG4gICAgICAgIDxTdHlsZWRSZWFjdFRvb2x0aXAgey4uLnRvb2x0aXB9IHsuLi5wcm9wc30+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogbGltaXRXaWR0aCA/ICc1MDBweCcgOiB1bmRlZmluZWQgfX0+XG4gICAgICAgICAgICA8RmxleENvbHVtbj5cbiAgICAgICAgICAgICAgPENhcHRpb25UZXh0IHNpemU9ezJ9IHZhcmlhdGlvbj1cImdyYXlcIj5cbiAgICAgICAgICAgICAgICB7Y2FwdGlvbn1cbiAgICAgICAgICAgICAgPC9DYXB0aW9uVGV4dD5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9IG1vbm90eXBlPXttb25vdHlwZX0+XG4gICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgPC9GbGV4Q29sdW1uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1N0eWxlZFJlYWN0VG9vbHRpcD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXX0=