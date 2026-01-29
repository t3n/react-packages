import React, { FunctionComponent, PropsWithChildren } from 'react';
import { LinkProps } from '../Link';
export interface BreadcrumbsItemProps extends Pick<LinkProps, 'variant'> {
    href?: string;
    className?: string;
    label: string;
    linkComponent?: FunctionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & Pick<LinkProps, 'variant' | 'children'> & {
        href: string;
    }>;
}
type BreadcrumbsProps = PropsWithChildren;
export declare const BreadcrumbsItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<BreadcrumbsItemProps, BreadcrumbsItemProps>> & string & Omit<({ href, label, className, variant, linkComponent: LinkComponent, }: BreadcrumbsItemProps) => import("react/jsx-runtime").JSX.Element, keyof React.Component<any, {}, any>>;
declare const Breadcrumbs: ({ children }: BreadcrumbsProps) => import("react/jsx-runtime").JSX.Element;
export default Breadcrumbs;
