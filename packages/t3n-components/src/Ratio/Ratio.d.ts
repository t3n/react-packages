import { ReactNode } from 'react';
export interface RatioProps extends ThemeProps {
    ratio: 'auto' | number;
    is: string;
    children?: ReactNode;
}
declare const Ratio: import("styled-components").StyledComponent<any, any, RatioProps, string | number | symbol>;
export default Ratio;
