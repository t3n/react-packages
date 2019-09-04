/// <reference types="react" />
import { SizeProps } from 'styled-system';
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
interface LoaderWrapperProps extends SizeProps {
    backgroundColor?: ThemeBackgroundColor;
    bg?: ThemeBackgroundColor;
    small?: boolean;
}
export declare const Loader: import("styled-components").StyledComponent<(props: LoaderWrapperProps) => JSX.Element, any, {}, never>;
export {};
