"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMatchMedia = exports.withMedia = exports.MediaQueries = exports.Breakpoints = void 0;
var tslib_1 = require("tslib");
var facepaint_1 = tslib_1.__importDefault(require("facepaint"));
var react_1 = require("react");
exports.Breakpoints = {
    // there is NO "mobile breakpoint", because in mobile first
    // styles for mobile are defined by default without media
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
};
exports.MediaQueries = {
    // mobile: `(max-width:${Breakpoints['tablet'] - 1}px)`,
    tablet: "(min-width:".concat(exports.Breakpoints['tablet'], "px)"),
    laptop: "(min-width:".concat(exports.Breakpoints['laptop'], "px)"),
    desktop: "(min-width:".concat(exports.Breakpoints['desktop'], "px)"),
};
/** withMedia helper
 * @usage
 * ```
 * const StyledImg = styled.img(({ theme }) => theme.withMedia({
 *   display: ['mobileValue', 'tabletValue', 'laptopValue', 'desktopValue'],
 * }));
 * ```
 */
exports.withMedia = (0, facepaint_1.default)([
    "@media ".concat(exports.MediaQueries['tablet']),
    "@media ".concat(exports.MediaQueries['laptop']),
    "@media ".concat(exports.MediaQueries['desktop']),
]);
/** useMatchMedia helper
 * @usage
 * ```
 * const responsiveType = useMatchMedia(['mobile', 'tablet', 'laptop or desktop'], [deps])
 * <div>{responsiveType}</div>
 * ```
 */
