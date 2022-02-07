import React from 'react';
import { HeightProps, WidthProps } from 'styled-system';
export interface OptimizationClassMapping {
    [key: string]: string;
}
export interface FastlyHostnameMapping {
    [key: string]: string;
}
export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'sizes'> {
    src: string;
    sizes?: string | Array<string | number>;
    placeholder?: boolean;
    lazy?: boolean;
    optimizationClass?: string;
    classMapping?: OptimizationClassMapping;
    displayWidth?: WidthProps['width'];
    displayHeight?: HeightProps['height'];
}
declare const Image: React.FC<ImageProps>;
export default Image;
