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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9hL2EudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBT3ZDLElBQU0sT0FBTyxHQUFHLDJCQUFNLENBQUMsQ0FBQyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQyxFQUFFLENBQUM7QUFBSixDQUFJLENBQUMsQ0FBQztBQUU5QyxTQUFnQixDQUFDLENBQUMsS0FBYTtJQUM3QixPQUFPLENBQ0wsdUJBQUMsT0FBTyx1QkFDRixLQUFLLElBQ1QsT0FBTyxFQUFFLFVBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQyxJQUNELENBQ0gsQ0FBQztBQUNKLENBQUM7QUFaRCxjQVlDO0FBRUQsa0JBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBBUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge31cclxuXHJcbmNvbnN0IFN0eWxlZEEgPSBzdHlsZWQuYSgoeyB0aGVtZSB9KSA9PiAoe30pKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBKHByb3BzOiBBUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEFcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBvbkNsaWNrPXsoZXYpID0+IHtcclxuICAgICAgICBpZiAoIShldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkgfHwgZXYuc2hpZnRLZXkpKSB7XHJcbiAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgcHJvcHMub25DbGljayAmJiBwcm9wcy5vbkNsaWNrKGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEE7XHJcbiJdfQ==