"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allColors = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdGQUF1QztBQUV2Qyw0REFBOEI7QUFDOUIsMEVBQTJDO0FBQzNDLG1GQUFvRDtBQUNwRCw2RUFBOEM7QUFFOUMsSUFBTSxTQUFTLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQzNDLE9BQU8sRUFBRSxNQUFNO1FBQ2YsYUFBYSxFQUFFLFFBQVE7UUFFdkIsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ0YsQ0FBQztBQVIwQyxDQVExQyxDQUFDLENBQUM7QUFFSixrQkFBZTtJQUNiLFNBQVMsRUFBRSxnQkFBTTtJQUNqQixLQUFLLEVBQUUsUUFBUTtDQUNoQixDQUFDO0FBRUYsSUFBTSxPQUFPLEdBQUcsVUFBQyxRQUF5QjtJQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtJQUFLLE9BQUEsQ0FDN0MsdUJBQUMsZ0JBQU0scUJBQUMsUUFBUSxFQUFFLFFBQVEsNkJBQWtCLENBQzdDO0FBRjhDLENBRTlDLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRyxVQUFDLFFBQXlCO0lBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO0lBQUssT0FBQSxDQUM5Qyx1QkFBQyxnQkFBTSxxQkFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBRSxRQUFRLCtCQUVwQyxDQUNWO0FBSitDLENBSS9DLENBQUM7QUFFRixJQUFNLFNBQVMsR0FBRyxVQUFDLFFBQXlCO0lBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO0lBQUssT0FBQSxDQUMvQyx1QkFBQyxnQkFBTSxxQkFBQyxLQUFLLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBRSxRQUFRLCtCQUV2QyxDQUNWO0FBSmdELENBSWhELENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRyxVQUFDLFFBQXlCO0lBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO0lBQUssT0FBQSxDQUNoRCx1QkFBQyxnQkFBTSxxQkFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBRSxRQUFRLCtCQUV0QyxDQUNWO0FBSmlELENBSWpELENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxVQUFDLFFBQXlCO0lBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO0lBQUssT0FBQSxDQUM3Qyx1QkFBQyxnQkFBTSxxQkFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBRSxRQUFRLDhCQUVqQyxDQUNWO0FBSjhDLENBSTlDLENBQUM7QUFFSyxJQUFNLFNBQVMsR0FBRyxjQUFNLE9BQUEsQ0FDN0Isd0JBQUMsa0JBQU8scUJBQUMsWUFBWSxFQUFFLEVBQUUsaUJBQ3ZCLHdCQUFDLHFCQUFVLHFCQUFDLFlBQVksRUFBRSxFQUFFLGlCQUMxQix1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyw0QkFBbUIsRUFDbkMsT0FBTyxFQUFFLEVBQ1QsUUFBUSxFQUFFLEVBQ1YsU0FBUyxFQUFFLEVBQ1gsVUFBVSxFQUFFLEVBQ1osT0FBTyxFQUFFLEtBQ0MsRUFDYix3QkFBQyxxQkFBVSxxQkFBQyxZQUFZLEVBQUUsRUFBRSxpQkFDMUIsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsOEJBQXFCLEVBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUNILEtBQ0wsQ0FDWCxFQW5COEIsQ0FtQjlCLENBQUM7QUFuQlcsUUFBQSxTQUFTLGFBbUJwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT4gKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblxuICAnPiAqJzoge1xuICAgIG1hcmdpbjogMTAsXG4gICAgd2lkdGg6IDIwMCxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnQ6IEJ1dHRvbixcbiAgdGl0bGU6ICdCdXR0b24nLFxufTtcblxuY29uc3QgcHJpbWFyeSA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfT5QcmltYXJ5PC9CdXR0b24+XG4pO1xuXG5jb25zdCBwcmltYXJ5MiA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5UmVkXCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICBQcmltYXJ5IDJcbiAgPC9CdXR0b24+XG4pO1xuXG5jb25zdCBzZWNvbmRhcnkgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5Qmx1ZVwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgU2Vjb25kYXJ5XG4gIDwvQnV0dG9uPlxuKTtcblxuY29uc3Qgc2Vjb25kYXJ5MiA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlSZWRcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgIFNlY29uZGFyeVxuICA8L0J1dHRvbj5cbik7XG5cbmNvbnN0IHV0aWxpdHkgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwidXRpbGl0eVwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgVGVydGlhcnlcbiAgPC9CdXR0b24+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxsQ29sb3JzID0gKCkgPT4gKFxuICA8RmxleFJvdyBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICAgIDxCb2R5VGV4dCBzaXplPXsyfT5BY3RpdmU8L0JvZHlUZXh0PlxuICAgICAge3ByaW1hcnkoKX1cbiAgICAgIHtwcmltYXJ5MigpfVxuICAgICAge3NlY29uZGFyeSgpfVxuICAgICAge3NlY29uZGFyeTIoKX1cbiAgICAgIHt1dGlsaXR5KCl9XG4gICAgPC9GbGV4Q29sdW1uPlxuICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17MTB9PlxuICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9PkRpc2FibGVkPC9Cb2R5VGV4dD5cbiAgICAgIHtwcmltYXJ5KHRydWUpfVxuICAgICAge3ByaW1hcnkyKHRydWUpfVxuICAgICAge3NlY29uZGFyeSh0cnVlKX1cbiAgICAgIHtzZWNvbmRhcnkyKHRydWUpfVxuICAgICAge3V0aWxpdHkodHJ1ZSl9XG4gICAgPC9GbGV4Q29sdW1uPlxuICA8L0ZsZXhSb3c+XG4pO1xuIl19