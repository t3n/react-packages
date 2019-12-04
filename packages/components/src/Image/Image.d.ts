import React from 'react';
import { MarginProps, WidthProps, HeightProps } from 'styled-system';
declare type FitTypes = 'crop' | 'faces' | 'facearea';
export interface BaseImageProps extends Pick<React.HTMLAttributes<HTMLImageElement>, 'onLoad'> {
    alt: string;
    src: string;
    sizes?: string;
    disableSrcSet?: boolean;
    className?: string;
    processConfiguration?: {
        fit?: FitTypes;
        facepad?: number;
        quality?: number;
        aspectRatio?: string;
        crop?: string;
        width?: number;
        height?: number;
    };
    style?: React.CSSProperties;
}
export interface ImageProps extends BaseImageProps, MarginProps, WidthProps, HeightProps {
}
export declare const Image: import("styled-components").StyledComponent<({ width, height, ...props }: any) => JSX.Element, any, ImageProps, never>;
export {};
