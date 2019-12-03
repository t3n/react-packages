/// <reference types="react" />
import { MarginProps } from 'styled-system';
declare type FitTypes = 'crop' | 'faces' | 'facearea';
export interface ImageProps extends MarginProps {
    alt: string;
    src: string;
    sizes?: string;
    width?: number;
    height?: number;
    disableSrcSet?: boolean;
    className?: string;
    processConfiguration?: {
        fit?: FitTypes;
        facepad?: number;
        quality?: number;
        aspectRatio?: string;
        crop?: string;
    };
}
export declare const Image: {
    ({ width, height, src, alt, disableSrcSet, processConfiguration, className, ...rest }: ImageProps): JSX.Element;
    defaultProps: {
        className: string;
    };
};
export {};
