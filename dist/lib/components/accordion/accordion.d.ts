import { default as React } from 'react';
import { BaseProps } from '../../base-types.ts';
export interface AccordionProps extends BaseProps {
    backgroundColor?: string;
    renderContent: (renderProps: RenderProps) => React.ReactNode | string;
    disableClickAway?: boolean;
}
interface RenderProps {
    isOpen: boolean;
}
export declare function Accordion({ children, renderContent, disableClickAway, ...props }: React.PropsWithChildren<AccordionProps>): import("react/jsx-runtime").JSX.Element;
export default Accordion;
//# sourceMappingURL=accordion.d.ts.map