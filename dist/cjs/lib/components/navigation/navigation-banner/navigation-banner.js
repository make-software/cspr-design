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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1iYW5uZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWJhbm5lci9uYXZpZ2F0aW9uLWJhbm5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLGdGQUF1QztBQUN2Qyx3REFBc0Q7QUFDdEQsMERBQTJEO0FBRTNELG9FQUFzQztBQUN0QywyQ0FBMEM7QUFhMUMsSUFBTSxrQkFBa0IsR0FBRyxVQUN6QixLQUFLLEVBQ0wsS0FBMEM7SUFFMUMsT0FBQSxDQUFDO1FBQ0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO1FBQ3ZDLEdBQUcsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsY0FBYztRQUMxQyxTQUFTLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7S0FDOUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUpULENBSVMsQ0FBQztBQUVaLElBQU0sZUFBZSxHQUFHLDJCQUFNLENBQUMsR0FBRyxDQUNoQyxVQUFDLEVBQTBCO1FBQXhCLEtBQUssV0FBQSxFQUFFLFlBQVEsRUFBUixJQUFJLG1CQUFHLENBQUMsS0FBQSxFQUFFLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMvQixVQUFVLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUM1QyxPQUFPLEVBQUUsSUFBQSxzQkFBUyxFQUNoQjtZQUNFLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBRTtTQUNOLEVBQ0QsSUFBSSxDQUNMO1FBQ0QsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDO0FBWDhCLENBVzlCLENBQ0gsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLDJCQUFNLENBQUMsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUNsQyxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQzdDLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFNBQVMsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7U0FDaEQ7UUFDRCxjQUFjLEVBQUUsTUFBTTtLQUN2QixDQUFDO0FBUEYsQ0FPRSxDQUNILENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLFVBQUMsRUFBd0M7UUFBdEMsT0FBTyxhQUFBLEVBQUUsSUFBSSxVQUFBO0lBQ3ZDLElBQU0sY0FBYyxHQUFHLENBQ3JCLHVCQUFDLFVBQVUscUJBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxnQkFDckMsT0FBTyxJQUNHLENBQ2QsQ0FBQztJQUVGLElBQU0sWUFBWSxHQUFHLHVCQUFDLFVBQVUsY0FBRSxPQUFPLEdBQWMsQ0FBQztJQUV4RCxJQUFNLE9BQU8sR0FBRyxDQUNkLHVCQUFDLGFBQUssSUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFJLENBQzFFLENBQUM7SUFFRixJQUFNLFFBQVEsR0FBRyxDQUNmLHVCQUFDLGVBQWUscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsV0FBVyxnQkFDekMsdUJBQUMsZUFBSyxxQkFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBQyxPQUFPLGdCQUM5QixJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxJQUMvQixJQUNRLENBQ25CLENBQUM7SUFFRixJQUFNLDBCQUEwQixHQUFHLElBQUEsMkJBQWEsRUFDOUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUM3QixFQUFFLENBQ0gsQ0FBQztJQUVGLE9BQU8sMEJBQTBCLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtYXRjaFNpemUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tYXRjaC1zaXplJztcbmltcG9ydCB7IHVzZU1hdGNoTWVkaWEgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tYXRjaC1tZWRpYSc7XG5pbXBvcnQgeyBUZXh0UHJvcHMgfSBmcm9tICcuLi8uLi90ZXh0L3RleHQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL2xhYmVsL2xhYmVsJztcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnLi4vLi4vYmFkZ2UvYmFkZ2UnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkJhbm5lclByb3BzIHtcbiAgbWVzc2FnZTogc3RyaW5nIHwgUmVhY3QuUmVhY3ROb2RlO1xuICBsaW5rPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25CYW5uZXJTdHlsZVByb3BzIGV4dGVuZHMgVGV4dFByb3BzIHtcbiAgc2l6ZTogMSB8IDIgfCAzO1xuICBjb2xvcjogJ3JlZCcgfCAnYmx1ZScgfCAnbGlnaHRCbHVlJztcbn1cblxuY29uc3QgZ2V0VG9wQmFubmVyQ29sb3JzID0gKFxuICB0aGVtZSxcbiAgY29sb3I6IE5hdmlnYXRpb25CYW5uZXJTdHlsZVByb3BzWydjb2xvciddXG4pID0+XG4gICh7XG4gICAgYmx1ZTogdGhlbWUuY29sb3JTcGVjaWFsQ2FzZS5ibHVlQmFubmVyLFxuICAgIHJlZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsUHJpbWFyeVJlZCxcbiAgICBsaWdodEJsdWU6IHRoZW1lLmNvbG9yU3BlY2lhbENhc2UuYmx1ZUJhbm5lcjIsXG4gIH1bY29sb3JdKTtcblxuY29uc3QgU3R5bGVkVG9wQmFubmVyID0gc3R5bGVkLmRpdjxOYXZpZ2F0aW9uQmFubmVyU3R5bGVQcm9wcz4oXG4gICh7IHRoZW1lLCBzaXplID0gMiwgY29sb3IgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kOiBnZXRUb3BCYW5uZXJDb2xvcnModGhlbWUsIGNvbG9yKSxcbiAgICBwYWRkaW5nOiBtYXRjaFNpemUoXG4gICAgICB7XG4gICAgICAgIDE6IDUsXG4gICAgICAgIDI6IDE0LFxuICAgICAgICAzOiAxNixcbiAgICAgIH0sXG4gICAgICBzaXplXG4gICAgKSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9KVxuKTtcblxuY29uc3QgQmFubmVyTGluayA9IHN0eWxlZC5hKCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgY29sb3I6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRPbkZpbGxdLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6IFt0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeV0sXG4gICAgfSxcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB9KVxuKTtcblxuY29uc3QgTmF2aWdhdGlvbkJhbm5lciA9ICh7IG1lc3NhZ2UsIGxpbmsgfTogTmF2aWdhdGlvbkJhbm5lclByb3BzKSA9PiB7XG4gIGNvbnN0IGJhbm5lcldpdGhMaW5rID0gKFxuICAgIDxCYW5uZXJMaW5rIHRhcmdldD17J19ibGFuayd9IGhyZWY9e2xpbmt9PlxuICAgICAge21lc3NhZ2V9XG4gICAgPC9CYW5uZXJMaW5rPlxuICApO1xuXG4gIGNvbnN0IHN0YXRpY0Jhbm5lciA9IDxCYW5uZXJMaW5rPnttZXNzYWdlfTwvQmFubmVyTGluaz47XG5cbiAgY29uc3Qgb25BYm92ZSA9IChcbiAgICA8QmFkZ2UgdmFyaWF0aW9uPXsnYmx1ZSd9IGxhYmVsPXtsaW5rID8gYmFubmVyV2l0aExpbmsgOiBzdGF0aWNCYW5uZXJ9IC8+XG4gICk7XG5cbiAgY29uc3Qgb25Nb2JpbGUgPSAoXG4gICAgPFN0eWxlZFRvcEJhbm5lciBzaXplPXsxfSBjb2xvcj1cImxpZ2h0Qmx1ZVwiPlxuICAgICAgPExhYmVsIHNpemU9ezF9IHZhcmlhdGlvbj1cIndoaXRlXCI+XG4gICAgICAgIHtsaW5rID8gYmFubmVyV2l0aExpbmsgOiBzdGF0aWNCYW5uZXJ9XG4gICAgICA8L0xhYmVsPlxuICAgIDwvU3R5bGVkVG9wQmFubmVyPlxuICApO1xuXG4gIGNvbnN0IHJlc3BvbnNpdmVOYXZpZ2F0aW9uQmFubmVyID0gdXNlTWF0Y2hNZWRpYShcbiAgICBbb25Nb2JpbGUsIG9uTW9iaWxlLCBvbkFib3ZlXSxcbiAgICBbXVxuICApO1xuXG4gIHJldHVybiByZXNwb25zaXZlTmF2aWdhdGlvbkJhbm5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25CYW5uZXI7XG4iXX0=