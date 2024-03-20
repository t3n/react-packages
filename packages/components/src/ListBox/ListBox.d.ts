import React, { ReactNode } from 'react';
import { LayoutProps } from 'styled-system';
export interface LayoutWithChildrenProps extends LayoutProps {
    children?: ReactNode;
}
declare const ListBox: React.FC<LayoutWithChildrenProps>;
export default ListBox;
