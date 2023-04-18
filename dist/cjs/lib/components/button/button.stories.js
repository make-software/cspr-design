"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allColors = exports.ButtonSize = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("./button"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var Container = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
        '> *': {
            margin: 10,
            width: 200,
        },
    });
});
exports.default = {
    component: button_1.default,
    title: 'Button',
    argTypes: {
        height: '36',
        disabled: false,
        color: 'primaryRed',
        children: 'Button'
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({}, args)) })); };
exports.ButtonSize = Template.bind({});
exports.ButtonSize.args = {
    height: '36',
    children: 'Button'
};
var primary = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ disabled: disabled }, { children: "Primary" })));
};
var primary2 = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: "primaryRed", disabled: disabled }, { children: "Primary 2" })));
};
var secondary = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: "secondaryBlue", disabled: disabled }, { children: "Secondary" })));
};
var secondary2 = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: "secondaryRed", disabled: disabled }, { children: "Secondary" })));
};
var utility = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return ((0, jsx_runtime_1.jsx)(button_1.default, tslib_1.__assign({ color: "utility", disabled: disabled }, { children: "Tertiary" })));
};
var allColors = function () { return ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 10 }, { children: [(0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 10 }, { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: "Active" })), primary(), primary2(), secondary(), secondary2(), utility()] })), (0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 10 }, { children: [(0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: "Disabled" })), primary(true), primary2(true), secondary(true), secondary2(true), utility(true)] }))] }))); };
exports.allColors = allColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdGQUF1QztBQUV2Qyw0REFBOEI7QUFDOUIsMEVBQTJDO0FBQzNDLG1GQUFvRDtBQUNwRCw2RUFBOEM7QUFHOUMsSUFBTSxTQUFTLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNDLE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLFFBQVE7UUFFdkIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ0YsQ0FBQztBQVIwQyxDQVExQyxDQUFDLENBQUM7QUFFSixrQkFBZTtJQUNiLFNBQVMsRUFBRSxnQkFBTTtJQUNqQixLQUFLLEVBQUUsUUFBUTtJQUNmLFFBQVEsRUFBRTtRQUNOLE1BQU0sRUFBRSxJQUFJO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsWUFBWTtRQUNuQixRQUFRLEVBQUUsUUFBUTtLQUNyQjtDQUNGLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBa0MsVUFBQyxJQUFJLElBQUssT0FBQSxDQUFDLHVCQUFDLFNBQVMsY0FBQyx1QkFBQyxnQkFBTSx1QkFBSyxJQUFJLEVBQUksR0FBWSxDQUFDLEVBQTdDLENBQTZDLENBQUM7QUFDM0YsUUFBQSxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxrQkFBVSxDQUFDLElBQUksR0FBRztJQUNkLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQTtBQUdELElBQU0sT0FBTyxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQzdDLHVCQUFDLGdCQUFNLHFCQUFDLFFBQVEsRUFBRSxRQUFRLDZCQUFrQixDQUM3QztBQUY4QyxDQUU5QyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUcsVUFBQyxRQUF5QjtJQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtJQUFLLE9BQUEsQ0FDOUMsdUJBQUMsZ0JBQU0scUJBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUUsUUFBUSwrQkFFcEMsQ0FDVjtBQUorQyxDQUkvQyxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUcsVUFBQyxRQUF5QjtJQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtJQUFLLE9BQUEsQ0FDL0MsdUJBQUMsZ0JBQU0scUJBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUUsUUFBUSwrQkFFdkMsQ0FDVjtBQUpnRCxDQUloRCxDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsVUFBQyxRQUF5QjtJQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtJQUFLLE9BQUEsQ0FDaEQsdUJBQUMsZ0JBQU0scUJBQUMsS0FBSyxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUUsUUFBUSwrQkFFdEMsQ0FDVjtBQUppRCxDQUlqRCxDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUcsVUFBQyxRQUF5QjtJQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtJQUFLLE9BQUEsQ0FDN0MsdUJBQUMsZ0JBQU0scUJBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUUsUUFBUSw4QkFFakMsQ0FDVjtBQUo4QyxDQUk5QyxDQUFDO0FBRUssSUFBTSxTQUFTLEdBQUcsY0FBTSxPQUFBLENBQzdCLHdCQUFDLGtCQUFPLHFCQUFDLFlBQVksRUFBRSxFQUFFLGlCQUN2Qix3QkFBQyxxQkFBVSxxQkFBQyxZQUFZLEVBQUUsRUFBRSxpQkFDMUIsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsNEJBQW1CLEVBQ25DLE9BQU8sRUFBRSxFQUNULFFBQVEsRUFBRSxFQUNWLFNBQVMsRUFBRSxFQUNYLFVBQVUsRUFBRSxFQUNaLE9BQU8sRUFBRSxLQUNDLEVBQ2Isd0JBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLEVBQUUsaUJBQzFCLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLDhCQUFxQixFQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUNkLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixVQUFVLENBQUMsSUFBSSxDQUFDLEVBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FDSCxLQUNMLENBQ1gsRUFuQjhCLENBbUI5QixDQUFDO0FBbkJXLFFBQUEsU0FBUyxhQW1CcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IHsgQ29tcG9uZW50U3RvcnkgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXG4gICc+IConOiB7XG4gICAgbWFyZ2luOiAxMCxcbiAgICB3aWR0aDogMjAwLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogQnV0dG9uLFxuICB0aXRsZTogJ0J1dHRvbicsXG4gIGFyZ1R5cGVzOiB7XG4gICAgICBoZWlnaHQ6ICczNicsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBjb2xvcjogJ3ByaW1hcnlSZWQnLFxuICAgICAgY2hpbGRyZW46ICdCdXR0b24nXG4gIH0sXG59O1xuXG5jb25zdCBUZW1wbGF0ZTogQ29tcG9uZW50U3Rvcnk8dHlwZW9mIEJ1dHRvbj4gPSAoYXJncykgPT4gKDxDb250YWluZXI+PEJ1dHRvbiB7Li4uYXJnc30gLz48L0NvbnRhaW5lcj4pO1xuZXhwb3J0IGNvbnN0IEJ1dHRvblNpemUgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkJ1dHRvblNpemUuYXJncyA9IHtcbiAgICBoZWlnaHQ6ICczNicsXG4gICAgY2hpbGRyZW46ICdCdXR0b24nXG59XG5cblxuY29uc3QgcHJpbWFyeSA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfT5QcmltYXJ5PC9CdXR0b24+XG4pO1xuXG5jb25zdCBwcmltYXJ5MiA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5UmVkXCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICBQcmltYXJ5IDJcbiAgPC9CdXR0b24+XG4pO1xuXG5jb25zdCBzZWNvbmRhcnkgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5Qmx1ZVwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgU2Vjb25kYXJ5XG4gIDwvQnV0dG9uPlxuKTtcblxuY29uc3Qgc2Vjb25kYXJ5MiA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlSZWRcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgIFNlY29uZGFyeVxuICA8L0J1dHRvbj5cbik7XG5cbmNvbnN0IHV0aWxpdHkgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwidXRpbGl0eVwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgVGVydGlhcnlcbiAgPC9CdXR0b24+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxsQ29sb3JzID0gKCkgPT4gKFxuICA8RmxleFJvdyBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICAgIDxCb2R5VGV4dCBzaXplPXsyfT5BY3RpdmU8L0JvZHlUZXh0PlxuICAgICAge3ByaW1hcnkoKX1cbiAgICAgIHtwcmltYXJ5MigpfVxuICAgICAge3NlY29uZGFyeSgpfVxuICAgICAge3NlY29uZGFyeTIoKX1cbiAgICAgIHt1dGlsaXR5KCl9XG4gICAgPC9GbGV4Q29sdW1uPlxuICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17MTB9PlxuICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9PkRpc2FibGVkPC9Cb2R5VGV4dD5cbiAgICAgIHtwcmltYXJ5KHRydWUpfVxuICAgICAge3ByaW1hcnkyKHRydWUpfVxuICAgICAge3NlY29uZGFyeSh0cnVlKX1cbiAgICAgIHtzZWNvbmRhcnkyKHRydWUpfVxuICAgICAge3V0aWxpdHkodHJ1ZSl9XG4gICAgPC9GbGV4Q29sdW1uPlxuICA8L0ZsZXhSb3c+XG4pO1xuIl19