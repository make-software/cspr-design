"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var form_field_1 = tslib_1.__importDefault(require("./form-field"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var input_1 = tslib_1.__importDefault(require("../input/input"));
exports.default = {
    component: form_field_1.default,
    title: 'FormField',
    args: {
        id: 'form',
        label: 'label',
        rightLabel: 'right label',
        status: 'success',
        statusText: 'status text',
        disabled: false,
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: (0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 20 }, { children: (0, jsx_runtime_1.jsx)(form_field_1.default, tslib_1.__assign({}, args, { children: (0, jsx_runtime_1.jsx)(input_1.default, { value: 'Faucet' }) })) })) }))); };
exports.Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC5zdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Zvcm0tZmllbGQvZm9ybS1maWVsZC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG9FQUFxQztBQUNyQywwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELGlFQUFtQztBQUVuQyxrQkFBZTtJQUNYLFNBQVMsRUFBRSxvQkFBUztJQUNwQixLQUFLLEVBQUUsV0FBVztJQUNsQixJQUFJLEVBQUU7UUFDRixFQUFFLEVBQUUsTUFBTTtRQUNWLEtBQUssRUFBRSxPQUFPO1FBQ2QsVUFBVSxFQUFFLGFBQWE7UUFDekIsTUFBTSxFQUFFLFNBQVM7UUFDakIsVUFBVSxFQUFFLGFBQWE7UUFDekIsUUFBUSxFQUFFLEtBQUs7S0FDbEI7Q0FDK0IsQ0FBQztBQUVyQyxJQUFNLFFBQVEsR0FBcUMsVUFBQyxJQUFJLElBQUssT0FBQSxDQUN6RCx1QkFBQyxrQkFBTyxxQkFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDckIsdUJBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLEVBQUUsZ0JBQ3hCLHVCQUFDLG9CQUFTLHVCQUFLLElBQUksY0FDZix1QkFBQyxlQUFLLElBQUMsS0FBSyxFQUFDLFFBQVEsR0FBRyxJQUNoQixJQUNILElBQ1AsQ0FDYixFQVI0RCxDQVE1RCxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRTdG9yeSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IEZvcm1GaWVsZCBmcm9tICcuL2Zvcm0tZmllbGQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0L2lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudDogRm9ybUZpZWxkLFxuICAgIHRpdGxlOiAnRm9ybUZpZWxkJyxcbiAgICBhcmdzOiB7XG4gICAgICAgIGlkOiAnZm9ybScsXG4gICAgICAgIGxhYmVsOiAnbGFiZWwnLFxuICAgICAgICByaWdodExhYmVsOiAncmlnaHQgbGFiZWwnLFxuICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgc3RhdHVzVGV4dDogJ3N0YXR1cyB0ZXh0JyxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIH0sXG59IGFzIENvbXBvbmVudE1ldGE8dHlwZW9mIEZvcm1GaWVsZD47XG5cbmNvbnN0IFRlbXBsYXRlOiBDb21wb25lbnRTdG9yeTx0eXBlb2YgRm9ybUZpZWxkPiA9IChhcmdzKSA9PiAoXG4gICAgPEZsZXhSb3cgaXRlbXNTcGFjaW5nPXszMH0+XG4gICAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17MjB9PlxuICAgICAgICAgICAgPEZvcm1GaWVsZCB7Li4uYXJnc30gPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT0nRmF1Y2V0JyAvPlxuICAgICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L0ZsZXhSb3c+XG4pO1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuIl19