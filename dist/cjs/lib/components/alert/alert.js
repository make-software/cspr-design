"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = exports.AlertStatus = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var AlertStatus;
(function (AlertStatus) {
    AlertStatus["Success"] = "success";
    AlertStatus["Error"] = "error";
    AlertStatus["Info"] = "info";
    AlertStatus["Pending"] = "pending";
    AlertStatus["Warning"] = "warning";
})(AlertStatus = exports.AlertStatus || (exports.AlertStatus = {}));
var Icons = (_a = {},
    _a[AlertStatus.Success] = 'assets/icons/ic-success.svg',
    _a[AlertStatus.Info] = 'assets/icons/ic-info-important.svg',
    _a[AlertStatus.Pending] = 'assets/icons/ic-clock.svg',
    _a[AlertStatus.Error] = 'assets/icons/ic-error.svg',
    _a[AlertStatus.Warning] = 'assets/icons/ic-warning.svg',
    _a);
var StatusBackgroundColors = (_b = {},
    _b[AlertStatus.Success] = 'contentGreenLight',
    _b[AlertStatus.Info] = 'borderPrimary',
    _b[AlertStatus.Warning] = 'borderPrimary',
    _b[AlertStatus.Error] = 'fillSecondaryRedHover',
    _b[AlertStatus.Pending] = 'fillSecondary',
    _b);
var StatusSvgColors = (_c = {},
    _c[AlertStatus.Success] = 'contentGreen',
    _c[AlertStatus.Info] = 'contentSecondary',
    _c[AlertStatus.Warning] = 'contentSecondary',
    _c[AlertStatus.Error] = 'contentRed',
    _c[AlertStatus.Pending] = 'contentLightBlue',
    _c);
