/// <reference types="react" />
import { StyledComponent } from 'styled-components';
import { ThemeProps } from '../index';
interface ButtonProps extends ThemeProps {
    secondary?: boolean;
    color?: 'light' | 'dark';
    inverse?: boolean;
    loaderComponent?: StyledComponent<(props: any) => JSX.Element, any>;
}
declare const composeButtonStyle: ({ theme, secondary, color: colorProp, inverse, loaderComponent }: ButtonProps) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export default composeButtonStyle;
