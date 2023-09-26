"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var flex_column_1 = tslib_1.__importDefault(require("../flex-column/flex-column"));
var use_click_away_1 = require("../../hooks/use-click-away");
var AccordionContainer = (0, styled_components_1.default)(flex_column_1.default)(function (_a) {
    var isOpen = _a.isOpen, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'transparent' : _b;
    return ({
        background: isOpen ? backgroundColor : 'transparent',
        width: '100%',
    });
});
var StyledContainer = styled_components_1.default.div(function () { return ({
    cursor: 'pointer',
}); });
function Accordion(_a) {
    var children = _a.children, renderContent = _a.renderContent, disableClickAway = _a.disableClickAway, props = tslib_1.__rest(_a, ["children", "renderContent", "disableClickAway"]);
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var ref = (0, use_click_away_1.useClickAway)({
        callback: function () {
            !disableClickAway && setIsOpen(false);
        },
    }).ref;
    var renderProps = { isOpen: isOpen };
    return ((0, jsx_runtime_1.jsxs)(AccordionContainer, tslib_1.__assign({ isOpen: isOpen }, props, { children: [(0, jsx_runtime_1.jsx)(StyledContainer, tslib_1.__assign({ ref: ref, onClick: function () {
                    setIsOpen(!isOpen);
                } }, { children: children(renderProps) })), isOpen && renderContent(renderProps)] })));
}
exports.Accordion = Accordion;
exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLGdGQUF1QztBQUV2QyxtRkFBb0Q7QUFDcEQsNkRBQTBEO0FBYTFELElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FHMUMsVUFBQyxFQUEyQztRQUF6QyxNQUFNLFlBQUEsRUFBRSx1QkFBK0IsRUFBL0IsZUFBZSxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDbkQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ3BELEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztBQUhrRCxDQUdsRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUN4QyxNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFDLEVBRnVDLENBRXZDLENBQUMsQ0FBQztBQUVKLFNBQWdCLFNBQVMsQ0FBQyxFQUtUO0lBSmYsSUFBQSxRQUFRLGNBQUEsRUFDUixhQUFhLG1CQUFBLEVBQ2IsZ0JBQWdCLHNCQUFBLEVBQ2IsS0FBSyxzQkFKZ0IsaURBS3pCLENBRFM7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsRUFBcEMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFtQixDQUFDO0lBRXBDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixDQUFDLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0YsQ0FBQyxJQUpTLENBSVI7SUFFSCxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBRTVDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBa0IscUJBQUMsTUFBTSxFQUFFLE1BQU0sSUFBTSxLQUFLLGVBQzNDLHVCQUFDLGVBQWUscUJBQ2QsR0FBRyxFQUFFLEdBQUcsRUFDUixPQUFPLEVBQUU7b0JBQ1AsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsZ0JBRUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUNOLEVBQ2pCLE1BQU0sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQ2xCLENBQ3RCLENBQUM7QUFDSixDQUFDO0FBN0JELDhCQTZCQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQmFzZVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY29yZGlvblByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBjaGlsZHJlbjogKHJlbmRlclByb3BzOiBSZW5kZXJQcm9wcykgPT4gUmVhY3QuUmVhY3ROb2RlIHwgc3RyaW5nO1xuICByZW5kZXJDb250ZW50OiAocmVuZGVyUHJvcHM6IFJlbmRlclByb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGUgfCBzdHJpbmc7XG4gIGRpc2FibGVDbGlja0F3YXk/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgUmVuZGVyUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG59XG5cbmNvbnN0IEFjY29yZGlvbkNvbnRhaW5lciA9IHN0eWxlZChGbGV4Q29sdW1uKTx7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xufT4oKHsgaXNPcGVuLCBiYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnIH0pID0+ICh7XG4gIGJhY2tncm91bmQ6IGlzT3BlbiA/IGJhY2tncm91bmRDb2xvciA6ICd0cmFuc3BhcmVudCcsXG4gIHdpZHRoOiAnMTAwJScsXG59KSk7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG59KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBY2NvcmRpb24oe1xuICBjaGlsZHJlbixcbiAgcmVuZGVyQ29udGVudCxcbiAgZGlzYWJsZUNsaWNrQXdheSxcbiAgLi4ucHJvcHNcbn06IEFjY29yZGlvblByb3BzKSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XG4gICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICFkaXNhYmxlQ2xpY2tBd2F5ICYmIHNldElzT3BlbihmYWxzZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgcmVuZGVyUHJvcHM6IFJlbmRlclByb3BzID0geyBpc09wZW4gfTtcblxuICByZXR1cm4gKFxuICAgIDxBY2NvcmRpb25Db250YWluZXIgaXNPcGVuPXtpc09wZW59IHsuLi5wcm9wc30+XG4gICAgICA8U3R5bGVkQ29udGFpbmVyXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW4ocmVuZGVyUHJvcHMpfVxuICAgICAgPC9TdHlsZWRDb250YWluZXI+XG4gICAgICB7aXNPcGVuICYmIHJlbmRlckNvbnRlbnQocmVuZGVyUHJvcHMpfVxuICAgIDwvQWNjb3JkaW9uQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXX0=