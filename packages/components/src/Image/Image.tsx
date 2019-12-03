import React from 'react';
import Imgix from 'react-imgix';

type FitTypes = 'crop' | 'faces' | 'facearea';
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

export const Image = ({
  width,
  height,
  src,
  alt,
  disableSrcSet = false,
  processConfiguration,
  className
}: ImageProps) => {
  // todo filter
  const params: { [key: string]: any } = {
    fit: processConfiguration && processConfiguration.fit,
    q: processConfiguration && processConfiguration.quality,
    crop: processConfiguration && processConfiguration.crop,
    facepad: processConfiguration && processConfiguration.facepad,
    ar: processConfiguration && processConfiguration.aspectRatio,
    h: height,
    w: width
  };

  Object.keys(params).forEach(key => {
    if (!params[key]) {
      delete params[key];
    }
  });

  return (
    <Imgix
      src={src}
      imgixParams={params}
      disableSrcSet={disableSrcSet}
      width={width}
      height={height}
      htmlAttributes={{
        alt
      }}
      className={className}
    />
  );
};

Image.defaultProps = {
  width: 150,
  className: ''
};
