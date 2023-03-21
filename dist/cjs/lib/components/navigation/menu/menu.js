"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var use_click_away_1 = require("../../../hooks/use-click-away");
var BaseMenu = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? 'light' : _b, children = _a.children;
    var _c = (0, react_1.useState)(false), isOpen = _c[0], setIsOpen = _c[1];
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            setIsOpen(false);
        },
    }).ref;
    return (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ ref: ref }, { children: children }));
};
var Menu = function (_a) {
    var children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(BaseMenu, tslib_1.__assign({}, rest, { children: children })) }));
};
exports.Menu = Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL21lbnUvbWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBMkQ7QUFDM0QsZ0VBQTZEO0FBUTdELElBQU0sUUFBUSxHQUFHLFVBQUMsRUFHYTtRQUY3QixhQUFlLEVBQWYsS0FBSyxtQkFBRyxPQUFPLEtBQUEsRUFDZixRQUFRLGNBQUE7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsRUFBcEMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFtQixDQUFDO0lBRXBDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQztLQUNGLENBQUMsSUFKUyxDQUlSO0lBRUgsT0FBTyxpREFBSyxHQUFHLEVBQUUsR0FBRyxnQkFBRyxRQUFRLElBQU8sQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFSyxJQUFNLElBQUksR0FBRyxVQUFDLEVBQXFCO0lBQW5CLElBQUEsUUFBUSxjQUFBLEVBQUssSUFBSSxzQkFBbkIsWUFBcUIsQ0FBRjtJQUN0QyxPQUFPLENBQ0wsMENBQ0UsdUJBQUMsUUFBUSx1QkFBSyxJQUFJLGNBQUcsUUFBUSxJQUFZLEdBQ3JDLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQU5XLFFBQUEsSUFBSSxRQU1mIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5JztcblxuaW50ZXJmYWNlIE1lbnVQcm9wcyB7XG4gIHRoZW1lPzogJ2RhcmsnIHwgJ2xpZ2h0JztcbiAgb3BlbmVkPzogYm9vbGVhbjtcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEJhc2VNZW51ID0gKHtcbiAgdGhlbWUgPSAnbGlnaHQnLFxuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcbiAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gPGRpdiByZWY9e3JlZn0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QmFzZU1lbnUgey4uLnJlc3R9PntjaGlsZHJlbn08L0Jhc2VNZW51PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==