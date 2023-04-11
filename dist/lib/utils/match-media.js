import { __spreadArray } from "tslib";
import facepaint from 'facepaint';
import { useEffect, useState } from 'react';
export var Breakpoints = {
    // there is NO "mobile breakpoint", because in mobile first
    // styles for mobile are defined by default without media
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
};
export var MediaQueries = {
    // mobile: `(max-width:${Breakpoints['tablet'] - 1}px)`,
    tablet: "(min-width:".concat(Breakpoints['tablet'], "px)"),
    laptop: "(min-width:".concat(Breakpoints['laptop'], "px)"),
    desktop: "(min-width:".concat(Breakpoints['desktop'], "px)"),
};
/** withMedia helper
 * @usage
 * ```
 * const StyledImg = styled.img(({ theme }) => theme.withMedia({
 *   display: ['mobileValue', 'tabletValue', 'laptopValue', 'desktopValue'],
 * }));
 * ```
 */
export var withMedia = facepaint([
    "@media ".concat(MediaQueries['tablet']),
    "@media ".concat(MediaQueries['laptop']),
    "@media ".concat(MediaQueries['desktop']),
]);
/** useMatchMedia helper
 * @usage
 * ```
 * const responsiveType = useMatchMedia(['mobile', 'tablet', 'laptop or desktop'], [deps])
 * <div>{responsiveType}</div>
 * ```
 */
