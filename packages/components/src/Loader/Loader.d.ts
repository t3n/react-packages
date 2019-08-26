/// <reference types="react" />
import { ColorProps } from 'styled-system';
interface LoaderWrapperProps {
    backgroundColor?: ColorProps['backgroundColor'];
    bg?: ColorProps['bg'];
}
export declare const Loader: {
    (props: LoaderWrapperProps): JSX.Element;
    defaultProps: {
        bg: string;
    };
};
export {};
