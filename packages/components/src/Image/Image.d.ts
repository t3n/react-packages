import React from 'react';
import { HeightProps, WidthProps } from 'styled-system';
export interface OptimizationClassMapping {
    [key: string]: string;
}
export interface FastlyHostnameMapping {
    [key: string]: string;
}
export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'sizes' | 'width' | 'height'> {
    src: string;
    sizes?: string | Array<string | number>;
    placeholder?: boolean;
    lazy?: boolean;
    optimizationClass?: string;
    classMapping?: OptimizationClassMapping;
    width?: WidthProps['width'];
    height?: HeightProps['height'];
    imageWidth?: number;
    imageHeight?: number;
}
declare const Image: React.FC<ImageProps>;
export default Image;