var Container = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, status = _a.status;
    return ({
        minHeight: 52,
        padding: 16,
        borderRadius: theme.borderRadius.base,
        backgroundColor: theme.styleguideColors[StatusBackgroundColors[status]],
        svg: {
            color: theme.styleguideColors[StatusSvgColors[status]],
        },
    });
});
var Alert = function (props) {
    var message = props.message, title = props.title, status = props.status, _a = props.scale, scale = _a === void 0 ? 'sm' : _a, _b = props.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b;
    var iconPath = Icons[status];
    if (title) {
        return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ status: status, itemsSpacing: 8 }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 8 }, { children: [(0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center', itemsSpacing: 8 }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconPath }), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 1, lineHeight: lineHeight, scale: scale, variation: 'black' }, { children: title }))] })), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: lineHeight, scale: scale }, { children: message }))] })) })));
    }
    return ((0, jsx_runtime_1.jsxs)(Container, tslib_1.__assign({ status: status, align: "center", itemsSpacing: 8 }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconPath }), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: lineHeight, scale: scale }, { children: message }))] })));
};
exports.Alert = Alert;
exports.default = exports.Alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGdGQUF1QztBQUV2Qyw2RUFBOEM7QUFDOUMsMEVBQTJDO0FBQzNDLG1GQUFvRDtBQUNwRCwwRUFBMkM7QUFFM0MsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ25CLGtDQUFtQixDQUFBO0lBQ25CLDhCQUFlLENBQUE7SUFDZiw0QkFBYSxDQUFBO0lBQ2Isa0NBQW1CLENBQUE7SUFDbkIsa0NBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQU5XLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTXRCO0FBRUQsSUFBTSxLQUFLO0lBQ1AsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLDZCQUE2QjtJQUNwRCxHQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUcsb0NBQW9DO0lBQ3hELEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRywyQkFBMkI7SUFDbEQsR0FBQyxXQUFXLENBQUMsS0FBSyxJQUFHLDJCQUEyQjtJQUNoRCxHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsNkJBQTZCO09BQ3ZELENBQUM7QUFFRixJQUFNLHNCQUFzQjtJQUN4QixHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsbUJBQW1CO0lBQzFDLEdBQUMsV0FBVyxDQUFDLElBQUksSUFBRyxlQUFlO0lBQ25DLEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRyxlQUFlO0lBQ3RDLEdBQUMsV0FBVyxDQUFDLEtBQUssSUFBRyx1QkFBdUI7SUFDNUMsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLGVBQWU7T0FDekMsQ0FBQztBQUVGLElBQU0sZUFBZTtJQUNqQixHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsY0FBYztJQUNyQyxHQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUcsa0JBQWtCO0lBQ3RDLEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRyxrQkFBa0I7SUFDekMsR0FBQyxXQUFXLENBQUMsS0FBSyxJQUFHLFlBQVk7SUFDakMsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLGtCQUFrQjtPQUM1QyxDQUFDO0FBR0YsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDN0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNwQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLEdBQUcsRUFBRTtZQUNELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO0tBQ0osQ0FBQztBQVJxQixDQVFyQixDQUNMLENBQUM7QUFXSyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQXlCO0lBQ3JDLElBQUEsT0FBTyxHQUFxRCxLQUFLLFFBQTFELEVBQUUsS0FBSyxHQUE4QyxLQUFLLE1BQW5ELEVBQUUsTUFBTSxHQUFzQyxLQUFLLE9BQTNDLEVBQUUsS0FBb0MsS0FBSyxNQUE3QixFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBLEVBQUUsS0FBc0IsS0FBSyxXQUFWLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLENBQVc7SUFFMUUsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdCLElBQUksS0FBSyxFQUFFO1FBQ1AsT0FBTyxDQUNILHVCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxnQkFDdEMsd0JBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLENBQUMsaUJBQ3ZCLHdCQUFDLGtCQUFPLHFCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsaUJBQ3JDLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLFFBQVEsR0FBSSxFQUMxQix1QkFBQyxtQkFBUSxxQkFDTCxJQUFJLEVBQUUsQ0FBQyxFQUNQLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFDcEMsU0FBUyxFQUFFLE9BQU8sZ0JBRWpCLEtBQUssSUFDQyxLQUNMLEVBRVYsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLGdCQUNsRCxPQUFPLElBQ0QsS0FDRixJQUNMLENBQ2YsQ0FBQztLQUNMO0lBRUgsT0FBTyxDQUNMLHdCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBRSxDQUFDLGlCQUN2RCx1QkFBQyxrQkFBTyxJQUFDLEdBQUcsRUFBRSxRQUFRLEdBQUksRUFDMUIsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLGdCQUFHLE9BQU8sSUFBWSxLQUNuRSxDQUNiLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQ1csUUFBQSxLQUFLLFNBa0NoQjtBQUVGLGtCQUFlLGFBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSBcIi4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uXCI7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5cbmV4cG9ydCBlbnVtIEFsZXJ0U3RhdHVzIHtcbiAgICBTdWNjZXNzID0gJ3N1Y2Nlc3MnLFxuICAgIEVycm9yID0gJ2Vycm9yJyxcbiAgICBJbmZvID0gJ2luZm8nLFxuICAgIFBlbmRpbmcgPSAncGVuZGluZycsXG4gICAgV2FybmluZyA9ICd3YXJuaW5nJyxcbn1cblxuY29uc3QgSWNvbnMgPSB7XG4gICAgW0FsZXJ0U3RhdHVzLlN1Y2Nlc3NdOiAnYXNzZXRzL2ljb25zL2ljLXN1Y2Nlc3Muc3ZnJyxcbiAgICBbQWxlcnRTdGF0dXMuSW5mb106ICdhc3NldHMvaWNvbnMvaWMtaW5mby1pbXBvcnRhbnQuc3ZnJyxcbiAgICBbQWxlcnRTdGF0dXMuUGVuZGluZ106ICdhc3NldHMvaWNvbnMvaWMtY2xvY2suc3ZnJyxcbiAgICBbQWxlcnRTdGF0dXMuRXJyb3JdOiAnYXNzZXRzL2ljb25zL2ljLWVycm9yLnN2ZycsXG4gICAgW0FsZXJ0U3RhdHVzLldhcm5pbmddOiAnYXNzZXRzL2ljb25zL2ljLXdhcm5pbmcuc3ZnJyxcbn07XG5cbmNvbnN0IFN0YXR1c0JhY2tncm91bmRDb2xvcnMgPSB7XG4gICAgW0FsZXJ0U3RhdHVzLlN1Y2Nlc3NdOiAnY29udGVudEdyZWVuTGlnaHQnLFxuICAgIFtBbGVydFN0YXR1cy5JbmZvXTogJ2JvcmRlclByaW1hcnknLFxuICAgIFtBbGVydFN0YXR1cy5XYXJuaW5nXTogJ2JvcmRlclByaW1hcnknLFxuICAgIFtBbGVydFN0YXR1cy5FcnJvcl06ICdmaWxsU2Vjb25kYXJ5UmVkSG92ZXInLFxuICAgIFtBbGVydFN0YXR1cy5QZW5kaW5nXTogJ2ZpbGxTZWNvbmRhcnknLFxufTtcblxuY29uc3QgU3RhdHVzU3ZnQ29sb3JzID0ge1xuICAgIFtBbGVydFN0YXR1cy5TdWNjZXNzXTogJ2NvbnRlbnRHcmVlbicsXG4gICAgW0FsZXJ0U3RhdHVzLkluZm9dOiAnY29udGVudFNlY29uZGFyeScsXG4gICAgW0FsZXJ0U3RhdHVzLldhcm5pbmddOiAnY29udGVudFNlY29uZGFyeScsXG4gICAgW0FsZXJ0U3RhdHVzLkVycm9yXTogJ2NvbnRlbnRSZWQnLFxuICAgIFtBbGVydFN0YXR1cy5QZW5kaW5nXTogJ2NvbnRlbnRMaWdodEJsdWUnLFxufTtcblxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8UGljazxTdGF0dXNNZXNzYWdlUHJvcHMsICdzdGF0dXMnPj4oXG4gICAgKHsgdGhlbWUsIHN0YXR1cyB9KSA9PiAoe1xuICAgICAgICBtaW5IZWlnaHQ6IDUyLFxuICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzW1N0YXR1c0JhY2tncm91bmRDb2xvcnNbc3RhdHVzXV0sXG4gICAgICAgIHN2Zzoge1xuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbU3RhdHVzU3ZnQ29sb3JzW3N0YXR1c11dLFxuICAgICAgICB9LFxuICAgIH0pXG4pO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzTWVzc2FnZVByb3BzIHtcbiAgdGl0bGU/OiBSZWFjdC5SZWFjdE5vZGUgfCBzdHJpbmc7XG4gIG1lc3NhZ2U6IFJlYWN0LlJlYWN0Tm9kZSB8IHN0cmluZztcbiAgc3RhdHVzOiBBbGVydFN0YXR1cztcbiAgc2NhbGU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJztcbiAgbGluZUhlaWdodD86ICd4cycgfCAnc20nO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnQgPSAocHJvcHM6IFN0YXR1c01lc3NhZ2VQcm9wcykgPT4ge1xuICBjb25zdCB7IG1lc3NhZ2UsIHRpdGxlLCBzdGF0dXMsIHNjYWxlID0gJ3NtJywgbGluZUhlaWdodCA9ICdzbScgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGljb25QYXRoID0gSWNvbnNbc3RhdHVzXTtcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lciBzdGF0dXM9e3N0YXR1c30gaXRlbXNTcGFjaW5nPXs4fT5cbiAgICAgICAgICAgICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezh9PlxuICAgICAgICAgICAgICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9IGl0ZW1zU3BhY2luZz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbiBzcmM9e2ljb25QYXRofSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fSBzY2FsZT17c2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPXsnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cblxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17bGluZUhlaWdodH0gc2NhbGU9e3NjYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgIDwvRmxleENvbHVtbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3RhdHVzPXtzdGF0dXN9IGFsaWduPVwiY2VudGVyXCIgaXRlbXNTcGFjaW5nPXs4fT5cbiAgICAgIDxTdmdJY29uIHNyYz17aWNvblBhdGh9IC8+XG4gICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17bGluZUhlaWdodH0gc2NhbGU9e3NjYWxlfT57bWVzc2FnZX08L0JvZHlUZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iXX0=