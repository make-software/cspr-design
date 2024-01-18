"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningMessage = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var StyledWarningMessage = styled_components_1.default.div(function (_a) {
    var theme = _a.theme, margin = _a.margin;
    return theme.withMedia({
        padding: ['10px', '16px', '16px'],
        alignItems: 'center',
        gap: '8px',
        alignSelf: 'stretch',
        backgroundColor: theme.styleguideColors.fillSecondary,
        borderRadius: '4px',
        margin: margin ? margin : '0 0 24px 0',
    });
});
var StyledHeaderRow = (0, styled_components_1.default)(flex_row_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        marginBottom: '8px',
    });
});
var StyledHeaderText = (0, styled_components_1.default)(body_text_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        marginLeft: '8px',
        lineHeight: ['18px', '1.5rem', '1.5rem'],
    });
});
var WarningMessage = function (_a) {
    var iconSrc = _a.iconSrc, title = _a.title, message = _a.message, margin = _a.margin;
    return ((0, jsx_runtime_1.jsxs)(StyledWarningMessage, tslib_1.__assign({ margin: margin }, { children: [(0, jsx_runtime_1.jsxs)(StyledHeaderRow, tslib_1.__assign({ justify: 'flex-start', align: 'center' }, { children: [iconSrc && (0, jsx_runtime_1.jsx)(svg_icon_1.default, { src: iconSrc }), (0, jsx_runtime_1.jsx)(StyledHeaderText, tslib_1.__assign({ size: 1, scale: 'xs', variation: 'black', margin: iconSrc ? '8px' : '0' }, { children: title }))] })), (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 3, scale: 'xs', variation: 'black' }, { children: message }))] })));
};
exports.WarningMessage = WarningMessage;
exports.default = exports.WarningMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FybmluZy1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3dhcm5pbmctbWVzc2FnZS93YXJuaW5nLW1lc3NhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsMEVBQTJDO0FBUzNDLElBQU0sb0JBQW9CLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQ3JDLFVBQUMsRUFBaUI7UUFBZixLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQUE7SUFDZCxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDZCxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNqQyxVQUFVLEVBQUUsUUFBUTtRQUNwQixHQUFHLEVBQUUsS0FBSztRQUNWLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGVBQWUsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUNyRCxZQUFZLEVBQUUsS0FBSztRQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVk7S0FDdkMsQ0FBQztBQVJGLENBUUUsQ0FDTCxDQUFDO0FBRUYsSUFBTSxlQUFlLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDOUMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsWUFBWSxFQUFFLEtBQUs7S0FDcEIsQ0FBQztBQUZGLENBRUUsQ0FDSCxDQUFDO0FBRUYsSUFBTSxnQkFBZ0IsR0FBRyxJQUFBLDJCQUFNLEVBQUMsbUJBQVEsQ0FBQyxDQUFxQixVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDcEUsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsVUFBVSxFQUFFLEtBQUs7UUFDakIsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7S0FDekMsQ0FBQztBQUhGLENBR0UsQ0FDSCxDQUFDO0FBRUssSUFBTSxjQUFjLEdBQUcsVUFBQyxFQUtUO1FBSnBCLE9BQU8sYUFBQSxFQUNQLEtBQUssV0FBQSxFQUNMLE9BQU8sYUFBQSxFQUNQLE1BQU0sWUFBQTtJQUVOLE9BQU8sQ0FDTCx3QkFBQyxvQkFBb0IscUJBQUMsTUFBTSxFQUFFLE1BQU0saUJBQ2xDLHdCQUFDLGVBQWUscUJBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxpQkFDcEQsT0FBTyxJQUFJLHVCQUFDLGtCQUFPLElBQUMsR0FBRyxFQUFFLE9BQU8sR0FBSSxFQUNyQyx1QkFBQyxnQkFBZ0IscUJBQ2YsSUFBSSxFQUFFLENBQUMsRUFDUCxLQUFLLEVBQUUsSUFBSSxFQUNYLFNBQVMsRUFBRSxPQUFPLEVBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxnQkFFNUIsS0FBSyxJQUNXLEtBQ0gsRUFDbEIsdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLGdCQUMvQyxPQUFPLElBQ0MsS0FDVSxDQUN4QixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBeEJXLFFBQUEsY0FBYyxrQkF3QnpCO0FBRUYsa0JBQWUsc0JBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBCb2R5VGV4dCBmcm9tICcuLi9ib2R5LXRleHQvYm9keS10ZXh0JztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uL3N2Zy1pY29uL3N2Zy1pY29uJztcblxuZXhwb3J0IGludGVyZmFjZSBXYXJuaW5nTWVzc2FnZVByb3BzIHtcbiAgaWNvblNyYz86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBtYXJnaW4/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFN0eWxlZFdhcm5pbmdNZXNzYWdlID0gc3R5bGVkLmRpdjx7IG1hcmdpbj86IHN0cmluZyB9PihcbiAgKHsgdGhlbWUsIG1hcmdpbiB9KSA9PlxuICAgIHRoZW1lLndpdGhNZWRpYSh7XG4gICAgICBwYWRkaW5nOiBbJzEwcHgnLCAnMTZweCcsICcxNnB4J10sXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGdhcDogJzhweCcsXG4gICAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5maWxsU2Vjb25kYXJ5LFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgIG1hcmdpbjogbWFyZ2luID8gbWFyZ2luIDogJzAgMCAyNHB4IDAnLFxuICAgIH0pXG4pO1xuXG5jb25zdCBTdHlsZWRIZWFkZXJSb3cgPSBzdHlsZWQoRmxleFJvdykoKHsgdGhlbWUgfSkgPT5cbiAgdGhlbWUud2l0aE1lZGlhKHtcbiAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxuICB9KVxuKTtcblxuY29uc3QgU3R5bGVkSGVhZGVyVGV4dCA9IHN0eWxlZChCb2R5VGV4dCk8eyBtYXJnaW46IHN0cmluZyB9PigoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxuICAgIGxpbmVIZWlnaHQ6IFsnMThweCcsICcxLjVyZW0nLCAnMS41cmVtJ10sXG4gIH0pXG4pO1xuXG5leHBvcnQgY29uc3QgV2FybmluZ01lc3NhZ2UgPSAoe1xuICBpY29uU3JjLFxuICB0aXRsZSxcbiAgbWVzc2FnZSxcbiAgbWFyZ2luLFxufTogV2FybmluZ01lc3NhZ2VQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRXYXJuaW5nTWVzc2FnZSBtYXJnaW49e21hcmdpbn0+XG4gICAgICA8U3R5bGVkSGVhZGVyUm93IGp1c3RpZnk9eydmbGV4LXN0YXJ0J30gYWxpZ249eydjZW50ZXInfT5cbiAgICAgICAge2ljb25TcmMgJiYgPFN2Z0ljb24gc3JjPXtpY29uU3JjfSAvPn1cbiAgICAgICAgPFN0eWxlZEhlYWRlclRleHRcbiAgICAgICAgICBzaXplPXsxfVxuICAgICAgICAgIHNjYWxlPXsneHMnfVxuICAgICAgICAgIHZhcmlhdGlvbj17J2JsYWNrJ31cbiAgICAgICAgICBtYXJnaW49e2ljb25TcmMgPyAnOHB4JyA6ICcwJ31cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9TdHlsZWRIZWFkZXJUZXh0PlxuICAgICAgPC9TdHlsZWRIZWFkZXJSb3c+XG4gICAgICA8Qm9keVRleHQgc2l6ZT17M30gc2NhbGU9eyd4cyd9IHZhcmlhdGlvbj17J2JsYWNrJ30+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9Cb2R5VGV4dD5cbiAgICA8L1N0eWxlZFdhcm5pbmdNZXNzYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2FybmluZ01lc3NhZ2U7XG4iXX0=