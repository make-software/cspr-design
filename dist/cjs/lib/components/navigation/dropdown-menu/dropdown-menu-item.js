"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var ItemContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        cursor: 'pointer',
        padding: '12px 24px',
        ':hover, :active': {
            background: theme.styleguideColors.fillSecondaryBlueHover,
        },
    });
});
var MenuItemWrapper = styled_components_1.default.li(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        display: 'flex',
        color: theme.styleguideColors.contentPrimary,
        '&:hover': {
            cursor: 'pointer',
            '> *': {
                color: [theme.styleguideColors.contentBlue],
                fill: [theme.styleguideColors.contentBlue],
            },
        },
    });
});
var DropdownMenuItem = function (props) {
    return ((0, jsx_runtime_1.jsx)(MenuItemWrapper, tslib_1.__assign({}, props, { children: (0, jsx_runtime_1.jsx)(ItemContainer, { children: props.children }) })));
};
exports.DropdownMenuItem = DropdownMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNwRCxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLGlCQUFpQixFQUFFO1lBQ2pCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCO1NBQzFEO0tBQ0YsQ0FBQztBQVBtRCxDQU9uRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDeEMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7UUFDNUMsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7Z0JBQzNDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7YUFDM0M7U0FDRjtLQUNGLENBQUM7QUFWRixDQVVFLENBQ0gsQ0FBQztBQU1LLElBQU0sZ0JBQWdCLEdBQUcsVUFDOUIsS0FBK0M7SUFFL0MsT0FBTyxDQUNMLHVCQUFDLGVBQWUsdUJBQUssS0FBSyxjQUN4Qix1QkFBQyxhQUFhLGNBQUUsS0FBSyxDQUFDLFFBQVEsR0FBaUIsSUFDL0IsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVJXLFFBQUEsZ0JBQWdCLG9CQVEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuXG5jb25zdCBJdGVtQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpKCh7IHRoZW1lIH0pID0+ICh7XG4gIHdpZHRoOiAnMTAwJScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBwYWRkaW5nOiAnMTJweCAyNHB4JyxcbiAgJzpob3ZlciwgOmFjdGl2ZSc6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnlCbHVlSG92ZXIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IE1lbnVJdGVtV3JhcHBlciA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBjb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50UHJpbWFyeSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJz4gKic6IHtcbiAgICAgICAgY29sb3I6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlXSxcbiAgICAgICAgZmlsbDogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIERyb3Bkb3duTWVudUl0ZW1Qcm9wcyB7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SXRlbSA9IChcbiAgcHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPERyb3Bkb3duTWVudUl0ZW1Qcm9wcz5cbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNZW51SXRlbVdyYXBwZXIgey4uLnByb3BzfT5cbiAgICAgIDxJdGVtQ29udGFpbmVyPntwcm9wcy5jaGlsZHJlbn08L0l0ZW1Db250YWluZXI+XG4gICAgPC9NZW51SXRlbVdyYXBwZXI+XG4gICk7XG59O1xuIl19