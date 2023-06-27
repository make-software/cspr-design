"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = exports.AlertStatus = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var Container = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, status = _a.status;
    return ({
        minHeight: 52,
        padding: 16,
        borderRadius: theme.borderRadius.base,
        backgroundColor: status === AlertStatus.Success
            ? theme.styleguideColors.fillSecondaryBlueHover
            : theme.styleguideColors.fillSecondaryRedHover,
        svg: {
            color: status === AlertStatus.Success
                ? theme.styleguideColors.contentLightBlue
                : theme.styleguideColors.contentRed,
        },
    });
});
var AlertStatus;
(function (AlertStatus) {
    AlertStatus["Success"] = "success";
    AlertStatus["Error"] = "error";
})(AlertStatus = exports.AlertStatus || (exports.AlertStatus = {}));
var Alert = function (props) {
    var message = props.message, status = props.status;
    var iconSrc = status === 'success'
        ? 'assets/icons/ic-clock.svg'
        : 'assets/icons/ic-error.svg';
    return ((0, jsx_runtime_1.jsxs)(Container, tslib_1.__assign({ status: status, align: "center", itemsSpacing: 8 }, { children: [(0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconSrc }), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3 }, { children: message }))] })));
};
exports.Alert = Alert;
exports.default = exports.Alert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLDZFQUE4QztBQUM5QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBRTNDLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQy9CLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEIsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDckMsZUFBZSxFQUNiLE1BQU0sS0FBSyxXQUFXLENBQUMsT0FBTztZQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQjtZQUMvQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQjtRQUNsRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQ0gsTUFBTSxLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtnQkFDekMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1NBQ3hDO0tBQ0YsQ0FBQztBQWRxQixDQWNyQixDQUNILENBQUM7QUFFRixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsa0NBQW1CLENBQUE7SUFDbkIsOEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFHdEI7QUFPTSxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQXlCO0lBQ3JDLElBQUEsT0FBTyxHQUFhLEtBQUssUUFBbEIsRUFBRSxNQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7SUFFbEMsSUFBTSxPQUFPLEdBQ1gsTUFBTSxLQUFLLFNBQVM7UUFDbEIsQ0FBQyxDQUFDLDJCQUEyQjtRQUM3QixDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFFbEMsT0FBTyxDQUNMLHdCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBRSxDQUFDLGlCQUN2RCx1QkFBQyxrQkFBTyxJQUFDLEdBQUcsRUFBRSxPQUFPLEdBQUksRUFDekIsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsT0FBTyxJQUFZLEtBQzdCLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWRXLFFBQUEsS0FBSyxTQWNoQjtBQUVGLGtCQUFlLGFBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xyXG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChGbGV4Um93KTxQaWNrPFN0YXR1c01lc3NhZ2VQcm9wcywgJ3N0YXR1cyc+PihcclxuICAoeyB0aGVtZSwgc3RhdHVzIH0pID0+ICh7XHJcbiAgICBtaW5IZWlnaHQ6IDUyLFxyXG4gICAgcGFkZGluZzogMTYsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICBzdGF0dXMgPT09IEFsZXJ0U3RhdHVzLlN1Y2Nlc3NcclxuICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlclxyXG4gICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5UmVkSG92ZXIsXHJcbiAgICBzdmc6IHtcclxuICAgICAgY29sb3I6XHJcbiAgICAgICAgc3RhdHVzID09PSBBbGVydFN0YXR1cy5TdWNjZXNzXHJcbiAgICAgICAgICA/IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudExpZ2h0Qmx1ZVxyXG4gICAgICAgICAgOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRSZWQsXHJcbiAgICB9LFxyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgZW51bSBBbGVydFN0YXR1cyB7XHJcbiAgU3VjY2VzcyA9ICdzdWNjZXNzJyxcclxuICBFcnJvciA9ICdlcnJvcicsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzTWVzc2FnZVByb3BzIHtcclxuICBtZXNzYWdlOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgc3RhdHVzOiBBbGVydFN0YXR1cztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFsZXJ0ID0gKHByb3BzOiBTdGF0dXNNZXNzYWdlUHJvcHMpID0+IHtcclxuICBjb25zdCB7IG1lc3NhZ2UsIHN0YXR1cyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGljb25TcmMgPVxyXG4gICAgc3RhdHVzID09PSAnc3VjY2VzcydcclxuICAgICAgPyAnYXNzZXRzL2ljb25zL2ljLWNsb2NrLnN2ZydcclxuICAgICAgOiAnYXNzZXRzL2ljb25zL2ljLWVycm9yLnN2Zyc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIHN0YXR1cz17c3RhdHVzfSBhbGlnbj1cImNlbnRlclwiIGl0ZW1zU3BhY2luZz17OH0+XHJcbiAgICAgIDxTdmdJY29uIHNyYz17aWNvblNyY30gLz5cclxuICAgICAgPEJvZHlUZXh0IHNpemU9ezN9PnttZXNzYWdlfTwvQm9keVRleHQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XHJcbiJdfQ==