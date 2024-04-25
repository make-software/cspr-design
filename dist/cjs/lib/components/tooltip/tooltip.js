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
    var theme = _a.theme, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c, _d = _a.paddingScale, paddingScale = _d === void 0 ? 2 : _d;
    return ({
        zIndex: theme.zIndex.tooltip,
        color: theme.styleguideColors.contentPrimary,
        backgroundColor: theme.styleguideColors.backgroundPrimary,
        borderRadius: theme.borderRadius.base,
        padding: theme.padding[paddingScale],
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
    var children = _a.children, limitWidth = _a.limitWidth, title = _a.title, caption = _a.caption, monotype = _a.monotype, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c, _d = _a.paddingScale, paddingScale = _d === void 0 ? 2 : _d, props = tslib_1.__rest(_a, ["children", "limitWidth", "title", "caption", "monotype", "lineHeight", "scale", "paddingScale"]);
    var tooltip = (0, Tooltip_1.useTooltipState)({ animated: 250 });
    var maxWidth = limitWidth
        ? (typeof limitWidth === 'string' ? limitWidth : '500px')
        : undefined;
    if (children == null) {
        return null;
    }
    if (title == null) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.TooltipReference, tslib_1.__assign({}, tooltip, { ref: children.ref }, children.props, { children: function (referenceProps) { return react_1.default.cloneElement(children, referenceProps); } })), (0, jsx_runtime_1.jsx)(StyledReactTooltip, tslib_1.__assign({ paddingScale: paddingScale }, tooltip, props, { children: (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ style: { maxWidth: maxWidth } }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, { children: [(0, jsx_runtime_1.jsx)(caption_text_1.default, tslib_1.__assign({ size: 2, variation: "gray" }, { children: caption })), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, monotype: monotype, lineHeight: lineHeight, scale: scale }, { children: title }))] }) })) }))] }));
});
exports.default = exports.Tooltip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDBDQUl3QjtBQUN4QixnRkFBdUM7QUFFdkMsNkVBQThDO0FBQzlDLHNGQUF1RDtBQUN2RCxtRkFBb0Q7QUFDcEQscURBQWlEO0FBaUJqRCxJQUFNLGtCQUFrQixHQUFHLElBQUEsMkJBQU0sRUFBQyxpQkFBYSxDQUFDLENBQTBCLFVBQUMsRUFBNEQ7UUFBMUQsS0FBSyxXQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBWSxFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBLEVBQUUsb0JBQWdCLEVBQWhCLFlBQVksbUJBQUcsQ0FBQyxLQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNJLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjO1FBQzVDLGVBQWUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3pELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDckMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3BDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU87UUFFbEMsVUFBVSxFQUFFLDJCQUEyQjtRQUN2QyxPQUFPLEVBQUUsQ0FBQztRQUNWLFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2hCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsV0FBVztTQUNsQixFQUNBLEtBQUssQ0FDUjtRQUNELFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNoQixFQUNELFVBQVUsQ0FDYjtRQUNELGVBQWUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRixDQUFDO0FBM0IwSSxDQTJCMUksQ0FBQyxDQUFDO0FBRVMsUUFBQSxPQUFPLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDckMsVUFBQyxFQUErRyxFQUFFLEdBQUc7SUFBbEgsSUFBQSxRQUFRLGNBQUEsRUFBRSxVQUFVLGdCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsa0JBQWlCLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLEVBQUUsYUFBWSxFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBLEVBQUUsb0JBQWdCLEVBQWhCLFlBQVksbUJBQUcsQ0FBQyxLQUFBLEVBQUssS0FBSyxzQkFBN0csaUdBQStHLENBQUY7SUFDNUcsSUFBTSxPQUFPLEdBQUcsSUFBQSx5QkFBZSxFQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkQsSUFBTSxRQUFRLEdBQUcsVUFBVTtRQUN6QixDQUFDLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxTQUFTLENBQUM7SUFFZCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixPQUFPLDJEQUFHLFFBQVEsR0FBSSxDQUFDO0tBQ3hCO0lBRUQsT0FBTyxDQUNMLDZEQUNFLHVCQUFDLDBCQUFnQix1QkFBSyxPQUFPLElBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQU0sUUFBUSxDQUFDLEtBQUssY0FDakUsVUFBQyxjQUFjLElBQUssT0FBQSxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsRUFBNUMsQ0FBNEMsSUFDaEQsRUFDbkIsdUJBQUMsa0JBQWtCLHFCQUFDLFlBQVksRUFBRSxZQUFZLElBQU0sT0FBTyxFQUFNLEtBQUssY0FDcEUsaURBQUssS0FBSyxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsZ0JBQ3RCLHdCQUFDLHFCQUFVLGVBQ1QsdUJBQUMsc0JBQVcscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFDbkMsT0FBTyxJQUNJLEVBQ2QsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssZ0JBQ3hFLEtBQUssSUFDRyxJQUNBLElBQ1QsSUFDYSxJQUNwQixDQUNKLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLGtCQUFlLGVBQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUb29sdGlwIGFzIFJlYWtpdFRvb2x0aXAsXG4gIFRvb2x0aXBSZWZlcmVuY2UsXG4gIHVzZVRvb2x0aXBTdGF0ZSxcbn0gZnJvbSAncmVha2l0L1Rvb2x0aXAnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgQ2FwdGlvblRleHQgZnJvbSAnLi4vY2FwdGlvbi10ZXh0L2NhcHRpb24tdGV4dCc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQge21hdGNoU2l6ZX0gZnJvbSBcIi4uLy4uL3V0aWxzL21hdGNoLXNpemVcIjtcblxudHlwZSBSZWYgPSBIVE1MRGl2RWxlbWVudDtcblxudHlwZSBTdHlsZWRSZWFjdFRvb2x0aXBQcm9wcyA9IHtcbiAgICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XG4gICAgc2NhbGU/OiAneHMnIHwgJ3NtJztcbiAgICBwYWRkaW5nU2NhbGU/OiAxIHwgMjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb29sdGlwUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB0aXRsZT86IEpTWC5FbGVtZW50IHwgc3RyaW5nIHwgbnVsbDtcbiAgY2FwdGlvbj86IHN0cmluZyB8IG51bGw7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4gJiBhbnk7XG4gIG1vbm90eXBlPzogYm9vbGVhbjtcbiAgbGltaXRXaWR0aD86IGJvb2xlYW4gfCBzdHJpbmc7XG59XG5jb25zdCBTdHlsZWRSZWFjdFRvb2x0aXAgPSBzdHlsZWQoUmVha2l0VG9vbHRpcCk8U3R5bGVkUmVhY3RUb29sdGlwUHJvcHM+KCh7IHRoZW1lLCBsaW5lSGVpZ2h0ID0gJ3NtJywgc2NhbGUgPSAnc20nLCBwYWRkaW5nU2NhbGUgPSAyIH0pID0+ICh7XG4gIHpJbmRleDogdGhlbWUuekluZGV4LnRvb2x0aXAsXG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxuICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gIHBhZGRpbmc6IHRoZW1lLnBhZGRpbmdbcGFkZGluZ1NjYWxlXSxcbiAgYm94U2hhZG93OiB0aGVtZS5ib3hTaGFkb3cudG9vbHRpcCxcblxuICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAyNTBtcyBlYXNlLWluLW91dCcsXG4gIG9wYWNpdHk6IDAsXG4gIGZvbnRTaXplOiBtYXRjaFNpemUoXG4gICAgIHtcbiAgICAgICAgIHNtOiAnMS4zcmVtJyxcbiAgICAgICAgIHhzOiAnMC44MTI1cmVtJyxcbiAgICAgfSxcbiAgICAgIHNjYWxlXG4gICksXG4gIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgeHM6ICcxLjI1cmVtJyxcbiAgICAgIH0sXG4gICAgICBsaW5lSGVpZ2h0XG4gICksXG4gICcmW2RhdGEtZW50ZXJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFRvb2x0aXBQcm9wcyAmIFN0eWxlZFJlYWN0VG9vbHRpcFByb3BzPihcbiAgKHsgY2hpbGRyZW4sIGxpbWl0V2lkdGgsIHRpdGxlLCBjYXB0aW9uLCBtb25vdHlwZSwgbGluZUhlaWdodCA9ICdzbScsIHNjYWxlID0gJ3NtJywgcGFkZGluZ1NjYWxlID0gMiwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHVzZVRvb2x0aXBTdGF0ZSh7IGFuaW1hdGVkOiAyNTAgfSk7XG4gICAgY29uc3QgbWF4V2lkdGggPSBsaW1pdFdpZHRoIFxuICAgICAgPyAodHlwZW9mIGxpbWl0V2lkdGggPT09ICdzdHJpbmcnID8gbGltaXRXaWR0aCA6ICc1MDBweCcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFRvb2x0aXBSZWZlcmVuY2Ugey4uLnRvb2x0aXB9IHJlZj17Y2hpbGRyZW4ucmVmfSB7Li4uY2hpbGRyZW4ucHJvcHN9PlxuICAgICAgICAgIHsocmVmZXJlbmNlUHJvcHMpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgcmVmZXJlbmNlUHJvcHMpfVxuICAgICAgICA8L1Rvb2x0aXBSZWZlcmVuY2U+XG4gICAgICAgIDxTdHlsZWRSZWFjdFRvb2x0aXAgcGFkZGluZ1NjYWxlPXtwYWRkaW5nU2NhbGV9IHsuLi50b29sdGlwfSB7Li4ucHJvcHN9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGggfX0+XG4gICAgICAgICAgICA8RmxleENvbHVtbj5cbiAgICAgICAgICAgICAgPENhcHRpb25UZXh0IHNpemU9ezJ9IHZhcmlhdGlvbj1cImdyYXlcIj5cbiAgICAgICAgICAgICAgICB7Y2FwdGlvbn1cbiAgICAgICAgICAgICAgPC9DYXB0aW9uVGV4dD5cbiAgICAgICAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9IG1vbm90eXBlPXttb25vdHlwZX0gbGluZUhlaWdodD17bGluZUhlaWdodH0gc2NhbGU9e3NjYWxlfT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3R5bGVkUmVhY3RUb29sdGlwPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiJdfQ==