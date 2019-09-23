import React from 'react';
import Imgix from 'react-imgix';

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

export const Image = ({
  width,
  height,
  src,
  alt,
  processConfiguration,
  className
}: ImageProps) => {
  return (
    <Imgix
      src={src}
      imgixParams={{
        fit: processConfiguration && processConfiguration.fit,
        q: processConfiguration && processConfiguration.quality,
        ar: processConfiguration && processConfiguration.aspectRatio,
        h: height,
        w: width
      }}
      disableSrcSet
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
  width: '150',
  height: 'auto',
  className: {}
};
