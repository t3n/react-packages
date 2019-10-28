import React from 'react';
import { WidthProps } from 'styled-system';
export declare type DividerVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface DividerProps extends WidthProps {
    variant?: DividerVariants;
}
export declare const Divider: React.FC<DividerProps>;
