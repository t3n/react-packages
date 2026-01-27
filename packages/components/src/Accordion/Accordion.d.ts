import { PropsWithChildren, ReactElement } from 'react';
import { MarginProps } from 'styled-system';
export interface AccordionProps extends MarginProps, PropsWithChildren {
    title: string | ReactElement;
    initialOpen?: boolean;
}
declare const Accordion: ({ children, title, initialOpen, ...rest }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
