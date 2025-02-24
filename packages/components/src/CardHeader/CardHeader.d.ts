import React, { ReactNode } from 'react';
import { ThemeProps } from '@t3n/theme';
import { RatioProps } from '../Ratio';
export interface CardHeaderProps extends ThemeProps {
    as?: 'div' | 'a';
    big?: boolean;
    ratio?: RatioProps['ratio'] | 'auto';
    color?: string;
    image?: string;
    children?: ReactNode;
}
export declare const CardHeaderContent: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const CardHeader: import("styled-components").StyledComponent<({ big, ratio, image, children, ...props }: CardHeaderProps) => React.JSX.Element, any, CardHeaderProps, never>;
export default CardHeader;
