"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var NavItem = styled_components_1.default.li(function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return theme.withMedia(tslib_1.__assign(tslib_1.__assign({ display: 'flex', color: theme.styleguideColors.contentTertiary, padding: ['16px 32px', '16px 48px', '0 32px 0 0', '0 32px 0 0'], height: '100%', alignItems: 'center' }, (selected && {
        color: theme.styleguideColors.contentOnFill,
    })), { '& > *:hover': {
            cursor: 'pointer',
            color: theme.styleguideColors.contentOnFill,
        } }));
});
var MainMenuItem = function (_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, children = _a.children;
    return (0, jsx_runtime_1.jsx)(NavItem, tslib_1.__assign({ selected: selected }, { children: children }));
};
exports.MainMenuItem = MainMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1tZW51LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9tYWluLW1lbnUvbWFpbi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLElBQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUF5QixVQUFDLEVBQW1CO1FBQWpCLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBQTtJQUNsRSxPQUFBLEtBQUssQ0FBQyxTQUFTLHFDQUNiLE9BQU8sRUFBRSxNQUFNLEVBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQzdDLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxFQUMvRCxNQUFNLEVBQUUsTUFBTSxFQUNkLFVBQVUsRUFBRSxRQUFRLElBQ2pCLENBQUMsUUFBUSxJQUFJO1FBQ2QsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO0tBQzVDLENBQUMsS0FDRixhQUFhLEVBQUU7WUFDYixNQUFNLEVBQUUsU0FBUztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7U0FDNUMsSUFDRDtBQWJGLENBYUUsQ0FDSCxDQUFDO0FBTUssSUFBTSxZQUFZLEdBQUcsVUFBQyxFQUdVO1FBRnJDLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUssS0FBQSxFQUNoQixRQUFRLGNBQUE7SUFFUixPQUFPLHVCQUFDLE9BQU8scUJBQUMsUUFBUSxFQUFFLFFBQVEsZ0JBQUcsUUFBUSxJQUFXLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0FBTFcsUUFBQSxZQUFZLGdCQUt2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmxpPHsgc2VsZWN0ZWQ/OiBib29sZWFuIH0+KCh7IHRoZW1lLCBzZWxlY3RlZCB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXHJcbiAgICBwYWRkaW5nOiBbJzE2cHggMzJweCcsICcxNnB4IDQ4cHgnLCAnMCAzMnB4IDAgMCcsICcwIDMycHggMCAwJ10sXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgLi4uKHNlbGVjdGVkICYmIHtcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICAgIH0pLFxyXG4gICAgJyYgPiAqOmhvdmVyJzoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbCxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFpbk1lbnVJdGVtUHJvcHMge1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5NZW51SXRlbSA9ICh7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZSxcclxuICBjaGlsZHJlbixcclxufTogUHJvcHNXaXRoQ2hpbGRyZW48TWFpbk1lbnVJdGVtUHJvcHM+KSA9PiB7XHJcbiAgcmV0dXJuIDxOYXZJdGVtIHNlbGVjdGVkPXtzZWxlY3RlZH0+e2NoaWxkcmVufTwvTmF2SXRlbT47XHJcbn07XHJcbiJdfQ==