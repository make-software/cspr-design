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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLGdGQUF1QztBQUV2QyxtRkFBb0Q7QUFDcEQsNkRBQTBEO0FBYTFELElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FHMUMsVUFBQyxFQUEyQztRQUF6QyxNQUFNLFlBQUEsRUFBRSx1QkFBK0IsRUFBL0IsZUFBZSxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDbkQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ3BELEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztBQUhrRCxDQUdsRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUN4QyxNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFDLEVBRnVDLENBRXZDLENBQUMsQ0FBQztBQUVKLFNBQWdCLFNBQVMsQ0FBQyxFQUtUO0lBSmYsSUFBQSxRQUFRLGNBQUEsRUFDUixhQUFhLG1CQUFBLEVBQ2IsZ0JBQWdCLHNCQUFBLEVBQ2IsS0FBSyxzQkFKZ0IsaURBS3pCLENBRFM7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsRUFBcEMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFtQixDQUFDO0lBRXBDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixDQUFDLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0YsQ0FBQyxJQUpTLENBSVI7SUFFSCxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBRTVDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBa0IscUJBQUMsTUFBTSxFQUFFLE1BQU0sSUFBTSxLQUFLLGVBQzNDLHVCQUFDLGVBQWUscUJBQ2QsR0FBRyxFQUFFLEdBQUcsRUFDUixPQUFPLEVBQUU7b0JBQ1AsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsZ0JBRUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUNOLEVBQ2pCLE1BQU0sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQ2xCLENBQ3RCLENBQUM7QUFDSixDQUFDO0FBN0JELDhCQTZCQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xyXG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY29yZGlvblByb3BzIGV4dGVuZHMgQmFzZVByb3BzIHtcclxuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IChyZW5kZXJQcm9wczogUmVuZGVyUHJvcHMpID0+IFJlYWN0LlJlYWN0Tm9kZSB8IHN0cmluZztcclxuICByZW5kZXJDb250ZW50OiAocmVuZGVyUHJvcHM6IFJlbmRlclByb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGUgfCBzdHJpbmc7XHJcbiAgZGlzYWJsZUNsaWNrQXdheT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBSZW5kZXJQcm9wcyB7XHJcbiAgaXNPcGVuOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBY2NvcmRpb25Db250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8e1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XHJcbn0+KCh7IGlzT3BlbiwgYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JyB9KSA9PiAoe1xyXG4gIGJhY2tncm91bmQ6IGlzT3BlbiA/IGJhY2tncm91bmRDb2xvciA6ICd0cmFuc3BhcmVudCcsXHJcbiAgd2lkdGg6ICcxMDAlJyxcclxufSkpO1xyXG5cclxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG59KSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uKHtcclxuICBjaGlsZHJlbixcclxuICByZW5kZXJDb250ZW50LFxyXG4gIGRpc2FibGVDbGlja0F3YXksXHJcbiAgLi4ucHJvcHNcclxufTogQWNjb3JkaW9uUHJvcHMpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcclxuICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICFkaXNhYmxlQ2xpY2tBd2F5ICYmIHNldElzT3BlbihmYWxzZSk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCByZW5kZXJQcm9wczogUmVuZGVyUHJvcHMgPSB7IGlzT3BlbiB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFjY29yZGlvbkNvbnRhaW5lciBpc09wZW49e2lzT3Blbn0gey4uLnByb3BzfT5cclxuICAgICAgPFN0eWxlZENvbnRhaW5lclxyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVuKHJlbmRlclByb3BzKX1cclxuICAgICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgICAgIHtpc09wZW4gJiYgcmVuZGVyQ29udGVudChyZW5kZXJQcm9wcyl9XHJcbiAgICA8L0FjY29yZGlvbkNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XHJcbiJdfQ==