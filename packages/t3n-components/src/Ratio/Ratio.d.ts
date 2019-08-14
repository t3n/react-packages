import { ReactNode } from 'react';
import { ThemeProps } from '@t3n/theme';
import { BackgroundColorProps } from 'styled-system';
export interface RatioProps extends ThemeProps, BackgroundColorProps {
    ratio?: 'auto' | number;
    as?: keyof JSX.IntrinsicElements;
    children?: ReactNode;
}
declare const Ratio: import("styled-components").StyledComponent<"div", any, RatioProps, never>;
export default Ratio;
