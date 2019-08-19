/// <reference types="react" />
interface ImageProps {
    alt: string;
    src: string;
    width?: string;
    height?: string;
    processConfiguration?: {
        fit?: 'crop';
        quality?: number;
        aspectRatio?: string;
    };
}
export declare const Image: {
    ({ width, height, src, processConfiguration }: ImageProps): JSX.Element;
    defaultProps: {
        width: string;
        height: string;
    };
};
export {};
