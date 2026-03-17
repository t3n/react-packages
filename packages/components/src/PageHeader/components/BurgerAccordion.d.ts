import { PropsWithChildren } from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps, PropsWithChildren {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    tabbable?: boolean;
}
declare const Accordion: ({ children, title, isOpen, onToggle, tabbable, }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
