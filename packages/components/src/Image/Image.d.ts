import React from 'react';
import { HeightProps, SpaceProps, WidthProps } from 'styled-system';
import { Theme } from '@t3n/theme';
import { CdnComponentsConfiguration } from '../hooks/useComponentsConfiguration';
export type OptimizationClassMapping = Record<string, string>;
export type FastlyHostnameMapping = Record<string, string>;
export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'sizes' | 'width' | 'height'>, SpaceProps {
    src: string;
    sizes?: string | number | (string | number)[];
    placeholder?: boolean;
    lazy?: boolean;
    optimizationClass?: string;
    classMapping?: OptimizationClassMapping;
    width?: WidthProps['width'];
    height?: HeightProps['height'];
    imageWidth?: number;
    imageHeight?: number;
}
export declare const transparentPlaceholderImageDataUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
export declare const defaultOptimizationClassMapping: OptimizationClassMapping;
export declare const testIsFastlyUrl: (url: string, cdnConfiguration: CdnComponentsConfiguration) => boolean;
export declare const generateFastlySrc: (src: string, imageClass: string, cdnConfiguration: CdnComponentsConfiguration) => string;
export declare const generateSrcSet: (src: string, optimizationClassMapping: OptimizationClassMapping, cdnConfiguration: CdnComponentsConfiguration) => string | undefined;
export declare const generatePlaceholderSrc: (src: string, cdnConfiguration: CdnComponentsConfiguration) => string;
export declare const generateSizesAttribute: (sizes: ImageProps["sizes"], theme: Theme) => string | undefined;
declare const Image: ({ placeholder, lazy, optimizationClass, classMapping, src, srcSet, sizes, width, height, imageWidth, imageHeight, ...props }: ImageProps) => import("react/jsx-runtime").JSX.Element;
export default Image;
