import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Button from './button';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
import BodyText from '../body-text/body-text';
var Container = styled.div(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexDirection: 'column',
        '> *': {
            margin: 10,
            width: 200,
        },
    });
});
export default {
    component: Button,
    title: 'Button',
};
var primary = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return (_jsx(Button, __assign({ disabled: disabled }, { children: "Primary" })));
};
var primary2 = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return (_jsx(Button, __assign({ color: "primaryRed", disabled: disabled }, { children: "Primary 2" })));
};
var secondary = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return (_jsx(Button, __assign({ color: "secondaryBlue", disabled: disabled }, { children: "Secondary" })));
};
var secondary2 = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return (_jsx(Button, __assign({ color: "secondaryRed", disabled: disabled }, { children: "Secondary" })));
};
var utility = function (disabled) {
    if (disabled === void 0) { disabled = false; }
    return (_jsx(Button, __assign({ color: "utility", disabled: disabled }, { children: "Tertiary" })));
};
export var allColors = function () { return (_jsxs(FlexRow, __assign({ itemsSpacing: 10 }, { children: [_jsxs(FlexColumn, __assign({ itemsSpacing: 10 }, { children: [_jsx(BodyText, __assign({ size: 2 }, { children: "Active" })), primary(), primary2(), secondary(), secondary2(), utility()] })), _jsxs(FlexColumn, __assign({ itemsSpacing: 10 }, { children: [_jsx(BodyText, __assign({ size: 2 }, { children: "Disabled" })), primary(true), primary2(true), secondary(true), secondary2(true), utility(true)] }))] }))); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRXZDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUU5QyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzQyxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxRQUFRO1FBRXZCLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEdBQUc7U0FDWDtLQUNGLENBQUM7QUFSMEMsQ0FRMUMsQ0FBQyxDQUFDO0FBRUosZUFBZTtJQUNiLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLEtBQUssRUFBRSxRQUFRO0NBQ2hCLENBQUM7QUFFRixJQUFNLE9BQU8sR0FBRyxVQUFDLFFBQXlCO0lBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO0lBQUssT0FBQSxDQUM3QyxLQUFDLE1BQU0sYUFBQyxRQUFRLEVBQUUsUUFBUSw2QkFBa0IsQ0FDN0M7QUFGOEMsQ0FFOUMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQzlDLEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFFLFFBQVEsK0JBRXBDLENBQ1Y7QUFKK0MsQ0FJL0MsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQy9DLEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFFLFFBQVEsK0JBRXZDLENBQ1Y7QUFKZ0QsQ0FJaEQsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQ2hELEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFFLFFBQVEsK0JBRXRDLENBQ1Y7QUFKaUQsQ0FJakQsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQzdDLEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFFLFFBQVEsOEJBRWpDLENBQ1Y7QUFKOEMsQ0FJOUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxjQUFNLE9BQUEsQ0FDN0IsTUFBQyxPQUFPLGFBQUMsWUFBWSxFQUFFLEVBQUUsaUJBQ3ZCLE1BQUMsVUFBVSxhQUFDLFlBQVksRUFBRSxFQUFFLGlCQUMxQixLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyw0QkFBbUIsRUFDbkMsT0FBTyxFQUFFLEVBQ1QsUUFBUSxFQUFFLEVBQ1YsU0FBUyxFQUFFLEVBQ1gsVUFBVSxFQUFFLEVBQ1osT0FBTyxFQUFFLEtBQ0MsRUFDYixNQUFDLFVBQVUsYUFBQyxZQUFZLEVBQUUsRUFBRSxpQkFDMUIsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsOEJBQXFCLEVBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUNILEtBQ0wsQ0FDWCxFQW5COEIsQ0FtQjlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2KCh7IHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cbiAgJz4gKic6IHtcbiAgICBtYXJnaW46IDEwLFxuICAgIHdpZHRoOiAyMDAsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50OiBCdXR0b24sXG4gIHRpdGxlOiAnQnV0dG9uJyxcbn07XG5cbmNvbnN0IHByaW1hcnkgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0+UHJpbWFyeTwvQnV0dG9uPlxuKTtcblxuY29uc3QgcHJpbWFyeTIgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVJlZFwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgUHJpbWFyeSAyXG4gIDwvQnV0dG9uPlxuKTtcblxuY29uc3Qgc2Vjb25kYXJ5ID0gKGRpc2FibGVkOiBib29sZWFuID0gZmFsc2UpID0+IChcbiAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeUJsdWVcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgIFNlY29uZGFyeVxuICA8L0J1dHRvbj5cbik7XG5cbmNvbnN0IHNlY29uZGFyeTIgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5UmVkXCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICBTZWNvbmRhcnlcbiAgPC9CdXR0b24+XG4pO1xuXG5jb25zdCB1dGlsaXR5ID0gKGRpc2FibGVkOiBib29sZWFuID0gZmFsc2UpID0+IChcbiAgPEJ1dHRvbiBjb2xvcj1cInV0aWxpdHlcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgIFRlcnRpYXJ5XG4gIDwvQnV0dG9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IGFsbENvbG9ycyA9ICgpID0+IChcbiAgPEZsZXhSb3cgaXRlbXNTcGFjaW5nPXsxMH0+XG4gICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXsxMH0+XG4gICAgICA8Qm9keVRleHQgc2l6ZT17Mn0+QWN0aXZlPC9Cb2R5VGV4dD5cbiAgICAgIHtwcmltYXJ5KCl9XG4gICAgICB7cHJpbWFyeTIoKX1cbiAgICAgIHtzZWNvbmRhcnkoKX1cbiAgICAgIHtzZWNvbmRhcnkyKCl9XG4gICAgICB7dXRpbGl0eSgpfVxuICAgIDwvRmxleENvbHVtbj5cbiAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICAgIDxCb2R5VGV4dCBzaXplPXsyfT5EaXNhYmxlZDwvQm9keVRleHQ+XG4gICAgICB7cHJpbWFyeSh0cnVlKX1cbiAgICAgIHtwcmltYXJ5Mih0cnVlKX1cbiAgICAgIHtzZWNvbmRhcnkodHJ1ZSl9XG4gICAgICB7c2Vjb25kYXJ5Mih0cnVlKX1cbiAgICAgIHt1dGlsaXR5KHRydWUpfVxuICAgIDwvRmxleENvbHVtbj5cbiAgPC9GbGV4Um93PlxuKTtcbiJdfQ==