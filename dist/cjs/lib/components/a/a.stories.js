"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var a_1 = tslib_1.__importDefault(require("./a"));
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'A',
    component: a_1.default,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return (0, jsx_runtime_1.jsx)(a_1.default, tslib_1.__assign({}, args)); };
exports.Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary.args = {
    children: (0, jsx_runtime_1.jsx)("div", { children: "This is a link" })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5zdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2EvYS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLGtEQUFvQjtBQUVwQiwwR0FBMEc7QUFDMUcsa0JBQWU7SUFDYixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxXQUFDO0lBQ1oscUVBQXFFO0lBQ3JFLFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7S0FDdEM7Q0FDeUIsQ0FBQztBQUU3QiwyR0FBMkc7QUFDM0csSUFBTSxRQUFRLEdBQTZCLFVBQUMsSUFBSSxJQUFLLE9BQUEsdUJBQUMsV0FBQyx1QkFBSyxJQUFJLEVBQUksRUFBZixDQUFlLENBQUM7QUFFeEQsUUFBQSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6Qyx5RUFBeUU7QUFDekUsZUFBTyxDQUFDLElBQUksR0FBRztJQUNiLFFBQVEsRUFBRSw2REFBeUI7Q0FDcEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnRTdG9yeSwgQ29tcG9uZW50TWV0YSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuXG5pbXBvcnQgQSBmcm9tIFwiLi9hXCI7XG5cbi8vIE1vcmUgb24gZGVmYXVsdCBleHBvcnQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL3JlYWN0L3dyaXRpbmctc3Rvcmllcy9pbnRyb2R1Y3Rpb24jZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdBJyxcbiAgY29tcG9uZW50OiBBLFxuICAvLyBNb3JlIG9uIGFyZ1R5cGVzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC9hcGkvYXJndHlwZXNcbiAgYXJnVHlwZXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHsgY29udHJvbDogJ2NvbG9yJyB9LFxuICB9LFxufSBhcyBDb21wb25lbnRNZXRhPHR5cGVvZiBBPjtcblxuLy8gTW9yZSBvbiBjb21wb25lbnQgdGVtcGxhdGVzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvaW50cm9kdWN0aW9uI3VzaW5nLWFyZ3NcbmNvbnN0IFRlbXBsYXRlOiBDb21wb25lbnRTdG9yeTx0eXBlb2YgQT4gPSAoYXJncykgPT4gPEEgey4uLmFyZ3N9IC8+O1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuLy8gTW9yZSBvbiBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuUHJpbWFyeS5hcmdzID0ge1xuICBjaGlsZHJlbjogPGRpdj5UaGlzIGlzIGEgbGluazwvZGl2PlxufTsiXX0=