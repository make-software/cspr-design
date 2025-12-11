import { ButtonProps } from '../button/button';
interface PaginationInputProps extends ButtonProps {
    currentPage: number;
    pageCount: number;
    onChange: (page: any) => void;
}
export declare const PaginationInputContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const PaginationInput: ({ currentPage, pageCount, onChange, }: PaginationInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=pagination-input.d.ts.map