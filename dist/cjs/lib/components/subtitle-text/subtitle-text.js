"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtitleText = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var text_1 = tslib_1.__importDefault(require("../text/text"));
var StyledText = (0, styled_components_1.default)(text_1.default)(function (_a) {
    var theme = _a.theme, size = _a.size, _b = _a.scale, scale = _b === void 0 ? 'md' : _b, _c = _a.monotype, monotype = _c === void 0 ? false : _c;
    return ({
        fontWeight: monotype
            ? theme.typography.fontWeight.regular
            : (0, match_size_1.matchSize)({
                1: theme.typography.fontWeight.semiBold,
                2: theme.typography.fontWeight.regular,
                3: theme.typography.fontWeight.light,
            }, size),
        fontSize: (0, match_size_1.matchSize)({
            lg: '1.5rem',
            md: '1.25rem',
        }, scale),
        lineHeight: '2rem',
    });
});
exports.SubtitleText = react_1.default.forwardRef(function (props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.SubtitleText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidGl0bGUtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBVS9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUErQztRQUE3QyxLQUFLLFdBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUEsRUFBRSxnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDcEQsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDckMsQ0FBQyxDQUFDLElBQUEsc0JBQVMsRUFDUDtnQkFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87Z0JBQ3RDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLO2FBQ3JDLEVBQ0QsSUFBSSxDQUNMO1FBQ0wsUUFBUSxFQUFFLElBQUEsc0JBQVMsRUFDakI7WUFDRSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxLQUFLLENBQ047UUFDRCxVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0FBbkJtRCxDQW1CbkQsQ0FDSCxDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDMUMsVUFBQyxLQUF3QixFQUFFLEdBQUc7SUFDNUIsT0FBTyx1QkFBQyxVQUFVLHFCQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLENBQUM7QUFDN0MsQ0FBQyxDQUNGLENBQUM7QUFFRixrQkFBZSxvQkFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCBUZXh0LCB7IFRleHRQcm9wcyB9IGZyb20gJy4uL3RleHQvdGV4dCc7XG5cbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3VidGl0bGVUZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xuICBzaXplOiAxIHwgMiB8IDM7XG4gIHNjYWxlPzogJ21kJyB8ICdsZyc7XG59XG5cbmNvbnN0IFN0eWxlZFRleHQgPSBzdHlsZWQoVGV4dCk8U3VidGl0bGVUZXh0UHJvcHM+KFxuICAoeyB0aGVtZSwgc2l6ZSwgc2NhbGUgPSAnbWQnLCBtb25vdHlwZSA9IGZhbHNlIH0pID0+ICh7XG4gICAgZm9udFdlaWdodDogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXJcbiAgICAgIDogbWF0Y2hTaXplKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyLFxuICAgICAgICAgICAgMzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmxpZ2h0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZVxuICAgICAgICApLFxuICAgIGZvbnRTaXplOiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIGxnOiAnMS41cmVtJyxcbiAgICAgICAgbWQ6ICcxLjI1cmVtJyxcbiAgICAgIH0sXG4gICAgICBzY2FsZVxuICAgICksXG4gICAgbGluZUhlaWdodDogJzJyZW0nLFxuICB9KVxuKTtcblxuZXhwb3J0IGNvbnN0IFN1YnRpdGxlVGV4dCA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBTdWJ0aXRsZVRleHRQcm9wcz4oXG4gIChwcm9wczogU3VidGl0bGVUZXh0UHJvcHMsIHJlZikgPT4ge1xuICAgIHJldHVybiA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3VidGl0bGVUZXh0O1xuIl19