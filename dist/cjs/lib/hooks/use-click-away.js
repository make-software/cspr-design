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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWNsaWNrLWF3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hvb2tzL3VzZS1jbGljay1hd2F5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBdUQ7QUFPdkQsU0FBZ0IsWUFBWSxDQUFDLEVBQWlEO1FBQS9DLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUFFLFFBQVEsY0FBQTtJQUMxRCxJQUFNLEdBQUcsR0FBRyxJQUFBLGNBQU0sRUFBaUIsSUFBSSxDQUFDLENBQUM7SUFFekMsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLG1CQUFXLEVBQ3BDLFVBQUMsS0FBVTtRQUNULElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQyxFQUNELENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0lBRUYsSUFBQSxpQkFBUyxFQUFDO1FBQ1IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELE9BQU87WUFDTCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUV6QixPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBdEJELG9DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCB0eXBlIENsaWNrQXdheVByb3BzID0ge1xyXG4gIGV2ZW50VHlwZT86ICdjbGljayc7XHJcbiAgY2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xpY2tBd2F5KHsgZXZlbnRUeXBlID0gJ2NsaWNrJywgY2FsbGJhY2sgfTogQ2xpY2tBd2F5UHJvcHMpIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZWYgJiYgcmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoIXJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2NhbGxiYWNrLCByZWZdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZUNsaWNrT3V0c2lkZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbaGFuZGxlQ2xpY2tPdXRzaWRlXSk7XHJcblxyXG4gIHJldHVybiB7IHJlZiB9O1xyXG59XHJcbiJdfQ==