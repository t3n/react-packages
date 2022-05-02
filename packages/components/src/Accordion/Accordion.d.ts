import React from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps {
    title: string | JSX.Element;
    initialOpen?: boolean;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
