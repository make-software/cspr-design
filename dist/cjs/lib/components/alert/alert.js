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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBRXZDLDZFQUE4QztBQUM5QywwRUFBMkM7QUFDM0MsMEVBQTJDO0FBRTNDLElBQU0sU0FBUyxHQUFHLElBQUEsMkJBQU0sRUFBQyxrQkFBTyxDQUFDLENBQy9CLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFBTyxPQUFBLENBQUM7UUFDdEIsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7UUFDckMsZUFBZSxFQUNiLE1BQU0sS0FBSyxXQUFXLENBQUMsT0FBTztZQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQjtZQUMvQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQjtRQUNsRCxHQUFHLEVBQUU7WUFDSCxLQUFLLEVBQ0gsTUFBTSxLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQjtnQkFDekMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1NBQ3hDO0tBQ0YsQ0FBQztBQWRxQixDQWNyQixDQUNILENBQUM7QUFFRixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsa0NBQW1CLENBQUE7SUFDbkIsOEJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBSFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFHdEI7QUFPTSxJQUFNLEtBQUssR0FBRyxVQUFDLEtBQXlCO0lBQ3JDLElBQUEsT0FBTyxHQUFhLEtBQUssUUFBbEIsRUFBRSxNQUFNLEdBQUssS0FBSyxPQUFWLENBQVc7SUFFbEMsSUFBTSxPQUFPLEdBQ1gsTUFBTSxLQUFLLFNBQVM7UUFDbEIsQ0FBQyxDQUFDLDJCQUEyQjtRQUM3QixDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFFbEMsT0FBTyxDQUNMLHdCQUFDLFNBQVMscUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBRSxDQUFDLGlCQUN2RCx1QkFBQyxrQkFBTyxJQUFDLEdBQUcsRUFBRSxPQUFPLEdBQUksRUFDekIsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQUcsT0FBTyxJQUFZLEtBQzdCLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWRXLFFBQUEsS0FBSyxTQWNoQjtBQUVGLGtCQUFlLGFBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8UGljazxTdGF0dXNNZXNzYWdlUHJvcHMsICdzdGF0dXMnPj4oXG4gICh7IHRoZW1lLCBzdGF0dXMgfSkgPT4gKHtcbiAgICBtaW5IZWlnaHQ6IDUyLFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJvcmRlclJhZGl1czogdGhlbWUuYm9yZGVyUmFkaXVzLmJhc2UsXG4gICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgc3RhdHVzID09PSBBbGVydFN0YXR1cy5TdWNjZXNzXG4gICAgICAgID8gdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyXG4gICAgICAgIDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5UmVkSG92ZXIsXG4gICAgc3ZnOiB7XG4gICAgICBjb2xvcjpcbiAgICAgICAgc3RhdHVzID09PSBBbGVydFN0YXR1cy5TdWNjZXNzXG4gICAgICAgICAgPyB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRMaWdodEJsdWVcbiAgICAgICAgICA6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFJlZCxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGVudW0gQWxlcnRTdGF0dXMge1xuICBTdWNjZXNzID0gJ3N1Y2Nlc3MnLFxuICBFcnJvciA9ICdlcnJvcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzTWVzc2FnZVByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICBzdGF0dXM6IEFsZXJ0U3RhdHVzO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnQgPSAocHJvcHM6IFN0YXR1c01lc3NhZ2VQcm9wcykgPT4ge1xuICBjb25zdCB7IG1lc3NhZ2UsIHN0YXR1cyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWNvblNyYyA9XG4gICAgc3RhdHVzID09PSAnc3VjY2VzcydcbiAgICAgID8gJ2Fzc2V0cy9pY29ucy9pYy1jbG9jay5zdmcnXG4gICAgICA6ICdhc3NldHMvaWNvbnMvaWMtZXJyb3Iuc3ZnJztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3RhdHVzPXtzdGF0dXN9IGFsaWduPVwiY2VudGVyXCIgaXRlbXNTcGFjaW5nPXs4fT5cbiAgICAgIDxTdmdJY29uIHNyYz17aWNvblNyY30gLz5cbiAgICAgIDxCb2R5VGV4dCBzaXplPXszfT57bWVzc2FnZX08L0JvZHlUZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iXX0=