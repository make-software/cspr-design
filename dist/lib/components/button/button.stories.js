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
    argTypes: {
        height: '36',
        disabled: false,
        color: 'primaryRed',
        children: 'Button'
    },
};
var Template = function (args) { return (_jsx(Container, { children: _jsx(Button, __assign({}, args)) })); };
export var ButtonSize = Template.bind({});
ButtonSize.args = {
    height: '36',
    children: 'Button'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLnN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFDO0FBRXZDLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLFFBQVEsTUFBTSx3QkFBd0IsQ0FBQztBQUc5QyxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBUztRQUFQLEtBQUssV0FBQTtJQUFPLE9BQUEsQ0FBQztRQUMzQyxPQUFPLEVBQUUsTUFBTTtRQUNmLGFBQWEsRUFBRSxRQUFRO1FBRXZCLEtBQUssRUFBRTtZQUNMLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEdBQUc7U0FDWDtLQUNGLENBQUM7QUFSMEMsQ0FRMUMsQ0FBQyxDQUFDO0FBRUosZUFBZTtJQUNiLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLEtBQUssRUFBRSxRQUFRO0lBQ2YsUUFBUSxFQUFFO1FBQ04sTUFBTSxFQUFFLElBQUk7UUFDWixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxZQUFZO1FBQ25CLFFBQVEsRUFBRSxRQUFRO0tBQ3JCO0NBQ0YsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFrQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsS0FBQyxTQUFTLGNBQUMsS0FBQyxNQUFNLGVBQUssSUFBSSxFQUFJLEdBQVksQ0FBQyxFQUE3QyxDQUE2QyxDQUFDO0FBQ3hHLE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUc7SUFDZCxNQUFNLEVBQUUsSUFBSTtJQUNaLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUE7QUFHRCxJQUFNLE9BQU8sR0FBRyxVQUFDLFFBQXlCO0lBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO0lBQUssT0FBQSxDQUM3QyxLQUFDLE1BQU0sYUFBQyxRQUFRLEVBQUUsUUFBUSw2QkFBa0IsQ0FDN0M7QUFGOEMsQ0FFOUMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQzlDLEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFFLFFBQVEsK0JBRXBDLENBQ1Y7QUFKK0MsQ0FJL0MsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQy9DLEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFFLFFBQVEsK0JBRXZDLENBQ1Y7QUFKZ0QsQ0FJaEQsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQ2hELEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFFLFFBQVEsK0JBRXRDLENBQ1Y7QUFKaUQsQ0FJakQsQ0FBQztBQUVGLElBQU0sT0FBTyxHQUFHLFVBQUMsUUFBeUI7SUFBekIseUJBQUEsRUFBQSxnQkFBeUI7SUFBSyxPQUFBLENBQzdDLEtBQUMsTUFBTSxhQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFFLFFBQVEsOEJBRWpDLENBQ1Y7QUFKOEMsQ0FJOUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRyxjQUFNLE9BQUEsQ0FDN0IsTUFBQyxPQUFPLGFBQUMsWUFBWSxFQUFFLEVBQUUsaUJBQ3ZCLE1BQUMsVUFBVSxhQUFDLFlBQVksRUFBRSxFQUFFLGlCQUMxQixLQUFDLFFBQVEsYUFBQyxJQUFJLEVBQUUsQ0FBQyw0QkFBbUIsRUFDbkMsT0FBTyxFQUFFLEVBQ1QsUUFBUSxFQUFFLEVBQ1YsU0FBUyxFQUFFLEVBQ1gsVUFBVSxFQUFFLEVBQ1osT0FBTyxFQUFFLEtBQ0MsRUFDYixNQUFDLFVBQVUsYUFBQyxZQUFZLEVBQUUsRUFBRSxpQkFDMUIsS0FBQyxRQUFRLGFBQUMsSUFBSSxFQUFFLENBQUMsOEJBQXFCLEVBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQ2QsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUNILEtBQ0wsQ0FDWCxFQW5COEIsQ0FtQjlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuaW1wb3J0IEJvZHlUZXh0IGZyb20gJy4uL2JvZHktdGV4dC9ib2R5LXRleHQnO1xuaW1wb3J0IHsgQ29tcG9uZW50U3RvcnkgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdigoeyB0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXG4gICc+IConOiB7XG4gICAgbWFyZ2luOiAxMCxcbiAgICB3aWR0aDogMjAwLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudDogQnV0dG9uLFxuICB0aXRsZTogJ0J1dHRvbicsXG4gIGFyZ1R5cGVzOiB7XG4gICAgICBoZWlnaHQ6ICczNicsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBjb2xvcjogJ3ByaW1hcnlSZWQnLFxuICAgICAgY2hpbGRyZW46ICdCdXR0b24nXG4gIH0sXG59O1xuXG5jb25zdCBUZW1wbGF0ZTogQ29tcG9uZW50U3Rvcnk8dHlwZW9mIEJ1dHRvbj4gPSAoYXJncykgPT4gKDxDb250YWluZXI+PEJ1dHRvbiB7Li4uYXJnc30gLz48L0NvbnRhaW5lcj4pO1xuZXhwb3J0IGNvbnN0IEJ1dHRvblNpemUgPSBUZW1wbGF0ZS5iaW5kKHt9KTtcbkJ1dHRvblNpemUuYXJncyA9IHtcbiAgICBoZWlnaHQ6ICczNicsXG4gICAgY2hpbGRyZW46ICdCdXR0b24nXG59XG5cblxuY29uc3QgcHJpbWFyeSA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfT5QcmltYXJ5PC9CdXR0b24+XG4pO1xuXG5jb25zdCBwcmltYXJ5MiA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5UmVkXCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICBQcmltYXJ5IDJcbiAgPC9CdXR0b24+XG4pO1xuXG5jb25zdCBzZWNvbmRhcnkgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5Qmx1ZVwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgU2Vjb25kYXJ5XG4gIDwvQnV0dG9uPlxuKTtcblxuY29uc3Qgc2Vjb25kYXJ5MiA9IChkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlKSA9PiAoXG4gIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlSZWRcIiBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgIFNlY29uZGFyeVxuICA8L0J1dHRvbj5cbik7XG5cbmNvbnN0IHV0aWxpdHkgPSAoZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4gKFxuICA8QnV0dG9uIGNvbG9yPVwidXRpbGl0eVwiIGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgVGVydGlhcnlcbiAgPC9CdXR0b24+XG4pO1xuXG5leHBvcnQgY29uc3QgYWxsQ29sb3JzID0gKCkgPT4gKFxuICA8RmxleFJvdyBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezEwfT5cbiAgICAgIDxCb2R5VGV4dCBzaXplPXsyfT5BY3RpdmU8L0JvZHlUZXh0PlxuICAgICAge3ByaW1hcnkoKX1cbiAgICAgIHtwcmltYXJ5MigpfVxuICAgICAge3NlY29uZGFyeSgpfVxuICAgICAge3NlY29uZGFyeTIoKX1cbiAgICAgIHt1dGlsaXR5KCl9XG4gICAgPC9GbGV4Q29sdW1uPlxuICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17MTB9PlxuICAgICAgPEJvZHlUZXh0IHNpemU9ezJ9PkRpc2FibGVkPC9Cb2R5VGV4dD5cbiAgICAgIHtwcmltYXJ5KHRydWUpfVxuICAgICAge3ByaW1hcnkyKHRydWUpfVxuICAgICAge3NlY29uZGFyeSh0cnVlKX1cbiAgICAgIHtzZWNvbmRhcnkyKHRydWUpfVxuICAgICAge3V0aWxpdHkodHJ1ZSl9XG4gICAgPC9GbGV4Q29sdW1uPlxuICA8L0ZsZXhSb3c+XG4pO1xuIl19