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
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 3 : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c;
    return ({
        fontWeight: (0, match_size_1.matchSize)({
            1: theme.typography.fontWeight.semiBold,
            2: theme.typography.fontWeight.medium,
            3: theme.typography.fontWeight.regular,
        }, size),
        fontSize: (0, match_size_1.matchSize)({
            lg: '1.125rem',
            md: '1rem',
            sm: '0.875rem',
            xs: '0.813rem',
        }, scale),
        lineHeight: '1.5rem',
    });
});
exports.BodyText = react_1.default.forwardRef(function BodyText(props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.BodyText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2JvZHktdGV4dC9ib2R5LXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBVS9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUFpQztRQUEvQixLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEMsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztTQUN2QyxFQUNELElBQUksQ0FDTDtRQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0UsRUFBRSxFQUFFLFVBQVU7WUFDZCxFQUFFLEVBQUUsTUFBTTtZQUNWLEVBQUUsRUFBRSxVQUFVO1lBQ2QsRUFBRSxFQUFFLFVBQVU7U0FDZixFQUNELEtBQUssQ0FDTjtRQUNELFVBQVUsRUFBRSxRQUFRO0tBQ3JCLENBQUM7QUFuQnFDLENBbUJyQyxDQUNILENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFxQixTQUFTLFFBQVEsQ0FDNUUsS0FBb0IsRUFDcEIsR0FBRztJQUVILE9BQU8sdUJBQUMsVUFBVSxxQkFBQyxHQUFHLEVBQUUsR0FBRyxJQUFNLEtBQUssRUFBSSxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsZ0JBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XHJcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XHJcblxyXG50eXBlIFJlZiA9IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJvZHlUZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xyXG4gIHNpemU6IDEgfCAyIHwgMztcclxuICBzY2FsZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZyc7XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8Qm9keVRleHRQcm9wcz4oXHJcbiAgKHsgdGhlbWUsIHNpemUgPSAzLCBzY2FsZSA9ICdzbScgfSkgPT4gKHtcclxuICAgIGZvbnRXZWlnaHQ6IG1hdGNoU2l6ZShcclxuICAgICAge1xyXG4gICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcclxuICAgICAgICAyOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxyXG4gICAgICAgIDM6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplXHJcbiAgICApLFxyXG4gICAgZm9udFNpemU6IG1hdGNoU2l6ZShcclxuICAgICAge1xyXG4gICAgICAgIGxnOiAnMS4xMjVyZW0nLFxyXG4gICAgICAgIG1kOiAnMXJlbScsXHJcbiAgICAgICAgc206ICcwLjg3NXJlbScsXHJcbiAgICAgICAgeHM6ICcwLjgxM3JlbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlXHJcbiAgICApLFxyXG4gICAgbGluZUhlaWdodDogJzEuNXJlbScsXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBCb2R5VGV4dCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBCb2R5VGV4dFByb3BzPihmdW5jdGlvbiBCb2R5VGV4dChcclxuICBwcm9wczogQm9keVRleHRQcm9wcyxcclxuICByZWZcclxuKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRUZXh0IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvZHlUZXh0O1xyXG4iXX0=