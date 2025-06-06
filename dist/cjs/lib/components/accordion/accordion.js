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
    return ((0, jsx_runtime_1.jsxs)(AccordionContainer, tslib_1.__assign({ isOpen: isOpen, "aria-expanded": !!isOpen }, props, { children: [(0, jsx_runtime_1.jsx)(StyledContainer, tslib_1.__assign({ ref: ref, onClick: function () {
                    setIsOpen(!isOpen);
                } }, { children: children(renderProps) })), isOpen && renderContent(renderProps)] })));
}
exports.Accordion = Accordion;
exports.default = Accordion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdDO0FBQ3hDLGdGQUF1QztBQUV2QyxtRkFBb0Q7QUFDcEQsNkRBQTBEO0FBYTFELElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FHMUMsVUFBQyxFQUEyQztRQUF6QyxNQUFNLFlBQUEsRUFBRSx1QkFBK0IsRUFBL0IsZUFBZSxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDbkQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ3BELEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztBQUhrRCxDQUdsRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUN4QyxNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFDLEVBRnVDLENBRXZDLENBQUMsQ0FBQztBQUVKLFNBQWdCLFNBQVMsQ0FBQyxFQUtUO0lBSmYsSUFBQSxRQUFRLGNBQUEsRUFDUixhQUFhLG1CQUFBLEVBQ2IsZ0JBQWdCLHNCQUFBLEVBQ2IsS0FBSyxzQkFKZ0IsaURBS3pCLENBRFM7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsRUFBcEMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFtQixDQUFDO0lBRXBDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixDQUFDLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0YsQ0FBQyxJQUpTLENBSVI7SUFFSCxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBRTVDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBa0IscUJBQUMsTUFBTSxFQUFFLE1BQU0sbUJBQWlCLENBQUMsQ0FBQyxNQUFNLElBQU0sS0FBSyxlQUNwRSx1QkFBQyxlQUFlLHFCQUNkLEdBQUcsRUFBRSxHQUFHLEVBQ1IsT0FBTyxFQUFFO29CQUNQLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQixDQUFDLGdCQUVBLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFDTixFQUNqQixNQUFNLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUNsQixDQUN0QixDQUFDO0FBQ0osQ0FBQztBQTdCRCw4QkE2QkM7QUFFRCxrQkFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEJhc2VQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcbmltcG9ydCB7IHVzZUNsaWNrQXdheSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1jbGljay1hd2F5JztcblxuZXhwb3J0IGludGVyZmFjZSBBY2NvcmRpb25Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbiAgY2hpbGRyZW46IChyZW5kZXJQcm9wczogUmVuZGVyUHJvcHMpID0+IFJlYWN0LlJlYWN0Tm9kZSB8IHN0cmluZztcbiAgcmVuZGVyQ29udGVudDogKHJlbmRlclByb3BzOiBSZW5kZXJQcm9wcykgPT4gUmVhY3QuUmVhY3ROb2RlIHwgc3RyaW5nO1xuICBkaXNhYmxlQ2xpY2tBd2F5PzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFJlbmRlclByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xufVxuXG5jb25zdCBBY2NvcmRpb25Db250YWluZXIgPSBzdHlsZWQoRmxleENvbHVtbik8e1xuICBpc09wZW46IGJvb2xlYW47XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbn0+KCh7IGlzT3BlbiwgYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JyB9KSA9PiAoe1xuICBiYWNrZ3JvdW5kOiBpc09wZW4gPyBiYWNrZ3JvdW5kQ29sb3IgOiAndHJhbnNwYXJlbnQnLFxuICB3aWR0aDogJzEwMCUnLFxufSkpO1xuXG5jb25zdCBTdHlsZWRDb250YWluZXIgPSBzdHlsZWQuZGl2KCgpID0+ICh7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxufSkpO1xuXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uKHtcbiAgY2hpbGRyZW4sXG4gIHJlbmRlckNvbnRlbnQsXG4gIGRpc2FibGVDbGlja0F3YXksXG4gIC4uLnByb3BzXG59OiBBY2NvcmRpb25Qcm9wcykge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VDbGlja0F3YXkoe1xuICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAhZGlzYWJsZUNsaWNrQXdheSAmJiBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHJlbmRlclByb3BzOiBSZW5kZXJQcm9wcyA9IHsgaXNPcGVuIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uQ29udGFpbmVyIGlzT3Blbj17aXNPcGVufSBhcmlhLWV4cGFuZGVkPXshIWlzT3Blbn0gey4uLnByb3BzfT5cbiAgICAgIDxTdHlsZWRDb250YWluZXJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbihyZW5kZXJQcm9wcyl9XG4gICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICAgIHtpc09wZW4gJiYgcmVuZGVyQ29udGVudChyZW5kZXJQcm9wcyl9XG4gICAgPC9BY2NvcmRpb25Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ==