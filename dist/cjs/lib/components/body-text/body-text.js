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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2JvZHktdGV4dC9ib2R5LXRleHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUV2QyxxREFBbUQ7QUFDbkQsOERBQStDO0FBWS9DLElBQU0sVUFBVSxHQUFHLElBQUEsMkJBQU0sRUFBQyxjQUFJLENBQUMsQ0FDN0IsVUFBQyxFQUFvRDtRQUFsRCxLQUFLLFdBQUEsRUFBRSxZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDekQsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUN2QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTTtZQUNyQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUN0QyxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSztTQUNyQyxFQUNELElBQUksQ0FDTDtRQUNELFFBQVEsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0UsRUFBRSxFQUFFLFNBQVM7WUFDYixFQUFFLEVBQUUsVUFBVTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsRUFBRSxFQUFFLFVBQVU7WUFDZCxFQUFFLEVBQUUsVUFBVTtTQUNmLEVBQ0QsS0FBSyxDQUNOO1FBQ0QsVUFBVSxFQUFFLElBQUEsc0JBQVMsRUFDbkI7WUFDRSxFQUFFLEVBQUUsUUFBUTtZQUNaLEVBQUUsRUFBRSxTQUFTO1NBQ2QsRUFDRCxVQUFVLENBQ1g7S0FDRixDQUFDO0FBM0J3RCxDQTJCeEQsQ0FDSCxDQUFDO0FBRVcsUUFBQSxRQUFRLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FBcUIsU0FBUyxRQUFRLENBQzVFLEtBQW9CLEVBQ3BCLEdBQUc7SUFFSCxPQUFPLHVCQUFDLFVBQVUscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLGdCQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuaW1wb3J0IFRleHQsIHsgVGV4dFByb3BzIH0gZnJvbSAnLi4vdGV4dC90ZXh0JztcblxudHlwZSBSZWYgPSBIVE1MU3BhbkVsZW1lbnQ7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBCb2R5VGV4dFByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcbiAgc2l6ZTogMSB8IDIgfCAzIHwgNDtcbiAgc2NhbGU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJztcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xuICB0YWJJbmRleD86IG51bWJlcjtcbn1cblxuY29uc3QgU3R5bGVkVGV4dCA9IHN0eWxlZChUZXh0KTxCb2R5VGV4dFByb3BzPihcbiAgKHsgdGhlbWUsIHNpemUgPSAzLCBzY2FsZSA9ICdzbScsIGxpbmVIZWlnaHQgPSAnc20nIH0pID0+ICh7XG4gICAgZm9udFdlaWdodDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAxOiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQuc2VtaUJvbGQsXG4gICAgICAgIDI6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5tZWRpdW0sXG4gICAgICAgIDM6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodC5yZWd1bGFyLFxuICAgICAgICA0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubGlnaHQsXG4gICAgICB9LFxuICAgICAgc2l6ZVxuICAgICksXG4gICAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAgIHtcbiAgICAgICAgeGw6ICcxLjI1cmVtJyxcbiAgICAgICAgbGc6ICcxLjEyNXJlbScsXG4gICAgICAgIG1kOiAnMXJlbScsXG4gICAgICAgIHNtOiAnMC44NzVyZW0nLFxuICAgICAgICB4czogJzAuODEzcmVtJyxcbiAgICAgIH0sXG4gICAgICBzY2FsZVxuICAgICksXG4gICAgbGluZUhlaWdodDogbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICB9LFxuICAgICAgbGluZUhlaWdodFxuICAgICksXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgQm9keVRleHQgPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgQm9keVRleHRQcm9wcz4oZnVuY3Rpb24gQm9keVRleHQoXG4gIHByb3BzOiBCb2R5VGV4dFByb3BzLFxuICByZWZcbikge1xuICByZXR1cm4gPFN0eWxlZFRleHQgcmVmPXtyZWZ9IHsuLi5wcm9wc30gLz47XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keVRleHQ7XG4iXX0=