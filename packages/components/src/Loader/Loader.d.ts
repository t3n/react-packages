/// <reference types="react" />
import { BackgroundColorProps } from 'styled-system';
export interface LoaderProps {
    small?: boolean;
    color?: BackgroundColorProps['bg'];
}
export declare const Loader: import("styled-components").StyledComponent<({ small, color: bg }: LoaderProps) => JSX.Element, any, {}, never>;
