"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardTile = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledWizardTile = styled_components_1.default.div(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        position: 'relative',
        background: theme.styleguideColors.backgroundPrimary,
        boxShadow: '0px 2px 4px rgba(143, 144, 152, 0.15)',
        borderRadius: theme.borderRadius.base,
        marginBottom: 24,
        height: '100%',
        padding: ['80px 20px', '80px 150px', '80px 200px', '80px 300px'],
    });
});
function WizardTile(props) {
    return (0, jsx_runtime_1.jsx)(StyledWizardTile, tslib_1.__assign({}, props));
}
exports.WizardTile = WizardTile;
exports.default = WizardTile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXRpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvd2l6YXJkLXRpbGUvd2l6YXJkLXRpbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBTXZDLElBQU0sZ0JBQWdCLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQzFDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3BELFNBQVMsRUFBRSx1Q0FBdUM7UUFDbEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxZQUFZLEVBQUUsRUFBRTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztLQUNqRSxDQUFDO0FBUkYsQ0FRRSxDQUNILENBQUM7QUFFRixTQUFnQixVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyx1QkFBQyxnQkFBZ0IsdUJBQUssS0FBSyxFQUFJLENBQUM7QUFDekMsQ0FBQztBQUZELGdDQUVDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgV2l6YXJkVGlsZVByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHt9XG5cbmNvbnN0IFN0eWxlZFdpemFyZFRpbGUgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+XG4gIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5iYWNrZ3JvdW5kUHJpbWFyeSxcbiAgICBib3hTaGFkb3c6ICcwcHggMnB4IDRweCByZ2JhKDE0MywgMTQ0LCAxNTIsIDAuMTUpJyxcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxuICAgIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZzogWyc4MHB4IDIwcHgnLCAnODBweCAxNTBweCcsICc4MHB4IDIwMHB4JywgJzgwcHggMzAwcHgnXSxcbiAgfSlcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBXaXphcmRUaWxlKHByb3BzOiBXaXphcmRUaWxlUHJvcHMpIHtcbiAgcmV0dXJuIDxTdHlsZWRXaXphcmRUaWxlIHsuLi5wcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpemFyZFRpbGU7XG4iXX0=