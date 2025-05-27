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
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, title: alt, size: size, color: color, rotate: rotate, onClick: handleClick }, props, { children: (0, jsx_runtime_1.jsx)(StyledReactSVG, { src: src, preProcessor: preProcessor, title: alt, cacheRequests: true }) })));
});
exports.default = exports.SvgIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc3ZnLWljb24vc3ZnLWljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDRFQUF1QztBQUN2QyxnRkFBdUM7QUF1QnZDLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDekMsaUJBQWlCLEVBQUUsVUFBQyxJQUFJLEVBQUUsa0JBQWtCO1FBQzFDLE9BQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFBdEQsQ0FBc0Q7Q0FDekQsQ0FBQyxDQVVBLFVBQUMsRUFVQTtRQVRDLEtBQUssV0FBQSxFQUNMLElBQUksVUFBQSxFQUNKLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixXQUFXLGlCQUFBO0lBQ1AsT0FBQSxDQUFDO1FBQ0wsT0FBTyxFQUFFLGNBQWM7UUFDdkIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3RDLEtBQUssRUFBRSxLQUFLLElBQUksU0FBUztRQUN6QixHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsS0FBSyxJQUFJLFNBQVM7WUFDekIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDdkQsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDdEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ3pDLENBQUM7QUFqQkksQ0FpQkosQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHlCQUFRLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEQsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQztBQUZxRCxDQUVyRCxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8sR0FBRyxlQUFLLENBQUMsVUFBVSxDQUNyQyxVQUNFLEVBUWUsRUFDZixHQUFHO0lBUkQsSUFBQSxHQUFHLFNBQUEsRUFDSCxHQUFHLFNBQUEsRUFDSCxZQUFTLEVBQVQsSUFBSSxtQkFBRyxFQUFFLEtBQUEsRUFDVCxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDWCxLQUFLLHNCQVBWLG9EQVFDLENBRFM7SUFJVixJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQU87UUFDMUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFFRixJQUFNLFlBQVksR0FBRyxVQUFDLElBQVksSUFBYSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7SUFDcEQscUVBQXFFO0lBRXJFLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFFLEdBQUcsRUFDVixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxPQUFPLEVBQUUsV0FBVyxJQUNoQixLQUFLLGNBRVQsdUJBQUMsY0FBYyxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGFBQWEsU0FBRyxJQUN4RSxDQUNiLENBQUM7QUFDSixDQUFDLENBQ0YsQ0FBQztBQUVGLGtCQUFlLGVBQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RTVkcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG50eXBlIFJlZiA9IEhUTUxEaXZFbGVtZW50O1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3ZnSWNvblByb3BzIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8UmVmPiB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBzaXplPzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xuICBzcmM6IHN0cmluZztcbiAgYWx0Pzogc3RyaW5nO1xuICBvbkNsaWNrPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIG9uTW91c2VEb3duPzogKGV2OiBhbnkpID0+IHZvaWQ7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICByb3RhdGU/OiBib29sZWFuO1xuICBtYXJnaW5MZWZ0PzogYm9vbGVhbjtcbiAgbWFyZ2luUmlnaHQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpLndpdGhDb25maWcoe1xuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3AsIGRlZmF1bHRWYWxpZGF0b3JGbikgPT5cbiAgICAhWydyb3RhdGUnXS5pbmNsdWRlcyhwcm9wKSAmJiBkZWZhdWx0VmFsaWRhdG9yRm4ocHJvcCksXG59KTx7XG4gIHNpemU6IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIHJvdGF0ZT86IGJvb2xlYW47XG4gIG1hcmdpbkxlZnQ/OiBib29sZWFuO1xuICBtYXJnaW5SaWdodD86IGJvb2xlYW47XG59PihcbiAgKHtcbiAgICB0aGVtZSxcbiAgICBzaXplLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBjb2xvcixcbiAgICBhY3RpdmUsXG4gICAgcm90YXRlLFxuICAgIG1hcmdpbkxlZnQsXG4gICAgbWFyZ2luUmlnaHQsXG4gIH0pID0+ICh7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgd2lkdGg6IHdpZHRoICE9IG51bGwgPyB3aWR0aCA6IHNpemUsXG4gICAgaGVpZ2h0OiBoZWlnaHQgIT0gbnVsbCA/IGhlaWdodCA6IHNpemUsXG4gICAgY29sb3I6IGNvbG9yIHx8ICdpbmhlcml0JyxcbiAgICBzdmc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGNvbG9yOiBjb2xvciB8fCAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogd2lkdGggIT0gbnVsbCA/IHdpZHRoIDogc2l6ZSxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICE9IG51bGwgPyBoZWlnaHQgOiBzaXplLFxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiByb3RhdGUgPyAncm90YXRlWCgxODBkZWcpJyA6ICdyb3RhdGVYKDBkZWcpJyxcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDUwMG1zIGVhc2UnLFxuICAgIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnQgPyA4IDogJ2luaXRpYWwnLFxuICAgIG1hcmdpblJpZ2h0OiBtYXJnaW5SaWdodCA/IDggOiAnaW5pdGlhbCcsXG4gIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRSZWFjdFNWRyA9IHN0eWxlZChSZWFjdFNWRykoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxufSkpO1xuXG5leHBvcnQgY29uc3QgU3ZnSWNvbiA9IFJlYWN0LmZvcndhcmRSZWY8UmVmLCBTdmdJY29uUHJvcHM+KFxuICAoXG4gICAge1xuICAgICAgc3JjLFxuICAgICAgYWx0LFxuICAgICAgc2l6ZSA9IDE2LFxuICAgICAgY29sb3IsXG4gICAgICBvbkNsaWNrLFxuICAgICAgcm90YXRlID0gZmFsc2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH06IFN2Z0ljb25Qcm9wcyxcbiAgICByZWZcbiAgKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXY6IGFueSkgPT4ge1xuICAgICAgb25DbGljayAmJiBvbkNsaWNrKGV2KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJlUHJvY2Vzc29yID0gKGNvZGU6IHN0cmluZyk6IHN0cmluZyA9PiBjb2RlO1xuICAgIC8vIGZhbHNlID8gY29kZS5yZXBsYWNlKC9maWxsPVwiLio/XCIvZywgJ2ZpbGw9XCJjdXJyZW50Q29sb3JcIicpIDogY29kZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICB0aXRsZT17YWx0fVxuICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgIHJvdGF0ZT17cm90YXRlfVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8U3R5bGVkUmVhY3RTVkcgc3JjPXtzcmN9IHByZVByb2Nlc3Nvcj17cHJlUHJvY2Vzc29yfSB0aXRsZT17YWx0fSBjYWNoZVJlcXVlc3RzIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdJY29uO1xuIl19