import React from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps {
    title: string;
    initialOpen?: boolean;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
