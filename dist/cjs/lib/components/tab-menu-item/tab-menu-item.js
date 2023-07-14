"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("../button/button"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var StyledButton = (0, styled_components_1.default)(button_1.default)(function (_a) {
    var theme = _a.theme, active = _a.active, disabled = _a.disabled;
    return theme.withMedia(tslib_1.__assign(tslib_1.__assign({ minWidth: [131, 140], padding: '6px', maxWidth: 'fit-content', height: 32, fontSize: '1.3rem', fontWeight: theme.typography.fontWeight.medium, cursor: 'pointer', marginLeft: 2, color: theme.styleguideColors.contentBlue, borderRadius: 0, textTransform: 'capitalize', ':first-of-type': {
            borderRadius: '4px 0 0 4px',
        }, ':last-of-type': {
            borderRadius: '0 4px 4px 0',
        }, ':hover': {
            background: theme.styleguideColors.fillSecondaryBlueHover,
            color: theme.styleguideColors.contentBlue,
        }, ':active': {
            background: theme.styleguideColors.fillSecondaryBlueClick,
            color: theme.styleguideColors.contentBlue,
        } }, (active && {
        cursor: 'default',
        background: theme.styleguideColors.fillPrimaryBlue,
        color: theme.styleguideColors.contentOnFill,
        ':hover': {
            background: theme.styleguideColors.fillPrimaryBlue,
        },
        ':active': {
            background: theme.styleguideColors.fillPrimaryBlue,
        },
    })), (disabled && {
        cursor: 'default',
        pointerEvents: 'none',
        color: theme.styleguideColors.contentTertiary,
    })));
});
function TabMenuItem(props) {
    return ((0, jsx_runtime_1.jsx)(StyledButton, tslib_1.__assign({ color: "utility" }, props, { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ gap: 3, align: 'center' }, { children: [props.children, props.tooltip && ((0, jsx_runtime_1.jsx)(svg_icon_1.default, { width: 17, height: 16, src: "assets/icons/ic-info.svg" }))] })) })));
}
exports.TabMenuItem = TabMenuItem;
exports.default = TabMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW1lbnUtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWItbWVudS1pdGVtL3RhYi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLG9FQUF1RDtBQUN2RCwwRUFBMkM7QUFDM0MsMEVBQTJDO0FBUTNDLElBQU0sWUFBWSxHQUFHLElBQUEsMkJBQU0sRUFBQyxnQkFBTSxDQUFDLENBQ2pDLFVBQUMsRUFBMkI7UUFBekIsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsUUFBUSxjQUFBO0lBQ3hCLE9BQUEsS0FBSyxDQUFDLFNBQVMscUNBQ2IsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNwQixPQUFPLEVBQUUsS0FBSyxFQUNkLFFBQVEsRUFBRSxhQUFhLEVBQ3ZCLE1BQU0sRUFBRSxFQUFFLEVBQ1YsUUFBUSxFQUFFLFFBQVEsRUFDbEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFDOUMsTUFBTSxFQUFFLFNBQVMsRUFDakIsVUFBVSxFQUFFLENBQUMsRUFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFDekMsWUFBWSxFQUFFLENBQUMsRUFDZixhQUFhLEVBQUUsWUFBWSxFQUMzQixnQkFBZ0IsRUFBRTtZQUNoQixZQUFZLEVBQUUsYUFBYTtTQUM1QixFQUNELGVBQWUsRUFBRTtZQUNmLFlBQVksRUFBRSxhQUFhO1NBQzVCLEVBRUQsUUFBUSxFQUFFO1lBQ1IsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0I7WUFDekQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1NBQzFDLEVBQ0QsU0FBUyxFQUFFO1lBQ1QsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0I7WUFDekQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXO1NBQzFDLElBRUUsQ0FBQyxNQUFNLElBQUk7UUFDWixNQUFNLEVBQUUsU0FBUztRQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7UUFDbEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1FBQzNDLFFBQVEsRUFBRTtZQUNSLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtTQUNuRDtRQUNELFNBQVMsRUFBRTtZQUNULFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtTQUNuRDtLQUNGLENBQUMsR0FFQyxDQUFDLFFBQVEsSUFBSTtRQUNkLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtLQUM5QyxDQUFDLEVBQ0Y7QUE3Q0YsQ0E2Q0UsQ0FDTCxDQUFDO0FBRUYsU0FBZ0IsV0FBVyxDQUFDLEtBQXVCO0lBQ2pELE9BQU8sQ0FDSCx1QkFBQyxZQUFZLHFCQUFDLEtBQUssRUFBQyxTQUFTLElBQUssS0FBSyxjQUNyQyx3QkFBQyxrQkFBTyxxQkFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLGlCQUM3QixLQUFLLENBQUMsUUFBUSxFQUNkLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FDaEIsdUJBQUMsa0JBQU8sSUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFDLDBCQUEwQixHQUFHLENBQ2xFLEtBQ08sSUFDRyxDQUNsQixDQUFDO0FBQ0osQ0FBQztBQVhELGtDQVdDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBBY3RpdmFibGVQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBCdXR0b24sIHsgQnV0dG9uUHJvcHMgfSBmcm9tICcuLi9idXR0b24vYnV0dG9uJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFRhYk1lbnVJdGVtUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcywgQWN0aXZhYmxlUHJvcHMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pPFRhYk1lbnVJdGVtUHJvcHM+KFxuICAoeyB0aGVtZSwgYWN0aXZlLCBkaXNhYmxlZCB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtaW5XaWR0aDogWzEzMSwgMTQwXSxcbiAgICAgIHBhZGRpbmc6ICc2cHgnLFxuICAgICAgbWF4V2lkdGg6ICdmaXQtY29udGVudCcsXG4gICAgICBoZWlnaHQ6IDMyLFxuICAgICAgZm9udFNpemU6ICcxLjNyZW0nLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbWFyZ2luTGVmdDogMixcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgICAgJzpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHggMCAwIDRweCcsXG4gICAgICB9LFxuICAgICAgJzpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzAgNHB4IDRweCAwJyxcbiAgICAgIH0sXG5cbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICB9LFxuICAgICAgJzphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVDbGljayxcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICB9LFxuXG4gICAgICAuLi4oYWN0aXZlICYmIHtcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgICAgICAnOmhvdmVyJzoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxuICAgICAgICB9LFxuICAgICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuXG4gICAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB9KSxcbiAgICB9KVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYk1lbnVJdGVtKHByb3BzOiBUYWJNZW51SXRlbVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgICA8U3R5bGVkQnV0dG9uIGNvbG9yPVwidXRpbGl0eVwiIHsuLi5wcm9wc30+XG4gICAgICAgIDxGbGV4Um93IGdhcD17M30gYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAge3Byb3BzLnRvb2x0aXAgJiYgKFxuICAgICAgICAgICAgPFN2Z0ljb24gd2lkdGg9ezE3fSBoZWlnaHQ9ezE2fSBzcmM9XCJhc3NldHMvaWNvbnMvaWMtaW5mby5zdmdcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJNZW51SXRlbTtcbiJdfQ==