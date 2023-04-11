import { __assign } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Menu from "./menu/menu";
import MenuItem from "./menu-item/menu-item";
import BodyText from "../../body-text/body-text";
import FlexRow from "../../flex-row/flex-row";
import SvgIcon from "../../svg-icon/svg-icon";
import styled from "styled-components";
export default {
    component: Menu,
    title: "Dropdown Menu",
    args: {
        opened: true,
    },
};
var StyledSvgIcon = styled(SvgIcon)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.styleguideColors.contentTertiary,
        path: {
            fill: theme.styleguideColors.contentTertiary,
        },
    });
});
var Template = function (args) { return _jsx(Menu, __assign({}, args)); };
export var Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: (_jsxs(_Fragment, { children: [_jsx(MenuItem, { children: _jsx(BodyText, __assign({ size: 3 }, { children: "Faucet" })) }), _jsx(MenuItem, { children: _jsx(BodyText, __assign({ size: 3 }, { children: "Deploy contract" })) }), _jsx(MenuItem, { children: _jsx(BodyText, __assign({ size: 3 }, { children: "Connected peers" })) })] })),
};
export var WithIcons = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcons.args = {
    children: (_jsxs(_Fragment, { children: [_jsx(MenuItem, { children: _jsx(BodyText, __assign({ size: 2 }, { children: _jsx(FlexRow, __assign({ align: "center" }, { children: "View Account" })) })) }), _jsx(MenuItem, { children: _jsx(BodyText, __assign({ size: 2 }, { children: _jsx(FlexRow, __assign({ align: "center" }, { children: "Activity Export" })) })) }), _jsx(MenuItem, { children: _jsx(BodyText, __assign({ size: 2 }, { children: "Verify Active Address" })) }), _jsx(MenuItem, { children: _jsx(BodyText, __assign({ size: 2 }, { children: "Disconnect Account" })) })] })),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5zdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBQy9CLE9BQU8sUUFBUSxNQUFNLHVCQUF1QixDQUFDO0FBRTdDLE9BQU8sUUFBUSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pELE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBQzlDLE9BQU8sT0FBTyxNQUFNLHlCQUF5QixDQUFDO0FBQzlDLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRXZDLGVBQWU7SUFDYixTQUFTLEVBQUUsSUFBSTtJQUNmLEtBQUssRUFBRSxlQUFlO0lBQ3RCLElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxJQUFJO0tBQ2I7Q0FDNEIsQ0FBQztBQUVoQyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBQyxFQUFTO1FBQVAsS0FBSyxXQUFBO0lBQU8sT0FBQSxDQUFDO1FBQ3BELEtBQUssRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBZTtRQUM3QyxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWU7U0FDN0M7S0FDRixDQUFDO0FBTG1ELENBS25ELENBQUMsQ0FBQztBQUVKLElBQU0sUUFBUSxHQUFnQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUMsSUFBSSxlQUFLLElBQUksRUFBSSxFQUFsQixDQUFrQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDLHlFQUF5RTtBQUN6RSxPQUFPLENBQUMsSUFBSSxHQUFHO0lBQ2IsUUFBUSxFQUFFLENBQ1IsOEJBQ0UsS0FBQyxRQUFRLGNBQ1AsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsNEJBQW1CLEdBQzNCLEVBQ1gsS0FBQyxRQUFRLGNBQ1AsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMscUNBQTRCLEdBQ3BDLEVBQ1gsS0FBQyxRQUFRLGNBQ1AsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMscUNBQTRCLEdBQ3BDLElBQ1YsQ0FDSjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQyx5RUFBeUU7QUFDekUsU0FBUyxDQUFDLElBQUksR0FBRztJQUNmLFFBQVEsRUFBRSxDQUNSLDhCQUNFLEtBQUMsUUFBUSxjQUNQLEtBQUMsUUFBUSxhQUFDLElBQUksRUFBRSxDQUFDLGdCQUNmLEtBQUMsT0FBTyxhQUFDLEtBQUssRUFBQyxRQUFRLGtDQUF1QixJQUNyQyxHQUNGLEVBQ1gsS0FBQyxRQUFRLGNBQ1AsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsZ0JBQ2YsS0FBQyxPQUFPLGFBQUMsS0FBSyxFQUFDLFFBQVEscUNBQTBCLElBQ3hDLEdBQ0YsRUFDWCxLQUFDLFFBQVEsY0FDUCxLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQywyQ0FBa0MsR0FDMUMsRUFDWCxLQUFDLFFBQVEsY0FDUCxLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyx3Q0FBK0IsR0FDdkMsSUFDVixDQUNKO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUvbWVudVwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL21lbnUtaXRlbS9tZW51LWl0ZW1cIjtcbmltcG9ydCB7IENvbXBvbmVudE1ldGEsIENvbXBvbmVudFN0b3J5IH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIjtcbmltcG9ydCBCb2R5VGV4dCBmcm9tIFwiLi4vLi4vYm9keS10ZXh0L2JvZHktdGV4dFwiO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSBcIi4uLy4uL2ZsZXgtcm93L2ZsZXgtcm93XCI7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tIFwiLi4vLi4vc3ZnLWljb24vc3ZnLWljb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBNZW51LFxuICB0aXRsZTogXCJEcm9wZG93biBNZW51XCIsXG4gIGFyZ3M6IHtcbiAgICBvcGVuZWQ6IHRydWUsXG4gIH0sXG59IGFzIENvbXBvbmVudE1ldGE8dHlwZW9mIE1lbnU+O1xuXG5jb25zdCBTdHlsZWRTdmdJY29uID0gc3R5bGVkKFN2Z0ljb24pKCh7IHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiB0aGVtZS5zdHlsZWd1aWRlQ29sb3JzLmNvbnRlbnRUZXJ0aWFyeSxcbiAgcGF0aDoge1xuICAgIGZpbGw6IHRoZW1lLnN0eWxlZ3VpZGVDb2xvcnMuY29udGVudFRlcnRpYXJ5LFxuICB9LFxufSkpO1xuXG5jb25zdCBUZW1wbGF0ZTogQ29tcG9uZW50U3Rvcnk8dHlwZW9mIE1lbnU+ID0gKGFyZ3MpID0+IDxNZW51IHsuLi5hcmdzfSAvPjtcblxuZXhwb3J0IGNvbnN0IFByaW1hcnkgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbi8vIE1vcmUgb24gYXJnczogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvcmVhY3Qvd3JpdGluZy1zdG9yaWVzL2FyZ3NcblByaW1hcnkuYXJncyA9IHtcbiAgY2hpbGRyZW46IChcbiAgICA8PlxuICAgICAgPE1lbnVJdGVtPlxuICAgICAgICA8Qm9keVRleHQgc2l6ZT17M30+RmF1Y2V0PC9Cb2R5VGV4dD5cbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgICA8TWVudUl0ZW0+XG4gICAgICAgIDxCb2R5VGV4dCBzaXplPXszfT5EZXBsb3kgY29udHJhY3Q8L0JvZHlUZXh0PlxuICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgPEJvZHlUZXh0IHNpemU9ezN9PkNvbm5lY3RlZCBwZWVyczwvQm9keVRleHQ+XG4gICAgICA8L01lbnVJdGVtPlxuICAgIDwvPlxuICApLFxufTtcblxuZXhwb3J0IGNvbnN0IFdpdGhJY29ucyA9IFRlbXBsYXRlLmJpbmQoe30pO1xuLy8gTW9yZSBvbiBhcmdzOiBodHRwczovL3N0b3J5Ym9vay5qcy5vcmcvZG9jcy9yZWFjdC93cml0aW5nLXN0b3JpZXMvYXJnc1xuV2l0aEljb25zLmFyZ3MgPSB7XG4gIGNoaWxkcmVuOiAoXG4gICAgPD5cbiAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9PlxuICAgICAgICAgIDxGbGV4Um93IGFsaWduPVwiY2VudGVyXCI+VmlldyBBY2NvdW50PC9GbGV4Um93PlxuICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9PlxuICAgICAgICAgIDxGbGV4Um93IGFsaWduPVwiY2VudGVyXCI+QWN0aXZpdHkgRXhwb3J0PC9GbGV4Um93PlxuICAgICAgICA8L0JvZHlUZXh0PlxuICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDxNZW51SXRlbT5cbiAgICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9PlZlcmlmeSBBY3RpdmUgQWRkcmVzczwvQm9keVRleHQ+XG4gICAgICA8L01lbnVJdGVtPlxuICAgICAgPE1lbnVJdGVtPlxuICAgICAgICA8Qm9keVRleHQgc2l6ZT17Mn0+RGlzY29ubmVjdCBBY2NvdW50PC9Cb2R5VGV4dD5cbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgPC8+XG4gICksXG59O1xuIl19