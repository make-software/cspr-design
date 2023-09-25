"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuItem = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var ItemContainer = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, padding = _a.padding;
    return ({
        width: '100%',
        cursor: 'pointer',
        padding: padding !== null && padding !== void 0 ? padding : '12px 16px',
        ':hover, :active': {
            borderRadius: theme.borderRadius.base,
            background: theme.styleguideColors.fillSecondary,
        },
    });
});
var MenuItemWrapper = styled_components_1.default.li(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        boxSizing: 'border-box',
        display: 'flex',
        color: theme.styleguideColors.contentPrimary,
        '&:hover': {
            cursor: 'pointer',
            borderRadius: theme.borderRadius.base,
            '> *': {
                color: [theme.styleguideColors.contentBlue],
                fill: [theme.styleguideColors.contentBlue],
                background: theme.styleguideColors.fillSecondary,
            },
        },
    });
});
var DropdownMenuItem = function (props) {
    return ((0, jsx_runtime_1.jsx)(MenuItemWrapper, tslib_1.__assign({}, props, { children: (0, jsx_runtime_1.jsx)(ItemContainer, tslib_1.__assign({ padding: props.padding }, { children: props.children })) })));
};
exports.DropdownMenuItem = DropdownMenuItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LWl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDZFQUE4QztBQUU5QyxJQUFNLGFBQWEsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUF1QixVQUFDLEVBQWtCO1FBQWhCLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRixLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyxjQUFQLE9BQU8sR0FBSSxXQUFXO1FBQy9CLGlCQUFpQixFQUFFO1lBQ2pCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUk7WUFDckMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO1NBQ2pEO0tBQ0YsQ0FBQztBQVJrRixDQVFsRixDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDeEMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsU0FBUyxFQUFFLFlBQVk7UUFDdkIsT0FBTyxFQUFFLE1BQU07UUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWM7UUFDNUMsU0FBUyxFQUFFO1lBQ1QsTUFBTSxFQUFFLFNBQVM7WUFDakIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtZQUNyQyxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztnQkFDMUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhO2FBQ2pEO1NBQ0Y7S0FDRixDQUFDO0FBYkYsQ0FhRSxDQUNILENBQUM7QUFPSyxJQUFNLGdCQUFnQixHQUFHLFVBQzlCLEtBQStDO0lBRS9DLE9BQU8sQ0FDTCx1QkFBQyxlQUFlLHVCQUFLLEtBQUssY0FDeEIsdUJBQUMsYUFBYSxxQkFBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sZ0JBQUcsS0FBSyxDQUFDLFFBQVEsSUFBaUIsSUFDdkQsQ0FDbkIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVJXLFFBQUEsZ0JBQWdCLG9CQVEzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcclxuXHJcbmNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQoRmxleFJvdyk8eyBwYWRkaW5nPzogc3RyaW5nIH0+KCh7IHRoZW1lLCBwYWRkaW5nIH0pID0+ICh7XHJcbiAgd2lkdGg6ICcxMDAlJyxcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICBwYWRkaW5nOiBwYWRkaW5nID8/ICcxMnB4IDE2cHgnLFxyXG4gICc6aG92ZXIsIDphY3RpdmUnOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IE1lbnVJdGVtV3JhcHBlciA9IHN0eWxlZC5saSgoeyB0aGVtZSB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRQcmltYXJ5LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gICAgICAnPiAqJzoge1xyXG4gICAgICAgIGNvbG9yOiBbdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZV0sXHJcbiAgICAgICAgZmlsbDogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudEJsdWVdLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFNlY29uZGFyeSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuXHJcbmludGVyZmFjZSBEcm9wZG93bk1lbnVJdGVtUHJvcHMge1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gIHBhZGRpbmc/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnVJdGVtID0gKFxyXG4gIHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxEcm9wZG93bk1lbnVJdGVtUHJvcHM+XHJcbikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudUl0ZW1XcmFwcGVyIHsuLi5wcm9wc30+XHJcbiAgICAgIDxJdGVtQ29udGFpbmVyIHBhZGRpbmc9e3Byb3BzLnBhZGRpbmd9Pntwcm9wcy5jaGlsZHJlbn08L0l0ZW1Db250YWluZXI+XHJcbiAgICA8L01lbnVJdGVtV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG4iXX0=