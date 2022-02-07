import React from 'react';
import { HeightProps, SpaceProps, WidthProps } from 'styled-system';
export interface OptimizationClassMapping {
    [key: string]: string;
}
export interface FastlyHostnameMapping {
    [key: string]: string;
}
export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'sizes' | 'width' | 'height'>, SpaceProps {
    src: string;
    sizes?: string | number | Array<string | number>;
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
