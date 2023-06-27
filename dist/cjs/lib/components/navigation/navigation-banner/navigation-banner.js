"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var match_size_1 = require("../../../utils/match-size");
var match_media_1 = require("../../../utils/match-media");
var label_1 = tslib_1.__importDefault(require("../../label/label"));
var badge_1 = require("../../badge/badge");
var getTopBannerColors = function (theme, color) {
    return ({
        blue: theme.colorSpecialCase.blueBanner,
        red: theme.styleguideColors.fillPrimaryRed,
        lightBlue: theme.colorSpecialCase.blueBanner2,
    }[color]);
};
var StyledTopBanner = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? 2 : _b, color = _a.color;
    return ({
        background: getTopBannerColors(theme, color),
        padding: (0, match_size_1.matchSize)({
            1: 5,
            2: 14,
            3: 16,
        }, size),
        width: '100%',
    });
});
var BannerLink = styled_components_1.default.a(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        color: [theme.styleguideColors.contentOnFill],
        cursor: 'pointer',
        '&:hover': {
            color: [theme.styleguideColors.contentTertiary],
        },
        textDecoration: 'none',
    });
});
var NavigationBanner = function (_a) {
    var message = _a.message, link = _a.link;
    var bannerWithLink = ((0, jsx_runtime_1.jsx)(BannerLink, tslib_1.__assign({ target: '_blank', href: link }, { children: message })));
    var staticBanner = (0, jsx_runtime_1.jsx)(BannerLink, { children: message });
    var onAbove = ((0, jsx_runtime_1.jsx)(badge_1.Badge, { variation: 'blue', label: link ? bannerWithLink : staticBanner }));
    var onMobile = ((0, jsx_runtime_1.jsx)(StyledTopBanner, tslib_1.__assign({ size: 1, color: "lightBlue" }, { children: (0, jsx_runtime_1.jsx)(label_1.default, tslib_1.__assign({ size: 1, variation: "white" }, { children: link ? bannerWithLink : staticBanner })) })));
    var responsiveNavigationBanner = (0, match_media_1.useMatchMedia)([onMobile, onMobile, onAbove], []);
    return responsiveNavigationBanner;
};
exports.default = NavigationBanner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1iYW5uZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWJhbm5lci9uYXZpZ2F0aW9uLWJhbm5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLGdGQUF1QztBQUN2Qyx3REFBc0Q7QUFDdEQsMERBQTJEO0FBRTNELG9FQUFzQztBQUN0QywyQ0FBMEM7QUFhMUMsSUFBTSxrQkFBa0IsR0FBRyxVQUN6QixLQUFLLEVBQ0wsS0FBMEM7SUFFMUMsT0FBQSxDQUFDO1FBQ0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1FBQ3ZDLEdBQUcsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUMxQyxTQUFTLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7S0FDOUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUpULENBSVMsQ0FBQztBQUVaLElBQU0sZUFBZSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUNoQyxVQUFDLEVBQTBCO1FBQXhCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMvQixVQUFVLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUM1QyxPQUFPLEVBQUUsSUFBQSxzQkFBUyxFQUNoQjtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBRTtTQUNOLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDO0FBWDhCLENBVzlCLENBQ0gsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLDJCQUFNLENBQUMsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUNsQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQzdDLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7U0FDaEQ7UUFDRCxjQUFjLEVBQUUsTUFBTTtLQUN2QixDQUFDO0FBUEYsQ0FPRSxDQUNILENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFBd0M7UUFBdEMsT0FBTyxhQUFBLEVBQUUsSUFBSSxVQUFBO0lBQ3ZDLElBQU0sY0FBYyxHQUFHLENBQ3JCLHVCQUFDLFVBQVUscUJBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxnQkFDckMsT0FBTyxJQUNHLENBQ2QsQ0FBQztJQUVGLElBQU0sWUFBWSxHQUFHLHVCQUFDLFVBQVUsY0FBRSxPQUFPLEdBQWMsQ0FBQztJQUV4RCxJQUFNLE9BQU8sR0FBRyxDQUNkLHVCQUFDLGFBQUssSUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFJLENBQzFFLENBQUM7SUFFRixJQUFNLFFBQVEsR0FBRyxDQUNmLHVCQUFDLGVBQWUscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsV0FBVyxnQkFDekMsdUJBQUMsZUFBSyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxPQUFPLGdCQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUMvQixJQUNRLENBQ25CLENBQUM7SUFFRixJQUFNLDBCQUEwQixHQUFHLElBQUEsMkJBQWEsRUFDOUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUM3QixFQUFFLENBQ0gsQ0FBQztJQUVGLE9BQU8sMEJBQTBCLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbWF0Y2hTaXplIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbWF0Y2gtc2l6ZSc7XHJcbmltcG9ydCB7IHVzZU1hdGNoTWVkaWEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tYXRjaC1tZWRpYSc7XHJcbmltcG9ydCB7IFRleHRQcm9wcyB9IGZyb20gJy4uLy4uL3RleHQvdGV4dCc7XHJcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9sYWJlbC9sYWJlbCc7XHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnLi4vLi4vYmFkZ2UvYmFkZ2UnO1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkJhbm5lclByb3BzIHtcclxuICBtZXNzYWdlOiBzdHJpbmcgfCBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgbGluaz86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0aW9uQmFubmVyU3R5bGVQcm9wcyBleHRlbmRzIFRleHRQcm9wcyB7XHJcbiAgc2l6ZTogMSB8IDIgfCAzO1xyXG4gIGNvbG9yOiAncmVkJyB8ICdibHVlJyB8ICdsaWdodEJsdWUnO1xyXG59XHJcblxyXG5jb25zdCBnZXRUb3BCYW5uZXJDb2xvcnMgPSAoXHJcbiAgdGhlbWUsXHJcbiAgY29sb3I6IE5hdmlnYXRpb25CYW5uZXJTdHlsZVByb3BzWydjb2xvciddXHJcbikgPT5cclxuICAoe1xyXG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyLFxyXG4gICAgcmVkOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmZpbGxQcmltYXJ5UmVkLFxyXG4gICAgbGlnaHRCbHVlOiB0aGVtZS5jb2xvclNwZWNpYWxDYXNlLmJsdWVCYW5uZXIyLFxyXG4gIH1bY29sb3JdKTtcclxuXHJcbmNvbnN0IFN0eWxlZFRvcEJhbm5lciA9IHN0eWxlZC5kaXY8TmF2aWdhdGlvbkJhbm5lclN0eWxlUHJvcHM+KFxyXG4gICh7IHRoZW1lLCBzaXplID0gMiwgY29sb3IgfSkgPT4gKHtcclxuICAgIGJhY2tncm91bmQ6IGdldFRvcEJhbm5lckNvbG9ycyh0aGVtZSwgY29sb3IpLFxyXG4gICAgcGFkZGluZzogbWF0Y2hTaXplKFxyXG4gICAgICB7XHJcbiAgICAgICAgMTogNSxcclxuICAgICAgICAyOiAxNCxcclxuICAgICAgICAzOiAxNixcclxuICAgICAgfSxcclxuICAgICAgc2l6ZVxyXG4gICAgKSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IEJhbm5lckxpbmsgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PlxyXG4gIHRoZW1lLndpdGhNZWRpYSh7XHJcbiAgICBjb2xvcjogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudE9uRmlsbF0sXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogW3RoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5XSxcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uQmFubmVyID0gKHsgbWVzc2FnZSwgbGluayB9OiBOYXZpZ2F0aW9uQmFubmVyUHJvcHMpID0+IHtcclxuICBjb25zdCBiYW5uZXJXaXRoTGluayA9IChcclxuICAgIDxCYW5uZXJMaW5rIHRhcmdldD17J19ibGFuayd9IGhyZWY9e2xpbmt9PlxyXG4gICAgICB7bWVzc2FnZX1cclxuICAgIDwvQmFubmVyTGluaz5cclxuICApO1xyXG5cclxuICBjb25zdCBzdGF0aWNCYW5uZXIgPSA8QmFubmVyTGluaz57bWVzc2FnZX08L0Jhbm5lckxpbms+O1xyXG5cclxuICBjb25zdCBvbkFib3ZlID0gKFxyXG4gICAgPEJhZGdlIHZhcmlhdGlvbj17J2JsdWUnfSBsYWJlbD17bGluayA/IGJhbm5lcldpdGhMaW5rIDogc3RhdGljQmFubmVyfSAvPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uTW9iaWxlID0gKFxyXG4gICAgPFN0eWxlZFRvcEJhbm5lciBzaXplPXsxfSBjb2xvcj1cImxpZ2h0Qmx1ZVwiPlxyXG4gICAgICA8TGFiZWwgc2l6ZT17MX0gdmFyaWF0aW9uPVwid2hpdGVcIj5cclxuICAgICAgICB7bGluayA/IGJhbm5lcldpdGhMaW5rIDogc3RhdGljQmFubmVyfVxyXG4gICAgICA8L0xhYmVsPlxyXG4gICAgPC9TdHlsZWRUb3BCYW5uZXI+XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2l2ZU5hdmlnYXRpb25CYW5uZXIgPSB1c2VNYXRjaE1lZGlhKFxyXG4gICAgW29uTW9iaWxlLCBvbk1vYmlsZSwgb25BYm92ZV0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiByZXNwb25zaXZlTmF2aWdhdGlvbkJhbm5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYW5uZXI7XHJcbiJdfQ==