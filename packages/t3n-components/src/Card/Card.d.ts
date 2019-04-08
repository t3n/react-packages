import { ReactNode } from 'react';
import { SizeWidthProps } from 'styled-system';
import { ThemeProps } from '@t3n/styles';
interface CardProps extends ThemeProps {
    rounded?: boolean;
    big?: boolean;
    elevate?: boolean;
    dashed?: boolean;
    href?: string | false;
    color?: string;
    width?: SizeWidthProps['size'];
    children?: ReactNode;
}
declare const Card: import("styled-components").StyledComponent<"div", any, CardProps, never>;
export default Card;
