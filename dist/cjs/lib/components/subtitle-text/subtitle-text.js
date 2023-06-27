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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidGl0bGUtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBVS9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUErQztRQUE3QyxLQUFLLFdBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUEsRUFBRSxnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDcEQsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDckMsQ0FBQyxDQUFDLElBQUEsc0JBQVMsRUFDUDtnQkFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87Z0JBQ3RDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLO2FBQ3JDLEVBQ0QsSUFBSSxDQUNMO1FBQ0wsUUFBUSxFQUFFLElBQUEsc0JBQVMsRUFDakI7WUFDRSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxLQUFLLENBQ047UUFDRCxVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0FBbkJtRCxDQW1CbkQsQ0FDSCxDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDMUMsVUFBQyxLQUF3QixFQUFFLEdBQUc7SUFDNUIsT0FBTyx1QkFBQyxVQUFVLHFCQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sS0FBSyxFQUFJLENBQUM7QUFDN0MsQ0FBQyxDQUNGLENBQUM7QUFFRixrQkFBZSxvQkFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaC1zaXplJztcclxuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcclxuXHJcbnR5cGUgUmVmID0gSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VidGl0bGVUZXh0UHJvcHMgZXh0ZW5kcyBUZXh0UHJvcHMge1xyXG4gIHNpemU6IDEgfCAyIHwgMztcclxuICBzY2FsZT86ICdtZCcgfCAnbGcnO1xyXG59XHJcblxyXG5jb25zdCBTdHlsZWRUZXh0ID0gc3R5bGVkKFRleHQpPFN1YnRpdGxlVGV4dFByb3BzPihcclxuICAoeyB0aGVtZSwgc2l6ZSwgc2NhbGUgPSAnbWQnLCBtb25vdHlwZSA9IGZhbHNlIH0pID0+ICh7XHJcbiAgICBmb250V2VpZ2h0OiBtb25vdHlwZVxyXG4gICAgICA/IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyXHJcbiAgICAgIDogbWF0Y2hTaXplKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXHJcbiAgICAgICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyLFxyXG4gICAgICAgICAgICAzOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubGlnaHQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2l6ZVxyXG4gICAgICAgICksXHJcbiAgICBmb250U2l6ZTogbWF0Y2hTaXplKFxyXG4gICAgICB7XHJcbiAgICAgICAgbGc6ICcxLjVyZW0nLFxyXG4gICAgICAgIG1kOiAnMS4yNXJlbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNjYWxlXHJcbiAgICApLFxyXG4gICAgbGluZUhlaWdodDogJzJyZW0nLFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgU3VidGl0bGVUZXh0ID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFN1YnRpdGxlVGV4dFByb3BzPihcclxuICAocHJvcHM6IFN1YnRpdGxlVGV4dFByb3BzLCByZWYpID0+IHtcclxuICAgIHJldHVybiA8U3R5bGVkVGV4dCByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJ0aXRsZVRleHQ7XHJcbiJdfQ==