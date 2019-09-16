/// <reference types="react" />
import { BackgroundColorProps } from 'styled-system';
import { BoxProps } from '../Box/Box';
export declare type DividerVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';
interface DividerProps extends Pick<BoxProps, 'width'>, BackgroundColorProps {
}
export declare const Divider: {
    (props: DividerProps): JSX.Element;
    defaultProps: {
        width: number;
    };
};
export {};
