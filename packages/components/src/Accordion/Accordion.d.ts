import React, { ReactNode } from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps {
    title: string | JSX.Element;
    initialOpen?: boolean;
    children?: ReactNode;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
