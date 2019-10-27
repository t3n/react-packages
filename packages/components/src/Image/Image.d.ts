export interface ImageProps {
    alt: string;
    src: string;
    width?: string;
    height?: string;
    className?: string;
    processConfiguration?: {
        fit?: 'crop';
        quality?: number;
        aspectRatio?: string;
    };
}
export declare const Image: {
    ({ width, height, src, alt, processConfiguration, className }: ImageProps): JSX.Element;
    defaultProps: {
        width: string;
        height: string;
        className: {};
    };
};
