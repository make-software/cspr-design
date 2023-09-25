"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyText = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 3 : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c, _d = _a.lineHeight, lineHeight = _d === void 0 ? 'sm' : _d;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.semiBold,
            2: theme.typography.fontWeight.medium,
            3: theme.typography.fontWeight.regular,
            4: theme.typography.fontWeight.light,
        }, size),
        fontSize: (0, match_size_1.matchSize)({
            xl: '1.25rem',
            lg: '1.125rem',
            md: '1rem',
            sm: '0.875rem',
            xs: '0.813rem',
        }, scale),
        lineHeight: (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight),
    });
});
exports.BodyText = react_1.default.forwardRef(function BodyText(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.BodyText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2JvZHktdGV4dC9ib2R5LXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBVy9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUFvRDtRQUFsRCxLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUN0QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSztTQUNyQyxFQUNELElBQUksQ0FDTDtRQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0UsRUFBRSxFQUFFLFNBQVM7WUFDYixFQUFFLEVBQUUsVUFBVTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsRUFBRSxFQUFFLFVBQVU7WUFDZCxFQUFFLEVBQUUsVUFBVTtTQUNmLEVBQ0QsS0FBSyxDQUNOO1FBQ0QsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxVQUFVLENBQ1g7S0FDRixDQUFDO0FBM0J3RCxDQTJCeEQsQ0FDSCxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBcUIsU0FBUyxRQUFRLENBQzVFLEtBQW9CLEVBQ3BCLEdBQUc7SUFFSCxPQUFPLHVCQUFDLFVBQVUscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLGdCQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xyXG5pbXBvcnQgVGV4dCwgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi90ZXh0L3RleHQnO1xyXG5cclxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBCb2R5VGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcclxuICBzaXplOiAxIHwgMiB8IDMgfCA0O1xyXG4gIHNjYWxlPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCc7XHJcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPEJvZHlUZXh0UHJvcHM+KFxyXG4gICh7IHRoZW1lLCBzaXplID0gMywgc2NhbGUgPSAnc20nLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9KSA9PiAoe1xyXG4gICAgZm9udFdlaWdodDogbWF0Y2hTaXplKFxyXG4gICAgICB7XHJcbiAgICAgICAgMTogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnNlbWlCb2xkLFxyXG4gICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXHJcbiAgICAgICAgMzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXIsXHJcbiAgICAgICAgNDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmxpZ2h0LFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplXHJcbiAgICApLFxyXG4gICAgZm9udFNpemU6IG1hdGNoU2l6ZShcclxuICAgICAge1xyXG4gICAgICAgIHhsOiAnMS4yNXJlbScsXHJcbiAgICAgICAgbGc6ICcxLjEyNXJlbScsXHJcbiAgICAgICAgbWQ6ICcxcmVtJyxcclxuICAgICAgICBzbTogJzAuODc1cmVtJyxcclxuICAgICAgICB4czogJzAuODEzcmVtJyxcclxuICAgICAgfSxcclxuICAgICAgc2NhbGVcclxuICAgICksXHJcbiAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXHJcbiAgICAgIHtcclxuICAgICAgICBzbTogJzEuNXJlbScsXHJcbiAgICAgICAgeHM6ICcxLjI1cmVtJyxcclxuICAgICAgfSxcclxuICAgICAgbGluZUhlaWdodFxyXG4gICAgKSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHlUZXh0ID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIEJvZHlUZXh0UHJvcHM+KGZ1bmN0aW9uIEJvZHlUZXh0KFxyXG4gIHByb3BzOiBCb2R5VGV4dFByb3BzLFxyXG4gIHJlZlxyXG4pIHtcclxuICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9keVRleHQ7XHJcbiJdfQ==