"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var input_1 = tslib_1.__importDefault(require("./input"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
exports.default = {
    component: input_1.default,
    title: 'Input',
    args: {
        value: 'USA',
        placeholder: 'Type here',
        disabled: false,
        suffixText: 'USD',
        monotype: false,
        label: 'country',
        rightLabel: 'currency',
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: [(0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: (0, jsx_runtime_1.jsx)(input_1.default, tslib_1.__assign({}, args)) })), (0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: (0, jsx_runtime_1.jsx)(input_1.default, { label: 'invalid input', error: true, validationText: 'invalid input' }) }))] })) })); };
exports.Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuc3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLDBEQUE0QjtBQUM1QiwwRUFBMkM7QUFDM0MsbUZBQW9EO0FBRXBELGtCQUFlO0lBQ1gsU0FBUyxFQUFFLGVBQUs7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsS0FBSztRQUNaLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsU0FBUztRQUNoQixVQUFVLEVBQUUsVUFBVTtLQUN6QjtDQUMyQixDQUFDO0FBRWpDLElBQU0sUUFBUSxHQUFpQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQ3JELDJEQUNJLHdCQUFDLGtCQUFPLHFCQUFDLFlBQVksRUFBRSxFQUFFLGlCQUNyQix1QkFBQyxxQkFBVSxxQkFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDeEIsdUJBQUMsZUFBSyx1QkFBSyxJQUFJLEVBQUcsSUFDVCxFQUNiLHVCQUFDLHFCQUFVLHFCQUFDLFlBQVksRUFBRSxFQUFFLGdCQUN4Qix1QkFBQyxlQUFLLElBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxLQUFLLFFBQUMsY0FBYyxFQUFDLGVBQWUsR0FBRyxJQUMzRCxLQUNQLEdBQ1gsQ0FDTixFQVh3RCxDQVd4RCxDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRTdG9yeSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50OiBJbnB1dCxcbiAgICB0aXRsZTogJ0lucHV0JyxcbiAgICBhcmdzOiB7XG4gICAgICAgIHZhbHVlOiAnVVNBJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdUeXBlIGhlcmUnLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIHN1ZmZpeFRleHQ6ICdVU0QnLFxuICAgICAgICBtb25vdHlwZTogZmFsc2UsXG4gICAgICAgIGxhYmVsOiAnY291bnRyeScsXG4gICAgICAgIHJpZ2h0TGFiZWw6ICdjdXJyZW5jeScsXG4gICAgfSxcbn0gYXMgQ29tcG9uZW50TWV0YTx0eXBlb2YgSW5wdXQ+O1xuXG5jb25zdCBUZW1wbGF0ZTogQ29tcG9uZW50U3Rvcnk8dHlwZW9mIElucHV0PiA9IChhcmdzKSA9PiAoXG4gICAgPD5cbiAgICAgICAgPEZsZXhSb3cgaXRlbXNTcGFjaW5nPXszMH0+XG4gICAgICAgICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezMwfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgey4uLmFyZ3N9Lz5cbiAgICAgICAgICAgIDwvRmxleENvbHVtbj5cbiAgICAgICAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17MzB9PlxuICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD0naW52YWxpZCBpbnB1dCcgZXJyb3IgdmFsaWRhdGlvblRleHQ9J2ludmFsaWQgaW5wdXQnIC8+XG4gICAgICAgICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBQcmltYXJ5ID0gVGVtcGxhdGUuYmluZCh7fSk7XG4iXX0=