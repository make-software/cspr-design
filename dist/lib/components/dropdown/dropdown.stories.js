import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import Dropdown from './dropdown';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
export default {
    component: Dropdown,
    title: 'Dropdown',
    args: {
        value: { value: 'faucet', label: 'Faucet' },
        areItemsRemovable: true,
        isSearchable: true,
        label: 'Story Dropdown',
        items: [
            { value: 'faucet', label: 'Faucet' },
            { value: 'contracts', label: 'Deploy contract' },
            { value: 'peers', label: 'Connected peers' },
        ],
    },
};
var Template = function (args) { return (_jsx(FlexRow, __assign({ itemsSpacing: 10 }, { children: _jsx(FlexColumn, __assign({ itemsSpacing: 10 }, { children: _jsx(Dropdown, __assign({}, args)) })) }))); };
export var Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uc3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE9BQU8sUUFBUSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxlQUFlO0lBQ1gsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLFVBQVU7SUFDakIsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO1FBQzNDLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsWUFBWSxFQUFFLElBQUk7UUFDbEIsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUU7WUFDSCxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUNwQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFO1lBQ2hELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7U0FDL0M7S0FDSjtDQUM4QixDQUFDO0FBRXBDLElBQU0sUUFBUSxHQUFvQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQ3hELEtBQUMsT0FBTyxhQUFDLFlBQVksRUFBRSxFQUFFLGdCQUNyQixLQUFDLFVBQVUsYUFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDeEIsS0FBQyxRQUFRLGVBQUssSUFBSSxFQUFHLElBQ1osSUFDUCxDQUNiLEVBTjJELENBTTNELENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRhLCBDb21wb25lbnRTdG9yeSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vZHJvcGRvd24nO1xuaW1wb3J0IEZsZXhSb3cgZnJvbSAnLi4vZmxleC1yb3cvZmxleC1yb3cnO1xuaW1wb3J0IEZsZXhDb2x1bW4gZnJvbSAnLi4vZmxleC1jb2x1bW4vZmxleC1jb2x1bW4nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50OiBEcm9wZG93bixcbiAgICB0aXRsZTogJ0Ryb3Bkb3duJyxcbiAgICBhcmdzOiB7XG4gICAgICAgIHZhbHVlOiB7IHZhbHVlOiAnZmF1Y2V0JywgbGFiZWw6ICdGYXVjZXQnIH0sXG4gICAgICAgIGFyZUl0ZW1zUmVtb3ZhYmxlOiB0cnVlLFxuICAgICAgICBpc1NlYXJjaGFibGU6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnU3RvcnkgRHJvcGRvd24nLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogJ2ZhdWNldCcsIGxhYmVsOiAnRmF1Y2V0JyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ2NvbnRyYWN0cycsIGxhYmVsOiAnRGVwbG95IGNvbnRyYWN0JyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogJ3BlZXJzJywgbGFiZWw6ICdDb25uZWN0ZWQgcGVlcnMnIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbn0gYXMgQ29tcG9uZW50TWV0YTx0eXBlb2YgRHJvcGRvd24+O1xuXG5jb25zdCBUZW1wbGF0ZTogQ29tcG9uZW50U3Rvcnk8dHlwZW9mIERyb3Bkb3duPiA9IChhcmdzKSA9PiAoXG4gICAgPEZsZXhSb3cgaXRlbXNTcGFjaW5nPXsxMH0+XG4gICAgICAgIDxGbGV4Q29sdW1uIGl0ZW1zU3BhY2luZz17MTB9PlxuICAgICAgICAgICAgPERyb3Bkb3duIHsuLi5hcmdzfS8+XG4gICAgICAgIDwvRmxleENvbHVtbj5cbiAgICA8L0ZsZXhSb3c+XG4pO1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuIl19