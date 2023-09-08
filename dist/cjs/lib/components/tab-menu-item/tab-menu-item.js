"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("../button/button"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var match_size_1 = require("../../utils/match-size");
var tooltip_1 = tslib_1.__importDefault(require("../tooltip/tooltip"));
var StyledButton = (0, styled_components_1.default)(button_1.default)(function (_a) {
    var theme = _a.theme, active = _a.active, disabled = _a.disabled, _b = _a.lineHeight, lineHeight = _b === void 0 ? 'sm' : _b, _c = _a.scale, scale = _c === void 0 ? 'sm' : _c;
    return theme.withMedia(tslib_1.__assign(tslib_1.__assign({ minWidth: [131, 140], padding: '6px', maxWidth: 'fit-content', height: 32, fontSize: (0, match_size_1.matchSize)({
            sm: '1.3rem',
            xs: '0.8125rem',
        }, scale), lineHeight: (0, match_size_1.matchSize)({
            sm: '1.5rem',
            xs: '1.25rem',
        }, lineHeight), fontWeight: theme.typography.fontWeight.medium, cursor: 'pointer', marginLeft: 2, color: theme.styleguideColors.contentBlue, borderRadius: 0, textTransform: 'capitalize', ':first-of-type': {
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
    return ((0, jsx_runtime_1.jsx)(tooltip_1.default, tslib_1.__assign({ title: props.tooltip, limitWidth: true, lineHeight: props.lineHeight, scale: props.scale, paddingScale: props.tooltipPaddingScale }, { children: (0, jsx_runtime_1.jsx)(StyledButton, tslib_1.__assign({ color: "utility" }, props, { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ gap: 3, align: 'center' }, { children: [props.children, props.tooltip && ((0, jsx_runtime_1.jsx)(svg_icon_1.default, { width: 17, height: 16, src: "assets/icons/ic-info.svg" }))] })) })) })));
}
exports.TabMenuItem = TabMenuItem;
exports.default = TabMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW1lbnUtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWItbWVudS1pdGVtL3RhYi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLG9FQUF1RDtBQUN2RCwwRUFBMkM7QUFDM0MsMEVBQTJDO0FBQzNDLHFEQUFpRDtBQUNqRCx1RUFBeUM7QUFXekMsSUFBTSxZQUFZLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGdCQUFNLENBQUMsQ0FDakMsVUFBQyxFQUE0RDtRQUExRCxLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUE7SUFDekQsT0FBQSxLQUFLLENBQUMsU0FBUyxxQ0FDYixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLE9BQU8sRUFBRSxLQUFLLEVBQ2QsUUFBUSxFQUFFLGFBQWEsRUFDdkIsTUFBTSxFQUFFLEVBQUUsRUFDVixRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNmO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsV0FBVztTQUNsQixFQUNELEtBQUssQ0FDUixFQUNDLFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNoQixFQUNELFVBQVUsQ0FDYixFQUNILFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQzlDLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLFVBQVUsRUFBRSxDQUFDLEVBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQ3pDLFlBQVksRUFBRSxDQUFDLEVBQ2YsYUFBYSxFQUFFLFlBQVksRUFDM0IsZ0JBQWdCLEVBQUU7WUFDaEIsWUFBWSxFQUFFLGFBQWE7U0FDNUIsRUFDRCxlQUFlLEVBQUU7WUFDZixZQUFZLEVBQUUsYUFBYTtTQUM1QixFQUVELFFBQVEsRUFBRTtZQUNSLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1lBQ3pELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztTQUMxQyxFQUNELFNBQVMsRUFBRTtZQUNULFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1lBQ3pELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztTQUMxQyxJQUVFLENBQUMsTUFBTSxJQUFJO1FBQ1osTUFBTSxFQUFFLFNBQVM7UUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1FBQ2xELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxRQUFRLEVBQUU7WUFDUixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7U0FDbkQ7UUFDRCxTQUFTLEVBQUU7WUFDVCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7U0FDbkQ7S0FDRixDQUFDLEdBRUMsQ0FBQyxRQUFRLElBQUk7UUFDZCxNQUFNLEVBQUUsU0FBUztRQUNqQixhQUFhLEVBQUUsTUFBTTtRQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7S0FDOUMsQ0FBQyxFQUNGO0FBMURGLENBMERFLENBQ0wsQ0FBQztBQUVGLFNBQWdCLFdBQVcsQ0FBQyxLQUF1QjtJQUNqRCxPQUFPLENBQ0gsdUJBQUMsaUJBQU8scUJBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxRQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsbUJBQW1CLGdCQUNuSSx1QkFBQyxZQUFZLHFCQUFDLEtBQUssRUFBQyxTQUFTLElBQUssS0FBSyxjQUNyQyx3QkFBQyxrQkFBTyxxQkFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLGlCQUM3QixLQUFLLENBQUMsUUFBUSxFQUNkLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FDaEIsdUJBQUMsa0JBQU8sSUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFDLDBCQUEwQixHQUFHLENBQ2xFLEtBQ08sSUFDRyxJQUNMLENBQ2IsQ0FBQztBQUNKLENBQUM7QUFiRCxrQ0FhQztBQUVELGtCQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQWN0aXZhYmxlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgQnV0dG9uLCB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgRmxleFJvdyBmcm9tICcuLi9mbGV4LXJvdy9mbGV4LXJvdyc7XG5pbXBvcnQge21hdGNoU2l6ZX0gZnJvbSBcIi4uLy4uL3V0aWxzL21hdGNoLXNpemVcIjtcbmltcG9ydCBUb29sdGlwIGZyb20gXCIuLi90b29sdGlwL3Rvb2x0aXBcIjtcblxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgaW50ZXJmYWNlIFRhYk1lbnVJdGVtUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcywgQWN0aXZhYmxlUHJvcHMge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ/OiAneHMnIHwgJ3NtJztcbiAgc2NhbGU/OiAneHMnIHwgJ3NtJztcbiAgdG9vbHRpcFBhZGRpbmdTY2FsZT86IDEgfCAyO1xufVxuXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKTxUYWJNZW51SXRlbVByb3BzPihcbiAgKHsgdGhlbWUsIGFjdGl2ZSwgZGlzYWJsZWQsIGxpbmVIZWlnaHQgPSAnc20nLCBzY2FsZSA9ICdzbScgfSkgPT5cbiAgICB0aGVtZS53aXRoTWVkaWEoe1xuICAgICAgbWluV2lkdGg6IFsxMzEsIDE0MF0sXG4gICAgICBwYWRkaW5nOiAnNnB4JyxcbiAgICAgIG1heFdpZHRoOiAnZml0LWNvbnRlbnQnLFxuICAgICAgaGVpZ2h0OiAzMixcbiAgICAgIGZvbnRTaXplOiBtYXRjaFNpemUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgICBzbTogJzEuM3JlbScsXG4gICAgICAgICAgICAgIHhzOiAnMC44MTI1cmVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjYWxlXG4gICAgICApLFxuICAgICAgICBsaW5lSGVpZ2h0OiBtYXRjaFNpemUoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc206ICcxLjVyZW0nLFxuICAgICAgICAgICAgICAgIHhzOiAnMS4yNXJlbScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZUhlaWdodFxuICAgICAgICApLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Lm1lZGl1bSxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbWFyZ2luTGVmdDogMixcbiAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgICAgJzpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHggMCAwIDRweCcsXG4gICAgICB9LFxuICAgICAgJzpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzAgNHB4IDRweCAwJyxcbiAgICAgIH0sXG5cbiAgICAgICc6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVIb3ZlcixcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICB9LFxuICAgICAgJzphY3RpdmUnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeUJsdWVDbGljayxcbiAgICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICB9LFxuXG4gICAgICAuLi4oYWN0aXZlICYmIHtcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50T25GaWxsLFxuICAgICAgICAnOmhvdmVyJzoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxuICAgICAgICB9LFxuICAgICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5Qmx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuXG4gICAgICAuLi4oZGlzYWJsZWQgJiYge1xuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICB9KSxcbiAgICB9KVxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYk1lbnVJdGVtKHByb3BzOiBUYWJNZW51SXRlbVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCB0aXRsZT17cHJvcHMudG9vbHRpcH0gbGltaXRXaWR0aCBsaW5lSGVpZ2h0PXtwcm9wcy5saW5lSGVpZ2h0fSBzY2FsZT17cHJvcHMuc2NhbGV9IHBhZGRpbmdTY2FsZT17cHJvcHMudG9vbHRpcFBhZGRpbmdTY2FsZX0+XG4gICAgICA8U3R5bGVkQnV0dG9uIGNvbG9yPVwidXRpbGl0eVwiIHsuLi5wcm9wc30+XG4gICAgICAgIDxGbGV4Um93IGdhcD17M30gYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAge3Byb3BzLnRvb2x0aXAgJiYgKFxuICAgICAgICAgICAgPFN2Z0ljb24gd2lkdGg9ezE3fSBoZWlnaHQ9ezE2fSBzcmM9XCJhc3NldHMvaWNvbnMvaWMtaW5mby5zdmdcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAgPC9Ub29sdGlwPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJNZW51SXRlbTtcbiJdfQ==