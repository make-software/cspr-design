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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWNsaWNrLWF3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2hvb2tzL3VzZS1jbGljay1hd2F5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBOEQ7QUFPOUQsU0FBZ0IsWUFBWSxDQUFDLEVBQWlEO1FBQS9DLGlCQUFtQixFQUFuQixTQUFTLG1CQUFHLE9BQU8sS0FBQSxFQUFFLFFBQVEsY0FBQTtJQUMxRCxJQUFNLEdBQUcsR0FBRyxJQUFBLGNBQU0sRUFBaUIsSUFBSSxDQUFDLENBQUM7SUFFekMsSUFBTSxrQkFBa0IsR0FBRyxJQUFBLG1CQUFXLEVBQ3BDLFVBQUMsS0FBVTtRQUNULElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkMsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQyxFQUNELENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUNoQixDQUFDO0lBRUYsSUFBQSxpQkFBUyxFQUFDO1FBQ1IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3pELE9BQU87WUFDTCxRQUFRLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUV6QixPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBdEJELG9DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIENsaWNrQXdheVByb3BzID0ge1xuICBldmVudFR5cGU/OiAnY2xpY2snO1xuICBjYWxsYmFjazogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGlja0F3YXkoeyBldmVudFR5cGUgPSAnY2xpY2snLCBjYWxsYmFjayB9OiBDbGlja0F3YXlQcm9wcykge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3V0c2lkZSA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAocmVmICYmIHJlZi5jdXJyZW50KSB7XG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjYWxsYmFjaywgcmVmXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVDbGlja091dHNpZGUsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlQ2xpY2tPdXRzaWRlXSk7XG5cbiAgcmV0dXJuIHsgcmVmIH07XG59XG4iXX0=