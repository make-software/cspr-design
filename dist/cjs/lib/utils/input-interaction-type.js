"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetInputInteractionType = exports.InputInteractionType = void 0;
var react_1 = require("react");
var InputInteractionType;
(function (InputInteractionType) {
    InputInteractionType["mouse"] = "mouse";
    InputInteractionType["keyboard"] = "keyboard";
})(InputInteractionType = exports.InputInteractionType || (exports.InputInteractionType = {}));
var useGetInputInteractionType = function () {
    var inputInteractionTypeRef = (0, react_1.useRef)(InputInteractionType.mouse);
    (0, react_1.useEffect)(function () {
        var handleKeyDown = function (e) {
            if (['Tab', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
                inputInteractionTypeRef.current = InputInteractionType.keyboard;
            }
        };
        var handleMouseDown = function () {
            inputInteractionTypeRef.current = InputInteractionType.mouse;
        };
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('mousedown', handleMouseDown);
        return function () {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);
    return inputInteractionTypeRef;
};
exports.useGetInputInteractionType = useGetInputInteractionType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW50ZXJhY3Rpb24tdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvaW5wdXQtaW50ZXJhY3Rpb24tdHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBd0M7QUFFeEMsSUFBWSxvQkFHWDtBQUhELFdBQVksb0JBQW9CO0lBQzVCLHVDQUFpQixDQUFBO0lBQ2pCLDZDQUFxQixDQUFBO0FBQ3pCLENBQUMsRUFIVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUcvQjtBQUVNLElBQU0sMEJBQTBCLEdBQUc7SUFDdEMsSUFBTSx1QkFBdUIsR0FBRyxJQUFBLGNBQU0sRUFBdUIsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFekYsSUFBQSxpQkFBUyxFQUFDO1FBQ04sSUFBTSxhQUFhLEdBQUcsVUFBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pELHVCQUF1QixDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7YUFDbkU7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFNLGVBQWUsR0FBRztZQUNwQix1QkFBdUIsQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDO1FBQ2pFLENBQUMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV0RCxPQUFPO1lBQ0gsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQztJQUNOLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE9BQU8sdUJBQXVCLENBQUM7QUFDbkMsQ0FBQyxDQUFBO0FBeEJZLFFBQUEsMEJBQTBCLDhCQXdCdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGVudW0gSW5wdXRJbnRlcmFjdGlvblR5cGUge1xuICAgICdtb3VzZScgPSAnbW91c2UnLFxuICAgICdrZXlib2FyZCc9J2tleWJvYXJkJ1xufVxuXG5leHBvcnQgY29uc3QgdXNlR2V0SW5wdXRJbnRlcmFjdGlvblR5cGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRJbnRlcmFjdGlvblR5cGVSZWYgPSB1c2VSZWY8SW5wdXRJbnRlcmFjdGlvblR5cGU+KElucHV0SW50ZXJhY3Rpb25UeXBlLm1vdXNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKFsnVGFiJywgJ0Fycm93RG93bicsICdBcnJvd1VwJ10uaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRJbnRlcmFjdGlvblR5cGVSZWYuY3VycmVudCA9IElucHV0SW50ZXJhY3Rpb25UeXBlLmtleWJvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9ICgpID0+IHtcbiAgICAgICAgICAgIGlucHV0SW50ZXJhY3Rpb25UeXBlUmVmLmN1cnJlbnQgPSBJbnB1dEludGVyYWN0aW9uVHlwZS5tb3VzZTtcbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlTW91c2VEb3duKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVNb3VzZURvd24pO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbnB1dEludGVyYWN0aW9uVHlwZVJlZjtcbn0iXX0=