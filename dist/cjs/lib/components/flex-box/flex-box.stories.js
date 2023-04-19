"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var flex_box_1 = tslib_1.__importDefault(require("./flex-box"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
exports.default = {
    component: flex_box_1.default,
    title: 'FlexBox',
    args: {
        gap: 10,
        wrap: 'wrap',
        itemsSpacing: 10,
        justify: 'center',
        direction: 'column',
        shrink: 1,
    },
};
var StyledBlock = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 100px;\n  width: 100px;\n  border: 1px solid #0a0a0a;\n  font-weight: bolder;\n  color: #fff;\n  :nth-child(1n) {\n    background: black;\n  }\n  :nth-child(2n) {\n    background: red;\n  }\n  :nth-child(3n) {\n    background: green;\n  }\n"], ["\n  height: 100px;\n  width: 100px;\n  border: 1px solid #0a0a0a;\n  font-weight: bolder;\n  color: #fff;\n  :nth-child(1n) {\n    background: black;\n  }\n  :nth-child(2n) {\n    background: red;\n  }\n  :nth-child(3n) {\n    background: green;\n  }\n"])));
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ itemsSpacing: 30 }, { children: (0, jsx_runtime_1.jsx)(flex_column_1.default, tslib_1.__assign({ itemsSpacing: 20 }, { children: (0, jsx_runtime_1.jsxs)(flex_box_1.default, tslib_1.__assign({}, args, { children: [(0, jsx_runtime_1.jsx)(StyledBlock, { children: "Block 1" }), (0, jsx_runtime_1.jsx)(StyledBlock, { children: "Block 2" }), (0, jsx_runtime_1.jsx)(StyledBlock, { children: "Block 3" })] })) })) }))); };
exports.Primary = Template.bind({});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxleC1ib3guc3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mbGV4LWJveC9mbGV4LWJveC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLGdFQUFpQztBQUNqQywwRUFBMkM7QUFDM0MsbUZBQW9EO0FBQ3BELGdGQUF1QztBQUV2QyxrQkFBZTtJQUNYLFNBQVMsRUFBRSxrQkFBTztJQUNsQixLQUFLLEVBQUUsU0FBUztJQUNoQixJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFFLFFBQVE7UUFDakIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsTUFBTSxFQUFFLENBQUM7S0FDWjtDQUM2QixDQUFDO0FBR25DLElBQU0sV0FBVyxHQUFHLDJCQUFNLENBQUMsR0FBRyx5VUFBQSw4UEFlN0IsSUFBQSxDQUFBO0FBRUQsSUFBTSxRQUFRLEdBQW1DLFVBQUMsSUFBSSxJQUFLLE9BQUEsQ0FDdkQsdUJBQUMsa0JBQU8scUJBQUMsWUFBWSxFQUFFLEVBQUUsZ0JBQ3JCLHVCQUFDLHFCQUFVLHFCQUFDLFlBQVksRUFBRSxFQUFFLGdCQUN4Qix3QkFBQyxrQkFBTyx1QkFBSyxJQUFJLGVBQ2IsdUJBQUMsV0FBVywwQkFBc0IsRUFDbEMsdUJBQUMsV0FBVywwQkFBc0IsRUFDbEMsdUJBQUMsV0FBVywwQkFBc0IsS0FDNUIsSUFDRCxJQUNQLENBQ2IsRUFWMEQsQ0FVMUQsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50TWV0YSwgQ29tcG9uZW50U3RvcnkgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCBGbGV4Qm94IGZyb20gJy4vZmxleC1ib3gnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnQ6IEZsZXhCb3gsXG4gICAgdGl0bGU6ICdGbGV4Qm94JyxcbiAgICBhcmdzOiB7XG4gICAgICAgIGdhcDogMTAsXG4gICAgICAgIHdyYXA6ICd3cmFwJyxcbiAgICAgICAgaXRlbXNTcGFjaW5nOiAxMCxcbiAgICAgICAganVzdGlmeTogJ2NlbnRlcicsXG4gICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIHNocmluazogMSxcbiAgICB9LFxufSBhcyBDb21wb25lbnRNZXRhPHR5cGVvZiBGbGV4Qm94PjtcblxuXG5jb25zdCBTdHlsZWRCbG9jayA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBhMGEwYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIDpudGgtY2hpbGQoMW4pIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICA6bnRoLWNoaWxkKDJuKSB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICB9XG4gIDpudGgtY2hpbGQoM24pIHtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgfVxuYFxuXG5jb25zdCBUZW1wbGF0ZTogQ29tcG9uZW50U3Rvcnk8dHlwZW9mIEZsZXhCb3g+ID0gKGFyZ3MpID0+IChcbiAgICA8RmxleFJvdyBpdGVtc1NwYWNpbmc9ezMwfT5cbiAgICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXsyMH0+XG4gICAgICAgICAgICA8RmxleEJveCB7Li4uYXJnc30+XG4gICAgICAgICAgICAgICAgPFN0eWxlZEJsb2NrPkJsb2NrIDE8L1N0eWxlZEJsb2NrPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRCbG9jaz5CbG9jayAyPC9TdHlsZWRCbG9jaz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkQmxvY2s+QmxvY2sgMzwvU3R5bGVkQmxvY2s+XG4gICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L0ZsZXhSb3c+XG4pO1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuIl19