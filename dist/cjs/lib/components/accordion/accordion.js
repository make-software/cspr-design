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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdFO0FBQ3hFLGdGQUF1QztBQUd2QyxtRkFBb0Q7QUFDcEQsNkRBQTBEO0FBYTFELElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FHMUMsVUFBQyxFQUEyQztRQUF6QyxNQUFNLFlBQUEsRUFBRSx1QkFBK0IsRUFBL0IsZUFBZSxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDbkQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ3BELEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztBQUhrRCxDQUdsRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUN4QyxNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFDLEVBRnVDLENBRXZDLENBQUMsQ0FBQztBQUVKLFNBQWdCLFNBQVMsQ0FBQyxFQUtUO0lBSmYsSUFBQSxRQUFRLGNBQUEsRUFDUixhQUFhLG1CQUFBLEVBQ2IsZ0JBQWdCLHNCQUFBLEVBQ2IsS0FBSyxzQkFKZ0IsaURBS3pCLENBRFM7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsRUFBcEMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFtQixDQUFDO0lBRXBDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixDQUFDLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0YsQ0FBQyxJQUpTLENBSVI7SUFFSCxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBRTVDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBa0IscUJBQUMsTUFBTSxFQUFFLE1BQU0sSUFBTSxLQUFLLGVBQzNDLHVCQUFDLGVBQWUscUJBQ2QsR0FBRyxFQUFFLEdBQUcsRUFDUixPQUFPLEVBQUU7b0JBQ1AsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsZ0JBRUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUNOLEVBQ2pCLE1BQU0sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQ2xCLENBQ3RCLENBQUM7QUFDSixDQUFDO0FBN0JELDhCQTZCQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbic7XG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgRmxleENvbHVtbiBmcm9tICcuLi9mbGV4LWNvbHVtbi9mbGV4LWNvbHVtbic7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICcuLi8uLi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3JkaW9uUHJvcHMgZXh0ZW5kcyBCYXNlUHJvcHMge1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiAocmVuZGVyUHJvcHM6IFJlbmRlclByb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGUgfCBzdHJpbmc7XG4gIHJlbmRlckNvbnRlbnQ6IChyZW5kZXJQcm9wczogUmVuZGVyUHJvcHMpID0+IFJlYWN0LlJlYWN0Tm9kZSB8IHN0cmluZztcbiAgZGlzYWJsZUNsaWNrQXdheT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBSZW5kZXJQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbn1cblxuY29uc3QgQWNjb3JkaW9uQ29udGFpbmVyID0gc3R5bGVkKEZsZXhDb2x1bW4pPHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG59PigoeyBpc09wZW4sIGJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCcgfSkgPT4gKHtcbiAgYmFja2dyb3VuZDogaXNPcGVuID8gYmFja2dyb3VuZENvbG9yIDogJ3RyYW5zcGFyZW50JyxcbiAgd2lkdGg6ICcxMDAlJyxcbn0pKTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdigoKSA9PiAoe1xuICBjdXJzb3I6ICdwb2ludGVyJyxcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbih7XG4gIGNoaWxkcmVuLFxuICByZW5kZXJDb250ZW50LFxuICBkaXNhYmxlQ2xpY2tBd2F5LFxuICAuLi5wcm9wc1xufTogQWNjb3JkaW9uUHJvcHMpIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB7IHJlZiB9ID0gdXNlQ2xpY2tBd2F5KHtcbiAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgIWRpc2FibGVDbGlja0F3YXkgJiYgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCByZW5kZXJQcm9wczogUmVuZGVyUHJvcHMgPSB7IGlzT3BlbiB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFjY29yZGlvbkNvbnRhaW5lciBpc09wZW49e2lzT3Blbn0gey4uLnByb3BzfT5cbiAgICAgIDxTdHlsZWRDb250YWluZXJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbihyZW5kZXJQcm9wcyl9XG4gICAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgICAgIHtpc09wZW4gJiYgcmVuZGVyQ29udGVudChyZW5kZXJQcm9wcyl9XG4gICAgPC9BY2NvcmRpb25Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcbiJdfQ==