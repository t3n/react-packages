import React, { ReactNode } from 'react';
import { ColorProps } from 'styled-system';
import { ThemeProps } from '@t3n/theme';
import { RatioProps } from '../Ratio';
export interface CardHeaderProps extends ThemeProps {
    as?: 'div' | 'a';
    big?: boolean;
    ratio?: RatioProps['ratio'];
    bg?: ColorProps['bg'];
    color?: string;
    image?: string;
    children?: ReactNode;
}
export declare const CardHeaderContent: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const CardHeader: import("styled-components").StyledComponent<({ big, ratio, bg, image, children, ...props }: CardHeaderProps) => React.JSX.Element, any, CardHeaderProps, never>;
export default CardHeader;
