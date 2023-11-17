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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXRpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvd2l6YXJkLXRpbGUvd2l6YXJkLXRpbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBTXZDLElBQU0sZ0JBQWdCLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQzFDLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFVBQVUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3BELFNBQVMsRUFBRSx1Q0FBdUM7UUFDbEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSTtRQUNyQyxZQUFZLEVBQUUsRUFBRTtRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztLQUNqRSxDQUFDO0FBUkYsQ0FRRSxDQUNILENBQUM7QUFFRixTQUFnQixVQUFVLENBQUMsS0FBc0I7SUFDL0MsT0FBTyx1QkFBQyxnQkFBZ0IsdUJBQUssS0FBSyxFQUFJLENBQUM7QUFDekMsQ0FBQztBQUZELGdDQUVDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFdpemFyZFRpbGVQcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7fVxyXG5cclxuY29uc3QgU3R5bGVkV2l6YXJkVGlsZSA9IHN0eWxlZC5kaXYoKHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS53aXRoTWVkaWEoe1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmJhY2tncm91bmRQcmltYXJ5LFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDJweCA0cHggcmdiYSgxNDMsIDE0NCwgMTUyLCAwLjE1KScsXHJcbiAgICBib3JkZXJSYWRpdXM6IHRoZW1lLmJvcmRlclJhZGl1cy5iYXNlLFxyXG4gICAgbWFyZ2luQm90dG9tOiAyNCxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogWyc4MHB4IDIwcHgnLCAnODBweCAxNTBweCcsICc4MHB4IDIwMHB4JywgJzgwcHggMzAwcHgnXSxcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFdpemFyZFRpbGUocHJvcHM6IFdpemFyZFRpbGVQcm9wcykge1xyXG4gIHJldHVybiA8U3R5bGVkV2l6YXJkVGlsZSB7Li4ucHJvcHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXphcmRUaWxlO1xyXG4iXX0=