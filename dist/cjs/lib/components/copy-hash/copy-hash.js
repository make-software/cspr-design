"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyHash = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var flex_row_1 = tslib_1.__importDefault(require("../flex-row/flex-row"));
var body_text_1 = tslib_1.__importDefault(require("../body-text/body-text"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var svg_icon_1 = tslib_1.__importDefault(require("../svg-icon/svg-icon"));
var copy_to_clipboard_1 = tslib_1.__importDefault(require("copy-to-clipboard"));
var SuccessIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentGreen,
    });
});
var StyledSvgIcon = (0, styled_components_1.default)(svg_icon_1.default)(function (_a) {
    var theme = _a.theme;
    return theme.withMedia({
        color: [
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentTertiary,
            theme.styleguideColors.contentBlue,
        ],
        path: {
            fill: [
                theme.styleguideColors.contentTertiary,
                theme.styleguideColors.contentTertiary,
                theme.styleguideColors.contentBlue,
            ],
        },
    });
});
var CopyHash = function (_a) {
    var value = _a.value, _b = _a.label, label = _b === void 0 ? 'Copy Public Key' : _b, _c = _a.copiedLabel, copiedLabel = _c === void 0 ? 'Copied!' : _c, _d = _a.minified, minified = _d === void 0 ? false : _d;
    var _e = (0, react_1.useState)(false), isCopiedHash = _e[0], setIsCopiedHash = _e[1];
    return ((0, jsx_runtime_1.jsx)(flex_row_1.default, tslib_1.__assign({ align: "center", onClick: function () {
            (0, copy_to_clipboard_1.default)(value);
            setIsCopiedHash(true);
            setTimeout(function () { return setIsCopiedHash(false); }, 3000);
        } }, { children: isCopiedHash ? ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(SuccessIcon, { src: './assets/icons/ic-success.svg', marginRight: true }), !minified && ((0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2, variation: "green" }, { children: copiedLabel })))] }))) : ((0, jsx_runtime_1.jsxs)(flex_row_1.default, tslib_1.__assign({ align: 'center' }, { children: [(0, jsx_runtime_1.jsx)(StyledSvgIcon, { src: "./assets/icons/ic-copy.svg", marginRight: true }), !minified && (0, jsx_runtime_1.jsx)(body_text_1.default, tslib_1.__assign({ size: 2 }, { children: label }))] }))) })));
};
exports.CopyHash = CopyHash;
exports.default = exports.CopyHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1oYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvcHktaGFzaC9jb3B5LWhhc2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLDBFQUEyQztBQUMzQyw2RUFBOEM7QUFDOUMsZ0ZBQXVDO0FBQ3ZDLDBFQUEyQztBQUMzQyxnRkFBcUM7QUFFckMsSUFBTSxXQUFXLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFBTyxPQUFBLENBQUM7UUFDbEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZO0tBQzNDLENBQUM7QUFGaUQsQ0FFakQsQ0FBQyxDQUFDO0FBRUosSUFBTSxhQUFhLEdBQUcsSUFBQSwyQkFBTSxFQUFDLGtCQUFPLENBQUMsQ0FBQyxVQUFDLEVBQVM7UUFBUCxLQUFLLFdBQUE7SUFDNUMsT0FBQSxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsS0FBSyxFQUFFO1lBQ0wsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7WUFDdEMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFdBQVc7U0FDbkM7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7Z0JBQ3RDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlO2dCQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVzthQUNuQztTQUNGO0tBQ0YsQ0FBQztBQWJGLENBYUUsQ0FDSCxDQUFDO0FBU0ssSUFBTSxRQUFRLEdBQUcsVUFBQyxFQUtUO1FBSmQsS0FBSyxXQUFBLEVBQ0wsYUFBeUIsRUFBekIsS0FBSyxtQkFBRyxpQkFBaUIsS0FBQSxFQUN6QixtQkFBdUIsRUFBdkIsV0FBVyxtQkFBRyxTQUFTLEtBQUEsRUFDdkIsZ0JBQWdCLEVBQWhCLFFBQVEsbUJBQUcsS0FBSyxLQUFBO0lBRVYsSUFBQSxLQUFrQyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLEVBQWhELFlBQVksUUFBQSxFQUFFLGVBQWUsUUFBbUIsQ0FBQztJQUN4RCxPQUFPLENBQ0wsdUJBQUMsa0JBQU8scUJBQ04sS0FBSyxFQUFDLFFBQVEsRUFDZCxPQUFPLEVBQUU7WUFDUCxJQUFBLDJCQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDWixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsQ0FBQyxnQkFFQSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQ2Qsd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLFdBQVcsSUFBQyxHQUFHLEVBQUUsK0JBQStCLEVBQUUsV0FBVyxTQUFHLEVBQ2hFLENBQUMsUUFBUSxJQUFJLENBQ1osdUJBQUMsbUJBQVEscUJBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUMsT0FBTyxnQkFDakMsV0FBVyxJQUNILENBQ1osS0FDTyxDQUNYLENBQUMsQ0FBQyxDQUFDLENBQ0Ysd0JBQUMsa0JBQU8scUJBQUMsS0FBSyxFQUFFLFFBQVEsaUJBQ3RCLHVCQUFDLGFBQWEsSUFBQyxHQUFHLEVBQUMsNEJBQTRCLEVBQUMsV0FBVyxTQUFHLEVBQzdELENBQUMsUUFBUSxJQUFJLHVCQUFDLG1CQUFRLHFCQUFDLElBQUksRUFBRSxDQUFDLGdCQUFHLEtBQUssSUFBWSxLQUMzQyxDQUNYLElBQ08sQ0FDWCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBakNXLFFBQUEsUUFBUSxZQWlDbkI7QUFFRixrQkFBZSxnQkFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XG5cbmNvbnN0IFN1Y2Nlc3NJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRHcmVlbixcbn0pKTtcblxuY29uc3QgU3R5bGVkU3ZnSWNvbiA9IHN0eWxlZChTdmdJY29uKSgoeyB0aGVtZSB9KSA9PlxuICB0aGVtZS53aXRoTWVkaWEoe1xuICAgIGNvbG9yOiBbXG4gICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50Qmx1ZSxcbiAgICBdLFxuICAgIHBhdGg6IHtcbiAgICAgIGZpbGw6IFtcbiAgICAgICAgdGhlbWUuc3R5bGVndWlkZUNvbG9ycy5jb250ZW50VGVydGlhcnksXG4gICAgICAgIHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICAgICAgICB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRCbHVlLFxuICAgICAgXSxcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGludGVyZmFjZSBDb3B5SGFzaFByb3BzIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGNvcGllZExhYmVsPzogc3RyaW5nO1xuICBtaW5pZmllZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBDb3B5SGFzaCA9ICh7XG4gIHZhbHVlLFxuICBsYWJlbCA9ICdDb3B5IFB1YmxpYyBLZXknLFxuICBjb3BpZWRMYWJlbCA9ICdDb3BpZWQhJyxcbiAgbWluaWZpZWQgPSBmYWxzZSxcbn06IENvcHlIYXNoUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ29waWVkSGFzaCwgc2V0SXNDb3BpZWRIYXNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8RmxleFJvd1xuICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb3B5KHZhbHVlKTtcbiAgICAgICAgc2V0SXNDb3BpZWRIYXNoKHRydWUpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkSGFzaChmYWxzZSksIDMwMDApO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7aXNDb3BpZWRIYXNoID8gKFxuICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxTdWNjZXNzSWNvbiBzcmM9eycuL2Fzc2V0cy9pY29ucy9pYy1zdWNjZXNzLnN2Zyd9IG1hcmdpblJpZ2h0IC8+XG4gICAgICAgICAgeyFtaW5pZmllZCAmJiAoXG4gICAgICAgICAgICA8Qm9keVRleHQgc2l6ZT17Mn0gdmFyaWF0aW9uPVwiZ3JlZW5cIj5cbiAgICAgICAgICAgICAge2NvcGllZExhYmVsfVxuICAgICAgICAgICAgPC9Cb2R5VGV4dD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgICApIDogKFxuICAgICAgICA8RmxleFJvdyBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgIDxTdHlsZWRTdmdJY29uIHNyYz1cIi4vYXNzZXRzL2ljb25zL2ljLWNvcHkuc3ZnXCIgbWFyZ2luUmlnaHQgLz5cbiAgICAgICAgICB7IW1pbmlmaWVkICYmIDxCb2R5VGV4dCBzaXplPXsyfT57bGFiZWx9PC9Cb2R5VGV4dD59XG4gICAgICAgIDwvRmxleFJvdz5cbiAgICAgICl9XG4gICAgPC9GbGV4Um93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29weUhhc2g7XG4iXX0=