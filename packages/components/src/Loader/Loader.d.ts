/// <reference types="react" />
import { BackgroundColorProps, MarginProps } from 'styled-system';
export interface LoaderProps extends MarginProps {
    small?: boolean;
    color?: BackgroundColorProps['bg'];
}
export declare const Loader: import("styled-components").StyledComponent<({ small, color: bg, ...marginProps }: LoaderProps) => JSX.Element, any, {}, never>;
