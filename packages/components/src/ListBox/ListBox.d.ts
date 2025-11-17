import { ReactNode } from 'react';
import { LayoutProps } from 'styled-system';
export interface LayoutWithChildrenProps extends LayoutProps {
    children?: ReactNode;
}
declare const ListBox: ({ children, ...rest }: LayoutWithChildrenProps) => import("react/jsx-runtime").JSX.Element;
export default ListBox;
