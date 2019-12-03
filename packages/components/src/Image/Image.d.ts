/// <reference types="react" />
declare type FitTypes = 'crop' | 'faces' | 'facearea';
export interface ImageProps {
    alt: string;
    src: string;
    sizes?: string;
    width?: number;
    height?: number;
    disableSrcSet?: boolean;
    className?: string;
    quality: number;
    processConfiguration?: {
        fit?: FitTypes;
        facepad?: number;
        quality?: number;
        aspectRatio?: string;
        crop?: string;
    };
}
export declare const Image: {
    ({ width, height, src, alt, disableSrcSet, processConfiguration, className }: ImageProps): JSX.Element;
    defaultProps: {
        width: number;
        className: string;
    };
};
export {};
