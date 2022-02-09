import { BackgroundColorProps, MarginProps } from 'styled-system';
export interface LoaderProps extends MarginProps {
    small?: boolean;
    loaderSize?: string;
    color?: BackgroundColorProps['bg'];
}
declare const Loader: import("styled-components").StyledComponent<({ small, loaderSize, color: bg, ...marginProps }: LoaderProps) => JSX.Element, any, {}, never>;
export default Loader;
