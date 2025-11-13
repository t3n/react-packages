import { type JSX, ReactNode } from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps {
    title: string | JSX.Element;
    initialOpen?: boolean;
    children?: ReactNode;
}
declare const Accordion: ({ children, title, initialOpen, ...rest }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
