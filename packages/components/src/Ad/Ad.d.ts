import React from 'react';
import { BoxProps } from '../Box';
export interface AdProps extends BoxProps {
    name: string;
    preview?: boolean;
    style?: React.CSSProperties;
}
declare const Ad: React.ForwardRefExoticComponent<AdProps & React.RefAttributes<HTMLDivElement>>;
export default Ad;