export var useMatchMedia = function (_a, dependencies) {
    var onMobile = _a[0], onTablet = _a[1], onLaptop = _a[2], onDesktop = _a[3];
    var queries = [
        MediaQueries['desktop'],
        MediaQueries['laptop'],
        MediaQueries['tablet'],
    ];
    var mediaQueryLists = queries.map(function (q) { return window.matchMedia(q); });
    var getMatchArg = function () {
        var _a, _b, _c;
        // get index of first media query that matches
        var index = mediaQueryLists.findIndex(function (mql) { return mql.matches; });
        // return passed value or mobile when no match
        return ((_c = (_b = [(_a = onDesktop !== null && onDesktop !== void 0 ? onDesktop : onLaptop) !== null && _a !== void 0 ? _a : onTablet, onLaptop !== null && onLaptop !== void 0 ? onLaptop : onTablet, onTablet]) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : onMobile);
    };
    var _b = useState(getMatchArg), match = _b[0], setMatch = _b[1];
    useEffect(function () {
        var handler = function () { return setMatch(getMatchArg); };
        handler();
        // Add listeners to media queries
        mediaQueryLists.forEach(function (mql) { return mql.addListener(handler); });
        // Remove listeners on cleanup
        return function () { return mediaQueryLists.forEach(function (mql) { return mql.removeListener(handler); }); };
    }, __spreadArray([], dependencies, true));
    return match;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzL21hdGNoLW1lZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLFNBQVMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFHNUMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHO0lBQ3pCLDJEQUEyRDtJQUMzRCx5REFBeUQ7SUFDekQsTUFBTSxFQUFFLEdBQUc7SUFDWCxNQUFNLEVBQUUsSUFBSTtJQUNaLE9BQU8sRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFlBQVksR0FBRztJQUMxQix3REFBd0Q7SUFDeEQsTUFBTSxFQUFFLHFCQUFjLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBSztJQUNoRCxNQUFNLEVBQUUscUJBQWMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFLO0lBQ2hELE9BQU8sRUFBRSxxQkFBYyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQUs7Q0FDbkQsQ0FBQztBQWtCRjs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLElBQU0sU0FBUyxHQUEwQyxTQUFTLENBQUM7SUFDeEUsaUJBQVUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFFO0lBQ2xDLGlCQUFVLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBRTtJQUNsQyxpQkFBVSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUU7Q0FDcEMsQ0FBUSxDQUFDO0FBRVY7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLElBQU0sYUFBYSxHQUFHLFVBQzNCLEVBQTBELEVBQzFELFlBQW1CO1FBRGxCLFFBQVEsUUFBQSxFQUFFLFFBQVEsUUFBQSxFQUFFLFFBQVEsUUFBQSxFQUFFLFNBQVMsUUFBQTtJQUd4QyxJQUFNLE9BQU8sR0FBRztRQUNkLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDdkIsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUN0QixZQUFZLENBQUMsUUFBUSxDQUFDO0tBQ3ZCLENBQUM7SUFFRixJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBRWpFLElBQU0sV0FBVyxHQUFHOztRQUNsQiw4Q0FBOEM7UUFDOUMsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDOUQsOENBQThDO1FBQzlDLE9BQU8sQ0FDTCxNQUFBLE1BQUEsQ0FBQyxNQUFBLFNBQVMsYUFBVCxTQUFTLGNBQVQsU0FBUyxHQUFJLFFBQVEsbUNBQUksUUFBUSxFQUFFLFFBQVEsYUFBUixRQUFRLGNBQVIsUUFBUSxHQUFJLFFBQVEsRUFBRSxRQUFRLENBQUMsMENBQ2pFLEtBQUssQ0FDTixtQ0FBSSxRQUFRLENBQ2QsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVJLElBQUEsS0FBb0IsUUFBUSxDQUFJLFdBQVcsQ0FBQyxFQUEzQyxLQUFLLFFBQUEsRUFBRSxRQUFRLFFBQTRCLENBQUM7SUFFbkQsU0FBUyxDQUFDO1FBQ1IsSUFBTSxPQUFPLEdBQUcsY0FBTSxPQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztRQUM1QyxPQUFPLEVBQUUsQ0FBQztRQUNWLGlDQUFpQztRQUNqQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzNELDhCQUE4QjtRQUM5QixPQUFPLGNBQU0sT0FBQSxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxFQUE3RCxDQUE2RCxDQUFDO0lBQzdFLENBQUMsb0JBQU0sWUFBWSxRQUFFLENBQUM7SUFFdEIsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDU1MgZnJvbSAnY3NzdHlwZSc7XG5pbXBvcnQgZmFjZXBhaW50IGZyb20gJ2ZhY2VwYWludCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ1NTT2JqZWN0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQnJlYWtwb2ludHMgPSB7XG4gIC8vIHRoZXJlIGlzIE5PIFwibW9iaWxlIGJyZWFrcG9pbnRcIiwgYmVjYXVzZSBpbiBtb2JpbGUgZmlyc3RcbiAgLy8gc3R5bGVzIGZvciBtb2JpbGUgYXJlIGRlZmluZWQgYnkgZGVmYXVsdCB3aXRob3V0IG1lZGlhXG4gIHRhYmxldDogNzY4LFxuICBsYXB0b3A6IDEwMjQsXG4gIGRlc2t0b3A6IDEyODAsXG59O1xuXG5leHBvcnQgY29uc3QgTWVkaWFRdWVyaWVzID0ge1xuICAvLyBtb2JpbGU6IGAobWF4LXdpZHRoOiR7QnJlYWtwb2ludHNbJ3RhYmxldCddIC0gMX1weClgLFxuICB0YWJsZXQ6IGAobWluLXdpZHRoOiR7QnJlYWtwb2ludHNbJ3RhYmxldCddfXB4KWAsXG4gIGxhcHRvcDogYChtaW4td2lkdGg6JHtCcmVha3BvaW50c1snbGFwdG9wJ119cHgpYCxcbiAgZGVza3RvcDogYChtaW4td2lkdGg6JHtCcmVha3BvaW50c1snZGVza3RvcCddfXB4KWAsXG59O1xuXG50eXBlIENTU1Byb3BlcnRpZXNNdWx0aSA9IHtcbiAgW1AgaW4ga2V5b2YgQ1NTLlByb3BlcnRpZXM8c3RyaW5nIHwgbnVtYmVyPl06XG4gICAgfCBDU1MuUHJvcGVydGllczxzdHJpbmcgfCBudW1iZXI+W1BdXG4gICAgfCBDU1MuUHJvcGVydGllczxzdHJpbmcgfCBudW1iZXI+W1BdW107XG59O1xudHlwZSBDU1NQc2V1ZG9zID0geyBbSyBpbiBDU1MuUHNldWRvc10/OiBDU1NPYmplY3RNdWx0aSB9O1xuXG5pbnRlcmZhY2UgQ1NTT2JqZWN0TXVsdGkgZXh0ZW5kcyBDU1NQcm9wZXJ0aWVzTXVsdGksIENTU1BzZXVkb3Mge1xuICBba2V5OiBzdHJpbmddOlxuICAgIHwgQXJyYXk8Q1NTT2JqZWN0TXVsdGkgfCBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+XG4gICAgfCBDU1NPYmplY3RNdWx0aVxuICAgIHwgc3RyaW5nXG4gICAgfCBudW1iZXJcbiAgICB8IHVuZGVmaW5lZDtcbn1cblxuLyoqIHdpdGhNZWRpYSBoZWxwZXJcbiAqIEB1c2FnZVxuICogYGBgXG4gKiBjb25zdCBTdHlsZWRJbWcgPSBzdHlsZWQuaW1nKCh7IHRoZW1lIH0pID0+IHRoZW1lLndpdGhNZWRpYSh7XG4gKiAgIGRpc3BsYXk6IFsnbW9iaWxlVmFsdWUnLCAndGFibGV0VmFsdWUnLCAnbGFwdG9wVmFsdWUnLCAnZGVza3RvcFZhbHVlJ10sXG4gKiB9KSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IHdpdGhNZWRpYTogKHN0eWxlZDogQ1NTT2JqZWN0TXVsdGkpID0+IENTU09iamVjdCA9IGZhY2VwYWludChbXG4gIGBAbWVkaWEgJHtNZWRpYVF1ZXJpZXNbJ3RhYmxldCddfWAsXG4gIGBAbWVkaWEgJHtNZWRpYVF1ZXJpZXNbJ2xhcHRvcCddfWAsXG4gIGBAbWVkaWEgJHtNZWRpYVF1ZXJpZXNbJ2Rlc2t0b3AnXX1gLFxuXSkgYXMgYW55O1xuXG4vKiogdXNlTWF0Y2hNZWRpYSBoZWxwZXJcbiAqIEB1c2FnZVxuICogYGBgXG4gKiBjb25zdCByZXNwb25zaXZlVHlwZSA9IHVzZU1hdGNoTWVkaWEoWydtb2JpbGUnLCAndGFibGV0JywgJ2xhcHRvcCBvciBkZXNrdG9wJ10sIFtkZXBzXSlcbiAqIDxkaXY+e3Jlc3BvbnNpdmVUeXBlfTwvZGl2PlxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VNYXRjaE1lZGlhID0gPFQgZXh0ZW5kcyBhbnk+KFxuICBbb25Nb2JpbGUsIG9uVGFibGV0LCBvbkxhcHRvcCwgb25EZXNrdG9wXTogW1QsIFQ/LCBUPywgVD9dLFxuICBkZXBlbmRlbmNpZXM6IGFueVtdXG4pID0+IHtcbiAgY29uc3QgcXVlcmllcyA9IFtcbiAgICBNZWRpYVF1ZXJpZXNbJ2Rlc2t0b3AnXSxcbiAgICBNZWRpYVF1ZXJpZXNbJ2xhcHRvcCddLFxuICAgIE1lZGlhUXVlcmllc1sndGFibGV0J10sXG4gIF07XG5cbiAgY29uc3QgbWVkaWFRdWVyeUxpc3RzID0gcXVlcmllcy5tYXAoKHEpID0+IHdpbmRvdy5tYXRjaE1lZGlhKHEpKTtcblxuICBjb25zdCBnZXRNYXRjaEFyZyA9ICgpID0+IHtcbiAgICAvLyBnZXQgaW5kZXggb2YgZmlyc3QgbWVkaWEgcXVlcnkgdGhhdCBtYXRjaGVzXG4gICAgY29uc3QgaW5kZXggPSBtZWRpYVF1ZXJ5TGlzdHMuZmluZEluZGV4KChtcWwpID0+IG1xbC5tYXRjaGVzKTtcbiAgICAvLyByZXR1cm4gcGFzc2VkIHZhbHVlIG9yIG1vYmlsZSB3aGVuIG5vIG1hdGNoXG4gICAgcmV0dXJuIChcbiAgICAgIFtvbkRlc2t0b3AgPz8gb25MYXB0b3AgPz8gb25UYWJsZXQsIG9uTGFwdG9wID8/IG9uVGFibGV0LCBvblRhYmxldF0/LltcbiAgICAgICAgaW5kZXhcbiAgICAgIF0gPz8gb25Nb2JpbGVcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFttYXRjaCwgc2V0TWF0Y2hdID0gdXNlU3RhdGU8VD4oZ2V0TWF0Y2hBcmcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHNldE1hdGNoKGdldE1hdGNoQXJnKTtcbiAgICBoYW5kbGVyKCk7XG4gICAgLy8gQWRkIGxpc3RlbmVycyB0byBtZWRpYSBxdWVyaWVzXG4gICAgbWVkaWFRdWVyeUxpc3RzLmZvckVhY2goKG1xbCkgPT4gbXFsLmFkZExpc3RlbmVyKGhhbmRsZXIpKTtcbiAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIG9uIGNsZWFudXBcbiAgICByZXR1cm4gKCkgPT4gbWVkaWFRdWVyeUxpc3RzLmZvckVhY2goKG1xbCkgPT4gbXFsLnJlbW92ZUxpc3RlbmVyKGhhbmRsZXIpKTtcbiAgfSwgWy4uLmRlcGVuZGVuY2llc10pO1xuXG4gIHJldHVybiBtYXRjaDtcbn07XG4iXX0=