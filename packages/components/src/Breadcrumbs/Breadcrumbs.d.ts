import React, { ReactNode } from 'react';
import { LinkProps } from '../Link';
export interface BreadcrumbsItemProps extends Pick<LinkProps, 'variant'> {
    href?: string;
    className?: string;
    label: string;
    linkComponent?: (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & Pick<LinkProps, 'variant' | 'children'> & {
        href: string;
    }) => JSX.Element;
}
export declare const BreadcrumbsItem: import("styled-components").StyledComponent<({ href, label, className, variant, linkComponent: LinkComponent, }: BreadcrumbsItemProps) => JSX.Element, any, {}, never>;
export interface BreadcrumbsProps {
    children: ReactNode;
}
declare const Breadcrumbs: ({ children }: BreadcrumbsProps) => JSX.Element;
export default Breadcrumbs;
