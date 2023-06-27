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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQXdFO0FBQ3hFLGdGQUF1QztBQUd2QyxtRkFBb0Q7QUFDcEQsNkRBQTBEO0FBYTFELElBQU0sa0JBQWtCLEdBQUcsSUFBQSwyQkFBTSxFQUFDLHFCQUFVLENBQUMsQ0FHMUMsVUFBQyxFQUEyQztRQUF6QyxNQUFNLFlBQUEsRUFBRSx1QkFBK0IsRUFBL0IsZUFBZSxtQkFBRyxhQUFhLEtBQUE7SUFBTyxPQUFBLENBQUM7UUFDbkQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ3BELEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztBQUhrRCxDQUdsRCxDQUFDLENBQUM7QUFFSixJQUFNLGVBQWUsR0FBRywyQkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztJQUN4QyxNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFDLEVBRnVDLENBRXZDLENBQUMsQ0FBQztBQUVKLFNBQWdCLFNBQVMsQ0FBQyxFQUtUO0lBSmYsSUFBQSxRQUFRLGNBQUEsRUFDUixhQUFhLG1CQUFBLEVBQ2IsZ0JBQWdCLHNCQUFBLEVBQ2IsS0FBSyxzQkFKZ0IsaURBS3pCLENBRFM7SUFFRixJQUFBLEtBQXNCLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsRUFBcEMsTUFBTSxRQUFBLEVBQUUsU0FBUyxRQUFtQixDQUFDO0lBRXBDLElBQUEsR0FBRyxHQUFLLElBQUEsNkJBQVksRUFBQztRQUMzQixRQUFRLEVBQUU7WUFDUixDQUFDLGdCQUFnQixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0YsQ0FBQyxJQUpTLENBSVI7SUFFSCxJQUFNLFdBQVcsR0FBZ0IsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO0lBRTVDLE9BQU8sQ0FDTCx3QkFBQyxrQkFBa0IscUJBQUMsTUFBTSxFQUFFLE1BQU0sSUFBTSxLQUFLLGVBQzNDLHVCQUFDLGVBQWUscUJBQ2QsR0FBRyxFQUFFLEdBQUcsRUFDUixPQUFPLEVBQUU7b0JBQ1AsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsZ0JBRUEsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUNOLEVBQ2pCLE1BQU0sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQ2xCLENBQ3RCLENBQUM7QUFDSixDQUFDO0FBN0JELDhCQTZCQztBQUVELGtCQUFlLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi4vc3ZnLWljb24vc3ZnLWljb24nO1xyXG5pbXBvcnQgeyBCYXNlUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcclxuaW1wb3J0IHsgdXNlQ2xpY2tBd2F5IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLWNsaWNrLWF3YXknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY2NvcmRpb25Qcm9wcyBleHRlbmRzIEJhc2VQcm9wcyB7XHJcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiAocmVuZGVyUHJvcHM6IFJlbmRlclByb3BzKSA9PiBSZWFjdC5SZWFjdE5vZGUgfCBzdHJpbmc7XHJcbiAgcmVuZGVyQ29udGVudDogKHJlbmRlclByb3BzOiBSZW5kZXJQcm9wcykgPT4gUmVhY3QuUmVhY3ROb2RlIHwgc3RyaW5nO1xyXG4gIGRpc2FibGVDbGlja0F3YXk/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVuZGVyUHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgQWNjb3JkaW9uQ29udGFpbmVyID0gc3R5bGVkKEZsZXhDb2x1bW4pPHtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG59PigoeyBpc09wZW4sIGJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCcgfSkgPT4gKHtcclxuICBiYWNrZ3JvdW5kOiBpc09wZW4gPyBiYWNrZ3JvdW5kQ29sb3IgOiAndHJhbnNwYXJlbnQnLFxyXG4gIHdpZHRoOiAnMTAwJScsXHJcbn0pKTtcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXYoKCkgPT4gKHtcclxuICBjdXJzb3I6ICdwb2ludGVyJyxcclxufSkpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbih7XHJcbiAgY2hpbGRyZW4sXHJcbiAgcmVuZGVyQ29udGVudCxcclxuICBkaXNhYmxlQ2xpY2tBd2F5LFxyXG4gIC4uLnByb3BzXHJcbn06IEFjY29yZGlvblByb3BzKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyByZWYgfSA9IHVzZUNsaWNrQXdheSh7XHJcbiAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAhZGlzYWJsZUNsaWNrQXdheSAmJiBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvcHM6IFJlbmRlclByb3BzID0geyBpc09wZW4gfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBY2NvcmRpb25Db250YWluZXIgaXNPcGVuPXtpc09wZW59IHsuLi5wcm9wc30+XHJcbiAgICAgIDxTdHlsZWRDb250YWluZXJcclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbihyZW5kZXJQcm9wcyl9XHJcbiAgICAgIDwvU3R5bGVkQ29udGFpbmVyPlxyXG4gICAgICB7aXNPcGVuICYmIHJlbmRlckNvbnRlbnQocmVuZGVyUHJvcHMpfVxyXG4gICAgPC9BY2NvcmRpb25Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xyXG4iXX0=