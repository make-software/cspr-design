"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var use_click_away_1 = require("../../../../hooks/use-click-away");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../../../flex-row/flex-row"));
var Container = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return (tslib_1.__assign({ borderRadius: theme.borderRadius.base }, (!isOpen && {
        display: "none",
    })));
});
// const ItemsContainer = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
//   display: isOpen ? "inherit" : "none",
//   marginTop: 4,
//   borderRadius: theme.borderRadius.base,
//   background: theme.styleguideColors.fillSecondary,
// }));
var BaseMenuWrapper = styled_components_1.default.ul(function (_a) {
    var theme = _a.theme, containerPadding = _a.containerPadding;
    return ({
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        height: "auto",
        padding: "16px 0",
        background: theme.styleguideColors.backgroundPrimary,
        filter: theme.boxShadow.dropdown,
        borderTop: "5px solid ".concat(theme.styleguideColors.fillPrimaryRed),
        borderRadius: theme.borderRadius.base,
    });
});
var BaseMenu = function (_a) {
    var _b = _a.opened, opened = _b === void 0 ? false : _b, onClose = _a.onClose, children = _a.children;
    var _c = (0, react_1.useState)(opened), isOpen = _c[0], setIsOpen = _c[1];
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            setIsOpen(false);
            onClose && onClose();
        },
    }).ref;
    (0, react_1.useEffect)(function () {
        setIsOpen(opened);
    }, [opened]);
    return ((0, jsx_runtime_1.jsx)(Container, tslib_1.__assign({ isOpen: isOpen, ref: ref }, { children: (0, jsx_runtime_1.jsx)(BaseMenuWrapper, { children: children }) })));
};
var Menu = function (_a) {
    var children = _a.children, rest = tslib_1.__rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(BaseMenu, tslib_1.__assign({}, rest, { children: children }));
};
exports.Menu = Menu;
exports.default = exports.Menu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2Ryb3Bkb3duLW1lbnUvbWVudS9tZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtCQUFzRTtBQUN0RSxtRUFBZ0U7QUFDaEUsZ0ZBQXVDO0FBQ3ZDLGdGQUFpRDtBQUVqRCxJQUFNLFNBQVMsR0FBRyxJQUFBLDJCQUFNLEVBQUMsa0JBQU8sQ0FBQyxDQUFzQixVQUFDLEVBQWlCO1FBQWYsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFBO0lBQU8sT0FBQSxvQkFDNUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQVdsQyxDQUFDLENBQUMsTUFBTSxJQUFJO1FBQ2IsT0FBTyxFQUFFLE1BQU07S0FDaEIsQ0FBQyxFQUNGO0FBZjRFLENBZTVFLENBQUMsQ0FBQztBQUVKLG1GQUFtRjtBQUNuRiwwQ0FBMEM7QUFDMUMsa0JBQWtCO0FBQ2xCLDJDQUEyQztBQUMzQyxzREFBc0Q7QUFDdEQsT0FBTztBQUVQLElBQU0sZUFBZSxHQUFHLDJCQUFNLENBQUMsRUFBRSxDQUU5QixVQUFDLEVBQTJCO1FBQXpCLEtBQUssV0FBQSxFQUFFLGdCQUFnQixzQkFBQTtJQUFPLE9BQUEsQ0FBQztRQUNuQyxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLEtBQUssRUFBRSxhQUFhO1FBQ3BCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLFFBQVE7UUFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUI7UUFDcEQsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUTtRQUNoQyxTQUFTLEVBQUUsb0JBQWEsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBRTtRQUMvRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJO0tBQ3RDLENBQUM7QUFWa0MsQ0FVbEMsQ0FBQyxDQUFDO0FBT0osSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUlhO1FBSDdCLGNBQWMsRUFBZCxNQUFNLG1CQUFHLEtBQUssS0FBQSxFQUNkLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQTtJQUVGLElBQUEsS0FBc0IsSUFBQSxnQkFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFyQyxNQUFNLFFBQUEsRUFBRSxTQUFTLFFBQW9CLENBQUM7SUFFckMsSUFBQSxHQUFHLEdBQUssSUFBQSw2QkFBWSxFQUFDO1FBQzNCLFFBQVEsRUFBRTtZQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUNGLENBQUMsSUFMUyxDQUtSO0lBRUgsSUFBQSxpQkFBUyxFQUFDO1FBQ1IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFYixPQUFPLENBQ0wsdUJBQUMsU0FBUyxxQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLGdCQUNqQyx1QkFBQyxlQUFlLGNBQUUsUUFBUSxHQUFtQixJQUNuQyxDQUNiLENBQUM7QUFDSixDQUFDLENBQUM7QUFFSyxJQUFNLElBQUksR0FBRyxVQUFDLEVBQW1EO0lBQWpELElBQUEsUUFBUSxjQUFBLEVBQUssSUFBSSxzQkFBbkIsWUFBcUIsQ0FBRjtJQUN0QyxPQUFPLHVCQUFDLFFBQVEsdUJBQUssSUFBSSxjQUFHLFFBQVEsSUFBWSxDQUFDO0FBQ25ELENBQUMsQ0FBQztBQUZXLFFBQUEsSUFBSSxRQUVmO0FBRUYsa0JBQWUsWUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXlcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgRmxleFJvdyBmcm9tIFwiLi4vLi4vLi4vZmxleC1yb3cvZmxleC1yb3dcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEZsZXhSb3cpPHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbiAgLy8gYm9yZGVyOiBcIm5vbmVcIixcbiAgLy8gaGVpZ2h0OiAzNixcbiAgLy8gcGFkZGluZzogXCIwIDE2cHhcIixcbiAgLy8gYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAvLyBcIjpob3ZlciwgOmFjdGl2ZVwiOiB7XG4gIC8vICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAvLyAgIHN2Zzoge1xuICAvLyAgICAgY29sb3I6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWQsXG4gIC8vICAgfSxcbiAgLy8gfSxcbiAgLi4uKCFpc09wZW4gJiYge1xuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICB9KSxcbn0pKTtcblxuLy8gY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgaXNPcGVuOiBib29sZWFuIH0+KCh7IHRoZW1lLCBpc09wZW4gfSkgPT4gKHtcbi8vICAgZGlzcGxheTogaXNPcGVuID8gXCJpbmhlcml0XCIgOiBcIm5vbmVcIixcbi8vICAgbWFyZ2luVG9wOiA0LFxuLy8gICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuLy8gICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxTZWNvbmRhcnksXG4vLyB9KSk7XG5cbmNvbnN0IEJhc2VNZW51V3JhcHBlciA9IHN0eWxlZC51bDx7XG4gIGNvbnRhaW5lclBhZGRpbmc/OiBzdHJpbmc7XG59PigoeyB0aGVtZSwgY29udGFpbmVyUGFkZGluZyB9KSA9PiAoe1xuICBkaXNwbGF5OiBcImZsZXhcIixcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgaGVpZ2h0OiBcImF1dG9cIixcbiAgcGFkZGluZzogXCIxNnB4IDBcIixcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgZmlsdGVyOiB0aGVtZS5ib3hTaGFkb3cuZHJvcGRvd24sXG4gIGJvcmRlclRvcDogYDVweCBzb2xpZCAke3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuZmlsbFByaW1hcnlSZWR9YCxcbiAgYm9yZGVyUmFkaXVzOiB0aGVtZS5ib3JkZXJSYWRpdXMuYmFzZSxcbn0pKTtcblxuZXhwb3J0IGludGVyZmFjZSBNZW51UHJvcHMge1xuICBvcGVuZWQ/OiBib29sZWFuO1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQmFzZU1lbnUgPSAoe1xuICBvcGVuZWQgPSBmYWxzZSxcbiAgb25DbG9zZSxcbiAgY2hpbGRyZW4sXG59OiBQcm9wc1dpdGhDaGlsZHJlbjxNZW51UHJvcHM+KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShvcGVuZWQpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgb25DbG9zZSAmJiBvbkNsb3NlKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc09wZW4ob3BlbmVkKTtcbiAgfSwgW29wZW5lZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBpc09wZW49e2lzT3Blbn0gcmVmPXtyZWZ9PlxuICAgICAgPEJhc2VNZW51V3JhcHBlcj57Y2hpbGRyZW59PC9CYXNlTWVudVdyYXBwZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgTWVudSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH06IFByb3BzV2l0aENoaWxkcmVuPE1lbnVQcm9wcz4pID0+IHtcbiAgcmV0dXJuIDxCYXNlTWVudSB7Li4ucmVzdH0+e2NoaWxkcmVufTwvQmFzZU1lbnU+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdfQ==