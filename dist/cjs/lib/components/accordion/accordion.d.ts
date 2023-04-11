import React from 'react';
import { BaseProps } from '../../types';
export interface AccordionProps extends BaseProps {
    backgroundColor?: string;
    children: (renderProps: RenderProps) => React.ReactNode | string;
    renderContent: (renderProps: RenderProps) => React.ReactNode | string;
    disableClickAway?: boolean;
}
interface RenderProps {
    isOpen: boolean;
}
export declare function Accordion({ children, renderContent, disableClickAway, ...props }: AccordionProps): JSX.Element;
export default Accordion;
//# sourceMappingURL=accordion.d.ts.map