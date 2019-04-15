import { ReactNode } from 'react';
import { ThemeProps } from '@t3n/styles';
export interface RatioProps extends ThemeProps {
    ratio: 'auto' | number;
    is: string;
    children?: ReactNode;
}
declare const Ratio: import("styled-components").StyledComponent<any, any, object & RatioProps, string | number | symbol>;
export default Ratio;
