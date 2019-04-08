import { ReactNode } from 'react';
import { ColorProps } from 'styled-system';
import { RatioProps } from '../Ratio/Ratio';
import { ThemeProps } from '@t3n/styles';
interface CardHeaderProps extends ColorProps {
    is?: 'div' | 'a';
    big?: boolean;
    ratio?: RatioProps['ratio'];
    image?: string;
    children?: ReactNode;
}
export declare const CardHeaderContent: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const StyledCardHeader: import("styled-components").StyledComponent<{
    ({ big, ratio, bg, image, children, ...props }: CardHeaderProps): JSX.Element;
    defaultProps: {
        is: string;
        big: boolean;
        ratio: string;
        color: string;
        bg: string;
        image: string;
    };
}, any, CardHeaderProps & ThemeProps, never>;
export default StyledCardHeader;
