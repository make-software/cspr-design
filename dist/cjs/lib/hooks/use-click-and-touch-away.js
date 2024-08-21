"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickAndTouchAway = void 0;
var react_1 = require("react");
function useClickAndTouchAway(_a) {
    var callback = _a.callback;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var listener = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback(event);
            }
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, callback]);
    return { ref: ref };
}
exports.useClickAndTouchAway = useClickAndTouchAway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWNsaWNrLWFuZC10b3VjaC1hd2F5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ob29rcy91c2UtY2xpY2stYW5kLXRvdWNoLWF3YXkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUEwQztBQU0xQyxTQUFnQixvQkFBb0IsQ0FBQyxFQUFvQztRQUFsQyxRQUFRLGNBQUE7SUFDN0MsSUFBTSxHQUFHLEdBQUcsSUFBQSxjQUFNLEVBQWlCLElBQUksQ0FBQyxDQUFDO0lBRXpDLElBQUEsaUJBQVMsRUFBQztRQUNSLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBVTtZQUMxQixJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQztRQUVGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRCxPQUFPO1lBQ0wsUUFBUSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXBCLE9BQU8sRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFwQkQsb0RBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBDbGlja0FuZFRvdWNoQXdheVByb3BzIHtcbiAgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xpY2tBbmRUb3VjaEF3YXkoeyBjYWxsYmFjayB9OiBDbGlja0FuZFRvdWNoQXdheVByb3BzKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAocmVmLmN1cnJlbnQgJiYgIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtyZWYsIGNhbGxiYWNrXSk7XG5cbiAgcmV0dXJuIHsgcmVmIH07XG59XG4iXX0=