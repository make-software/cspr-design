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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGdGQUF1QztBQUV2Qyw2RUFBOEM7QUFDOUMsMEVBQTJDO0FBQzNDLG1GQUFvRDtBQUNwRCwwRUFBMkM7QUFFM0MsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ25CLGtDQUFtQixDQUFBO0lBQ25CLDhCQUFlLENBQUE7SUFDZiw0QkFBYSxDQUFBO0lBQ2Isa0NBQW1CLENBQUE7SUFDbkIsa0NBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQU5XLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTXRCO0FBRUQsSUFBTSxLQUFLO0lBQ1AsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLDZCQUE2QjtJQUNwRCxHQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUcsb0NBQW9DO0lBQ3hELEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRywyQkFBMkI7SUFDbEQsR0FBQyxXQUFXLENBQUMsS0FBSyxJQUFHLDJCQUEyQjtJQUNoRCxHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsNkJBQTZCO09BQ3ZELENBQUM7QUFFRixJQUFNLHNCQUFzQjtJQUN4QixHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsbUJBQW1CO0lBQzFDLEdBQUMsV0FBVyxDQUFDLElBQUksSUFBRyxlQUFlO0lBQ25DLEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRyxlQUFlO0lBQ3RDLEdBQUMsV0FBVyxDQUFDLEtBQUssSUFBRyx1QkFBdUI7SUFDNUMsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLGVBQWU7T0FDekMsQ0FBQztBQUVGLElBQU0sZUFBZTtJQUNqQixHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsY0FBYztJQUNyQyxHQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUcsa0JBQWtCO0lBQ3RDLEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRyxrQkFBa0I7SUFDekMsR0FBQyxXQUFXLENBQUMsS0FBSyxJQUFHLFlBQVk7SUFDakMsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLGtCQUFrQjtPQUM1QyxDQUFDO0FBR0YsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDN0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNwQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLEdBQUcsRUFBRTtZQUNELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO0tBQ0osQ0FBQztBQVJxQixDQVFyQixDQUNMLENBQUM7QUFXSyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQXlCO0lBQ3JDLElBQUEsT0FBTyxHQUFxRCxLQUFLLFFBQTFELEVBQUUsS0FBSyxHQUE4QyxLQUFLLE1BQW5ELEVBQUUsTUFBTSxHQUFzQyxLQUFLLE9BQTNDLEVBQUUsS0FBb0MsS0FBSyxNQUE3QixFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBLEVBQUUsS0FBc0IsS0FBSyxXQUFWLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLENBQVc7SUFFMUUsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdCLElBQUksS0FBSyxFQUFFO1FBQ1AsT0FBTyxDQUNILHVCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxnQkFDdEMsd0JBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLENBQUMsaUJBQ3ZCLHdCQUFDLGtCQUFPLHFCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsaUJBQ3JDLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLFFBQVEsR0FBSSxFQUMxQix1QkFBQyxtQkFBUSxxQkFDTCxJQUFJLEVBQUUsQ0FBQyxFQUNQLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFDcEMsU0FBUyxFQUFFLE9BQU8sZ0JBRWpCLEtBQUssSUFDQyxLQUNMLEVBRVYsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLGdCQUNsRCxPQUFPLElBQ0QsS0FDRixJQUNMLENBQ2YsQ0FBQztLQUNMO0lBRUgsT0FBTyxDQUNMLHdCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBRSxDQUFDLGlCQUN2RCx1QkFBQyxrQkFBTyxJQUFDLEdBQUcsRUFBRSxRQUFRLEdBQUksRUFDMUIsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLGdCQUFHLE9BQU8sSUFBWSxLQUNuRSxDQUNiLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQ1csUUFBQSxLQUFLLFNBa0NoQjtBQUVGLGtCQUFlLGFBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xyXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XHJcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gXCIuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtblwiO1xyXG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XHJcblxyXG5leHBvcnQgZW51bSBBbGVydFN0YXR1cyB7XHJcbiAgICBTdWNjZXNzID0gJ3N1Y2Nlc3MnLFxyXG4gICAgRXJyb3IgPSAnZXJyb3InLFxyXG4gICAgSW5mbyA9ICdpbmZvJyxcclxuICAgIFBlbmRpbmcgPSAncGVuZGluZycsXHJcbiAgICBXYXJuaW5nID0gJ3dhcm5pbmcnLFxyXG59XHJcblxyXG5jb25zdCBJY29ucyA9IHtcclxuICAgIFtBbGVydFN0YXR1cy5TdWNjZXNzXTogJ2Fzc2V0cy9pY29ucy9pYy1zdWNjZXNzLnN2ZycsXHJcbiAgICBbQWxlcnRTdGF0dXMuSW5mb106ICdhc3NldHMvaWNvbnMvaWMtaW5mby1pbXBvcnRhbnQuc3ZnJyxcclxuICAgIFtBbGVydFN0YXR1cy5QZW5kaW5nXTogJ2Fzc2V0cy9pY29ucy9pYy1jbG9jay5zdmcnLFxyXG4gICAgW0FsZXJ0U3RhdHVzLkVycm9yXTogJ2Fzc2V0cy9pY29ucy9pYy1lcnJvci5zdmcnLFxyXG4gICAgW0FsZXJ0U3RhdHVzLldhcm5pbmddOiAnYXNzZXRzL2ljb25zL2ljLXdhcm5pbmcuc3ZnJyxcclxufTtcclxuXHJcbmNvbnN0IFN0YXR1c0JhY2tncm91bmRDb2xvcnMgPSB7XHJcbiAgICBbQWxlcnRTdGF0dXMuU3VjY2Vzc106ICdjb250ZW50R3JlZW5MaWdodCcsXHJcbiAgICBbQWxlcnRTdGF0dXMuSW5mb106ICdib3JkZXJQcmltYXJ5JyxcclxuICAgIFtBbGVydFN0YXR1cy5XYXJuaW5nXTogJ2JvcmRlclByaW1hcnknLFxyXG4gICAgW0FsZXJ0U3RhdHVzLkVycm9yXTogJ2ZpbGxTZWNvbmRhcnlSZWRIb3ZlcicsXHJcbiAgICBbQWxlcnRTdGF0dXMuUGVuZGluZ106ICdmaWxsU2Vjb25kYXJ5JyxcclxufTtcclxuXHJcbmNvbnN0IFN0YXR1c1N2Z0NvbG9ycyA9IHtcclxuICAgIFtBbGVydFN0YXR1cy5TdWNjZXNzXTogJ2NvbnRlbnRHcmVlbicsXHJcbiAgICBbQWxlcnRTdGF0dXMuSW5mb106ICdjb250ZW50U2Vjb25kYXJ5JyxcclxuICAgIFtBbGVydFN0YXR1cy5XYXJuaW5nXTogJ2NvbnRlbnRTZWNvbmRhcnknLFxyXG4gICAgW0FsZXJ0U3RhdHVzLkVycm9yXTogJ2NvbnRlbnRSZWQnLFxyXG4gICAgW0FsZXJ0U3RhdHVzLlBlbmRpbmddOiAnY29udGVudExpZ2h0Qmx1ZScsXHJcbn07XHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPFBpY2s8U3RhdHVzTWVzc2FnZVByb3BzLCAnc3RhdHVzJz4+KFxyXG4gICAgKHsgdGhlbWUsIHN0YXR1cyB9KSA9PiAoe1xyXG4gICAgICAgIG1pbkhlaWdodDogNTIsXHJcbiAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbU3RhdHVzQmFja2dyb3VuZENvbG9yc1tzdGF0dXNdXSxcclxuICAgICAgICBzdmc6IHtcclxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbU3RhdHVzU3ZnQ29sb3JzW3N0YXR1c11dLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzTWVzc2FnZVByb3BzIHtcclxuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZSB8IHN0cmluZztcclxuICBtZXNzYWdlOiBSZWFjdC5SZWFjdE5vZGUgfCBzdHJpbmc7XHJcbiAgc3RhdHVzOiBBbGVydFN0YXR1cztcclxuICBzY2FsZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnO1xyXG4gIGxpbmVIZWlnaHQ/OiAneHMnIHwgJ3NtJztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gKHByb3BzOiBTdGF0dXNNZXNzYWdlUHJvcHMpID0+IHtcclxuICBjb25zdCB7IG1lc3NhZ2UsIHRpdGxlLCBzdGF0dXMsIHNjYWxlID0gJ3NtJywgbGluZUhlaWdodCA9ICdzbScgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBpY29uUGF0aCA9IEljb25zW3N0YXR1c107XHJcblxyXG4gICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENvbnRhaW5lciBzdGF0dXM9e3N0YXR1c30gaXRlbXNTcGFjaW5nPXs4fT5cclxuICAgICAgICAgICAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhSb3cgYWxpZ249eydjZW50ZXInfSBpdGVtc1NwYWNpbmc9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ZnSWNvbiBzcmM9e2ljb25QYXRofSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fSBzY2FsZT17c2NhbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb249eydibGFjayd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhSb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCb2R5VGV4dCBzaXplPXszfSBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fSBzY2FsZT17c2NhbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4Q29sdW1uPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBzdGF0dXM9e3N0YXR1c30gYWxpZ249XCJjZW50ZXJcIiBpdGVtc1NwYWNpbmc9ezh9PlxyXG4gICAgICA8U3ZnSWNvbiBzcmM9e2ljb25QYXRofSAvPlxyXG4gICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17bGluZUhlaWdodH0gc2NhbGU9e3NjYWxlfT57bWVzc2FnZX08L0JvZHlUZXh0PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xyXG4iXX0=