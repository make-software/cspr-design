"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHead = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTableHead = styled_components_1.default.thead(function (_a) {
    var theme = _a.theme;
    return ({
        background: theme.styleguideColors.fillSecondary,
        height: 40,
    });
});
function TableHead(props) {
    return (0, jsx_runtime_1.jsx)(StyledTableHead, tslib_1.__assign({}, props));
}
exports.TableHead = TableHead;
exports.default = TableHead;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS1oZWFkL3RhYmxlLWhlYWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZ0ZBQXVDO0FBS3ZDLElBQU0sZUFBZSxHQUFHLDJCQUFNLENBQUMsS0FBSyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUNuRCxVQUFVLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGFBQWE7UUFDaEQsTUFBTSxFQUFFLEVBQUU7S0FDWCxDQUFDO0FBSGtELENBR2xELENBQUMsQ0FBQztBQUVKLFNBQWdCLFNBQVMsQ0FBQyxLQUFxQjtJQUM3QyxPQUFPLHVCQUFDLGVBQWUsdUJBQUssS0FBSyxFQUFJLENBQUM7QUFDeEMsQ0FBQztBQUZELDhCQUVDO0FBRUQsa0JBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBUYWJsZUhlYWRQcm9wcyB7fVxuXG5jb25zdCBTdHlsZWRUYWJsZUhlYWQgPSBzdHlsZWQudGhlYWQoKHsgdGhlbWUgfSkgPT4gKHtcbiAgYmFja2dyb3VuZDogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICBoZWlnaHQ6IDQwLFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gVGFibGVIZWFkKHByb3BzOiBUYWJsZUhlYWRQcm9wcykge1xuICByZXR1cm4gPFN0eWxlZFRhYmxlSGVhZCB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUhlYWQ7XG4iXX0=