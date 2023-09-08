"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledA = styled_components_1.default.a(function (_a) {
    var theme = _a.theme;
    return ({});
});
function A(props) {
    return ((0, jsx_runtime_1.jsx)(StyledA, tslib_1.__assign({}, props, { onClick: function (ev) {
            if (!(ev.ctrlKey || ev.metaKey || ev.shiftKey)) {
                ev.preventDefault();
                props.onClick && props.onClick(ev);
            }
        } })));
}
exports.A = A;
exports.default = A;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9hL2EudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBT3ZDLElBQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQyxFQUFFLENBQUM7QUFBSixDQUFJLENBQUMsQ0FBQztBQUU5QyxTQUFnQixDQUFDLENBQUMsS0FBYTtJQUM3QixPQUFPLENBQ0wsdUJBQUMsT0FBTyx1QkFDRixLQUFLLElBQ1QsT0FBTyxFQUFFLFVBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxJQUNELENBQ0gsQ0FBQztBQUNKLENBQUM7QUFaRCxjQVlDO0FBRUQsa0JBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuZXhwb3J0IGludGVyZmFjZSBBUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge31cblxuY29uc3QgU3R5bGVkQSA9IHN0eWxlZC5hKCh7IHRoZW1lIH0pID0+ICh7fSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gQShwcm9wczogQVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEFcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIG9uQ2xpY2s9eyhldikgPT4ge1xuICAgICAgICBpZiAoIShldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkgfHwgZXYuc2hpZnRLZXkpKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcm9wcy5vbkNsaWNrICYmIHByb3BzLm9uQ2xpY2soZXYpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEE7XG4iXX0=