import React from 'react';
import { HeightProps, MarginProps, WidthProps } from 'styled-system';
declare type FitTypes = 'crop' | 'faces' | 'facearea';
export interface BaseImgixImageProps extends Pick<React.HTMLAttributes<HTMLImageElement>, 'onLoad'> {
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
export interface ImgixImageProps extends BaseImgixImageProps, MarginProps, WidthProps, HeightProps {
}
declare const ImgixImage: import("styled-components").StyledComponent<({ width, height, ...props }: any) => JSX.Element, any, ImgixImageProps, never>;
export default ImgixImage;
