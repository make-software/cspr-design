"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var header_tab_menu_item_1 = tslib_1.__importDefault(require("./header-tab-menu-item"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var tab_menu_1 = tslib_1.__importDefault(require("../tab-menu/tab-menu"));
exports.default = {
    component: header_tab_menu_item_1.default,
    title: 'HeaderTabMenuItem',
    args: {
        active: false,
        monotype: false,
        capitalize: false,
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: (0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 20 }, { children: (0, jsx_runtime_1.jsxs)(tab_menu_1.default, { children: [(0, jsx_runtime_1.jsx)(header_tab_menu_item_1.default, tslib_1.__assign({}, args, { children: "Home" })), (0, jsx_runtime_1.jsx)(header_tab_menu_item_1.default, tslib_1.__assign({}, args, { children: "Blocks" })), (0, jsx_runtime_1.jsx)(header_tab_menu_item_1.default, tslib_1.__assign({}, args, { children: "Deploys" }))] }) })) }))); };
exports.Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXRhYi1tZW51LWl0ZW0uc3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9oZWFkZXItdGFiLW1lbnUtaXRlbS9oZWFkZXItdGFiLW1lbnUtaXRlbS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHdGQUF1RDtBQUN2RCwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELDBFQUEyQztBQUUzQyxrQkFBZTtJQUNYLFNBQVMsRUFBRSw4QkFBaUI7SUFDNUIsS0FBSyxFQUFFLG1CQUFtQjtJQUMxQixJQUFJLEVBQUU7UUFDRixNQUFNLEVBQUUsS0FBSztRQUNiLFFBQVEsRUFBRSxLQUFLO1FBQ2YsVUFBVSxFQUFFLEtBQUs7S0FDcEI7Q0FDdUMsQ0FBQztBQUU3QyxJQUFNLFFBQVEsR0FBNkMsVUFBQyxJQUFJLElBQUssT0FBQSxDQUNqRSx1QkFBQyxrQkFBTyxxQkFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDckIsdUJBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLEVBQUUsZ0JBQ3hCLHdCQUFDLGtCQUFPLGVBQ0osdUJBQUMsOEJBQWlCLHVCQUFLLElBQUksd0JBQTBCLEVBQ3JELHVCQUFDLDhCQUFpQix1QkFBSyxJQUFJLDBCQUE0QixFQUN2RCx1QkFBQyw4QkFBaUIsdUJBQUssSUFBSSwyQkFBNkIsSUFDbEQsSUFDRCxJQUNQLENBQ2IsRUFWb0UsQ0FVcEUsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50TWV0YSwgQ29tcG9uZW50U3RvcnkgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCBIZWFkZXJUYWJNZW51SXRlbSBmcm9tICcuL2hlYWRlci10YWItbWVudS1pdGVtJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCBUYWJNZW51IGZyb20gJy4uL3RhYi1tZW51L3RhYi1tZW51JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudDogSGVhZGVyVGFiTWVudUl0ZW0sXG4gICAgdGl0bGU6ICdIZWFkZXJUYWJNZW51SXRlbScsXG4gICAgYXJnczoge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBtb25vdHlwZTogZmFsc2UsXG4gICAgICAgIGNhcGl0YWxpemU6IGZhbHNlLFxuICAgIH0sXG59IGFzIENvbXBvbmVudE1ldGE8dHlwZW9mIEhlYWRlclRhYk1lbnVJdGVtPjtcblxuY29uc3QgVGVtcGxhdGU6IENvbXBvbmVudFN0b3J5PHR5cGVvZiBIZWFkZXJUYWJNZW51SXRlbT4gPSAoYXJncykgPT4gKFxuICAgIDxGbGV4Um93IGl0ZW1zU3BhY2luZz17MzB9PlxuICAgICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezIwfT5cbiAgICAgICAgICAgIDxUYWJNZW51PlxuICAgICAgICAgICAgICAgIDxIZWFkZXJUYWJNZW51SXRlbSB7Li4uYXJnc30+SG9tZTwvSGVhZGVyVGFiTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRhYk1lbnVJdGVtIHsuLi5hcmdzfT5CbG9ja3M8L0hlYWRlclRhYk1lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJUYWJNZW51SXRlbSB7Li4uYXJnc30+RGVwbG95czwvSGVhZGVyVGFiTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1RhYk1lbnU+XG4gICAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L0ZsZXhSb3c+XG4pO1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuIl19