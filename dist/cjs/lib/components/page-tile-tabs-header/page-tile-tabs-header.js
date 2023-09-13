"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTileTabsHeader = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledWrapper = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, childrenCount = _a.childrenCount;
    return theme.withMedia({
        display: 'flex',
        flexGrow: 1,
        justifyContent: childrenCount > 2 ? ['left', 'center'] : ['center'],
        padding: 16,
        overflowX: 'auto',
    });
});
var PageTileTabsHeader = function (_a) {
    var tabsCount = _a.tabsCount, children = _a.children;
    return (0, jsx_runtime_1.jsx)(StyledWrapper, tslib_1.__assign({ childrenCount: tabsCount }, { children: children }));
};
exports.PageTileTabsHeader = PageTileTabsHeader;
exports.default = exports.PageTileTabsHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aWxlLXRhYnMtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3BhZ2UtdGlsZS10YWJzLWhlYWRlci9wYWdlLXRpbGUtdGFicy1oZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBT3ZDLElBQU0sYUFBYSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUM5QixVQUFDLEVBQXdCO1FBQXRCLEtBQUssV0FBQSxFQUFFLGFBQWEsbUJBQUE7SUFDckIsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsQ0FBQztRQUNYLGNBQWMsRUFBRSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDbkUsT0FBTyxFQUFFLEVBQUU7UUFDWCxTQUFTLEVBQUUsTUFBTTtLQUNsQixDQUFDO0FBTkYsQ0FNRSxDQUNMLENBQUM7QUFFSyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsRUFBOEI7UUFBNUIsU0FBUyxlQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ3RELE9BQU8sdUJBQUMsYUFBYSxxQkFBQyxhQUFhLEVBQUUsU0FBUyxnQkFBRyxRQUFRLElBQWlCLENBQUM7QUFDN0UsQ0FBQyxDQUFDO0FBRlcsUUFBQSxrQkFBa0Isc0JBRTdCO0FBRUYsa0JBQWUsMEJBQWtCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Jhc2VQcm9wc30gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICB0YWJzQ291bnQ6IG51bWJlcjtcbn1cblxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXY8eyBjaGlsZHJlbkNvdW50OiBudW1iZXIgfT4oXG4gICh7IHRoZW1lLCBjaGlsZHJlbkNvdW50IH0pID0+XG4gICAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IGNoaWxkcmVuQ291bnQgPiAyID8gWydsZWZ0JywgJ2NlbnRlciddIDogWydjZW50ZXInXSxcbiAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gICAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBQYWdlVGlsZVRhYnNIZWFkZXIgPSAoeyB0YWJzQ291bnQsIGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiA8U3R5bGVkV3JhcHBlciBjaGlsZHJlbkNvdW50PXt0YWJzQ291bnR9PntjaGlsZHJlbn08L1N0eWxlZFdyYXBwZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVRpbGVUYWJzSGVhZGVyXG4iXX0=