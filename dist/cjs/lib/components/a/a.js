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
/**
 *
 * @deprecated by Piotr. DO NOT USE!
 */
function A(props) {
    console.log('do not use');
    return ((0, jsx_runtime_1.jsx)(StyledA, tslib_1.__assign({}, props, { onClick: function (ev) {
            if (!(ev.ctrlKey || ev.metaKey || ev.shiftKey)) {
                ev.preventDefault();
                props.onClick && props.onClick(ev);
            }
        } })));
}
exports.A = A;
exports.default = A;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9hL2EudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsZ0ZBQXVDO0FBS3ZDLElBQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQyxFQUFFLENBQUM7QUFBSixDQUFJLENBQUMsQ0FBQztBQUU5Qzs7O0dBR0c7QUFDSCxTQUFnQixDQUFDLENBQUMsS0FBYTtJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzNCLE9BQU8sQ0FDTCx1QkFBQyxPQUFPLHVCQUNGLEtBQUssSUFDVCxPQUFPLEVBQUUsVUFBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDLElBQ0QsQ0FDSCxDQUFDO0FBQ0osQ0FBQztBQWJELGNBYUM7QUFFRCxrQkFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBpbnRlcmZhY2UgQVByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHt9XG5cbmNvbnN0IFN0eWxlZEEgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe30pKTtcblxuLyoqXG4gKlxuICogQGRlcHJlY2F0ZWQgYnkgUGlvdHIuIERPIE5PVCBVU0UhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBKHByb3BzOiBBUHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZygnZG8gbm90IHVzZScpXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEFcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIG9uQ2xpY2s9eyhldikgPT4ge1xuICAgICAgICBpZiAoIShldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkgfHwgZXYuc2hpZnRLZXkpKSB7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcm9wcy5vbkNsaWNrICYmIHByb3BzLm9uQ2xpY2soZXYpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEE7XG4iXX0=