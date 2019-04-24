import { ReactNode } from 'react';
import { ThemeProps } from '@t3n/styles';
export interface RatioProps extends ThemeProps {
    ratio?: 'auto' | number;
    as?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
}
declare const Ratio: import("styled-components").StyledComponent<"div", any, RatioProps, never>;
export default Ratio;
