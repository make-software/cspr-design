"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var radio_button_1 = tslib_1.__importDefault(require("./radio-button"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
exports.default = {
    component: radio_button_1.default,
    title: 'RadioButton',
    args: {
        value: 'casper',
        selected: 'casper',
        disabled: true,
        label: 'Test Net'
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: (0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 20 }, { children: (0, jsx_runtime_1.jsx)(radio_button_1.default, tslib_1.__assign({}, args)) })) }))); };
exports.Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLnN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLHdFQUF5QztBQUN6QywwRUFBMkM7QUFDM0MsbUZBQW9EO0FBRXBELGtCQUFlO0lBQ1gsU0FBUyxFQUFFLHNCQUFXO0lBQ3RCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLElBQUksRUFBRTtRQUNGLEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsVUFBVTtLQUNwQjtDQUNpQyxDQUFDO0FBRXZDLElBQU0sUUFBUSxHQUF1QyxVQUFDLElBQUksSUFBSyxPQUFBLENBQzNELHVCQUFDLGtCQUFPLHFCQUFDLFlBQVksRUFBRSxFQUFFLGdCQUNyQix1QkFBQyxxQkFBVSxxQkFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDeEIsdUJBQUMsc0JBQVcsdUJBQUssSUFBSSxFQUFHLElBQ2YsSUFDUCxDQUNiLEVBTjhELENBTTlELENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXBvbmVudE1ldGEsIENvbXBvbmVudFN0b3J5IH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCc7XG5pbXBvcnQgUmFkaW9CdXR0b24gZnJvbSAnLi9yYWRpby1idXR0b24nO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50OiBSYWRpb0J1dHRvbixcbiAgICB0aXRsZTogJ1JhZGlvQnV0dG9uJyxcbiAgICBhcmdzOiB7XG4gICAgICAgIHZhbHVlOiAnY2FzcGVyJyxcbiAgICAgICAgc2VsZWN0ZWQ6ICdjYXNwZXInLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdUZXN0IE5ldCdcbiAgICB9LFxufSBhcyBDb21wb25lbnRNZXRhPHR5cGVvZiBSYWRpb0J1dHRvbj47XG5cbmNvbnN0IFRlbXBsYXRlOiBDb21wb25lbnRTdG9yeTx0eXBlb2YgUmFkaW9CdXR0b24+ID0gKGFyZ3MpID0+IChcbiAgICA8RmxleFJvdyBpdGVtc1NwYWNpbmc9ezMwfT5cbiAgICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXsyMH0+XG4gICAgICAgICAgICA8UmFkaW9CdXR0b24gey4uLmFyZ3N9Lz5cbiAgICAgICAgPC9GbGV4Q29sdW1uPlxuICAgIDwvRmxleFJvdz5cbik7XG5cbmV4cG9ydCBjb25zdCBQcmltYXJ5ID0gVGVtcGxhdGUuYmluZCh7fSk7XG4iXX0=