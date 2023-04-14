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
    var theme = _a.theme, size = _a.size, _b = _a.monotype, monotype = _b === void 0 ? false : _b;
    return ({
        fontWeight: monotype
            ? theme.typography.fontWeight.regular
            : (0, match_size_1.matchSize)({
                1: theme.typography.fontWeight.semiBold,
                2: theme.typography.fontWeight.regular,
                3: theme.typography.fontWeight.light,
            }, size),
        fontSize: theme.scale('1.4rem', theme.rootFontSize),
        lineHeight: theme.scale('2.0rem', theme.rootFontSize),
    });
});
exports.SubtitleText = react_1.default.forwardRef(function (props, ref) {
    return (0, jsx_runtime_1.jsx)(StyledText, tslib_1.__assign({ ref: ref }, props));
});
exports.default = exports.SubtitleText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidGl0bGUtdGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zdWJ0aXRsZS10ZXh0L3N1YnRpdGxlLXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBUy9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUFpQztRQUEvQixLQUFLLFdBQUEsRUFBRSxJQUFJLFVBQUEsRUFBRSxnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEMsVUFBVSxFQUFFLFFBQVE7WUFDbEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDckMsQ0FBQyxDQUFDLElBQUEsc0JBQVMsRUFDUDtnQkFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtnQkFDdkMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU87Z0JBQ3RDLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLO2FBQ3JDLEVBQ0QsSUFBSSxDQUNMO1FBQ0wsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDbkQsVUFBVSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUM7S0FDdEQsQ0FBQztBQWJxQyxDQWFyQyxDQUNILENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxlQUFLLENBQUMsVUFBVSxDQUMxQyxVQUFDLEtBQXdCLEVBQUUsR0FBRztJQUM1QixPQUFPLHVCQUFDLFVBQVUscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM3QyxDQUFDLENBQ0YsQ0FBQztBQUVGLGtCQUFlLG9CQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcblxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBTdWJ0aXRsZVRleHRQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XG4gIHNpemU6IDEgfCAyIHwgMztcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxTdWJ0aXRsZVRleHRQcm9wcz4oXG4gICh7IHRoZW1lLCBzaXplLCBtb25vdHlwZSA9IGZhbHNlIH0pID0+ICh7XG4gICAgZm9udFdlaWdodDogbW9ub3R5cGVcbiAgICAgID8gdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LnJlZ3VsYXJcbiAgICAgIDogbWF0Y2hTaXplKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDE6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pQm9sZCxcbiAgICAgICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyLFxuICAgICAgICAgICAgMzogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0LmxpZ2h0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZVxuICAgICAgICApLFxuICAgIGZvbnRTaXplOiB0aGVtZS5zY2FsZSgnMS40cmVtJywgdGhlbWUucm9vdEZvbnRTaXplKSxcbiAgICBsaW5lSGVpZ2h0OiB0aGVtZS5zY2FsZSgnMi4wcmVtJywgdGhlbWUucm9vdEZvbnRTaXplKSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBTdWJ0aXRsZVRleHQgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgU3VidGl0bGVUZXh0UHJvcHM+KFxuICAocHJvcHM6IFN1YnRpdGxlVGV4dFByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN1YnRpdGxlVGV4dDtcbiJdfQ==