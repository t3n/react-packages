/// <reference types="react" />
import { ThemeBackgroundColor } from '@t3n/theme/src/theme/colors/colors';
interface LoaderWrapperProps {
    backgroundColor?: ThemeBackgroundColor;
    bg?: ThemeBackgroundColor;
}
export declare const Loader: {
    (props: LoaderWrapperProps): JSX.Element;
    defaultProps: {
        backgroundColor: string;
    };
};
export {};
