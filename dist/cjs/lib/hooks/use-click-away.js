"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickAway = void 0;
var react_1 = require("react");
function useClickAway(_a) {
    var _b = _a.eventType, eventType = _b === void 0 ? 'click' : _b, callback = _a.callback;
    var ref = (0, react_1.useRef)(null);
    var handleClickOutside = (0, react_1.useCallback)(function (event) {
        if (ref && ref.current) {
            if (!ref.current.contains(event.target)) {
                callback();
            }
        }
    }, [callback, ref]);
    (0, react_1.useEffect)(function () {
        document.addEventListener(eventType, handleClickOutside);
        return function () {
            document.removeEventListener(eventType, handleClickOutside, false);
        };
    }, [handleClickOutside]);
    return { ref: ref };
}
exports.useClickAway = useClickAway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWNsaWNrLWF3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hvb2tzL3VzZS1jbGljay1hd2F5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBdUQ7QUFPdkQsU0FBZ0IsWUFBWSxDQUFDLEVBQWlEO1FBQS9DLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUFFLFFBQVEsY0FBQTtJQUMxRCxJQUFNLEdBQUcsR0FBRyxJQUFBLGNBQU0sRUFBaUIsSUFBSSxDQUFDLENBQUM7SUFFekMsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLG1CQUFXLEVBQ3BDLFVBQUMsS0FBVTtRQUNULElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQyxFQUNELENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0lBRUYsSUFBQSxpQkFBUyxFQUFDO1FBQ1IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELE9BQU87WUFDTCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUV6QixPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBdEJELG9DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IHR5cGUgQ2xpY2tBd2F5UHJvcHMgPSB7XG4gIGV2ZW50VHlwZT86ICdjbGljayc7XG4gIGNhbGxiYWNrOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsaWNrQXdheSh7IGV2ZW50VHlwZSA9ICdjbGljaycsIGNhbGxiYWNrIH06IENsaWNrQXdheVByb3BzKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZWYgJiYgcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaWYgKCFyZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NhbGxiYWNrLCByZWZdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZUNsaWNrT3V0c2lkZSwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVDbGlja091dHNpZGVdKTtcblxuICByZXR1cm4geyByZWYgfTtcbn1cbiJdfQ==