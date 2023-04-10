"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsMenu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var base_menu_1 = require("../base-menu/base-menu");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../flex-row/flex-row"));
var match_media_1 = require("../../../utils/match-media");
var flex_column_1 = tslib_1.__importDefault(require("../../flex-column/flex-column"));
var ProductsMenuWrapper = styled_components_1.default.ul(function (_a) {
    var theme = _a.theme;
    return ({
        maxWidth: "500px",
        padding: '0'
    });
});
var ProductsMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, children = _a.children;
    var ProductContainer = (0, match_media_1.useMatchMedia)([flex_column_1.default, flex_column_1.default, flex_row_1.default], []);
    return ((0, jsx_runtime_1.jsx)(base_menu_1.BaseMenu, tslib_1.__assign({ opened: opened }, { children: (0, jsx_runtime_1.jsx)(ProductsMenuWrapper, { children: (0, jsx_runtime_1.jsx)(ProductContainer, tslib_1.__assign({ wrap: 'wrap' }, { children: children })) }) })));
};
exports.ProductsMenu = ProductsMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMtbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NzcHItcHJvZHVjdHMtbWVudS9wcm9kdWN0cy1tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLG9EQUFrRDtBQUNsRCxnRkFBdUM7QUFDdkMsNkVBQThDO0FBQzlDLDBEQUF5RDtBQUN6RCxzRkFBdUQ7QUFNdkQsSUFBTSxtQkFBbUIsR0FBRywyQkFBTSxDQUFDLEVBQUUsQ0FFbEMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxHQUFHO0tBQ2IsQ0FBQztBQUhnQixDQUdoQixDQUFDLENBQUM7QUFFRyxJQUFNLFlBQVksR0FBRyxVQUFDLEVBR1U7UUFGckMsY0FBYyxFQUFkLE1BQU0sbUJBQUcsS0FBSyxLQUFBLEVBQ2QsUUFBUSxjQUFBO0lBR1IsSUFBTSxnQkFBZ0IsR0FBRyxJQUFBLDJCQUFhLEVBQUMsQ0FBQyxxQkFBVSxFQUFFLHFCQUFVLEVBQUUsa0JBQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTlFLE9BQU8sQ0FDTCx1QkFBQyxvQkFBUSxxQkFBQyxNQUFNLEVBQUUsTUFBTSxnQkFDdEIsdUJBQUMsbUJBQW1CLGNBQ2xCLHVCQUFDLGdCQUFnQixxQkFBQyxJQUFJLEVBQUUsTUFBTSxnQkFBRyxRQUFRLElBQW9CLEdBQ3pDLElBQ2IsQ0FDWixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBZFcsUUFBQSxZQUFZLGdCQWN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmFzZU1lbnUgfSBmcm9tIFwiLi4vYmFzZS1tZW51L2Jhc2UtbWVudVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGbGV4Um93IGZyb20gXCIuLi8uLi9mbGV4LXJvdy9mbGV4LXJvd1wiO1xuaW1wb3J0IHt1c2VNYXRjaE1lZGlhfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbWF0Y2gtbWVkaWFcIjtcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gXCIuLi8uLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RzTWVudVByb3BzIHtcbiAgb3BlbmVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgUHJvZHVjdHNNZW51V3JhcHBlciA9IHN0eWxlZC51bDx7XG4gIGNvbnRhaW5lclBhZGRpbmc/OiBzdHJpbmc7XG59PigoeyB0aGVtZSB9KSA9PiAoe1xuICBtYXhXaWR0aDogXCI1MDBweFwiLFxuICBwYWRkaW5nOiAnMCdcbn0pKTtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RzTWVudSA9ICh7XG4gIG9wZW5lZCA9IGZhbHNlLFxuICBjaGlsZHJlbixcbn06IFByb3BzV2l0aENoaWxkcmVuPFByb2R1Y3RzTWVudVByb3BzPikgPT4ge1xuXG4gIGNvbnN0IFByb2R1Y3RDb250YWluZXIgPSB1c2VNYXRjaE1lZGlhKFtGbGV4Q29sdW1uLCBGbGV4Q29sdW1uLCBGbGV4Um93XSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJhc2VNZW51IG9wZW5lZD17b3BlbmVkfT5cbiAgICAgIDxQcm9kdWN0c01lbnVXcmFwcGVyPlxuICAgICAgICA8UHJvZHVjdENvbnRhaW5lciB3cmFwPXsnd3JhcCd9PntjaGlsZHJlbn08L1Byb2R1Y3RDb250YWluZXI+XG4gICAgICA8L1Byb2R1Y3RzTWVudVdyYXBwZXI+XG4gICAgPC9CYXNlTWVudT5cbiAgKTtcbn07XG4iXX0=