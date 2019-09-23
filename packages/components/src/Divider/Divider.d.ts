/// <reference types="react" />
import { BackgroundColorProps, SizeProps } from 'styled-system';
export declare type DividerVariants = 'primary' | 'secondary' | 'inverse' | 'highlight';
export interface DividerProps extends SizeProps, BackgroundColorProps {
}
export declare const Divider: {
    (props: DividerProps): JSX.Element;
    defaultProps: {
        backgroundColor: string;
        width: number;
        height: string;
    };
};
