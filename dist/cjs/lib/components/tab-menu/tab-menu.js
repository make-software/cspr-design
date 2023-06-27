"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTabMenu = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        flexShrink: 0,
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
    });
});
function TabMenu(props) {
    return (0, jsx_runtime_1.jsx)(StyledTabMenu, tslib_1.__assign({}, props));
}
exports.TabMenu = TabMenu;
exports.default = TabMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdGFiLW1lbnUvdGFiLW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZ0ZBQXVDO0FBS3ZDLElBQU0sYUFBYSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMvQyxVQUFVLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxNQUFNO1FBQ2YsUUFBUSxFQUFFLFlBQVk7UUFDdEIsVUFBVSxFQUFFLFFBQVE7S0FDckIsQ0FBQztBQUw4QyxDQUs5QyxDQUFDLENBQUM7QUFFSixTQUFnQixPQUFPLENBQUMsS0FBbUI7SUFDekMsT0FBTyx1QkFBQyxhQUFhLHVCQUFLLEtBQUssRUFBSSxDQUFDO0FBQ3RDLENBQUM7QUFGRCwwQkFFQztBQUVELGtCQUFlLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRhYk1lbnVQcm9wcyB7fVxyXG5cclxuY29uc3QgU3R5bGVkVGFiTWVudSA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBmbGV4U2hyaW5rOiAwLFxyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RmxvdzogJ3JvdyBub3dyYXAnLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG59KSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFiTWVudShwcm9wczogVGFiTWVudVByb3BzKSB7XHJcbiAgcmV0dXJuIDxTdHlsZWRUYWJNZW51IHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYk1lbnU7XHJcbiJdfQ==