import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useClickAway } from '../../../hooks/use-click-away';
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
    var ref = useClickAway({
        callback: function () {
            setIsOpen(false);
            onClose && onClose();
        },
    }).ref;
    return (_jsx(Container, __assign({ isOpen: isOpen, ref: ref }, { children: _jsx(BaseMenuWrapper, { children: children }) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kcm9wZG93bi1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vYmFzZS1kcm9wZG93bi1tZW51L2Jhc2UtZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFjLEVBQXFCLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTdELE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBRTlDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBc0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsWUFDNUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUNsQyxDQUFDLENBQUMsTUFBTSxJQUFJO1FBQ2IsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxFQUNGO0FBTDRFLENBSzVFLENBQUMsQ0FBQztBQUVKLElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2pELEtBQUssRUFBRSxhQUFhO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDcEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUTtRQUNoQyxTQUFTLEVBQUUsb0JBQWEsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBRTtRQUMvRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO0tBQ3RDLENBQUM7QUFQZ0QsQ0FPaEQsQ0FBQyxDQUFDO0FBRUosTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxFQUlGO1FBSDdCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQTtJQUVGLElBQUEsS0FBc0IsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFyQyxNQUFNLFFBQUEsRUFBRSxTQUFTLFFBQW9CLENBQUM7SUFFN0MsU0FBUyxDQUFDO1FBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFTCxJQUFBLEdBQUcsR0FBSyxZQUFZLENBQUM7UUFDM0IsUUFBUSxFQUFFO1lBQ1IsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQ0YsQ0FBQyxJQUxTLENBS1I7SUFFSCxPQUFPLENBQ0wsS0FBQyxTQUFTLGFBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxnQkFDakMsS0FBQyxlQUFlLGNBQUUsUUFBUSxHQUFtQixJQUNuQyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5JztcclxuaW1wb3J0IHsgTWVudVByb3BzIH0gZnJvbSAnLi4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTx7IGlzT3BlbjogYm9vbGVhbiB9PigoeyB0aGVtZSwgaXNPcGVuIH0pID0+ICh7XHJcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcclxuICAuLi4oIWlzT3BlbiAmJiB7XHJcbiAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgfSksXHJcbn0pKTtcclxuXHJcbmNvbnN0IEJhc2VNZW51V3JhcHBlciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcclxuICB3aWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICBoZWlnaHQ6ICdhdXRvJyxcclxuICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gIGZpbHRlcjogdGhlbWUuYm94U2hhZG93LmRyb3Bkb3duLFxyXG4gIGJvcmRlclRvcDogYDVweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWR9YCxcclxuICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgQmFzZURyb3Bkb3duTWVudSA9ICh7XHJcbiAgb3BlbmVkID0gZmFsc2UsXHJcbiAgb25DbG9zZSxcclxuICBjaGlsZHJlbixcclxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShvcGVuZWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKG9wZW5lZCk7XHJcbiAgfSwgW29wZW5lZF0pO1xyXG5cclxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcclxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICAgIG9uQ2xvc2UgJiYgb25DbG9zZSgpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgaXNPcGVuPXtpc09wZW59IHJlZj17cmVmfT5cclxuICAgICAgPEJhc2VNZW51V3JhcHBlcj57Y2hpbGRyZW59PC9CYXNlTWVudVdyYXBwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG4iXX0=