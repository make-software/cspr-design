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
        return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ status: status, itemsSpacing: 8 }, { children: (0, jsx_runtime_1.jsxs)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 8 }, { children: [(0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center', itemsSpacing: 8 }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconPath, alt: "Alert icon with ".concat(status, " status") }), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 1, lineHeight: lineHeight, scale: scale, variation: 'black' }, { children: title }))] })), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: lineHeight, scale: scale }, { children: message }))] })) })));
    }
    return ((0, jsx_runtime_1.jsxs)(Container, tslib_1.__assign({ status: status, align: "center", itemsSpacing: 8 }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconPath }), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, lineHeight: lineHeight, scale: scale }, { children: message }))] })));
};
exports.Alert = Alert;
exports.default = exports.Alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGdGQUF1QztBQUV2Qyw2RUFBOEM7QUFDOUMsMEVBQTJDO0FBQzNDLG1GQUFvRDtBQUNwRCwwRUFBMkM7QUFFM0MsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ25CLGtDQUFtQixDQUFBO0lBQ25CLDhCQUFlLENBQUE7SUFDZiw0QkFBYSxDQUFBO0lBQ2Isa0NBQW1CLENBQUE7SUFDbkIsa0NBQW1CLENBQUE7QUFDdkIsQ0FBQyxFQU5XLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTXRCO0FBRUQsSUFBTSxLQUFLO0lBQ1AsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLDZCQUE2QjtJQUNwRCxHQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUcsb0NBQW9DO0lBQ3hELEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRywyQkFBMkI7SUFDbEQsR0FBQyxXQUFXLENBQUMsS0FBSyxJQUFHLDJCQUEyQjtJQUNoRCxHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsNkJBQTZCO09BQ3ZELENBQUM7QUFFRixJQUFNLHNCQUFzQjtJQUN4QixHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsbUJBQW1CO0lBQzFDLEdBQUMsV0FBVyxDQUFDLElBQUksSUFBRyxlQUFlO0lBQ25DLEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRyxlQUFlO0lBQ3RDLEdBQUMsV0FBVyxDQUFDLEtBQUssSUFBRyx1QkFBdUI7SUFDNUMsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLGVBQWU7T0FDekMsQ0FBQztBQUVGLElBQU0sZUFBZTtJQUNqQixHQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUcsY0FBYztJQUNyQyxHQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUcsa0JBQWtCO0lBQ3RDLEdBQUMsV0FBVyxDQUFDLE9BQU8sSUFBRyxrQkFBa0I7SUFDekMsR0FBQyxXQUFXLENBQUMsS0FBSyxJQUFHLFlBQVk7SUFDakMsR0FBQyxXQUFXLENBQUMsT0FBTyxJQUFHLGtCQUFrQjtPQUM1QyxDQUFDO0FBR0YsSUFBTSxTQUFTLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FDN0IsVUFBQyxFQUFpQjtRQUFmLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNwQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxFQUFFO1FBQ1gsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLEdBQUcsRUFBRTtZQUNELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO0tBQ0osQ0FBQztBQVJxQixDQVFyQixDQUNMLENBQUM7QUFXSyxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQXlCO0lBQ3JDLElBQUEsT0FBTyxHQUFxRCxLQUFLLFFBQTFELEVBQUUsS0FBSyxHQUE4QyxLQUFLLE1BQW5ELEVBQUUsTUFBTSxHQUFzQyxLQUFLLE9BQTNDLEVBQUUsS0FBb0MsS0FBSyxNQUE3QixFQUFaLEtBQUssbUJBQUcsSUFBSSxLQUFBLEVBQUUsS0FBc0IsS0FBSyxXQUFWLEVBQWpCLFVBQVUsbUJBQUcsSUFBSSxLQUFBLENBQVc7SUFFMUUsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdCLElBQUksS0FBSyxFQUFFO1FBQ1AsT0FBTyxDQUNILHVCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsQ0FBQyxnQkFDdEMsd0JBQUMscUJBQVUscUJBQUMsWUFBWSxFQUFFLENBQUMsaUJBQ3ZCLHdCQUFDLGtCQUFPLHFCQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLENBQUMsaUJBQ3JDLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsMEJBQW1CLE1BQU0sWUFBUyxHQUFHLEVBQ2xFLHVCQUFDLG1CQUFRLHFCQUNMLElBQUksRUFBRSxDQUFDLEVBQ1AsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUNwQyxTQUFTLEVBQUUsT0FBTyxnQkFFakIsS0FBSyxJQUNDLEtBQ0wsRUFFVix1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssZ0JBQ2xELE9BQU8sSUFDRCxLQUNGLElBQ0wsQ0FDZixDQUFDO0tBQ0w7SUFFSCxPQUFPLENBQ0wsd0JBQUMsU0FBUyxxQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFFLENBQUMsaUJBQ3ZELHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLFFBQVEsR0FBSSxFQUMxQix1QkFBQyxtQkFBUSxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssZ0JBQUcsT0FBTyxJQUFZLEtBQ25FLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWxDVyxRQUFBLEtBQUssU0FrQ2hCO0FBRUYsa0JBQWUsYUFBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQm9keVRleHQgZnJvbSAnLi4vYm9keS10ZXh0L2JvZHktdGV4dCc7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tIFwiLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW5cIjtcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuZXhwb3J0IGVudW0gQWxlcnRTdGF0dXMge1xuICAgIFN1Y2Nlc3MgPSAnc3VjY2VzcycsXG4gICAgRXJyb3IgPSAnZXJyb3InLFxuICAgIEluZm8gPSAnaW5mbycsXG4gICAgUGVuZGluZyA9ICdwZW5kaW5nJyxcbiAgICBXYXJuaW5nID0gJ3dhcm5pbmcnLFxufVxuXG5jb25zdCBJY29ucyA9IHtcbiAgICBbQWxlcnRTdGF0dXMuU3VjY2Vzc106ICdhc3NldHMvaWNvbnMvaWMtc3VjY2Vzcy5zdmcnLFxuICAgIFtBbGVydFN0YXR1cy5JbmZvXTogJ2Fzc2V0cy9pY29ucy9pYy1pbmZvLWltcG9ydGFudC5zdmcnLFxuICAgIFtBbGVydFN0YXR1cy5QZW5kaW5nXTogJ2Fzc2V0cy9pY29ucy9pYy1jbG9jay5zdmcnLFxuICAgIFtBbGVydFN0YXR1cy5FcnJvcl06ICdhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnJyxcbiAgICBbQWxlcnRTdGF0dXMuV2FybmluZ106ICdhc3NldHMvaWNvbnMvaWMtd2FybmluZy5zdmcnLFxufTtcblxuY29uc3QgU3RhdHVzQmFja2dyb3VuZENvbG9ycyA9IHtcbiAgICBbQWxlcnRTdGF0dXMuU3VjY2Vzc106ICdjb250ZW50R3JlZW5MaWdodCcsXG4gICAgW0FsZXJ0U3RhdHVzLkluZm9dOiAnYm9yZGVyUHJpbWFyeScsXG4gICAgW0FsZXJ0U3RhdHVzLldhcm5pbmddOiAnYm9yZGVyUHJpbWFyeScsXG4gICAgW0FsZXJ0U3RhdHVzLkVycm9yXTogJ2ZpbGxTZWNvbmRhcnlSZWRIb3ZlcicsXG4gICAgW0FsZXJ0U3RhdHVzLlBlbmRpbmddOiAnZmlsbFNlY29uZGFyeScsXG59O1xuXG5jb25zdCBTdGF0dXNTdmdDb2xvcnMgPSB7XG4gICAgW0FsZXJ0U3RhdHVzLlN1Y2Nlc3NdOiAnY29udGVudEdyZWVuJyxcbiAgICBbQWxlcnRTdGF0dXMuSW5mb106ICdjb250ZW50U2Vjb25kYXJ5JyxcbiAgICBbQWxlcnRTdGF0dXMuV2FybmluZ106ICdjb250ZW50U2Vjb25kYXJ5JyxcbiAgICBbQWxlcnRTdGF0dXMuRXJyb3JdOiAnY29udGVudFJlZCcsXG4gICAgW0FsZXJ0U3RhdHVzLlBlbmRpbmddOiAnY29udGVudExpZ2h0Qmx1ZScsXG59O1xuXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxQaWNrPFN0YXR1c01lc3NhZ2VQcm9wcywgJ3N0YXR1cyc+PihcbiAgICAoeyB0aGVtZSwgc3RhdHVzIH0pID0+ICh7XG4gICAgICAgIG1pbkhlaWdodDogNTIsXG4gICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnNbU3RhdHVzQmFja2dyb3VuZENvbG9yc1tzdGF0dXNdXSxcbiAgICAgICAgc3ZnOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9yc1tTdGF0dXNTdmdDb2xvcnNbc3RhdHVzXV0sXG4gICAgICAgIH0sXG4gICAgfSlcbik7XG5cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNNZXNzYWdlUHJvcHMge1xuICB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZSB8IHN0cmluZztcbiAgbWVzc2FnZTogUmVhY3QuUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBzdGF0dXM6IEFsZXJ0U3RhdHVzO1xuICBzY2FsZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnO1xuICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydCA9IChwcm9wczogU3RhdHVzTWVzc2FnZVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgdGl0bGUsIHN0YXR1cywgc2NhbGUgPSAnc20nLCBsaW5lSGVpZ2h0ID0gJ3NtJyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvblBhdGggPSBJY29uc1tzdGF0dXNdO1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyIHN0YXR1cz17c3RhdHVzfSBpdGVtc1NwYWNpbmc9ezh9PlxuICAgICAgICAgICAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17OH0+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Um93IGFsaWduPXsnY2VudGVyJ30gaXRlbXNTcGFjaW5nPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdmdJY29uIHNyYz17aWNvblBhdGh9IGFsdD17YEFsZXJ0IGljb24gd2l0aCAke3N0YXR1c30gc3RhdHVzYH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvZHlUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXtsaW5lSGVpZ2h0fSBzY2FsZT17c2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uPXsnYmxhY2snfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm9keVRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cblxuICAgICAgICAgICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17bGluZUhlaWdodH0gc2NhbGU9e3NjYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgICAgICAgICAgIDwvRmxleENvbHVtbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3RhdHVzPXtzdGF0dXN9IGFsaWduPVwiY2VudGVyXCIgaXRlbXNTcGFjaW5nPXs4fT5cbiAgICAgIDxTdmdJY29uIHNyYz17aWNvblBhdGh9IC8+XG4gICAgICA8Qm9keVRleHQgc2l6ZT17M30gbGluZUhlaWdodD17bGluZUhlaWdodH0gc2NhbGU9e3NjYWxlfT57bWVzc2FnZX08L0JvZHlUZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iXX0=