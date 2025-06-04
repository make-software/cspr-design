"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgIcon = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var react_inlinesvg_1 = tslib_1.__importDefault(require("react-inlinesvg"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var Container = (0, styled_components_1.default)('div').withConfig({
    shouldForwardProp: function (prop, defaultValidatorFn) {
        return !['rotate'].includes(prop) && defaultValidatorFn(prop);
    },
})(function (_a) {
    var theme = _a.theme, size = _a.size, width = _a.width, height = _a.height, color = _a.color, active = _a.active, rotate = _a.rotate, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    return ({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: width != null ? width : size,
        height: height != null ? height : size,
        color: color || 'inherit',
        svg: {
            display: 'block',
            fill: 'currentColor',
            color: color || 'inherit',
            width: width != null ? width : size,
            height: height != null ? height : size,
        },
        transform: rotate ? 'rotateX(180deg)' : 'rotateX(0deg)',
        transition: 'transform 500ms ease',
        marginLeft: marginLeft ? 8 : 'initial',
        marginRight: marginRight ? 8 : 'initial',
    });
});
var StyledReactSVG = (0, styled_components_1.default)(react_inlinesvg_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
    });
});
exports.SvgIcon = react_1.default.forwardRef(function (_a, ref) {
    var src = _a.src, alt = _a.alt, _b = _a.size, size = _b === void 0 ? 16 : _b, color = _a.color, onClick = _a.onClick, _c = _a.rotate, rotate = _c === void 0 ? false : _c, props = tslib_1.__rest(_a, ["src", "alt", "size", "color", "onClick", "rotate"]);
    var handleClick = function (ev) {
        onClick && onClick(ev);
    };
    var preProcessor = function (code) { return code; };
    // false ? code.replace(/fill=".*?"/g, 'fill="currentColor"') : code;
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, role: "img", "aria-label": alt, size: size, color: color, rotate: rotate, onClick: handleClick }, props, { children: (0, jsx_runtime_1.jsx)(StyledReactSVG, { src: src, preProcessor: preProcessor, title: alt, "aria-hidden": "true", cacheRequests: true }) })));
});
exports.default = exports.SvgIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc3ZnLWljb24vc3ZnLWljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDRFQUF1QztBQUN2QyxnRkFBdUM7QUF1QnZDLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDekMsaUJBQWlCLEVBQUUsVUFBQyxJQUFJLEVBQUUsa0JBQWtCO1FBQzFDLE9BQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFBdEQsQ0FBc0Q7Q0FDekQsQ0FBQyxDQVVBLFVBQUMsRUFVQTtRQVRDLEtBQUssV0FBQSxFQUNMLElBQUksVUFBQSxFQUNKLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixXQUFXLGlCQUFBO0lBQ1AsT0FBQSxDQUFDO1FBQ0wsT0FBTyxFQUFFLGNBQWM7UUFDdkIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3RDLEtBQUssRUFBRSxLQUFLLElBQUksU0FBUztRQUN6QixHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsS0FBSyxJQUFJLFNBQVM7WUFDekIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDdkQsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDdEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ3pDLENBQUM7QUFqQkksQ0FpQkosQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHlCQUFRLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEQsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQztBQUZxRCxDQUVyRCxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8sR0FBRyxlQUFLLENBQUMsVUFBVSxDQUNyQyxVQUNFLEVBUWUsRUFDZixHQUFHO0lBUkQsSUFBQSxHQUFHLFNBQUEsRUFDSCxHQUFHLFNBQUEsRUFDSCxZQUFTLEVBQVQsSUFBSSxtQkFBRyxFQUFFLEtBQUEsRUFDVCxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDWCxLQUFLLHNCQVBWLG9EQVFDLENBRFM7SUFJVixJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQU87UUFDMUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFFRixJQUFNLFlBQVksR0FBRyxVQUFDLElBQVksSUFBYSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7SUFDcEQscUVBQXFFO0lBRXJFLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsSUFBSSxFQUFFLEtBQUssZ0JBQ0MsR0FBRyxFQUNmLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLE9BQU8sRUFBRSxXQUFXLElBQ2hCLEtBQUssY0FFVCx1QkFBQyxjQUFjLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFHLGlCQUFjLE1BQU0sRUFBQyxhQUFhLFNBQUcsSUFDM0YsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0U1ZHIGZyb20gJ3JlYWN0LWlubGluZXN2Zyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBSZWYgPSBIVE1MRGl2RWxlbWVudDtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFN2Z0ljb25Qcm9wcyBleHRlbmRzIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPFJlZj4ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgc2l6ZT86IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIGFsdD86IHN0cmluZztcbiAgb25DbGljaz86IChldjogYW55KSA9PiB2b2lkO1xuICBvbk1vdXNlRG93bj86IChldjogYW55KSA9PiB2b2lkO1xuICBjb2xvcj86IHN0cmluZztcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgcm90YXRlPzogYm9vbGVhbjtcbiAgbWFyZ2luTGVmdD86IGJvb2xlYW47XG4gIG1hcmdpblJpZ2h0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKS53aXRoQ29uZmlnKHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wLCBkZWZhdWx0VmFsaWRhdG9yRm4pID0+XG4gICAgIVsncm90YXRlJ10uaW5jbHVkZXMocHJvcCkgJiYgZGVmYXVsdFZhbGlkYXRvckZuKHByb3ApLFxufSk8e1xuICBzaXplOiBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICByb3RhdGU/OiBib29sZWFuO1xuICBtYXJnaW5MZWZ0PzogYm9vbGVhbjtcbiAgbWFyZ2luUmlnaHQ/OiBib29sZWFuO1xufT4oXG4gICh7XG4gICAgdGhlbWUsXG4gICAgc2l6ZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgY29sb3IsXG4gICAgYWN0aXZlLFxuICAgIHJvdGF0ZSxcbiAgICBtYXJnaW5MZWZ0LFxuICAgIG1hcmdpblJpZ2h0LFxuICB9KSA9PiAoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIHdpZHRoOiB3aWR0aCAhPSBudWxsID8gd2lkdGggOiBzaXplLFxuICAgIGhlaWdodDogaGVpZ2h0ICE9IG51bGwgPyBoZWlnaHQgOiBzaXplLFxuICAgIGNvbG9yOiBjb2xvciB8fCAnaW5oZXJpdCcsXG4gICAgc3ZnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBjb2xvcjogY29sb3IgfHwgJ2luaGVyaXQnLFxuICAgICAgd2lkdGg6IHdpZHRoICE9IG51bGwgPyB3aWR0aCA6IHNpemUsXG4gICAgICBoZWlnaHQ6IGhlaWdodCAhPSBudWxsID8gaGVpZ2h0IDogc2l6ZSxcbiAgICB9LFxuICAgIHRyYW5zZm9ybTogcm90YXRlID8gJ3JvdGF0ZVgoMTgwZGVnKScgOiAncm90YXRlWCgwZGVnKScsXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA1MDBtcyBlYXNlJyxcbiAgICBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0ID8gOCA6ICdpbml0aWFsJyxcbiAgICBtYXJnaW5SaWdodDogbWFyZ2luUmlnaHQgPyA4IDogJ2luaXRpYWwnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkUmVhY3RTVkcgPSBzdHlsZWQoUmVhY3RTVkcpKCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4Jyxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IFN2Z0ljb24gPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgU3ZnSWNvblByb3BzPihcbiAgKFxuICAgIHtcbiAgICAgIHNyYyxcbiAgICAgIGFsdCxcbiAgICAgIHNpemUgPSAxNixcbiAgICAgIGNvbG9yLFxuICAgICAgb25DbGljayxcbiAgICAgIHJvdGF0ZSA9IGZhbHNlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9OiBTdmdJY29uUHJvcHMsXG4gICAgcmVmXG4gICkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2OiBhbnkpID0+IHtcbiAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhldik7XG4gICAgfTtcblxuICAgIGNvbnN0IHByZVByb2Nlc3NvciA9IChjb2RlOiBzdHJpbmcpOiBzdHJpbmcgPT4gY29kZTtcbiAgICAvLyBmYWxzZSA/IGNvZGUucmVwbGFjZSgvZmlsbD1cIi4qP1wiL2csICdmaWxsPVwiY3VycmVudENvbG9yXCInKSA6IGNvZGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lclxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgcm9sZT17XCJpbWdcIn1cbiAgICAgICAgYXJpYS1sYWJlbD17YWx0fVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHJvdGF0ZT17cm90YXRlfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8U3R5bGVkUmVhY3RTVkcgc3JjPXtzcmN9IHByZVByb2Nlc3Nvcj17cHJlUHJvY2Vzc29yfSB0aXRsZT17YWx0fSBhcmlhLWhpZGRlbj1cInRydWVcIiBjYWNoZVJlcXVlc3RzIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdJY29uO1xuIl19