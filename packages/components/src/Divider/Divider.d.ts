import React from 'react';
import { MarginProps, WidthProps } from 'styled-system';
export declare type DividerVariants = 'primary' | 'inverse';
export interface DividerProps extends WidthProps, MarginProps {
    variant?: DividerVariants;
    iconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
    children?: string;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