var useMatchMedia = function (_a, dependencies) {
    var onMobile = _a[0], onTablet = _a[1], onLaptop = _a[2], onDesktop = _a[3];
    var queries = [
        exports.MediaQueries['desktop'],
        exports.MediaQueries['laptop'],
        exports.MediaQueries['tablet'],
    ];
    var mediaQueryLists = queries.map(function (q) { return window.matchMedia(q); });
    var getMatchArg = function () {
        var _a, _b, _c;
        // get index of first media query that matches
        var index = mediaQueryLists.findIndex(function (mql) { return mql.matches; });
        // return passed value or mobile when no match
        return ((_c = (_b = [(_a = onDesktop !== null && onDesktop !== void 0 ? onDesktop : onLaptop) !== null && _a !== void 0 ? _a : onTablet, onLaptop !== null && onLaptop !== void 0 ? onLaptop : onTablet, onTablet]) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : onMobile);
    };
    var _b = (0, react_1.useState)(getMatchArg), match = _b[0], setMatch = _b[1];
    (0, react_1.useEffect)(function () {
        var handler = function () { return setMatch(getMatchArg); };
        handler();
        // Add listeners to media queries
        mediaQueryLists.forEach(function (mql) { return mql.addListener(handler); });
        // Remove listeners on cleanup
        return function () { return mediaQueryLists.forEach(function (mql) { return mql.removeListener(handler); }); };
    }, tslib_1.__spreadArray([], dependencies, true));
    return match;
};
exports.useMatchMedia = useMatchMedia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3V0aWxzL21hdGNoLW1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxnRUFBa0M7QUFDbEMsK0JBQTRDO0FBRy9CLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLDJEQUEyRDtJQUMzRCx5REFBeUQ7SUFDekQsTUFBTSxFQUFFLEdBQUc7SUFDWCxNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVXLFFBQUEsWUFBWSxHQUFHO0lBQzFCLHdEQUF3RDtJQUN4RCxNQUFNLEVBQUUscUJBQWMsbUJBQVcsQ0FBQyxRQUFRLENBQUMsUUFBSztJQUNoRCxNQUFNLEVBQUUscUJBQWMsbUJBQVcsQ0FBQyxRQUFRLENBQUMsUUFBSztJQUNoRCxPQUFPLEVBQUUscUJBQWMsbUJBQVcsQ0FBQyxTQUFTLENBQUMsUUFBSztDQUNuRCxDQUFDO0FBa0JGOzs7Ozs7O0dBT0c7QUFDVSxRQUFBLFNBQVMsR0FBMEMsSUFBQSxtQkFBUyxFQUFDO0lBQ3hFLGlCQUFVLG9CQUFZLENBQUMsUUFBUSxDQUFDLENBQUU7SUFDbEMsaUJBQVUsb0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBRTtJQUNsQyxpQkFBVSxvQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFFO0NBQ3BDLENBQVEsQ0FBQztBQUVWOzs7Ozs7R0FNRztBQUNJLElBQU0sYUFBYSxHQUFHLFVBQzNCLEVBQTBELEVBQzFELFlBQW1CO1FBRGxCLFFBQVEsUUFBQSxFQUFFLFFBQVEsUUFBQSxFQUFFLFFBQVEsUUFBQSxFQUFFLFNBQVMsUUFBQTtJQUd4QyxJQUFNLE9BQU8sR0FBRztRQUNkLG9CQUFZLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLG9CQUFZLENBQUMsUUFBUSxDQUFDO1FBQ3RCLG9CQUFZLENBQUMsUUFBUSxDQUFDO0tBQ3ZCLENBQUM7SUFFRixJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBRWpFLElBQU0sV0FBVyxHQUFHOztRQUNsQiw4Q0FBOEM7UUFDOUMsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDOUQsOENBQThDO1FBQzlDLE9BQU8sQ0FDTCxNQUFBLE1BQUEsQ0FBQyxNQUFBLFNBQVMsYUFBVCxTQUFTLGNBQVQsU0FBUyxHQUFJLFFBQVEsbUNBQUksUUFBUSxFQUFFLFFBQVEsYUFBUixRQUFRLGNBQVIsUUFBUSxHQUFJLFFBQVEsRUFBRSxRQUFRLENBQUMsMENBQ2pFLEtBQUssQ0FDTixtQ0FBSSxRQUFRLENBQ2QsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVJLElBQUEsS0FBb0IsSUFBQSxnQkFBUSxFQUFJLFdBQVcsQ0FBQyxFQUEzQyxLQUFLLFFBQUEsRUFBRSxRQUFRLFFBQTRCLENBQUM7SUFFbkQsSUFBQSxpQkFBUyxFQUFDO1FBQ1IsSUFBTSxPQUFPLEdBQUcsY0FBTSxPQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztRQUM1QyxPQUFPLEVBQUUsQ0FBQztRQUNWLGlDQUFpQztRQUNqQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzNELDhCQUE4QjtRQUM5QixPQUFPLGNBQU0sT0FBQSxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUE3RCxDQUE2RCxDQUFDO0lBQzdFLENBQUMsNEJBQU0sWUFBWSxRQUFFLENBQUM7SUFFdEIsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUM7QUFuQ1csUUFBQSxhQUFhLGlCQW1DeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDU1MgZnJvbSAnY3NzdHlwZSc7XHJcbmltcG9ydCBmYWNlcGFpbnQgZnJvbSAnZmFjZXBhaW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ1NTT2JqZWN0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJyZWFrcG9pbnRzID0ge1xyXG4gIC8vIHRoZXJlIGlzIE5PIFwibW9iaWxlIGJyZWFrcG9pbnRcIiwgYmVjYXVzZSBpbiBtb2JpbGUgZmlyc3RcclxuICAvLyBzdHlsZXMgZm9yIG1vYmlsZSBhcmUgZGVmaW5lZCBieSBkZWZhdWx0IHdpdGhvdXQgbWVkaWFcclxuICB0YWJsZXQ6IDc2OCxcclxuICBsYXB0b3A6IDEwMjQsXHJcbiAgZGVza3RvcDogMTI4MCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZWRpYVF1ZXJpZXMgPSB7XHJcbiAgLy8gbW9iaWxlOiBgKG1heC13aWR0aDoke0JyZWFrcG9pbnRzWyd0YWJsZXQnXSAtIDF9cHgpYCxcclxuICB0YWJsZXQ6IGAobWluLXdpZHRoOiR7QnJlYWtwb2ludHNbJ3RhYmxldCddfXB4KWAsXHJcbiAgbGFwdG9wOiBgKG1pbi13aWR0aDoke0JyZWFrcG9pbnRzWydsYXB0b3AnXX1weClgLFxyXG4gIGRlc2t0b3A6IGAobWluLXdpZHRoOiR7QnJlYWtwb2ludHNbJ2Rlc2t0b3AnXX1weClgLFxyXG59O1xyXG5cclxudHlwZSBDU1NQcm9wZXJ0aWVzTXVsdGkgPSB7XHJcbiAgW1AgaW4ga2V5b2YgQ1NTLlByb3BlcnRpZXM8c3RyaW5nIHwgbnVtYmVyPl06XHJcbiAgICB8IENTUy5Qcm9wZXJ0aWVzPHN0cmluZyB8IG51bWJlcj5bUF1cclxuICAgIHwgQ1NTLlByb3BlcnRpZXM8c3RyaW5nIHwgbnVtYmVyPltQXVtdO1xyXG59O1xyXG50eXBlIENTU1BzZXVkb3MgPSB7IFtLIGluIENTUy5Qc2V1ZG9zXT86IENTU09iamVjdE11bHRpIH07XHJcblxyXG5pbnRlcmZhY2UgQ1NTT2JqZWN0TXVsdGkgZXh0ZW5kcyBDU1NQcm9wZXJ0aWVzTXVsdGksIENTU1BzZXVkb3Mge1xyXG4gIFtrZXk6IHN0cmluZ106XHJcbiAgICB8IEFycmF5PENTU09iamVjdE11bHRpIHwgc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPlxyXG4gICAgfCBDU1NPYmplY3RNdWx0aVxyXG4gICAgfCBzdHJpbmdcclxuICAgIHwgbnVtYmVyXHJcbiAgICB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqIHdpdGhNZWRpYSBoZWxwZXJcclxuICogQHVzYWdlXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBTdHlsZWRJbWcgPSBzdHlsZWQuaW1nKCh7IHRoZW1lIH0pID0+IHRoZW1lLndpdGhNZWRpYSh7XHJcbiAqICAgZGlzcGxheTogWydtb2JpbGVWYWx1ZScsICd0YWJsZXRWYWx1ZScsICdsYXB0b3BWYWx1ZScsICdkZXNrdG9wVmFsdWUnXSxcclxuICogfSkpO1xyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjb25zdCB3aXRoTWVkaWE6IChzdHlsZWQ6IENTU09iamVjdE11bHRpKSA9PiBDU1NPYmplY3QgPSBmYWNlcGFpbnQoW1xyXG4gIGBAbWVkaWEgJHtNZWRpYVF1ZXJpZXNbJ3RhYmxldCddfWAsXHJcbiAgYEBtZWRpYSAke01lZGlhUXVlcmllc1snbGFwdG9wJ119YCxcclxuICBgQG1lZGlhICR7TWVkaWFRdWVyaWVzWydkZXNrdG9wJ119YCxcclxuXSkgYXMgYW55O1xyXG5cclxuLyoqIHVzZU1hdGNoTWVkaWEgaGVscGVyXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGBcclxuICogY29uc3QgcmVzcG9uc2l2ZVR5cGUgPSB1c2VNYXRjaE1lZGlhKFsnbW9iaWxlJywgJ3RhYmxldCcsICdsYXB0b3Agb3IgZGVza3RvcCddLCBbZGVwc10pXHJcbiAqIDxkaXY+e3Jlc3BvbnNpdmVUeXBlfTwvZGl2PlxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjb25zdCB1c2VNYXRjaE1lZGlhID0gPFQgZXh0ZW5kcyBhbnk+KFxyXG4gIFtvbk1vYmlsZSwgb25UYWJsZXQsIG9uTGFwdG9wLCBvbkRlc2t0b3BdOiBbVCwgVD8sIFQ/LCBUP10sXHJcbiAgZGVwZW5kZW5jaWVzOiBhbnlbXVxyXG4pID0+IHtcclxuICBjb25zdCBxdWVyaWVzID0gW1xyXG4gICAgTWVkaWFRdWVyaWVzWydkZXNrdG9wJ10sXHJcbiAgICBNZWRpYVF1ZXJpZXNbJ2xhcHRvcCddLFxyXG4gICAgTWVkaWFRdWVyaWVzWyd0YWJsZXQnXSxcclxuICBdO1xyXG5cclxuICBjb25zdCBtZWRpYVF1ZXJ5TGlzdHMgPSBxdWVyaWVzLm1hcCgocSkgPT4gd2luZG93Lm1hdGNoTWVkaWEocSkpO1xyXG5cclxuICBjb25zdCBnZXRNYXRjaEFyZyA9ICgpID0+IHtcclxuICAgIC8vIGdldCBpbmRleCBvZiBmaXJzdCBtZWRpYSBxdWVyeSB0aGF0IG1hdGNoZXNcclxuICAgIGNvbnN0IGluZGV4ID0gbWVkaWFRdWVyeUxpc3RzLmZpbmRJbmRleCgobXFsKSA9PiBtcWwubWF0Y2hlcyk7XHJcbiAgICAvLyByZXR1cm4gcGFzc2VkIHZhbHVlIG9yIG1vYmlsZSB3aGVuIG5vIG1hdGNoXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBbb25EZXNrdG9wID8/IG9uTGFwdG9wID8/IG9uVGFibGV0LCBvbkxhcHRvcCA/PyBvblRhYmxldCwgb25UYWJsZXRdPy5bXHJcbiAgICAgICAgaW5kZXhcclxuICAgICAgXSA/PyBvbk1vYmlsZVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbbWF0Y2gsIHNldE1hdGNoXSA9IHVzZVN0YXRlPFQ+KGdldE1hdGNoQXJnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBzZXRNYXRjaChnZXRNYXRjaEFyZyk7XHJcbiAgICBoYW5kbGVyKCk7XHJcbiAgICAvLyBBZGQgbGlzdGVuZXJzIHRvIG1lZGlhIHF1ZXJpZXNcclxuICAgIG1lZGlhUXVlcnlMaXN0cy5mb3JFYWNoKChtcWwpID0+IG1xbC5hZGRMaXN0ZW5lcihoYW5kbGVyKSk7XHJcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIG9uIGNsZWFudXBcclxuICAgIHJldHVybiAoKSA9PiBtZWRpYVF1ZXJ5TGlzdHMuZm9yRWFjaCgobXFsKSA9PiBtcWwucmVtb3ZlTGlzdGVuZXIoaGFuZGxlcikpO1xyXG4gIH0sIFsuLi5kZXBlbmRlbmNpZXNdKTtcclxuXHJcbiAgcmV0dXJuIG1hdGNoO1xyXG59O1xyXG4iXX0=