import React, { type JSX } from 'react';
import { LinkProps } from '../Link';
export interface BreadcrumbsItemProps extends Pick<LinkProps, 'variant'> {
    href?: string;
    className?: string;
    label: string;
    linkComponent?: (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & Pick<LinkProps, 'variant' | 'children'> & {
        href: string;
    }) => JSX.Element;
}
export interface BreadcrumbsProps {
    children: React.ReactNode;
}
export declare const BreadcrumbsItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<BreadcrumbsItemProps, never>> & string & Omit<({ href, label, className, variant, linkComponent: LinkComponent, }: BreadcrumbsItemProps) => import("react/jsx-runtime").JSX.Element, keyof React.Component<any, {}, any>>;
declare const Breadcrumbs: ({ children }: BreadcrumbsProps) => import("react/jsx-runtime").JSX.Element;
export default Breadcrumbs;
