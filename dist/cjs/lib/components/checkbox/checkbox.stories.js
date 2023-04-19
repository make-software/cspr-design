"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var checkbox_1 = tslib_1.__importDefault(require("./checkbox"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
exports.default = {
    component: checkbox_1.default,
    title: 'Checkbox',
    args: {
        checked: true,
        label: 'checkbox',
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 10 }, { children: [(0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 10 }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.default, tslib_1.__assign({}, args)) })), (0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 10 }, { children: (0, jsx_runtime_1.jsx)(checkbox_1.default, { checked: true, disabled: true, label: "disabled" }) }))] }))); };
exports.Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guc3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGdFQUFrQztBQUNsQywwRUFBMkM7QUFDM0MsbUZBQW9EO0FBRXBELGtCQUFlO0lBQ1gsU0FBUyxFQUFFLGtCQUFRO0lBQ25CLEtBQUssRUFBRSxVQUFVO0lBQ2pCLElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxJQUFJO1FBQ2IsS0FBSyxFQUFFLFVBQVU7S0FDcEI7Q0FDOEIsQ0FBQztBQUVwQyxJQUFNLFFBQVEsR0FBb0MsVUFBQyxJQUFJLElBQUssT0FBQSxDQUN4RCx3QkFBQyxrQkFBTyxxQkFBQyxZQUFZLEVBQUUsRUFBRSxpQkFDckIsdUJBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLEVBQUUsZ0JBQ3hCLHVCQUFDLGtCQUFRLHVCQUFLLElBQUksRUFBRyxJQUNaLEVBQ2IsdUJBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLEVBQUUsZ0JBQ3hCLHVCQUFDLGtCQUFRLElBQUMsT0FBTyxRQUFDLFFBQVEsUUFBQyxLQUFLLEVBQUMsVUFBVSxHQUFFLElBQ3BDLEtBQ1AsQ0FDYixFQVQyRCxDQVMzRCxDQUFDO0FBR1csUUFBQSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRTdG9yeSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vY2hlY2tib3gnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50OiBDaGVja2JveCxcbiAgICB0aXRsZTogJ0NoZWNrYm94JyxcbiAgICBhcmdzOiB7XG4gICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnY2hlY2tib3gnLFxuICAgIH0sXG59IGFzIENvbXBvbmVudE1ldGE8dHlwZW9mIENoZWNrYm94PjtcblxuY29uc3QgVGVtcGxhdGU6IENvbXBvbmVudFN0b3J5PHR5cGVvZiBDaGVja2JveD4gPSAoYXJncykgPT4gKFxuICAgIDxGbGV4Um93IGl0ZW1zU3BhY2luZz17MTB9PlxuICAgICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICAgICAgICAgIDxDaGVja2JveCB7Li4uYXJnc30vPlxuICAgICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17MTB9PlxuICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQgZGlzYWJsZWQgbGFiZWw9XCJkaXNhYmxlZFwiLz5cbiAgICAgICAgPC9GbGV4Q29sdW1uPlxuICAgIDwvRmxleFJvdz5cbik7XG5cblxuZXhwb3J0IGNvbnN0IFByaW1hcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTsiXX0=