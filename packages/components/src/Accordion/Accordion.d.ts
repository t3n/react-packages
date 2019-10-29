import React from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps {
    title: string;
    initialOpen?: boolean;
}
export declare const Accordion: React.FC<AccordionProps>;
