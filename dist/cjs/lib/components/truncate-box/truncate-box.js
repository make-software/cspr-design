"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruncateBox = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../utils/match-size");
var getSize = function (size) {
    return (0, match_size_1.matchSize)({
        0: 7.8,
        1: 10,
        2: 23,
        3: 35,
        4: 45,
        5: 55,
    }, size);
};
var StyledTruncateBox = (0, styled_components_1.default)('div')(function (_a) {
    var _b = _a.size, size = _b === void 0 ? 2 : _b, lineHeight = _a.lineHeight;
    return ({
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        maxWidth: "".concat(getSize(size), "em"),
        // fix for Tooltip over Truncated Text in Safari
        '&:after': {
            content: "''",
            display: 'block',
        },
        lineHeight: lineHeight ? (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight) : 'unset',
    });
});
exports.TruncateBox = react_1.default.forwardRef(function (props, ref) { return (0, jsx_runtime_1.jsx)(StyledTruncateBox, tslib_1.__assign({ ref: ref }, props)); });
exports.default = exports.TruncateBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUtYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RydW5jYXRlLWJveC90cnVuY2F0ZS1ib3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLGdGQUF1QztBQUd2QyxxREFBbUQ7QUFRbkQsSUFBTSxPQUFPLEdBQUcsVUFBQyxJQUFVO0lBQ3pCLE9BQUEsSUFBQSxzQkFBUyxFQUNMO1FBQ0ksQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO1FBQ0wsQ0FBQyxFQUFFLEVBQUU7UUFDTCxDQUFDLEVBQUUsRUFBRTtRQUNMLENBQUMsRUFBRSxFQUFFO0tBQ1IsRUFDSCxJQUFJLENBQ0w7QUFWRCxDQVVDLENBQUM7QUFFSixJQUFNLGlCQUFpQixHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FDckMsVUFBQyxFQUF3QjtRQUF0QixZQUFRLEVBQVIsSUFBSSxtQkFBRyxDQUFDLEtBQUEsRUFBRSxVQUFVLGdCQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzdCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFlBQVksRUFBRSxVQUFVO1FBQ3hCLEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLFVBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFJO1FBQzlCLGdEQUFnRDtRQUNoRCxTQUFTLEVBQUU7WUFDVCxPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxPQUFPO1NBQ2pCO1FBQ0MsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBQSxzQkFBUyxFQUM5QjtZQUNJLEVBQUUsRUFBRSxRQUFRO1lBQ1osRUFBRSxFQUFFLFNBQVM7U0FDaEIsRUFDRCxVQUFVLENBQ2IsQ0FBQyxDQUFDLENBQUMsT0FBTztLQUNkLENBQUM7QUFuQjRCLENBbUI1QixDQUNILENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUN6QyxVQUFDLEtBQUssRUFBRSxHQUFHLElBQUssT0FBQSx1QkFBQyxpQkFBaUIscUJBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksRUFBMUMsQ0FBMEMsQ0FDM0QsQ0FBQztBQUVGLGtCQUFlLG1CQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJhc2VQcm9wcywgU2l6ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IG1hdGNoU2l6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoLXNpemUnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJ1bmNhdGVCb3hQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIHNpemU/OiBTaXplO1xuICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XG59XG5cbmNvbnN0IGdldFNpemUgPSAoc2l6ZTogU2l6ZSkgPT5cbiAgbWF0Y2hTaXplKFxuICAgICAge1xuICAgICAgICAgIDA6IDcuOCxcbiAgICAgICAgICAxOiAxMCxcbiAgICAgICAgICAyOiAyMyxcbiAgICAgICAgICAzOiAzNSxcbiAgICAgICAgICA0OiA0NSxcbiAgICAgICAgICA1OiA1NSxcbiAgICAgIH0sXG4gICAgc2l6ZVxuICApO1xuXG5jb25zdCBTdHlsZWRUcnVuY2F0ZUJveCA9IHN0eWxlZCgnZGl2Jyk8VHJ1bmNhdGVCb3hQcm9wcz4oXG4gICh7IHNpemUgPSAyLCBsaW5lSGVpZ2h0IH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiBgJHtnZXRTaXplKHNpemUpfWVtYCxcbiAgICAvLyBmaXggZm9yIFRvb2x0aXAgb3ZlciBUcnVuY2F0ZWQgVGV4dCBpbiBTYWZhcmlcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQgPyBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICApIDogJ3Vuc2V0JyxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBUcnVuY2F0ZUJveCA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIFRydW5jYXRlQm94UHJvcHM+KFxuICAocHJvcHMsIHJlZikgPT4gPFN0eWxlZFRydW5jYXRlQm94IHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUcnVuY2F0ZUJveDtcbiJdfQ==