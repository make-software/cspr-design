import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useClickAway } from '../../../hooks/use-click-away';
var BaseMenu = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? 'light' : _b, children = _a.children;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var ref = useClickAway({
        callback: function () {
            setIsOpen(false);
        },
    }).ref;
    return _jsx("div", __assign({ ref: ref }, { children: children }));
};
export var Menu = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (_jsx("div", { children: _jsx(BaseMenu, __assign({}, rest, { children: children })) }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL21lbnUvbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFjLEVBQUUsUUFBUSxFQUFxQixNQUFNLE9BQU8sQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFRN0QsSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUdhO1FBRjdCLGFBQWUsRUFBZixLQUFLLG1CQUFHLE9BQU8sS0FBQSxFQUNmLFFBQVEsY0FBQTtJQUVGLElBQUEsS0FBc0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFwQyxNQUFNLFFBQUEsRUFBRSxTQUFTLFFBQW1CLENBQUM7SUFFcEMsSUFBQSxHQUFHLEdBQUssWUFBWSxDQUFDO1FBQzNCLFFBQVEsRUFBRTtZQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDO0tBQ0YsQ0FBQyxJQUpTLENBSVI7SUFFSCxPQUFPLHVCQUFLLEdBQUcsRUFBRSxHQUFHLGdCQUFHLFFBQVEsSUFBTyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLElBQUksR0FBRyxVQUFDLEVBQXFCO0lBQW5CLElBQUEsUUFBUSxjQUFBLEVBQUssSUFBSSxjQUFuQixZQUFxQixDQUFGO0lBQ3RDLE9BQU8sQ0FDTCx3QkFDRSxLQUFDLFFBQVEsZUFBSyxJQUFJLGNBQUcsUUFBUSxJQUFZLEdBQ3JDLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5cbmludGVyZmFjZSBNZW51UHJvcHMge1xuICB0aGVtZT86ICdkYXJrJyB8ICdsaWdodCc7XG4gIG9wZW5lZD86IGJvb2xlYW47XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBCYXNlTWVudSA9ICh7XG4gIHRoZW1lID0gJ2xpZ2h0JyxcbiAgY2hpbGRyZW4sXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxNZW51UHJvcHM+KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgY29uc3QgTWVudSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJhc2VNZW51IHsuLi5yZXN0fT57Y2hpbGRyZW59PC9CYXNlTWVudT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0=