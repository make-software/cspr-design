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
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ ref: ref, "aria-label": alt, size: size, color: color, rotate: rotate, onClick: handleClick }, props, { children: (0, jsx_runtime_1.jsx)(StyledReactSVG, { src: src, preProcessor: preProcessor, title: alt, "aria-hidden": "true", cacheRequests: true }) })));
});
exports.default = exports.SvgIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc3ZnLWljb24vc3ZnLWljb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQTBCO0FBQzFCLDRFQUF1QztBQUN2QyxnRkFBdUM7QUF1QnZDLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDekMsaUJBQWlCLEVBQUUsVUFBQyxJQUFJLEVBQUUsa0JBQWtCO1FBQzFDLE9BQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7SUFBdEQsQ0FBc0Q7Q0FDekQsQ0FBQyxDQVVBLFVBQUMsRUFVQTtRQVRDLEtBQUssV0FBQSxFQUNMLElBQUksVUFBQSxFQUNKLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixXQUFXLGlCQUFBO0lBQ1AsT0FBQSxDQUFDO1FBQ0wsT0FBTyxFQUFFLGNBQWM7UUFDdkIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ3RDLEtBQUssRUFBRSxLQUFLLElBQUksU0FBUztRQUN6QixHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsS0FBSyxJQUFJLFNBQVM7WUFDekIsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNuQyxNQUFNLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQ3ZDO1FBQ0QsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDdkQsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDdEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ3pDLENBQUM7QUFqQkksQ0FpQkosQ0FDSCxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHlCQUFRLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEQsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQztBQUZxRCxDQUVyRCxDQUFDLENBQUM7QUFFUyxRQUFBLE9BQU8sR0FBRyxlQUFLLENBQUMsVUFBVSxDQUNyQyxVQUNFLEVBUWUsRUFDZixHQUFHO0lBUkQsSUFBQSxHQUFHLFNBQUEsRUFDSCxHQUFHLFNBQUEsRUFDSCxZQUFTLEVBQVQsSUFBSSxtQkFBRyxFQUFFLEtBQUEsRUFDVCxLQUFLLFdBQUEsRUFDTCxPQUFPLGFBQUEsRUFDUCxjQUFjLEVBQWQsTUFBTSxtQkFBRyxLQUFLLEtBQUEsRUFDWCxLQUFLLHNCQVBWLG9EQVFDLENBRFM7SUFJVixJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQU87UUFDMUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7SUFFRixJQUFNLFlBQVksR0FBRyxVQUFDLElBQVksSUFBYSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7SUFDcEQscUVBQXFFO0lBRXJFLE9BQU8sQ0FDTCx1QkFBQyxTQUFTLHFCQUNSLEdBQUcsRUFBRSxHQUFHLGdCQUNJLEdBQUcsRUFDZixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osTUFBTSxFQUFFLE1BQU0sRUFDZCxPQUFPLEVBQUUsV0FBVyxJQUNoQixLQUFLLGNBRVQsdUJBQUMsY0FBYyxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsR0FBRyxpQkFBYyxNQUFNLEVBQUMsYUFBYSxTQUFHLElBQzNGLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FBRUYsa0JBQWUsZUFBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdFNWRyBmcm9tICdyZWFjdC1pbmxpbmVzdmcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbnR5cGUgUmVmID0gSFRNTERpdkVsZW1lbnQ7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBTdmdJY29uUHJvcHMgZXh0ZW5kcyBSZWFjdC5IVE1MQXR0cmlidXRlczxSZWY+IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIHNpemU/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gIHNyYzogc3RyaW5nO1xuICBhbHQ/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgb25Nb3VzZURvd24/OiAoZXY6IGFueSkgPT4gdm9pZDtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIHJvdGF0ZT86IGJvb2xlYW47XG4gIG1hcmdpbkxlZnQ/OiBib29sZWFuO1xuICBtYXJnaW5SaWdodD86IGJvb2xlYW47XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jykud2l0aENvbmZpZyh7XG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCwgZGVmYXVsdFZhbGlkYXRvckZuKSA9PlxuICAgICFbJ3JvdGF0ZSddLmluY2x1ZGVzKHByb3ApICYmIGRlZmF1bHRWYWxpZGF0b3JGbihwcm9wKSxcbn0pPHtcbiAgc2l6ZTogbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBjb2xvcj86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgcm90YXRlPzogYm9vbGVhbjtcbiAgbWFyZ2luTGVmdD86IGJvb2xlYW47XG4gIG1hcmdpblJpZ2h0PzogYm9vbGVhbjtcbn0+KFxuICAoe1xuICAgIHRoZW1lLFxuICAgIHNpemUsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGNvbG9yLFxuICAgIGFjdGl2ZSxcbiAgICByb3RhdGUsXG4gICAgbWFyZ2luTGVmdCxcbiAgICBtYXJnaW5SaWdodCxcbiAgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICB3aWR0aDogd2lkdGggIT0gbnVsbCA/IHdpZHRoIDogc2l6ZSxcbiAgICBoZWlnaHQ6IGhlaWdodCAhPSBudWxsID8gaGVpZ2h0IDogc2l6ZSxcbiAgICBjb2xvcjogY29sb3IgfHwgJ2luaGVyaXQnLFxuICAgIHN2Zzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgY29sb3I6IGNvbG9yIHx8ICdpbmhlcml0JyxcbiAgICAgIHdpZHRoOiB3aWR0aCAhPSBudWxsID8gd2lkdGggOiBzaXplLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgIT0gbnVsbCA/IGhlaWdodCA6IHNpemUsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSA/ICdyb3RhdGVYKDE4MGRlZyknIDogJ3JvdGF0ZVgoMGRlZyknLFxuICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNTAwbXMgZWFzZScsXG4gICAgbWFyZ2luTGVmdDogbWFyZ2luTGVmdCA/IDggOiAnaW5pdGlhbCcsXG4gICAgbWFyZ2luUmlnaHQ6IG1hcmdpblJpZ2h0ID8gOCA6ICdpbml0aWFsJyxcbiAgfSlcbik7XG5cbmNvbnN0IFN0eWxlZFJlYWN0U1ZHID0gc3R5bGVkKFJlYWN0U1ZHKSgoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBTdmdJY29uID0gUmVhY3QuZm9yd2FyZFJlZjxSZWYsIFN2Z0ljb25Qcm9wcz4oXG4gIChcbiAgICB7XG4gICAgICBzcmMsXG4gICAgICBhbHQsXG4gICAgICBzaXplID0gMTYsXG4gICAgICBjb2xvcixcbiAgICAgIG9uQ2xpY2ssXG4gICAgICByb3RhdGUgPSBmYWxzZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfTogU3ZnSWNvblByb3BzLFxuICAgIHJlZlxuICApID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldjogYW55KSA9PiB7XG4gICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZXYpO1xuICAgIH07XG5cbiAgICBjb25zdCBwcmVQcm9jZXNzb3IgPSAoY29kZTogc3RyaW5nKTogc3RyaW5nID0+IGNvZGU7XG4gICAgLy8gZmFsc2UgPyBjb2RlLnJlcGxhY2UoL2ZpbGw9XCIuKj9cIi9nLCAnZmlsbD1cImN1cnJlbnRDb2xvclwiJykgOiBjb2RlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIGFyaWEtbGFiZWw9e2FsdH1cbiAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICByb3RhdGU9e3JvdGF0ZX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPFN0eWxlZFJlYWN0U1ZHIHNyYz17c3JjfSBwcmVQcm9jZXNzb3I9e3ByZVByb2Nlc3Nvcn0gdGl0bGU9e2FsdH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2FjaGVSZXF1ZXN0cyAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnSWNvbjtcbiJdfQ==