import React, { ReactNode } from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children?: ReactNode;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
