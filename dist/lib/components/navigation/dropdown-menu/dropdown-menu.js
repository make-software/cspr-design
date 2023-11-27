import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { BaseDropdownMenu } from '../base-dropdown-menu/base-dropdown-menu';
import FlexColumn from '../../flex-column/flex-column';
import styled from 'styled-components';
var StyledFlexColumn = styled(FlexColumn)(function (_a) {
    var theme = _a.theme, multiColumn = _a.multiColumn, padding = _a.padding;
    return (__assign({ padding: padding !== null && padding !== void 0 ? padding : '8px' }, (multiColumn && {
        padding: '8px',
        '& li:hover > *': {
            borderRadius: theme.borderRadius.base,
        },
    })));
});
export var DropdownMenu = function (_a) {
    var children = _a.children, multiColumn = _a.multiColumn, padding = _a.padding, rest = __rest(_a, ["children", "multiColumn", "padding"]);
    return (_jsx(BaseDropdownMenu, __assign({}, rest, { children: _jsx(StyledFlexColumn, __assign({ multiColumn: multiColumn, padding: padding }, { children: children })) })));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLFVBQVUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RCxPQUFPLE1BQU0sTUFBTSxtQkFBbUIsQ0FBQztBQUV2QyxJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FJekMsVUFBQyxFQUErQjtRQUE3QixLQUFLLFdBQUEsRUFBRSxXQUFXLGlCQUFBLEVBQUUsT0FBTyxhQUFBO0lBQU8sT0FBQSxZQUNuQyxPQUFPLEVBQUUsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksS0FBSyxJQUN0QixDQUFDLFdBQVcsSUFBSTtRQUNqQixPQUFPLEVBQUUsS0FBSztRQUNkLGdCQUFnQixFQUFFO1lBQ2hCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7U0FDdEM7S0FDRixDQUFDLEVBQ0Y7QUFSbUMsQ0FRbkMsQ0FDSCxDQUFDO0FBU0YsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLFVBQUMsRUFLUTtJQUpuQyxJQUFBLFFBQVEsY0FBQSxFQUNSLFdBQVcsaUJBQUEsRUFDWCxPQUFPLGFBQUEsRUFDSixJQUFJLGNBSm9CLHNDQUs1QixDQURRO0lBRVAsT0FBTyxDQUNMLEtBQUMsZ0JBQWdCLGVBQUssSUFBSSxjQUN4QixLQUFDLGdCQUFnQixhQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sZ0JBQUcsUUFBUSxJQUFvQixJQUMxRSxDQUNwQixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFzZURyb3Bkb3duTWVudSB9IGZyb20gJy4uL2Jhc2UtZHJvcGRvd24tbWVudS9iYXNlLWRyb3Bkb3duLW1lbnUnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZEZsZXhDb2x1bW4gPSBzdHlsZWQoRmxleENvbHVtbik8e1xuICAgIG11bHRpQ29sdW1uPzogYm9vbGVhbixcbiAgICBwYWRkaW5nPzogc3RyaW5nXG59PihcbiAgKHsgdGhlbWUsIG11bHRpQ29sdW1uLCBwYWRkaW5nIH0pID0+ICh7XG4gICAgcGFkZGluZzogcGFkZGluZyA/PyAnOHB4JyxcbiAgICAuLi4obXVsdGlDb2x1bW4gJiYge1xuICAgICAgcGFkZGluZzogJzhweCcsXG4gICAgICAnJiBsaTpob3ZlciA+IConOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBNZW51UHJvcHMge1xuICBvcGVuZWQ/OiBib29sZWFuO1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgbXVsdGlDb2x1bW4/OiBib29sZWFuO1xuICAgIHBhZGRpbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnUgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlDb2x1bW4sXG4gIHBhZGRpbmcsXG4gIC4uLnJlc3Rcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFzZURyb3Bkb3duTWVudSB7Li4ucmVzdH0+XG4gICAgICA8U3R5bGVkRmxleENvbHVtbiBtdWx0aUNvbHVtbj17bXVsdGlDb2x1bW59IHBhZGRpbmc9e3BhZGRpbmd9PntjaGlsZHJlbn08L1N0eWxlZEZsZXhDb2x1bW4+XG4gICAgPC9CYXNlRHJvcGRvd25NZW51PlxuICApO1xufTtcbiJdfQ==