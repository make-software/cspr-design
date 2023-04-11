"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var base_menu_1 = require("../../base-menu/base-menu");
var flex_column_1 = tslib_1.__importDefault(require("../../../flex-column/flex-column"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFlexColumn = (0, styled_components_1.default)(flex_column_1.default)(function () { return ({
    padding: "16px 0",
}); });
var Menu = function (_a) {
    var children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(base_menu_1.BaseMenu, tslib_1.__assign({}, rest, { children: (0, jsx_runtime_1.jsx)(StyledFlexColumn, { children: children }) })));
};
exports.Menu = Menu;
exports.default = exports.Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvbWVudS9tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHVEQUFxRDtBQUNyRCx5RkFBMEQ7QUFDMUQsZ0ZBQXVDO0FBRXZDLElBQU0sZ0JBQWdCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUNqRCxPQUFPLEVBQUUsUUFBUTtDQUNsQixDQUFDLEVBRmdELENBRWhELENBQUMsQ0FBQTtBQU9JLElBQU0sSUFBSSxHQUFHLFVBQUMsRUFBbUQ7SUFBakQsSUFBQSxRQUFRLGNBQUEsRUFBSyxJQUFJLHNCQUFuQixZQUFxQixDQUFGO0lBQ3RDLE9BQU8sQ0FDTCx1QkFBQyxvQkFBUSx1QkFBSyxJQUFJLGNBQ2hCLHVCQUFDLGdCQUFnQixjQUFFLFFBQVEsR0FBb0IsSUFDdEMsQ0FDWixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBTlcsUUFBQSxJQUFJLFFBTWY7QUFFRixrQkFBZSxZQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhc2VNZW51IH0gZnJvbSBcIi4uLy4uL2Jhc2UtbWVudS9iYXNlLW1lbnVcIjtcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gXCIuLi8uLi8uLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU3R5bGVkRmxleENvbHVtbiA9IHN0eWxlZChGbGV4Q29sdW1uKSgoKSA9PiAoe1xuICBwYWRkaW5nOiBcIjE2cHggMFwiLFxufSkpXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudVByb3BzIHtcbiAgb3BlbmVkPzogYm9vbGVhbjtcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfTogUHJvcHNXaXRoQ2hpbGRyZW48TWVudVByb3BzPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCYXNlTWVudSB7Li4ucmVzdH0+XG4gICAgICA8U3R5bGVkRmxleENvbHVtbj57Y2hpbGRyZW59PC9TdHlsZWRGbGV4Q29sdW1uPlxuICAgIDwvQmFzZU1lbnU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIl19