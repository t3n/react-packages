import { ReactNode } from 'react';
import { BackgroundColorProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
export interface RatioProps extends ThemeProps, BackgroundColorProps {
    ratio?: 'auto' | number;
    as?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
}
declare const Ratio: import("styled-components").StyledComponent<"div", any, RatioProps, never>;
export default Ratio;
