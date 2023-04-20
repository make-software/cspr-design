import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FlexRow from '../../flex-row/flex-row';
var Container = styled(FlexRow)(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return (__assign({ borderRadius: theme.borderRadius.base }, (!isOpen && {
        display: 'none',
    })));
});
var BaseMenuWrapper = styled.div(function (_a) {
    var theme = _a.theme;
    return ({
        width: 'fit-content',
        height: 'auto',
        background: theme.styleguideColors.backgroundPrimary,
        filter: theme.boxShadow.dropdown,
        borderTop: "5px solid ".concat(theme.styleguideColors.fillPrimaryRed),
        borderRadius: theme.borderRadius.base,
    });
});
export var BaseDropdownMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children;
    var _c = useState(opened), isOpen = _c[0], setIsOpen = _c[1];
    useEffect(function () {
        setIsOpen(opened);
    }, [opened]);
    // const { ref } = useClickAway({
    //   callback: () => {
    //     setIsOpen(false);
    //     onClose && onClose();
    //   },
    // });
    return (
    // <Container isOpen={isOpen} ref={ref}>
    _jsx(Container, __assign({ isOpen: isOpen }, { children: _jsx(BaseMenuWrapper, { children: children }) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFjLEVBQXFCLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFHdEUsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUM7QUFDdkMsT0FBTyxPQUFPLE1BQU0seUJBQXlCLENBQUM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFzQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxZQUM1RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQ2xDLENBQUMsQ0FBQyxNQUFNLElBQUk7UUFDYixPQUFPLEVBQUUsTUFBTTtLQUNoQixDQUFDLEVBQ0Y7QUFMNEUsQ0FLNUUsQ0FBQyxDQUFDO0FBRUosSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDakQsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLE1BQU07UUFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQjtRQUNwRCxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRO1FBQ2hDLFNBQVMsRUFBRSxvQkFBYSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFFO1FBQy9ELFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7S0FDdEMsQ0FBQztBQVBnRCxDQU9oRCxDQUFDLENBQUM7QUFFSixNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEVBSUY7UUFIN0IsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxLQUFBLEVBQ2QsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUFBO0lBRUYsSUFBQSxLQUFzQixRQUFRLENBQUMsTUFBTSxDQUFDLEVBQXJDLE1BQU0sUUFBQSxFQUFFLFNBQVMsUUFBb0IsQ0FBQztJQUU3QyxTQUFTLENBQUM7UUFDUixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUViLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixPQUFPO0lBQ1AsTUFBTTtJQUVOLE9BQU87SUFDTCx3Q0FBd0M7SUFDeEMsS0FBQyxTQUFTLGFBQUMsTUFBTSxFQUFFLE1BQU0sZ0JBQ3ZCLEtBQUMsZUFBZSxjQUFFLFFBQVEsR0FBbUIsSUFDbkMsQ0FDYixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xuaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSAnLi4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBpc09wZW46IGJvb2xlYW4gfT4oKHsgdGhlbWUsIGlzT3BlbiB9KSA9PiAoe1xuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAuLi4oIWlzT3BlbiAmJiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICB9KSxcbn0pKTtcblxuY29uc3QgQmFzZU1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcbiAgaGVpZ2h0OiAnYXV0bycsXG4gIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuYmFja2dyb3VuZFByaW1hcnksXG4gIGZpbHRlcjogdGhlbWUuYm94U2hhZG93LmRyb3Bkb3duLFxuICBib3JkZXJUb3A6IGA1cHggc29saWQgJHt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkfWAsXG4gIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBCYXNlRHJvcGRvd25NZW51ID0gKHtcbiAgb3BlbmVkID0gZmFsc2UsXG4gIG9uQ2xvc2UsXG4gIGNoaWxkcmVuLFxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUob3BlbmVkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihvcGVuZWQpO1xuICB9LCBbb3BlbmVkXSk7XG5cbiAgLy8gY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gIC8vICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgLy8gICAgIHNldElzT3BlbihmYWxzZSk7XG4gIC8vICAgICBvbkNsb3NlICYmIG9uQ2xvc2UoKTtcbiAgLy8gICB9LFxuICAvLyB9KTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxDb250YWluZXIgaXNPcGVuPXtpc09wZW59IHJlZj17cmVmfT5cbiAgICA8Q29udGFpbmVyIGlzT3Blbj17aXNPcGVufT5cbiAgICAgIDxCYXNlTWVudVdyYXBwZXI+e2NoaWxkcmVufTwvQmFzZU1lbnVXcmFwcGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiJdfQ==