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
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, title: alt, size: size, color: color, rotate: rotate, onClick: handleClick }, props, { children: (0, jsx_runtime_1.jsx)(StyledReactSVG, { src: src, preProcessor: preProcessor, cacheRequests: true }) })));
});
exports.default = exports.SvgIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc3ZnLWljb24vc3ZnLWljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDRFQUF1QztBQUN2QyxnRkFBdUM7QUF1QnZDLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDekMsaUJBQWlCLEVBQUUsVUFBQyxJQUFJLEVBQUUsa0JBQWtCO1FBQzFDLE9BQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFBdEQsQ0FBc0Q7Q0FDekQsQ0FBQyxDQVVBLFVBQUMsRUFVQTtRQVRDLEtBQUssV0FBQSxFQUNMLElBQUksVUFBQSxFQUNKLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixXQUFXLGlCQUFBO0lBQ1AsT0FBQSxDQUFDO1FBQ0wsT0FBTyxFQUFFLGNBQWM7UUFDdkIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3RDLEtBQUssRUFBRSxLQUFLLElBQUksU0FBUztRQUN6QixHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsS0FBSyxJQUFJLFNBQVM7WUFDekIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDdkQsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDdEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ3pDLENBQUM7QUFqQkksQ0FpQkosQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHlCQUFRLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEQsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQztBQUZxRCxDQUVyRCxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8sR0FBRyxlQUFLLENBQUMsVUFBVSxDQUNyQyxVQUNFLEVBUWUsRUFDZixHQUFHO0lBUkQsSUFBQSxHQUFHLFNBQUEsRUFDSCxHQUFHLFNBQUEsRUFDSCxZQUFTLEVBQVQsSUFBSSxtQkFBRyxFQUFFLEtBQUEsRUFDVCxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDWCxLQUFLLHNCQVBWLG9EQVFDLENBRFM7SUFJVixJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQU87UUFDMUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFFRixJQUFNLFlBQVksR0FBRyxVQUFDLElBQVksSUFBYSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7SUFDcEQscUVBQXFFO0lBRXJFLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFFLEdBQUcsRUFDVixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxPQUFPLEVBQUUsV0FBVyxJQUNoQixLQUFLLGNBRVQsdUJBQUMsY0FBYyxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLFNBQUcsSUFDNUQsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUM7QUFFRixrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RTVkcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG50eXBlIFJlZiA9IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvblByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8UmVmPiB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcclxuICBzaXplPzogbnVtYmVyO1xyXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZztcclxuICBzcmM6IHN0cmluZztcclxuICBhbHQ/OiBzdHJpbmc7XHJcbiAgb25DbGljaz86IChldjogYW55KSA9PiB2b2lkO1xyXG4gIG9uTW91c2VEb3duPzogKGV2OiBhbnkpID0+IHZvaWQ7XHJcbiAgY29sb3I/OiBzdHJpbmc7XHJcbiAgdG9vbHRpcD86IHN0cmluZztcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG4gIHJvdGF0ZT86IGJvb2xlYW47XHJcbiAgbWFyZ2luTGVmdD86IGJvb2xlYW47XHJcbiAgbWFyZ2luUmlnaHQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpLndpdGhDb25maWcoe1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCwgZGVmYXVsdFZhbGlkYXRvckZuKSA9PlxyXG4gICAgIVsncm90YXRlJ10uaW5jbHVkZXMocHJvcCkgJiYgZGVmYXVsdFZhbGlkYXRvckZuKHByb3ApLFxyXG59KTx7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcclxuICBjb2xvcj86IHN0cmluZztcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG4gIHJvdGF0ZT86IGJvb2xlYW47XHJcbiAgbWFyZ2luTGVmdD86IGJvb2xlYW47XHJcbiAgbWFyZ2luUmlnaHQ/OiBib29sZWFuO1xyXG59PihcclxuICAoe1xyXG4gICAgdGhlbWUsXHJcbiAgICBzaXplLFxyXG4gICAgd2lkdGgsXHJcbiAgICBoZWlnaHQsXHJcbiAgICBjb2xvcixcclxuICAgIGFjdGl2ZSxcclxuICAgIHJvdGF0ZSxcclxuICAgIG1hcmdpbkxlZnQsXHJcbiAgICBtYXJnaW5SaWdodCxcclxuICB9KSA9PiAoe1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgIHdpZHRoOiB3aWR0aCAhPSBudWxsID8gd2lkdGggOiBzaXplLFxyXG4gICAgaGVpZ2h0OiBoZWlnaHQgIT0gbnVsbCA/IGhlaWdodCA6IHNpemUsXHJcbiAgICBjb2xvcjogY29sb3IgfHwgJ2luaGVyaXQnLFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxyXG4gICAgICBjb2xvcjogY29sb3IgfHwgJ2luaGVyaXQnLFxyXG4gICAgICB3aWR0aDogd2lkdGggIT0gbnVsbCA/IHdpZHRoIDogc2l6ZSxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQgIT0gbnVsbCA/IGhlaWdodCA6IHNpemUsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUgPyAncm90YXRlWCgxODBkZWcpJyA6ICdyb3RhdGVYKDBkZWcpJyxcclxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNTAwbXMgZWFzZScsXHJcbiAgICBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0ID8gOCA6ICdpbml0aWFsJyxcclxuICAgIG1hcmdpblJpZ2h0OiBtYXJnaW5SaWdodCA/IDggOiAnaW5pdGlhbCcsXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IFN0eWxlZFJlYWN0U1ZHID0gc3R5bGVkKFJlYWN0U1ZHKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN2Z0ljb24gPSBSZWFjdC5mb3J3YXJkUmVmPFJlZiwgU3ZnSWNvblByb3BzPihcclxuICAoXHJcbiAgICB7XHJcbiAgICAgIHNyYyxcclxuICAgICAgYWx0LFxyXG4gICAgICBzaXplID0gMTYsXHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBvbkNsaWNrLFxyXG4gICAgICByb3RhdGUgPSBmYWxzZSxcclxuICAgICAgLi4ucHJvcHNcclxuICAgIH06IFN2Z0ljb25Qcm9wcyxcclxuICAgIHJlZlxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXY6IGFueSkgPT4ge1xyXG4gICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZXYpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcmVQcm9jZXNzb3IgPSAoY29kZTogc3RyaW5nKTogc3RyaW5nID0+IGNvZGU7XHJcbiAgICAvLyBmYWxzZSA/IGNvZGUucmVwbGFjZSgvZmlsbD1cIi4qP1wiL2csICdmaWxsPVwiY3VycmVudENvbG9yXCInKSA6IGNvZGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHRpdGxlPXthbHR9XHJcbiAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgcm90YXRlPXtyb3RhdGV9XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFN0eWxlZFJlYWN0U1ZHIHNyYz17c3JjfSBwcmVQcm9jZXNzb3I9e3ByZVByb2Nlc3Nvcn0gY2FjaGVSZXF1ZXN0cyAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ZnSWNvbjtcclxuIl19