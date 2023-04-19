import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Input from './input';
import FlexRow from '../flex-row/flex-row';
import FlexColumn from '../flex-column/flex-column';
export default {
    component: Input,
    title: 'Input',
    args: {
        value: 'USA',
        placeholder: 'Type here',
        disabled: false,
        suffixText: 'USD',
        monotype: false,
        label: 'country',
        rightLabel: 'currency',
    },
};
var Template = function (args) { return (_jsx(_Fragment, { children: _jsxs(FlexRow, __assign({ itemsSpacing: 30 }, { children: [_jsx(FlexColumn, __assign({ itemsSpacing: 30 }, { children: _jsx(Input, __assign({}, args)) })), _jsx(FlexColumn, __assign({ itemsSpacing: 30 }, { children: _jsx(Input, { label: 'invalid input', error: true, validationText: 'invalid input' }) }))] })) })); };
export var Primary = Template.bind({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuc3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE9BQU8sS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUM1QixPQUFPLE9BQU8sTUFBTSxzQkFBc0IsQ0FBQztBQUMzQyxPQUFPLFVBQVUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRCxlQUFlO0lBQ1gsU0FBUyxFQUFFLEtBQUs7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsS0FBSztRQUNaLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsVUFBVSxFQUFFLEtBQUs7UUFDakIsUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUUsU0FBUztRQUNoQixVQUFVLEVBQUUsVUFBVTtLQUN6QjtDQUMyQixDQUFDO0FBRWpDLElBQU0sUUFBUSxHQUFpQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQ3JELDRCQUNJLE1BQUMsT0FBTyxhQUFDLFlBQVksRUFBRSxFQUFFLGlCQUNyQixLQUFDLFVBQVUsYUFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDeEIsS0FBQyxLQUFLLGVBQUssSUFBSSxFQUFHLElBQ1QsRUFDYixLQUFDLFVBQVUsYUFBQyxZQUFZLEVBQUUsRUFBRSxnQkFDeEIsS0FBQyxLQUFLLElBQUMsS0FBSyxFQUFDLGVBQWUsRUFBQyxLQUFLLFFBQUMsY0FBYyxFQUFDLGVBQWUsR0FBRyxJQUMzRCxLQUNQLEdBQ1gsQ0FDTixFQVh3RCxDQVd4RCxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50TWV0YSwgQ29tcG9uZW50U3RvcnkgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0JztcbmltcG9ydCBGbGV4Um93IGZyb20gJy4uL2ZsZXgtcm93L2ZsZXgtcm93JztcbmltcG9ydCBGbGV4Q29sdW1uIGZyb20gJy4uL2ZsZXgtY29sdW1uL2ZsZXgtY29sdW1uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudDogSW5wdXQsXG4gICAgdGl0bGU6ICdJbnB1dCcsXG4gICAgYXJnczoge1xuICAgICAgICB2YWx1ZTogJ1VTQScsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnVHlwZSBoZXJlJyxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBzdWZmaXhUZXh0OiAnVVNEJyxcbiAgICAgICAgbW9ub3R5cGU6IGZhbHNlLFxuICAgICAgICBsYWJlbDogJ2NvdW50cnknLFxuICAgICAgICByaWdodExhYmVsOiAnY3VycmVuY3knLFxuICAgIH0sXG59IGFzIENvbXBvbmVudE1ldGE8dHlwZW9mIElucHV0PjtcblxuY29uc3QgVGVtcGxhdGU6IENvbXBvbmVudFN0b3J5PHR5cGVvZiBJbnB1dD4gPSAoYXJncykgPT4gKFxuICAgIDw+XG4gICAgICAgIDxGbGV4Um93IGl0ZW1zU3BhY2luZz17MzB9PlxuICAgICAgICAgICAgPEZsZXhDb2x1bW4gaXRlbXNTcGFjaW5nPXszMH0+XG4gICAgICAgICAgICAgICAgPElucHV0IHsuLi5hcmdzfS8+XG4gICAgICAgICAgICA8L0ZsZXhDb2x1bW4+XG4gICAgICAgICAgICA8RmxleENvbHVtbiBpdGVtc1NwYWNpbmc9ezMwfT5cbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9J2ludmFsaWQgaW5wdXQnIGVycm9yIHZhbGlkYXRpb25UZXh0PSdpbnZhbGlkIGlucHV0JyAvPlxuICAgICAgICAgICAgPC9GbGV4Q29sdW1uPlxuICAgICAgICA8L0ZsZXhSb3c+XG4gICAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeSA9IFRlbXBsYXRlLmJpbmQoe30pO1xuIl19