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
    return ((0, jsx_runtime_1.jsx)(tooltip_1.default, tslib_1.__assign({ title: props.tooltip, limitWidth: true, lineHeight: props.lineHeight, scale: props.scale }, { children: (0, jsx_runtime_1.jsx)(StyledButton, tslib_1.__assign({ color: "utility" }, props, { children: (0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ gap: 3, align: 'center' }, { children: [props.children, props.tooltip && ((0, jsx_runtime_1.jsx)(svg_icon_1.default, { width: 17, height: 16, src: "assets/icons/ic-info.svg" }))] })) })) })));
}
exports.TabMenuItem = TabMenuItem;
exports.default = TabMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW1lbnUtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWItbWVudS1pdGVtL3RhYi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBR3ZDLG9FQUF1RDtBQUN2RCwwRUFBMkM7QUFDM0MsMEVBQTJDO0FBQzNDLHFEQUFpRDtBQUNqRCx1RUFBeUM7QUFVekMsSUFBTSxZQUFZLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGdCQUFNLENBQUMsQ0FDakMsVUFBQyxFQUE0RDtRQUExRCxLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxrQkFBaUIsRUFBakIsVUFBVSxtQkFBRyxJQUFJLEtBQUEsRUFBRSxhQUFZLEVBQVosS0FBSyxtQkFBRyxJQUFJLEtBQUE7SUFDekQsT0FBQSxLQUFLLENBQUMsU0FBUyxxQ0FDYixRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3BCLE9BQU8sRUFBRSxLQUFLLEVBQ2QsUUFBUSxFQUFFLGFBQWEsRUFDdkIsTUFBTSxFQUFFLEVBQUUsRUFDVixRQUFRLEVBQUUsSUFBQSxzQkFBUyxFQUNmO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsV0FBVztTQUNsQixFQUNELEtBQUssQ0FDUixFQUNDLFVBQVUsRUFBRSxJQUFBLHNCQUFTLEVBQ2pCO1lBQ0ksRUFBRSxFQUFFLFFBQVE7WUFDWixFQUFFLEVBQUUsU0FBUztTQUNoQixFQUNELFVBQVUsQ0FDYixFQUNILFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQzlDLE1BQU0sRUFBRSxTQUFTLEVBQ2pCLFVBQVUsRUFBRSxDQUFDLEVBQ2IsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQ3pDLFlBQVksRUFBRSxDQUFDLEVBQ2YsYUFBYSxFQUFFLFlBQVksRUFDM0IsZ0JBQWdCLEVBQUU7WUFDaEIsWUFBWSxFQUFFLGFBQWE7U0FDNUIsRUFDRCxlQUFlLEVBQUU7WUFDZixZQUFZLEVBQUUsYUFBYTtTQUM1QixFQUVELFFBQVEsRUFBRTtZQUNSLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1lBQ3pELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztTQUMxQyxFQUNELFNBQVMsRUFBRTtZQUNULFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1lBQ3pELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVztTQUMxQyxJQUVFLENBQUMsTUFBTSxJQUFJO1FBQ1osTUFBTSxFQUFFLFNBQVM7UUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO1FBQ2xELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUMzQyxRQUFRLEVBQUU7WUFDUixVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7U0FDbkQ7UUFDRCxTQUFTLEVBQUU7WUFDVCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7U0FDbkQ7S0FDRixDQUFDLEdBRUMsQ0FBQyxRQUFRLElBQUk7UUFDZCxNQUFNLEVBQUUsU0FBUztRQUNqQixhQUFhLEVBQUUsTUFBTTtRQUNyQixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7S0FDOUMsQ0FBQyxFQUNGO0FBMURGLENBMERFLENBQ0wsQ0FBQztBQUVGLFNBQWdCLFdBQVcsQ0FBQyxLQUF1QjtJQUNqRCxPQUFPLENBQ0gsdUJBQUMsaUJBQU8scUJBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxRQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxnQkFDMUYsdUJBQUMsWUFBWSxxQkFBQyxLQUFLLEVBQUMsU0FBUyxJQUFLLEtBQUssY0FDckMsd0JBQUMsa0JBQU8scUJBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxpQkFDN0IsS0FBSyxDQUFDLFFBQVEsRUFDZCxLQUFLLENBQUMsT0FBTyxJQUFJLENBQ2hCLHVCQUFDLGtCQUFPLElBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQywwQkFBMEIsR0FBRyxDQUNsRSxLQUNPLElBQ0csSUFDTCxDQUNiLENBQUM7QUFDSixDQUFDO0FBYkQsa0NBYUM7QUFFRCxrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEFjdGl2YWJsZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiwgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4uL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IHttYXRjaFNpemV9IGZyb20gXCIuLi8uLi91dGlscy9tYXRjaC1zaXplXCI7XG5pbXBvcnQgVG9vbHRpcCBmcm9tIFwiLi4vdG9vbHRpcC90b29sdGlwXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBUYWJNZW51SXRlbVByb3BzIGV4dGVuZHMgQnV0dG9uUHJvcHMsIEFjdGl2YWJsZVByb3BzIHtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICB0b29sdGlwPzogc3RyaW5nO1xuICBsaW5lSGVpZ2h0PzogJ3hzJyB8ICdzbSc7XG4gIHNjYWxlPzogJ3hzJyB8ICdzbSc7XG59XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pPFRhYk1lbnVJdGVtUHJvcHM+KFxuICAoeyB0aGVtZSwgYWN0aXZlLCBkaXNhYmxlZCwgbGluZUhlaWdodCA9ICdzbScsIHNjYWxlID0gJ3NtJyB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBtaW5XaWR0aDogWzEzMSwgMTQwXSxcbiAgICAgIHBhZGRpbmc6ICc2cHgnLFxuICAgICAgbWF4V2lkdGg6ICdmaXQtY29udGVudCcsXG4gICAgICBoZWlnaHQ6IDMyLFxuICAgICAgZm9udFNpemU6IG1hdGNoU2l6ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNtOiAnMS4zcmVtJyxcbiAgICAgICAgICAgICAgeHM6ICcwLjgxMjVyZW0nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NhbGVcbiAgICAgICksXG4gICAgICAgIGxpbmVIZWlnaHQ6IG1hdGNoU2l6ZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzbTogJzEuNXJlbScsXG4gICAgICAgICAgICAgICAgeHM6ICcxLjI1cmVtJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lSGVpZ2h0XG4gICAgICAgICksXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHQubWVkaXVtLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBtYXJnaW5MZWZ0OiAyLFxuICAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWUsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgICAnOmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzRweCAwIDAgNHB4JyxcbiAgICAgIH0sXG4gICAgICAnOmxhc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMCA0cHggNHB4IDAnLFxuICAgICAgfSxcblxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUhvdmVyLFxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgIH0sXG4gICAgICAnOmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5Qmx1ZUNsaWNrLFxuICAgICAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICAgIH0sXG5cbiAgICAgIC4uLihhY3RpdmUgJiYge1xuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWUsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGwsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeUJsdWUsXG4gICAgICAgIH0sXG4gICAgICAgICc6YWN0aXZlJzoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlCbHVlLFxuICAgICAgICB9LFxuICAgICAgfSksXG5cbiAgICAgIC4uLihkaXNhYmxlZCAmJiB7XG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIH0pLFxuICAgIH0pXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFiTWVudUl0ZW0ocHJvcHM6IFRhYk1lbnVJdGVtUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIHRpdGxlPXtwcm9wcy50b29sdGlwfSBsaW1pdFdpZHRoIGxpbmVIZWlnaHQ9e3Byb3BzLmxpbmVIZWlnaHR9IHNjYWxlPXtwcm9wcy5zY2FsZX0+XG4gICAgICA8U3R5bGVkQnV0dG9uIGNvbG9yPVwidXRpbGl0eVwiIHsuLi5wcm9wc30+XG4gICAgICAgIDxGbGV4Um93IGdhcD17M30gYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAge3Byb3BzLnRvb2x0aXAgJiYgKFxuICAgICAgICAgICAgPFN2Z0ljb24gd2lkdGg9ezE3fSBoZWlnaHQ9ezE2fSBzcmM9XCJhc3NldHMvaWNvbnMvaWMtaW5mby5zdmdcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAgPC9Ub29sdGlwPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJNZW51SXRlbTtcbiJdfQ==